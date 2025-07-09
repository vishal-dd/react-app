import React from 'react';
import './services.css';
import { Reuse } from './reuse';

export  function Service() {
  const services = [
    {
      title: "Revenue Growth",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
      bgClass: "bg-green",
      image: "./serimg1.png"
    },
    {
      title: "Building High-Impact Teams",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
      image: "serimg3.png",
      bgClass: "bg-blue"
    },
    {
      title: "Cost-Effective Operations",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
      image: "./serimg2.png",
      bgClass: "bg-purple"
    },
     {
      title: "Revenue Growth",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
      bgClass: "bg-green",
      image: "./serimg4.png"
    },
    {
      title: "Building High-Impact Teams",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
      image: "serimg5.png",
      bgClass: "bg-blue"
    },
    {
      title: "Cost-Effective Operations",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
      image: "./serimg6.png",
      bgClass: "bg-purple"
    },
  ];

  return (
    <div>
       <div className='heading'>
          <h1>Blog : Lorem Ipsum Is Simply <br /> Dummy Text Of The Printing <br /> And Typesetting Industry.</h1>
      </div>
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="text-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <a href="#" className="explore-link">
                Explore Now <span>↗</span>
              </a>
            </div>
            <div className={`image-wrapper ${service.bgClass}`}>
              <img src={service.image} alt={service.title} className="service-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
    <section>
      <Reuse />
    </section>
    </div>
  );
}
