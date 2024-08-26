import React, { useState } from "react";
import mm from "../../../assets/img/mm.jpg";
import "./TableSection.scss";
import * as XLSX from "xlsx";

export const TableSection = () => {
  const [MYName, setMyName] = useState([
    { Name: "Mohammed BENNAOUI", Number: "5535", Service: "TRANSMISSION" },
    { Name: "Adil LYAMANI", Number: "5533", Service: "TRANSMISSION" },
    { Name: "Mohammed Mounkid", Number: "5048", Service: "TRANSMISSION" },
    { Name: "Morad GAOUT", Number: "5075", Service: "TRANSMISSION" },
    { Name: "Karim EL IDRISSI", Number: "5950", Service: "TRANSMISSION" },
    { Name: "Abdelletif AARAB", Number: "5998", Service: "TRANSMISSION" },
    { Name: "Aidi SADEQ", Number: "5041", Service: "TRANSMISSION" },
    { Name: "Hakim KAZZOUZ", Number: "5915", Service: "TRANSMISSION" },
    { Name: "Adil ZNIBER", Number: "5958", Service: "TRANSMISSION" },
    { Name: "Mohcine IDSIHAMMOU", Number: "5608", Service: "TRANSMISSION" },
    { Name: "El Mehdi SAMOTA", Number: "5413", Service: "TRANSMISSION" },
    { Name: "Abdellatif SALMANE", Number: "5872", Service: "TRANSMISSION" },
    { Name: "Mohamed MAHRAOUI", Number: "5882", Service: "TRANSMISSION" },
    { Name: "Mohamed SABIL", Number: "5367", Service: "TRANSMISSION" },
    { Name: "Ilyas JEBBOUJI", Number: "5879", Service: "TRANSMISSION" },
  ]);

  const [filter, setFilter] = useState("");

  // Handle input change for filter
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filter the list based on the filter state
  const filteredNames = MYName.filter((employee) =>
    employee.Name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
<body className="dark">
    <div className="max-w-2xl mx-auto text-center  p-3">
        <h1 className="text-3xl mt-4 leading-relaxed font-bold text-white ">
          CODE TELEPHONE PERSONNEL MCR BOOKING
        </h1>
        {/* Filter Input */}
       
        <input
          class="bg-zinc-200 text-zinc-600 font-mono ring-1  ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500"
          autocomplete="off"
          placeholder="Search here..."
          name="text"
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
        
      </div>

      <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen  dark p-4">
        <div className="h-full">
          {/* Table */}
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">EMPLOYEES</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">Name</th>
                      <th className="p-2 whitespace-nowrap">SERVICE</th>
                      <th className="p-2 whitespace-nowrap">N.Code</th>
                      <th className="p-2 whitespace-nowrap country">Country</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {filteredNames.map((employee, index) => (
                      <tr key={index}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src={mm}
                                width="40"
                                height="40"
                                alt="Employee"
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              {employee.Name}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{employee.Service}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            {employee.Number}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap country">
                          <div className="text-lg text-center">Ma</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
</body>
      
    </>
  );
};
