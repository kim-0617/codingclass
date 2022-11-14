// 선택자
const tetrisWrap = document.querySelector(".tetris__wrap");
const playGround = tetrisWrap.querySelector(".playground > ul");
const TstartBtn = tetrisWrap.querySelector(".tetris__start");
const Tmsg = tetrisWrap.querySelector(".tetris__msg");
const Ttime = tetrisWrap.querySelector(".tetris__time span");
const TscoreWrite = document.querySelector(".tetirs__score span");
const Tnext = document.querySelector(".tetirs__next img");

// 변수설정
let rows = 12; // 가로줄 만들기
let cols = 20; // 세로줄 만들기
let Tscore = 0;
let duration = 500;
let downInterval;
let tempMovingItem;
let tID = 0;
let tID2 = 0;
let gameover = false;
let tetirsTimer = 0;
const p = []; // 미리준비
let nextMovingItem = "";

let Tsound = [
  "../asset/audio/02.mp3",
  "../asset/audio/match.mp3",
  "../asset/audio/unmatch.mp3",
];
let TsoundBg = new Audio(Tsound[0]);
let TsoundMatch = new Audio(Tsound[1]);
let TsoundUnMatch = new Audio(Tsound[2]);

// 블록정보
let movingItem = {
  type: "",
  direction: 0, // 블록 모양
  top: 0,
  left: 0,
};

// 블록의 좌표값
const blocks = {
  Tmino: [
    [
      [2, 1],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [1, 2],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [1, 2],
      [0, 1],
      [2, 1],
      [1, 1],
    ],
    [
      [2, 1],
      [1, 2],
      [1, 0],
      [1, 1],
    ],
  ],
  Imino: [
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
    ],
  ],
  Omino: [
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
  ],
  Zmino: [
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [2, 1],
    ],
    [
      [1, 0],
      [0, 1],
      [1, 1],
      [0, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [2, 1],
    ],
    [
      [1, 0],
      [0, 1],
      [1, 1],
      [0, 2],
    ],
  ],
  Smino: [
    [
      [1, 0],
      [2, 0],
      [0, 1],
      [1, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 2],
    ],
    [
      [1, 0],
      [2, 0],
      [0, 1],
      [1, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 2],
    ],
  ],
  Jmino: [
    [
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [2, 1],
    ],
  ],
  Lmino: [
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [0, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 0],
      [2, 1],
    ],
  ],
};

// 시작하기
function init() {
  미리준비();
  gameover = false;
  Tscore = 0;
  TscoreWrite.textContent = 0;
  TsoundBg.play();
  playGround.innerHTML = "";
  tempMovingItem = { ...movingItem };
  for (let i = 0; i < rows; i++) {
    prependNewLine(); // 라인 만들기
  }
  generateNewBlock(); // 블럭만들기

  TstartBtn.removeEventListener("click", init);
  Tmsg.classList.remove("show");

  tID2 = setInterval(() => {
    tetirsTimer++;
    Ttime.textContent = tetirsTimer;
  }, 1000);
}

// 블록 만들기
function prependNewLine() {
  const li = document.createElement("li");
  const ul = document.createElement("ul");
  for (let j = 0; j < cols; j++) {
    const matrix = document.createElement("li");

    ul.prepend(matrix);
  }

  li.prepend(ul);
  playGround.prepend(li);
}

// 블록 출력하기
function renderBlocks(moveType = "") {
  if (gameover) return;
  const { type, direction: dir, left, top } = tempMovingItem;
  const movingBlocks = document.querySelectorAll(".moving");
  movingBlocks.forEach((moving) => {
    moving.classList.remove(type, "moving");
  });

  blocks[type][dir].some((block) => {
    const x = block[0] + left;
    const y = block[1] + top;

    target = playGround.children[y]
      ? playGround.children[y].children[0].children[x]
      : null;
    const isAvailable = checkEmpty(target);

    if (isAvailable) {
      target.classList.add(type, "moving");
    } else {
      // 끝에 닿았다
      tempMovingItem = { ...movingItem };
      tID = setTimeout(() => {
        renderBlocks();
        if (moveType === "left") {
          clearTimeout(tID);
          seizeBlock();
        }
      }, 0);
      return true;
    }
  });

  movingItem.left = left;
  movingItem.top = top;
  movingItem.direction = dir;
}

