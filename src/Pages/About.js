import React from "react";
import Brand from "../Assets/Brand.svg";
import Amin from "../Assets/Amin.jpg";
import Ahmed from "../Assets/Ahmed.svg";

function About() {
  return (
    <div className="bg-primary h-screen">
      <div>
        <div className="font-poppins m-auto text-center pt-24 flex flex-col justify-center">
          <p className="text-white font-bold text-2xl">
            TEAM OF <span className="text-Green">KULAN CODERS</span>
          </p>
          <p className="text-body font-medium text-xs mt-4 leading-5">
            There are many variations of passages of Lorem Ipsum available, but
            <br />
            randomised words which don't look even believable.
          </p>
        </div>

        <div className="flex gap-10 m-auto justify-center mt-12">
          <div className="text-center">
            <div className="w-40 h-40 bg-Secondary rounded-3xl">
              <img src={Ahmed} alt="" class="rounded-3xl w-40 h-40" />
            </div>
            <div className="font-poppins font-medium text-xs mt-5">
              <p className="text-white">Ahmed Saed</p>
              <p className="text-body mt-2 leading-5">
                Frontend | UI Designer <br /> Backend Dev
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="w-40 h-40 bg-Secondary rounded-3xl">
              <img src={Amin} alt="" class="rounded-3xl" />
            </div>
            <div className="font-poppins font-medium text-xs mt-5">
              <p className="text-white">Amin Mustafa</p>
              <p className="text-body mt-2 leading-5">
                Frontend | UI Designer <br /> Visual Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
