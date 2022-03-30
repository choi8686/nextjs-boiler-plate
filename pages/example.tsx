import React from "react";
// import { counterState } from "../states/client";

import { ErrorBoundary } from "@components/commons/ErrorBoundary/ErrorBoundary.component";
import { counterState, inputState } from "@states/client";
import {
  useRecoilValue,
  useSetRecoilState,
  useRecoilState,
  useResetRecoilState,
} from "recoil";

const CounterTest = () => {
  const [counter, setCounter] = useRecoilState(counterState);
  const onhandleDecrease = () => {
    setCounter({ ...counter, number: counter.number - 1, status: "decrease" });
  };
  const onhandleIncrease = () => {
    setCounter({ ...counter, number: counter.number + 1, status: "increase" });
  };

  return (
    <div>
      <div>This is counter-state by recoil</div>
      <ErrorBoundary fallback={<span>...loading</span>}>
        <div>{counter?.status}</div>
        <button onClick={onhandleDecrease}>-</button>&nbsp;{counter?.number}
        <button onClick={onhandleIncrease}>+</button>
        &nbsp;
      </ErrorBoundary>
    </div>
  );
};

const InputTest = () => {
  // with atom
  const text = useRecoilValue(inputState.value);
  const setText = useSetRecoilState(inputState.value);
  const onhandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
  };

  // with selector
  const [textDuplicated, setTextDuplicated] = useRecoilState(
    inputState.valueDuplicated
  );
  const resetText = useResetRecoilState(inputState.valueDuplicated);
  const onhandleValueDupicate = () => {
    setTextDuplicated("hi myname is iaan");
  };
  const onhandleReset = () => {
    resetText();
  };
  return (
    <div>
      <div>This is input-state by recoil</div>
      <ErrorBoundary fallback={<span>...loading</span>}>
        <div>typed value : {text}</div>
        <div>duplicated value : {textDuplicated}</div>
        <input onChange={onhandleChange} value={text} />
        <button onClick={onhandleReset}>reset btn</button>
        <button onClick={onhandleValueDupicate}>
          selector duplicated button
        </button>
        &nbsp;
      </ErrorBoundary>
    </div>
  );
};
const Example = () => {
  return (
    <div>
      <InputTest />
      <CounterTest />
    </div>
  );
};

export default Example;
