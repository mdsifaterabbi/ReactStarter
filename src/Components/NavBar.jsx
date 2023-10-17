import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navbar bg-sky-900 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={"/home"} className="text-white hover:bg-white">Home</Link></li>
                        <li><Link to={"/alluser"} className="text-white hover:bg-white">All User</Link></li>
                    </ul>
                </div>
                <Link to={"/home"} className="btn btn-info normal-case text-xl hover:bg-white">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-white"><Link to={"/home"} className="hover:bg-white hover:text-red-700 hover:font-bold text-3xl">Home</Link></li>
                    <li className="text-white"><Link to={"/alluser"} className="hover:bg-white hover:text-red-700 hover:font-bold text-3xl">All User</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar