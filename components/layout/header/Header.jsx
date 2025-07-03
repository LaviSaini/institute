import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="header">
            <div className="topbar container d-none d-lg-block">
                <div className="d-flex justify-content-between">
                    <div className="top-info ps-2">
                        <small className="me-3">
                            <i className="fas fa-map-marker-alt me-2"></i>
                            <span className="text-white">123 Street, New York</span>
                        </small>
                        <small className="me-3">
                            <i className="fas fa-envelope me-2"></i>
                            <span className="text-white">Email@Example.com</span>
                        </small>
                    </div>
                    <div className="top-link pe-2">
                        <Link href="" className="btn rounded-circle">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link href="" className="btn rounded-circle">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link href="" className="btn rounded-circle">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link href="" className="btn rounded-circle me-0">
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="container px-0">
                <nav className="navbar navbar-expand-xl">
                    <Link href="/" className="navbar-brand">
                        {/* <h1 class="display-6">Baby<span>Care</span></h1> */}
                        <img src="/logo.png" alt='logo' style={{width: '200px'}}/>
                    </Link>
                    <button
                        className="navbar-toggler py-2 px-3"
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <Link href="/" className="nav-item nav-link active">Home</Link>
                            <Link href="/about" className="nav-item nav-link">About</Link>
                            <Link href="/service" className="nav-item nav-link">Services</Link>
                            <Link href="/service" className="nav-item nav-link">Blogs</Link>
                            <Link href="/service" className="nav-item nav-link">Gallery</Link>
                            <Link href="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        <div className="d-flex">
                            <div className="d-flex align-items-center justify-content-center">
                                <Link href="#" className="position-relative">
                                    <i className="fa fa-phone-alt fa-2x me-4" style={{ transform: 'rotate(90deg)' }} />
                                    <i className="fa fa-comment-dots position-absolute" style={{ top: '-7px', left: '20px' }} />
                                </Link>
                            </div>

                            <div className="contact-detail">
                                <span>Have any questions?</span>
                                <Link href="#">Free: + 0123 456 7890</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    );
}