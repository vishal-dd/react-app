import React from 'react';
import { FaStar, FaArrowRight } from 'react-icons/fa';
import './homepage.css'
import { FaqAccordion } from './FaqAccordion';
import { Card } from './cards';

export function Homepage() {

  return (
    <div>
      
       <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          
          {/* Left Content */}
          {/* <div className="col-12 col-md-10 col-lg-6 mb-5 mb-lg-0 text-center text-lg-start">
            <h1 className="fw-bold display-5 text-dark">
              Transform Your Business <br />
              with Innovative <br />
              Software Consulting
            </h1>
            <p className="text-secondary mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the...
            </p>

            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center gap-3 mt-4">
              <button
                className="btn px-4 py-2 fw-semibold"
                style={{ backgroundColor: "#fddfe1" }}
              >
                Contact Now
              </button>

              <button className="btn btn-outline-secondary d-flex align-items-center gap-2 fw-semibold">
                <FaArrowRight /> Book a Demo Today
              </button>
            </div>

            <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-2 mt-4">
              <div
                className="px-3 py-2 rounded"
                style={{ backgroundColor: "#fddfe1" }}
              >
                <FaStar className="text-dark" />
              </div>
              <small className="text-secondary fw-medium">
                Rated 4.9 out of 1200 reviews
              </small>
            </div>
          </div> */}
  <div className="col-12 col-md-10 col-lg-6 mb-5 mb-lg-0 text-center text-lg-start">
  {/* Add a class to the H1 to act as our animation container */}
  <h1 className="fw-bold display-5 text-dark animated-headline">
    {/* Wrap each line in a span */}
    <span>Transform Your Business</span>
    <span>with Innovative</span>
    <span>Software Consulting</span>
  </h1>

  <p className="text-secondary mt-3">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the...
  </p>

  {/* ... (rest of your code is the same) ... */}
</div>

          {/* Right Content */}
          <div className="col-12 col-md-8 col-lg-5 mx-auto position-relative">
            <div
              className="position-relative rounded w-100 mx-auto"
              style={{
                backgroundColor: "#fddfe1",
                minHeight: "350px",
                borderRadius: "8px",
              }}
            >
              {/* Small white stats card */}
              <div
                className="bg-white shadow rounded p-3 position-absolute hero-visitors"
               
              >
                <p className="mb-1 fw-semibold text-muted small">New visitors</p>
                <h5 className="fw-bold">
                  84% <small className="text-success">+0.4%</small>
                </h5>

                <div className="d-flex justify-content-between mt-3">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <div key={i} className="text-center">
                      <div
                        style={{
                          width: "10px",
                          height: `${20 + Math.random() * 40}px`,
                          backgroundColor: i === 4 ? "#343a40" : "#e0bfc2",
                          margin: "0 auto",
                          borderRadius: "4px",
                        }}
                      ></div>
                      <small className="text-muted">{d}</small>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow graphic */}
              <img
                src="./img.png"
                alt="Arrow Graphic"
                className="visitors-icon"

              />
            </div>
          </div>

        </div>
      </div>
    </section>

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="p-4 border rounded bg-white">
                <div className="row align-items-center">
                  <div className="col-md-4 text-md-start text-center mb-3 mb-md-0">
                    <h6 className="fw-bold mb-0">Trusted by over 100+<br />businesses worldwide!</h6>
                  </div>

                  <div className="col-md-8">
                    <div className="d-flex flex-wrap justify-content-center gap-4">
                      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968773.png" alt="Brand1" width="40" />
                      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" alt="Brand2" width="40" />
                      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968853.png" alt="Brand3" width="40" />
                      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968823.png" alt="Brand4" width="40" />
                      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png" alt="Brand5" width="40" />
                      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968894.png" alt="Brand6" width="40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5" style={{ backgroundColor: "#f9f9fb" }}>
        <div className="container first">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 position-relative">
              <div className="bg-white rounded shadow-sm p-4 text-center" style={{ maxWidth: "560px", margin: "0 auto" }}>
                <h6 className="fw-bold mb-2">New visitors</h6>
                <p className="fw-semibold fs-4 mb-1">84% <span className="text-muted fs-6">+0.4%</span></p>
                <div className="d-flex justify-content-between align-items-end" style={{ height: "60px",}}>
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
                    <div key={idx} className="text-center" style={{ width: '14%' }}>
                      <div style={{
                        height: `${[25, 30, 28, 30, 70, 35, 30][idx]}%`,
                        backgroundColor: idx === 4 ? '#4B3BF3' : '#f3cdd2',
                        borderRadius: '4px'
                      }}></div>
                      <small>{day}</small>
                    </div>
                  ))}
                </div>
              </div>

              <img 
                src="./new visitor icons.png"
                alt="star"
                style={{ position: 'absolute', top: -20, left: 20, width: 40 }}
              />
              <img  className='abc1'
                src="./success.png"
                alt="swirl"
              />
            </div>
                  
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Success Stories That Speak<br />for Themselves.</h2>
              <p className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the
              </p>
              <p className="text-muted">
                Letraset sheets containing Lorem Ipsum passages, and more recently
              </p>

              <div className="d-flex align-items-center mb-3">
                <span className="bg-light border rounded p-2 me-3">

                </span>
                <span>Seamlessly Transitioning 74 Engineers Across Organizations</span>
              </div>
              <div className="d-flex align-items-center mb-4">
                <span className="bg-light border rounded p-2 me-3">

                </span>
                <span>Transforming Vendor Dependency into In-House Excellence</span>
              </div>

              <button className="btn btn-light px-4 py-2 border text-dark" style={{ backgroundColor: '#fcdde1' }}>
                Explore More &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="screenshot-box" role="region" aria-label="Business value propositions">
            <div className="item">
              <div className="icon-box icon1" aria-hidden="true">
                <svg className="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="text">Real Solutions,<br />Real Impact.</div>
            </div>
            <div className="item">
              <div className="icon-box icon2" aria-hidden="true">
                <svg className="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"></circle> {/* stroke-width becomes strokeWidth in React */}
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="text">Efficiency Unlocked, Growth<br />Delivered.</div>
            </div>
            <div className="item">
              <div className="icon-box icon3" aria-hidden="true">
                <svg className="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M18 8v6a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="17" y2="7"></line>
                </svg>
              </div>
              <div className="text">Transforming Challenges into<br />Opportunities.</div>
            </div>
          </div>
        </div>
      </section>
      <section className="supervision py-5">
        <div className="container">
          <div className="row align-items-center">


            <div className="col-md-6">
              <h1>Let your business thrive under our supervision</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda in possimus maiores recusandae,
                quae debitis aliquid, expedita eum harum earum, nostrum dolorum. Qui tempore reprehenderit officiis,
                eligendi voluptatem dolores aut.
              </p>
              <h5>We are making every business grow!</h5>

              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Full Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email Address" />
                </div>
                <button className="btn mt-3 ms-5 mb-4 w-75">Contact Now</button>
              </form>
            </div>
            <div className="col-md-6">
              <div className="maindiv">
                <img src="./success.png" className='abc1'></img>
                <div className="childdiv">
                  <img src="./chart.png" alt="Chart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
