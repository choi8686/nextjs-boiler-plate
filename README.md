## 설치

recoil
react-query
next-images
next-compose-plugins
axios

## about recoil

1. useRecoilState() : atom을 읽고 쓰려고 할 때 사용되는 hook (이 hook은 atom에 컴포넌트를 등록한다. (구독))
2. useRecoilValue() : atom을 읽기만 할 때 사용되는 hook (이 hook은 atom에 컴포넌트를 등록한다. (구독))
3. useSetRecoilState() : atom에 쓰려고만 할 때 사용되는 hook
4. useResetRecoilState() : atom을 초깃값으로 초기화 할때 사용되는 hook

- 현재 atom을 설정할 때 Promise을 지정할 수 없다는 점에 유의해야 한다. 비동기 함수를 사용하기 위해서는 selector를 사용한다.

5. constSelector(constant) : 항상 상수를 제공하는 selector입니다
