import React from "react";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <>

      <div className="footer py-5">
        <div className="container py-5">
          <div className="row g-5">

            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="footer-item">
                  <img src="/logo.png" alt='logo' style={{width: '200px'}} className="mb-3"/>

                <p className="mb-4">
                  There cursus massa at urnaaculis estieSed aliquamellus vitae ultrs condmentum leo massamollis its estiegittis miristum.
                </p>
                <div className="p-3 newsletter">
                  <h5 className="mb-3">Newsletter</h5>
                  <div className="form-group position-relative">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Your email"
                      class="form-control w-100 py-3 ps-4 pe-5"
                      autocomplete="email" />
                      <button type="button" className="btn py-2 position-absolute top-0 end-0 mt-2 me-2 text-white">SignUp</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="footer-item">
                <div className="offc-time p-4 ps-5" style={{ borderRadius: '50% 20% / 10% 40%' }}>
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(day => (
                    <p key={day}>{day}: 8am to 5pm</p>
                  ))}
                  <p className="mb-0">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="footer-item">
                <h4 className="mb-4 p-2">LOCATION</h4>
                <div className="d-flex flex-column align-items-start">

                  <a href="#" className="text-body mb-4">
                    <i className="fa fa-map-marker-alt me-2" />
                    104 North tower New York, USA
                  </a>
                  <a href="#" className="text-body mb-4">
                    <i className="fa fa-phone-alt me-2" />
                    (+012) 3456 7890 123
                  </a>
                  <a href="#" className="text-body mb-4">
                    <i className="fa fa-envelope me-2" />
                    exampleemail@gmail.com
                  </a>
                  <a href="#" className="text-body mb-4">
                    <i className="fa fa-clock me-2" />
                    26/7 Hours Service
                  </a>


                  <div className="footer-icon d-flex">
                    <a href="#" className="me-3">
                      <i className="fab fa-facebook-f" aria-label="Facebook" />
                    </a>
                    <a href="#" className="me-3">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#" className="me-3">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#" className="me-3">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="footer-item">
                <h4 className="mb-4 p-2">OUR GALLERY</h4>
                <div className="row g-3">

                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div className="col-4" key={num}>
                      <div className="footer-galary-img">
                        <Image
                          src={`/galary-${num}.jpg`}
                          width={100}
                          height={100}
                          className="img-fluid rounded-circle p-2"
                          alt={`Image ${num}`}
                        />
                      </div>
                    </div>
                  ))}




                </div>
              </div>
            </div>
          </div>

        </div>
      </div>








      <div className="copyright py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3 mb-md-0 text-light">
              <a href="#">
                <i className="fas fa-copyright me-2 text-white" />
                Your Site Name
              </a>, All right reserved.
            </div>
            <div className="col-md-6 text-md-end text-white">
              Designed By{' '}
              <a href="https://htmlcodex.com" className="border-bottom">HTML Codex</a>{' '}
              Distributed By{' '}
              <a href="https://themewagon.com" className="border-bottom">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Footer;