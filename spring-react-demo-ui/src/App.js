import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmployee from "./component/AddEmployee";
import Navbar from "./component/Navbar";
import EmployeeList from "./component/EmployeeList";

function App() {
    return (
        <div className="bg-stone-400 h-screen">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index element={<EmployeeList />} />
                    <Route path="/employeeLisst" element={<EmployeeList />} />
                    <Route path="/AddEmployee" element={<AddEmployee />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
