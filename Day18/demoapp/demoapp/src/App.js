// import logo from './logo.svg';
// import './App.css';
// import DemoCallBack from './Assignment1';
// import PasswordGenerator from './Assignment2';
// import ErrorBoundary from './Assignment3';

// function App() {
//   return (
//     <div className="App">
//       {/* <DemoCallBack></DemoCallBack> */}
//       <PasswordGenerator></PasswordGenerator>
//       {/* <ErrorBoundary></ErrorBoundary> */}
//     </div>
//   );
// }

// export default App;



import Counter from "./Counter";
import ErrorBoundary from './ErrorBoundry'

export default function AppDemo() {



    return (
        <>
            <ErrorBoundary>
                <Counter></Counter>
            </ErrorBoundary>
        </>
    )
}
