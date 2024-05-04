gsap.registerPlugin(ScrollTrigger) 

let timeline = gsap.timeline({
    defaults:{
        opacity: 0,
        ease: "linear",
        duration: 1,
    }
})

timeline.fromTo(".main-image-cont", {y:200}, {y:0, opacity:1})

timeline.fromTo(".meet-me", {y:50}, {y:0, opacity:1})

timeline.fromTo(".about-text", {x:-200}, {x:0, opacity:1})

timeline.fromTo(".ruth", {x:20}, {x:0, opacity:1, delay:0.2})

timeline.fromTo(".social-text", {width: "20%"}, {width: "100%", opacity:1, duration:2})

timeline.fromTo(".social", {y:50}, {
    y:0, 
    opacity:1,
    duration: 0.5,
    stagger:{
        amount: 0.5,
        each: 0.5,
        from: "center",
    }
})


gsap.set(".pic", {
    opacity: 0,
    scale: 0.7,
    rotate: 3,
    y:100,
})

const pics = gsap.utils.toArray(".pic")

pics.forEach(pic=>{
    gsap.to(pic, {
        scrollTrigger: {
            trigger: pic,
            start: 100,
            
            scrub: true,
            toggleActions: "play none none none",
        },
        y:0,
        opacity:1,
        duration: 2,
        scale: 1,
        stagger: 1,
        ease: "linear",
        rotate: 0,
        scrub: true,
        delay: .3
    })
})
