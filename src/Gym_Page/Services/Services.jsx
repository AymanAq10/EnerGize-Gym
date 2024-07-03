import React from 'react'
import './Services.css'
function Services() {
  return (
    <div className='S-container'>
      <div className='line'></div>
      <h1>Services We Provide</h1>
      <section className='content' >
        <div className='img' data-aos="zoom-out-up" data-aos-duration="1000"></div>
        <div data-aos="fade-left"  data-aos-delay="500" data-aos-duration="1000">
          <p></p>
          <h2>Employee Benefits</h2>
          <p>
            At Employee Benefits, we offer a comprehensive solution for companies to provide
            gym memberships as part of their wellness programs. Our service ensures seamless
            integration and easy access for employees. By partnering with us, you'll
            enhance employee satisfaction and promote a healthier workforce.
          </p>
        </div>
      </section>
      <section className='content'>
        <div className='img' data-aos="zoom-out-up" data-aos-duration="1000"></div>
        <div data-aos="fade-right"  data-aos-delay="500" data-aos-duration="1000">
          <p></p>
          <h2>Gym Owner?</h2>
          <p>
            Partnering with us allows gym owners to tap into corporate wellness programs by offering memberships through Employee Benefits.
            Our platform provides seamless integration,
            attracting more members from corporate clients.
            You'll benefit from increased membership rates and steady revenue streams.
          </p>
        </div>
      </section>
      <section className='content' >
        <div className='img' data-aos="zoom-out-up" data-aos-duration="1000"></div>
        <div data-aos="fade-left"  data-aos-delay="500" data-aos-duration="1000">
          <p></p>
          <h2>The Hussle Blog</h2>
          <p>
            The Hussle Blog provides insightful content on fitness, wellness,
            and gym industry trends. Our blog covers a wide range of topics,
            from workout tips and nutrition advice to business strategies for gym owners.
            We aim to inspire and educate both fitness enthusiasts and industry professionals.
            With expert contributors and up-to-date information.
          </p>
        </div>
      </section>
      <section className='content' >
        <div className='img' data-aos="zoom-out-up" data-aos-duration="1000"></div>
        <div data-aos="fade-right"  data-aos-delay="500" data-aos-duration="1000">
          <p></p>
          <h2>Refer a friend</h2>
          <p>
            Refer a friend and share the benefits of our gym memberships! Give £10 off to a friend or family member when they join.
            It’s a great way to support their fitness journey while enjoying a rewarding experience together.
            Plus, you’ll receive a special thank-you for every successful referral. Join our community in promoting
            health and wellness by inviting your loved ones today!
          </p>
        </div>
      </section>

    </div>
  )
}

export default Services