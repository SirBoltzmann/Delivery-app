// =============== GSAP ANIMATIONS ===============
// -------------- LARGE DEVICES => PC--------------
if (window.innerWidth > 767) {
    //------------ HOME SECTION ----------
    gsap.from('.home__title', 1.5, {opacity: 0, x:-300, delay: 0.2});
    gsap.from('.home__description', 1.5, {opacity: 0, x:-200, delay: 0.4});
    gsap.from('.home__img', 1.5, {opacity: 0, y:300, delay: 0.5});

    
    //====================== GSAP SCroll-animations ==================================
    
    //--------- ABOUT SECTION ------------
    document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from(".about__description", {
            scrollTrigger: {
                trigger: ".about__description", 
                start: "top 80%", 
                end: "top 20%", 
            },
            y: 100, 
            opacity: 0, 
            duration: 1 
        });
    
        gsap.from(".about__img", {
            scrollTrigger: {
                trigger: ".about__img",
                start: "top 80%", 
                end: "top 20%", 
            },
            y: 100, 
            opacity: 0, 
            duration: 1 
        });
    });
    
    //--------- SECURITY SECTION ------------
    document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from(".security__description", {
            scrollTrigger: {
                trigger: ".security__description", 
                start: "top 80%", 
                end: "top 20%", 
            },
            z: 100, 
            opacity: 0, 
            duration: 1 
        });
    
        gsap.from(".security__img", {
            scrollTrigger: {
                trigger: ".security__img", 
                start: "top 80%", 
                end: "top 20%", 
            },
            z: 100, 
            opacity: 0, 
            duration: 1 
        });
    });
    
    
    //--------- SERVICES SECTION ------------
    document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from(".services__payment", {
            scrollTrigger: {
                trigger: ".services__payment", 
                start: "top 80%", 
                end: "top 20%", 
            },
            x: 200, 
            opacity: 0, 
            duration: 1 
        });
    
        gsap.from(".services__find", {
            scrollTrigger: {
                trigger: ".services__find", 
                start: "top 80%", 
                end: "top 20%", 
            },
            x: 200, 
            opacity: 0, 
            duration: 1.3 
        });
    
        gsap.from(".services__recieved", {
            scrollTrigger: {
                trigger: ".services__recieved", 
                start: "top 80%", 
                end: "top 20%", 
            },
            x: 200, 
            opacity: 0, 
            duration: 1.6 
        });
    }); 
    
    
    //--------- APP SECTION ------------
    document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from(".app__description", {
            scrollTrigger: {
                trigger: ".app__description", 
                start: "top 80%", 
                end: "top 20%", 
            },
            x: 100, 
            opacity: 0, 
            duration: 1.3 
        });
    
        gsap.from(".app__title", {
            scrollTrigger: {
                trigger: ".app__title", 
                start: "top 80%", 
                end: "top 20%", 
            },
            z: 300, 
            opacity: 0, 
            duration: 1.4 
        });
    
        gsap.from(".app__img", {
            scrollTrigger: {
                trigger: ".app__img", 
                start: "top 80%", 
                end: "top 20%", 
            },
            x: -200, 
            opacity: 0, 
            duration: 1.5 
        });
    });
    
    
    //------------ CONTACT SECTION  ----------------------
    document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from(".contact__title", {
            scrollTrigger: {
                trigger: ".contact__title", 
                start: "top 80%", 
                end: "top 20%", 
            },
            x: -100, 
            opacity: 0, 
            duration: 1 
        });
    
        gsap.from(".contact__description", {
            scrollTrigger: {
                trigger: ".contact__description", 
                start: "top 80%", 
                end: "top 20%", 
            },
            x: -200, 
            opacity: 0, 
            duration: 1.4 
        });
    
        gsap.from(".contact__content", {
            scrollTrigger: {
                trigger: ".contact__content", 
                start: "top 80%", 
                end: "top 20%", 
            },
            x: 200, 
            opacity: 0, 
            duration: 1.6 
        });
    });
}

