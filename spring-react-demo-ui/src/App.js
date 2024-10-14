import "./App.css";
import AddEmployee from "./component/AddEmployee";
import Navbar from "./component/Navbar";

function App() {
    return (
        <div className="bg-stone-400 h-screen">
            <Navbar />
            <AddEmployee />
        </div>
    );
}

export default App;
