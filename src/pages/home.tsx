import React from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import Chart1 from '../components/Chart1';
import Chart2 from '../components/Chart2';
import Chart3 from '../components/Chart3';
import Chart4 from '../components/Chart4';
import Chart5 from '../components/Chart5';
import Chart6 from '../components/Chart6';
import Chart7 from '../components/Chart7';
import Chart8 from '../components/Chart8';
import Chart9 from '../components/Chart9';


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
        <section className="section2">
          <Chart3 />
          <Chart4 />
        </section>
        {/* box3 */}
        <section className="section3">
          <Chart5 />
        </section>
        {/* box4 */}
        <section className="section4">
          <Chart6 />
          <div className="bordered 年龄段">
            <h2>犯罪人员年龄段分布</h2>
            <div className="charts">
              <Chart7 />
              <Chart8 />
              <Chart9 />
            </div>
          </div>
        </section>
        {/* box5 */}
        <section className="bordered section5"></section>
      </main>

      <footer>创新产品开发部门 郭森权</footer>
    </div>
  );
};
