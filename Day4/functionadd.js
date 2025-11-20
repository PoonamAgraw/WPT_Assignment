function add(...n){
    let sum=0;
    for(let i=0;i<n.length;i++){
        sum = sum +n[i];
    }
    console.log("Addition of"+(n.length)+"is:");
    console.log(sum);
     for(let i=0;i<n.length;i++){
    if(n[i]%2==1){
        console.log(n[i]);
    }
}
}

add(4,9,236);
add(76,3,34,65);