import styled from 'styled-components'

const NavItem = styled.div.attrs(({ widthValue }) => ({
    widthItem: widthValue
}))`
    display: flex;
    flex-direction: ${props => props.flexColunm ? "column" : "unset"};
    justify-content: center;
    align-items: center;
    width: ${props => props.widthItem};
    height: ${props => props.theme.heightLogoXl};
`;
export default NavItem