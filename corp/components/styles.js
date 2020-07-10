/* styles.js */
import css from 'styled-jsx/css'

export const company = css`
  h2{ text-indent: -9999999px; }
  .tab{ width: 40%; margin: 100px auto; display: flex; justify-content: center; align-items: center; }
  .tab li{ cursor:pointer; position: relative; font-family: 'GmarketSansBold', 'sans-serif'; font-size: 2rem; text-align: center; padding: 0 20px;}
  
  .tab li:after{ 
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    height: 7px;
    width: 90%;
    margin: 0 5%;
    background: linear-gradient(to right, #7bfffc, #ff72c6);
    transform-origin: left top;
    transition-timing-function: cubic-bezier(.25,.46,.45,.94);
    opacity: 0;
  }
  .tab li.on:after{
    animation: bar 0.8s ease;
    animation-delay: 0.8s;
    transition: opacity 0.8s ease;
    opacity: 1;
  }
  
  section { width: 100%; min-height: 1020px; position: relative; display: flex; justify-content: center; align-items: center; }

  #greeting {
    margin-bottom: 200px; 
  }
  #greeting h3{
    position: absolute;
    top: 0;
    font-size: 12rem;
    letter-spacing: 30px;
    font-weight: 900;
    color: #ff7384;
  }
  #greeting > img {
    position: absolute;
    width: 33%;
    height: auto;
    bottom: 0;    
  }
  #greeting .greeting {
    width: 80%;
  }
  #greeting .greeting .left{ font-family: 'GmarketSansBold', 'sans-serif'; position: absolute; font-size: 1.6rem; left: 15%; bottom: 13%; letter-spacing: 5px; display: flex; flex-direction: column; align-items: flex-end; text-align: left; }
  #greeting .greeting .left > div{ flex: 1; }
  #greeting .greeting .left .tit{ font-size: 4rem; position: relative; letter-spacing: 15px; }
  #greeting .greeting .left .tit:after{ content: "."; position: absolute; top: -100%; right: -40px; color: #ff7384; font-size: 5.3rem;}
  
  #greeting .greeting .right{ position:absolute; font-weight: 900; font-size: 5.6rem; right: 8%; bottom: 0;}
  #greeting .greeting .right span{ color: #ff7384;}
  
  #q{
    display: block;
  }
  #q .moveTit{ font-family: 'GmarketSansBold', 'sans-serif'; font-size: 9rem; display: flex; z-index: 1; justify-content: space-between; }
  #q .moveTit div:first-child{
    transform: translateY(-50%);
  }
  #q .moveTit div:last-child{
    transform: translateY(50%);
  }
  #q .image1{
    display: block;
    background-color: #f5a9b9;
    background-image: url("/images/person1.png") ;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center -15%;
    background-size: cover;
    width: 100%;
    height: 700px;
  }
  #q .question{
    display: block;
    width: 100%;
    padding: 20px 10%; 
    //position: relative;
    min-height: 200px;
  }
  #q .question .q{
    font-size: 2rem;
    font-weight: 800;
  }
  #q .question .q span{
    font-family: 'GmarketSansBold', 'sans-serif';
    padding-right: 20px; 
  }
  #q .question .a{
    font-size: 1.2rem;
    width: 70%;
    padding: 10px 0;
  }
  #q .image2{
    display: block;
    background-image: url("/images/person2.png") ;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center 30%;
    background-size: cover;
    width: 100%;
    height: 700px;
  }
  
  #our{
    flex-direction: column; margin-top: 60px; 
  }
  #our > div {
    font-size: 2.5rem;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    padding: 5% 0;
  }
  #our .txt{
    letter-spacing: -1px;
    line-height: 1;
    color: #3d3d3d;
    font-weight: 700;
  }
  #our .num{
    font-family: 'GmarketSansBold', 'sans-serif';
    font-size: 11rem;
    font-weight: 700;
    letter-spacing: -3px;
    color: #ff7384;
    padding: 10px 0;
  }
  #our .ourUser{ align-items: flex-end; transform: translateX(-50%); }
  
  #our .ourBrand{ transform: translateX(50%); }
  #our .ourBrand > .txt{line-height: 1.75; text-indent: 25px;}
  #our .ourBrand .row{ display: flex; align-items: flex-end; padding: 10px 0; }
  #our .ourBrand .row .num{ font-size: 22rem; line-height: 0.85; padding: 0; }
  #our .ourBrand .row .txt{ line-height: 1.3; }
  
  #our .ourSub{ align-items: center; transform: translateX(0); }
  
  #weAre { height: 100vh; min-height: 100vh; }
  #weAre div{ font-size: 3rem; font-weight: 700; }
  #weAre div span, #and div span{ color: #ff7384; }
  
  #and { min-height: 50vh; align-items: center; }  
  #and .inner{width: 50%; display: flex; align-items: center; flex-direction: column }
  #and .inner div{ width: 100%; font-size: 3rem; font-weight: 700; }
  #and .inner .andText{ display: flex; align-items: center;}
  #and .inner .andText .txt{display: flex; flex-direction: column; align-items: start; }
  #and .inner .andText img{ width: auto; height: 50px; padding-left: 40px;  }
  #and .and{ margin-bottom: 15%;}
`;

