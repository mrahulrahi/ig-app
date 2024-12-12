import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
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




              <div className="footer-contact-info">
                <ul className="footer-contact-list d-flex gap-2 mb-3">
                  <input type="text" className="form-control" placeholder="email" />
                  <input type="submit" className="btn btn-default" value="Join Newsletter" />
                </ul>
                <h3>Contact Us</h3>
                <ul className="footer-contact-list">
                  <li><a href="#">+91 9876543210</a>, <a href="#">info@imaginergroup.com</a></li>
                </ul>
             
              </div>
            </div>
            <div className="footer-middle d-flex align-items-center justify-content-between">


              <ul className="footer-nav-menu d-flex gap-3">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Features</a></li>
              </ul>


              <ul className="social-links d-flex gap-2">
                <li><a href="#!" className="d-flex align-items-center justify-content-center"><FaFacebookF /></a></li>
                <li><a href="#!" className="d-flex align-items-center justify-content-center"><FaInstagram /></a></li>
                <li><a href="#!" className="d-flex align-items-center justify-content-center"><FaXTwitter /></a></li>
                <li><a href="#!" className="d-flex align-items-center justify-content-center"><FaLinkedinIn /></a></li>

              </ul>
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