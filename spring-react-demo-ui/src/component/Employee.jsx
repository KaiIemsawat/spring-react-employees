const Employee = ({ employee, deleteEmployee }) => {
    return (
        <tr
            className="bg-[#cdd3d3] text-slate-800 h-12 text-lg"
            key={employee.id}
        >
            <td className="text-left px-6 py-2 whitespace-nowrap">
                <div className="">{employee.firstname}</div>
            </td>
            <td className="text-left px-6 py-2 whitespace-nowrap">
                <div className="">{employee.lastname}</div>
            </td>
            <td className="text-left px-6 py-2 whitespace-nowrap">
                <div className="">{employee.emailAddress}</div>
            </td>
            <td className="text-right pr-6 py-2 whitespace-nowrap font-semibold flex justify-end gap-4">
                <a
                    href="#"
                    className="text-slate-600 hover:text-amber-500 hover:underline duration-300"
                >
                    Edit
                </a>
                <a
                    onClick={(e, id) => deleteEmployee(e, employee.id)}
                    className="text-slate-500 hover:text-rose-500 hover:underline duration-300 hover:cursor-pointer"
                >
                    Delete
                </a>
            </td>
        </tr>
    );
};
export default Employee;
