function solution(arr) {
    var answer = 0;
    const sum = arr.reduce((acc,cur)=>{
        return acc+cur;
    },0)
    answer = sum / arr.length;
    return answer;
}