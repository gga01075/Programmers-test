function solution(num) {
    var answer = 0;  // 횟수 
    while(answer<500&&num>1){
        answer++;  // 횟수 1 증가시키고 
        num = num%2===0? num/2 : num * 3 + 1; // 삼항연산자 
        console.log(answer,num);
        if(num===1) break;
    }
    if(num !== 1) answer=-1;
    return answer;
}