import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div` 
`;
const ImgMap = styled.img`
    width: 1600px;
    height: auto;
`;
export class MapUser extends Component {
    render() {
        return (
            <Wrapper>
                <ImgMap src="./images/map.png">
                </ImgMap>
            </Wrapper>
        )
    }
}

export default MapUser;
