import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export function FaqAccordion() {
  return (
    <section className="py-5">
      {/* Section Heading */}
      <div className="text-center mb-4 container">
        <h2 className="fw-bold text-primary" style={{ fontSize: "2.5rem" }}>
          Frequently asked questions
        </h2>
        <p className="text-muted">What’s happening around the World.</p>
      </div>

      {/* Accordion */}
      <div className="container">
        <div className="accordion" id="accordionExample">
          {[
            {
              id: "One",
              question: "What is the best way to create a saas business today?",
              answer:
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC.",
              show: true,
            },
            {
              id: "Two",
              question: "What types of business do you work with?",
              answer:
                "Lorem Ipsum is not simply random text. Richard McClintock, a Latin professor, discovered the source.",
            },
            {
              id: "Three",
              question: "How do you identify inefficiencies in a business?",
              answer:
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            },
            {
              id: "Four",
              question: "What kind of results can we expect?",
              answer:
                "Results vary by client, but most experience increased efficiency and reduced costs within 3 months.",
            },
            {
              id: "Five",
              question: "How long does a typical engagement last?",
              answer:
                "Engagements typically last between 3-6 months, depending on the scope and goals.",
            },
          ].map(({ id, question, answer, show = false }) => (
            <div className="accordion-item" key={id}>
              <h2 className="accordion-header" id={`heading${id}`}>
                <button
                  className={`accordion-button ${!show ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${id}`}
                  aria-expanded={show ? "true" : "false"}
                  aria-controls={`collapse${id}`}
                  style={
                    show
                      ? {
                          backgroundColor: "#392c76",
                          color: "white",
                          fontWeight: "600",
                          height: "90px",
                        }
                      : {}
                  }
                >
                  {question}
                </button>
              </h2>
              <div
                id={`collapse${id}`}
                className={`accordion-collapse collapse ${show ? "show" : ""}`}
                aria-labelledby={`heading${id}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 py-4">
          <button
            className="btn px-4 py-2 fw-semibold"
            style={{ backgroundColor: "#fceeee", borderRadius: "8px" }}
          >
            Contact Now
          </button>
          <button
            className="btn"
            style={{ border: "1px solid #fceeee", borderRadius: "8px" }}
          >
            <span style={{ fontSize: "1.2rem" }}>➔</span>
          </button>
          <span className="fw-semibold fs-6 text-center text-md-start">
            Book a Demo Today
          </span>
        </div>
      </div>
    </section>
  );
}
