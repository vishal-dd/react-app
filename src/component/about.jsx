import React from 'react';
import { FaStar } from 'react-icons/fa';
import './about.css';
import { Card } from './cards';
import { FaqAccordion } from './FaqAccordion';

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
                <button className="btn btn-light w-100 w-md-auto">Contact Now</button>
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
      <section className="about-wrapper">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-auto bg-purple side-strip d-none d-md-block"></div>

            <div className="col-md-10 bg-white content-box d-flex flex-wrap align-items-center p-4 position-relative">
              <div className="col-12 col-md-6 p-3 text-center text-md-start">
                <h6 className="text-uppercase text-muted fw-bold">Who we are</h6>
                <h1 className="fw-bold display-6">About us</h1>
                <p className="mt-3">
                  Welcome to the National Hookah Community Association "NHCA"...
                </p>
                <p>If you are a Hookah business, please join us...</p>
                <p>If you are an interested member of the public, welcome...</p>
                <button className="btn black-pill-btn mt-3">Read more</button>
              </div>
              <div className="col-12 col-md-6 p-3 text-center">
                <img
                  src="./aboutimg2.png"
                  alt="Hookah"
                  className="img-fluid rounded shadow-sm"
                />
              </div>

              <div className="w-100 position-absolute bottom-0 start-0">
                <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#3b2e75"
                    d="M0,0 C360,100 1080,0 1440,100 L1440,100 L0,100 Z"
                  />
                </svg>
              </div>
            </div>

            <div className="col-auto bg-purple side-strip d-none d-md-block"></div>
          </div>
        </div>

        {/* Why Choose Me Section */}
        <div className="choose-me-wrapper py-5">
          <div className="container text-white">
            <div className="text-center mb-5">
              <p className="lead get-to-know">GET TO KNOW MORE ABOUT ME</p>
              <h1 className="fw-bold fs-2 fs-md-1">Why should you choose me?</h1>
              <p className="mx-auto" style={{ maxWidth: '800px' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quo excepturi sunt...
              </p>
            </div>

            <div className="row g-4 text-center text-md-start">
              <div className="col-12 col-md-4">
                <h4>Advocacy and Legislative Representation</h4>
                <p>Your membership of NHCA hookah interests with legislative bodies...</p>
              </div>
              <div className="col-12 col-md-4">
                <h4>Tools, Resources, and Education</h4>
                <p>Your membership of NHCA hookah interests with legislative bodies...</p>
              </div>
              <div className="col-12 col-md-4">
                <h4>Unifying Voice</h4>
                <p>Your membership of NHCA hookah interests with legislative bodies...</p>
              </div>
            </div>
          </div>
        </div>
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