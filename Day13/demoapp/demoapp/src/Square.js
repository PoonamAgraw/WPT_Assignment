export default function Square(props){
    let s = parseFloat(props.Side);
    let area = s*s;
    return (<>
    <h3>Area of Square is :{area}</h3>
    </>)
}