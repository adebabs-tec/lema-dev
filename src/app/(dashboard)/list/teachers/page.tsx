"use client";

import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjectId",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classesId",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phoneId",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "addressId",
    className: "hidden lg:table-cell",
  },
  {
    header: "Phone",
    accessor: "phoneId",
    className: "hidden lg:table-cell",
  },
];

const TeacherListPage = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP SECTION  */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold hidden md:block">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="flex items-center justify-center rounded-full h-8 w-8 bg-lemaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="flex items-center justify-center rounded-full h-8 w-8 bg-lemaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="flex items-center justify-center rounded-full h-8 w-8 bg-lemaYellow">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* LIST  */}
      <Table />
      {/* PAGINATION  */}
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
