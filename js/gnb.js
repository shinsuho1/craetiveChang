window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
        document.querySelector(".menuicon-box").classList.add("active");
    } else {
        document.querySelector(".menuicon-box").classList.remove("active");
    }
});



$("header .side .gnb>li .a-box").on("click", function (e) {
    $(this).siblings(".sub-menu").stop().slideToggle();
    $(this).toggleClass("active");
});

let side_gnb = document.querySelectorAll("header .side .gnb>li");
side_gnb.forEach((el, index) => {
    if (!el.querySelector(".sub-menu")) return false;
    el.querySelector(".a-box").innerHTML += `<img src="../images/common/header_arrow.svg" alt="" class="arrow">`
});

let side = document.querySelector(".side");
let icon = document.querySelector(".menuicon .top");

function setPath(num) {
    side.style.clipPath = `circle(${num}vw at ${(icon.getBoundingClientRect().x) + 20}px ${icon.getBoundingClientRect().y}px)`;
}
window.addEventListener("DOMContentLoaded", () => {
    setPath(0);
    side.style.opacity = "1";
    if (window.scrollY >= 300) {
        document.querySelector(".menuicon-box").classList.add("active");
    }
});
window.addEventListener("resize", () => {
    // setPath(0);
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

let gnb = document.querySelectorAll("header .gnb>li");

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
