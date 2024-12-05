import React, { useContext, useEffect, useState } from "react";
import { WarehouseContext } from "./WarehouseContext";
import Head from "../../layout/head/Head";
import Content from "../../layout/content/Content";
import {
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  PreviewCard,
  ReactDataTable,
} from "../../components/Component";
import { getWarehouseItemList } from "../../services/warehousesServices";
import { useLocation } from "react-router-dom";

const WarehouseTable = () => {
  const location = useLocation();
  const selectedWarehouse = location.state || {};
  const [itemData, setItemData] = useState([]);
  const fetchWarehouseItemList = async () => {
    try {
      const response = await getWarehouseItemList();
      setItemData(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchWarehouseItemList();
  }, []);
  const columnsData = [
    {
      name: "Item name",
      selector: (row) => row.item_name,
    },
    {
      name: "Carton Count",
      selector: (row) => row.pack_size,
    },
  ];
  return (
    <>
      <Head title="Blank Page" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Warehouses Location: {`${selectedWarehouse?.warehouse}>>${selectedWarehouse?.cartonsName}`}
              </BlockTitle>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <PreviewCard>
          <ReactDataTable data={itemData} columns={columnsData} pagination />
        </PreviewCard>
      </Content>
    </>
  );
};

export default WarehouseTable;
