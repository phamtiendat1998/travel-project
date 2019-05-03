import styled from 'styled-components'

const Para = styled.p`
    
`;
const FontSpanBoldRed = styled.span`
    font-weight: bold;
    color: ${props => props.theme.colorRed};
`;
const FontNav = styled(Para)`
    font-size: ${props => props.theme.fontNavXl};
`;

const FontTitle = styled(Para)`
    font-size: ${props => props.theme.fontTitle};
`;

const FontP = styled(Para).attrs(({ colorVaule }) => ({
    colorP: colorVaule
}))`
    font-size: ${props => props.theme.fontP};
    color: ${props => props.colorP};
    font-weight: ${props => props.theme.fw1};
`;

Para.FontNav = FontNav;
Para.FontTitle = FontTitle;
Para.FontSpanBoldRed = FontSpanBoldRed;
Para.FontP = FontP;
export default Para;