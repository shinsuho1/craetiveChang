let menuicon = document.querySelector(".menuicon-box"),
    side_gnb = document.querySelectorAll("header .side .gnb>li"),
    side = document.querySelector(".side"),
    icon = document.querySelector(".menuicon .top"),
    gnb = document.querySelectorAll("header .gnb>li"),
    header_gnb = document.querySelectorAll(".header-wrap gnb>li");
let page_name = ["about", "client", "portfolio", "estimate", "recruitment"];
let url = location.href.split('/')[(location.href.split('/').length - 2)];


window.addEventListener("DOMContentLoaded", () => {
    /*header_gnb.forEach((el,index)=>{
        if(url == page_name[index]){
            el.classList.add("on");
        }
    });*/

    function setPath(circle_width) {
        side.style.clipPath = `circle(${circle_width}vw at ${(icon.getBoundingClientRect().x) + 20}px ${icon.getBoundingClientRect().y}px)`;
    }

    setPath(0);
    side.style.opacity = "1";

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

    document.querySelector("header .menuicon").addEventListener("click", () => {
        side.classList.add("active");
        if (window.innerWidth > 767) {
            setPath(220);
        } else {
            setPath(400);
        }
    });

    document.querySelector("header .close_btn").addEventListener("click", () => {
        side.classList.remove("active");
        setPath(0);
    });

    gnb.forEach((el, index) => {
        el.querySelector(".a-box").innerHTML +=
            `<a href=${el.querySelector("a").getAttribute("href")} class="motion">
            ${el.querySelector("a.normal").textContent}
        </a>`;
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

    gnb.forEach(el => {
        el.addEventListener("mouseleave", () => {
            if (el.classList.contains("active")) el.classList.remove("active");
        });
    });

    side_gnb.forEach((el, index) => {
        if (!el.querySelector(".sub-menu")) return false;
        el.querySelector(".a-box").innerHTML += `<img src="../images/common/header_arrow.svg" alt="arrow" class="arrow">`
    });

    window.addEventListener("scroll", () => {
        if (window.innerWidth <= 1024) {
            return false;
        }
        if (window.scrollY >= 300) {
            menuicon.classList.add("active");
        } else {
            menuicon.classList.remove("active");
        }
    });
    window.addEventListener("resize", () => {
        // setPath(0);
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


