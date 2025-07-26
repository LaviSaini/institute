import React from "react";
const services = [
    {
        icon: 'fas fa-gamepad',
        title: 'Study & Game',
    },
    {
        icon: 'fas fa-sort-alpha-down',
        title: 'A to Z Programs',
    },
    {
        icon: 'fas fa-users',
        title: 'Expert Teacher',
    },
    {
        icon: 'fas fa-user-nurse',
        title: 'Mental Health',
    },
];
const ourServices = () => {
    return (
        <div className="py-5 service">
            <div className="container py-5">
                <div className="mx-auto text-center" style={{ maxWidth: '700px' }}>
                    <h4 className="title mb-4 p-2">
                        What We Do
                    </h4>
                    <h2 className="mb-5">Thanks To Get Started With Our School</h2>
                </div>

                <div className="row g-5">
                    {services.map((service, index) => (
                        <div key={index} className="col-md-6 col-lg-6 col-xl-3">
                            <div className="text-center bg-white service-item">
                                <div className="service-content d-flex align-items-center justify-content-center">
                                    <div className="service-content-inner p-4">
                                        <div className="p-4">
                                            <i className={`${service.icon} fa-6x`}></i>
                                        </div>
                                        <h4>{service.title}</h4>
                                        <p className="my-3">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, culpa qui officiis animi Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </p>
                                        <a href="#" className="btn px-4 py-2 my-2">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ourServices