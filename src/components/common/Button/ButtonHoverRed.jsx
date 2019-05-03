import styled from 'styled-components';

const ButtonHoverRed = styled.button`
    width: 120px;
    height: 45px;
    background: none;
    border: 1px solid ${props => props.theme.borderGrayColor};
    background-color: ${props => props.theme.btnRedColor};
    color: white;
    border-radius: 4px;
    opacity: 0.6;
    transition: 0.6s;
    &:focus{
        outline: none;
    }
    &:hover{
        opacity: 1;
    }
`;

export default ButtonHoverRed