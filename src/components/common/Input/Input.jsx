import styled from 'styled-components'

const Input = styled.input`
    width : 100%;
    border : none;
    font-size : ${props => props.theme.Font.Input};
    font-weight: bold;
    &:focus{
        outline : none;
    };
    &::placeholder{
        opacity: 0.7;
    }
`;
export default Input