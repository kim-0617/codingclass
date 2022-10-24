const quizInfo = [
            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 1,
                answerAsk: "시각적 질감의 예로 성격이 다른 하나는?",
                answerChoice: {
                    1 : "사진의 망점",
                    2 : "인쇄상의 스크린 톤",
                    3 : "대리석 무늬",
                    4 : "모니터 주사선",
                },
                answerResult: "3",
                answerEx: "대리석 무늬가 아무래도 다르죠",
            },
            // 01

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 2,
                answerAsk: "조형디자인에서 점, 선, 면 등이 연장, 발전되고 밀접한 관계에서 이루어지는 조형디자인 요소는?",
                answerChoice: {
                    1 : "형태",
                    2 : "색체",
                    3 : "크기",
                    4 : "질감",
                },
                answerResult: "1",
                answerEx: "점 선 면이 모여서 형태를 이루겠죠?",
            },
            // 02

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 3,
                answerAsk: "색채의 연상과 상징이 맞게 연결된 것은?",
                answerChoice: {
                    1 : "빨강 : 열, 위험, 자극적, 고요함",
                    2 : "노랑 : 금발, 경쾌, 떠들썩함, 바다",
                    3 : "녹색 : 평화, 안전, 휴식",
                    4 : "보라 : 외로움, 고귀함, 허무, 장례식",
                },
                answerResult: "3",
                answerEx: "빨강은 고요하지 않고, 노랑은 바다가 아닙니다, 보라도 장례식은 아닙니다.",
            },
            // 03

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 4,
                answerAsk: "독일공장연맹(DWB)에 대한 설명으로 옳은 것은?",
                answerChoice: {
                    1 : "유겐트(Jugend)라는 신문을 중심으로 양식이 전개되면서 청춘양식이라고 불렸다.",
                    2 : "이들의 새로운 조형운동은 권위적이고 세속적인 과거의 모든 양식으로부터의 분리를 주장하였다.",
                    3 : "대표적인 작가로 구스타프클럼트, 요셉 호프만 등이다.",
                    4 : "창립의 중심인물은 무테지우스이며 공업문명을 중심으로 조형을 발전시키고자 하였다",
                },
                answerResult: "4",
                answerEx: "독일공장연맹(DWB) => 헤르만 무테지우스 외우세요.",
            },
            // 04

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 5,
                answerAsk: "균형의 가장 정형적인 구성 형식이며, 균형이 잘 잡힌 상태로 통일감을 얻기 쉬우나 딱딱한 느낌을 주는 원리는?",
                answerChoice: {
                    1 : "대칭",
                    2 : "비대칭",
                    3 : "비례",
                    4 : "주도",
                },
                answerResult: "1",
                answerEx: "균형이 잘 잡히고 통일감이 있는건 대칭이죠",
            },
            // 05
            
            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 6,
                answerAsk: "서로 다른 색끼리의 영향으로 인하여 밝은 색은 더 밝게 어두운 색은 더 어둡게 보이는 대비는?",
                answerChoice: {
                    1 : "색상대비",
                    2 : "명도대비",
                    3 : "채도대비",
                    4 : "계시대비",
                },
                answerResult: "2",
                answerEx: "어둡고 밝다라는 언급은 명도를 의심하셔야 됩니다.",
            },
            // 06
            
            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 7,
                answerAsk: "디자인 원리 중 율동(Rhythm)에 해당하지 않는 것은?",
                answerChoice: {
                    1 : "비례",
                    2 : "반복",
                    3 : "강조",
                    4 : "점이",
                },
                answerResult: "1",
                answerEx: "율동의 효과는 강한 힘과 약한 힘이 '규칙적'으로 생겨나는 '움직임' 입니다. 비례랑은 상관없습니다.",
            },
            // 07

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 8,
                answerAsk: "어둠이 시작될 때 물체의 상이 흐리게 나타나는 현상과 가장 관계가 깊은 것은?",
                answerChoice: {
                    1 : "색순응",
                    2 : "푸르킨예 현상",
                    3 : "박명시",
                    4 : "조건등색",
                },
                answerResult: "3",
                answerEx: "명순응은 어두운 -> 밝은곳 갈 때 눈의 적응 암순응은 밝은 -> 어두운 곳 갈 때 눈의 적응입니다. 박명시란 그 중간에 눈의 적응입니다. 그 상태에선 물체가 흐리게 보여요",
            },
            // 08

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 9,
                answerAsk: "색채조화의 공통원리에 관한 설명으로 틀린 것은?",
                answerChoice: {
                    1 : "질서의 원리는 효과적인 반응을 일으키는 질서 있는 계획에 따라 선택된 색채들에서 생긴다.",
                    2 : "비모호성의 원리는 두 색 이상의 배색에 있어서 모호함이 없는 명료한 배색에서만 얻어진다.",
                    3 : "동류의 원리는 가장 가까운 색채끼리의 배색은 보는 사람에게 친근감을 주며 조화를 느끼게 한다.",
                    4 : "친근성의 원리는 배색된 색채들이 서로 공통되는 상태와 속성을 가질 때 그 색채는 조화된다.",
                },
                answerResult: "4",
                answerEx: "친근성이란 관찰자에게 친숙해있는 배색이 잘 조화를 이룬다.",
            },
            // 09

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 10,
                answerAsk: "모든 사물은 구, 원기둥 및 원뿔 형태와 같은 기하학적 형태로 구성되어 있다고 주장한 사람은?",
                answerChoice: {
                    1 : "파파넥",
                    2 : "고흐",
                    3 : "세잔",
                    4 : "오장팡",
                },
                answerResult: "3",
                answerEx: "세잔이 그랬습니다. 세잔은 큐비즘(입체파) 대표적인 인물이죠",
            },
            // 10

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 11,
                answerAsk: "스파트(spot) 광고에 대한 설명이 옳은 것은?",
                answerChoice: {
                    1 : "전국 방송망으로 방송국에서 전국에 실시하는 광고",
                    2 : "일정시간을 정해 30초 CM 10개를 계속 방송하는 형태",
                    3 : "지역 방송국에 제한되어 방송하는 것",
                    4 : "프로그램과 프로그램 사이에 광고를 삽입하는 것",
                },
                answerResult: "4",
                answerEx: "기억해주세요 spot 광고란 '라디오나 텔레비전 방송에서, 프로그램 사이 또는 프로그램 진행 중에 아주 짧게 나가는 광고' 입니다.",
            },
            // 11
            
            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 12,
                answerAsk: "빨간색이 가장 선명하고 뚜렷해 보일 수 있는 배경색으로 적합한 것은?",
                answerChoice: {
                    1 : "주황",
                    2 : "노랑",
                    3 : "회색",
                    4 : "보라",
                },
                answerResult: "3",
                answerEx: "이거 제가 주관식문제에도 냈던 문제인데 틀리신분 없으시죠?",
            },
            // 12

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 13,
                answerAsk: "디자인 원리 중 균형(balance)에 해당하지 않는 것은?",
                answerChoice: {
                    1 : "대칭",
                    2 : "비례",
                    3 : "율동",
                    4 : "주도와 종속",
                },
                answerResult: "3",
                answerEx: "율동은 다른 파트의 원리입니다. 나머지는 다 균형에 포함된 느낌이죠?",
            },
            // 13

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 14,
                answerAsk: "색의 온도감에 대한 설명으로 틀린 것은?",
                answerChoice: {
                    1 : "색을 통해 따뜻함, 차가움, 중간의 온도 등을 느낄 수 있는 것을 말한다.",
                    2 : "색상은 느껴지는 감각에 따라 난색, 한색, 중성색으로 나뉜다.",
                    3 : "난색에는 빨간색과 노란색, 한색에는 녹색과 파란색 등이 있다.",
                    4 : "중성색에는 연두색, 자주색 등이 있다.",
                },
                answerResult: "3",
                answerEx: "녹색은 중성색 계열입니다.",
            },
            // 14

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 15,
                answerAsk: "다음 중 굿 디자인(Good Design)의 조건이 아닌 것은?",
                answerChoice: {
                    1 : "심미성",
                    2 : "독창성",
                    3 : "대중성",
                    4 : "경제성",
                },
                answerResult: "3",
                answerEx: "굿디자인 4가지 외우세요 : 심미성, 독창성, 합목적성, 경제성 입니다.",
            },
            // 15

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 16,
                answerAsk: "연두, 녹색, 보라, 자주 등은 때로는 차갑게도 때로는 따뜻하게도 느껴질 수 있다. 이러한 색들을 무슨 색이라 하는가?",
                answerChoice: {
                    1 : "무채색",
                    2 : "중성색",
                    3 : "유채색",
                    4 : "순색",
                },
                answerResult: "2",
                answerEx: "아까 연두, 녹색이 중성색이라고 언급드렸죠?.",
            },
            // 16

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 17,
                answerAsk: "디자인의 통일성에 영향을 미치는 요소와 거리가 가장 먼 것은?",
                answerChoice: {
                    1 : "각 요소들을 근접시킨다.",
                    2 : "각 요소들을 반복시킨다.",
                    3 : "각 요소들을 연속시킨다.",
                    4 : "각 요소들을 분리시킨다.",
                },
                answerResult: "4",
                answerEx: "근접,반복,연속은 비슷한 느낌인데 분리에서 좀 쎄하지 않나요?",
            },
            // 17

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 18,
                answerAsk: "먼셀의 표색계에서 색상을 표시하는 기호로 맞는 것은?",
                answerChoice: {
                    1 : "C/HV",
                    2 : "HC/V",
                    3 : "HV/C",
                    4 : "CV/G",
                },
                answerResult: "3",
                answerEx: "외우세요 HV/C 5R4/14이면 5단계 빨강색, 명도는4 채도는 14에요.",
            },
            // 18

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 19,
                answerAsk: "신문광고의 구성요소 중 조형적 요소가 아닌 것은?",
                answerChoice: {
                    1 : "헤드라인",
                    2 : "일러스트레이션",
                    3 : "심볼 마크",
                    4 : "보더 라인",
                },
                answerResult: "1",
                answerEx: "?",
            },
            // 19

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 20,
                answerAsk: "가시광선에 대한 설명으로 틀린 것은?",
                answerChoice: {
                    1 : "빛의 파장 중 380nm에서 780nm 사이의 범위로 눈으로 지각되는 영역을 말한다.",
                    2 : "백색광이 프리즘을 통해 나타나는 색띠를 말한다.",
                    3 : "라디오나 텔레비전, 휴대폰의 파장범위를 포함한다.",
                    4 : "전자기파 스펙트럼이라고도 한다.",
                },
                answerResult: "3",
                answerEx: "라디오나 텔레비전은 훨씬 파장이 낮습니다.",
            },
            // 20

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 21,
                answerAsk: "HTML 작성 시 프레임(Frame)의 크기를 설정하기 위한 방법이 아닌 것은?",
                answerChoice: {
                    1 : "백분율로 구분하는 방법",
                    2 : "픽셀 수로 설정하는 방법",
                    3 : "파일 크기로 설정하는 방법",
                    4 : "상대 비율로 설정하는 방법",
                },
                answerResult: "3",
                answerEx: "%, px, vw 같은 단위 배웠었죠? 파일 크기로 설정하는 방법은 처음들어봅니다.",
            },
            // 21

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 22,
                answerAsk: "웹서버의 일반적인 동작 과정으로 옳은 것은?",
                answerChoice: {
                    1 : "연결설정→클라이언트가 정보요청→서버의 응답→연결종료",
                    2 : "연결설정→서버의 응답→클라이언트가 정보요청→연결종료",
                    3 : "클라이언트가 정보요청→연결설정→서버의 응답→연결종료",
                    4 : "클라이언트가 정보요청→서버의 응답→연결설정→연결종료",
                },
                answerResult: "1",
                answerEx: "연결을 설정해야 연결이 되겠죠? 정보를 요청해야 응답을 할 수 가 있겠습니다.",
            },
            // 22

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 23,
                answerAsk: "하나의 회선을 다수의 아주 짧은 시간 간격으로 분할하여 다중화 하는 전송 방식은?",
                answerChoice: {
                    1 : "FCM",
                    2 : "TDM",
                    3 : "CSM",
                    4 : "FDD",
                },
                answerResult: "2",
                answerEx: "시분할 다중화 (Time-division multiplexing), 시분할 다중화란 전송로를 점유하는 시간을 분할하여 한 개의 전송로에 여러 개의 가상 경로를 구성하는 통신 방식이다.",
            },
            // 23

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 24,
                answerAsk: "컴퓨터 그래픽에서 객체의 위치를 정확히 표현하기 위한 좌표계 중 좌표 위에 있는 점과 원점으로 규정하는 기준점과의 거리와 각도의 크기에 따라 좌표를 정의하는 좌표계는?",
                answerChoice: {
                    1 : "2차원 그래픽 좌표계",
                    2 : "3차원 그래픽 좌표계",
                    3 : "직교 좌표계",
                    4 : "극 좌표계",
                },
                answerResult: "4",
                answerEx: "?",
            },
            // 24

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 25,
                answerAsk: "자바스크립트의 함수 중 사용자로부터 임의의 문자를 입력받기 위한 창을 화면에 띄워 입력한 문자열을 사용할 수 있도록 하는 것은?",
                answerChoice: {
                    1 : "prompt()",
                    2 : "escape()",
                    3 : "confirm()",
                    4 : "alert()",
                },
                answerResult: "1",
                answerEx: "prompt() 쓰면 입력창이 나옵니다. confirm()은 예 아니오 느낌의 메서드 입니다.",
            },
            // 25

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 26,
                answerAsk: "자바스크립트의 산술연산자 중 X % Y의 설명으로 옳은 것은?",
                answerChoice: {
                    1 : "X를 Y로 나눈 뒤에 그 나머지를 구한다.",
                    2 : "X를 Y로 나눈 뒤에 그 몫을 구한다.",
                    3 : "X를 Y로 나는 뒤에 그 나머지를 1만큼 증가시킨다.",
                    4 : "X를 Y로 나눈 뒤에 그 몫을 1만큼 증가시킨다.",
                },
                answerResult: "1",
                answerEx: "%연산자는 나머지를 구하는 연산자죠?",
            },
            // 26

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 27,
                answerAsk: "인터넷 익스플로러 6.0에서 [도구]-[인터넷 옵션]-[내용] 탭에서 설정할 수 있는 것은?",
                answerChoice: {
                    1 : "쿠키 편집",
                    2 : "언어 추가",
                    3 : "게시자",
                    4 : "HTML 편집",
                },
                answerResult: "3",
                answerEx: "?",
            },
            // 27

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 28,
                answerAsk: "개방형 시스템의 상호접속을 위한 참조모델로 ISO에서 제정한 것은?",
                answerChoice: {
                    1 : "OSI 7 Layer",
                    2 : "Kermit",
                    3 : "Proxy",
                    4 : "Archie",
                },
                answerResult: "1",
                answerEx: "ISO osi 7 layer, iso -> osi 외워주세요",
            },
            // 28

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 29,
                answerAsk: "웹 브라우저의 주소창에 URL을 잘못 입력한 것은?",
                answerChoice: {
                    1 : "http://www.abc.or.kr",
                    2 : "webamil://abc123@abc.co.kr",
                    3 : "ftp://ftp.abc.com",
                    4 : "file:///c:\abc.hwp",
                },
                answerResult: "2",
                answerEx: "스펠링이 이상하죠? webamil 이게 뭔지 저도 모르겠습니다.",
            },
            // 29

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 30,
                answerAsk: "가인터넷에서 사용되는 서비스 중 파일 전송 프로토콜로서 원격 호스트에 대해 파일을 송수신하는 것은?나다",
                answerChoice: {
                    1 : "PPP(Point to Point Protocol)",
                    2 : "FTP(File Transfer Protocol)",
                    3 : "DNS(Domain Name System)",
                    4 : "MIME(Multipurpose Internet Mail Extensions)",
                },
                answerResult: "2",
                answerEx: "영어를 해석하면 답이 나옵니다. 파일을 전송하는 프로토콜이요.",
            },
            // 30

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 31,
                answerAsk: "인터넷 익스플로러 6.0에서 웹페이지의 글자가 깨져 보이는 경우에는 [보기]-[인코딩] 메뉴에서 무엇을 선택해야 하는가",
                answerChoice: {
                    1 : "자동선택",
                    2 : "자동복구",
                    3 : "오류복구",
                    4 : "오류보기",
                },
                answerResult: "1",
                answerEx: "?",
            },
            // 31

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 32,
                answerAsk: "도서관의 도서들을 분류한 것과 같이 정보를 대분류, 중분류, 소분류 식으로 찾아들어가는 방식의 검색엔진은?",
                answerChoice: {
                    1 : "주제별 검색 엔진",
                    2 : "단어별 검색 엔진",
                    3 : "메타 검색 엔진",
                    4 : "통합 검색 엔진",
                },
                answerResult: "1",
                answerEx: "분류로 나눠서 찾아들어가는 것은 주제별입니다.",
            },
            // 32

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 33,
                answerAsk: "인터넷의 시조이며, 미 국방성이 군사목적으로 UCLA, 스탠포드 대학 등이 보유한 컴퓨터 네트워크로 연결한 것은 무엇일까?",
                answerChoice: {
                    1 : "USENET",
                    2 : "FTP",
                    3 : "WAIS",
                    4 : "ARPANET",
                },
                answerResult: "4",
                answerEx: "인터넷의 시조 = 알파넷.",
            },
            // 33

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 34,
                answerAsk: "다음과 관련 있는 TCP/IP 프로토콜 계층으로 옳은 것은? SMTP, FTP, Telnet, HTTP",
                answerChoice: {
                    1 : "물리 계층",
                    2 : "네트워크 계층",
                    3 : "전송 계층",
                    4 : "응용 계층",
                },
                answerResult: "4",
                answerEx: "여러가지 프로토콜들이 나오면 응용계층을 생각해주세요.",
            },
            // 34

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 35,
                answerAsk: "인터넷 익스플로러 6.0에서 [파일] 메뉴에 해당되지 않는 것은?",
                answerChoice: {
                    1 : "새로 만들기",
                    2 : "열기",
                    3 : "새로 고침",
                    4 : "페이지 설정",
                },
                answerResult: "3",
                answerEx: "ie는 안쓰기 때문에 크게 주의하지 않아도 될 것 같습니다. 답은3번",
            },
            // 35

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 36,
                answerAsk: "자바스크립트의 일반적인 장점으로 틀린 것은?",
                answerChoice: {
                    1 : "운영체제의 제한을 받지 않는다.",
                    2 : "문법이 간단해 손쉽게 프로그램을 만들 수 있다.",
                    3 : "HTML 문서 내에 직접 코드를 삽입하므로 신속하게 작성할 수 있다.",
                    4 : "게임, 메신저, 채팅방 등을 개발하는데 적합하다.",
                },
                answerResult: "2",
                answerEx: "메신저나 채팅방은 서버 프로그램이 필요하겠죠? 일반적인 장점으로 적합하진 않은 것 같아요.",
            },
            // 36

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 37,
                answerAsk: "검색엔진과 그에 해당된 서비스가 틀리게 연결된 것은?",
                answerChoice: {
                    1 : "야후 - 메신저",
                    2 : "옥션 - 블로그",
                    3 : "네이버 - 지식검색",
                    4 : "네이트 - 메일",
                },
                answerResult: "2",
                answerEx: "옥션사이트를 접속해보시면 알겁니다. 옥션은 쇼핑몰이죠",
            },
            // 37

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 38,
                answerAsk: "제품선전이나 상업적 용도로 자주 사용되는 무작위적인 메일 발송을 일컫는 인터넷 용어는?",
                answerChoice: {
                    1 : "Hot Mail",
                    2 : "Mailing list",
                    3 : "Spam Mail",
                    4 : "Mail Bomb",
                },
                answerResult: "3",
                answerEx: "스팸메일... 다들 아실거라 생각합니다.",
            },
            // 38

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 39,
                answerAsk: "위지웍(WYSIWYG) 기반의 웹 에디터가 아닌 것은?",
                answerChoice: {
                    1 : "Namo Web Editor",
                    2 : "FrontPage",
                    3 : "Edit Plus",
                    4 : "Netscape Composer",
                },
                answerResult: "3",
                answerEx: "에딧플러스는 메모장 같은 형식으로 하드코딩에 특화되어있죠, 위지위그란\
                이미지 같은걸 드래그앤 드롭같은 사용자 편의기능을 제공하는 방식의 에디터를 말합니다.",
            },
            // 39

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 40,
                answerAsk: "HTML에서 사용되는 글자 모양에 관련된 태그 설명으로 옳지 않은 것은? (문제오류입니다. 모두 정답 처리래요)",
                answerChoice: {
                    1 : ".",
                    2 : ".",
                    3 : ".",
                    4 : ".",
                },
                answerResult: "0",
                answerEx: "문제 오류로 인한 모두 정답 처리라고 합니다.",
            },
            // 40

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 41,
                answerAsk: "컴퓨터그래픽스의 역사 중 제4세대에 해당하는 래스터 스캔형 CRT 시대에 대한 설명으로 거리가 먼 것은?",
                answerChoice: {
                    1 : "색, 면으로 입체물의 표면을 도색할 수 있게 되었다.",
                    2 : "프랙탈 이론을 실천한 여러 사례가 발표되었다.",
                    3 : "슈퍼리얼리즘과 사실주의적인 경향을 갖고 있다.",
                    4 : "보잉사가 CRT를 구사하여 제트 여객기 보잉 737을 설계하였다.",
                },
                answerResult: "4",
                answerEx: "보잉737 은 1964년 부터 생산되었고 래스터스캔 CRT는 1980년도의 기술이다.",
            },
            // 41

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 42,
                answerAsk: "웹사이트 제작 단계 중 사이트의 목적과 사용자 분석에 따라 사이트의 디자인 방향을 설정하는 단계는?",
                answerChoice: {
                    1 : "스케줄 작성",
                    2 : "콘셉트 도출",
                    3 : "스타일링",
                    4 : "평가",
                },
                answerResult: "2",
                answerEx: "디자인의 방향을 잡는것은 디자인의 콘셉트를 도출해서 계획하는 것 이겠죠.",
            },
            // 42

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 43,
                answerAsk: "웹페이지를 작성할 때 배경이미지와 메뉴에 관한 설명으로 틀린 것은?",
                answerChoice: {
                    1 : "스타일 시트를 이용하여 배경 이미지의 반복 횟수를 증가시킨다.",
                    2 : "배경 이미지가 클 경우 용량 증가로 로딩이 늦어진다.",
                    3 : "메뉴는 메타포를 이용하여 디자인한다.",
                    4 : "배경의 색상을 분할시켜 사용하면 프레임이 사용된 것처럼 보인다.",
                },
                answerResult: "1",
                answerEx: "배경이미지의 반복 횟수를 증가시키면 그만큼 로딩시간이 길어지겠죠?",
            },
            // 43

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 44,
                answerAsk: "웹 페이지 저작에 필요한 S/W 중 웹에디터가 아닌 것은?",
                answerChoice: {
                    1 : "Internet Space Builder",
                    2 : "EditPlus",
                    3 : "Hotdog Professional",
                    4 : "Dramweaver",
                },
                answerResult: "1",
                answerEx: "Internet Space Builder은 3D 기술을 제작하는 쪽이라고 하네요.",
            },
            // 44
            
            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 45,
                answerAsk: `
                다음 설명과 같은 애니메이션 기법은?
                <br>- 배경그림은 그래도 두고 캐릭터만 움직이게 하는 기법
                <br>- 1915년 허드(Earl Hurd)가 고안
                <br>- 종이에 그린 그림을 셀룰로이드에 옳긴 뒤, 그 뒷면에 채색을 한 다음 배경 위에 놓고 촬영하는 기법
                `,
                answerChoice: {
                    1 : "셀 애니메이션",
                    2 : "그림 애니메이션",
                    3 : "모델 애니메이션",
                    4 : "컴퓨터 애니메이션",
                },
                answerResult: "1",
                answerEx: "배경은 그대로 두고 캐릭터만 움직인다? => 셀 애니메이션",
            },
            // 45

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 46,
                answerAsk: "애니메이션 기법에 대한 설명이 틀린 것은?",
                answerChoice: {
                    1 : "플립북 애니메이션은 프레임의 모든 그림을 그려서 저장하므로 제작 시간이 많이 소요된다.",
                    2 : "셀 애니메이션은 하나의 배경과 여러 개의 전경을 제작 후 합성하여 하나의 프레임을 만든다.",
                    3 : "컴퓨터를 이용한 키 프레임 애니메이션은 선형보간법으로 중간 프레임을 자동 생성할 수 있다.",
                    4 : "모핑 애니메이션은 전통적인 애니메이션 기법으로 용량이 작아 인터넷 환경에 적합하다.",
                },
                answerResult: "4",
                answerEx: "모핑은 영화나 뮤직비디오에서 많이 사용합니다.",
            },
            // 46

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 47,
                answerAsk: "일반적인 애니메이션 제작과정으로 옳은 것은?",
                answerChoice: {
                    1 : "스토리보드 - 기획 - 제작 - 음향 - 레코딩",
                    2 : "스토리보드 - 제작 - 기획 - 음향 - 레코딩",
                    3 : "기획 - 스토리보드 - 제작 - 음향 - 레코딩",
                    4 : "기획 - 스토리보드 - 음향 - 제작 - 레코딩",
                },
                answerResult: "3",
                answerEx: "기획을 해야 스토리 보드를 작성할 수 있습니다. 주제가 생기니까요. 그리고 음향효과는 제작을 다 한 후 넣습니다.",
            },
            // 47

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 48,
                answerAsk: "컴퓨터 그래픽스의 단위 중 1인치당 몇 개의 픽셀이 들어가 있는지를 표현하는 것은?",
                answerChoice: {
                    1 : "LPI",
                    2 : "EPI",
                    3 : "PPI",
                    4 : "DPI",
                },
                answerResult: "3",
                answerEx: "PPI = pixel per inch",
            },
            // 48

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 49,
                answerAsk: "2차원 컴퓨터그래픽스에서 한 색상에서 다른 색상으로 점차적으로 색을 변화시켜가며 특정 구역 안에 색을 칠해주는 기법은?",
                answerChoice: {
                    1 : "그라데이션(Gradation)",
                    2 : "모델링(Modeling)",
                    3 : "스캔(Scan)",
                    4 : "샘플링(Sampling)",
                },
                answerResult: "1",
                answerEx: "색상이 점진적으로 변화하는것은 그라데이션이죠",
            },
            // 49

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 50,
                answerAsk: "웹사이트 제작 시 사용의 편리함을 높이기 위한 방법으로 적합하지 않은 것은?",
                answerChoice: {
                    1 : "로딩 시간에 구애받지 않고 intro 페이지를 화려하게 넣어 보는 즐거움을 준다.",
                    2 : "이미지는 저해상도를 기본으로 하고 사용자의 선택에 따라 고해상도의 정밀 사진을 링크한다.",
                    3 : "링크에 대한 설명은 링크 타이틀을 활용하여 텍스트로 제공한다.",
                    4 : "과도하게 정보를 제공(배치 혹은 나열)해서는 안 된다.",
                },
                answerResult: "1",
                answerEx: "음... 화려한게 좋은건 아니겠죠, 효율적인 방향을 선택합시다.",
            },
            // 50

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 51,
                answerAsk: "웹 페이지에서 사용되는 버튼을 가장 부적절하게 제작한 것은?",
                answerChoice: {
                    1 : "문자 버튼의 색상과 배경이 변한다.",
                    2 : "애니메이션 효과로 움직이는 버튼을 제작한다.",
                    3 : "모든 버튼이 자연스럽게 사라진다.",
                    4 : "흔들리는 이미지가 메뉴로 바뀐다.",
                },
                answerResult: "3",
                answerEx: "만약 버튼이 쥐도새도 모르게 사라진다면 당황스럽겠죠? 사용자가 의도해서 사라지는것이 아니라면",
            },
            // 51

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 52,
                answerAsk: "웹디자인 프로세스에 대한 설명으로 틀린 것은?",
                answerChoice: {
                    1 : "프로젝트 기획 - 목표설정, 시장조사, 개발전략수립",
                    2 : "웹 사이트 기획 - 사이트 콘셉트 정의, 자료수집. 분석",
                    3 : "웹 사이트 디자인 - 콘텐츠 제작 및 배치",
                    4 : "웹 사이트 구축 - 테스트 및 디버깅",
                },
                answerResult: "4",
                answerEx: "테스트 및 디버깅 단계는 다 개발하고 유지보수 단계에서 실행하는 것 입니다.",
            },
            // 52

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 53,
                answerAsk: "애니메이션에서 대상의 움직임을 개별적인 단위요소로 세분화한 기본 단위는?",
                answerChoice: {
                    1 : "프레임",
                    2 : "필름",
                    3 : "콤마",
                    4 : "컷 아웃",
                },
                answerResult: "1",
                answerEx: "애니메이션의 기본 한단위는 프레임이라고 부릅니다. 프레임을 연결해서 애니메이션을 만들겠죠?",
            },
            // 53

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 54,
                answerAsk: "곡선(곡면)이나 사선(사면)을 표현할 때 바탕과 이미지 사이의 경계를 부드럽게 처리해 주는 것은?",
                answerChoice: {
                    1 : "매핑",
                    2 : "앨리어싱",
                    3 : "안티앨리어싱",
                    4 : "디더링",
                },
                answerResult: "3",
                answerEx: "픽셀 이미지의 계단현상을 부드럽게 처리해주는 기법을 안티엘리어싱이라고 합니다.",
            },
            // 54

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 55,
                answerAsk: "웹디자인에 사용하기 위하여 사진이나 그림 등을 스캔 받을 때 나타나는 현상으로 스캔 받은 이미지에 물결무늬가 격자처럼 교차되어 보이는 것을 무엇이라고 하는가?",
                answerChoice: {
                    1 : "Dithering",
                    2 : "Scanning",
                    3 : "Moire",
                    4 : "Water Mark",
                },
                answerResult: "3",
                answerEx: "모아레(Moire) 란 두 개 이상의 주기적인 패턴(Periodic Pattern)이 겹쳐질 때 만들어지는 간섭무늬(Interference Fringe)를 지칭하는 것으로 다양한 분야에서 매우 광범위하게 사용되어 지고 있죠.",
            },
            // 55

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 56,
                answerAsk: `
                다음이 설명하는 파일 포맷은?
                <br>- 인터레이싱(Interlacing) 이미지 기능 제공 
                <br>- 트루 컬러 지원
                <br>- 비손실 압축 사용 
                <br>- 감마교정 기능 
                <br>- 원하는 색상 밝기의 형태로 이미지를 보정할 수 있음
                `,
                answerChoice: {
                    1 : "*.PICT",
                    2 : "*.PNG",
                    3 : "*.TIFF",
                    4 : "*.AI",
                },
                answerResult: "2",
                answerEx: "트루 컬러를 지원하는 것과 비손실 압축이라는 키워드로 답을 찾아내면 될 것 같습니다.",
            },
            // 56

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 57,
                answerAsk: "다음 중 연관성 있는 여러 가지 이미지를 조합하여 하나의 새로운 이미지를 제작하는 방법은?",
                answerChoice: {
                    1 : "화상 처리(Image Processing)",
                    2 : "디지털 페인팅(Digital Painting)",
                    3 : "포토 콜라주(Photo Collage)",
                    4 : "전자출판(DTP)",
                },
                answerResult: "3",
                answerEx: "포토 콜라주는 포토몽타주라고 불리는 사진 콜라주 작업은 여러 장의 사진을 자르고 결합하여 하나의 새로운 이미지를 만드는 다양한 유형의 이미지 편집 작업입니다 ",
            },
            // 57

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 58,
                answerAsk: "시각 디자인 영역의 한 영역으로서 글자체, 글자크기, 행간, 여백, 간격, 단락, 그리드 등을 통해 전달된다.",
                answerChoice: {
                    1 : "내비게이션 디자인(Navigation Design)",
                    2 : "웹 타이포그래피 디자인(Web Typographic Design)",
                    3 : "웹 컬러 디자인(Web Color Design)",
                    4 : "웹 인터페이스 디자인(Web Interface Design)",
                },
                answerResult: "2",
                answerEx: "글씨체 = 타이포 그래피 입니다.",
            },
            // 58

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 59,
                answerAsk: "웹 사이트 개발에서 일반적으로 가장 먼저 수행해야 할 사항은?",
                answerChoice: {
                    1 : "웹 사이트 프로그래밍",
                    2 : "웹 사이트 마케팅",
                    3 : "웹 사이트 개발 목표 확립",
                    4 : "웹 사이트 유지 관리",
                },
                answerResult: "3",
                answerEx: "뭐든 시작할 땐 목표부터 정해야겠죠?",
            },
            // 59

            {
                answerType: "웹디자인 기능사 2013년 01회",
                answerNum: 60,
                answerAsk: `
                다음 ( )안에 공통으로 들어갈 알맞은 용어는?
                <br> (   )은/는 형판, 보기판 이라는 뜻을 가진 단어로, ( )디자
                인이란 웹 사이트 레이아웃의 형을 만드는 것을 말한다.
                개략적인 디자인을 만들고, 그 이후에 세부적인 디자인 요
                소를 별도로 만드는 방법이다.
                `,
                answerChoice: {
                    1 : "텍스트(Text)",
                    2 : "템플릿(Template)",
                    3 : "컬러(Color)",
                    4 : "인터페이스(Interface)",
                },
                answerResult: "2",
                answerEx: "템플릿은 형판이라는 뜻입니다. (템플릿 하면 형판 떠올려 주세요)",
            },
            // 60
        ];