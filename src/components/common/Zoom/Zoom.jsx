import React, { Component } from 'react'
import styled from 'styled-components';
import Para from './../Paragraph/Para';

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ZoomButton = styled.div`
    width: ${props => props.theme.sizeZoom};
    height: ${props => props.theme.sizeZoom};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
const ZoomInput = styled.input`
    width: ${props => props.theme.widthInputRange};
    height: ${props => props.theme.heightInputRange};
    background: gray;
    outline: none;
    border-radius: 5px;
    -webkit-appearance: none;
    &::-webkit-slider-thumb{
        cursor: pointer;
        width: 25px;
        height: 25px;
        background: ${props => props.theme.colorRed};
        transition: all .7s;
        appearance: none;
    }
`;

export class Zoom extends Component {
    constructor(props) {
        super(props)
        this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
        this.handleClickMinusBtn = this.handleClickMinusBtn.bind(this);
        this.handleClickPlusBtn = this.handleClickPlusBtn.bind(this);
        this.state = {
            valueInputRange: this.props.valueDefault,
        }
    }
    handleOnChangeInput(event) {
        const { value } = event.target;
        const nextState = { ...this.state };
        nextState.valueInputRange = value;
        this.setState(nextState);
        this.props.getValue(nextState.valueInputRange);
    }
    handleClickMinusBtn() {
        const { step, min } = this.props;
        const nextState = { ...this.state };
        if (parseFloat(nextState.valueInputRange) > parseFloat(min)) {
            nextState.valueInputRange = parseFloat(nextState.valueInputRange) - parseFloat(step);
            this.setState(nextState);
            this.props.getValue(nextState.valueInputRange);
        }
    }
    handleClickPlusBtn() {
        const { step, max } = this.props;
        const nextState = { ...this.state };
        if (parseFloat(nextState.valueInputRange) < parseFloat(max)) {
            nextState.valueInputRange = parseFloat(nextState.valueInputRange) + parseFloat(step);
            this.setState(nextState);
            this.props.getValue(nextState.valueInputRange);
        }
    }
    render() {
        const { valueInputRange } = this.state;
        const { step, min, max } = this.props;
        return (
            <Wrapper>
                <ZoomButton onClick={this.handleClickMinusBtn}><Para.FontP2><i className="fas fa-search-minus"></i></Para.FontP2></ZoomButton>
                <ZoomInput onChange={this.handleOnChangeInput} type="range" min={min} max={max} step={step} value={valueInputRange}></ZoomInput>
                <ZoomButton onClick={this.handleClickPlusBtn}><Para.FontP2><i className="fas fa-search-plus"></i></Para.FontP2></ZoomButton>
            </Wrapper>
        )
    }
}

export default Zoom
