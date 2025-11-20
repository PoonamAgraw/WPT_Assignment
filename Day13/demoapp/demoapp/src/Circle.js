export default function Circle(props){
    let r = parseFloat(props.Radius);
    let area = 3.14*r*r;
    return (<>
    <h3>Area of Circle is :{area}</h3>
    </>)
}