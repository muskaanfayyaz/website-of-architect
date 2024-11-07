import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div>
      {/* Home Container */}
      <div className="homeContainer">
        <div className="textContainer">
          <span className="projectText">PROJECT</span>
          <span className="lorumText">Lorum</span>
        </div>
        <div className="imageContainer">
          <Image src="/main.png" alt="Project Image" width={770} height={500} layout="responsive" />
        </div>
      </div>

      {/* About Section */}
      <div className="about-container">
        <div className="image-grid">
          <div className="image-one">
            <Image src="/img1.png" alt="Architecture 1" width={270} height={265} layout="responsive" />
          </div>
          <div className="image-two">
            <Image src="/img2.png" alt="Architecture 2" width={270} height={345} layout="responsive" />
          </div>
          <div className="image-three">
            <Image src="/img3.png" alt="Architecture 3" width={270} height={140} layout="responsive" />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-container">
          <h2 className="heading">About</h2>
          <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <button className="read-more-button">
            <Link href="/about">
              Read More <span className="arrow">&rarr;</span>
            </Link>
          </button>
        </div>
      </div>

      {/* Main Focus/Mission Statement Section */}
      <section className="mission-section">
        <h2 className="heading">Main Focus/Mission Statement</h2>
        <div className="content-container">
          <div className="item">
            <div className="number">1</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
          </div>
          <div className="item">
            <div className="number">2</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
          </div>
        </div>
      </section>

     {/* Projects Section */}
<section className="projects-section">
  <h2 className="heading">Our Projects</h2>
  <div className="projects-grid">
    {/* Row for the first two large images */}
    <div className="row">
      {/* First Large Project Card with Overlay */}
      <div className="project-card large">
        <div className="overlay">
          <h3>Sample Project</h3>
          <Link href="/project1">
            <span className="view-more">View More &rarr;</span>
          </Link>
        </div>
        <Image src='/project1.png' alt='project1' width={570} height={300} layout="responsive" />
      </div>

      {/* Second Large Project Image */}
      <div className="project-card large">
        <Image src='/project2.png' alt='project2' width={570} height={300} layout="responsive" />
      </div>
    </div>

    {/* Row for the last three small project images */}
    <div className="row small-images">
      <div className="project-image small">
        <Image src='/project3.png' alt='project3' width={270} height={180} layout="responsive" />
      </div>
      <div className="project-image small">
        <Image src='/project4.png' alt='project4' width={270} height={180} layout="responsive" />
      </div>
      <div className="project-image small">
        <Image src='/project5.png' alt='project5' width={270} height={180} layout="responsive" />
      </div>
    </div>
  </div>

  <button className="all-projects-button">
    <Link href="/projects">All Projects &rarr;</Link>
  </button>
</section>


  {/* Contact Us Section */}
<section className="contact-section">
  <h2 className="heading">Contact Us</h2>
  <div className="contact-content">
    <form className="contact-form">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Phone Number*" required />
      <input type="email" placeholder="E-mail*" required />
      <input type="text" placeholder="Interested In" />
      <textarea placeholder="Message*" required></textarea>
      <button type="submit" className="send-email-button">Send Email →</button>
    </form>
    <div className="contact-image">
      <Image src="/contactimg.png" alt="Contact" width={600} height={400} layout="responsive" />
    </div>
  </div>
</section>

{/* Footer Section */}
<footer className="footer-section">
  <div className="footer-container">
    <div className="footer-logo">
      <Image src="/footerlogo.png" alt="Digital Project" width={60} height={60} />
    </div>
    <div className="footer-info">
      <h3 className='footer-heading'>Information</h3>
      <ul>
        <li><Link href="#main">Main</Link></li>
        <li><Link href="#gallery">Gallery</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#certifications">Certifications</Link></li>
        <li><Link href="#contacts">Contacts</Link></li>
      </ul>
    </div>
    <div className="footer-contacts">
  <h3 className='footer-heading'>Contacts</h3>
  <p className='contacts1'>
    <FaMapMarkerAlt style={{ marginRight: "12px" }} /> 1234 Sample Street<br />Austin, Texas 78704
  </p>
  <p className='contacts1'>
    <FaPhone style={{ marginRight: "12px" }} /> 512.333.2222
  </p>
  <p className='contacts1'>
    <FaEnvelope style={{ marginRight: "12px" }} /> sampleemail@gmail.com
  </p>
</div>

    <div className="footer-social">
      <h3 className='footer-heading'>Social Media</h3>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
          <FaPinterest />
        </a>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2021 All Rights Reserved</p>
  </div>
</footer>


    </div>
  );
}
