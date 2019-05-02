import styled from 'styled-components'

const Para = styled.p`
    
`
const FontNav = styled(Para)`
    font-size: ${props => props.theme.fontNavXl};
`
Para.FontNav = FontNav

export default Para