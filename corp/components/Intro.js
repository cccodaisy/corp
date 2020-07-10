const linkStyle = {
  marginRight: '1rem'
}

const Intro = () => {
  return (
    <div>
      <style jsx>
        {`
        .main-content {
          height: 100vh;
          position: fixed;
          text-align: center;
          width: 100%;
          display: block;
          background: white;
          opacity: 0;
          z-index: -1;
          animation: 2.5s disappear 1;
        }
        
        @keyframes disappear{
          0%{
            opacity: 1;
            z-index: 999;
          }
          70%{
            opacity: 1;
            z-index: 999;
          }
          100%{
            opacity: 0;
            z-index: 999;
          }
        }
        
        .main-content h2 {
            letter-spacing: 50px;
            animation: 1.5s explode_title 1;
            font-size: 7rem;
            font-weight: 900;
            position: absolute;
            text-transform: uppercase;
            transform: translate3d(0,0,0) translateY(-100%);
            width: 100%;
            color: #ff7384;
            text-align: center;
            top: 50%;
          }
         .main-content .word {
            letter-spacing: 50px;
            animation: typing 0.8s steps(160, end) 1;
            font-size: 7rem;
            font-weight: 900;
            text-align: center;
            top: 50%;
            transform: translate3d(0,0,0);
            //width:100%;
            opacity: 1;
            position: relative;
            z-index: 999;
            display: inline-block;
            height: 7rem; 
            overflow: hidden;
          }
          .main-content .word:after{
            content: ".";
            position: absolute;
            right: -30px;
          }
          
          @keyframes typing {
            0%{
              width: 0;
              transform: scale(1,-1);
            }
            60%{
              width: 450px;     
            }
            80%{        
              transform: scale(1,-1);
            }
            100%{width: 450px;}
          }
          
          @keyframes explode_title {
            0%{
              opacity:0;
            }
            50% {
              opacity:0;
              transform: translate(0, 100px) translateY(-100%);
              transform-origin: 0 bottom 0;
            }
            100% {
              opacity:1;
              transform: translate(0, 0) translateY(-100%);
              transform-origin: 0 bottom 0;
            }
          }
          @media only screen and (max-width: 600px) {
          
          .main-content h2 {font-size: 3rem;}
          .main-content .word {font-size: 3rem; animation: typing 0.8s steps(105, end) 1; height: 3rem;}
            
            @keyframes typing {
              0%{
                width: 0;
                transform: scale(1,-1);
              }
              60%{
                width: 300px;     
              }
              80%{        
                transform: scale(1,-1);
              }
              100%{width: 300px;}
            }
            @keyframes explode_title {
              0%{
                opacity:0;
              }
              50% {
                opacity:0;
                transform: translate(0, 70px) translateY(-100%);
                transform-origin: 0 bottom 0;
              }
              100% {
                opacity:1;
                transform: translate(0, 0) translateY(-100%);
                transform-origin: 0 bottom 0;
              }
            }
            
          }
          
          @media only screen and (min-width: 600px) {
        
          }
          
          @media only screen and (min-width: 1200px) {
        
          }
           
          @media screen and (min-width: 1920px) {    
            
          }
          
        `}
      </style>
      <div className='main-content'>
        <h2>판도를</h2>
        <span className="word">뒤집다</span>
      </div>
    </div>
  );
};

export default Intro;
