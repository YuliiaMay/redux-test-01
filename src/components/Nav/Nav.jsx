import { StyledLink } from "./Nav.styled";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <StyledLink to='/'>Home</StyledLink>
                </li>
                <li>
                    <StyledLink to='add'>Add</StyledLink>
                </li>
            </ul>
        </nav>
    )

};

export default Nav;