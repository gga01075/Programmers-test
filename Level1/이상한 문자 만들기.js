function solution(s) {
    var answer = '';
    let arr1 = s.split(" "); 
    // console.log(arr1);
    for(var i=0;i<arr1.length;i++){
      let arr2 = arr1[i].split("");
      console.log(`arr2 : ${arr2}`);
      let arr3 = arr2.map((el, idx) => {
          if(idx%2===0){
            //   console.log(idx);
              arr2[idx] = arr2[idx].toUpperCase();  
          }else{
            // console.log(idx);
            arr2[idx] = arr2[idx].toLowerCase();
          }
          console.log(`arr2 : ${arr2}`);
         return arr2;
        });
      arr3.join();
      answer+= arr3+' '
    }
    return answer;
}

console.log(solution("try hello world"));
