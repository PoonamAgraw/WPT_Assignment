var arr=[{fname:'prajakta',age:22,marks:55},
    {fname:'poonam',age:23,marks:19},
    {fname:'shan',age:25,marks:45}
]
console.log("before sort",arr)
arr.sort((s1,s2)=> {if(s1.marks>s2.marks)return 1;
    if(s1.marks<s2.marks)return -1;
    else return 0
}
)
console.log("after sort",arr)