// -------------- SMALL DEVICES ----------------

if (window.innerWidth < 576 && window.innerWidth > 450) {
    //------------ HOME SECTION ----------
    gsap.from('.home__title', 1.5, {opacity: 0, x:-300, delay: 0.2});
    gsap.from('.home__description', 1.5, {opacity: 0, x:-200, delay: 0.3});
    gsap.from('.home__img', 1.5, {opacity: 0, x:150, delay: 0.4});
    
    
    //====================== GSAP SCroll-animations ==================================
    
    //--------- ABOUT SECTION ------------
    document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from(".about__description", {
            scrollTrigger: {
                trigger: ".about__description", 
                start: "top 80%", 
                end: "top 20%", 
            },
            x: 100, 
            opacity: 0, 
            duration: 1 
        });
    
        gsap.from(".about__img", {
            scrollTrigger: {
                trigger: ".about__img",
                start: "top 80%", 
                end: "top 20%", 
            },
            x: -200, 
            opacity: 0, 
            duration: 1 
        });
    });
    
    //--------- SECURITY SECTION ------------
    document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from(".security__description", {
            scrollTrigger: {
                trigger: ".security__description", 
                start: "top 80%", 
                end: "top 20%", 
            },
            z: 100, 
            opacity: 0, 
            duration: 1 
        });
    
        gsap.from(".security__img", {
            scrollTrigger: {
                trigger: ".security__img", 
                start: "top 80%", 
                end: "top 20%", 
            },
            z: 100, 
            opacity: 0, 
            duration: 1 
        });
    });
    
    
    //--------- SERVICES SECTION ------------
    document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from(".services__payment", {
            scrollTrigger: {
                trigger: ".services__payment", 
                start: "top 80%", 
                end: "top 20%", 
            },
            x: 200, 
            opacity: 0, 
            duration: 1 
        });
    
        gsap.from(".services__find", {
            scrollTrigger: {
                trigger: ".services__find", 
                start: "top 80%", 
                end: "top 20%", 
            },
            x: 200, 
            opacity: 0, 
            duration: 1.3 
        });
    
        gsap.from(".services__recieved", {
            scrollTrigger: {
                trigger: ".services__recieved", 
                start: "top 80%", 
                end: "top 20%", 
            },
            x: 200, 
            opacity: 0, 
            duration: 1.6 
        });
    }); 
    
    
    //--------- APP SECTION ------------
    document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from(".app__description", {
            scrollTrigger: {
                trigger: ".app__description", 
                start: "top 80%", 
                end: "top 20%", 
            },
            x: 100, 
            opacity: 0, 
            duration: 1.3 
        });
    
        gsap.from(".app__title", {
            scrollTrigger: {
                trigger: ".app__title", 
                start: "top 80%", 
                end: "top 20%", 
            },
            z: 300, 
            opacity: 0, 
            duration: 1.4 
        });
    
        gsap.from(".app__img", {
            scrollTrigger: {
                trigger: ".app__img", 
                start: "top 80%", 
                end: "top 20%", 
            },
            x: -200, 
            opacity: 0, 
            duration: 1.5 
        });
    });
    
    
    //------------ CONTACT SECTION  ----------------------
    document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from(".contact__title", {
            scrollTrigger: {
                trigger: ".contact__title", 
                start: "top 80%", 
                end: "top 20%", 
            },
            x: -50, 
            opacity: 0, 
            duration: 1 
        });
    
        gsap.from(".contact__description", {
            scrollTrigger: {
                trigger: ".contact__description", 
                start: "top 80%", 
                end: "top 20%", 
            },
            x: -200, 
            opacity: 0, 
            duration: 1.4 
        });
    
        gsap.from(".contact__content", {
            scrollTrigger: {
                trigger: ".contact__content", 
                start: "top 80%", 
                end: "top 20%", 
            },
            x: 100, 
            opacity: 0, 
            duration: 1.6 
        });
    });
} 


