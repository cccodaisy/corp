import Link from 'next/link';
import { useState, useEffect } from 'react';

const linkStyle = {

}

const Header = () => {

  const [open, setOpen] = useState(false);
  const [go, handleGo] = useState(false);

  useEffect(() => {
    if(go){
      window.scrollTo(0, 0)
      if(window.scrollY === 0){
        handleGo(false)
      }
    }
  })

  return (
    <div>
      <style jsx>
        {`
        .logo{
          position: fixed;
          top: 10px;
          left: 10px;
          z-index: 999;
        }
        .logo a{
          text-decoration: none;
          font-size: 2rem;
        }
        .logo a img{
          width: 160px;
          padding: 0 15px;
        }
        
        #nav {
          position: fixed;
          top: 0;
          right: 0;
          width: 60px;
          height: 100vh;
          z-index: 998;
          display: flex;
          flex-flow: column wrap;
          justify-content: space-between;
          padding: 20px 0;
        }
        
        .lang, .up{
          flex: 1;
          width: 100%;
          display: flex;
          flex-flow: column wrap;
        }
        .lang li{
          cursor: pointer;
          text-align: center;
          margin: 10px auto;
        }
        .lang li a{ position: relative; }
        .lang li span{
          //position: absolute;
          font-weight: bold;
          color: #3d3d3d;
        }
        .lang.open li span{ color: #fff; }
        .lang span.line-hover:after{
          height: .3em;
          top: 1.5em;
        }
        .lang.open span.line-hover:after{
          background-color: #fff;
        }
        
        .up{ justify-content: flex-end; cursor: pointer; }
        .up span{
          width: 50px; 
          height: 50px; 
          background: #9d9d9d; 
          border-radius: 3rem;
          align-items: center; 
          display: flex; 
          justify-content: center; 
          font-size: 1rem; 
          color: #fff;
        }
        
        // 햄버거 네비게이션
        #nav-icon{
          width: 40px;
          height: 25px;
          margin: 0 auto;
          position: relative;
          -webkit-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
          -webkit-transition: .5s ease-in-out;
          -moz-transition: .5s ease-in-out;
          -o-transition: .5s ease-in-out;
          transition: .5s ease-in-out;
          cursor: pointer;
        }
        
        #nav-icon span{
          display: block;
          position: absolute;
          height: 3px;
          width: 100%;
          background: #4d4d4d;
          background-blend-mode: multiply;
          border-radius: 9px;
          opacity: 1;
          left: 0;
          -webkit-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
          -webkit-transition: .25s ease-in-out;
          -moz-transition: .25s ease-in-out;
          -o-transition: .25s ease-in-out;
          transition: .25s ease-in-out;                         
        }
        #nav-icon span:nth-child(1) {
          top: 0;
          -webkit-transform-origin: left center;
          -moz-transform-origin: left center;
          -o-transform-origin: left center;
          transform-origin: left center;
        }
        
        #nav-icon span:nth-child(2) {
          top: 12px;
          -webkit-transform-origin: left center;
          -moz-transform-origin: left center;
          -o-transform-origin: left center;
          transform-origin: left center;
        }
        
        #nav-icon span:nth-child(3) {
          top: 24px;
          -webkit-transform-origin: left center;
          -moz-transform-origin: left center;
          -o-transform-origin: left center;
          transform-origin: left center;
        }
        
        #nav-icon.open span{ background: #fff;}
        
        #nav-icon.open span:nth-child(1) {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
          top: -3px;
          left: 8px;
        }
        
        #nav-icon.open span:nth-child(2) {
          width: 0%;
          opacity: 0;
        }
        
        #nav-icon.open span:nth-child(3) {
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
          top: 25px;
          left: 8px;
        }
        
        // 메뉴
        #nav-menu{
          position: fixed;
          width: 100%;
          height: 100%;
          display: flex;
          z-index: 997;
          background-color: #ff7384;
          justify-content: center;
          align-items: center;
          -webkit-transition: .5s ease-in-out;
          -moz-transition: .5s ease-in-out;
          -o-transition: .5s ease-in-out;
          transition: .5s ease-in-out;
          -webkit-transform: translate(0, -100%);
          -moz-transform: translate(0, -100%);
          -o-transform: translate(0, -100%);
          transform: translate(0, -100%);
          padding: 0 10%;
        }
        #nav-menu.open{
          -webkit-transform: translate(0%, 0%);
          -moz-transform: translate(0%, 0%);
          -o-transform: translate(0%, 0%);
          transform: translate(0%, 0%);
        }
        
        #nav-menu .sns-box{ flex: 1; }
        #nav-menu .sns-box .sns{ 
          display: flex; 
          flex-wrap: wrap; 
          width: 240px; 
        }
        #nav-menu .sns-box > ul, #nav-menu .sns-box > div{ 
          opacity: 0;
          transform: translateY(-20px);
          transition-property: transform,opacity;
          transition-duration: .4s, .4s;
          transition-timing-function: cubic-bezier(.645,.045,.355,1),cubic-bezier(.645,.045,.355,1);
        }
        #nav-menu.open .sns-box > ul, #nav-menu.open .sns-box > div{
          opacity: 1;
          -webkit-transform: translate3d(0,0,0);
          transform: translate3d(0,0,0);
        }
        #nav-menu.open .sns-box .sns{ -webkit-transition-delay: .65s; transition-delay: .65s; }
        #nav-menu.open .sns-box > div{ -webkit-transition-delay: .75s; transition-delay: .75s; }
        
        #nav-menu .sns-box .sns li{ flex: 1; display: flex; justify-content: center;}
        #nav-menu .sns-box > div{ width: 210px; border: 1px solid #fff; color: #fff; padding: 8px; text-align: center; margin: 0 15px;}
        #nav-menu .sns-box > div a{ display: flex; justify-content: center; align-items: center;}
        #nav-menu .sns-box > div a span{ font-size: 0.9rem; }
        #nav-menu .sns-box > div a img{ height: .85rem; width: auto; padding: 0 7px; }
        #nav-menu .sns-box > div a img:last-child{ padding-left: 10px; }
        
        // 메뉴 타이틀        
        #nav-menu .menu-title{ flex: 1; }
        #nav-menu .menu-title li{
          position: relative;
          display: flex;
          justify-content: flex-start;
          cursor: pointer;
          margin-bottom: 11px;
          opacity: 0;
          top: 0;
          transform: translateY(-20px);
          transition-property: transform,opacity;
          transition-duration: .4s,.4s;
          transition-timing-function: cubic-bezier(.645,.045,.355,1),cubic-bezier(.645,.045,.355,1);
        }
        #nav-menu .menu-title li:last-child{
          margin-bottom: 0;
        }
        #nav-menu .menu-title li a{
          text-align: left;
          text-decoration: none;
          -webkit-text-stroke: 1px #fff;
          font-size: 5.6rem;
          font-weight: 700;
          font-family: "GmarketSansBold", sans-serif;
          letter-spacing: -.93px;
          color: hsla(0,0%,100%,0);
          transform: translateZ(0);
          transition-property: color;
          transition-duration: .2s;
          transition-timing-function: ease-in-out;
        }
        
        #nav-menu .menu-title li h3{ color: #fff; text-align: left; font-size: 1.6rem; font-weight: 700; margin-top: 10px; margin-right: 30px; }
        
        #nav-menu .menu-title li:nth-child(1){ -webkit-transition-delay: .4s; transition-delay: .4s; }
        #nav-menu .menu-title li:nth-child(2){ -webkit-transition-delay: .5s; transition-delay: .5s; }
        #nav-menu .menu-title li:nth-child(3){ -webkit-transition-delay: .6s; transition-delay: .6s; }
        #nav-menu .menu-title li:nth-child(4){ -webkit-transition-delay: .7s; transition-delay: .7s; }
        
        #nav-menu.open .menu-title li{
          opacity: 1;
          -webkit-transform: translate3d(0,0,0);
          transform: translate3d(0,0,0);
        }
        #nav-menu.open .menu-title li:nth-child(1){ -webkit-transition-delay: .65s; transition-delay: .65s; }
        #nav-menu.open .menu-title li:nth-child(2){ -webkit-transition-delay: .75s; transition-delay: .75s; }
        #nav-menu.open .menu-title li:nth-child(3){ -webkit-transition-delay: .85s; transition-delay: .85s; }
        #nav-menu.open .menu-title li:nth-child(4){ -webkit-transition-delay: .95s; transition-delay: .95s; }
          
        #nav-menu .menu-title li:hover a{
          animation: rever 0.5s;
          color: white;
        }
        
        @keyframes rever {
          0%{
            -webkit-transform: scaleY(0);
            transform: scaleY(0);
            color: hsla(0,0%,100%,0);
            -webkit-text-stroke: 1px #fff;
          }
          100%{
            -webkit-transform: scale(1);
            transform: scale(1);
            color: white;
          }
        }
      `}
      </style>
      <div className="logo">
        <Link href="/"><a style={linkStyle}><img src={open ? "/images/saracen_w.png" : "/images/saracen.png"} alt="사라센로고" /></a></Link>
      </div>
      <div id="nav">
        <ul className={`${open ? 'open' : ''} lang`}>
          <li><Link href="/index2"><a><span className="line-hover">KR</span></a></Link></li>
          <li><Link href="/scroller"><a><span className="line-hover">EN</span></a></Link></li>
          <li><Link href="/scrollPara"><a><span className="line-hover">CN</span></a></Link></li>
        </ul>
        <div id="nav-icon" className={open ? 'open' : ''} onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="up" onClick={() => handleGo(true)}>
          <span>Top</span>
        </div>
      </div>
      <div id="nav-menu" className={open ? 'open' : ''}>
        <div className="sns-box">
          <ul className="sns">
            <li><a href="https://www.youtube.com/user/thesaranail"><img src="/images/icon-fb.svg" alt="ytb"/></a></li>
            <li><a href="https://www.instagram.com/saracen_official"><img src="/images/icon-insta.svg" alt="ytb"/></a></li>
            <li><a href="https://blog.thesaracen.com"><img src="/images/icon-fb.svg" alt="ytb"/></a></li>
            <li><a href="https://tv.naver.com/saracentv"><img src="/images/icon-fb.svg" alt="ytb"/></a></li>
          </ul>
          <div>
            <a href="https://thesaracen.com">
              <img src="/images/icon_market.svg" alt="쇼핑몰아이콘"/>
              <span>쇼핑몰바로가기</span>
              <img src="/images/icon_right_arrow.png" alt="오른쪽 화살표"/>
            </a>
          </div>
        </div>
        <ul className="menu-title">
          <li><h3>01</h3><Link href="/company"><a><span>COMPANY</span></a></Link></li>
          <li><h3>02</h3><Link href="/business"><a><span>BUSINESS</span></a></Link></li>
          <li><h3>03</h3><Link href="/news"><a><span>NEWS</span></a></Link></li>
          <li><h3>04</h3><Link href="/contact"><a><span>CONTACT</span></a></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
