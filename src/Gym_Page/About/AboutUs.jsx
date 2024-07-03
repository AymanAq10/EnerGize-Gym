import React from 'react';
import img1 from '../imgs/running-shoes_12895629 2.png'
import img2 from '../imgs/Group.png'
import img3 from '../imgs/guest_10249030 1.png'
import img4 from "../imgs/full-shot-couple-doing-workout-exercises.jpg"
import './AboutUs.css';
function AboutUs() {

    return (
        <section className="container">
            <div className="img-side">
                <div>
                    <span></span>
                </div>
                <img src={img4} alt='Gym shoes' />
            </div>

            <div className="text-side">
                <div className='title'>
                    <h1>We Are Here To Dream! Our Team Is Here Surve You.</h1>
                    <div className="about-us">
                        <div>
                            <div></div>
                        </div>
                        <a href="#">about us</a>
                    </div>
                </div>

                <p>At vero eos et accusamus et iusto odio digni goikussimos ducimus qui to bonfoe blanditiis praese. Ntium voluum deleniti atque corrupti quos. of a page a reload when looking at its layout. The point of using Lorem Ipsum is that it has pi motive re-or-less normal distribution.</p>
                <div className="Services">
                    <div className="service service-1">
                        <div >
                         <img src={img1} alt='Gym shoes' />

                        </div>
                        <h3>Visite Our Gym</h3>
                    </div>
                    <div className="service service-2">
                        {/* <div style={{background:`url('${img2}')`}}></div> */}
                        <img src={img2} alt='Work Out' />
                        <h3>Work Out</h3>
                    </div>
                    <div className="service service-3">
                        {/* <div style={{background:`url('${img3}')`}}></div> */}
                        <img src={img3} alt='Get Result' />
                        <h3>Get Result</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs