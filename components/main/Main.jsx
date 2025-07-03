import React from "react";
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



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

const events = [
    {
        img: 'event-1.jpg',
        date: '29 Nov',
        time: '10:00am - 12:00pm',
        location: 'New York',
        title: 'Music & drawing workshop',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur,',
    },
    {
        img: 'event-2.jpg',
        date: '29 Nov',
        time: '10:00am - 12:00pm',
        location: 'New York',
        title: 'Why need study',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur,',
    },
    {
        img: 'event-3.jpg',
        date: '29 Nov',
        time: '10:00am - 12:00pm',
        location: 'New York',
        title: 'Child health consciousness',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur,',
    },
];

const Blog = [
    { img: 'blog-1.jpg', title: 'How to pay attention to your child?', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus' },
    { img: 'blog-2.jpg', title: 'Play outdoor sports with your child', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus' },
    { img: 'blog-3.jpg', title: 'How to make time for your kids?', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus' }

]

const teamMembers = [
    { img: 'team-1.jpg', name: 'Linda Carlson', role: 'English Teacher' },
    { img: 'team-2.jpg', name: 'Linda Carlson', role: 'English Teacher' },
    { img: 'team-3.jpg', name: 'Linda Carlson', role: 'English Teacher' },
    { img: 'team-4.jpg', name: 'Linda Carlson', role: 'English Teacher' },
];

const testimonials = [
    {
        id: 1,
        name: "Client Name",
        profession: "Profession",
        text: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
        image: "/testimonial-1.jpg",
        rating: 5
    },
    {
        id: 2,
        name: "Client Name",
        profession: "Profession",
        text: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
        image: "/testimonial-2.jpg",
        rating: 5
    },
    {
        id: 3,
        name: "Client Name",
        profession: "Profession",
        text: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
        image: "/testimonial-3.jpg",
        rating: 5
    }
];

const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className="py-5 hero-header">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-7 col-md-12">
                            <span>We Care Your Baby</span>
                            <h1 className="mb-5 display-1 text-white">The Best Play Area For Your Kids</h1>
                            <Link href="#" className="btn px-4 py-3 px-md-5 me-4">Get Started</Link>
                            <Link href="#" className="btn px-4 py-3 px-md-5">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>


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

            <div className="py-5 program">
                <div className="container py-5">
                    <div className="mx-auto text-center" style={{ maxWidth: '700px' }}>
                        <h4 className="title mb-4 p-2">
                            Our Programs
                        </h4>
                        <h2 className="mb-5">We Offer An Exclusive Program For Kids</h2>
                    </div>

                    <div className="row g-5 justify-content-center">
                        {[1, 2, 3].map((num) => (
                            <div key={num} className="col-md-6 col-lg-6 col-xl-4">
                                <div className="program-item">
                                    <div className="program-img position-relative">
                                        <div className="img-box">
                                            <img
                                                src={`/program-${num}.jpg`}
                                                alt={`Program ${num}`}
                                                className="img-fluid w-100"
                                                width={500}
                                                height={300}
                                            />
                                        </div>
                                        <div className="px-4 py-2 program-rate">$60.99</div>
                                    </div>

                                    <div className="program-text bg-white px-4 pb-3">
                                        <h4>
                                            {num === 1
                                                ? 'English For Today'
                                                : num === 2
                                                    ? 'Graphics Arts'
                                                    : 'General Science'}
                                        </h4>
                                        <p className="mt-3 mb-0">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur,
                                        </p>
                                    </div>

                                    <div className="program-teacher px-4 py-3">
                                        <img
                                            src="/program-teacher.jpg"
                                            alt="Teacher"
                                            className="img-fluid p-2"
                                            width={70}
                                            height={70}
                                        />
                                        <div className="ms-3">
                                            <h6 className="mb-0">Mary Mordern</h6>
                                            <small>Arts Designer</small>
                                        </div>
                                    </div>

                                    <div className="program-footer px-4 py-2 rounded-bottom">
                                        <small className="text-white">
                                            <i className="fas fa-wheelchair me-1"></i> 30 Sits
                                        </small>
                                        <small className="text-white">
                                            <i className="fas fa-book me-1"></i> 11 Lessons
                                        </small>
                                        <small className="text-white">
                                            <i className="fas fa-clock me-1"></i> 60 Hours
                                        </small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mx-auto text-center mt-5">
                        <a href="#" className="btn px-5 py-3">
                            View All Programs
                        </a>
                    </div>
                </div>
            </div>

            <div className="py-5 events">
                <div className="container py-5">
                    <div className="mx-auto text-center" style={{ maxWidth: '700px' }}>
                        <h4 className="title mb-4 p-2">
                            Our Events
                        </h4>
                        <h2 className="mb-5">Our Upcoming Events</h2>
                    </div>
                    <div className="row g-5">
                        {events.map((event, index) => (
                            <div className="col-md-6 col-lg-6 col-xl-4" key={index}>
                                <div className="events-item">
                                    <div className="events-inner position-relative">
                                        <div className="events-img">
                                            <img src={`/${event.img}`} className="img-fluid w-100 rounded-circle" alt="Event" />
                                            <div className="event-overlay">
                                                <a href={`/${event.img}`} data-lightbox="event-1">
                                                    <i className="fas fa-magnifying-glass-plus text-white fa-2x"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="px-4 py-2 events-rate">{event.date}</div>
                                        <div className="px-4 py-2 event-details">
                                            <small className="text-white">
                                                <i className="fas fa-calendar me-2"></i>
                                                {event.time}
                                            </small>
                                            <small className="text-white">
                                                <i className="fas fa-map-marker-alt me-2"></i>
                                                {event.location}
                                            </small>
                                        </div>
                                    </div>
                                    <div className="events-text p-4">
                                        <h4>{event.title}</h4>
                                        <p className="mb-0 mt-3">{event.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-5 blog">
                <div className="container py-5">
                    <div className="mx-auto text-center" style={{ maxWidth: '600px' }}>
                        <h4 className="title mb-4 p-2">
                            Latest News & Blog
                        </h4>
                        <h2 className="mb-5">Read Our Latest News & Blog</h2>
                    </div>
                    <div className="row g-5">
                        {Blog.map((blog, i) => (

                            <div key={i} className="col-md-6 col-lg-6 col-xl-4" style={{ visibility: 'visible' }}>
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <img src={`/${blog.img}`} className="img-fluid w-100" alt="Blog" />
                                    </div>
                                    <div className="px-4 py-3 blog-date-comments">
                                        <small className="text-dark">
                                            <i className="fas fa-calendar me-1 text-dark"></i> 29 Nov 2023
                                        </small>
                                        <small className="text-dark">
                                            <i className="fas fa-comment-alt me-1 text-dark"></i> Comments (15)
                                        </small>
                                    </div>
                                    <div className="blog-content px-4 py-3 d-flex align-items-center">
                                        <div className="img-box">
                                            <img
                                                src="/program-teacher.jpg"
                                                className="img-fluid rounded-circle p-2"
                                                alt="Author"
                                            />
                                        </div>

                                        <div className="ms-3">
                                            <h6>Mary Mordern</h6>
                                            <p className="text-muted">Baby Care</p>
                                        </div>
                                    </div>
                                    <div className="blog-text-inner  px-4 pb-4">
                                        <h4>{blog.title}</h4>
                                        <p className="mt-3 mb-4">{blog.desc}</p>

                                        <div className="text-center">
                                            <a href="#" className="btn px-4 py-2 mb-3">
                                                View Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-5 team">
                <div className="container py-5">
                    <div className="mx-auto text-center" style={{ maxWidth: '700px' }}>
                        <h4 className="title mb-4 p-2">
                            Our Team
                        </h4>
                        <h2 className="mb-5">Meet With Our Expert Teacher</h2>
                    </div>

                    <div className="row g-5">
                        {teamMembers.map((member, i) => (
                            <div className="col-md-6 col-lg-4 col-xl-3" key={i}>
                                <div className="team-item overflow-hidden">
                                    <img src={`/${member.img}`} className="img-fluid w-100" alt="" />

                                    <div className="team-icon d-flex align-items-center justify-content-center">
                                        <a href="#" className="share btn me-3">
                                            <i className="fas fa-share-alt"></i>
                                        </a>
                                        {[
                                            { icon: 'fab fa-facebook-f' },
                                            { icon: 'fab fa-twitter' },
                                            { icon: 'fab fa-instagram' },
                                        ].map((social, idx) => (

                                            <a key={idx} href="#" className="share-link btn me-3">
                                                <i className={`${social.icon}`}></i>
                                            </a>
                                        ))}
                                    </div>
                                    <div className="team-content text-center py-3">
                                        <h4>{member.name}</h4>
                                        <p className="text-muted mb-2">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-5 testimonial">
                <div className="container py-5">
                    <div className="mx-auto text-center" style={{ maxWidth: '700px' }}>
                        <h4 className="title mb-4 p-2">
                            Our Testimonials
                        </h4>
                        <h2 className="mb-5">Parents Say About Us</h2>
                    </div>

                    <Slider {...settings}>
                        {testimonials.map((item) => (
                            <div key={item.id}>
                                <div className="testimonial-item p-4">
                                    <div className="p-4 position-relative">
                                        <i class="fa fa-quote-right"></i>

                                        <div class="d-flex align-items-center">
                                            <div class="testi-img-box">
                                                <img src={`${item.image}`} class="rounded-circle p-2" alt="" />
                                            </div>
                                            <div class="ms-4">
                                                <h4 class="text-dark">Client Name</h4>
                                                <p class="m-0 pb-3">Profession</p>
                                                <div class="d-flex pe-5">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="review mt-4 pt-3">
                                    <p>{item.text}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Home