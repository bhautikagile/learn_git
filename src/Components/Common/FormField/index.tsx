import { Col, Form, Input } from "antd";
import { IFormItems, IRenderInputProps } from "./types";
import React from "react";

export const RenderTextInput: React.FC<IFormItems & IRenderInputProps> = (props) => {

  const { col, name, size } = props;

  return (
    <Col md={col?.md ?? col} {...col}>
      <Form.Item
        {...props.fitems}
        name={name ?? ''}
        labelCol={{ span: 24 }}
      >
        <Input {...props} size={size ?? 'middle'} />
      </Form.Item>
    </Col>
  )
}

export const RenderPasswordInput: React.FC<IRenderInputProps> = (props) => {

  const { col, name, size } = props;

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <Col md={col?.md ?? col} {...col}>
      <Form.Item
        {...props.fitems}
        name={name ?? ''}
        labelCol={{ span: 24 }}
      >
        <Input.Password
          {...props}
          size={size ?? 'middle'}
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible
          }}
        />
      </Form.Item>
    </Col>
  )
}