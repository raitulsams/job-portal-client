import React, { useState } from 'react';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Swal from 'sweetalert2';

// --- Reusable Input Field Component ---
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
                required={name !== 'phone'}
                // Added w-full here to make the input stretch
                className="input input-bordered w-full pr-12"
            />
            {/* Wrapper for the eye icon */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {children}
            </div>
        </div>
    </div>
);



const Register = () => {
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const { email, password, ...rest } = Object.fromEntries(formData.entries());
        console.log(email, password, rest)

        // Note: Ensure createUser is imported or defined from your AuthProvider
        // createUser(email, password)
        //     .then(result => {
        //         const userProfile = {
        //             email,
        //             ...rest,
        //             creationTime: result.user?.metadata?.creationTime,
        //             lastLoginAt: result.user?.metadata?.lastSignInTime
        //         }
        //         fetch('http://localhost:3002/users', {
        //             method: 'POST',
        //             headers: { 'content-type': 'application/json' },
        //             body: JSON.stringify(userProfile)
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 if (data.insertedId) {
        //                     Swal.fire({
        //                         title: "Account Created!",
        //                         text: "Welcome to the Job Portal",
        //                         icon: "success",
        //                     });
        //                 }
        //             })
        //     })
        //     .catch(err => {
        //         setError(err.message);
        //         console.error(err);
        //     })
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            {/* Added w-full and max-w-6xl to keep the content centered but wide */}
            <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl gap-10">

                {/* Left Side (Text) - Added flex-1 to take 50% */}
                <div className="text-center lg:text-left flex-1">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6 text-gray-600">
                        Welcome back! Please enter your details to access your job portal dashboard and manage your applications.
                    </p>
                </div>

                {/* Right Side (Card) - Added flex-1 and removed max-w-sm */}

                <div className="card bg-base-100 flex-1 w-full shrink-0 shadow-2xl">
                    <div className="card-body p-8"> {/* Increased padding for a more professional look */}
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset flex flex-col gap-4">
                                <InputField
                                    label="Name"
                                    name="name"
                                    placeholder="Enter your full name"
                                />

                                <InputField
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                />

                                <InputField
                                    label="Phone (Optional)"
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                />

                                <InputField
                                    label="Password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                >
                                    <span
                                        className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-blue-600 transition-colors"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <VscEyeClosed size={20} /> : <VscEye size={20} />}
                                    </span>
                                </InputField>

                                <div><a className="link link-hover">Forgot password?</a></div>

                                <button className="btn btn-primary mt-4">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;