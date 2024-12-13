'use client'
import Image from "next/image";
import './Header.css'
import { useState } from "react";

const Header = (): React.ReactElement => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the state
    document.body.classList.toggle('menu-open', !isOpen); // Toggle class based on the state
  };

  const links = [
    {
      name: 'About Us',
      href: '#'
    },
    {
      name: 'Features',
      href: '#'
    }
  ]

  return (
    <>
      <div className="menu-overlay"></div>
      <header id="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="nav-inside d-flex align-items-center justify-content-between">
              <a className="navbar-brand d-flex align-items-center" href="#">
                <span className="brand-logo">
                  <Image src="/images/logo.png" alt="Imagine Group" width={100} height={100} quality={100} />
                </span>
                <span className="brand-name">
                  Imagine <br /> Group
                </span>
              </a>

              <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
                <div className="navbar-inside mx-auto">
                  <ul className="navbar-nav">
                    {links.map((link, index) => (
                      <li className="nav-item" key={index}><a className="nav-link" href={link.href}>{link.name}</a></li>
                    ))}
                  </ul>

                  <div className="navbar-bottom d-lg-none text-center">
                    <a href="#" className="btn btn-default btn-block">Download</a>
                  </div>
                </div>
              </div>
              <div className="header-right d-flex align-items-center">
                <a href="#" className="btn btn-default d-none d-lg-block">Download</a>

                <button className={`navbar-toggler ${isOpen ? 'collapsed' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header