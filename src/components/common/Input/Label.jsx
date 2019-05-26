import styled from 'styled-components';

const Label = styled.label`
    color : ${props => props.statusFocus ? "white" : props.theme.Color.Gray};
    background-color: ${props => props.statusFocus ? props.theme.Color.Red : "none"};
    font-size: ${props => props.theme.Font.Label};
    font-weight: bold;
    margin: 0;
    transition: 0.4s;
    padding:  ${props => props.statusFocus ? "0 10px" : "0px"};
`;

export default Label;