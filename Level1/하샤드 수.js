function solution(x) {
    var answer = true;
    const num = x.toString().split('');
    console.log(num);
    let sum = num.reduce((acc, cur, idx, arr)=>{
        return  Number(acc) + Number(cur);
    }); 
    console.log(sum);
    return answer = x%sum === 0? true : false;
}