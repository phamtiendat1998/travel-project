import React, { Component } from 'react';
import styled from 'styled-components';
import { TimelineLite } from "gsap";
const Wrapper = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    bottom: ${props => props.bottom};;
    right: ${props => props.right};;
    z-index: 2;   
    background-color:  ${props => props.colorBG};
    cursor: pointers;
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
        this.state = {
            statusAnima: this.props.statusAnimaPos
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            statusAnima: nextProps.statusAnimaPos
        });
    }
    render() {
        const { colorU, color, bottom, right } = this.props;
        return (
            <Wrapper bottom={bottom} right={right} colorBG={color} colorU={colorU}>
                <View></View>
            </Wrapper>
        )
    }
}

export default Position