export const news = css`
  section{ width: 100%; position: relative; }
  section .inner{ max-width: 1600px; position: relative; margin: 0 auto; padding: 20px 0; }
  h2{ margin: 70px 0 60px 0; font-size: 6rem; text-align: center; text-transform: uppercase; font-family: "GmarketSans", sans-serif;}
  
  .news_box{ display: flex; flex-flow: row wrap; justify-content: space-between;}
  .news_box .post{ flex: 1; margin: 2%; background: #a9a9a9; width: 300px; height: 300px; padding: 30px;}
  .news_box .post:first-child{ margin-left: 0;}
  .news_box .post:last-child{ margin-right: 0;}
  .news_box .post .title{ font-size: 1rem; }
`

export const contact = css`
  section{ width: 100%; position: relative;}
  section .inner{ max-width: 1600px; position: relative; margin: 0 auto; padding: 20px 0; }
  h2{ margin: 70px 0 60px 0; font-size: 6rem; text-align: center; text-transform: uppercase; font-family: "GmarketSans", sans-serif;}
  
  .inner > div{ display: flex; justify-content: space-between; padding: 40px 20px; border-bottom: 2px solid #a0a0a0; }
  .inner .contact_sara{border: none;}
  .inner > div > div { flex: 1; margin: 5px 10px; display: flex; flex-direction: row; }
  //.inner div{ display: flex; justify-content: space-between;}
  .inner div .text{ display: flex; flex-direction: column; color: #3d3d3d; font-family: "GmarketSans", sans-serif; } 
  .inner div p{font-size: 1rem; margin-top: 20px;}
  .inner .text .title{font-size: 1.8rem; text-transform: uppercase; }

  .map{position: relative; width: 100%; height: 700px; background: #a0a0a0; display: flex; flex-direction: column; justify-content: flex-end; align-items: center;}
  .map .map_link{position: absolute; width: 80px; height: 80px; background-color: #8d8d8d; display: flex; flex-direction: column; align-items: center; margin-left: -40px; justify-content: center; bottom: 60px;}
`

