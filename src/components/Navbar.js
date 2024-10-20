import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar({
  title = 'Set title here',
  homeText = 'Home',
  aboutText = 'About',
  contactText = 'Contact',
  skillsText = 'Skills',
  mode,
  toggleMode,
}) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`} style={{ borderBottom: '2px solid #ddd' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="#" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{title}</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">{homeText}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{aboutText}</Link>
            </li>
            {/* Uncomment if you want to use skills and contact links */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/skills">{skillsText}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">{contactText}</Link>
            </li> */}
          </ul>
          <div className="d-flex align-items-center">
            <div 
              className="bg-secondary rounded mx-2" 
              onClick={() => { toggleMode('secondary') }} 
              style={{ height: '30px', width: '30px', cursor: 'pointer', border: '1px solid #ddd' }}
            ></div>
            <div 
              className="bg-danger rounded mx-2" 
              onClick={() => { toggleMode('danger') }} 
              style={{ height: '30px', width: '30px', cursor: 'pointer', border: '1px solid #ddd' }}
            ></div>
            <div 
              className="bg-success rounded mx-2" 
              onClick={() => { toggleMode('success') }} 
              style={{ height: '30px', width: '30px', cursor: 'pointer', border: '1px solid #ddd' }}
            ></div>
            <div 
              className="bg-warning rounded mx-2" 
              onClick={() => { toggleMode('warning') }} 
              style={{ height: '30px', width: '30px', cursor: 'pointer', border: '1px solid #ddd' }}
            ></div>
          </div>
          <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
            <input 
              className="form-check-input" 
              onClick={() => { toggleMode(null) }} 
              type="checkbox" 
              role="switch" 
              id="flexSwitchCheckDefault" 
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Toggle Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  homeText: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  contactText: PropTypes.string,
  skillsText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
