import React from 'react';
import { FaStar } from 'react-icons/fa';
import './about.css';
import { Card } from './cards';
import { FaqAccordion } from './FaqAccordion';
import ChooseMe from './ChooseMe';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
              <img
                src="./aboutimg.png"
                alt="Hero visual"
                className="img-fluid rounded hero-image"
              />
            </div>

            <div className="col-12 col-md-6 text-center text-md-start">
              <h1 className="fw-bold mb-3 fs-2 fs-md-1">
                Transform Your Business
                <br />
                with Innovative
                <br />
                Software Consulting
              </h1>
              <p className="text-muted mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
              </p>

              <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center gap-3 mb-4">
                <button className="btn  w-100 w-md-auto contactbtn">Contact Now</button>
                <button className="btn btn-outline-dark fw-semibold w-100 w-md-auto">
                  Book a Demo Today
                </button>
              </div>

              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <FaStar className="text-warning" />
                <small className="text-muted">Rated 4.9 out of 1200 reviews</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section>
        <div className='about-us1'>
             <div className="d-flex bg-white container about-content  w-75">
              <div className="p-2">
                <h6 className="text-uppercase text-muted fw-bold">Who we are</h6>
                <h1 className="fw-bold display-6">About us</h1>
                <p className="mt-3">
                  Welcome to the National Hookah Community Association "NHCA"...
                </p>
                <p>If you are a Hookah business, please join us...</p>
                <p>If you are an interested member of the public, welcome...</p>
                <button className="btn btn-dark rounded-5 mt-3">Read more</button>
              </div>
              <div className="p-2">
                <img
                  src="./aboutimg2.png"
                  alt="Hookah"
                  className="img-fluid rounded shadow-sm"
                />
              </div>

             
            </div>
        </div>
      </section>
       <section className='chooseme'>
          <ChooseMe />
       </section>

      {/* Cards Section */}
      <section>
        <Card />
      </section>

      {/* FAQ Section */}
      <section>
        <FaqAccordion />
      </section>
    </div>
  );
}