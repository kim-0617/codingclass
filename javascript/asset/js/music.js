const allMusic = [
    {
        name: "1번째 음악",
        artist: "1번째 아티스트",
        img: `../asset/img/song.png`,
        audio: `../asset/audio/01.mp3`,
    },
    // 01

    {
        name: "2번째 음악",
        artist: "2번째 아티스트",
        img: `../asset/img/song${2}.png`,
        audio: `../asset/audio/02.mp3`,
    },
    // 02

    {
        name: "3번째 음악",
        artist: "3번째 아티스트",
        img: `../asset/img/song${3}.png`,
        audio: `../asset/audio/03.mp3`,
    },
    // 03

    {
        name: "4번째 음악",
        artist: "4번째 아티스트",
        img: `../asset/img/song${4}.png`,
        audio: `../asset/audio/04.mp3`,
    },
    // 04

    {
        name: "5번째 음악",
        artist: "5번째 아티스트",
        img: `../asset/img/song${5}.png`,
        audio: `../asset/audio/05.mp3`,
    },
    // 05

    {
        name: "6번째 음악",
        artist: "6번째 아티스트",
        img: `../asset/img/song${6}.png`,
        audio: `../asset/audio/06.mp3`,
    },
    // 06

    {
        name: "7번째 음악",
        artist: "7번째 아티스트",
        img: `../asset/img/song${7}.png`,
        audio: `../asset/audio/07.mp3`,
    },
    // 07

    {
        name: "8번째 음악",
        artist: "8번째 아티스트",
        img: `../asset/img/song${8}.png`,
        audio: `../asset/audio/08.mp3`,
    },
    // 08

    {
        name: "9번째 음악",
        artist: "9번째 아티스트",
        img: `../asset/img/song${9}.png`,
        audio: `../asset/audio/09.mp3`,
    },
    // 09

    {
        name: "10번째 음악",
        artist: "10번째 아티스트",
        img: `../asset/img/song${10}.png`,
        audio: `../asset/audio/10.mp3`,
    },
    // 10
];

const musicWrap = document.querySelector('.music__wrap');
const musicView = musicWrap.querySelector('.music__view .img img');
const musicName = musicWrap.querySelector('.music__view .title h3');
const musicArtist = musicWrap.querySelector('.music__view .title p');
const musicAudio = musicWrap.querySelector('#main__audio');
const musicPlay = musicWrap.querySelector('#control__play');
const musicPrevBtn = musicWrap.querySelector('#control__prev');
const musicNextBtn = musicWrap.querySelector('#control__next');
const musicRepeat = musicWrap.querySelector('#control__repeat');
const musicListBtn = musicWrap.querySelector('#control__list');
const musicProgress = musicWrap.querySelector('.progress');
const musicProgressBar = musicWrap.querySelector('.music__control .progress .bar');
const musicCurrent = musicWrap.querySelector('.progress .timer .current');
const musicDuration = musicWrap.querySelector('.progress .timer .duration');
const musicList = musicWrap.querySelector('.music__list');
const musicListUl = musicWrap.querySelector('.music__list ul');
const listCloseBtn = musicWrap.querySelector('.music__list .close');
const musicVolume = musicWrap.querySelector('.music__control .volume');
const musicVolumeBar = musicWrap.querySelector('.music__control .volume .volume__bar');

let musicIndex = 1;

// 음악 재생
function loadMusic(num) {
    // console.log("음악재생", num);
    musicName.innerText = allMusic[num - 1].name;
    musicArtist.innerText = allMusic[num - 1].artist;
    musicView.src = allMusic[num - 1].img;
    musicView.alt = allMusic[num - 1].name;
    musicAudio.src = allMusic[num - 1].audio;
    musicAudio.alt = allMusic[num - 1].name;
}

// 재생 버튼
function playMusic() {
    musicWrap.classList.add('paused');
    musicPlay.setAttribute("title", "정지");
    musicPlay.setAttribute("class", "stop");
    musicAudio.play();
}

// 정지 버튼
function pauseMusic() {
    musicWrap.classList.remove('paused');
    musicPlay.setAttribute("title", "재생");
    musicPlay.setAttribute("class", "play");
    musicAudio.pause();
}

