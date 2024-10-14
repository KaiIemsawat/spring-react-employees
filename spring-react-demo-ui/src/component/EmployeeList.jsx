import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

const EmployeeList = () => {
    const nav = useNavigate();

    const [loading, setloading] = useState(true);
    const [employees, setemployees] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setloading(true);
            try {
                const res = await EmployeeService.getEmployee();
                console.log(res.data);
                setemployees(res.data);
            } catch (error) {
                console.error(error);
            }
            setloading(false);
        };
        fetchData();
    }, []);

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
                    <tbody>
                        <tr className="bg-[#cdd3d3] text-slate-800 h-12 text-lg">
                            <td className="text-left px-6 py-2 whitespace-nowrap">
                                <div className="">testname</div>
                            </td>
                            <td className="text-left px-6 py-2 whitespace-nowrap">
                                <div className="">testname</div>
                            </td>
                            <td className="text-left px-6 py-2 whitespace-nowrap">
                                <div className="">testname</div>
                            </td>
                            <td className="text-right pr-6 py-2 whitespace-nowrap font-semibold flex justify-end gap-4">
                                <a
                                    href="#"
                                    className="text-slate-600 hover:text-amber-500 hover:underline duration-300"
                                >
                                    Edit
                                </a>
                                <a
                                    href="#"
                                    className="text-slate-500 hover:text-rose-500 hover:underline duration-300"
                                >
                                    Delete
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default EmployeeList;
