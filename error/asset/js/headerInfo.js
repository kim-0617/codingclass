const header_template = `
<ul>
    <li><a href="javascript01.html">데이터 저장하기</a></li>
    <li><a href="javascript02.html">데이터 불러오기</a></li>
    <li><a href="javascript03.html">데이터 실행하기</a></li>
    <li><a href="javascript04.html">데이터 제어하기</a></li>
</ul>
<ul>
    <li><a href="javascript05.html">문자열 객체</a></li>
    <li><a href="javascript06.html">배열 객체</a></li>
    <li><a href="javascript07.html">수학 객체</a></li>
    <li><a href="javascript08.html">숫자 객체</a></li>
    <li><a href="javascript09.html">브라우저 객체</a></li>
    <li><a href="javascript10.html">요소 객체</a></li>
    <li><a href="javascript11.html">이벤트 객체</a></li>
    <li><a href="javascript12.html">제이쿼리</a></li>
</ul>
<ul class="effect">
    <li><a href="effect/searchEffect.html">검색 효과</a></li>
    <li><a href="effect/quizEffect.html">퀴즈 효과</a></li>
    <li><a href="effect/dataEffect.html">데이터 효과</a></li>
    <li><a href="effect/mouseEffect.html">마우스 효과</a></li>
    <li><a href="effect/sliderEffect.html">슬라이드 효과</a></li>
    <li><a href="effect/parallaxEffect.html">패랠렉스 효과</a></li>
    <li><a href="effect/gameEffect.html">게임 효과</a></li>
</ul>
`;

document_info = [
    'javascript01.html',
    'javascript02.html',
    'javascript03.html',
    'javascript04.html',
    'javascript05.html',
    'javascript06.html',
    'javascript07.html',
    'javascript08.html',
    'javascript09.html',
    'javascript10.html',
    'javascript11.html',
    'javascript12.html',
    'searchEffect.html',
    'quizEffect.html',
    'textEffect.html',
    'mouseEffect.html',
    'sliderEffect.html',
    'parllexEffect.html',
    'gameEffect.html',
];

const target = document.querySelector('nav.header_nav');
target.innerHTML = header_template;
const path_name = location.pathname.split('/');
const document_name = path_name[path_name.length - 1];
const lis = target.querySelectorAll('li');
const aTags = target.querySelectorAll('li a');
aTags.forEach((aTag,index) => {
    let link = aTag.href.split('/');
    link = link[link.length - 1];
    if(link === document_name){
        lis[index].classList.add('active');
    }
});