import React, { useEffect, useRef } from 'react'

import gsap, { TweenMax, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles, { fonts, global, main } from '../components/styles'

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

function Main() {
  let mainRef = useRef(null);

  // useEffect(() => {
  //   // 마우스 반응(호버)
  //   const mainIn = mainRef.firstElementChild;
  //   const mainImg = mainIn.firstElementChild;
  //
  //   const maxRot = 15;
  //   const setRot = gsap.quickSetter(mainImg, "rotationY", "deg");
  //
  //   gsap.set(mainImg, {transformOrigin: "center center"});
  //
  //   let getPercent;
  //   function resize() {
  //     getPercent = gsap.utils.mapRange(0, innerWidth, -1, 1);
  //   }
  //   window.addEventListener("mousemove", e => {
  //     const percent = getPercent(e.pageX);
  //     setRot(percent * maxRot);
  //   })
  //
  //   window.addEventListener("resize", resize);
  //   resize();
  //
  //   return () => {
  //     window.addEventListener("mousemove", e => {
  //       const percent = getPercent(e.pageX);
  //       setRot(percent * maxRot);
  //     })
  //     window.addEventListener("resize", resize);
  //     resize();
  //
  //   }
  // }, [mainRef])

  useEffect(()=>{
    const mainIn = mainRef.firstElementChild;
    const mainSlo = mainRef.lastElementChild;
    const mainImg = mainIn.firstElementChild;
    const mainChild = mainRef.children;
    const mainLogo = mainIn.children[1];
    const mainLogoChild = mainLogo.firstElementChild.children;


    TweenMax.to(
      mainImg,
      1.5,
      {
        opacity: 1,
        transform: "scale(1)",
        ease: Power3.easeOut,
        delay: 1.7
      }
    )
    TweenMax.to(
      mainLogoChild,
      1.6,
      {
        opacity: 1
      }
    )

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(mainRef, {
      scrollTrigger: {
        trigger: mainChild,
        start: "center center",
        // endTrigger: bizRef,
        end: "70% center",
        scrub: true
      },
      y: -300,
      duration: 1
    });

    // gsap.to(mainImg, {
    //   scrollTrigger: {
    //     trigger: mainChild,
    //     start: "center center",
    //     end: "70% center",
    //     // markers: true,
    //     scrub: true
    //   },
    //   duration: .5,
    //   yPercent: -100,
    //   ease: "none"
    // });
    //
    // gsap.to(mainLogo, {
    //   scrollTrigger: {
    //     trigger: mainChild,
    //     start: "center center",
    //     end: "70% center",
    //     // markers: true,
    //     scrub: true
    //   },
    //   duration: .3,
    //   yPercent: 150,
    //   ease: "none"
    // });

    gsap.to(mainSlo, {
      scrollTrigger: {
        trigger: mainRef,
        start: "60% center",
        end: "60% 40%",
        // markers: true,
        toggleActions: "restart resume reverse resume"
      },
      transform: "scaleY(1)",
      duration: 1,
      opacity: 1
    });

  },[mainRef])

  return (
    <>
      <style jsx>{fonts}</style>
      <style jsx global>{global}</style>
      <style jsx>{main}</style>
      <section id="main" ref={el => {mainRef = el}}>
        <div className="inner">
          <img src="./images/object.png" alt="object"/>
          <div className={`top_logo_box box1`}>
            <div className="top_logo">
              <figure className="top_logo_text top_logo_text_1">
                <span>S</span>
              </figure>
              <figure className="top_logo_text top_logo_text_2">
                <span>A</span>
              </figure>
              <figure className="top_logo_text top_logo_text_3">
                <span>R</span>
              </figure>
              <figure className="top_logo_text top_logo_text_4">
                <span>A</span>
              </figure>
              <figure className="top_logo_text top_logo_text_5">
                <span>C</span>
              </figure>
              <figure className="top_logo_text top_logo_text_6">
                <span>E</span>
              </figure>
              <figure className="top_logo_text top_logo_text_7">
                <span>N</span>
              </figure>
            </div>
          </div>
        </div>
        <div className="slogan">
          <h2>슬로건 사라센 짱짱맨</h2>
          <h2>슬로건 두번쨰 사라센 쵝오</h2>
        </div>
      </section>
    </>
  );
}

export default Main;
