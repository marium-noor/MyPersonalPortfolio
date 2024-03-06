var cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", (dets) => {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    cursorBlur.style.left = dets.x - 125 + "px";
    cursorBlur.style.top = dets.y - 125 + "px"
})

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

var nav_h4 = document.querySelectorAll('#nav h4');
nav_h4.forEach(function (elem) {
    elem.addEventListener("mouseenter", () => {
        cursor.style.scale = 2.5;
        cursor.style.border= "1px solid #fff";
        cursor.style.backgroundColor = "transparent"
    });
    elem.addEventListener("mouseleave", () => {
        cursor.style.scale = 1;
        cursor.style.border= "#95c11e";
        cursor.style.backgroundColor = "transparent"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1.5,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 2,
    }
})

gsap.from("#page1 h1, #page1 h2, #page1 p", {
    y: -200,
    stagger: 0.3,
    opacity: 0
})

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
});
