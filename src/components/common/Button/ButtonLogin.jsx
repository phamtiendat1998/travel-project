import styled from 'styled-components';

const ButtonLogin = styled.button`
    width: 120px;
    height: 45px;
    background: none;
    border: 1px solid ${props => props.theme.borderGrayColor};
    background-color: ${props => props.theme.btnRedColor};
    color: white;
    border-radius: 4px;
    transition: 0.6s;
    &:focus{
        outline: none;
    }
`;

export default ButtonLogin