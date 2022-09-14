<script lang="ts" setup>
import type { ColumnType } from 'ant-design-vue/es/table';
import { _userApi } from '~~/api/user';
import { useFormLogic } from './useFormLogic';

const { userListData, loadingUserListData, onDeleteUser, loadingDelete } =
  useFormLogic();

const columns: ColumnType<IUserApi.UserListItem>[] = [
  {
    title: '#',
    dataIndex: 'id',
    width: '20%',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    align: 'center',
  },
];
</script>

<template>
  <a-table
    :data-source="userListData?.data"
    :columns="columns"
    :row-key="(record) => record.id"
    :loading="loadingUserListData || loadingDelete"
    :pagination="{
      defaultPageSize: 5,
    }"
  >
    <template
      #bodyCell="{
        column,
        record,
      }: {
        column: (typeof columns)[0],
        record: IUserApi.UserListItem,
      }"
    >
      <template v-if="column.dataIndex === 'operation'">
        <a-popconfirm
          title="Sure to delete?"
          @confirm="onDeleteUser(record.id)"
        >
          <IconRiDeleteBin6Line style="color: red; cursor: pointer" />
        </a-popconfirm>
      </template>
    </template>
  </a-table>
</template>
