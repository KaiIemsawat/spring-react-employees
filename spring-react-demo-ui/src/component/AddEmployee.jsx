import { useState } from "react";
import EmployeeService from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        id: "",
        firstname: "",
        lastname: "",
        emailAddress: "",
    });

    const nav = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    };

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
            .then((res) => {
                console.log(res);
                nav("/");
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const clearData = (e) => {
        e.preventDefault();
        setEmployee({ id: "", firstname: "", lastname: "", emailAddress: "" });
    };

    return (
        <div className="flex max-w-2xl shadow-md rounded-md mx-auto bg-slate-100 my-8">
            <div className="p-8 flex flex-col gap-2 w-full">
                <div className="font-thin text-3xl tracking-wider text-slate-400 flex justify-center">
                    <h1 className="font-semibold">Add new employee</h1>
                </div>
                <div className="flex-col justify-center h-14 w-full my-4 flex">
                    <label htmlFor="" className="text-slate-600 block">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        value={employee.firstname}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-full border mt-2 rounded-md p-2"
                    />
                </div>
                <div className="flex-col justify-center h-14 w-full my-4 flex">
                    <label htmlFor="" className="text-slate-600 block">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastname"
                        value={employee.lastname}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-full border mt-2 rounded-md p-2"
                    />
                </div>
                <div className="flex-col justify-center h-14 w-full my-4 flex">
                    <label className="text-slate-600 block">E-mail</label>
                    <input
                        type="email"
                        name="emailAddress"
                        value={employee.emailAddress}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-full border mt-2 rounded-md p-2"
                    />
                </div>
                <div className="items-center h-14 w-full flex justify-between">
                    <div className="flex gap-3">
                        <button
                            onClick={() => nav("/")}
                            className="border border-slate-200 rounded-md text-slate-800 bg-slate-200 px-6 py-2 font-semibold hover:border-slate-500 duration-300"
                        >
                            Back
                        </button>
                        <button
                            onClick={clearData}
                            className="border border-slate-200 rounded-md text-slate-800 bg-slate-200 px-6 py-2 font-semibold hover:border-slate-500 duration-300"
                        >
                            Clear
                        </button>
                    </div>
                    <button
                        onClick={saveEmployee}
                        type="submit"
                        className="rounded-md text-slate-200 bg-slate-800 px-6 py-2 font-semibold hover:bg-slate-500 duration-300"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};
export default AddEmployee;
