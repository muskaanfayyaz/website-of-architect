"use client";

// components/Header.tsx
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Head>
        <title>Website of Architect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="header">
        <div className="logoContainer">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <span>Digital Project</span>
        </div>

        {/* Hamburger menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${isOpen ? 'active' : ''}`}></div>
          <div className={`line ${isOpen ? 'active' : ''}`}></div>
          <div className={`line ${isOpen ? 'active' : ''}`}></div>
        </div>

        {/* Navigation links */}
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <Link href="/" className="navLink main">Main</Link>
          <Link href="/gallery" className="navLink gallery">Gallery</Link>
          <Link href="/projects" className="navLink projects">Projects</Link>
          <Link href="/certifications" className="navLink certifications">Certifications</Link>
          <Link href="/contacts" className="navLink contacts">Contacts</Link>
        </nav>
      </header>
    </div>
  );
}
