import React from "react";

import { useShow } from "@pankod/refine-core";
import { Show, Typography, Tag, Image, DateField } from "@pankod/refine-antd";
import { IUser } from "interfaces";

const { Title, Text } = Typography;

export const UserShow = () => {
  const { queryResult } = useShow<IUser>();
  const { data, isLoading } = queryResult;
  const record = data?.data;
  console.log("record", record);
  return (
    <Show isLoading={isLoading}>
      <Image.PreviewGroup>
        <Image width={125} src={record?.avatar[0]?.url} />
      </Image.PreviewGroup>
      <Title level={5}>Name</Title>
      <Text>
        {record?.firstName ??
          record?.firstName + ` ` + record?.lastName ??
          record?.lastName}
      </Text>

      <Title level={5}>Email</Title>
      <Text>{record?.email}</Text>

      <Title level={5}>Status</Title>
      <Text>
        <Tag>{record?.status}</Tag>
      </Text>

      <Title level={5}>Birth date</Title>
      <DateField value={record?.birthday} format="LLL" />
    </Show>
  );
};
