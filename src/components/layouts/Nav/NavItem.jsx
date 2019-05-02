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
    border-left:${props => props.borderLeft ? "1px" : "0px"} solid  ${props => props.theme.borderGrayColor};
    border-right:${props => props.borderRight ? "1px" : "0px"} solid ${props => props.theme.borderGrayColor};
    transition: all 0.5s;
    cursor: pointer;
    &:hover{
        background-color: ${props => props.theme.colorRed};
        color: white;
    }
    &:hover span{
        color: white;
    }
`;
const Icon = styled.span.attrs(({ marginValue }) => ({
    marginIcon: marginValue
}))`
    font-size: ${props => props.theme.fontNavIconXl};
    color: ${props => props.Search ? props.theme.colorGrayIcon : props.theme.colorIcon};
    margin: ${props => props.marginIcon};
    transition: all 0.5s;
  `;
NavItem.Icon = Icon
export default NavItem