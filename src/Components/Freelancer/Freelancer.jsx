import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import "./Freelancer.css";

const Freelancer = () => {
  const [freelancers, setFreelancers] = useState([]);

  useEffect(() => {
    fetch("/freelancer.json")
      .then((res) => res.json())
      .then((data) => setFreelancers(data));
  }, []);
  console.log(freelancers);
  return (
    <>
      <section className="f-slider">
        <div className="d-flex justify-content-around mb-5">
          <div className="f-heading">
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <h3>Trending Freelancer</h3>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="setting-btn1">
              <img
                className="d-block m-auto mt-2"
                src="https://i.ibb.co/RcJSV3K/leftarrow.png"
                alt=""
              />
            </div>
            <div className="setting-btn">
              <img
                className="d-block m-auto mt-2"
                src="https://i.ibb.co/TBLMRbh/rightarrow.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          {freelancers.map((freelancer) => (
            <div key={freelancer.id} className="col-md-2 ms-auto mb-5">
              <div className="card f-card h-100">
                <img
                  style={{ height: "102px", width: "102px" }}
                  src={freelancer.img}
                  className="card-img-top d-block m-auto p-2 mt-3"
                  alt="..."
                />
                <div className="">
                  <h5 className="card-title text-center f-name">
                    {freelancer.name}
                  </h5>
                  <p className="f-position">{freelancer.position}</p>
                  <div className="text-center" style={{ color: "#ECB800" }}>
                    <span className="text-dark fw-bold">5.0</span>{" "}
                    <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                    <AiFillStar />
                  </div>
                  <p className="card-text f-des">{freelancer.description}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-around text-center mb-4">
                  <div>
                    <span>
                      <BsFillBriefcaseFill />
                    </span>
                    <p className="m-0" style={{ color: "#888888" }}>
                      Projects
                    </p>
                    <span
                      style={{ "font-weight": "500", "font-family": "Poppins" }}
                    >
                      90+
                    </span>
                  </div>
                  <div>
                    <span>
                      <BsFillBriefcaseFill />
                    </span>
                    <p className="m-0" style={{ color: "#888888" }}>
                      Projects
                    </p>
                    <span
                      style={{ "font-weight": "500", "font-family": "Poppins" }}
                    >
                      90+
                    </span>
                  </div>
                  <div>
                    <span>
                      <BsFillBriefcaseFill />
                    </span>
                    <p className="m-0" style={{ color: "#888888" }}>
                      Projects
                    </p>
                    <span
                      style={{ "font-weight": "500", "font-family": "Poppins" }}
                    >
                      90+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Freelancer;
