/* 
문제 설명
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, 
solution을 완성하세요.

예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

제한 조건
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다.


입출력 예
a	    b	    return
3	    5	    12
3	    3	    3
5	    3	    12

a= 10, b=4  양수 양수    +
a= 10  b= -4 양수 음수   +
a= -10 b= 4 음수 양수    -
a= -10 b= -4 음수 음수   => 절대값이 a가 더 클때 음수 / 절대값이 a가 더 클때 양수
a= 10 b=10 양수 양수(같을때)  0
a= -10 b=-10 음수 음수(같을때) 0

*/


// 나머지 매개변수 사용
function solution(...args) {
  var answer = 0;

 console.log(args);
 // 나머지 매개변수를 오름차순으로 정렬
 args = args.sort((a,b)=>{
    return a-b;
  })

 console.log(args);
//  두 수가 같으 때 하나 바로 반환 
 if(args[0] === args[1]) return args[0];

 // a부터 b까지 순환하면서 더해준다. 
 for(var i=args[0]; i <= args[1]; i++){
    answer+=i;
 }

  console.log(answer);
  return answer;
  
}

// solution(5,3);
solution(3,3);