// -------------- SMALLER DEVICES ----------------

 if (window.innerWidth < 450) {
    //------------ HOME SECTION ----------
    gsap.from('.home__title', 1.5, {opacity: 0, x:-300, delay: 0.2});
    gsap.from('.home__description', 1.5, {opacity: 0, x:-200, delay: 0.3});
    gsap.from('.home__img', 1.5, {opacity: 0, x:150, delay: 0.4});
    
    
    //====================== GSAP SCroll-animations ==================================
    
    //--------- ABOUT SECTION ------------
    document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from(".about__description", {
            scrollTrigger: {
                trigger: ".about__description", 
                start: "top 90%", 
                end: "top 10%", 
            },
            x: 100, 
            opacity: 0, 
            duration: 1 
        });
    
        gsap.from(".about__img", {
            scrollTrigger: {
                trigger: ".about__img",
                start: "top 90%", 
                end: "top 10%", 
            },
            x: -200, 
            opacity: 0, 
            duration: 1 
        });
    });
    
     //--------- SECURITY SECTION ------------
    document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from(".security__description", {
            scrollTrigger: {
                trigger: ".security__description", 
                start: "top 90%", 
                end: "top 10%", 
            },
            z: 100, 
            opacity: 0, 
            duration: 1 
        });
    
        gsap.from(".security__img", {
            scrollTrigger: {
                trigger: ".security__img", 
                start: "top 90%", 
                end: "top 10%", 
            },
            z: 100, 
            opacity: 0, 
            duration: 1 
        });
    });
    
    
    //--------- SERVICES SECTION ------------
    document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from(".services__payment", {
            scrollTrigger: {
                trigger: ".services__payment", 
                start: "top 90%", 
                end: "top 10%", 
            },
            x: 200, 
            opacity: 0, 
            duration: 1 
        });
    
        gsap.from(".services__find", {
            scrollTrigger: {
                trigger: ".services__find", 
                start: "top 90%", 
                end: "top 90%", 
            },
            x: 200, 
            opacity: 0, 
            duration: 1.3 
        });
    
        gsap.from(".services__recieved", {
            scrollTrigger: {
                trigger: ".services__recieved", 
                start: "top 90%", 
                end: "top 10%", 
            },
            x: 200, 
            opacity: 0, 
            duration: 1.6 
        });
    }); 
    
    
    //--------- APP SECTION ------------
    document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from(".app__description", {
            scrollTrigger: {
                trigger: ".app__description", 
                start: "top 90%", 
                end: "top 10%", 
            },
            x: 100, 
            opacity: 0, 
            duration: 1.3 
        });
    
        gsap.from(".app__title", {
            scrollTrigger: {
                trigger: ".app__title", 
                start: "top 90%", 
                end: "top 10%", 
            },
            z: 300, 
            opacity: 0, 
            duration: 1.4 
        });
    
        gsap.from(".app__img", {
            scrollTrigger: {
                trigger: ".app__img", 
                start: "top 90%", 
                end: "top 10%", 
            },
            x: -200, 
            opacity: 0, 
            duration: 1.5 
        });
    });
    
    
    //------------ CONTACT SECTION  ----------------------
    document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from(".contact__title", {
            scrollTrigger: {
                trigger: ".contact__title", 
                start: "top 90%", 
                end: "top 10%", 
            },
            x: -50, 
            opacity: 0, 
            duration: 1 
        });
    
        gsap.from(".contact__description", {
            scrollTrigger: {
                trigger: ".contact__description", 
                start: "top 90%", 
                end: "top 10%", 
            },
            x: -200, 
            opacity: 0, 
            duration: 1.4 
        });
    
        gsap.from(".contact__content", {
            scrollTrigger: {
                trigger: ".contact__content", 
                start: "top 90%", 
                end: "top 10%", 
            },
            x: 100, 
            opacity: 0, 
            duration: 1.6 
        });
    });
}