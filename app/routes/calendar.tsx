import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "../utils/utils";
// Componentes ---------------------------------------------------------------
import { MonthTable, SideTable } from "../utils/components/Calendar";
import { GlobalContext } from "~/context/GlobalContext";
export default function Index() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    console.log("monthIndex", monthIndex);
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      <div className="flex-1 flex-row grid grid-cols-3 gap-6">
        <MonthTable month={currentMonth} />
        <SideTable />
      </div>
    </>
  );
}
