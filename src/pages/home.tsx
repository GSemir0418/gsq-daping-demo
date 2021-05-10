import React from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import Chart1 from '../components/Chart1';
import Chart2 from '../components/Chart2';


export const Home = () => {

  return (
    <div className='home'>
      {/* 分成header、main和footer三部分 */}
      <header style={{ backgroundImage: `url(${headerBg})` }}></header>

      <main>
        {/* box1 */}
        <section className="section1">
          <Chart1 />
          <Chart2 />
        </section>
        {/* box2 */}
        <section className="bordered section2"></section>
        {/* box3 */}
        <section className="bordered section3"></section>
        {/* box4 */}
        <section className="bordered section4"></section>
        {/* box5 */}
        <section className="bordered section5"></section>
      </main>

      <footer>创新产品开发部门 郭森权</footer>
    </div>
  );
};
