import React, { Component } from 'react';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';

const Label = styled.label`
    font-size: ${props => props.theme.Font.Label};
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
            isCheck: false
        }
    }
    handleChange() {
        const nextState = { ...this.state };
        nextState.isCheck ? nextState.isCheck = false : nextState.isCheck = true;
        this.setState({ isCheck: nextState.isCheck });
        const input = {
            name: this.props.value,
            checked: nextState.isCheck
        }
        this.props.handleGetValue(input);
    }
    render() {
        const { value } = this.props;
        const { isCheck } = this.state;
        return (
            <CheckBoxWrapper>
                <Checkbox
                    value={value}
                    checked={isCheck}
                    onChange={this.handleChange}
                    color="primary"
                />
                <Label>{this.props.label}</Label>
            </CheckBoxWrapper>
        )
    }
}
