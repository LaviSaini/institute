import React from "react";
import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <>
            <div className="banner py-5">
                <div className="container text-center py-5">
                    <h1 class={`${styles.heading} text-white mb-4`}>Contact Us</h1>
                </div>
            </div>

            <div className="py-5 contact-detail">
                <div className="container py-5">
                    <div className={`${styles.contactBox} p-5`}>
                        <div className={styles.contactHeader}>
                            <h4 className={styles.title}>Contact Us</h4>
                            <h2>Contact For Any Query</h2>
                            <p>
                                The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.
                                <a href="https://htmlcodex.com/contact-form"> Download Now</a>.
                            </p>
                        </div>

                        <div className={styles.contactInfo}>
                            <div className={styles.infoBox}>
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h4>Address</h4>
                                    <p>104 North tower New York, USA</p>
                                </div>
                            </div>
                            <div className={styles.infoBox}>
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <h4>Mail Us</h4>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                            <div className={styles.infoBox}>
                                <i className="fa fa-phone-alt"></i>
                                <div>
                                    <h4>Telephone</h4>
                                    <p>(+012) 3456 7890 123</p>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-6">

                                <form>
                                    <div class="mb-4">
                                        <input type="text" class="form-control" placeholder="Your Name" required/>
                                    </div>
                                    <div class="mb-4">
                                        <input type="email" class="form-control" placeholder="Enter Your Email" required/>
                                    </div>
                                    <div class="mb-4">
                                        <textarea class="form-control" rows="6" placeholder="Your Message" required></textarea>
                                    </div>
                                    <div class="d-grid">
                                        <button type="submit" class="btn btn-custom">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0360649959!2d-74.3093289654168!3d40.69753996411732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1691911295047!5m2!1sen!2sbd"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade" style={{ width: "100%", height: "100%" }}
                                ></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact