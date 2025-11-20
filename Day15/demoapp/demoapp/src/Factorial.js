export default function Factorial(props){
const msg="Factorial Of 5 is:"
let fact=1;

    for(let i=1;i<=props.num;i++){
    fact= fact*i;  
};


return (
    <>
    <h3> {msg} {fact}</h3>
    
    </>
)

}