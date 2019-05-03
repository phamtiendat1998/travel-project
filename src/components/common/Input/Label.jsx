import styled from 'styled-components';

const Label = styled.label`
    color : ${props => props.focusStatus ? "white" : props.theme.txtGrayLabel};
    background-color: ${props => props.focusStatus ? props.theme.colorRed : "none"};
    font-size: ${props => props.theme.fontLabel};
    font-weight: ${props => props.theme.fw1};
    margin: 0;
    transition: 0.4s;
`;

export default Label;