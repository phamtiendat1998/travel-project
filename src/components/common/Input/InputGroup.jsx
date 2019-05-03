import styled from 'styled-components';
import Label from './Label';
import Input from './Input';

const InputGroup = styled.div`
    width : 100%;
    background-color: white;
    padding: 1% 2%;
    margin-bottom: 2%;
    border : 1px solid ${props => props.theme.borderGrayColor};
    box-shadow: ${props => props.focusStatus ? props.theme.boxSInputGroup : "none"};
    transition: 0.5s;
`;

InputGroup.Label = Label;
InputGroup.Input = Input;


export default InputGroup;