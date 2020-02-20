import React from "react";
import PropTypes from "prop-types";
import { Button, Form, Input, Radio, Row, Col } from "antd";

const defUserValues = {
  accNum: null,
  category: "Sales",
  vatPer: "",
  vatCatCode: null,
  accName: "",
  exRevClass: "",
  exTaxCode: "",
  comment: ""
};

const UserForm = ({ form, onSave, onClose, onRemove, data }) => {
  const values = data ? { ...data } : defUserValues; // if don`t have data set default and it means show form for new user

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, data) => {
      if (!err) {
        onSave({ ...data, id: values.id }, form.getFieldsValue());
      }
    });
  };

  const handleReset = id => {
    onClose(id);
  };

  return (
    <Col span={24}>
      <Form onSubmit={handleSubmit}>
        <Form.Item labelCol={{ span: 8 }} label="Account number">
          <Col span={16}>
            {form.getFieldDecorator("accNum", {
              initialValue: values.accNum,
              rules: [{ required: true, message: "Please type some number" }]
            })(<Input type="number" />)}
          </Col>
        </Form.Item>
        <Form.Item labelCol={{ span: 8 }} label="Category">
          {form.getFieldDecorator("category", {
            initialValue: values.category
          })(
            <Radio.Group buttonStyle="solid">
              <Radio.Button value="Sales">Sales</Radio.Button>
              <Radio.Button value="Purchases">Purchases</Radio.Button>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item labelCol={{ span: 8 }} label="Vat percentage">
          <Col span={16}>
            {form.getFieldDecorator("vatPer", {
              initialValue: values.vatPer,
              rules: [
                { required: true, message: "Please type some percentage" }
              ]
            })(<Input type="number" addonAfter={<div>%</div>} />)}
          </Col>
        </Form.Item>
        <Form.Item labelCol={{ span: 8 }} label="Vat category code">
          <Col span={16}>
            {form.getFieldDecorator("vatCatCode", {
              initialValue: values.vatCatCode
            })(<Input type="number" />)}
          </Col>
        </Form.Item>

        <Form.Item labelCol={{ span: 8 }} label="Account name">
          <Col span={16}>
            {form.getFieldDecorator("accName", {
              initialValue: values.accName,
              rules: [{ required: true, message: "Please type some name" }]
            })(<Input />)}
          </Col>
        </Form.Item>

        <Form.Item labelCol={{ span: 8 }} label="External revenue class">
          <Col span={16}>
            {form.getFieldDecorator("exRevClass", {
              initialValue: values.exRevClass
            })(<Input />)}
          </Col>
        </Form.Item>

        <Form.Item labelCol={{ span: 8 }} label="External tax code">
          <Col span={16}>
            {form.getFieldDecorator("exTaxCode", {
              initialValue: values.exTaxCode
            })(<Input />)}
          </Col>
        </Form.Item>

        <Form.Item labelCol={{ span: 8 }} label="Comment">
          <Col span={16}>
            {form.getFieldDecorator("comment", {
              initialValue: values.comment
            })(<Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} />)}
          </Col>
        </Form.Item>

        <Form.Item>
          <Row>
            <Col span={12} style={{ textAlign: "left" }}>
              {values.id && (
                <Button
                  type="link"
                  icon="delete"
                  onClick={() => onRemove(values.id)}
                />
              )}
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              <Button onClick={() => handleReset(values.id)}>Cancel</Button>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Col>
  );
};

UserForm.propTypes = {
  form: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Form.create()(UserForm);
