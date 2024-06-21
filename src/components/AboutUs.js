import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Cover.css';
import rutuja from '../assets/rutuja.jpg';
import nirmal from '../assets/nirmala.jpg';
import prajwal from '../assets/prajwal.jpg';

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <div className='aboutus'>
      <br /><br /><br /><br />
      <h1>Our Purpose</h1>
      <p>Our endeavour is to shape happier, healthier, smarter individuals right from the time that shaping begins - that is, immediately after conception by helping the pregnant woman make the right lifestyle changes.</p>
      <p>Post birth, the first 1000 days are critical. We provide small, simple actions for parents to adopt that ensure big, positive changes in the baby’s growth.</p>
      <p>All our efforts converge upon helping each baby unleash their full potential and lead a successful life.</p>

      <h1>Our Founders And Developers</h1>
      <div className='founders'>
        <div className='member1'>
          <div className='text-container'>
            <h2>Prajwal Mutnal</h2>
            <p>A Full-Stack Developer versatile engineer proficient in both front-end and back-end development, capable of handling all aspects of web application development.</p>
          </div>
          <div className='img-container'>
            <img src={prajwal}  alt="Prajwal Mutnal" className="" />
          </div>
        </div>
        <div className='member1'>
          <div className='text-container'>
            <h2>Rutuja C</h2>
            <p>A Full-Stack Developer versatile engineer proficient in both front-end and back-end development, capable of handling all aspects of web application development.</p>
          </div>
          <div className='img-container'>
            <img src={rutuja} alt="Rutuja C" className="" />
          </div>
        </div>
        <div className='member1'>
          <div className='text-container'>
            <h2>Neha Chandavari</h2>
            <p>A Full-Stack Developer versatile engineer proficient in both front-end and back-end development, capable of handling all aspects of web application development.</p>
          </div>
          <div className='img-container'>
            <img src="https://media.licdn.com/dms/image/D4E03AQEN6aFndCsEaA/profile-displayphoto-shrink_200_200/0/1686289661106?e=2147483647&v=beta&t=rV94_Cb10_WExO-1LLG8f5nRy5eZwYBouVotBM2XOB0" alt="Neha Chandavari" className="" />
          </div>
        </div>
        <div className='member1'>
          <div className='text-container'>
            <h2>Nirmala K</h2>
            <p>A Full-Stack Developer versatile engineer proficient in both front-end and back-end development, capable of handling all aspects of web application development.</p>
          </div>
          <div className='img-container'>
            <img src={nirmal} alt="Nirmala K" className="" />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default AboutUs;
