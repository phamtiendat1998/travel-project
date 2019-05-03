import styled from 'styled-components'

const InputSearchTrip = styled.input`
    width: calc(100% - 100px);
    border: none;
    font-size : ${props => props.theme.fontP};
    font-weight: bold;
    &:focus{
        outline : none;
    };
    &::placeholder{
     color: ${props => props.theme.txtGrayColor};
    font-weight: 600;
    }
`;

export default InputSearchTrip
