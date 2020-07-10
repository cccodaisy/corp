
const Footer = () => {
  return (
    <>
      <style jsx>
        {`
        .footer_wrap{ position: relative; bottom: 0; display: flex; justify-content: space-between; padding: 0 10vw; height: 230px; align-items: center; opacity: 1; transition: all 0.2s ease-in;}
        .footer_wrap .left{ display: flex; flex-direction: column; font-size: 1rem; color: #3d3d3d; }
        .footer_wrap .left span:first-child{ font-weight: bold; font-size: 1.1rem;}
        .footer_wrap .left span.copy{ margin-top: 20px;}
        
        .sns_box .sns{ 
          display: flex; 
          flex-wrap: wrap; 
          width: 240px; 
        }
        .sns_box > ul{ 
          transform: translateY(-20px);
          transition-property: transform,opacity;
          transition-duration: .4s, .4s;
          transition-timing-function: cubic-bezier(.645,.045,.355,1),cubic-bezier(.645,.045,.355,1);
        }
        .sns_box .sns li{ 
          flex: 1; 
          display: flex; 
          justify-content: center;
          background-color: #cacaca;
        }
        
        @media only screen and (max-width: 600px) {
          .footer_wrap{ flex-direction: column-reverse; align-items: start;}
          .footer_wrap .left{margin-bottom: 50px;}
          .sns_box > ul { transform: translateY(0); }
        }
        
      `}
      </style>
      <div className="footer_wrap">
      {/*<div className={`${ ft ? 'ft' : ''} footer_wrap`} ref={footerRef}>*/}
        <div className="left">
          <span>SARACEN INTERNATIONAL Inc.</span>
          <span>CEO: 김경남 | COO: Sara Cho</span>
          <span>사업자등록번호: 104-85-56775</span>
          <span className="copy">&copy; SARACEN INTERNATIONAL Inc.</span>
        </div>
        <div className="right">
          <div className="sns_box">
            <ul className="sns">
              <li><a href="https://www.youtube.com/user/thesaranail"><img src="/images/icon-insta.svg" alt="ytb"/></a></li>
              <li><a href="https://www.instagram.com/saracen_official"><img src="/images/icon-insta.svg" alt="ytb"/></a></li>
              <li><a href="https://blog.thesaracen.com"><img src="/images/icon-insta.svg" alt="ytb"/></a></li>
              <li><a href="https://tv.naver.com/saracentv"><img src="/images/icon-insta.svg" alt="ytb"/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
