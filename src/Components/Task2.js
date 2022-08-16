import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Logo from "./Logo1.png"
import Img1 from "./1.png"
import Img2 from "./2.png"
import Img3 from "./3.png"
import Img4 from "./4.png"
import Img5 from "./5.png"
import Img6 from "./6.png"

import AA from "./AA.png"


export default class Task2 extends Component {
    render() {
        return (
            <div className='fullBackground'>
                <div >
                    {/* ...........Page1............. */}
                    <div className='page1'>
                        <div className='container-fluid'>

                            <div className='col-md'>
                                <div className="navbar navbar-brand">
                                    <Link to="#" className="nav-link text-white">
                                        <button type="button" class="btn btn px-4 mx-5" id="Navbarlogoi">
                                            <b>Logo</b>
                                        </button>
                                    </Link>
                                    <div id="menu">
                                        <ul className="nav nav-group" id="menu">
                                            <li className="nav-item">
                                                <Link to="#" className="nav-link text-light">
                                                    <button type="button" class="btn btn-outline-dark">Login</button>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="#" className="nav-link text-light">
                                                    <button type="button" class="btn btn-dark">Sign up</button>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="#" className="nav-link text-light">
                                                    <button type="button" class="btn btn-outline" id="Navbarlogo">Be Freelancer</button>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <label id="icon">
                            <i class="fa fa-bars"></i>
                        </label>

                    </div>
                </div>
                {/* .............Page2................. */}
                <div className='page2 pt-5'>
                    <div className='container '>
                        <div className='row'>
                            <div className='col-md-7 mb-2 pt-2'>
                                <div className='left'>
                                    <p className='heading'>Lorem ipsum dolor sit
                                        <br/>amet, consectetur<br/>
                                        adipiscing elit.</p><br/>
                                    <p className='text'>Lorem ipsum dolor sit amet consectetur,
                                        <br/>adipisicing elit. Facilisi tincidunt volutpat
                                        <br/>vestibulum,massa,imperdiet</p>
                                </div>
                            </div>
                            <div className='col-md-5 '>
                                <div className='img'><img src={Logo} alt="Img" height="auto" width="100%"/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div class="form col-sm" id='text'>
                                <i class="fa fa-search text-dark">&nbsp;&nbsp;<span className='vr'></span>
                                </i>
                                <input
                                    type="text"
                                    class="form-control form-input"
                                    placeholder="What are you looking here eg. freelancer, projects"
                                    />
                            </div>
                            <span className='float-start mb-5' >
                                <span className='m-2'>Search:</span>
                                <span className='btn btn-sm btn-outline-secondary bg-muted px-2 m-2' id='color'>Logo Design</span>
                                <span className='btn btn-sm btn-outline-secondary bg-muted px-2 m-2' id='color'>SEO</span>
                                <span className='btn btn-sm btn-outline-secondary bg-muted px-2 m-2 button' id='color'>Wordpress</span>
                            </span>
                        </div>
                    </div>
                </div>
                {/* .............Page3............ */}
                <div className='page3'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-5 p-4 mt-5'>
                                <p className='h5'>
                                    <b>Lorem ipsum dolor sit amet
                                        <br></br>consectetur</b>
                                </p>
                                <h2 className=' h1 text-light'>Our Choices
                                    <br></br>with different
                                    <br></br>technology</h2>
                            </div>

                            <div className='col-md-7 p-4'>
                                <div className=' row'>
                                    <div className='col-4 con1'><img src={Img1} alt="pan" width="100%"/>
                                        <p className='cont'>Content Writing</p>
                                    </div>
                                    <div className='col-4 con1'><img src={Img2} alt="pan" width="100%"/>
                                        <p className='cont'>Graphics Design</p>
                                    </div>
                                    <div className='col-4 con1'><img src={Img3} alt="pan" width="100%"/>
                                        <p className='cont'>Finance</p>
                                    </div>
                                    <div className='col-4 con1'><img src={Img4} alt="pan" width="100%"/>
                                        <p className='cont'>SEO</p>
                                    </div>
                                    <div className='col-4 con1'><img src={Img5} alt="pan" width="100%"/>
                                        <p className='cont'>Game Development</p>
                                    </div>
                                    <div className='col-4 con1'><img src={Img6} alt="pan" width="100%"/>
                                        <p className='cont'>Logo Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* .............Page4............ */}
                <div className='page4 pt-5 mb-5'>
                    <div className='container mb-3'>
                        <div className='row'>
                            <div className='col-sm '>
                                <p className='h5 page4text'>Lorem ipsum dolor sit amet consectetur</p>
                                <h3 className='h1'>Trending Freelancer</h3>
                            </div>
                            <div className='col-sm mt-5'>
                                <span className='float-end'>
                                    <span className='btn btn-sm btn text-dark mx-2 ' id="page4Btn">
                                        <i class="fa-solid fa-arrow-left px-4"></i>
                                    </span>
                                    <span className='btn btn-sm btn-dark mx-2 '>
                                        <i class="fa-solid fa-arrow-right px-4"></i>
                                    </span>
                                </span>
                            </div>
                        </div>

                        <div className='row mt-4'>
                            <div className='col'>

                                {/* <div className='page4Ime1'></div> */}
                                <div className='card page4card'>

                                    <div className='card-header ' id='page4Head1'>
                                        {/* <img src={A} alt="Img"/> */}

                                    </div>

                                    <div className='card-body'>
                                        <div className='row'>
                                            <span className=''>
                                                <b>Eleanor Pena</b>
                                            </span><br/>
                                            <span className=' text-muted '>
                                                <small>Backend Developer</small>
                                            </span><br/>
                                            <span className=''>
                                                <b>5.0</b>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                            </span>
                                        </div>
                                        <div className='row mx-2'>
                                            <div className="col">
                                                <i class="fa-solid fa-briefcase"></i><br/>
                                                <span>Projects</span><br/>
                                                <span>90 +</span>
                                            </div>
                                            <div className="col">
                                                <i class="fa-solid fa-user"></i><br/>
                                                <span>Clients</span><br/>
                                                <span>100 +</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card'>
                                    <div className='card-header' id='page4Head2'></div>
                                    <div className='card-body'>
                                        <div className='row'>
                                            <span className=''>
                                                <b>Jenny Wilson</b>
                                            </span><br/>
                                            <span className=' text-muted '>
                                                <small>React Developer</small>
                                            </span><br/>
                                            <span className=''>
                                                <b>5.0</b>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                            </span>
                                        </div>
                                        <div className='row mx-2'>
                                            <div className="col">
                                                <i class="fa-solid fa-briefcase"></i><br/>
                                                <span>Projects</span><br/>
                                                <span>90 +</span>
                                            </div>
                                            <div className="col">
                                                <i class="fa-solid fa-user"></i><br/>
                                                <span>Clients</span><br/>
                                                <span>100 +</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card'>
                                    <div className='card-header' id='page4Head3'></div>
                                    <div className='card-body'>
                                        <div className='row'>
                                            <span className=''>
                                                <b>Albert Flores</b>
                                            </span><br/>
                                            <span className=' text-muted '>
                                                <small>IOS Developer</small>
                                            </span><br/>
                                            <span className=''>
                                                <b>5.0</b>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                            </span>
                                        </div>
                                        <div className='row mx-2'>
                                            <div className="col">
                                                <i class="fa-solid fa-briefcase"></i><br/>
                                                <span>Projects</span><br/>
                                                <span>90 +</span>
                                            </div>
                                            <div className="col">
                                                <i class="fa-solid fa-user"></i><br/>
                                                <span>Clients</span><br/>
                                                <span>100 +</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card'>
                                    <div className='card-header' id='page4Head4'></div>
                                    <div className='card-body'>
                                        <div className='row'>
                                            <span className=''>
                                                <b>Bessie Cooper</b>
                                            </span><br/>
                                            <span className=' text-muted '>
                                                <small>Graphics Designer</small>
                                            </span><br/>
                                            <span className=''>
                                                <b>5.0</b>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                            </span>
                                        </div>
                                        <div className='row mx-2'>
                                            <div className="col">
                                                <i class="fa-solid fa-briefcase"></i><br/>
                                                <span>Projects</span><br/>
                                                <span>90 +</span>
                                            </div>
                                            <div className="col">
                                                <i class="fa-solid fa-user"></i><br/>
                                                <span>Clients</span><br/>
                                                <span>100 +</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card'>
                                    <div className='card-header' id='page4Head5'></div>
                                    <div className='card-body'>
                                        <div className='row'>
                                            <span className=''>
                                                <b>Arlene McCoy</b>
                                            </span><br/>
                                            <span className=' text-muted '>
                                                <small>Graphics Designer</small>
                                            </span><br/>
                                            <span className=''>
                                                <b>5.0</b>
                                                <i class="fa-solid fa-star text-warning "></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                                <i class="fa-solid fa-star text-warning"></i>
                                            </span>
                                        </div>
                                        <div className='row mx-2'>
                                            <div className="col">
                                                <i class="fa-solid fa-briefcase"></i><br/>
                                                <span>Projects</span><br/>
                                                <span>90 +</span>
                                            </div>
                                            <div className="col">
                                                <i class="fa-solid fa-user"></i><br/>
                                                <span>Clients</span><br/>
                                                <span>100 +</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* ...........page5............ */}
                <div className='page5 pt-4 pb-4'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 forthpageImg'>
                                <img src={AA} alt="Img"/>

