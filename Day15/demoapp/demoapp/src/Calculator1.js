export default function Calculator1({ num1,num2, f1 }) {
    
    function compute(e){
        switch(e.target.value){
            case "Add": let a=num1+num2
             f1(a);
            break;
            case "Sub": f1(num1-num2);
            break;
            case "Mul": f1(num1*num2);
            break;
            case "Div": f1(num1/num2);
            break;
        }
    }
    return (
        <div className="outline">
            <select>
                <option value ="Add">Addition</option>
                <option value ="Sub">Subtraction</option>
                <option value ="Mul">Multiplication</option>
                <option value ="Div">Division</option>
            </select>
        </div>
    );
}
