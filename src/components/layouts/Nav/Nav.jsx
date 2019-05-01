import styled from 'styled-components'
import NavItem from './NavItem'
const Nav = styled.div`
    width: 100%;
    height: ${props => props.theme.heightNavXl};
    display: flex;
    align-items: center;
    justify-content: ${props => props.bottom ? "space-between" : "unset"};
    position: fixed;
    box-shadow:  ${props => props.theme.boxSNav};
    left: 0;
    top: ${props => props.top ? "0" : "unset"};
    bottom: ${props => props.bottom ? "0" : "unset"};
    z-index: 2;
    background-color: ${props => props.theme.colorNav};
`;
Nav.Item = NavItem

export default Nav
