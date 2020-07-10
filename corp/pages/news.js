import Layout from '../components/Layout'
import { news, fonts, global } from '../components/styles'

const News = () => (
  <Layout>
    <style jsx>{news}</style>
    <style jsx>{fonts}</style>
    <style jsx global>{global}</style>
    <section>
      <div className="inner">
        <h2>News</h2>
        <div className="news_box">
          <div className="post">
            <span className="title">dkdkdkdk X feofaef</span>
            <p className="text">dfkafjoe dfiaos dfajopv skfmpfes a elo a kdjfpqe widl wopcm a pdfjnq od jkfqpx kl dijv el eod ls. fopsfef eofl aef seosie. </p>
          </div>
          <div className="post">
            <span className="title">dkdkdkdk X feofaef</span>
            <p className="text">dfkafjoe dfiaos dfajopv skfmpfes a elo a kdjfpqe widl wopcm a pdfjnq od jkfqpx kl dijv el eod ls. fopsfef eofl aef seosie. </p>
          </div>
          <div className="post">
            <span className="title">dkdkdkdk X feofaef</span>
            <p className="text">dfkafjoe dfiaos dfajopv skfmpfes a elo a kdjfpqe widl wopcm a pdfjnq od jkfqpx kl dijv el eod ls. fopsfef eofl aef seosie. </p>
          </div>
          <div className="post">
            <span className="title">dkdkdkdk X feofaef</span>
            <p className="text">dfkafjoe dfiaos dfajopv skfmpfes a elo a kdjfpqe widl wopcm a pdfjnq od jkfqpx kl dijv el eod ls. fopsfef eofl aef seosie. </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default News;
