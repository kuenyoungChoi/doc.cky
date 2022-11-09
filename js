Object.keys()
객체의 키 값만 가져오고 싶은 경우. 다른 말로 프로퍼티 네임들만 묶어서 배열로 반환하는 메서드이다.
변수명을 object의 key 값으로 사용
기존
const test = 'coke'
const usage = {};
usage[test] = 5;
es6
const test = 'coke'
const usage = {
[test]: 5,
};

props
부모 : 데이터를 가지고 있다.
자식 :  props로 데이터를 받아와 쓴다.
부모의 데이터가 바뀌면 자식의 데이터도 바뀐다.
자식의 데이터만 바뀌면 emit으로 올려준다. (상위 컴포넌트를 바꾸지 않으면 랜더링 되지 않기 때문이다.)

...문법 = 간단히 정리하면 배열 혹은 객체 안의 값을 편하게 꺼내 쓸 수 있는 문법이다.
기본 문법 (배열)
ex) [a1, a2 ...rest_a] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a1); //1
console.log(a2); //2
console.log(rest_a): // [3,4,5,6,7,8,9]
기본 문법 (객체)
ex) { a1, a2, ...rest_a } = { a1 : 10, a2 : 20, a3 : 30, a4 : 40 };
console.log(a1); // 10
console.log(a2); // 20
console.log(rest_a); // {a3: 30, a4: 40}

map()
콜백함수를 실행한 결과를 가지고 새로운 배열을 만들 때 사용한다.
어떤 배열에 있는 모든 요소들의 값을 변경해서 만든 새로운 배열을 써야 할 때 , 루프로 수동 반복처리하는 대신
간단히 Array.map() 을 사용하면 된다.
객체 배열에서 map()함수를 사용하는 방법
ex)
let users = [{firstName : "Susan", lastName: "Steward"},{firstName : "Daniel", lastName: "Longbottom"},{firstName : "Jacob", lastName: "Black"}];

let userFullnames = users.map(function(element){return `${element.firstName} ${element.lastName}`;})

console.log(userFullnames);// ["Susan Steward", "Daniel Longbottom", "Jacob Black"]


Object.entries(obj)
[키 , 값] 쌍을 담은 배열을 반환한다. 즉 객체를 배열로 반환한다.
ex)

Array.isArray()
인수가 배열인지 아닌지 판별한다.

computed 프로퍼티로 퍼포먼스 최적화
computed 프로퍼티를 get 과 set 두가지 프로퍼티를 가진 object로 변경.
두 프로퍼티 (또는 메서드로도 사용가능) 는 computed 프로퍼티를 사용할 때
get : 값을 확인/가져올 때 --  set : 값을 설정/변경할 때
set 설정 시 new value를 매개 변수로 받음. ex) set : function (newValue) {...}
해당 매개변수는 computed 프로퍼티에 특정 값을 등록하고자 할 때 입력할 새로운 값을 포함한다.
set 메서드 안에서는 data 프로퍼티를 간단하게 업데이트 할 수 있다.

lodash : js라이브러리
_ 변수사용
브라우저에서 지원하지 않는 성능이 보장되어있는 다양한 메소드를 가질 수 있음.
관련 메소드 참고 : https://velog.io/@kysung95/%EC%A7%A4%EB%A7%89%EA%B8%80-lodash-%EC%95%8C%EA%B3%A0-%EC%93%B0%EC%9E%90