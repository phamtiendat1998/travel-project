import React, { Component } from 'react';
import styled from 'styled-components';
import Position from './../Position/Position';
const Wrapper = styled.div` 
    position: relative;
    width: ${props => props.width};
    height: ${props => props.height};
    transition: all 0.5s;
`;
const ImgMap = styled.img`
    width: 100%;
    height: 100%;
    z-index: 1;
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
        const { height, width } = this.state;
        return (
            <Wrapper height={height} width={width}>
                <ImgMap src="./images/map.png">
                </ImgMap>
                <Position width={props => props.theme.widthPst} height={props => props.theme.heightPst} bottom="30%" right="30%" color={props => props.theme.colorRed} colorU={props => props.theme.colorPstURed}></Position>
            </Wrapper>
        )
    }
}
export default MapUser;
