import React from "react";

import { DatePicker, Edit, Form, Input, useForm } from "@pankod/refine-antd";
import { IUser } from "interfaces";
import dayjs, { Dayjs } from "dayjs";

export const UserEdit = () => {
  const { formProps, saveButtonProps } = useForm<IUser>();

  const disabledDate = (current: Dayjs) => {
    return current && current > dayjs().endOf("day");
  };

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="First name"
          name="firstName"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last name"
          name="lastName"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
          <Input disabled />
        </Form.Item>

        <Form.Item
          label="Birthday"
          name="birthday"
          rules={[{ required: true }]}
          getValueProps={(value) => ({
            value: value ? dayjs(value) : "",
          })}
        >
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            showTime
            disabledDate={disabledDate}
          />
        </Form.Item>
      </Form>
    </Edit>
  );
};
