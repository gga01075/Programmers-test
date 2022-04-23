/* 
문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. 
"z"는 1만큼 밀면 "a"가 됩니다. 

문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, 
solution을 완성해 보세요.

제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.


입출력 예
s	        n	    result
"AB"	    1	    "BC"
"z"     	1	    "a"
"a B z"	    4	    "e F d"
*/

function solution(s, n) {
    var answer = '';
    var eng = /^[a-zA-Z]\g/; 
/*     let changeChar = s.replace(eng,(s)=>{
        console.log(s);
       return String.fromCharCode(String.charCodeAt() + n);
    }); */
    s.replace(eng,String.charCodeAt(s.indexOf(eng)));
    


    console.log(s);
    return changeChar;
}

solution("AB",1);
// solution("z");
// solution("a B z");



/* 
1. split로 문자열만을 추출하거나 정규표현식을 사용해서 문자를 구분한다. 
2. 아스키코드값으로 변환 - n만큼 추가하고 - 다시 초기상태로 돌아가는 조건을 걸어주고 - 그 결과를 다시 문자로 변환 
3. 문자로 변환한 결과를 다시 이어준다. 

아스키코드 
대문자 A(65) ~  Z(90)  25개
소문자 a(97) ~ z(122)   25개
*/