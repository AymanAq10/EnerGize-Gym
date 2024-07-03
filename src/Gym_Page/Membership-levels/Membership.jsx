import React from 'react'
import mockup from '../imgs/iMac 24 inch.png'
import './Membership.css'
import staricon from '../icons/icon _star.svg'
import taskicon from '../icons/icon _task.svg'
function Membership() {
    return (
        <>
            <section class="offers"><div class="offers-content">
                <div class="offer-text">
                    <div></div><div><h2>Our pass types</h2><p>Join over 2,300 fitness enthusiasts who have already stepped up their game at our gym!</p>
                    </div>
                </div>
                <div class="offer-img">
                    <img src={mockup} alt="iMac Mockup" />
                </div>
            </div>
                <div class="offers-cards">
                    <div class="offer-card"><div class="card-heading" >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 5.71243C13 5.81821 12.9375 5.93359 12.8125 6.05859L10.1947 8.61147L10.8149 12.2172C10.8196 12.2509 10.8219 12.299 10.8219 12.3615C10.8219 12.4624 10.7967 12.5478 10.7462 12.6175C10.6957 12.6872 10.6224 12.7221 10.5262 12.7221C10.4349 12.7221 10.3388 12.6932 10.2378 12.6356L7 10.9336L3.76202 12.6355C3.65625 12.6932 3.5601 12.722 3.47356 12.722C3.3726 12.722 3.29688 12.6872 3.24639 12.6174C3.19592 12.5477 3.17069 12.4624 3.17069 12.3614C3.17069 12.3326 3.17549 12.2845 3.18509 12.2172L3.80528 8.61143L1.18028 6.05855C1.06009 5.92877 1 5.8134 1 5.71243C1 5.53455 1.13462 5.42398 1.40385 5.3807L5.02404 4.85426L6.64663 1.57301C6.73798 1.3759 6.85577 1.27734 7 1.27734C7.14423 1.27734 7.26202 1.3759 7.35337 1.57301L8.97596 4.85426L12.5962 5.3807C12.8654 5.42398 13 5.53455 13 5.71243Z" fill="#E5AF40" />
                        </svg>
                        <h2>Essentials Package</h2>
                    </div>
                        <div class="card-body">
                            <div>
                                <p>Access to a total of 28 different workouts</p>
                            </div>
                            <div>
                                <p>Includes 6 additional advanced sessions on natural body sorting, full-body training, and geospatial exercises</p>
                            </div>
                            <div>
                                <p>Full resources for all workouts, including versions for cardio, strength, and flexibility exercises (where possible)</p>
                            </div>
                            <div>
                                <p>Over one full hours of video</p>
                            </div>
                        </div>
                        <div class="card-btns">
                            <h3><sup>$</sup>12<sub>usd</sub></h3>
                            <button>Buy Now</button>
                        </div>
                        <svg width="246" height="246" viewBox="0 0 246 246" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.308594 0V35.0144H35.323V0H0.308594ZM70.3373 0V35.0144H105.352V0H70.3373ZM140.366 0V35.0144H175.38V0H140.366ZM210.395 0V35.0144H245.409V0H210.395ZM0.308594 70.0287V105.043H35.323V70.0287H0.308594ZM70.3373 70.0287V105.043H105.352V70.0287H70.3373ZM140.366 70.0287V105.043H175.38V70.0287H140.366ZM210.395 70.0287V105.043H245.409V70.0287H210.395ZM0.308594 140.057V175.072H35.323V140.057H0.308594ZM70.3373 140.057V175.072H105.352V140.057H70.3373ZM140.366 140.057V175.072H175.38V140.057H140.366ZM210.395 140.057V175.072H245.409V140.057H210.395ZM0.308594 210.086V245.101H35.323V210.086H0.308594ZM70.3373 210.086V245.101H105.352V210.086H70.3373ZM140.366 210.086V245.101H175.38V210.086H140.366ZM210.395 210.086V245.101H245.409V210.086H210.395Z" fill="#E91E63" fill-opacity="0.1" />
                        </svg>

                    </div>

                    <div class="offer-card"><div class="card-heading">
                        <img src={staricon} />
                        <h2>Premium Package</h2></div><div class="card-body">
                            <div>
                                <p>Access to a total of 28 different workouts</p>
                            </div>
                            <div>
                                <p>Includes 6 additional advanced sessions on natural body sorting, full-body training, and geospatial exercises</p>
                            </div>
                            <div>
                                <p>Full resources for all workouts, including versions for cardio, strength, and flexibility exercises (where possible)</p>
                            </div>
                            <div >
                                <p>Over two full hours of video content demonstrating exercises</p>
                            </div>
                        </div>
                        <div class="card-btns">
                            <h3><sup>$</sup>18<sub>usd</sub></h3>
                            <button>Buy Now</button>
                        </div>
                    </div>

                    <div class="offer-card"><div class="card-heading">
                        <img src={staricon} />
                        <h2>Normal Package</h2>
                    </div>
                        <div class="card-body">
                            <div>
                                <p>Access to a total of 28 different workouts</p>
                            </div>
                            <div>
                                <p>Includes 6 additional advanced sessions on natural body sorting, full-body training, and geospatial exercises</p>
                            </div>
                            <div>
                                <p>Access to a total of 28 different workouts</p>
                            </div>
                        </div>
                        <div class="card-btns">
                            <h3><sup >$</sup>10 <sub>usd</sub></h3>
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>


            </section>
            <section className='SWO'>
                <h1>Start Work Out </h1>
                <h2>Welcome to <span><span className='head-text'>E</span>nergize <span className='head-text'>G</span>ym</span></h2>
                <div className='footer'>
                    <div className='col'>


                        <div>
                            <svg width="77" height="76" viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.308 10.8574C50.3005 10.8574 60.0223 20.5792 60.0223 32.5717C60.0223 41.0643 54.8232 51.3573 44.5406 63.5868C44.239 63.9454 43.9071 64.2774 43.5484 64.5789C40.1063 67.4731 34.9697 67.0289 32.0755 63.5868C21.7928 51.3573 16.5938 41.0643 16.5938 32.5717C16.5938 20.5792 26.3156 10.8574 38.308 10.8574ZM38.308 14.9289C28.5642 14.9289 20.6652 22.8278 20.6652 32.5717C20.6652 39.8926 25.4689 49.4029 35.1918 60.9666C36.6388 62.6877 39.2072 62.9098 40.9282 61.4627C41.1076 61.3119 41.2735 61.1459 41.4243 60.9666C51.1472 49.4029 55.9509 39.8926 55.9509 32.5717C55.9509 22.8278 48.0519 14.9289 38.308 14.9289ZM38.308 23.0717C43.5532 23.0717 47.808 27.3265 47.808 32.5717C47.808 37.8169 43.5532 42.0717 38.308 42.0717C33.0629 42.0717 28.808 37.8169 28.808 32.5717C28.808 27.3265 33.0629 23.0717 38.308 23.0717ZM38.308 27.1431C35.3115 27.1431 32.8795 29.5751 32.8795 32.5717C32.8795 35.5683 35.3115 38.0003 38.308 38.0003C41.3046 38.0003 43.7366 35.5683 43.7366 32.5717C43.7366 29.5751 41.3046 27.1431 38.308 27.1431Z" fill="#E91E63" />
                            </svg>
                            <h3>Fyslo Widdershoven-Snippe</h3>
                        </div>
                        <div>
                            <p>Overhovenerstraat 8,</p>
                            <p>6131 BZ Sittard</p>
                        </div>
                        <div>
                            <p>Monday - Friday</p>
                            <p>09:00 AM-06:00 PM</p>
                        </div>

                    </div>
                    <div className='col'>


                        <div>
                            <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50.0837 39.8552L49.8348 39.1052C49.2454 37.3529 47.3134 35.5254 45.5385 35.0439L38.9696 33.2491C37.1882 32.7644 34.6471 33.4162 33.3437 34.7197L30.9663 37.0975C22.3263 34.7624 15.5511 27.9858 13.2196 19.3459L15.5971 16.9679C16.9005 15.6643 17.552 13.1261 17.0674 11.3444L15.2762 4.77102C14.7915 2.99256 12.961 1.06023 11.2124 0.477194L10.4625 0.225029C8.7106 -0.358011 6.21205 0.231632 4.9088 1.53511L1.35252 5.09529C0.717197 5.72738 0.311146 7.5353 0.311146 7.5419C0.186763 18.8348 4.61404 29.715 12.6007 37.7033C20.5678 45.6719 31.4053 50.0935 42.6633 49.9985C42.7222 49.9985 44.5822 49.5989 45.2175 48.9667L48.7738 45.4097C50.0771 44.1064 50.6665 41.6075 50.0837 39.8552Z" fill="#E91E63" fill-opacity="0.83" />
                            </svg>
                            <p>Phone :</p>
                        </div>
                        <div>
                            <h3>+31 46 45 16 809</h3>
                        </div>
                        <div>
                            <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.3086 41.0705V25.541C42.3086 17.2198 37.8671 13.3479 31.9451 13.3479C27.1663 13.3479 25.0243 15.9769 23.8312 17.8222V13.9845H14.8275C14.9469 16.5268 14.8275 41.0705 14.8275 41.0705H23.8312V25.944C23.8312 25.1368 23.889 24.327 24.1278 23.7495C24.7775 22.1312 26.2593 20.4564 28.7452 20.4564C32.0042 20.4564 33.3062 22.9397 33.3062 26.5805V41.0719L42.3086 41.0705ZM5.34203 10.2872C8.48022 10.2872 10.4372 8.20555 10.4372 5.60548C10.3794 2.94898 8.48153 0.927734 5.40241 0.927734C2.32328 0.927734 0.308594 2.94767 0.308594 5.60548C0.308594 8.20555 2.26291 10.2872 5.28559 10.2872H5.34203ZM9.84391 41.0705V13.9845H0.841469V41.0705H9.84391Z" fill="#ED447E" />
                            </svg>
                            <p>linkdin :</p>
                        </div>
                        <div>
                            <h3>Egg_wo33</h3>
                        </div>

                    </div>
                    <div className='col'>

                        <div>
                            <svg width="54" height="34" viewBox="0 0 54 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M49.0686 0H4.54859C2.21654 0 0.308594 1.91256 0.308594 4.25V29.75C0.308594 32.0874 2.21654 34 4.54859 34H49.0686C51.4005 34 53.3086 32.0874 53.3086 29.75V4.25C53.3086 1.91256 51.4005 0 49.0686 0ZM46.7366 27.8376L45.0405 29.5376L32.3205 18.7L26.8085 23.375L21.2965 18.7L8.57654 29.5376L6.88054 27.8374L19.3885 17L6.88065 6.16256L8.57665 4.46256L26.8085 20.1876L45.0405 4.46256L46.7366 6.16256L34.2286 17L46.7366 27.8376Z" fill="#ED447E" />
                            </svg>
                            <p>Email:</p>
                        </div>
                        <div>
                            <h3>info@energygym.nl</h3>
                        </div>
                        <div>
                            {/* <h3>info@energygym.nl</h3> */}
                        </div>
                        <div>
                            <button>
                                Get Appointment
                            </button>
                                <svg width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M35.7228 16.4142C36.5039 15.6332 36.5039 14.3668 35.7228 13.5858L22.9949 0.857864C22.2138 0.0768158 20.9475 0.0768158 20.1665 0.857864C19.3854 1.63891 19.3854 2.90524 20.1665 3.68629L31.4802 15L20.1665 26.3137C19.3854 27.0948 19.3854 28.3611 20.1665 29.1421C20.9475 29.9232 22.2138 29.9232 22.9949 29.1421L35.7228 16.4142ZM0.308594 17L34.3086 17V13L0.308594 13L0.308594 17Z" fill="white" />
                                </svg>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Membership