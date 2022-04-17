function solution(n) {
    var answer = 0;
    let x = Math.sqrt(n);
    console.log(x);
    /* 
     x가 정수인지 판별하는 방법
     1. Number.inInteger(x) 함수는 파라미터로 입력받은 값이 정수인지 판단합니다.
     2. x % 1 === 0 
     */
  
     /* Math.pow(base, exponent)  제곱값을 구하기 위한 내장메서드 base는 밑, exponent는 지수 */
    //  1) Number.inInteger(x) 함수 사용
    // return Number.isInteger(x) ?  Math.pow(x+1, 2) : -1;
  
    // 2) x % 1 === 0 사용
     return (x % 1 === 0) ? Math.pow(x+1, 2) : -1;
  
  
  }