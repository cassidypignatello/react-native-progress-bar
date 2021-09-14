import styled from 'styled-components';
import {colors} from '../colors';

export const Container = styled.View`
  width: 80%;
  height: 100px;
  padding: 16px;
  background-color: ${colors.lightGreen};
  justify-content: center;
  border-radius: 20px;
`;

export const Bar = styled.View`
  height: 12px;
  border-radius: 36px;
  background-color: ${colors.darkGreen};
  z-index: 1;
  width: ${props => `${props.currentProgress}%`};
`;

export const BarContainer = styled.View`
  height: 12px;
  border-radius: 36px;
  background-color: ${colors.gray};
  bottom: 12px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 20px;
  margin-right: 20px;
  background-color: ${colors.lightGreen};
  padding-vertical: 10px;
  padding-horizontal: 20px;
  border-radius: 12px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
`;

export const ButtonLabel = styled.Text`
  font-size: 30px;
`;
