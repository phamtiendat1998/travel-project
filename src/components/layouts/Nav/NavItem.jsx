import styled from 'styled-components'

const NavItem = styled.div.attrs(({ widthValue }) => ({
    widthItem: widthValue
}))`
    display: flex;
    flex-direction: ${props => props.flexColunm ? "column" : "unset"};
    justify-content: center;
    align-items: center;
    width: ${props => props.widthItem};
    height: ${props => props.theme.Height.NavXl};
    border-left:${props => props.borderLeft ? "1px" : "0px"} solid #bbb7b759;
    border-right:${props => props.borderRight ? "1px" : "0px"} solid #bbb7b759;
    transition: all 0.5s;
    cursor: pointer;
    position: relative;
`;
const Icon = styled.span.attrs(({ marginValue }) => ({
    marginIcon: marginValue
}))`
    font-size: 1em;
    color: ${props => props.Search ? props.theme.Color.Gray : props.theme.Color.Black};
    margin: ${props => props.marginIcon};
    transition: all 0.5s;
  `;
NavItem.Icon = Icon
export default NavItem