import styled from "styled-components";

const InputProfile = styled.input`
    margin: 1em 0;
    padding: 0.8em;
    width: 60%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #e0e0e0;
    font-size: ${props => props.theme.Font.Input};
    &:focus{
        outline : none;
    };
    &::placeholder{
        color: ${props => props.theme.Color.Gray};
    }
`;

export default InputProfile;