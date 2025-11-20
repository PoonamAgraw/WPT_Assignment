import { useCallback, useEffect, useState } from "react";
const funcSet = new Set();

const DemoCallBack = () => {
    const [cnt, setCnt] = useState(0);
    const [num, setNum] = useState(0);
    const incCount =useCallback(()=>setCnt((prevcnt)=>prevcnt+1),[]);
    const incCnt1 = useCallback(() => setCnt(cnt + 1), [cnt]);
    const decCount =useCallback(()=>{setCnt(cnt-1)},[]);
    const incNum =useCallback(()=>{setNum(num+1)},[num]);
    funcSet.add(incCount);
    funcSet.add(decCount);
    funcSet.add(incNum);
   
    return (<>
    <div>
    <h2>Without useCallback Hook</h2>
    <button onClick={incCount}> Increase Count</button>
    <button onClick={decCount}> Decrease Count</button>
    <button onClick={incNum}> Increase Number</button>
    <h1>Count : {cnt}</h1>
            <h1>Number : {num}</h1>
            <h2>Set Size  : {funcSet.size}</h2>
   </div> </>)
    
}
export default DemoCallBack;