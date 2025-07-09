

import { useRef } from "react";
import "./card.css";

export function Card() {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: 300, 
        behavior: "smooth",
      });
    }
  };

  const blogs = [
    {
      title: "15 ways to grow your saas in 21 days with no money: Blog 1",
      category: "Growth",
      image: "./card1.png",
    },
    {
      title: "Why everyone is moving today to subscriptions : Blog 2",
      category: "Business",
      image: "./card 2.png",
    },
    {
      title: "9 ways to make it quick and never look back again in your life : Blog 3",
      category: "Design",
      image: "card3.png",
    },
    {
      title: "Another Blog 4",
      category: "Marketing",
      image: "card1.png",
    },
    {
      title: "Another Blog 5",
      category: "Finance",
      image: "card3.png",
    },
  ];

  return (
    <section className="py-5 blog-section">
      <div className="container">
        <div className="ourlst">
          <h2>Our latest updates for you here!</h2>
          <p>What’s happening around the world.</p>
        </div>

        {/* Scrollable carousel */}
        <div className="carousel-container" ref={scrollRef}>
          {blogs.map((blog, index) => (
            <div className="carousel-card" key={index}>
              <div className="card border-0 h-100 blog-card shadow-sm">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="card-img-top rounded"
                />
                <div className="card-body px-0 pt-3">
                  <p className="text-muted mb-1 small">{blog.category}</p>
                  <h6 className="fw-bold blog-title">{blog.title}</h6>
                  <div className="arrow-box mt-3">
                    <button className="arrow-btn" onClick={scrollRight}>
                      <span>&#10140;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
