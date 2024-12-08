import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {


    const { createNewUser } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        //  createNewUser()
        createNewUser(email, password)
            .then(result => {
                console.log(result.user)

                const newUser = { name, email};
                //save new user info to the database
                fetch('http://localhost:5000/users', {

                    method: 'POST',
                    headers: {
                       'content-type' : 'application/json'
             
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('user created to db', data)
                    })
            })
            .catch(error => {
                console.log('error', error)
            })
    };

    return (
        <div>
            {/* <Helmet>
            <title> Career Council | Login</title></Helmet> */}
            {/* <ToastContainer /> Toast container to display notifications */}
            <h1 className="text-3xl md:text-5xl font-bold pb-5 pt-4 bg-base-200 text-center">
                Register Now!
            </h1>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            {/* <label className="label">
                        <Link
                            to="/auth/forgot-password"
                            
                            className="btn btn-link"
                        >
                            Forgot Password?
                        </Link>
                        </label> */}

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control mt-6">
                            <button type="button" className="btn btn-primary">Login with Google</button>
                        </div>
                    </form>
                    <p className="ml-4 mb-4 pl-12">
                        Allready have account? Please{' '}
                        <Link to="/login" className="text-blue-600">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );

};

export default Register;