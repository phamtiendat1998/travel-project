import React, { Component } from 'react'
import styled from 'styled-components';
import H5 from './../Paragraph/H5';

const Wrapper = styled.div`
    background-color:${props => props.isShow ? props.theme.Color.Red : "white"};
    color: ${props => props.isShow ? "white" : "black"};
    width: 40px;
    height: 40px;
    border-top: 1px solid #80808040;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-out;
    transform: rotate(90deg);
`;

export class ButtonTemp extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.toggleShowTemp();
    }
    render() {
        const { isShow } = this.props;
        return (
            <Wrapper isShow={isShow} onClick={this.handleClick}>
                <H5><i className="fas fa-thermometer-half"></i></H5>
            </Wrapper>
        )
    }
}

export default ButtonTemp
