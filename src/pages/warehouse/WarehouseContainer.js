import React, { useContext } from "react";
import Head from "../../layout/head/Head";
import Content from "../../layout/content/Content";
import { BlockBetween, BlockHead, BlockHeadContent, BlockTitle, PreviewAltCard } from "../../components/Component";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";
import { WarehouseContext } from "./WarehouseContext";
import { useNavigate } from "react-router-dom";

const WarehouseContainer = () => {
  const { warehouseData } = useContext(WarehouseContext);
  const navigate = useNavigate();
  const onHandleWarehouseClick = () => {
    navigate("/warehouse/capacity");
  };
  return (
    <>
      <Head title="Blank Page" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Warehouses
              </BlockTitle>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Row className="g-gs">
          {warehouseData?.map((item, index) => (
            <Col sm="6" lg="4" xxl="3">
              <div style={{ cursor: index === 0 && "pointer" }} onClick={() => index === 0 && onHandleWarehouseClick()}>
                <Card
                  style={{
                    background: index === 0 ? "#1a78ff" : index === 1 ? "#f2426e" : "#198754",
                    borderRadius: "12px",
                  }}
                >
                  <CardBody style={{ color: "#fff" }}>
                    <CardTitle tag="h5" className="p-2">
                      {item.warehouse_name}
                    </CardTitle>
                    <CardText className="p-2">Pin:&nbsp;{item.pin}</CardText>
                  </CardBody>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Content>
    </>
  );
};

export default WarehouseContainer;
