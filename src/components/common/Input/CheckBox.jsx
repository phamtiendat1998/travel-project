import React, { Component } from 'react';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';

const Label = styled.label`
    font-size: ${props => props.theme.fontLabel};
    margin-bottom: 0;
`;
const CheckBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export default class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            checkBox: false
        }
    }
    handleChange() {
        const nextState = { ...this.state };
        nextState.checkBox ? nextState.checkBox = false : nextState.checkBox = true;
        this.setState({checkBox: nextState.checkBox });
        const input = {
            name: this.props.value,
            checked: nextState.checkBox
        }
        this.props.handleGetValue(input);
    }
    render() {
        let value = this.props.value;
        return (
            <CheckBoxWrapper>
                <Checkbox
                    value={value}
                    checked={this.state.checkBox}
                    onChange={this.handleChange}
                    color="primary"
                />
                <Label>{this.props.label}</Label>
            </CheckBoxWrapper>
        )
    }
}
