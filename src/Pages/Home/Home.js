import React, { Component } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './Home.css';
import images from '../../ProjectImages/ProjectImages';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="splash-container" >
                    <div className="splash">
                        <h1 className="splash-head"><b>Let'sChat</b></h1>
                        <p className="splash-subhead">
                            Let's connect with people
                        </p>
                        <div id="custom-button-wrapper">
                            <Link to='/login'>
                                <Link className="my-super-cool-btn">
                                    <div className="dots-container">
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                    </div>
                                    <span className="buttoncooltext">Get Started</span>
                                </Link>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="content">
                        <h2 className="content-head is-center"> Features of Let'sChat Application</h2>


                        <div className="Appfeatures">
                            <div className="contenthead">

                                <h3 class="content-subhead">
                                    <i className="fa fa-rocket"></i>
                                        Get Started Quickly
                                    </h3>
                                <p>
                                    Just register yourself with this app and start chating with your loved ones
                                    </p>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-sign-in"></i>
                                        Firebase Authentication
                                    </h3>
                                <p>
                                    Firebase Authentication has been implemented in this app
                                    </p>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-th-large"></i>
                                        Media
                                    </h3>
                                <p>
                                    You can share images with your friends for better experience
                                    </p>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-refresh"></i>
                                        Updates
                                    </h3>
                                <p>
                                    We will working with new features for this app for better experience in future
                                    </p>
                            </div>
                        </div>
                    </div>

                    <div className="AppfeaturesFounder">
                        <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
                            <img width="300" alt="File Icons" className="pure-img-responsive" src={images.suraj} />
                        </div>
                        <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

                            <h2 className="content-head content-head-ribbon">Suraj Singh Jayal</h2>

                            <p style={{ color: 'white' }}>
                                The Founder of Let'sChat.
                                </p>
                            <p style={{ color: 'white' }}>
                                Currently study at Delhi Technological University and busy to explore new ideas with new technologies. He is a great problem solver and budding web developer. 
                                </p>
                        </div>
                    </div>
                    <div className="content">
                            <h2 className="content-head is-center">Who We Are?</h2>
                            <div className="Appfeatures">
                                <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
                                    <form className="pure-form pure-form-stacked">
                                        <fieldset>
                                            <label for="name">Your Name</label>
                                            <input id="name" type="text" placeholder="Your Name"/>


                                            <label for="email">Your Email</label>
                                            <input id="email" type="email" placeholder="Your Email"/>

                                            <label for="password">Your Password</label>
                                            <input id="password" type="password" placeholder="Your Password"/>

                                            <button type="submit" className="pure-button">Sign Up</button>
                                        </fieldset>
                                    </form>
                                </div>

                                <div className="l-box-lrg pure-u-1 pure-u-md-3-5">
                                    <h4>Contact Us</h4>
                                    {/* <p>
                                    For any question or suggestion you can directly contact us on our Facebook Page:
                                    <a href=" https://web.facebook.com/programming438/"> https://web.facebook.com/programming438/</a>
                                    </p>
                                    <p>
                                    Twitter:<a href= "https://twitter.com/alizeb438">https://twitter.com/alizeb438</a>
                                    </p>
                                    <p>
                                    Facebook: <a href="https://www.facebook.com/profile.php?id=100003967436424">hhttps://www.facebook.com/profile.php?id=100003967436424</a>
                                    </p> */}
                                    <p>
                                    Linkedin:<a href=" https://www.linkedin.com/in/suraj-singh-jayal"> Suraj Singh Jayal</a>
                                    </p>
                                    <p>
                                    Instagram:<a href=" https://www.instagram.com/pahadibro_/"> Pahadi Bro</a>
                                    </p>
                                    
                                    <h4>More Information</h4>
                                    {/* <p>
                                    
                            
                                    </p> */}
                                    <p>
                                    This App is developed for learning purpose - 
                                    Developed by -Suraj Singh Jayal
                                    </p>
                                </div>
                            </div>
                        </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
