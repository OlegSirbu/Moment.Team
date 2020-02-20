import React from "react";
import { Button, Form, Input, Radio, Row, Col } from "antd";

const defUserValues = {
  accNum: null,
  category: "Sales",
  vatPer: null,
  vatCatCode: null,
  accName: "",
  exRevClass: "",
  exTaxCode: "",
  comment: ""
};

const UserForm = ({
  form,
  onSave,
  onClose,
  onRemove,
  data: { ...values } = defUserValues
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSave(values.id, form.getFieldsValue()); // if have id need to update or create new user
  };

  const handleReset = id => {
    // form.resetFields();
    onClose(id);
  };

  return (
    <Col span={24}>
      <Form onSubmit={handleSubmit}>
        <Form.Item labelCol={{ span: 8 }} label="Account number">
          <Col span={16}>
            {form.getFieldDecorator("accNum", {
              initialValue: values.accNum
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
              initialValue: values.vatPer
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
              initialValue: values.accName
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
            })(
              <Input.TextArea
                autoSize={{ minRows: 3, maxRows: 5 }}
                autoSize="textarea"
              />
            )}
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

export default Form.create()(UserForm);
