import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
    const nav = useNavigate();

    const [loading, setloading] = useState(true);
    const [employees, setemployees] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setloading(true);
            try {
                const res = await EmployeeService.getEmployee();
                // console.log(res.data);
                setemployees(res.data);
            } catch (error) {
                console.error(error);
            }
            setloading(false);
        };
        fetchData();
    }, []);

    const deleteEmployee = (e, id) => {
        e.preventDefault();
        EmployeeService.deleteEmployee(id).then((res) => {
            if (employees) {
                setemployees((prevEmployees) => {
                    return prevEmployees.filter(
                        (employee) => employee.id !== id
                    );
                });
            }
        });
    };

    return (
        <div className="container mx-auto my-6 max-w-[1240px] px-16">
            <div className="h-12">
                <button
                    onClick={() => nav("/AddEmployee")}
                    className="rounded-md text-slate-200 bg-slate-800 px-6 py-2 font-semibold hover:bg-slate-500 duration-300"
                >
                    Add Employee
                </button>
            </div>
            <div className="flex shadow-md border-b border-stone-500">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-[#aab3b3] font-semibold text-slate-600 h-12 text-lg uppercase tracking-wider">
                            <th className="text-left ps-6">
                                <p>Firstname</p>
                            </th>
                            <th className="text-left ps-6">
                                <p>Lastname</p>
                            </th>
                            <th className="text-left ps-6">
                                <p className="line-clamp-1">Email Address</p>
                            </th>
                            <th className="text-right pr-6">Actions</th>
                        </tr>
                    </thead>
                    {!loading && (
                        <tbody>
                            {!!employees &&
                                employees.map((employee) => (
                                    <Employee
                                        deleteEmployee={deleteEmployee}
                                        employee={employee}
                                        key={employee.id}
                                    />
                                ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};
export default EmployeeList;
