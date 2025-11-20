export default function Rectangle(props){
    let l = parseFloat(props.Length);
    let b = parseFloat(props.Breadth)
    let area = l*b;
    return (<>
    <h3>Area of Rectangle is :{area}</h3>
    </>)
}