<section className="py-5 blog-section">
  <Card/>
</section>
<section className="py-5 business-thrive-section">
  <div className="container">
    <div className="row align-items-center">
      {/* LEFT: Text Content */}
      <div className="col-md-6 mb-4 mb-md-0">
        <h2 className="fw-bold mb-3 text-dark" style={{ fontSize: "2rem" }}>
          Let your business thrive <br /> under our supervision
        </h2>
        <p className="text-muted mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
        </p>

        {/* Metrics Row */}
        <div className="d-flex flex-wrap gap-4 mb-4">
          <div className="d-flex align-items-center gap-2">
            <span className="bg-light border p-2 rounded">
              <i className="bi bi-check2-circle"></i>
            </span>
            <div>
              <strong>100+</strong>
              <div className="small text-muted">Successful Projects</div>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="bg-light border p-2 rounded">
              <i className="bi bi-check2-circle"></i>
            </span>
            <div>
              <strong>978+</strong>
              <div className="small text-muted">Clients Today</div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex gap-3">
          <button className="btn btn-light px-4 py-2 border text-dark" style={{ backgroundColor: '#fcdde1' }}>
            Contact Now
          </button>
          <button className="btn border px-4 py-2">
            &rarr; Book a Demo Today
          </button>
        </div>
      </div>

      {/* RIGHT: Illustration + Card */}
      <div className="col-md-6 position-relative d-flex justify-content-center">
        <div
          className="rounded"
          style={{
            backgroundColor: '#f4f4f8',
            width: '100%',
            minHeight: '300px',
            position: 'relative',
          }}
        >
          {/* Decorative SVG/star top-right (replace with your image if needed) */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/10886/10886744.png"
            alt="star"
            style={{
              position: 'absolute',
              top: '20px',
              right: '30px',
              width: '40px',
            }}
          />

          {/* Chart Card */}
          <div
            className="shadow-sm p-3 bg-white rounded"
            style={{
              position: 'absolute',
              bottom: '30px',
              right: '30px',
              width: '240px',
            }}
          >
            <h6 className="mb-0">Clients file scanning</h6>
            <small className="text-muted d-block mb-2">Total Clients</small>
            <h5 className="fw-bold mb-1">$897,543</h5>
            <div className="progress" style={{ height: '6px' }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: '14%' }}
                aria-valuenow="14"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="d-flex justify-content-between mt-1 text-muted small">
              <span>14%</span>
              <span>$5M</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
        <div className="container">
          <div className="screenshot-box" role="region" aria-label="Business value propositions">
            <div className="item">
              <div className="icon-box icon1" aria-hidden="true">
                <svg className="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="text">Real Solutions,<br />Real Impact.</div>
            </div>
            <div className="item">
              <div className="icon-box icon2" aria-hidden="true">
                <svg className="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"></circle> {/* stroke-width becomes strokeWidth in React */}
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="text">Efficiency Unlocked, Growth<br />Delivered.</div>
            </div>
            <div className="item">
              <div className="icon-box icon3" aria-hidden="true">
                <svg className="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M18 8v6a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="17" y2="7"></line>
                </svg>
              </div>
              <div className="text">Transforming Challenges into<br />Opportunities.</div>
            </div>
          </div>
        </div>
      </section>


<section>
  <FaqAccordion />
</section>
    </div>

  );
}
