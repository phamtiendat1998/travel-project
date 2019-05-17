import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    bottom: ${props => props.bottom};;
    right: ${props => props.right};;
    z-index: 2;   
    background-color:  ${props => props.colorBG};
    &::before {
        position: absolute;
        content: "";
        height: 0;
        width: 0;
        border: 16px solid transparent;
        margin-left: -16px;
        margin-top: 0;
        border-top-color: ${props => props.colorU};
        border-left: 0;
        top: 100%;
        left: 100%;
    }
`;
const View = styled.div`
    width: 100%;
`;
export class Position extends Component {
    constructor(props) {
        super(props);
        this.Wrapper = null;
        this.animaWrapper = null;
        this.state = {

        }
    }
    // componentDidMount() {
    //     const { width, height } = this.props;
    //     this.animaWrapper = new TimelineLite({ paused: false })
    //         .to(this.Wrapper, 1, { width: width, height: height });
    // }
    render() {
        const { colorU, color, bottom, right } = this.props;
        return (
            <Wrapper ref={Wrapper => this.Wrapper = Wrapper} bottom={bottom} right={right} colorBG={color} colorU={colorU}>
                <View></View>
            </Wrapper>
        )
    }
}

export default Position
