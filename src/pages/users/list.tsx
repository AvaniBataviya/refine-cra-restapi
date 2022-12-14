import React from "react";

import {
  BooleanField,
  DateField,
  DeleteButton,
  EditButton,
  getDefaultSortOrder,
  Icons,
  List,
  ShowButton,
  Space,
  Table,
  TextField,
  useTable,
} from "@pankod/refine-antd";
import { IResourceComponentsProps } from "@pankod/refine-core";
import { IUser } from "interfaces";

export const UserList: React.FC<IResourceComponentsProps> = () => {
  const { CloseCircleOutlined, CheckCircleOutlined } = Icons;

  const { tableProps, sorter } = useTable<IUser>({
    initialSorter: [
      {
        field: "id",
        order: "desc",
      },
    ],
  });
  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          key="id"
          title="ID"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("id", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="firstName"
          title="Name"
          render={(_, record: IUser) => {
            const name = record.firstName
              ? `${record.firstName} ${record.lastName}`
              : record.lastName
              ? record.lastName
              : "";
            return <TextField value={name} />;
          }}
        />
        <Table.Column dataIndex="email" title="email" />
        <Table.Column
          dataIndex="status"
          title="Status"
          render={(value) => (
            <BooleanField
              value={value === "published"}
              trueIcon={<CheckCircleOutlined twoToneColor="#52c41a" />}
              falseIcon={<CloseCircleOutlined twoToneColor="#eb2f96" />}
              valueLabelTrue="True"
              valueLabelFalse="False"
            />
          )}
        />
        <Table.Column
          dataIndex="birthday"
          title="Birthday"
          render={(value) => <DateField format="LLL" value={value} />}
        />
        <Table.Column<IUser>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
