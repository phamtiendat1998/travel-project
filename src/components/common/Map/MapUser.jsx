import React, { Component } from 'react';
import styled from 'styled-components';
import { TweenLite } from "gsap/all";
import PositionMap from './../Position/PositionMap';
const Wrapper = styled.div` 
    width: 1600px;
    height: 800px;
    position: relative;
`;
const ImgMap = styled.img`
    width: 100%;
    height: 100%;
    z-index: 1;
    cursor: grab;
`;
export class MapUser extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.state = {
            scale: this.props.scale,
            isPressMap: false,
            isAnimatedPosition: false,
            isShowTemp: this.props.isShowTemp
        }
        this.startMouseX = 0;
        this.startMouseY = 0;
        this.topWrapper = 0;
        this.leftWrapper = 0;
    }
    handleMouseMove(e) {
        e.preventDefault();
        if (!this.state.isPressMap) return;
        let newX = e.clientX - this.startMouseX + this.leftWrapper;
        let newY = e.clientY - this.startMouseY + this.topWrapper;
        TweenLite.to(this.refWrapper, 0.1, { left: newX + 'px', top: newY + 'px' });
    }
    handleMouseDown(e) {
        e.preventDefault();
        this.startMouseX = e.clientX;
        this.startMouseY = e.clientY;
        this.setState({ isPressMap: true });
        this.topWrapper = this.refWrapper.offsetTop;
        this.leftWrapper = this.refWrapper.offsetLeft;
    }
    handleMouseUp(e) {
        e.preventDefault();
        this.startMouseX = 0;
        this.startMouseY = 0;
        this.setState({ isPressMap: false });
    }
    handleMouseLeave(e) {
        e.preventDefault();
        this.setState({ isPressMap: false });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ isAnimatedPosition: nextProps.actionAnima ? true : false, isShowTemp: nextProps.isShowTemp });
        TweenLite.to(this.refWrapper, 0.5, { scale: nextProps.scale });
    }
    render() {
        const { isAnimatedPosition, isShowTemp } = this.state;
        return (
            <Wrapper ref={Wrapper => this.refWrapper = Wrapper} onMouseMove={this.handleMouseMove} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseLeave={this.handleMouseLeave}>
                <PositionMap isShowTemp={isShowTemp} getValueTemp={this.props.getValueTemp} type={0} isAnimated={isAnimatedPosition}></PositionMap>
                <ImgMap src="./images/map.png">
                </ImgMap>
            </Wrapper>
        )
    }
}
export default MapUser;