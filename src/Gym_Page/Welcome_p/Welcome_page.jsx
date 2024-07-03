import React from 'react'
import logo from '../../../fitness.png'
import gym from '../imgs/rendering-modern-.jpg'
import wave from '../waves/wave_1.png'
import { useEffect } from 'react'
import './Welcome_page.css'
function Welcome_page() {
  useEffect(() => {
    const mobile_nav = document.querySelector('.mobile-nav')
    const nav = document.querySelector('nav')
    const button = document.querySelector('.button-container-2 .btn');
    if (button,mobile_nav) {
      const handleMouseOver = () => {
        button.closest('.button-container-2').style.border = '1px solid #000';
      };

      const handleMouseOut = () => {
        button.closest('.button-container-2').style.border = '1px solid #ffffff';
      };

      const mobile_nav_animation = ()=>{
        mobile_nav.classList.toggle('toggle')
          nav.classList.toggle('active')
      }

      mobile_nav.addEventListener('click',mobile_nav_animation)
      button.addEventListener('mouseover', handleMouseOver);
      button.addEventListener('mouseout', handleMouseOut);

      // Cleanup event listeners on unmount
      return () => {
        button.removeEventListener('mouseover', handleMouseOver);
        button.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, []);

  return (
    <div className='Container'>
      <header>
        <div>
          <span>EG</span>
          <img src={logo} />
        </div>
        <nav>
          <a href='#'>Home</a>
          <a href='#'>Services</a>
          <a href='#'>Offers</a>
          <a href='#'>About Us</a>
          <a href='#'>Contact</a>
        </nav>
        <div className='mobile-nav'>
          <div></div>
          <div className='second_div'></div>
          <div></div>
        </div>
      </header>
      <section>
        <div className='welcome-text'>
          <h1>Welcome to <span className='head-text'><span className='head-text'>E</span>nergize <span className='head-text'>G</span>ym</span></h1>
          <p className='first-p'>At Energize Gym, we're dedicated to helping you achieve your fitness goals. Our state-of-the-art facilities, experienced trainers, and wide range of classes are designed to meet the needs of every member, from beginners to advanced athletes. Whether you're looking to build muscle, lose weight, or just stay active, we have everything you need to succeed. Join us today and start your journey to a healthier, happier you!</p>
          <p>Our gym offers a friendly and supportive environment where everyone is welcome. We believe in creating a community where members can motivate and inspire each other. Come and be a part of our fitness family!</p>
          <div class="button-container-2">
            <span></span>
            <span class="mas">Join Now</span>
            <button href="/signup" class="btn btn-primary" name="Hover">Join Now</button>
          </div>
          {/* <a href="/signup" class="btn btn-primary"  name="Hover">Join Now</a> */}
        </div>
        <div className='welcome-img'>
          <img src={wave} />
          <img src={gym} />
          <img src={wave} />
        </div>
      </section>
    </div>
  )
}

export default Welcome_page