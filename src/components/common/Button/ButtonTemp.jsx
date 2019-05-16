import React from 'react';
import styled from 'styled-components';
import Para from './../Paragraph/Para';

const Wrapper = styled.div`
    background-color:white;
    width: 40px;
    height: 40px;
    border-bottom: 1px solid #80808040;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: rotate(-90deg);
`;

function ButtonTemp() {
    return (
        <Wrapper>
            <Para.FontP2><i className="fas fa-thermometer-half"></i></Para.FontP2>
        </Wrapper>
    )
}

export default ButtonTemp
