let arr=[8,4,76,35,87,23,12]
max=arr[0];
for(i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i]
    }
}
console.log("Largest Element is",max)


arr.forEach(element =>{if(element >max){max = element}})
    console.log("Largest Element is",max)


function maxno(){
    arr.sort((a,b) => a-b);
    return arr[arr.length-1];
}
console.log("Largest Element is",maxno(arr))



function maxno(){
    arr.sort((a,b) => b-a);
    return arr[0];
}
console.log("Largest Element is",maxno(arr))











