import React from "react";
const Blog = [
    { img: 'blog-1.jpg', title: 'How to pay attention to your child?', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus' },
    { img: 'blog-2.jpg', title: 'Play outdoor sports with your child', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus' },
    { img: 'blog-3.jpg', title: 'How to make time for your kids?', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus' }

]
const OurBlogs = () =>{

    return(
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
    )
    
} 

export default OurBlogs