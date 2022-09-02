import Mock from 'mockjs'
import user from './user'

const baseURL = process.env.VUE_APP_BASE_API

const mocks = [...user]

for (const { path, method, response } of mocks) {
  const url = baseURL + path
  Mock.mock(url, method, response)
}
