import styled from 'styled-components';

const Label = styled.label`
    color : ${props => props.isFocus === true ? "white !important" : "none"};
    color : ${props => props.isAlert === 0 && props.isFocus === false ? props.theme.Color.Gray + "!important" : "none"};
    color : ${props => props.isAlert === true && props.isFocus === false ? props.theme.Color.Red + "!important" : "none"};
    color : ${props => props.isAlert === false && props.isFocus === false ? props.theme.Color.Success + "!important" : "none"};
    background-color: ${props => props.isAlert === false && props.isFocus === false ? "none !important" : "none"};
    background-color: ${props => props.isAlert === false && props.isFocus === true ? props.theme.Color.Success + "!important" : "none"};
    background-color: ${props => props.isAlert === true && props.isFocus === true ? props.theme.Color.Red + "!important" : "none"};
    background-color: ${props => props.isAlert === 0 && props.isFocus === true ? props.theme.Color.Default + "!important" : "none"};
    font-size: ${ props => props.theme.Font.Label};
    font-weight: 500;
    margin: 0;
    transition: all 0.5s;
    padding: ${ props => props.isFocus ? "0 10px" : "0px"};
`;

export default Label;