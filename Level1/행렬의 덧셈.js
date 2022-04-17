function solution(arr1, arr2) {
    const rowLength = arr1.length;
    const colLength = arr1[1].length;
    console.log(rowLength, colLength);

    let arr3 = new Array(rowLength).fill(0).map(() => new Array(colLength).fill(null));
    for(var i=0;i<rowLength; i++){
        for(var j=0;j<colLength;j++){
            arr3[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return arr3;
}