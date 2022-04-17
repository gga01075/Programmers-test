function solution(arr) {
    var answer = [];
    // 최소값 구하기
    let min = arr.reduce((acc,cur)=>{
        return acc = acc < cur? acc : cur;
    })
    
return answer = arr.length === 1? arr.map(num => -1): arr.filter( number => number > min);   
    
}