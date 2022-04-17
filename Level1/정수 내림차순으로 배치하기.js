function solution(n) {
    var answer = 0;
    let arr = n.toString().split('').sort().reverse().join('');
    answer = parseInt(arr);
    console.log(answer);
  
  
    return answer;
  }