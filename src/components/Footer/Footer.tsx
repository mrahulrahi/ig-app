import './Footer.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="footer-top d-flex flex-wrap justify-content-between">
              <div className="footer-inside">
                <div className="footer-logo-area d-flex align-items-center justify-content-center justify-content-lg-start mb-3">
                  <div className="footer-logo">
                    <Image src="/images/logo.png" alt="Imagine Group" width={100} height={100} />
                  </div>
                  <span className="footer-name">Imagine <br /> Group</span>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              </div>


              <div className="footer-nav">
                <h3>Quick Links</h3>
                <ul className="footer-nav-menu">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Features</a></li>
                </ul>
              </div>
              <div className="footer-contact-info">
                <h3>Contact Us</h3>
                <ul className="footer-contact-list">
                  <li><a href="#">+91 9876543210</a></li>
                  <li><a href="#">info@imaginergroup.com</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Imagine Group. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer