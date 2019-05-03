import styled from 'styled-components';

const Label = styled.label`
    color : ${props => props.statusFocus ? "white" : props.theme.txtGrayLabel};
    background-color: ${props => props.statusFocus ? props.theme.colorRed : "none"};
    font-size: ${props => props.theme.fontLabel};
    font-weight: ${props => props.theme.fw1};
    margin: 0;
    transition: 0.4s;
    padding:  ${props => props.statusFocus ? "0 10px" : "0px"};
`;

export default Label;