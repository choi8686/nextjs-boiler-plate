// useRecoilState() : atom을 읽고 쓰려고 할 때 사용되는 hook
// 이 hook은 atom에 컴포넌트를 등록한다. (구독)
// useRecoilValue() : atom을 읽기만 할 때 사용되는 hook
// 이 hook은 atom에 컴포넌트를 등록한다. (구독)
// useSetRecoilState() : atom에 쓰려고만 할 때 사용되는 hook
// useResetRecoilState() : atom을 초깃값으로 초기화 할때 사용되는 hook

export { default as counterState } from "./counter";
export { default as inputState } from "./input";
