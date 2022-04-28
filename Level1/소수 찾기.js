/* 
문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수,
 solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건
n은 2이상 1000000이하의 자연수입니다.


입출력 예
n	      result
10	      4
5	        3


입출력 예 설명
입출력 예 #1
1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

입출력 예 #2
1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

*/

function solution(n) {
  var answer = 0;
  let arr = [];
  let arr2 = [];  
  for(let i=2; i<=Math.sqrt(n);i++){  // 2부터 10까지 돈다고 하면
    // console.log(i);
    for(let j=1;j<=i;j++){
      // console.log(j);
       if(i%j===0) arr2.push(j);
      }
      if(arr2.length === 2) arr.push(i);
      arr2.length = 0
  }
 // console.log(arr); // [2, 3, 5, 7]

  var primeNum = new Array(n).fill(false).map((el, idx)=>{
      //  console.log(arr.length);
        for(let x=0;x<arr.length;x++){
          // console.log(x);
          return el = idx%arr[x]===0 ?  false :  true;
        }
  });
  console.log(primeNum);
  primeNum = primeNum.filter((el)=> {
    return el === true;
  })
  console.log(primeNum, primeNum.length);
  return answer;
}

solution(10);

/* 
에라토스테네스의 체

소수를 구하고자 하는 범위 2~n이 있을 때,
2~n의 제곱근에 해당하는 범위 안의 소수의 배수들을 계속 제외하면 
결국 소수만 남는다는 것입니다.

이를테면 n=100일 때, 100까지의 소수를 구하고 싶다면, 
100의 제곱근인 2~10까지의 숫자에 대한 소수의 배수만 제외하면 
100까지의 소수를 구할 수 있는 것입니다.

*/