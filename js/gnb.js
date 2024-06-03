let menuicon = document.querySelector(".menuicon-box"),
    side_gnb = document.querySelectorAll("header .side .gnb>li"),
    side = document.querySelector(".side"),
    icon = document.querySelector(".menuicon span.pos"),
    gnb = document.querySelectorAll("header .gnb>li"),
    header_gnb = document.querySelectorAll(".header-wrap gnb>li"),
    header = document.querySelector("header"),
    html = document.querySelector("html"),
    body = document.querySelector("body");

let page_name = ["about", "client", "portfolio", "estimate", "recruitment"];
let url = location.href.split('/')[(location.href.split('/').length - 2)];

window.addEventListener("load",()=>{
    setTimeout(() => {
        window.scrollTo({top:0});
    }, 100);
});
window.addEventListener("DOMContentLoaded", () => {
    function setPath(circle_width) {
        side.style.clipPath = `circle(${circle_width}vw at ${(icon.getBoundingClientRect().x) + 20}px ${icon.getBoundingClientRect().y}px)`;
    }
    // if(header.classList.contains("on")){
    //     setPath(220);
    // }
    setPath(0);
    if (window.innerWidth <= 1024) {
        menuicon.classList.add("active");
    }
    if (window.scrollY >= 300) {
        menuicon.classList.add("active");
    }

    $("header .side .gnb>li .a-box").on("click", function (e) {
        $(this).siblings(".sub-menu").stop().slideToggle();
        $(this).toggleClass("active");
    });

    document.querySelector(".menuicon").addEventListener("click", function () {
        if (header.classList.contains("on")) {
            header.classList.remove("on");
            if(window.scrollY < 300 && window.innerWidth > 1024){
                menuicon.classList.remove("active");
            }
            // body.classList.remove("stop_scroll");
            setPath(0);
        } else {
            header.classList.add("on");
            // body.classList.add("stop_scroll");
            if (window.innerWidth > 767) {
                setPath(220);
            } else {
                setPath(400);
            }
        }
    });
    gnb.forEach((el, index) => {
        el.querySelector(".a-box").innerHTML +=
            `<a href=${el.querySelector("a").getAttribute("href")} class="motion">
                ${el.querySelector("a.normal").textContent}
            </a>`;
        el.addEventListener("mouseleave", () => {
            if (el.classList.contains("active")) el.classList.remove("active");
        });
    });

    document.querySelectorAll("header .gnb a.normal").forEach((el, index) => {
        el.addEventListener("click", (e) => {
            if (!gnb[index].querySelector(".sub-menu")) {
                return false;
            }
            e.preventDefault();
        });
    });

    document.querySelectorAll("header .gnb a.motion").forEach((el, index) => {
        el.addEventListener("click", (e) => {
            if (!gnb[index].querySelector(".sub-menu")) {
                return false;
            }
            e.preventDefault();
            gnb[index].classList.add("active");
        });
    });

    side_gnb.forEach((el, index) => {
        if (!el.querySelector(".sub-menu")) return false;
        el.querySelector(".a-box").innerHTML += `<img src="../images/common/header_arrow.svg" alt="arrow" class="arrow">`
    });

    window.addEventListener("scroll", () => {
        if (window.innerWidth <= 1024 || header.classList.contains("on")) {
            return false;
        }
        if (window.scrollY >= 150) {
            menuicon.classList.add("active");
        } else {
            menuicon.classList.remove("active");
        }
    });
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


