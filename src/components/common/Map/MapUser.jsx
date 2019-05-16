import React, { Component } from 'react';
import styled from 'styled-components';
const Wrapper = styled.div` 
`;
const ImgMap = styled.img`
    width: ${props => props.width};
    height: auto;
    transition: all 0.5s;
`;
export class MapUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: this.props.width
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            width: nextProps.width
        });
    }
    render() {
        const { width } = this.state;
        return (
            <Wrapper>
                <ImgMap width={width} src="./images/map.png">
                </ImgMap>
            </Wrapper>
        )
    }
}
export default MapUser;
