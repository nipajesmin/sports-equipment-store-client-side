import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../provider/AuthProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
    const { signInUser, setUser, signInWithGoogle } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await signInUser(email, password);
            const user = result.user;
            setUser(user);
            toast.success('Login successful!', { position: 'top-center' });

            // Redirect to the intended page or default to '/'
            const redirectTo = location?.state?.from?.pathname || '/';
            setTimeout(() => {
                navigate(redirectTo, { replace: true });
            }, 1500);
        } catch (error) {
            let errorMessage = 'Login failed!';
            if (error.code === 'auth/user-not-found') {
                errorMessage = 'No user found with this email.';
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = 'Incorrect password. Please try again.';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email format.';
            }
            toast.error(errorMessage, { position: 'top-center' });
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setLoading(true);
        try {
            const result = await signInWithGoogle();
            const user = result.user;
            setUser(user);
            toast.success('Logged in with Google!', { position: 'top-center' });
            navigate('/');
        } catch (error) {
            toast.error(`Google Sign-In failed: ${error.message}`, { position: 'top-center' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <ToastContainer />
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <h1 className="text-2xl font-bold text-center">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
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
                                    placeholder="Enter your password"
                                    name="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    type="submit"
                                    className={`btn btn-primary `}
                                   // disabled={loading}
                                >
                                    {/* {loading ? 'Logging in...' : 'Login'} */}
                                    Login
                                </button>
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    onClick={handleGoogleSignIn}
                                    type="button"
                                    className={`btn btn-primary `}
                                  //  disabled={loading}
                                >
                                    Login with Google
                                </button>
                            </div>
                            <p className="text-sm text-center mt-2">
                                Don’t have an account?{' '}
                                <Link to="/register" className="link link-primary">
                                    Register here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
