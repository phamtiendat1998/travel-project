import styled from 'styled-components'

const P = styled.p`
    color: ${props => props.colorT};
    margin: 0;
    font-size: ${props => props.theme.Font.P};
    font-weight: ${props => props.bold ? 'bold' : 'unset'};
    text-align: ${props => props.center ? 'center' : 'unset'};
`;
export default P;