                            </div>
                            <div className='col-md-6 mt-5'>
                                <div className='row'>
                                    <small>Lorem ipsum dolor sit amet consectetur</small>
                                    <h3 className='text-light'>What We Offer You</h3>
                                </div>
                                <div className='row text-light mt-4'>
                                    <div className='col-1 mt-2 '>
                                        <span className='btn border border-outline-light text-light'>
                                            <i class="fa-solid fa-location-dot"></i>
                                        </span>
                                    </div>
                                    <div className='col mx-3'>
                                        <span className='h5'>location By Developer</span><br/>
                                        <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, quos
                                            perferendis iusto ullam doloribus nisi.</small>
                                    </div>
                                </div>

                                <div className='row text-light mt-3'>
                                    <div className='col-1 mt-2 '>
                                        <span className='btn border border-outline-light text-light'>
                                            <i class="fa-solid fa-screwdriver-wrench"></i>
                                        </span>
                                    </div>
                                    <div className='col mx-3'>
                                        <span className='h5'>Client & Freelancer Features</span><br/>
                                        <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, quos
                                            perferendis iusto ullam doloribus nisi.</small>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* ...........page6............ */}
                <div className='page6 pt-5 pb-5'>
                    <div className='container text-center'>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <p className='h5 page4text'>Lorem ipsum dolor sit amet consectetur</p>
                                    <h3 className='h1'>Features for your Growth</h3>
                                </div>
                                <div className='row FifthpageRow'>
                                    <div className='row'>
                                        <div className='col m-4 p-3 fifthpageBI'>
                                            <p className='h1 text-info'>
                                                <i class="fa-solid fa-code"></i>
                                            </p>
                                            <p>
                                                <b>Programming</b>
                                            </p>
                                        </div>
                                        <div className='col m-4 p-3 fifthpageBI'>
                                            <p className='h1 text-info'>
                                                <i class="fa-solid fa-music"></i>
                                            </p>
                                            <p>
                                                <b>Music</b>
                                            </p>
                                        </div>
                                        <div className='col m-4 p-3 fifthpageBI'>
                                            <p className='h1 text-info'>
                                                <i class="fa-solid fa-comments-dollar"></i>
                                            </p>
                                            <p>
                                                <b>Digital Marketing</b>
                                            </p>
                                        </div>
                                        <div className='col m-4 p-3 fifthpageBI'>
                                            <p className='h1 text-info'>
                                                <i class="fa-solid fa-pen-ruler"></i>
                                            </p>
                                            <p>
                                                <b>Design & Art</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col m-4 p-3 fifthpageBI'>
                                            <p className='h1 text-info'>
                                                <i class="fa-solid fa-calculator"></i>
                                            </p>
                                            <p>
                                                <b>Finance</b>
                                            </p>
                                        </div>
                                        <div className='col m-4 p-3 fifthpageBI'>
                                            <p className='h1 text-info'>
                                                <i class="fa-solid fa-file-pen"></i>
                                            </p>
                                            <p>
                                                <b>Content</b>
                                            </p>
                                        </div>
                                        <div className='col m-4 p-3 fifthpageBI'>
                                            <p className='h1 text-info'>
                                                <i class="fa-solid fa-chart-simple"></i>
                                            </p>
                                            <p>
                                                <b>Sales & Marketing</b>
                                            </p>
                                        </div>
                                        <div className='col m-4 p-3 '></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* ...........page7............ */}
                <div className='page7 pt-4 pb-4'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md p-5'>
                                <p>
                                    <b>Contact Us</b>
                                </p>
                                <p className='h1 text-light '>
                                    <b>Let's have a</b>
                                </p>
                                <p className='h1 text-light'>
                                    <b>Conversation for</b>
                                </p>
                                <p className='h1 text-light'>
                                    <b>Your Quiry !</b>
                                </p>
                            </div>
                            <div className='col-md'>
                                <div className='container bg-light p-3' id="SixpageCon">
                                    <form>
                                        <div class="form-group m-3">
                                            <label className='mb-2'>Email</label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                id="Inputbox"
                                                placeholder="eg saumen.thakur@gmail.com"/>
                                        </div>
                                        <div class="form-group m-3">
                                            <label className='mb-2'>Message</label>
                                            <textarea
                                                class="form-control"
                                                id="Inputbox"
                                                rows="4"
                                                placeholder='Type Something...'></textarea>
                                        </div>
                                        <div class="form-group m-3">
                                            <div className='btn btn-dark ' id='sixpageBTN'>Send Request</div>
                                        </div>
                                    </form>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                {/* ...........page8................ */}
                <div className='page8'>
                    <div className='container-fliud mt-3 p-5'>
                        <div className='row'>
                            <div className='col'>
                                <div className='btn text-light px-3 ' id="LogoBTN1">
                                    <b>Logo</b>
                                </div><br/>
                                <address>
                                    1901 Thornridge Cir,<br/>
                                    Shiloh, Hawaii<br/>
                                    81063
                                </address>
                            </div>
                            <div className='col'>
                                <h5>
                                    <b>Company</b>
                                </h5>
                                <span className='text-muted'>About Us</span><br/>
                                <span className='text-muted'>Career</span><br/>
                                <span className='text-muted'>Team</span><br/>
                                <span className='text-muted'>Contact</span><br/>
                            </div>
                            <div className='col'>
                                <h5>
                                    <b>Product</b>
                                </h5>
                                <span className='text-muted'>Service</span><br/>
                                <span className='text-muted'>Freelancer</span><br/>
                                <span className='text-muted'>Features</span><br/>
                                <span className='text-muted'>Development</span><br/>
                            </div>
                            <div className='col'>
                                <h5>
                                    <b>Links</b>
                                </h5>
                                <span className='text-muted'>Privacy Policy</span><br/>
                                <span className='text-muted'>Term & Conditions</span><br/>
                                <span className='text-muted'>FAQ</span><br/>

                            </div>
                            <div className='col'>
                                <h5>
                                    <b>Follow Us</b>
                                </h5>
                                <span className='h2 m-2'>
                                    <i class="fa-brands fa-square-twitter"></i>
                                </span>
                                <span className='h2 m-2'>
                                    <i class="fa-brands fa-square-facebook"></i>
                                </span>
                                <span className='h2 m-2'>
                                    <i class="fa-brands fa-square-instagram"></i>
                                </span>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
