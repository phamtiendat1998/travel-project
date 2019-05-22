import React, { Component } from 'react';
import styled from 'styled-components';
import { TimelineLite, TweenLite } from "gsap/all";
const Wrapper = styled.div` 
    width: 1600px;
    height: 800px;
    cursor: grab;
    position: relative;
`;
const ImgMap = styled.img`
    width: 100%;
    height: 100%;
    z-index: 1;
`;
const Position = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    bottom: ${props => props.bottom};
    right: ${props => props.right};
    z-index: 2;   
    background-color:  ${props => props.colorBG};
    transform: translateY(20px);
    opacity: 0;
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
export class MapUser extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.Position = null;
        this.aPosition = null;
        this.state = {
            scale: this.props.scale,
            isPressMap: false,
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
    componentDidMount() {
        this.aPosition = new TimelineLite({ paused: true })
            .to(this.refPosition, 0.3, { autoAlpha: 1, y: 0 })
            .to(this.refPosition, 0.3, { height: '60px', width: '1px' })
            .to(this.refPosition, 0.3, { width: '40px' });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.actionAnima === true) {
            this.aPosition.play();
        } else {
            this.aPosition.reverse();
        }
        TweenLite.to(this.refWrapper, 0.5, { scale: nextProps.scale });
    }
    render() {
        return (
            <Wrapper ref={Wrapper => this.refWrapper = Wrapper} onMouseMove={this.handleMouseMove} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseLeave={this.handleMouseLeave}>
                <Position ref={Position => this.refPosition = Position} bottom="30%" right="30%" colorBG={props => props.theme.colorRed} colorU={props => props.theme.colorPstURed}>
                </Position>
                <ImgMap src="./images/map.png">
                </ImgMap>
            </Wrapper>
        )
    }
}
export default MapUser;
