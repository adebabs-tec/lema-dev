"use client";

import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, subjectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Teachers",
    accessor: "teachersIs",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "ActionsId",
    className: "hidden md:table-cell",
  },
];

type Teacher = {
  id: number;
  name: string;
  teachers: string[];
};

const SubjectsListPage = () => {
  const renderRow = (item: Teacher) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lemaPurpleLight"
      >
        <td>
          <h3 className="font-semibold p-4">{item?.name}</h3>
        </td>
        <td className="hidden md:table-cell">{item.teachers.join(",")}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lemaSky">
                <Image src="/edit.png" alt="" width={16} height={16} />
              </button>
            </Link>
            {role === "admin" && (
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lemaPurple">
                <Image src="/delete.png" alt="" width={16} height={16} />
              </button>
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP SECTION  */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold hidden md:block">All Students</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="flex items-center justify-center rounded-full h-8 w-8 bg-lemaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="flex items-center justify-center rounded-full h-8 w-8 bg-lemaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              <button className="flex items-center justify-center rounded-full h-8 w-8 bg-lemaYellow">
                <Image src="/plus.png" alt="" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST  */}
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />
      {/* PAGINATION  */}
      <Pagination />
    </div>
  );
};

export default SubjectsListPage;
