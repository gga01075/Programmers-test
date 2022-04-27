/* 
문제 설명
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, 
solution을 완성해주세요.

s는 영문 대소문자로만 구성되어 있으며, 
대문자는 소문자보다 작은 것으로 간주합니다.

제한 사항
str은 길이 1 이상인 문자열입니다.


입출력 예
s	           return
"Zbcdefg"	  "gfedcbZ"

*/

function solution(s) {
  var answer = '';
  let arr = s.split('').sort((a,b)=>{
    return b-a;
  });
  let arr2 = arr.filter((el)=>{
    return /[A-Z]/.exec(el);
  })
  // console.log(arr, arr2);
  arr = arr.splice(arr2.length,arr.length - arr2.length).concat(arr2);
  console.log(arr);
  return answer = arr.join('');
}

console.log(solution("ZAbcdefg"));

/* 
1. split로 각 문자를 배열로 쪼갠다.  
2. 그 배열을 sort메서드로 내림차순 정렬한다. 
3. filter메서드를 사용해서 대문자만 추출하고 splice로 소문자만 남기고 뒤에 concat으로 대문자를 붙인다. 
4. 출력

전부 대문자이거나 전부 소문자인 경우도 생각할 것.

*/