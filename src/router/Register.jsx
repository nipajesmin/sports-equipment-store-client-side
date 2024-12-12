import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate();
    const { createNewUser, setUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const url = form.get('url');
        const email = form.get('email');
        const password = form.get('password');

        // Password validation
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long.', { position: 'top-center' });
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one uppercase letter.', { position: 'top-center' });
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error('Password must contain at least one lowercase letter.', { position: 'top-center' });
            return;
        }

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);

                updateUserProfile({ displayName: name, photoURL: url })
                    .then(() => {
                        toast.success('Profile updated successfully!', { position: 'top-center' });
                    })
                    .catch((error) => {
                        toast.error(`Failed to update profile: ${error.message}`, { position: 'top-center' });
                    });
                toast.success('Registration successful!', { position: 'top-center' });

                const newUser = { name, email, url };

                // Save new user info to the database
                fetch('sports-equipment-store-server-side.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),
                })
                    .then((response) => response.json())
                    .then(() => {
                        setTimeout(() => {
                            navigate('/');
                        }, 1500);
                    })
                    .catch((error) => {
                        toast.error(`Failed to save user data: ${error.message}`, { position: 'top-center' });
                    });
            })
            .catch((error) => {
                toast.error(error.message, { position: 'top-center' });
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success('Logged in with Google!', { position: 'top-center' });
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            })
            .catch((error) => {
                toast.error(`Google Sign-In failed: ${error.message}`, { position: 'top-center' });
            });
    };

    return (
        <div>
            <Navbar />
            <ToastContainer />
            <h1 className="text-3xl md:text-5xl font-bold pb-5 pt-4 bg-base-200 text-center">
                Register Now!
            </h1>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="url"
                                placeholder="Photo URL"
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
                                placeholder="Email"
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
                                placeholder="Password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                        <div className="form-control mt-6">
                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                className="btn btn-primary"
                            >
                                Login with Google
                            </button>
                        </div>
                    </form>
                    <p className="ml-4 mb-4 pl-12">
                        Already have an account? Please{' '}
                        <Link to="/login" className="text-blue-600">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;


