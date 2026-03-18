import { NavLink } from "react-router";
import logo from "../../assets/logo.png"
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { use } from "react";
import Swal from "sweetalert2";
const NavBar = () => {
    const { user, signOutUser } = use(AuthContext);
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    title: "Logged out successfully!",
                    icon: "error",
                    draggable: false,
                    timer: 1500,
                    showConfirmButton: false
                });

            })
            .catch(err => console.log(err))
    }
    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li>
                <details>
                    <summary>Find a Job</summary>
                    <ul className="p-2 bg-base-100 w-40 z-1">
                        <li><NavLink to="#">Submenu 1</NavLink></li>
                        <li><NavLink to="#">Submenu 2</NavLink></li>
                    </ul>
                </details>
            </li>
            <li><NavLink to="#">Recruiters</NavLink></li>
            <li><NavLink to="#">Candidates</NavLink></li>
            <li><NavLink to="#">Blog</NavLink></li>
            <li><NavLink to="#">Pages</NavLink></li>
        </>)
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>

                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <NavLink to="/">


                    <div className="relative z-10 flex justify-center items-center h-full">
                        <img
                            src={logo}
                            alt="Espresso Emporium Logo"
                            className="h-12 w-auto object-contain"
                        />
                        <p className="font-rancho text-xl">
                            Arbeit
                        </p>
                    </div>
                </NavLink>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <button onClick={handleSignOut} className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-md xl:btn-md">Logout</button>
                        :
                        <>
                            <NavLink to="/register"><button className="btn btn-link btn-xs sm:btn-sm md:btn-sm lg:btn-md xl:btn-md">Register</button></NavLink>
                            <NavLink to="/login"><button className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-md xl:btn-md">Login</button></NavLink>
                        </>
                }
            </div>
        </div>
    );
};

export default NavBar;