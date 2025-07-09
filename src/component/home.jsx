// component/home.jsx
import React, { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Footer } from './footer';
import './homelayout.css';

export function HomeLayout() {
  const location = useLocation();

  useEffect(() => {
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide(); 
    }
  }, [location.pathname]);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            {/* Brand */}
            <Link className="navbar-brand fw-bold" to="/">
              MySite
            </Link>

            {/* Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible Menu */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center gap-lg-4">
                <li className="nav-item">
                  <Link className="nav-link fw-semibold" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold" to="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold" to="/Service">Service</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold" to="/CaseStudies">CaseStudies</Link>
                </li>

                <li className="nav-item d-lg-none mt-3">
                  <button className="btn btn-primary w-100 homebtn">Contact Now</button>
                </li>
              </ul>
            </div>

            <button className="btn btn-primary d-none d-lg-block homebtn ms-3">Contact Now</button>
          </div>
        </nav>
      </header>

      <main className="mt-4">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
