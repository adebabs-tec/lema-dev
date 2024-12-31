import Image from "next/image";
import React from "react";

const SingleTeachersPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT  */}
      <div className="w-full xl:w-2/3">
        {/* TOP  */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD  */}
          <div className="bg-lemaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://www.pexels.com/photo/a-woman-in-a-hijab-holding-flowers-15987200/"
                alt=""
                width={144}
                height={144}
                className="w-34 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w/2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Ashabi Odun</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span></span>
                </div>
                <div className="">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span></span>
                </div>
                <div className="">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span></span>
                </div>
                <div className="">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS  */}
          <div className=""></div>
        </div>
        {/* BOTTOM  */}
        <div className="">schedule</div>
      </div>
      {/* RIGHT  */}
      <div className="w-full xl:w-1/3">r</div>
    </div>
  );
};

export default SingleTeachersPage;
