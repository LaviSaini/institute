import React from "react"
import Link from 'next/link';

const aboutBrainWalk = () => {
    return(
        <>
        
            <div className="py-5 about">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5">
                            <div className="video border">
                                {/* <button
                                    type="button"
                                    className="btn btn-play"
                                    data-bs-toggle="modal"
                                    data-bs-target="#videoModal"
                                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                                >
                                    <span></span>
                                </button> */}
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <h4 className="title mb-4 p-2">
                                About Us
                            </h4>
                            <h2 className="mb-4">
                                We Learn Smart Way To Build Bright Future For Your Children
                            </h2>
                            <p className="text-dark mb-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>

                            <div className="row mb-4">
                                <div className="col-lg-6">
                                    <h6 className="mb-3">
                                        <i className="fas fa-check-circle me-2"></i>Sport Activities
                                    </h6>
                                    <h6 className="mb-3">
                                        <i className="fas fa-check-circle me-2 text-primary"></i>Outdoor Games
                                    </h6>
                                    <h6 className="mb-3">
                                        <i className="fas fa-check-circle me-2 text-secondary"></i>Nutritious Foods
                                    </h6>
                                </div>
                                <div className="col-lg-6">
                                    <h6 className="mb-3">
                                        <i className="fas fa-check-circle me-2"></i>Highly Secured
                                    </h6>
                                    <h6 className="mb-3">
                                        <i className="fas fa-check-circle me-2 text-primary"></i>Friendly Environment
                                    </h6>
                                    <h6>
                                        <i className="fas fa-check-circle me-2 text-secondary"></i>Qualified Teacher
                                    </h6>
                                </div>
                            </div>

                            <Link href="#" className="btn px-5 py-3">
                                More Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default aboutBrainWalk