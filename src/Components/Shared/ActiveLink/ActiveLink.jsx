import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
    return (
        <div className="relative">
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? "tracking-wider hoverEffect"  : "hoverEffect"
                }
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;



