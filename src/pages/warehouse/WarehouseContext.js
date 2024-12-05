import { createContext, useEffect, useState } from "react";
import { getWarehouseList } from "../../services/warehousesServices";
import { Outlet } from "react-router-dom";

export const WarehouseContext = createContext();

const WarehouseProvider = () => {
  const [warehouseData, setWarehouseData] = useState(null);

  const fetchWarehouseList = async () => {
    try {
      const response = await getWarehouseList();
      if (response.statusCode === 200) {
        setWarehouseData(response.data);
      }
    } catch (error) {
      console.log("console_warehouse_error", error);
    }
  };

  useEffect(() => {
    fetchWarehouseList();
  }, []);

  const value = { warehouseData };
  return (
    <WarehouseContext.Provider value={value}>
      <Outlet />
    </WarehouseContext.Provider>
  );
};
export default WarehouseProvider;
