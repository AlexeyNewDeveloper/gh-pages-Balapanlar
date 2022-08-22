import {gsap} from 'gsap';
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
gsap.registerPlugin(ScrollTrigger);

const sections = Array.from(document.querySelectorAll('.principles'));
const width = (sections[0].offsetWidth - 110) * (sections.length - 1)

export const  scroll = () =>  {
    const tl = gsap.timeline();
    tl.fromTo(sections, {x: 0}, {x: -width})
    
    ScrollTrigger.create({
        animation: tl,
        trigger: '.scroll-container',
        start: 'top top',
        end: 'bottom',
        scrub: 1,
        pin: true,
    })
}