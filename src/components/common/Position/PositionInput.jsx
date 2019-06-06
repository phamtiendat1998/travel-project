import styled from 'styled-components';

const PositionInput = styled.div.attrs(({ colorParam, colorBefore }) => ({
    colorPosition: colorParam,
    colorBf: colorBefore
}))`
    width: 15px;
    height: 15px;
    background-color: ${props => props.colorPosition};
    position: relative;
    z-index: 2;
    :before{
        bottom: -4px;
        position: absolute;
        content: "";
        width: 10px;
        height: 10px;
        right: 3px;
        transform: rotate(45deg);
        border: 0px;
        border: 5px solid transparent;
        border-right-color: ${props => props.colorBf};
        z-index: 1;
    }
`;

export default PositionInput



