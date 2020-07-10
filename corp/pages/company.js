import Layout from '../components/Layout'
import { company, fonts, global } from '../components/styles'

const Company = () =>{

  return(
    <Layout>
      <style jsx>{company}</style>
      <style jsx>{fonts}</style>
      <style jsx global>{global}</style>
      {/*<div className="boards">*/}
      {/*  <div className="board1"/>*/}
      {/*  <div className="board2"/>*/}
      {/*  <div className="title">*/}
      {/*    <h3>어서오세요.</h3>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <h2>Company</h2>
        <ul className="tab">
            <li className="on">CEO INTERVIEW</li>
            <li>HISTORY</li>
        </ul>
      <section id="greeting">
        <h3>어서오세요.</h3>
        <img src="/images/person.png" alt="사람" />
        <div className="greeting">
          <div className="left">
            <div className="tit">CEO</div>
            <div>KIM KYEONG NAM</div>
          </div>
          <div className="right">
            <div><span>사라센</span>을<br/> 소개할게요.</div>
          </div>
        </div>
      </section>
      <section id="q" >
        <div className="moveTit">
          <div>CREATIVE</div>
          <div>POTENTIAL</div>
        </div>
        <div className="image1"/>
        <div className="question">
          <div className="q">
            <span>Q1.</span>질문 하겠습니다. 질문 질문 질문입니다아 질문?
          </div>
          <div className="a">
            대답입니다. 대답을 대답하고 대답하여 대답합니다. 대답대답 답답답답 대답답답 답다디답다디 담다디담.
            대답입니다. 대답을 대답하고 대답하여 대답합니다. 대답대답 답답답답 대답답답 답다디답다디 담다디담.
            대답입니다. 대답을 대답하고 대답하여 대답합니다. 대답대답 답답답답 대답답답 답다디답다디 담다디담.
            대답입니다. 대답을 대답하고 대답하여 대답합니다. 대답대답 답답답답 대답답답 답다디답다디 담다디담.
            대답입니다. 대답을 대답하고 대답하여 대답합니다. 대답대답 답답답답 대답답답 답다디답다디 담다디담.
            대답입니다. 대답을 대답하고 대답하여 대답합니다. 대답대답 답답답답 대답답답 답다디답다디 담다디담.
          </div>
        </div>
      </section>
      <section id="q" >
        <div className="moveTit">
          <div></div>
          <div>TRENDY</div>
        </div>
        <div className="image2"/>
        <div className="question">
          <div className="q">
            <span>Q2.</span>질문 하겠습니다. 질문 질문 질문입니다아 질문?
          </div>
          <div className="a">
            대답입니다. 대답을 대답하고 대답하여 대답합니다. 대답대답 답답답답 대답답답 답다디답다디 담다디담.
            대답입니다. 대답을 대답하고 대답하여 대답합니다. 대답대답 답답답답 대답답답 답다디답다디 담다디담.
            대답입니다. 대답을 대답하고 대답하여 대답합니다. 대답대답 답답답답 대답답답 답다디답다디 담다디담.
            대답입니다. 대답을 대답하고 대답하여 대답합니다. 대답대답 답답답답 대답답답 답다디답다디 담다디담.
            대답입니다. 대답을 대답하고 대답하여 대답합니다. 대답대답 답답답답 대답답답 답다디답다디 담다디담.
            대답입니다. 대답을 대답하고 대답하여 대답합니다. 대답대답 답답답답 대답답답 답다디답다디 담다디담.
          </div>
        </div>
      </section>
      <section id="our">
        <div className="ourUser">
          <span className="txt">우리 쇼핑몰은</span>
          <span className="num">94,000+</span>
          <span className="txt">셀프 네일러 / 네일샵 원장님께서 선택하였고</span>
        </div>
        <div className="ourBrand">
          <span className="txt">지난 00년동안</span>
          <div className="row">
            <span className="num">50</span>
            <span className="txt">여개가 넘는 <br /> 브랜드가 입점하였고</span>
          </div>
        </div>
        <div className="ourSub">
          <span className="txt">우리의 컨텐츠를 사랑하는</span>
          <span className="num">93,000+</span>
          <span className="txt">명의 구독자를 보유하고 있습니다.</span>
        </div>
      </section>
      <section id="weAre">
        <div>우리는 전국 최대규모의 <span>네일 뷰티 커머스</span>입니다.</div>
      </section>
      <section id="and">
        <div className="inner">
          <div className="and">그리고,</div>
          <div className="andText">
            <div className="txt">우리의 가치관이 담긴<br/> <span>CI를 확인해보세요.</span></div>
            <a>
              <img src="/images/icon_right_arrow_b.png" alt="화살표" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Company;