// 블록 감지하기
function seizeBlock() {
  clearTimeout(tID);
  const movingBlocks = document.querySelectorAll(".moving");
  movingBlocks.forEach((moving) => {
    moving.classList.remove("moving");
    moving.classList.add("seized");
  });

  // 겜 졌는가 판단
  checkLose();

  // 점수 계산
  checkMatch();
}

// 졌는가
function checkLose() {
  const childNodes = playGround.querySelectorAll(
    ".append>li>ul>li:first-child"
  );
  console.log(childNodes);
  childNodes.forEach((ch) => {
    if (ch.classList.contains("seized")) {
      gameover = true;
      TsoundUnMatch;
      clearInterval(tID2);
      tetirsTimer = 0;
      Ttime.textContent = 0;
      duration = 500;
      Tnext.setAttribute("src", `../asset/tetris/TD.png`);
    }
  });
}

// 한줄 제거하기
function checkMatch() {
  const childNodes = Array.from(playGround.children);
  const 옆테트리스 = [];
  for (let i = 0; i < cols; i++) {
    옆테트리스.push([]);
  }

  let matched = true;
  childNodes.forEach((child) => {
    child.children[0].childNodes.forEach((li, index) => {
      옆테트리스[index].push(li);
      if (!li.classList.contains("seized")) {
        matched = false;
      }
    });
  });

  let target = 0;
  옆테트리스.forEach((li, index) => {
    let tmp = true;
    li.forEach((l) => {
      if (!l.classList.contains("seized")) {
        tmp = false;
      }
    });

    if (tmp) {
      matched = true;
      target = index;
      return false;
    }
  });

  if (matched) {
    console.log("맞았다 맞았다 아이고");

    옆테트리스[target].forEach((li, index) => {
      li.remove();
    });
    옆테트리스[0].forEach((li, index) => {
      const newLi = document.createElement("li");
      newLi.classList.add("added");
      li.before(newLi);
    });

    Tscore++;
    duration -= 50;
    TsoundMatch.play();
    TscoreWrite.textContent = Tscore;
  }
  옆테트리스.length = 0;
  generateNewBlock();
}

function 미리준비() {
  const tmpObj = {};
  const blockArray = Object.entries(blocks);
  const randomIndex = Math.floor(Math.random() * blockArray.length);
  tmpObj.type = blockArray[randomIndex][0];
  tmpObj.left = 0;

  if (tmpObj.type !== "Omino")
    tmpObj.top = Math.floor(Math.random() * (rows - 3));
  else tmpObj.top = Math.floor(Math.random() * (rows - 2));

  tmpObj.direction = 0;

  p.push(tmpObj);
}

// 새로운 블럭 만들기
function generateNewBlock() {
  if (gameover) {
    TsoundBg.pause();
    Tmsg.classList.add("show");
    Tmsg.innerHTML = `
       당신의 점수는 ${Tscore}점 입니다. <br>
       다시 시작하려면 <br>
       시작 버튼을 눌러주세요.
      `;
    TstartBtn.addEventListener("click", init);
    return;
  }

  clearInterval(downInterval);
  downInterval = setInterval(() => {
    moveBlock("left", 1);
  }, duration);

  movingItem = { ...p[0] };
  tempMovingItem = { ...movingItem };
  renderBlocks();

  p.shift();
  미리준비();
  nextMovingItem = p[0].type;
  Tnext.setAttribute("src", `../asset/tetris/${nextMovingItem}.png`);
}

// 빈칸 확인하기
function checkEmpty(target) {
  if (!target || target.classList.contains("seized")) {
    return;
  }
  return true;
}

// 블록 움직이기
function moveBlock(moveType, amount) {
  tempMovingItem[moveType] += amount;
  renderBlocks(moveType);
}

// 방향 바꾸기
function changeDirection() {
  const direction = tempMovingItem.direction;
  direction === 3 ? (tempMovingItem.direction = 0) : tempMovingItem.direction++;
  renderBlocks();
}

// 빨리 내리기
function dropBlock() {
  clearInterval(downInterval);
  downInterval = setInterval(() => {
    moveBlock("left", 1);
  }, 10);
  renderBlocks();
}

// 이벤트
document.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 32:
      dropBlock();
      break;
    case 37: // 왼쪽
      changeDirection();
      break;

    case 38: // 위
      moveBlock("top", -1);
      break;

    case 39: // 오른쪽
      moveBlock("left", 1);
      break;

    case 40: // 밑
      moveBlock("top", 1);
      break;

    default:
      break;
  }
});

TstartBtn.addEventListener("click", init);
