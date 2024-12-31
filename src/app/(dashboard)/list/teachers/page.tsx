"use client";

import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

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
    className: "hidden md:table-cell",
  },
  {
    header: "Address",
    accessor: "addressId",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actionsId",
    className: "hidden md:table-cell",
  },
];

type Teacher = {
  id: number;
  info: string;
  teacherId: string;
  name: string;
  photo: string;
  email: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const TeacherListPage = () => {
  const renderRow = (item: Teacher) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lemaPurpleLight"
      >
        <td className="flex items-center gap-4 p-4">
          <Image
            src={item.photo}
            alt=""
            width={40}
            height={40}
            className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold">{item?.name}</h3>
            <p className="text-xs text-gray-500">{item?.email}</p>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.teacherId}</td>
        <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
        <td className="hidden md:table-cell">{item.classes.join(",")}</td>
        <td className="hidden md:table-cell">{item.phone}</td>
        <td className="hidden md:table-cell">{item.address}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lemaSky">
                <Image src="/view.png" alt="" width={16} height={16} />
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
            {role === "admin" && (
              <button className="flex items-center justify-center rounded-full h-8 w-8 bg-lemaYellow">
                <Image src="/plus.png" alt="" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST  */}
      <Table columns={columns} renderRow={renderRow} data={teachersData} />
      {/* PAGINATION  */}
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
