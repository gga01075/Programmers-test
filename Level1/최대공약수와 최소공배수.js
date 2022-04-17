function solution(n, m) {
    var answer = [];
    let arr1 = [];
    let arr2 = [];
    let 최대공약수 = 0;
    let 최소공배수 = 0;
    // 두 숫자의 약수 구하기
    // arr1의 약수 다 구해버령
    for(var i=1; i<=n;i++){
        if(n%i===0) arr1.push(i); //n의 약수
    }
    
    // arr2의 약수 다 구해버령
    for(var j=1; j<=m;j++){
        if(m%j===0) arr2.push(j); //m의 약수
    }
    
    
    // console.log(arr1, arr2);
    /* 
    filter의 반환값은 테스트를 통과한 요소로 이루어진 새로운 배열이다. 
    1. arr1을 순환하면서 arr2에 포함된 녀석만 추출해서 새로운 배열을 반환
    2. 그 새로운 배열의 원소들을 반환하면서 제일 큰 놈만 추출하기 위해 이전값과 현재값을 비교해서 젤 강한 애만 반환시켜버령
    
     */
    // 1,2,3,6
    최대공약수 = arr1.filter(element => arr2.includes(element)).reduce((acc, cur)=>{
        return acc = acc < cur? cur : acc;
    },0);
    answer[0] = 최대공약수;  
    최소공배수 = 최대공약수*(n/최대공약수)*(m/최대공약수);
    answer[1] = 최소공배수;
    console.log(최대공약수,최소공배수);
    return answer; 
    
    

}