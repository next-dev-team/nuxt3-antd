<script lang="ts" setup>
import { useFormLogic } from './useFormLogic';
const { userListData } = useFormLogic();
</script>

<template>
  <a-card
    bordered
    :title="`User Management: (${
      userListData?.meta?.pagination?.total ?? ''
    } users)`"
  >
    <TemplateHomeUserFormOperation />
    <a-divider style="margin-top: 40px; margin-bottom: 30px">
      User list</a-divider
    >
    <TemplateHomeUserFormList />
  </a-card>
</template>
