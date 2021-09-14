import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {incrementAction, decrementAction} from '../actions';
import {
  Bar,
  BarContainer,
  Button,
  ButtonContainer,
  ButtonLabel,
  Container,
} from './styles';

const ProgressBar = () => {
  const dispatch = useDispatch();
  const currentProgress = useSelector(state => state.progress);

  return (
    <>
      <Container>
        <Bar currentProgress={currentProgress}></Bar>
        <BarContainer></BarContainer>
      </Container>
      <ButtonContainer>
        <Button onPress={() => dispatch(incrementAction)}>
          <ButtonLabel>+</ButtonLabel>
        </Button>
        <Button onPress={() => dispatch(decrementAction)}>
          <ButtonLabel>-</ButtonLabel>
        </Button>
      </ButtonContainer>
    </>
  );
};

export default ProgressBar;
