gsap.registerPlugin(ScrollTrigger);
const change = document.getElementById("#livechat");
const vanilla = document.getElementById("#vanilla");

function changeTheGame() {
  document.getElementById("livechat").innerHTML = "Works Perfectly!";
}
function waitaminute() {
  alert("This is fucking Bullshit!");
}

gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box",
    toggleActions: "restart pause resume pause",
    start: "top center",
    end: "bottom center",
  },
  x: 400,
  rotation: 360,
  duration: 3,
});
gsap.from(".leftsidesection2,.rightsidesection3 ", {
  y: 100,
  duration: 2,
});
gsap.to(".leftsidesection2,.rightsidesection3 ", {
  scrollTrigger: {
    trigger: ".leftsidesection2",
    toggleActions: "restart pause resume pause",
    start: "top center",
    end: "bottom center",
  },
  y: 0,
  duration: 2,
});

gsap.from(".rightsidesection2,.leftsidesection3", {
  y: 50,
  duration: 2,
});
gsap.to(".rightsidesection2,.leftsidesection3", {
  scrollTrigger: {
    trigger: ".rightsidesection2",
    toggleActions: "restart pause resume pause",
    start: "top center",
    end: "bottom center",
  },
  y: 0,
  duration: 2,
});

gsap.from(".leftsidesection1", {
  x: -200,
  duration: 1,
});
gsap.to(".leftsidesection1", {
  x: 0,
  duration: 1,
});
gsap.from(".rightsidesection1", {
  x: 200,
  duration: 1,
});
gsap.to(".rightsidesection1", {
  x: 0,
  duration: 1,
});
gsap.from(".cardcontent1", {
  scrollTrigger: {
    trigger: ".cardcontent1",
    toggleActions: "restart pause resume pause",
    start:"top center",
    end:"bottom center"
  },
  x: -200,
  duration: 2,
});
gsap.to(".cardcontent1", {
  scrollTrigger: {
    trigger: ".cardcontent1",
    toggleActions: "restart pause resume pause",
    start: "top center",
    end: "bottom center",
  },
  x: 0,
  duration: 1.5,
});
gsap.from(".cardcontent2", {
  scrollTrigger: {
    trigger: ".cardcontent2",
    toggleActions: "restart pause resume pause",
    start: "top center",
    end:"center top"
    
  },
  y: 100,
  duration: 1.5,
});
gsap.to(".cardcontent2", {
  scrollTrigger: {
    trigger: ".cardcontent2",
    toggleActions: "restart pause resume pause",
    start: "top center",
    end: "center top",
  },
  y: 0,
  duration: 1.5,
});
gsap.from(".cardcontent3", {
  scrollTrigger: {
    trigger: ".cardcontent3",
    toggleActions: "restart pause resume pause",
    start: "top center",
    end: "bottom center",
  },
  x: 200,
  duration: 1.5,
});
gsap.to(".cardcontent3", {
  scrollTrigger: {
    trigger: ".cardcontent3",
    toggleActions: "restart pause resume pause",
    start: "top center",
    end: "bottom center",
  },
  x: 0,
  duration: 1.5,
});
