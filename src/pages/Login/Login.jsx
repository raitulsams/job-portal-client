import React, { use, useState } from 'react';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

// --- Reusable Input Field Component (No color changes) ---
const InputField = ({ label, name, type = 'text', placeholder, className = '', children }) => (
    <div className={`form-control w-full ${className}`}>
        <label htmlFor={name} className="label">
            <span className="label-text font-semibold">{label}</span>
        </label>

        <div className="relative w-full">
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                required
                className="input input-bordered w-full pr-12"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {children}
            </div>
        </div>
    </div>
);

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signInUser } = use(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(err => console.log(err))
        // Logic for login goes here (e.g., signInWithEmailAndPassword)
        console.log(email, password);
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row w-full max-w-6xl gap-10">

                {/* Left Side (Text) - 50% width */}
                <div className="text-center lg:text-left flex-1">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6 text-gray-600">
                        Welcome back! Please enter your credentials to access your account and continue your job search or recruitment process.
                    </p>
                </div>

                {/* Right Side (Card) - 50% width */}
                <div className="card bg-base-100 flex-1 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body p-8">
                        <fieldset className="fieldset flex flex-col gap-4">

                            <InputField
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                            />

                            <InputField
                                label="Password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                            >
                                <span
                                    className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <VscEyeClosed size={20} /> : <VscEye size={20} />}
                                </span>
                            </InputField>

                            <div>
                                <a className="link link-hover text-sm">Forgot password?</a>
                            </div>

                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>

                        <div className="mt-6 text-center">
                            <p className="text-sm">
                                Don't have an account?{" "}
                                <Link className="font-bold underline" to="/register">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;