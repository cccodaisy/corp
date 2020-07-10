import React, { useEffect, useRef, useState } from 'react'

import gsap, { TweenMax, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles, { fonts, global, main } from '../components/styles'

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

function BizInsta() {
  let bizRef = useRef(null);
  let keywordRef = useRef(null);
  let bizContRef = useRef(null);
  let curRef = useRef(null);

  let instaRef = useRef(null);

  const [cur, setCur] = useState(0);
  const [isClicked, setIsClicked] = useState(false);


  // const small = window.matchMedia("(max-width: 767px)");
  // const medium = window.matchMedia("(min-width: 768px) and (max-width: 991px)");
  // const large = window.matchMedia("(min-width: 992px) and (max-width: 1279px)");

  // let leftMenuWidth = function mediaQ(media) {
  //   if(small.matches) {
  //     return "37px";
  //   } else if (medium.matches) {
  //     return "49px";
  //   } else if (large.matches) {
  //     return "74px";
  //   } else {
  //     // do nothing
  //   }
  // };


  function prevFeed() {
    if (cur <= 0) {
      setCur(3)
    } else {
      setCur(cur - 1);
    }
  }
  function nextFeed() {
    if (cur >= 3) {
      setCur(0)
    } else {
      setCur(cur + 1);
    }
  }

  useEffect(()=>{
    const bizVideo = bizRef.firstElementChild;
    const bizContIn = bizContRef.firstElementChild;
    const bizBoard = bizRef.lastElementChild;
    const instaTit = instaRef.firstElementChild;
    const instaIn = instaRef.lastElementChild;

    gsap.registerPlugin(ScrollTrigger);

    TweenMax.to(bizVideo, {opacity: 0})

    //TODO: window.resize() 이벤트!!
    const windowW = window.innerWidth;

    if(windowW <= 600) {
      // 설명박스 진입
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bizContIn,
          start: "top center",
          end: "bottom center",
          scrub: true,
          // markers: true
        }
      })

      tl.to(bizContIn.firstElementChild, {
        transform: "scaleX(1)",
        duration: .5,
        ease: Power3.easeOut
      })

      tl.to(bizContIn.children[1], {
        transform: "scaleX(1)",
        duration: .5,
        ease: Power3.easeOut
      })

      tl.to(bizContIn.children[2], {
        transform: "scaleX(1)",
        duration: .5,
        ease: Power3.easeOut
      })

      // 보드: 닫는 애니메이션

      gsap.to(bizBoard, {
        zIndex: 2,
        scrollTrigger: {
          trigger: bizContIn,
          start: "bottom center",
          end: "110% center",
          // end: "bottom center",
          scrub: true,
          // markers: true
        },
        opacity: 1,
        position: "fixed",
        duration: .8,
        ease: Power3.easeIn
      })

      // 닫힘 상
      gsap.from(bizBoard.firstElementChild, {
        scrollTrigger: {
          trigger: bizContIn,
          start: "bottom center",
          end: "130% center",
          scrub: true,
          // markers: true
        },
        yPercent: -100,
        ease: Power3.easeInOut
      })

      // 닫힘 하
      gsap.from(bizBoard.children[1], {
        scrollTrigger: {
          trigger: bizContIn,
          start: "bottom center",
          end: "130% center",
          scrub: true,
          // markers: true
        },
        yPercent: 100,
        ease: Power3.easeInOut
      })

      // 화이트 보드 없애기
      gsap.from(bizBoard,{
        scrollTrigger: {
          trigger: instaTit,
          start: "center center",
          end: () => "+=" + instaRef?.offsetWidth,
          markers: true,
          scrub: true
        },
        opacity: 1,
        position: "fixed",
        zIndex: -1,
      })



      // Now 글자 나타남
      gsap.to(bizBoard.lastElementChild,{
        scrollTrigger: {
          trigger: instaTit,
          start: "15% center",
          end: "15% center",
          // markers: true,
          scrub: true
        },
        opacity: 1,
        top: "50%",
        xPercent: 0,
        yPercent: -50,
        scaleY: 1,
        delay: 1
      })

      // Now 글자 사라짐
      gsap.to(bizBoard.lastElementChild,{
        scrollTrigger: {
          trigger: instaTit,
          start: "center center",
          end: "center center",
          // markers: true,
          scrub: true
        },
        opacity: 0,
        duration: .8,
        ease: Power3.easeIn
      })

      // 인스타 나타나아
      gsap.from(instaIn, {
        scrollTrigger: {
          trigger: instaIn.firstElementChild,
          start: "25% center",
          end: () => "+=" + instaRef?.offsetWidth,
          scrub: true,
          onToggle: self =>
            // console.log("toggled. active?", self.isActive),
          {self.isActive ? setIsClicked(true) : setIsClicked(false) },
          markers: true
        },
        // opacity: 0,
        // yPercent: -10,
        // duration: 1.2,
        // delay: 2,
        // ease: Power3.easeIn
      })



    } else {
      // 설명박스 진입
      gsap.to(bizContRef, {
        scrollTrigger: {
          trigger: keywordRef.children[1],
          start: "bottom center",
          end: () => "+=" + bizContRef?.offsetWidth/3,
          scrub: true,
          // markers: true
        },
        position: "fixed"
      })

      gsap.to(bizContIn.firstElementChild, {
        scrollTrigger: {
          trigger: keywordRef.children[1],
          start: "bottom center",
          end: "+=200",
          scrub: true,
          // markers: true
        },
        transform: "scaleX(1)",
        duration: 1,
        ease: Power3.easeOut
      })

      gsap.to(bizContRef, {
        scrollTrigger: {
          trigger: keywordRef.children[2],
          start: "bottom center",
          end: () => "+=" + bizContRef?.offsetWidth/3,
          scrub: true,
          // markers: true
        },
        xPercent: -180,
        duration: 5,
        ease: "none"
      })

      // 보드: 닫는 애니메이션
      gsap.to(bizBoard, {
        zIndex: 2,
        scrollTrigger: {
          trigger: instaRef,
          start: "20% center",
          end: "20% center",
          // end: "bottom center",
          scrub: true,
          // markers: true
        },
        opacity: 1,
        position: "fixed",
        duration: .8,
        ease: Power3.easeIn
      })

      // 닫힘 상
      gsap.from(bizBoard.firstElementChild, {
        scrollTrigger: {
          trigger: instaRef,
          start: "5% center",
          end: "45% center",
          scrub: true,
          // markers: true
        },
        yPercent: -100,
        ease: Power3.easeInOut
      })

      // 닫힘 하
      gsap.from(bizBoard.children[1], {
        scrollTrigger: {
          trigger: instaRef,
          start: "5% center",
          end: "45% center",
          scrub: true,
          // markers: true
        },
        yPercent: 100,
        ease: Power3.easeInOut
      })

      // 화이트 보드 없애기
      gsap.from(bizBoard,{
        scrollTrigger: {
          trigger: instaTit,
          start: "center center",
          end: "bottom center",
          // markers: true,
          scrub: true
        },
        opacity: 1,
        position: "fixed",
        zIndex: -1,
      })

      // Now 글자 나타남
      gsap.to(bizBoard.lastElementChild,{
        scrollTrigger: {
          trigger: instaTit,
          start: "15% center",
          end: "15% center",
          // markers: true,
          scrub: true
        },
        opacity: 1,
        top: "50%",
        xPercent: 0,
        yPercent: -50,
        scaleY: 1,
        delay: 1
      })

      // Now 글자 사라짐
      gsap.to(bizBoard.lastElementChild,{
        scrollTrigger: {
          trigger: instaTit,
          start: "center center",
          end: "center center",
          // markers: true,
          scrub: true
        },
        opacity: 0,
        duration: .8,
        ease: Power3.easeIn
      })

      // 인스타 나타나아
      gsap.from(instaIn, {
        scrollTrigger: {
          trigger: instaIn.firstElementChild,
          start: "25% center",
          end: () => "+=" + instaRef?.offsetWidth,
          scrub: true,
          onToggle: self =>
            // console.log("toggled. active?", self.isActive),
          {self.isActive ? setIsClicked(true) : setIsClicked(false) },
          // markers: true
        },
        // opacity: 0,
        // yPercent: -10,
        // duration: 1.2,
        // delay: 2,
        // ease: Power3.easeIn
      })

    }


    // ------------------------------------------------------------------ 공통

    // 배경
    gsap.to(bizVideo,{
      scrollTrigger: {
        trigger: bizVideo,
        start: "top center",
        end: "50% center",
        // markers: true,
        scrub: true
      },
      opacity: 1,
      ease: Power3.easeOut,
      duration: .4
    })

    gsap.to(bizVideo,{
      scrollTrigger: {
        trigger: bizVideo,
        start: "top center",
        end: () => "+=" + bizContRef?.offsetWidth/3,
        // end: "50% center",
        // markers: true,
        scrub: true
      },
      position: "fixed"
    })

    gsap.to(keywordRef,{
      scrollTrigger: {
        trigger: bizVideo,
        start: "top center",
        end: "60% center",
        scrub: true,
        // markers: true,
      },
      zIndex: 1,
      position: "fixed"
    })

    //키워드 글자들
    gsap.to(keywordRef.children[0],{
      scrollTrigger: {
        trigger: bizVideo,
        start: "10% center",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
      xPercent: -210,
      duration: 3,
      ease: "none"
    })

    gsap.to(keywordRef.children[1],{
      scrollTrigger: {
        trigger: bizVideo,
        start: "10% center",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
      xPercent: 200,
      duration: 2.6,
      ease: "none"
    })

    gsap.to(keywordRef.children[2],{
      scrollTrigger: {
        trigger: bizVideo,
        start: "10% center",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
      xPercent: -270,
      duration: 1.6,
      ease: "none"
    })

// ---------------------------------------------------------------------------------



    // 사라지는 biz content
    gsap.to(bizContRef, {
      scrollTrigger: {
        trigger: instaRef,
        start: "center center",
        end: "75% center",
        scrub: true,
        // markers: true
      },
      opacity: 0,
      position: 'relative',
      zIndex: -1,
      ease: Power3.easeInOut
    })

    // 나타나는 인스타
    gsap.from(instaRef, {
      scrollTrigger: {
        trigger: instaTit,
        start: "center center",
        end: "center center",
        scrub: true,
        // markers: true
      },
      opacity: 0,
      ease: Power3.easeInOut
    })

    // 비디오 영상 없애기
    gsap.from(bizVideo,{
      scrollTrigger: {
        trigger: instaTit,
        start: "bottom center",
        end: "bottom center",
        // markers: true,
        scrub: true
      },
      opacity: 1,
      ease: Power3.easeOut,
      duration: .4
    })

    gsap.from(bizVideo,{
      scrollTrigger: {
        trigger: instaTit,
        start: "5% center",
        end: "10% center",
        // markers: true,
        scrub: true
      },
      position: "fixed"
    })

    gsap.from(keywordRef,{
      scrollTrigger: {
        trigger: instaTit,
        start: "5% center",
        end: "10% center",
        scrub: true,
        // markers: true,
      },
      zIndex: 1,
      position: "fixed"
    })


    gsap.to(instaTit, {
      scrollTrigger: {
        trigger: instaTit,
        start: "bottom center",
        end: "+=100",
        // markers: true,
        scrub: true
      },
      yPercent: -75,
      duration: .8,
      ease: "none"
    })




  },[bizRef, keywordRef, bizContRef])


  return (
    <>
      <style jsx>{fonts}</style>
      <style jsx global>{global}</style>
      <style jsx>{main}</style>
      <section id="biz" ref={el => {bizRef = el}}>
        <div className={`video`}>
          <video width="100%" height="auto" autoPlay muted loop playsInline
                 poster="./images/bgCover.png" className="grad_video">
            <source src="./images/bgVideo.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className="keywords_box">
          <div className={`keywords`} ref={el => {keywordRef = el}}>
            <span className="keyword_1">creative</span>
            <span className="keyword_2" >trendy</span>
            <span className="keyword_3" >potential</span>
          </div>
        </div>
        <div className="biz_move_wrap">
          <div className="fixed_wrap" ref={el => {bizContRef = el}} >
            <div className="biz_inner"  >
              <div className={`biz_cont cont1`} >
                <div className="cont_top">
                  <span>01</span>
                  <p className="cont_title">
                    <span>Distribution</span>
                    <span>Industry</span>
                  </p>
                </div>
                <div className="cont_bottom">
                  <div className="line_title">
                    <span>Distribution Industry</span>
                  </div>
                  <p className="text">
                    슬퍼하는 토끼, 아름다운 남은 겨울이 계십니다. 오는 보고, 잠, 부끄러운 하나에 둘 마리아 밤을 거외다.
                    <br/>
                    멀리 오는 벌써 노루, 패, 위에 멀듯이, 어머님, 없이 있습니다. 다하지 어머님, 묻힌 애기 아침이 있습니다.
                    <br/>
                    옥 너무나 멀리 둘 위에 별 다 속의 계십니다. 어머님, 책상을 계절이 소학교 까닭입니다.
                  </p>
                </div>
              </div>
              <div className="biz_cont cont2" >
                <div className="cont_top">
                  <span>02</span>
                  <p className="cont_title">
                    <span>Contents</span>
                    <span>tv</span>
                  </p>
                </div>
                <div className="cont_bottom">
                  <div className="line_title">
                    <span>Distribution Industry</span>
                  </div>
                  <p className="text">
                    슬퍼하는 토끼, 아름다운 남은 겨울이 계십니다. 오는 보고, 잠, 부끄러운 하나에 둘 마리아 밤을 거외다.
                    <br/>
                    멀리 오는 벌써 노루, 패, 위에 멀듯이, 어머님, 없이 있습니다. 다하지 어머님, 묻힌 애기 아침이 있습니다.
                    <br/>
                    옥 너무나 멀리 둘 위에 별 다 속의 계십니다. 어머님, 책상을 계절이 소학교 까닭입니다.
                  </p>
                </div>
              </div>
              <div className="biz_cont cont3" >
                <div className="cont_top">
                  <span>03</span>
                  <p className="cont_title">
                    <span>Intellectual</span>
                    <span>Property</span>
                  </p>
                </div>
                <div className="cont_bottom">
                  <div className="line_title">
                    <span>Distribution Industry</span>
                  </div>
                  <p className="text">
                    슬퍼하는 토끼, 아름다운 남은 겨울이 계십니다. 오는 보고, 잠, 부끄러운 하나에 둘 마리아 밤을 거외다.
                    <br/>
                    멀리 오는 벌써 노루, 패, 위에 멀듯이, 어머님, 없이 있습니다. 다하지 어머님, 묻힌 애기 아침이 있습니다.
                    <br/>
                    옥 너무나 멀리 둘 위에 별 다 속의 계십니다. 어머님, 책상을 계절이 소학교 까닭입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="boards">
          <div className="board1"/>
          <div className="board2"/>
          <div className="title">
            <span>NOW!</span>
            <span className="colorful">Instagram of Saracen</span>
          </div>
        </div>
      </section>
      <section id="ig_now" ref={el => {instaRef = el}} className={ isClicked ? "move" : ''} >
        <div className="title">
          <span>NOW!</span>
          <span className="colorful">Instagram of Saracen</span>
        </div>
        <div className="inner">
          <div className="ig_feeds">
            <div className="ig_feed">
              <img src={`/images/post_${cur <= 0 ? 3 : cur - 1}.png`} alt="insta_feed"/>
            </div>
            <div className="ig_feed current" ref={el => {curRef = el}}>
              <div className="btn prev" onClick={prevFeed} >
                <img src="/images/icon_left_arrow_big.svg" alt="left"/>
              </div>
              <img src={`/images/post_${cur}.png`} alt="insta_feed"/>
              <div className="btn next" onClick={nextFeed}>
                <img src="/images/icon_right_arrow_big.svg" alt="right"/>
              </div>
            </div>
            <div className="ig_feed">
              <img src={`/images/post_${cur >= 3 ? 0 : cur + 1}.png`} alt="insta_feed"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BizInsta;
