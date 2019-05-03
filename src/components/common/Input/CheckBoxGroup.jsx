import styled from 'styled-components';
import CheckBox from './CheckBox';
const CheckBoxPara = styled.span`
    margin-left: 5px;
    font-size: ${props => props.theme.fontP};
    color: ${props => props.theme.txtGrayColor};
`;

const CheckBoxGroup = styled.div`
    margin: 3% 0;
`;

CheckBoxGroup.CheckBox = CheckBox;
CheckBoxGroup.Para = CheckBoxPara;

export default CheckBoxGroup;