// 이전 곡 듣기 버튼
function prevMusic() {
    // 01
    // musicIndex === 1 ? musicIndex = allMusic.length : musicIndex--;

    // 02
    musicIndex--
    if(musicIndex < 1) musicIndex = allMusic.length;
    
    // console.log("이전 곡", musicIndex);
    loadMusic(musicIndex);
    playMusic();
    playListMusic();
}

// 다음 곡 듣기 버튼
function nextMusic() {
    // 01
    musicIndex === allMusic.length ? musicIndex = 1 : musicIndex++;

    // 02
    // musicIndex = (musicIndex + 1) % (allMusic.length + 1) === 0 ? 1 : (musicIndex + 1) % (allMusic.length + 1);
    // console.log("다음 곡", musicIndex);
    loadMusic(musicIndex);
    playMusic();
    playListMusic();
}   

// 플레이 버튼
musicPlay.addEventListener('click', () => {
    // musicPlay.classList.toggle('play');
    // musicPlay.classList.toggle('stop');
    // if (musicPlay.classList.contains('play')) {
    //     playMusic();
    //     musicPlay.setAttribute('title', '재생');
    // }
    // else if (musicPlay.classList.contains('stop')) {
    //     pauseMusic();
    //     musicPlay.setAttribute('title', '정지');
    // }
    const isMusicPaused = musicWrap.classList.contains('paused');
    isMusicPaused ? pauseMusic() : playMusic();
    playListMusic();
});

// 이전곡
musicPrevBtn.addEventListener('click', () => {
    prevMusic();
});

// 다음곡 
musicNextBtn.addEventListener('click', () => {
    nextMusic();
});

// 뮤직 진행 바
musicAudio.addEventListener('timeupdate', (e) => {
    // console.log("timeupdate");
    const currentTime = e.target.currentTime; // 재생되는 시간
    const duration    = e.target.duration;    // 오디오 총 길이
    let progerssWidth = (currentTime / duration) * 100;

    musicProgressBar.style.width = `${progerssWidth}%`;

    // 전체 시간
    musicAudio.addEventListener('loadeddata', () => {
        // console.log("loadeddata");
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10) totalSec = `0${totalSec}`;
        musicDuration.innerText = `${totalMin} : ${totalSec}`;
    });

    // 진행 시간
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10) currentSec = `0${currentSec}`; 
    musicCurrent.innerText = `${currentMin} : ${currentSec}`;

    // 진행 버튼 클릭
    musicProgress.addEventListener('click', e => {
        let progressWidth = e.target.clientWidth; // 진행바 전체 길이
        let clickedOffsetX = e.offsetX;           // 진행바 기준으로 측정되는 X좌표
        let songDuration = musicAudio.duration;   // 오디오 전체 길이

        musicAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    });
});

// 반복 버튼 클릭
musicRepeat.addEventListener('click', () => {
    let getAttr = musicRepeat.getAttribute("class");
    // console.log("반복 버튼 클릭", getAttr);
    switch(getAttr) {
        case "repeat":
            musicRepeat.setAttribute("class", "repeat__one");
            musicRepeat.setAttribute("title", "한곡 반복");
            break;
        case "repeat__one":
            musicRepeat.setAttribute("class", "shuffle");
            musicRepeat.setAttribute("title", "랜덤 반복");
            break;
        case "shuffle":
            musicRepeat.setAttribute("class", "repeat");
            musicRepeat.setAttribute("title", "전체 반복");
            break;
        default:
            break;
    }
});

// 음량 버튼 클릭
musicVolume.addEventListener('click', e => {
    let volWidth = e.target.clientWidth; // 진행바 전체 길이
    let clickedOffsetX = e.offsetX;           // 진행바 기준으로 측정되는 X좌표
    let sound = (clickedOffsetX / volWidth);   // 오디오 전체 길이
    
    musicVolumeBar.style.width = `${sound * 100}%`;
    musicAudio.volume = sound;
});

