<script lang="ts" setup>
import { Modal } from 'ant-design-vue'

const success = () => {
  Modal.success({
    title: 'This is a success message',
    content: h('div', {}, [
      h('p', 'some messages...some messages...'),
      h('p', 'some messages...some messages...'),
    ]),
  })
}
</script>

<template>
  <ASpace>
    <AButton type="primary" @click="success">
      Primary Button1
    </AButton>
    <AButton type="primary" @click="success">
      Primary Button
    </AButton>
  </ASpace>
</template>

