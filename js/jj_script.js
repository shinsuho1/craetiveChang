/**
    function se_master(element, dir, el_parent = null, pxX = null, pxY = null, v_start = null, v_end = null)
    * @param {Element} element *필수 Element 요소 (document.querySelector('선택자'))
    * @param {String} dir *필수 방향 (t, b, lt, rt, lb, rb, r, l)
    * @param {Element|null} el_parent 기준부모 (없으면 자신)
    * @param {Number|string|null} pxX 움직일 X축 
    * @param {Number|string|null} pxY 움직일 Y축
    * @param {Number|string|null} v_start 요소의 ??, 화면의 ??에 도달할 때 시작
    * @param {Number|string|null} v_end   요소의 ??, 화면의 ??에 도달할 때 끝
*/


document.addEventListener("DOMContentLoaded", function () {
    // gsap_main();

    // GSAP target null not found. https://greensock.com ← 해당 요소가 페이지 내에 없어서 뜨는 경고
    if (document.querySelector("#main_page")) {
        se_master(document.querySelector('.ms_01 .creative .text_01'), "lt", '', '30', '30', '0% 10%', '-40% -40%');
        se_master(document.querySelector('.ms_01 .ad .text_01'), "l", '', '30', '', '0% 10%', '-40% -40%');
        se_master(document.querySelector('.ms_01 .ad .text_02 '), "rb", '', '30', '30', '0% 20%', '-40% -40%');
        se_master(document.querySelector('.ms_01 .change .text_01'), "lb", '', '30', '30', '0% 20%', '-40% -40%');
        se_master(document.querySelector('.ms_01 .ico_mouse'), "rt", '', '', '', '0% 40%', '-40% -40%');
        se_master(document.querySelector('.ms_01 .info .text_03'), "rb", '', '', '', '0% 20%', '-40% -40%');
        se_master(document.querySelector('.ms_01 .btn_01'), "l", '', '', '', '0% 40%', '-40% -40%');
        se_master(document.querySelector('.ms_05 .content'), "t", document.querySelector('.ms_05'));

    } else if (document.querySelector("#sub.estimate")) {
        se_master(document.querySelector('#sub.estimate .main01 .move01'), "r", '', '', '', '0% 10%', '-40% -40%');
        se_master(document.querySelector('#sub.estimate .main01 .move02'), "l", '', '', '', '0% 20%', '-40% -40%');
        se_master(document.querySelector('#sub.estimate .main01 .move03'), "r", '', '', '', '0% 20%', '-40% -40%');
        se_master(document.querySelector('#sub.estimate .main01 .ico_mouse'), "rt", '', '', '', '0% 80%', '-20% -20%');

    } else if (document.querySelector("#sub.recruitment")) {
        se_master(document.querySelector('#sub.recruitment .main01 .move01'), "r", '', '', '', '0% 10%', '-40% -40%');
        se_master(document.querySelector('#sub.recruitment .main01 .move02'), "l", '', '', '', '0% 10%', '-40% -40%');
        se_master(document.querySelector('#sub.recruitment .main01 .ico_mouse'), "rt", '', '', '', '0% 50%', '-20% -20%');
        
    } else if (document.querySelector("#sub.overview")) {
        se_master(document.querySelector('#sub.overview .main01 .move01'), "r", '', '', '', '0% 10%', '-40% -40%');
        se_master(document.querySelector('#sub.overview .main01 .move03'), "l", '', '', '', '0% 20%', '-40% -40%');
        se_master(document.querySelector('#sub.overview .main01 .move04'), "lt", '', '', '', '0% 20%', '-40% -40%');
        se_master(document.querySelector('#sub.overview .main01 .ico_mouse'), "rt", '', '', '', '0% 80%', '-20% -20%');
    }




    document.querySelectorAll('.jj_ani_return').forEach(function (el) {
        se_master(el, "return");
    });
});



