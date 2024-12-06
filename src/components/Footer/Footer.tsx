import './Footer.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container-fluid"> 
        <div className="row">
          <div className="col-12">
            <div className="footer-inside">
              <div className="footer-inside-content d-flex justify-content-between">
                <div className="footer-inside-content-item">
                  <div className="footer-inside-content-item-logo d-flex align-items-center">
                    <Image src="/images/logo.png" alt="Imagine Group" width={100} height={100} />
                    <span className="footer-inside-content-item-logo-name">Imagine <br /> Group</span>
                  </div>
                  <div className="footer-inside-content-item-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                  </div>
                </div>  
                <div className="footer-inside-content-item">
                  <div className="footer-inside-content-item-title">
                    <h3>Quick Links</h3>
                    <ul className="list-unstyled">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Features</a></li>
                    </ul>
                  </div>
                </div>
                <div className="footer-inside-content-item">
                  <div className="footer-inside-content-item-title">
                    <h3>Contact Us</h3>
                    <ul className="list-unstyled">
                      <li><a href="#">+91 9876543210</a></li>
                      <li><a href="#">info@imaginergroup.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-inside-bottom">
                <p>&copy; {new Date().getFullYear()} Imagine Group. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer