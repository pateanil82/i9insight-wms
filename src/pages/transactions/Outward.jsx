import React, { useState } from "react";
import styled from "styled-components";

import { toast } from "react-toastify";

import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

import { Col, PreviewCard, Row } from "../../components/Component";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { FormGroup, Label, Button, Spinner } from "reactstrap";

import * as yup from "yup";
import { getOutwardItem } from "../../services/transactionsServices";

const StyledErrorMessage = styled.span`
  color: #e85347;
  font-size: 11px;
  font-style: italic;
`;

const outwardItemSchema = yup.object().shape({
  item_code: yup.string().required("Field is required"),
  qty: yup.string().matches(/^\d+$/, "Only numbers").required("Field is required"),
  wh_code: yup.string().matches(/^\d+$/, "Only numbers").required("Field is required"),
  doc_no: yup.string().matches(/^\d+$/, "Only numbers").required("Field is required"),
  customer_name: yup.string().required("Field is required"),
});

const Outward = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data, { resetForm }) => {
    setLoading(true);
    const params = {
      item_code: data.item_code,
      qty: data.qty,
      wh_code: data.wh_code,
      doc_no: data.doc_no,
      customer_name: data.customer_name,
    };
    try {
      const response = await getOutwardItem(params);
      console.log("console_response", response);
      if (response.statusCode === 200) {
        resetForm();
        setLoading(false);
        toast.success("Outward item created successfully");
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
      <Head title="Transactions - Outward" />
      <Content>
        <PreviewCard className="h-100">
          <Formik
            initialValues={{
              item_code: "",
              qty: "",
              wh_code: "",
              doc_no: "",
              customer_name: "",
            }}
            validationSchema={outwardItemSchema}
            onSubmit={(values, { resetForm }) => handleSubmit(values, { resetForm })}
          >
            {() => (
              <Form>
                <Row>
                  <Col md={6}>
                    <FormGroup className="form-group">
                      <Label>
                        Item code<span className="text-danger"> *</span>
                      </Label>
                      <Field type="text" name="item_code" className="form-control" />
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
                </Row>

                <Row>
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
                </Row>

                <Row>
                  <Col className="col-12">
                    <FormGroup className="form-group">
                      <Label>
                        Customer name<span className="text-danger"> *</span>
                      </Label>
                      <Field name="customer_name" className="form-control" />
                      <ErrorMessage name="customer_name" component={StyledErrorMessage} className="invalid" />
                    </FormGroup>
                  </Col>
                </Row>

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
              </Form>
            )}
          </Formik>
        </PreviewCard>
      </Content>
    </>
  );
};

export default Outward;
