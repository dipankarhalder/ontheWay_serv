import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import trans from "../../../data/trans.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Transactions", path: "/" },
];

export const InvoicePage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const invoiceTableData =
    trans &&
    trans.map((item) => ({
      id: item.id,
      userId: item.userId,
      transactionType: item.transactionType,
      amount: `Rs. ${item.amount}/-`,
      paymentMethod: item.paymentMethod,
      ride_Id: item.rideId,
      date: item.date,
    }));

  const tableHeaders =
    invoiceTableData.length > 0
      ? Object.keys(invoiceTableData[0]).filter((key) => key !== "image")
      : [];

  const [visibleColumns, setVisibleColumns] = useState(() =>
    tableHeaders.reduce((acc, col) => {
      acc[col] = true;
      return acc;
    }, {})
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleColumns((prev) => ({
        ...prev,
        id: false,
        s_id: false,
        description: false,
      }));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppMainLayoutCover>
      <AppTableDataInformation>
        <TableInfo
          pageTitle={"Manage Transactions"}
          pagePath={pagePaths}
          data={invoiceTableData}
          addTextItem={"Add New"}
          handleAddItems={handleAddItems}
          sortableColumns={["student_name", "course", "info"]}
          viewBtn={"student_name"}
          enableStatus={true}
          filterableColumns={["course", "info"]}
          visibleColumns={visibleColumns}
          onToggleColumn={(col) =>
            setVisibleColumns((prev) => ({
              ...prev,
              [col]: !prev[col],
            }))
          }
          onAction={handleBtnAction}
        />
      </AppTableDataInformation>
    </AppMainLayoutCover>
  );
};
