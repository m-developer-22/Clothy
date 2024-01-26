document.querySelectorAll(".reveal").forEach(function(elem){
    var spanparent = document.createElement("span");
    var spanchild = document.createElement("span");

    spanparent.classList.add("parent");
    spanchild.classList.add("child");

    spanchild.textContent = elem.textContent;

    elem.textContent="";
    spanparent.append(spanchild);
    elem.append(spanparent);
})


gsap.from("#section1 .child",{
    y:"100%",
    duration:1.5,
    // ease:Expo.easeInOut
    // ease:Circ.easeInOut
    ease:Power3,
})
gsap.from("#section1 img",{
    opacity:0,
    duration:2
})



gsap.from("#section2 #s2i1",{
    scrollTrigger:{
        trigger: "#section2",
        start: "top 50%",
        // markers: true,
    },
    opacity:0,
    duration:2,
    x:-100,
    ease:Expo.easeInOut
})

gsap.from("#section2 #s2i2",{
    scrollTrigger:{
        trigger: "#section2",
        start: "top 50%",
        // markers: true,
    },
    opacity:0,
    duration:2,
    x:100,
    ease:Expo.easeInOut
})

gsap.from("#section2 #s2div2",{
    scrollTrigger:{
        trigger: "#section2",
        start: "top 50%",
        // markers: true,
    },
    opacity:0,
    duration:2,
    x:-100,
    delay:.5,
    ease:Expo.easeInOut
})

gsap.from("#section2 #s2div1",{
    scrollTrigger:{
        trigger: "#section2",
        start: "top 50%",
        // markers: true,
    },
    opacity:0,
    duration:2,
    x:100,
    delay:.5,
    ease:Expo.easeInOut
})


gsap.from("#section4 .child",{
    scrollTrigger:{
        trigger: "#section4",
        start: "top 50%",
        // markers: true,
    },
    y:"100%",
    duration:1,
    // ease:Expo.easeInOut
    // ease:Circ.easeInOut
    ease:Power3.easeInOut,
    stagger:.1
})

gsap.from("#section4 #s4left #s4leftbottom img",{
    scrollTrigger:{
        trigger: "#section4",
        start: "top 50%",
        // markers: true,
    },
    y:100,
    opacity:0,
    duration:2,
    ease:Expo.easeInOut
    // ease:Circ.easeInOut
    // ease:Power3.easeInOut,
    // stagger:.3
})

gsap.from("#section4 #s4right img",{
    scrollTrigger:{
        trigger: "#section4",
        start: "top 50%",
        // markers: true,
    },
    x:300,
    rotate:"-45deg",
    opacity:0,
    duration:2,
    ease:Expo.easeInOut
    // ease:Circ.easeInOut
    // ease:Power3.easeInOut,
    // stagger:.3
})

gsap.from("#section5 .child",{
    scrollTrigger:{
        trigger: "#section5",
        start: "top 50%",
        // markers: true,
    },
    y:"100%",
    duration:1,
    // ease:Expo.easeInOut
    // ease:Circ.easeInOut
    ease:Power3.easeInOut,
    stagger:.1
})


gsap.from("#section5 #s5bottom #s5bottomleft #s5blim1",{
    scrollTrigger:{
        trigger: "#section5",
        start: "top 50%",
        // markers: true,
    },
    x:-200,
    rotate:"10deg",
    duration:1.5,
    // ease:Expo.easeInOut
    // ease:Circ.easeInOut
    // ease:Power3.easeInOut,
    // stagger:.1
})

gsap.from("#section5 #s5bottom #s5bottomleft #s5blim2",{
    scrollTrigger:{
        trigger: "#section5",
        start: "top 50%",
        // markers: true,
    },
    x:-200,
    rotate:"5deg",
    duration:1.5,
})

gsap.from("#section5 p",{
    scrollTrigger:{
        trigger: "#section5",
        start: "top 50%",
        // markers: true,
    },
    y:"50%",
    duration:1,
    opacity:0,
    ease:Power3.easeInOut,
    stagger:.1
})

gsap.from("#section6 #s6left h1",{
    scrollTrigger:{
        trigger: "#section6",
        start: "top 50%",
        // markers: true,
    },
    y:"50%",
    duration:1,
    opacity:0,
    ease:Power3.easeInOut,
    // stagger:.1
})

gsap.from("#section6 #s6left img",{
    scrollTrigger:{
        trigger: "#section6",
        start: "top 50%",
        // markers: true,
    },
    x:"-50%",
    duration:2,
    opacity:0,
    delay:.5,
    ease:Power3.easeInOut,
    stagger:.1
})

gsap.from("#section6 #s6left p",{
    scrollTrigger:{
        trigger: "#section6",
        start: "top 50%",
        // markers: true,
    },
    x:"50%",
    duration:2,
    opacity:0,
    delay:.5,
    ease:Power3.easeInOut,
    stagger:.1
})

gsap.from("#section6 #s6right img",{
    scrollTrigger:{
        trigger: "#section6",
        start: "top 50%",
        // markers: true,
    },
    x:"50%",
    duration:2,
    opacity:0,
    delay:.5,
    ease:Power3.easeInOut,
    stagger:.1
})