export const main = css`
  section{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0; 
    overflow: hidden; 
  }
  #main {
    overflow: visible;
    font-family: 'GmarketSansBold', 'sans-serif';
    // background: #007fff;
  }
  #main img{
    opacity: 0;
    transform: scale(2);
  }
  
  #main .logo{ opacity: 0; }
    // 메인비쥬얼
    #main .top_logo, #main .top_logo_box{
      width: 100vw;
      max-width: 1200px;
    }
    
    #main .top_logo_box{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      //transition: .9s ease-in;
    }
    // 메인 폰트 믹스블랜드모드 효과 부분 적용
    #main .top_logo_box.box1{ mix-blend-mode: color-dodge; }   
    
    #main .top_logo_box.over{ transition: .1s linear; }   
    
    #main .top_logo{
      margin: 0 auto;
      max-height: 120px;
      display: flex;
      justify-content: space-between;
    }
    
    #main .top_logo_text{ 
      opacity: 0;
      transition-property: opacity;
      transition-timing-function: cubic-bezier(.77,0,.175,1);
      transition-duration: .7s;    
      display: block;
      mix-blend-mode: darken;
    }
    
    #main .top_logo_text span{    
      font-family: 'GmarketSansBold', 'sans-serif';
      font-size: 8.5rem; font-weight: 900; color: #ff7384;
    }
    
    #main.ani .top_logo_text { opacity: 1; }
    #main .top_logo_text_1 { transition-delay: .3s; }
    #main .top_logo_text_2 { transition-delay: .1s; }
    #main .top_logo_text_3 { transition-delay: .5s; }
    #main .top_logo_text_4 { transition-delay: .1s; }
    #main .top_logo_text_5 { transition-delay: .3s; }
    #main .top_logo_text_6 { transition-delay: .6s; }
    #main .top_logo_text_7 { transition-delay: .5s; }
    
    #main .slogan {
      position: absolute; 
      bottom: -30%; 
      opacity: 0; 
      transform: scaleY(0);
      padding: 50px 0;
    }
    #main .slogan h2 {
      text-align: center; 
      font-size: 6rem; 
    }
       
  #biz img { height: 100%; position: absolute; }
  
  #biz .video{
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    opacity: 0;
  }
  
  #biz .video .grad_video{
    position: absolute;
    max-width: unset;
    top: 50%;
    left: 50%;
    width: auto !important;
    height: auto !important;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
  }
  
  #biz .keywords_box{
    position: relative;
  }
  
  #biz .keywords_box .keywords{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1; 
  }
      
  #biz .keywords_box .keywords > span{
     text-transform: uppercase;
     font-size: 8vw;
     position: relative;
     display: block;
     color: #fff;
     font-weight: 700;
     z-index: 1;
     //transition: 1.6s ease-in-out;
     font-family: 'GmarketSansBold', sans-serif;
     letter-spacing: -5px;
  }
  
  #biz .keywords .keyword_1{ top: 25vh; left: 135.6%;}
  #biz .keywords .keyword_2{ top: 25vh; left: -93%;}
  #biz .keywords .keyword_3{ top: 25vh; left: 170.1%;}
  
  
  .white{height: 280vh;}
  // 비즈니스 가로스크롤 
  #biz .biz_move_wrap{ position: relative; font-size: 0; color: #fff;}
 
  #biz .biz_move_wrap .fixed_wrap{ position: relative; width: 100%; top: 0; left: 60%; z-index: 2;}
  #biz .biz_move_wrap .fixed_wrap .biz_inner{ width: 5000px; overflow: hidden; }
  #biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont{ 
    height: 100vh;
    width: 34vw; 
    margin-left: 7vw;
    position: relative;
    display: inline-block;
    box-sizing: border-box;
  }
  #biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont:before{
    clear: both;
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
  }
  #biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont.cont1{ transform: scaleX(0); }

  
  #biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont.cont1{ margin-left: 0;}
  #biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont.cont1:before{ background-color: #4a5cff;}
  #biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont.cont2:before{ background-color: #ff4d7c;}
  #biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont.cont3:before{ background-color: #ffbc50;}

  #biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont .cont_top{ font-size: 3rem; font-family: "GmarketSansBold", sans-serif; text-transform: uppercase; }
  //#business .biz_move_wrap .fixed_wrap .biz_inner .biz_cont .cont_top .in_num{ position: relative; padding-right: 36px; }
  #biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont .cont_top > span{ position: absolute; display: block; top: 6vh; left: 20px; font-size: 1rem; margin-top: 5px; }
  #biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont .cont_top .cont_title span{ position: relative; display: block; top: 6vh; right: 50px; font-size: 2.5rem; text-align: right;}
  
  #biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont .cont_bottom{ position: absolute; bottom: 10%; left: 10%; right: 0; }
  #biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont .cont_bottom .line_title { margin-right: 10%; }
  #biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont .cont_bottom .line_title > span { display: block; font-size: 1.1rem; font-family: "GmarketSansBold", sans-serif; border-bottom: 1px solid #fff; padding-bottom: 3%; }
  
  #biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont .cont_bottom .text { height: 280px; font-size: 1.3rem; font-weight: 400; padding: 8% 10% 0 0; }
  
  // 가려지는 화이트보드
  #biz .boards { position: relative; width: 100vw; height: 100vh; opacity: 0; left: 0; top: 0; z-index: -1;}
  #biz .boards > div:not(.title){
    position: absolute; 
    left: 0; 
    width: 100vw; 
    height: 50vh; 
    background: #fff;
  }
  #biz .boards .board1{top: 0;}
  #biz .boards .board2{bottom: 0; }
  
  #biz .boards .title{
    position: relative;
    display: flex;
    flex-direction: column;  
    justify-content: center;
    font-size: 5rem; 
    text-transform: uppercase; 
    text-align: center;
    font-weight: 700;
    user-select: none;
    transform: translate(0%,-50%) scaleY(0);
    transition: transform 0.3s ease-in;
    opacity: 0;
  }
  
  .title span{    
    color: #3d3d3d;
  }
  .title span.colorful{
    background: linear-gradient(to right, #7bfffc, #ff72c6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }  
 
  #ig_now{
    overflow-y: hidden;
    //transform: translateY(50%);
    margin-top: 100vh;
  }
  
  #ig_now .inner{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;    
  }
 
  #ig_now .title{
    position: absolute;
    display: flex;
    flex-direction: column;  
    justify-content: center;
    font-size: 5rem; 
    text-transform: uppercase; 
    text-align: center;
    font-weight: 700;
    user-select: none;
  }    
    
  #ig_now .ig_feeds { position: absolute; display: flex; overflow: hidden; justify-content: space-between; align-items: center; padding: 60px 0; top: 50%; width: 100vw;}
  #ig_now .ig_feeds .ig_feed{ flex: 1; text-align: center; }
  #ig_now .ig_feeds .ig_feed > img{ height: 50%; width: 50%; box-shadow: rgba(90, 97, 105, 0.11) 0px 2px 0px, rgba(90, 97, 105, 0.12) 0px 4px 18px, rgba(90, 97, 105, 0.06) 0px 10px 10px, rgba(90, 97, 105, 0.1) 0px 7px 70px; }
  #ig_now .ig_feeds .ig_feed:first-child{ transform: translate(-50%, 0)}
  #ig_now .ig_feeds .ig_feed:last-child{ transform: translate(50%, 0)}
  #ig_now .ig_feeds .current{ display: flex; justify-content: space-between; align-items: center; position: relative; }
  //#ig_now .ig_feeds .current > div, #ig_now .ig_feeds .current > img{flex: 1;}
  #ig_now .ig_feeds{ opacity: 0;}
  #ig_now .ig_feeds .current:after{ 
    content: '';
    position: absolute;
    bottom: -60px;
    left: 0;
    height: 7px;
    width: 60%;
    margin: 0 20%;
    background: linear-gradient(to right, #7bfffc, #ff72c6);
    transform-origin: left top;
    transition-timing-function: cubic-bezier(.25,.46,.45,.94);
    opacity: 0;
  }
  #ig_now.move .ig_feeds .current:after{
    animation: bar 0.8s ease;
    animation-delay: 0.8s;
    transition: opacity 0.8s ease;
    opacity: 1;
  }
  
  @keyframes bar {
    0%{ transform: scaleX(0); opacity: 0;}
    100%{ transform: scaleX(1); opacity: 1;}
  }
  #ig_now.move .ig_feeds{ opacity: 1;}
  #ig_now.move .ig_feeds .current img{ animation: moveFeed .8s ease-in; opacity: 1;}
  #ig_now.move .ig_feeds .ig_feed:first-child img{ animation: actionFeed 1s ease; transform-origin: left; }
  #ig_now.move .ig_feeds .ig_feed:last-child img{ animation: actionFeed 1s ease; transform-origin: right;}
  
  @keyframes moveFeed {
    0%{transform: translateY(-10%); opacity: 0;}
    100%{transform: translateY(0); opacity: 1;}
  }
  @keyframes actionFeed {
    0%{transform: scaleX(0); opacity: 0;}
    100%{transform: scaleX(1); opacity: 1;}
  }
  #ig_now .ig_feeds .current .btn{width: 60px; cursor: pointer;}
  #ig_now .ig_feeds .current .btn.prev{padding-right: 30px;}
  #ig_now .ig_feeds .current .btn.next{padding-left: 30px;}
  
  @media only screen and (max-width: 600px) {
    #main .inner{
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #main .inner img{
      width: auto;
      height: 75vh;
    }
    #main .top_logo, #main .top_logo_box{
      width: 90vw;
      max-width: 400px;
    }
    #main .top_logo_text span{    
      font-size: 3.2rem; 
    }
    #main .slogan h2 {
      font-size: 2.4rem; 
    }    
    #biz {height: 100%;}
    #biz .keywords_box .keywords > span{
      font-size: 10vw;
      letter-spacing: -1px;
    }
    #biz .biz_move_wrap {margin-top: 45vh;}
    #biz .biz_move_wrap .fixed_wrap{ left: 0; position: relative; height: 100%;}
    #biz .biz_move_wrap .fixed_wrap .biz_inner{ width: 100vw; height: 100%; overflow: visible;}
    #biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont{ 
      height: 60vh;
      min-height: 500px; 
      width: 100vw; 
      display: block;
      margin-left: 0;
      margin-top: 120px;
    }    
    #biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont{ transform: scaleX(0); }
    #biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont .cont_top .cont_title span{ font-size: 1.8rem; }
    //#biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont .cont_bottom{ bottom: 60px; left: 60px; }
    //#biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont .cont_bottom .line_title { margin-right: 60px; }
    #biz .biz_move_wrap .fixed_wrap .biz_inner .biz_cont .cont_bottom .text { height: 190px; font-size: 1rem; }
    
    #biz .boards .title{ font-size: 2.3rem; }
    
    #ig_now { margin-top: 0; }
    #ig_now .title{ font-size: 2.3rem; }
    
    #ig_now .ig_feeds .ig_feed > img{ height: 100%; width: 100%; }
    #ig_now .ig_feeds .current{flex: 2;}
    #ig_now .ig_feeds .current:after{width: 80%; margin: 0 10%;}
    #ig_now .ig_feeds .current .btn{width: 40px; cursor: pointer;}
    #ig_now .ig_feeds .current .btn.prev{padding-right: 15px;}
    #ig_now .ig_feeds .current .btn.next{padding-left: 15px;}
  
  }
  
  //@media only screen and (min-width: 600px) {
  //  #main .inner{
  //    width: 100vw;
  //    height: 100vh;
  //    overflow: hidden;
  //    display: flex;
  //    justify-content: center;
  //    align-items: center;
  //  }
  //  #main .inner img{
  //    width: auto;
  //    height: 75vh;
  //  }
  //  #main .top_logo, #main .top_logo_box{
  //    width: 90vw;
  //    max-width: 400px;
  //  }
  //  #main .top_logo_text span{    
  //    font-size: 3.2rem; 
  //  }
  //  #main .slogan h2 {
  //    font-size: 2.4rem; 
  //  }    
  //  #biz {height: 100%;}
  //}
  
  @media only screen and (min-width: 1200px) {

  }
   
  @media screen and (min-width: 1920px) {    
    #ig_now{margin-top: 50vh;}
  }
 
`;

