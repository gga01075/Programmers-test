function solution(n) {
    var answer = [];
    let arr  = n.toString().split('').reverse();
    // console.log(arr);
    answer = arr.map((el) => {
      return parseInt(el);
    });
    console.log(answer);
    return answer;
  }