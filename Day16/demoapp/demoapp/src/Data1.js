export default function Data1({data,f1})
{
    function compute(){  
    let l =data.length;
    let str= data.split("  ",l)
    console.log(typeof str )
    f1(str);
    }

    return <div className="outline"> 
        <button  onClick={compute}>Click Me</button>
    </div>
}