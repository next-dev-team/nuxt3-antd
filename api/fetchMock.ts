interface MockData {
  message: string
  code: number
}

export async function getMockDataFetch() {
  const data = await useCustomFetch<MockData>('')
  return data
}

export async function postMockDataFetch() {
  const data = await useCustomFetch<MockData>('', { method: 'post', body: { test: 'test' }, headers: { name: 'xd' } })
  return data
}

export async function putMockDataFetch() {
  const data = await useCustomFetch<MockData>('', { method: 'put' })
  return data
}

export async function deleteMockDataFetch() {
  const data = await useCustomFetch<MockData>('', { method: 'delete' })
  return data
}
