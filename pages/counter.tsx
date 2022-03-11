import React from "react";
// import { counterState } from "../states/client";
import { ErrorBoundary } from "@components/commons/ErrorBoundary/ErrorBoundary.component";
import { counterState } from "@states/client";
import { useRecoilState } from "recoil";

const Counter = () => {
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

export default Counter;
