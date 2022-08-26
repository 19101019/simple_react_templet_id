import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Img1 from "./assests/1.png"
import Img2 from "./assests/2.png"
import Img3 from "./assests/3.png"
import Img4 from "./assests/4.png"
import Img5 from "./assests/5.png"
import Img6 from "./assests/6.png"
import Logo from "./assests/Logo1.png"
import Features from './Features/Features'
import Freelancer from './Freelancer/Freelancer'
import OurOffer from './OurOffer/OurOffer'

/* import AA from "./AA.png" */


export default class Task2 extends Component {
    render() {
        return (
          <div>
            <div>
              {/* ...........Page1............. */}
              <div className="page1">
                <div className="container-fluid">
                  <div className="col-md">
                    <div className="navbar navbar-brand">
                      <Link to="#" className="nav-link text-white">
                        <button
                          type="button"
                          className="btn btn px-4 mx-5"
                          id="Navbarlogoi"
                        >
                          <b>Logo</b>
                        </button>
                      </Link>
                      <div id="menu">
                        <ul className="nav nav-group" id="menu">
                          <li className="nav-item">
                            <Link to="#" className="nav-link text-light">
                              <button
                                type="button"
                                className="btn btn-outline-dark"
                              >
                                Login
                              </button>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="#" className="nav-link text-light">
                              <button type="button" className="btn btn-dark">
                                Sign up
                              </button>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="#" className="nav-link text-light">
                              <button
                                type="button"
                                className="btn btn-outline"
                                id="Navbarlogo"
                              >
                                Be Freelancer
                              </button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <label id="icon">
                  <i className="fa fa-bars"></i>
                </label>
              </div>
            </div>
            {/* .............Page2................. */}
            <div className="page2 pt-5">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 mb-2 pt-2">
                    <div className="left">
                      <p className="heading">
                        Lorem ipsum dolor sit
                        <br />
                        amet, consectetur
                        <br />
                        adipiscing elit
                      </p>
                      <br />
                      <p className="text">
                        Lorem ipsum dolor sit amet consectetur,
                        <br />
                        adipisicing elit. Facilisi tincidunt volutpat
                        <br />
                        vestibulum,massa,imperdiet
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5 ">
                    <div className="img">
                      <img src={Logo} alt="Img" height="auto" width="100%" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="form col-sm" id="text">
                    <i className="fa fa-search text-dark">
                      &nbsp;&nbsp;<span className="vr"></span>
                    </i>
                    <input
                      type="text"
                      className="form-control form-input"
                      placeholder="What are you looking here eg. freelancer, projects"
                    />
                  </div>
                  <span className="float-start mb-5">
                    <span className="m-2">Search:</span>
                    <span
                      className="btn btn-sm btn-outline-secondary bg-muted px-2 m-2"
                      id="color"
                    >
                      Logo Design
                    </span>
                    <span
                      className="btn btn-sm btn-outline-secondary bg-muted px-2 m-2"
                      id="color"
                    >
                      SEO
                    </span>
                    <span
                      className="btn btn-sm btn-outline-secondary bg-muted px-2 m-2 button"
                      id="color"
                    >
                      Wordpress
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/* .............Page3............ */}
            <div className="page3">
              <div className="container">
                <div className="row">
                  <div className="col-md-5 mt-5">
                    <p className="heading-small">
                      Lorem ipsum dolor sit amet,
                      <br /> consectetur
                    </p>
                    <h2 className="heading-two">
                      Our Choices with different technology
                    </h2>
                  </div>

                  <div className="col-md-7 p-4" id="mob">
                    <div className=" row">
                      <div className="col-4 con1">
                        <img src={Img1} alt="pan" width="100%" />
                        <p className="cont">Content Writing</p>
                      </div>
                      <div className="col-4 con1">
                        <img src={Img2} alt="pan" width="100%" />
                        <p className="cont">Graphics Design</p>
                      </div>
                      <div className="col-4 con1">
                        <img src={Img3} alt="pan" width="100%" />
                        <p className="cont">Finance</p>
                      </div>
                      <div className="col-4 con1">
                        <img src={Img4} alt="pan" width="100%" />
                        <p className="cont">SEO</p>
                      </div>
                      <div className="col-4 con1">
                        <img src={Img5} alt="pan" width="100%" />
                        <p className="cont">Game Development</p>
                      </div>
                      <div className="col-4 con1">
                        <img src={Img6} alt="pan" width="100%" />
                        <p className="cont">Logo Design</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Trending Freelancer - sayam */}
            <Freelancer />
            {/* Trending Freelancer - sayam */}
            {/* Our Offer Section - sayam */}
            <OurOffer />
            {/* Our Offer Section - sayam */}
            {/* Features Section - sayam */}
            <Features />
            {/* Features Section - sayam */}
            <div className="page7 pt-4 pb-4">
              <div className="container">
                <div className="row">
                  <div className="col-md p-5">
                    <p>
                      <b>Contact Us</b>
                    </p>
                    <p className="h1 text-light ">
                      <b>Let's have a</b>
                    </p>
                    <p className="h1 text-light">
                      <b>Conversation for</b>
                    </p>
                    <p className="h1 text-light">
                      <b>Your Quiry !</b>
                    </p>
                  </div>
                  <div className="col-md">
                    <div className="container bg-light p-3" id="SixpageCon">
                      <form>
                        <div className="form-group m-3">
                          <label className="mb-2">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="Inputbox"
                            placeholder="eg saumen.thakur@gmail.com"
                          />
                        </div>
                        <div className="form-group m-3">
                          <label className="mb-2">Message</label>
                          <textarea
                            className="form-control"
                            id="Inputbox"
                            rows="4"
                            placeholder="Type Something..."
                          ></textarea>
                        </div>
                        <div className="form-group m-3">
                          <div className="btn btn-dark " id="sixpageBTN">
                            Send Request
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ...........page8................ */}
            <div className="page8">
              <div className="container-fliud mt-3 p-5">
                <div className="row">
                  <div className="col">
                    <div className="btn text-light px-3 " id="LogoBTN1">
                      <b>Logo</b>
                    </div>
                    <br />
                    <address>
                      1901 Thornridge Cir,
                      <br />
                      Shiloh, Hawaii
                      <br />
                      81063
                    </address>
                  </div>
                  <div className="col">
                    <h5>
                      <b>Company</b>
                    </h5>
                    <span className="text-muted">About Us</span>
                    <br />
                    <span className="text-muted">Career</span>
                    <br />
                    <span className="text-muted">Team</span>
                    <br />
                    <span className="text-muted">Contact</span>
                    <br />
                  </div>
                  <div className="col">
                    <h5>
                      <b>Product</b>
                    </h5>
                    <span className="text-muted">Service</span>
                    <br />
                    <span className="text-muted">Freelancer</span>
                    <br />
                    <span className="text-muted">Features</span>
                    <br />
                    <span className="text-muted">Development</span>
                    <br />
                  </div>
                  <div className="col">
                    <h5>
                      <b>Links</b>
                    </h5>
                    <span className="text-muted">Privacy Policy</span>
                    <br />
                    <span className="text-muted">Term & Conditions</span>
                    <br />
                    <span className="text-muted">FAQ</span>
                    <br />
                  </div>
                  <div className="col">
                    <h5>
                      <b>Follow Us</b>
                    </h5>
                    <span className="h2 m-2">
                      <i className="fa-brands fa-square-twitter"></i>
                    </span>
                    <span className="h2 m-2">
                      <i className="fa-brands fa-square-facebook"></i>
                    </span>
                    <span className="h2 m-2">
                      <i className="fa-brands fa-square-instagram"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
