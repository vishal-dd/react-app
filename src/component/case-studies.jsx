import React from 'react';
import { Reuse } from './reuse';
 import './casestudies.css';
export function CaseStudies() {
  return (
    <div>
       <section className="success-section">
      <div className="success-container">
        {/* Left Content */}
        <div className="success-left">
          <h1 className="success-title">
            Success Stories That <br /> Speak for Themselves.
          </h1>
          <p className="success-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>

          <div className="success-buttons">
            <button className="btn-primary">Contact Now</button>
            <button className="btn-outline">Book a Demo Today →</button>
          </div>

          <div className="review-box">
            <span className="review-star">★</span>
            Rated <strong>4.9</strong> out of <strong>1200</strong> reviews
          </div>
        </div>

        {/* Right Card */}
        <div className="success-right">
          <div className="visitors-card">
            <h4>New visitors</h4>
            <div className="visitor-percentage">
              <strong>84%</strong>
              <span className="small-change">+0.4%</span>
            </div>
            <div className="bar-chart">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((label, i) => (
                <div key={i} className="bar-column">
                  <div
                    className={`bar ${i === 4 ? 'active-bar' : ''}`}
                    style={{ height: `${Math.random() * 50 + 30}px` }}
                  ></div>
                  <span className="bar-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='box'>
              <p>Trusted by over 100+ <br />businesses worldwide!</p>
      </div>
    </section>
    <section>
      < Reuse/>      
    </section>
    </div>
  )
}
