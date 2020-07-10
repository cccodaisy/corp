import Header from './Header';
import Intro from './Intro';
import Footer from './Footer';
import styles, { global } from './styles'

const Layout = ({children}) => (
    <div>
      <style jsx>{styles}</style>
      <style global jsx>{global}</style>
      <Header/>
      {children}
      <Footer/>
    </div>
);

export default Layout;
