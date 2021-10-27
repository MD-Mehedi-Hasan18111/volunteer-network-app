import React from 'react';
import logo from '../../logos/Group 1329.png';

const Footer = () => {
    return (
        <div className="shadow-lg p-4 mt-5">
            <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <img width="120px" src={logo} alt="" />
                    <p>something someting something something something somthing somthign someting someting something someting someghint.</p>
                </div>
                <div className="col-lg-4">
                    <h4>Quick Links</h4>
                    <h6>Home</h6>
                    <h6>About</h6>
                    <h6>Blogs</h6>
                    <h6>Events</h6>
                </div>
                <div className="col-lg-4">
                    <h5>Subscribe to update!</h5>
                    <input className="form-control border-1 border-secondary rounded-pill" type="email" placeholder="Email..." />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-lg-6">
                    <p>volunteer network &copy; copyright reserved.</p>
                </div>
                <div className="col-lg-6 text-center">
                    <h5>Social Links</h5>
                    <i class="fab fa-facebook-square me-3"></i>
                    <i class="fab fa-linkedin me-3"></i>
                    <i class="fab fa-instagram-square"></i>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;