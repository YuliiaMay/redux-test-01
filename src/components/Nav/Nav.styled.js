import styled from "styled-components";
import {NavLink} from "react-router-dom"

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #414141;

    &.active {
        color: red;
        border-bottom: 1px solid red;
    }
`