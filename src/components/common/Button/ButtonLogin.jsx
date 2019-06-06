import styled from 'styled-components';

const ButtonLogin = styled.button`
    width: 120px;
    height: 45px;
    background: none;
    background-color: ${props => props.theme.Color.Default};
    border: none;
    box-shadow: 0 0 2px black;
    color: white;
    border-radius: 4px;
    transition: 0.6s;
    &:focus{
        outline: none;
    };
    &:disabled{
        background-color: gray;
    }
`;

export default ButtonLogin