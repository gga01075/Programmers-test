function solution(phone_number) {
    var answer = '';
    let array_convert = phone_number.split('');
    for(let i=0;i< phone_number.length-4;i++){
        array_convert.splice(i,1,"*");
    }
    answer = array_convert.join('');
    return answer;
}