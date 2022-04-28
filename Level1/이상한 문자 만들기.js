function solution(s) {
    
  let arr = s.split(" ");
// console.log(arr); //['try', 'hello', 'world']
  let answer = arr.map((el) => {
      //처음에 try가 들어감 (0,1,2)
      //
     for(let i=0;i<el.length;i++){
       if(i%2===0){
          //  console.log(el[i],'짝수');
          el = el.replace(el[i], el[i].toUpperCase());
          //  console.log(el, '짝수2');
          }else{
            // console.log(el[i], '홀수');
          el =  el.replace(el[i], el[i].toLowerCase());
            // console.log(el, '홀수2');
         }
     }
     
     return el;
    //  console.log(el);
  });
  // console.log(answer);
  answer = answer.join(" ");
  // console.log(answer);
  return answer;
}

solution("try hello world ");