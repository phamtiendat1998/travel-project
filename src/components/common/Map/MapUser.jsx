import React, { Component } from 'react';
import styled from 'styled-components';
import { TweenLite } from "gsap/all";
import PositionMapContainer from './../Position/PositionMapContainer';
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
            isAnimatedPosition: false,
            isShowTemp: this.props.isShowTemp,
        }
        this.startMouseX = 0;
        this.startMouseY = 0;
        this.topWrapper = 0;
        this.leftWrapper = 0;
        this.isPressMap = false;
    }
    handleMouseMove(e) {
        e.preventDefault();
        if (!this.isPressMap) return;
        let newX = e.clientX - this.startMouseX + this.leftWrapper;
        let newY = e.clientY - this.startMouseY + this.topWrapper;
        TweenLite.to(this.refWrapper, 0.1, { left: newX + 'px', top: newY + 'px' });
    }
    handleMouseDown(e) {
        e.preventDefault();
        this.startMouseX = e.clientX;
        this.startMouseY = e.clientY;
        this.isPressMap = true;
        this.topWrapper = this.refWrapper.offsetTop;
        this.leftWrapper = this.refWrapper.offsetLeft;
    }
    handleMouseUp(e) {
        e.preventDefault();
        this.startMouseX = 0;
        this.startMouseY = 0;
        this.isPressMap = false;
    }
    handleMouseLeave(e) {
        e.preventDefault();
        this.isPressMap = false;
    }
    renderPossition = () => {
        const { isAnimatedPosition, isShowTemp } = this.state;
        const { Places } = this.props;
        return Places.map((place, i) => {
            return <PositionMapContainer Place={place} key={place._id} delay={i} type={0} isAnimated={isAnimatedPosition} isShowTemp={isShowTemp}></PositionMapContainer>
        });
    }
    render() {
        return (
            <Wrapper ref={Wrapper => this.refWrapper = Wrapper} onMouseMove={this.handleMouseMove} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseLeave={this.handleMouseLeave}>
                {this.renderPossition()}
                <ImgMap src="./images/map.png">
                </ImgMap>
            </Wrapper>
        )
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ isAnimatedPosition: nextProps.isAnimatedPoss ? true : false, isShowTemp: nextProps.isShowTemp });
        TweenLite.to(this.refWrapper, 0.5, { scale: nextProps.scale });
    }
}
export default MapUser;
