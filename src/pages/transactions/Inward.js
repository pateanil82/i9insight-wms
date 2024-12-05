import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { toast } from "react-toastify";

import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

import { Col, PreviewCard, Row, RSelect } from "../../components/Component";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { FormGroup, Label, Button, Spinner } from "reactstrap";

import * as yup from "yup";
import { getInwardItem } from "../../services/transactionsServices";
import { getWarehouseItemList } from "../../services/warehousesServices";

const StyledErrorMessage = styled.span`
  color: #e85347;
  font-size: 11px;
  font-style: italic;
`;

const inwardItemSchema = yup.object().shape({
  item_code: yup.object().required("Field is required"),
  qty: yup.number().typeError("Quantity must be a number").required("Field is required"),
  wh_code: yup.number().typeError("Warehouse code must be a number").required("Field is required"),
  doc_no: yup.number().typeError("Document number must be a number").required("Field is required"),
  vehicle_no: yup.string().required("Field is required"),
});

const Inward = () => {
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (data, { resetForm }) => {
    setLoading(true);
    const params = {
      item_code: data.item_code.item_code,
      qty: data.qty,
      wh_code: data.wh_code,
      doc_no: data.doc_no,
      vehicle_no: data.vehicle_no,
    };
    try {
      const response = await getInwardItem(params);
      if (response.statusCode === 200) {
        resetForm();
        setLoading(false);
        toast.success("Inward item created successfully");
      }
    } catch (err) {
      console.log("console_error", err);
      toast.error(`${err.message}`);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head title="Transactions - Inward" />
      <Content>
        <PreviewCard className="h-100">
          <Formik
            initialValues={{
              item_code: "",
              qty: "",
              wh_code: "",
              doc_no: "",
              vehicle_no: "",
            }}
            validationSchema={inwardItemSchema}
            onSubmit={(values, { resetForm }) => handleSubmit(values, { resetForm })}
          >
            {() => (
              <Form>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label htmlFor="item_code">
                        Item Name<span className="text-danger"> *</span>
                      </Label>
                      <Field name="item_code" className="form-control">
                        {({ field, form }) => (
                          <>
                            <RSelect
                              {...field}
                              placeholder="Item Name"
                              isClearable
                              onChange={(value) => {
                                form.setFieldValue(field.name, value);
                              }}
                              options={itemData}
                              getOptionLabel={(item) => item.item_name}
                              getOptionValue={(item) => item.item_code}
                              value={field.value}
                            />
                          </>
                        )}
                      </Field>
                      <ErrorMessage name="item_code" component={StyledErrorMessage} className="invalid" />
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Label>
                        Quantity<span className="text-danger"> *</span>
                      </Label>
                      <Field type="number" name="qty" className="form-control" />
                      <ErrorMessage name="qty" component={StyledErrorMessage} className="invalid" />
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Label>
                        WH Code<span className="text-danger"> *</span>
                      </Label>
                      <Field type="number" name="wh_code" className="form-control" />
                      <ErrorMessage name="wh_code" component={StyledErrorMessage} className="invalid" />
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Label>
                        Document number<span className="text-danger"> *</span>
                      </Label>
                      <Field type="number" name="doc_no" className="form-control" />
                      <ErrorMessage name="doc_no" component={StyledErrorMessage} className="invalid" />
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Label>
                        Vehicle number<span className="text-danger"> *</span>
                      </Label>
                      <Field name="vehicle_no" className="form-control" />
                      <ErrorMessage name="vehicle_no" component={StyledErrorMessage} className="invalid" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Label>Plant Name</Label>
                      <Field name="plant_name" className="form-control" />
                      <ErrorMessage name="plant_name" component={StyledErrorMessage} className="invalid" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Label>Doc no</Label>
                      <Field name="doc-no" className="form-control" />
                      <ErrorMessage name="doc-no" component={StyledErrorMessage} className="invalid" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Label>Date</Label>
                      <Field name="date" type="date" className="form-control" />
                      <ErrorMessage name="date" component={StyledErrorMessage} className="invalid" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Label>Batch no</Label>
                      <Field name="batch-no" className="form-control" />
                      <ErrorMessage name="batch-no" component={StyledErrorMessage} className="invalid" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Label>Lot no</Label>
                      <Field name="lot-no" className="form-control" />
                      <ErrorMessage name="lot-no" component={StyledErrorMessage} className="invalid" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Label>Expiry Date</Label>
                      <Field name="expirydate" type="date" className="form-control" />
                      <ErrorMessage name="expirydate" component={StyledErrorMessage} className="invalid" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Label>Qty</Label>
                      <Field name="qty" className="form-control" />
                      <ErrorMessage name="qty" component={StyledErrorMessage} className="invalid" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Label>Pack Type</Label>
                      <Field name="packType" className="form-control" />
                      <ErrorMessage name="packType" component={StyledErrorMessage} className="invalid" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Label>Pack Size</Label>
                      <Field name="packSize" className="form-control" />
                      <ErrorMessage name="packSize" component={StyledErrorMessage} className="invalid" />
                    </FormGroup>
                  </Col>
                  <Col className="col-12">
                    <ul className="align-center justify-content-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                      <li>
                        <Button color="primary" size="md" type="submit" disabled={loading}>
                          {loading && <Spinner size="sm" />}
                          Submit
                        </Button>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </PreviewCard>
      </Content>
    </>
  );
};

export default Inward;