// Global styles
export const global = css.global`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    ul, ol{
      list-style: none;
    }
    a{
        text-decoration:none;
        color:inherit;
        cursor: pointer;
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 'Malgun Gothic', Dotum, sans-serif;
        font-size:12px;
        color: #2b2b2b;
    } 
    h1{
      text-indent: -9999999px;
    }
    .fl{float: left !important;};
    .fr{float: right !important;};
    .cb{clear: both !important;};
    .cf:after{
        content: '';
        display: block;
        clear: both;
        !important;
    }
    
    a span.line-hover:after{
      transform: scaleX(0);
      transform-origin: right top;
      transition-timing-function: cubic-bezier(.215,.61,.355,1);
      content: '';
      position: absolute;
      top: 1.15em;
      left: .05em;
      right: 0;
      height: .08em;
      background-color: #3d3d3d;
      transition: transform .6s, -webkit-transform .6s;
    }
    a:hover span.line-hover:after, a:active span.line-hover:after{
      transform: scaleX(1);
      transform-origin: right top;
      transition-timing-function: cubic-bezier(.25,.46,.45,.94);    
    }
`
export const fonts = css`{
  @font-face {
      font-family: 'GmarketSans';
      src: url('/fonts/GmarketSansTTFMedium.ttf') format('truetype'),
           url('/fonts/GmarketSansMedium.otf') format('otf');
  }
  @font-face {
      font-family: 'GmarketSansBold';
      src: url('/fonts/GmarketSansTTFBold.ttf') format('truetype'),
           url('/fonts/GmarketSansBold.otf') format('otf');
  }
}`

export default css`div { color: #2b2b2b; }`
