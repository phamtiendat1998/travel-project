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
    margin-bottom: 1%;
`;

const FontP = styled(Para).attrs(({ colorVaule }) => ({
    colorP: colorVaule
}))`
    font-size: ${props => props.theme.fontP};
    color: ${props => props.colorP};
    font-weight: ${props => props.theme.fw1};
`;

const FontP2 = styled(Para)`
    font-size: ${props => props.theme.fontP2};
`;

Para.FontNav = FontNav;
Para.FontTitle = FontTitle;
Para.FontSpanBoldRed = FontSpanBoldRed;
Para.FontP = FontP;
Para.FontP2 = FontP2;

export default Para;