import React from 'react';
import './css/Home.css';
import logo from '../assets/logo.png'; // ضع شعار صغير هنا

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="hero">
        <img src={logo} alt="Company Logo" className="logo" />
        <div className="hero-text">
          <h1>DevOps Solutions for Modern Businesses</h1>
          <p>We deliver top-notch DevOps, Development, Marketing, Cloud, Mobile & SEO services to help your company grow fast.</p>
          <a href="/contact" className="cta-button">Get Started</a>
        </div>
      </header>

      {/* Services Section */}
      <section className="services">
        <h2>Our Expertise</h2>
        <div className="service-cards">

          <div className="card">
            <h3>Development</h3>
            <p>We create modern web apps and backend solutions fast and efficiently.</p>
            <ul>
              <li>Web Application Development</li>
              <li>Backend API Development</li>
              <li>Custom Software Solutions</li>
              <li>DevOps Integration</li>
            </ul>
          </div>

          <div className="card">
            <h3>Marketing</h3>
            <p>Professional marketing services to grow your business globally.</p>
            <ul>
              <li>Social Media Marketing</li>
              <li>Brand Strategy</li>
              <li>Email Campaigns</li>
              <li>Content Creation</li>
            </ul>
          </div>

          <div className="card">
            <h3>Hosting & Cloud</h3>
            <p>Reliable servers and cloud solutions for your applications.</p>
            <ul>
              <li>Shared, VPS & Dedicated Hosting</li>
              <li>AWS, Azure, GCP Management</li>
              <li>Cloud Security & Backup</li>
              <li>Server Monitoring & Scaling</li>
            </ul>
          </div>

          <div className="card">
            <h3>Mobile Development</h3>
            <p>Professional mobile apps for Android, iOS and cross-platform solutions.</p>
            <ul>
              <li>iOS Apps</li>
              <li>Android Apps</li>
              <li>Cross-Platform Apps (React Native / Flutter)</li>
              <li>App Maintenance & Updates</li>
            </ul>
          </div>

          <div className="card">
            <h3>SEO Optimization</h3>
            <p>Improve visibility and traffic for your website globally.</p>
            <ul>
              <li>On-Page SEO</li>
              <li>Keyword Research</li>
              <li>Link Building</li>
              <li>Analytics & Reporting</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}