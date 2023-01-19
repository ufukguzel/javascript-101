function bounce(arr){
    const filteredArr = [];
    for(let i = 0;i < arr.length;i++){
        if(arr[i]) filteredArr.push(arr[i])
    }
    return filteredArr;
}

// bu fonksiyon hatalrı değerleri sile örneğin NULL, "", 0,Nan,