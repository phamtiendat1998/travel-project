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
        if (this.state.checkBox) {
            this.setState({ checkBox: false });
        } else {
            this.setState({ checkBox: true });
        }
    }
    render() {
        return (
            <CheckBoxWrapper>
                <Checkbox
                    checked={this.state.checkBox}
                    onChange={this.handleChange}
                />
                <Label>{this.props.label}</Label>
            </CheckBoxWrapper>
        )
    }
}
