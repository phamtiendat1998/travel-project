import styled from 'styled-components'

const InputSearchTrip = styled.input`
    width: calc(100% - 100px);
    border: none;
    font-size : ${props => props.theme.Font.P};
    font-weight: bold;
    &:focus{
        outline : none;
    };
    &::placeholder{
     color: ${props => props.theme.Color.Gray};
    font-weight: 600;
    }
`;

export default InputSearchTrip
