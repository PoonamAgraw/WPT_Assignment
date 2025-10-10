import { useEffect,useState } from "react";
import axios from 'axios';

const GetData =() =>{
const [data , setData] = useState([]);
const [error, setError] = useState(null);
const [showTable, setShowTable] = useState(false);

 const fetchData= () => {
       
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setData(response.data);
                setShowTable(true);
            })
            .catch((err) => {
                setError(err.message);

            });
    }
if(error)
    return(<div>
        Error:{error}
    </div>
)
return (
      <div style={{ textAlign: "center" }}>
            <button onClick={fetchData}>Click to display </button>
            <br></br>
            {showTable && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
);
};


export default GetData;