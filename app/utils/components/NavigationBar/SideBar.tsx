import React from "react";
function SideBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-no-wrap">
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div className="w-12 absolute sm:relative bg-gray-800 shadow flex-col justify-between hidden sm:flex h-screen"></div>
      {/* Sidebar ends */}
      {/* Remove class [ h-64 ] when adding a card block */}
      <div className="container mx-auto h-screen md:w-4/5 w-11/12">
        {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
        {children}
      </div>
    </div>
  );
}

export default SideBar;
