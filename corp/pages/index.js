import React, { useEffect, useRef, useState } from 'react'

import Main from '../components/Main';
import BizInsta from '../components/BizInsta';
import Layout from '../components/Layout';
import styles, { fonts, global, main } from '../components/styles'
import Header from '../components/Header'
import Intro from '../components/Intro'


function Home() {

   return (
    <Layout>
      <style jsx>{fonts}</style>
      <style jsx global>{global}</style>
      <style jsx>{main}</style>
      <Intro/>
      <Main />
      <BizInsta />

    </Layout>
    );
}

export default Home;


