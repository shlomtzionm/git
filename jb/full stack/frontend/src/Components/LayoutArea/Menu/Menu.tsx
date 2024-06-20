import { NavLink } from "react-router-dom";
import "./Menu.css";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="/home">Home</NavLink>
			<NavLink to="/product">Products</NavLink>
			<NavLink to="/about">About</NavLink>

        </div>
    );
}
