import React from 'react';
import './Signin.css';
import logo from '../../logos/Group 1329.png';
import useAuth from '../../hooks/useAuth';
import {Link, NavLink, useHistory, useLocation} from 'react-router-dom';

const SignIn = () => {

    const {user, setUser, signInGoogle, logOut} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const redirects_url = location.state?.from || '/home';

    const googleSignIn = () =>{
        signInGoogle()
        .then(res => {
            setUser(res.user);
            history.push(redirects_url);
        })
        .catch(error =>{

        })
    }

    return (
        <div>
            <div className="header">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="">
                        <img width="170px" src={logo} alt="" />
                    </div>
                    <div className="navigation">
                        <NavLink to="/home" activeClassName="selected">Home</NavLink>
                        <NavLink to="/donation" activeClassName="selected">Donation</NavLink>
                        <NavLink to="/events" activeClassName="selected">Events</NavLink>
                        <NavLink to="/blog" activeClassName="selected">Blog</NavLink>
                        <Link to="/register">
                            <button className="btn btn-primary">Register</button>
                        </Link>
                        <Link to="/admin">
                            <button className="btn btn-secondary">Admin</button>
                        </Link>
                        {
                            user?.email ? <>
                                <button onClick={logOut} className="btn btn-sm btn-danger me-2">Log out</button>
                            <span>{user.displayName}</span>
                            </>: ''
                        }
                    </div>
                </div>
            </div>
            {/* <div className="text-center mt-5">
                <img width="200px" src={logo} alt="" />
            </div> */}
            <div className="signin-area text-center border border-1 border-secondary rounded-2 mt-4 w-50 h-50 mx-auto">
                <h3>Login</h3>
                <div>
                    <button onClick={googleSignIn} className="g-btn"><i className="fab fa-google"></i> Sign In with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;