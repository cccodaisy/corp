import Layout from '../components/Layout'
import { fonts, global, contact } from '../components/styles'

const Contact = () => (
  <Layout>
    <style jsx>{contact}</style>
    <style jsx>{fonts}</style>
    <style jsx global>{global}</style>
    <section>
      <div className="inner">
        <h2>Contact</h2>
        <div className="with_sara">
          <div className="partner">
            <div className="text">
              <span className="title">
                  Business<br/>Partnership
              </span>
              <p>사라센과 함께 시작해보세요.</p>
            </div>
            <div className="arrow">
              <img src="/images/icon_right_arrow_big.svg" alt="바로가기"/>
            </div>
          </div>
          <div className="apply">
            <div className="text">
              <span className="title">
                  Apply
              </span>
              <p>사라센과 함께하는 인재를 모집합니다.</p>
            </div>
            <div className="arrow">
              <img src="/images/icon_right_arrow_big.svg" alt="바로가기"/>
            </div>
          </div>
        </div>

        <div className="contact_sara">
          <div className="address">
            <div className="text">
              <span className="title">
                  Address
              </span>
              <p>
                7, Namdaemunsijang-gil<br/>
                Jung-gu, Seoul<br/>
                Republic of Korea
              </p>
            </div>
          </div>
          <div className="mail">
            <div className="text">
              <span className="title">
                  Mail
              </span>
              <p>biz@saracen.co.kr</p>
            </div>
          </div>
          <div className="cs">
            <div className="text">
              <span className="title">
                  Cs Contact
              </span>
              <p>help@saracen.co.kr</p>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe frameBorder="0" height="100%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.787012339157!2d126.97420955124582!3d37.5600815321557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2f52785d087%3A0x2d34ab84305cb7d8!2z7ISc7Jq47Yq567OE7IucIOykkeq1rCDrgqjrjIDrrLjroZw06rCAIDIwLTYw!5e0!3m2!1sko!2skr!4v1489465572562"
                style={{border:0}} width="100%"></iframe>
        <a href="https://www.google.com/maps?ll=37.560077,126.976404&z=17&t=m&hl=ko-KR&gl=KR&mapclient=embed&q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EC%A4%91%EA%B5%AC+%EB%82%A8%EB%8C%80%EB%AC%B8%EB%A1%9C4%EA%B0%80+20-60">
          <div className="map_link">
            <img src="/images/icon-fb.svg" alt="goToKakaoMap"/>
            <span>지도 바로가기</span>
          </div>
        </a>
      </div>
    </section>
  </Layout>
)

export default Contact;
