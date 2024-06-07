
let head_favicon = document.querySelector("head link[rel=icon]"),
    head_favicon_href = head_favicon.getAttribute("href");
if(head_favicon_href == `<?= $siteSEO['img_favicon'] ?>` || head_favicon_href == undefined || head_favicon_href == null){
    // head_favicon.setAttribute("href","#");
    head_favicon.setAttribute("href","data:;base64,iVBORw0KGgo=");
}

let menuicon = document.querySelector(".menuicon-box"),
    side_gnb = document.querySelectorAll("header .side .gnb>li"),
    side = document.querySelector(".side"),
    icon = document.querySelector(".menuicon span.pos"),
    gnb = document.querySelectorAll("header .gnb>li"),
    header_gnb = document.querySelectorAll(".header-wrap gnb>li"),
    header = document.querySelector("header"),
    html = document.querySelector("html"),
    body = document.querySelector("body"),
    sub_gnb = document.querySelectorAll(".side .sub-menu li");

let page_name = ["about", "client", "portfolio", "estimate", "recruitment"];
let url = location.href.split('/')[(location.href.split('/').length - 2)];

window.addEventListener("load",()=>{
    setTimeout(() => {
        window.scrollTo({top:0});
    }, 100);
});
window.addEventListener("DOMContentLoaded", () => {
    // clipPath Event Funtion
    function setPath(circle_width) {
        side.style.clipPath = `circle(${circle_width}vw at ${(icon.getBoundingClientRect().x) + 20}px ${icon.getBoundingClientRect().y}px)`;
    }

    // 초기 clipPath 위치 설정
    setPath(0);

    if (window.innerWidth <= 1024) {
        menuicon.classList.add("active");
    }
    if (window.scrollY >= 300) {
        menuicon.classList.add("active");
    }

    // 햄버거버튼 ClipPath 이벤트
    document.querySelector(".menuicon").addEventListener("click", function () {
        if (header.classList.contains("on")) {
            header.classList.remove("on");
            if(window.scrollY < 300 && window.innerWidth > 1024){
                menuicon.classList.remove("active");
            }
            setPath(0);
        } else {
            header.classList.add("on");
            if (window.innerWidth > 767) {
                setPath(220);
            } else {
                setPath(400);
            }
        }
    });

    // header,side gnb a태그 모션
    gnb.forEach((el, index) => {
        el.querySelector(".a-box").innerHTML +=
            `<a href=${el.querySelector("a").getAttribute("href")} class="motion">
                ${el.querySelector("a.normal").textContent}
            </a>`;
        el.addEventListener("mouseleave", () => {
            if (el.classList.contains("active")) el.classList.remove("active");
        });
    });

    // side 서브메뉴 모션
    sub_gnb.forEach((el,index)=>{
        el.innerHTML +=
        `<a href=${el.querySelector("a").getAttribute("href")} class="motion">
                ${el.querySelector("a").textContent}
            </a>`;
    });

    // 서브메뉴
    document.querySelectorAll("header .gnb .a-box a").forEach((el,index)=>{
        el.addEventListener("click",function(e){
            if(!el.parentElement.nextElementSibling){
                return false;
            }
            e.preventDefault();
            if(el.classList.contains("motion")){
                el.parentElement.parentElement.classList.add("active")
            };
        });
    });

    // side 서브메뉴 화살표 추가
    side_gnb.forEach((el, index) => {
        if (!el.querySelector(".sub-menu")) return false;
        el.querySelector(".a-box").innerHTML += `<img src="../images/common/header_arrow.svg" alt="arrow" class="arrow">`
    });

    // side 슬라이드메뉴
    $("header .side .gnb>li .a-box").on("click", function (e) {
        $(this).siblings(".sub-menu").stop().slideToggle();
        $(this).toggleClass("active");
    });

    // 햄버거버튼 스크롤 이벤트
    window.addEventListener("scroll", () => {
        if (window.innerWidth <= 1024) {
            return false;
        }
        if (window.scrollY >= 150) {
            menuicon.classList.add("active");
        } else {
            menuicon.classList.remove("active");
        }
    });

    // 핸버거버튼 리사이즈 이벤트
    window.addEventListener("resize", () => {
        if (window.innerWidth <= 1024) {
            if (menuicon.classList.contains("active")) return false;
            menuicon.classList.add("active");
        } else {
            if (window.scrollY <= 300) {
                if (!menuicon.classList.contains("active")) { return false; }
                menuicon.classList.remove("active");
            }
        }
    });
});


