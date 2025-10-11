import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaPinterest, FaEllipsisH } from 'react-icons/fa';

export function Footer() {
  return (
    <>
     <div>
                <img src="../assets/img.png" alt="" />
       </div>
    <footer className="bg-white border-top mt-5 pt-4 pb-2">
      <div className="container">

        <div className="row justify-content-center mb-3">
          <div className="col-auto">
            <ul className="nav justify-content-center flex-wrap gap-4 fw-semibold">
              <li className="nav-item"><Link className="nav-link text-dark" to="/home">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" to="/pricing">Pricing</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" to="/blog">Blog</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-4 mb-2 mb-md-0">
            <small className="text-muted">
              © digitalhoneywish | Terms and conditions apply!
            </small>
          </div>

          <div className="col-md-4 d-flex justify-content-center mb-2 mb-md-0">
            <button className="btn btn-outline-dark rounded-circle px-3 mx-1">&lt;</button>
            <button className="btn btn-outline-dark rounded-circle px-3 mx-1">&gt;</button>
          </div>

          <div className="col-md-4 d-flex justify-content-center justify-content-md-end gap-3">
            <FaInstagram size={20} className="text-dark" />
            <FaEllipsisH size={20} className="text-dark" />
            <FaInstagram size={20} className="text-dark" />
            <FaPinterest size={20} className="text-dark" />
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
