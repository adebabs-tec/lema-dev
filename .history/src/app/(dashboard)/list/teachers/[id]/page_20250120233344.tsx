const SinglePage = () => {
  return (
    <div className="flex-1 flex flex-col p-4 xl:flex-row gap-4">
      {/* LEFT  */}
      <div className="w-full xl:w-2/3">
        {/* TOP  */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER CARD INFO  */}
          <div className="bg-lemaSky py-6 px-4 rounded-md flex-1 flex gap-4"></div>
          {/* SMALL CARDS  */}
          <div className="flex-1"></div>
        </div>
        {/* BOTTOM  */}
        <div className="">Schedule</div>
      </div>
      {/* RIGHT  */}
      <div className="w-full xl:w-1/3">r</div>
    </div>
  );
};

export default SinglePage;
