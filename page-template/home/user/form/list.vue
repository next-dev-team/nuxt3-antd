<script lang="ts" setup>
import { _userApi } from '~~/api/user';
import { useFormLogic } from './useFormLogic';

const { userListData, loadingUserListData } = useFormLogic();

const columns = [
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
];
</script>

<template>
  <a-table
    :data-source="userListData?.data"
    :columns="columns"
    :row-key="(record) => record.id"
    :loading="loadingUserListData"
  />
</template>
