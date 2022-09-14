<script lang="ts" setup>
import { useFormLogic } from './useFormLogic';

const { loadingCreate, state, onFinish } = useFormLogic();
</script>

<template>
  <a-form
    :model="state"
    name="horizontal_login"
    layout="inline"
    autocomplete="off"
    @finish="onFinish"
  >
    <a-form-item label="Username" name="name" :rules="[{ required: true }]">
      <a-input v-model:value="state.name" />
    </a-form-item>

    <a-form-item
      label="Email"
      name="email"
      :rules="[{ required: true }, { type: 'email' }]"
    >
      <a-input v-model:value="state.email" />
    </a-form-item>

    <a-form-item label="Gender" name="gender" :rules="[{ required: true }]">
      <a-radio-group v-model:value="state.gender">
        <a-radio value="female">Female</a-radio>
        <a-radio value="male">Male</a-radio>
      </a-radio-group>
    </a-form-item>

    <a-form-item>
      <a-button type="primary" html-type="submit" :loading="loadingCreate"
        >Create</a-button
      >
    </a-form-item>
  </a-form>
</template>
