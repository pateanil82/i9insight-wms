import Head from "../../layout/head/Head";
import Content from "../../layout/content/Content";
import {
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  PreviewAltCard,
  PreviewCard,
} from "../../components/Component";
import { Card, CardBody, CardHeader, CardText, CardTitle, Col, Row } from "reactstrap";
import "./index.scss";
import { warehouseData } from "./data";
import { useNavigate } from "react-router-dom";

const WarehouseCapacity = () => {
  const navigate = useNavigate();
  return (
    <>
      <Head title="Blank Page" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Warehouse: Bangalore
              </BlockTitle>
              <BlockDes>Capacity Utilized :63%</BlockDes>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <PreviewCard>
          {warehouseData.map((item) => (
            <>
              <Row className="align-items-end">
                <Col md="2">
                  <PreviewAltCard>{item.name}</PreviewAltCard>
                </Col>
                <Col md="10">
                  <Row>
                    {item.children.map((childItem, index) => (
                      <Col
                        md="3"
                        onClick={() => {
                          (index === 0 || index === 1) &&
                            navigate("/warehouse/capacity/data", {
                              state: {
                                warehouse: item.name,
                                cartonsName: childItem.name,
                                cartonsCount: childItem.description,
                              },
                            });
                        }}
                        className={(index === 0 || index === 1) && "cursor-pointer"}
                      >
                        <PreviewAltCard bodyClass="p-0">
                          <Card
                            style={{
                              color: "#fff",
                              background:
                                Number(childItem.description) === 0
                                  ? "#198754"
                                  : Number(childItem.description) < 100
                                  ? "#0d6efd"
                                  : " #dc3545",
                            }}
                          >
                            <CardHeader className="warehouse-card-header">{childItem.name}</CardHeader>
                            <CardBody>
                              <CardText>No of Cartons: {childItem.description}</CardText>
                            </CardBody>
                          </Card>
                        </PreviewAltCard>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
              <div className="custom-divider" />
            </>
          ))}
        </PreviewCard>
      </Content>
    </>
  );
};

export default WarehouseCapacity;
