export default function ChildComponent({name,email,f1})
{
    function compute(e)
    {
        switch(e.target.value)
        {
            case "G" : let g = [
                " [Graduation,",
                "Year :2025,",
                "Score:89,",
                "University :SPPU]"
            ]
                        
                         f1(g)
                         break;
            case "UG" : let ug =[
                " [SSc :2018,",
                "HSC : 2021]"
            ]
                         f1(ug)
                         break;
            case "PG" : let pg =[ 
                " [Year :2027,",
                "Subject : Math]" ]
                         f1(pg)
                         break;
            default:break;
           
    }
    }
    return <div className="outline"> 
        <h5>Select Education</h5>
        <select  onChange={compute}>
            <option value="G">Graduation</option>
            <option value="UG">UnderGraduation</option>
            <option value="PG">PostGraduation</option>
        </select>
    </div>
} 