// 오디오가 끝나면
musicAudio.addEventListener('ended', e => {
    let getAttr = musicRepeat.getAttribute('class');
    
    switch(getAttr) {
        case "repeat":
            // console.log("repeat 재생 실행", musicIndex);
            nextMusic();
            playListMusic();
            break;
        case "repeat__one":
            // console.log("repeat__one 재생 실행", musicIndex);
            playMusic();
            playListMusic();
            break;
        case "shuffle":
            // console.log("랜덤 재생 실행", musicIndex);
            let randomIndex = Math.floor(Math.random() * allMusic.length + 1);
            while(musicIndex === randomIndex) {
                randomIndex = Math.floor(Math.random() * allMusic.length + 1);
            }
            musicIndex = randomIndex;
            loadMusic(musicIndex);
            playMusic();
            playListMusic();
            break;
        default:
            break;
    }

    playMusic(); // 재생목록 업데이트
});

// 뮤직 리스트
musicListBtn.addEventListener('click', () => {
    musicList.classList.toggle('show');
});

// 뮤직 리스트 닫기 버튼
listCloseBtn.addEventListener('click', () => {
    musicList.classList.remove('show');
});

// 뮤직 리스트 구현하기
for(let i = 0; i < allMusic.length; i++) {
    let lis = `<li data-index=${i + 1}>
        <strong>${allMusic[i].name}</strong>
        <em>${allMusic[i].artist}</em>
        <audio class=${allMusic[i].audio.replace(/[\. || (audio) || (asset) || \/ || (mp3)]/gi, '')} src = ${allMusic[i].audio}></audio>
        <span class="audio-duration" id="${allMusic[i].name}">재생시간</span>
    </li>`;
    
    // 리스트에 음악 시간 불러오기

    // 01
    musicListUl.insertAdjacentHTML("beforeend", lis);
    let liAudioDuration = musicListUl.querySelectorAll('span'); // 리스트에서 시간을 표시할 선택자
    let liAudio = musicListUl.querySelectorAll('audio'); // 리스트에서 오디오를 가져옴
    liAudio[i].addEventListener('loadeddata', () => {
        let audioDuration = liAudio[i].duration; // 오디오 전체 길이
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10) totalSec = `0${totalSec}`;
        
        liAudioDuration[i].innerText = `${totalMin} : ${totalSec}`;
        liAudioDuration[i].setAttribute("data-duration", `${totalMin} : ${totalSec}`);
    });
    
    // 02
    // musicListUl.innerHTML += lis;
    // let liAudioDurationes = musicListUl.querySelectorAll(`span`); // 리스트에서 시간을 표시할 선택자
    // let liAudioes = musicListUl.querySelectorAll(`audio`); // 리스트에서 오디오를 가져옴
    // liAudioes.forEach((liAudio, idx) => {
    //     liAudio.addEventListener('loadeddata', () => {
    //         let audioDuration = liAudio.duration; // 오디오 전체 길이
    //         let totalMin = Math.floor(audioDuration / 60);
    //         let totalSec = Math.floor(audioDuration % 60);
    //         if(totalSec < 10) totalSec = `0${totalSec}`;
            
    //         liAudioDurationes[idx].innerText = `${totalMin} : ${totalSec}`;
    //         liAudioDurationes[idx].setAttribute("data-duration", `${totalMin} : ${totalSec}`);
    //     });
    // });

    // 뮤직 리스트를 클릭하면 재생
    function playListMusic() {
        const musicListAll = musicListUl.querySelectorAll('li'); // 뮤직 리스트 목록
        for(let i = 0; i < musicListAll.length; i++) {
            let audioTag = musicListAll[i].querySelector('.audio-duration');
            
            if(musicListAll[i].classList.contains('playing')) {
                musicListAll[i].classList.remove('playing');
                let adDuration = audioTag.getAttribute("data-duration");
                audioTag.textContent = adDuration;
            }
            
            if(musicListAll[i].getAttribute('data-index') == musicIndex) {
                musicListAll[i].classList.add('playing');
                audioTag.textContent = "재생중";
            }
            
            musicListAll[i].setAttribute('onclick', "clicked(this)");
        }
    }
    playListMusic();

    // 뮤직 리스트를 클릭하면
    function clicked(el) {
        let getLiIndex = el.getAttribute("data-index"); // 클릭한 리스트의 인덱스 값을 저장
        musicIndex = getLiIndex;
        // console.log("뮤직 리스트 클릭 ",musicIndex);
        loadMusic(musicIndex);
        playMusic();
        playListMusic();
    }
}

window.addEventListener("load", () => {
    loadMusic(musicIndex);
});