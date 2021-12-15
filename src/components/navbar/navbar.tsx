import { FC } from "react"
import { Link } from "react-router-dom"

import "./navbar.scss"

const NavBar = () => (
    <nav>
        <ul className="main-menu">
            <NavBarItem name="Home" path="/" />
            <NavBarItem name="Parent" path="/parent">
                <NavBarItem name="Child" path="/parent/child" />
            </NavBarItem>
        </ul>
    </nav>
)

interface INavBarItem {
    name: string
    path: string
    disabled?: boolean
}
const NavBarItem: FC<INavBarItem> = ({
    name,
    path,
    children,
    disabled = false,
}) => {
    if (!disabled) {
        return (
            <li>
                <Link to={path}>{name}</Link>
                {children ? <ul className="sub-menu">{children}</ul> : null}
            </li>
        )
    }

    return null
}

export default NavBar
