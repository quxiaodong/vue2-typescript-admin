import to from 'await-to-js'
import service from '@/utils/service'

export interface ILoginRequest {
  account?: string
  password?: string
  phone?: string
  code?: string
}

export interface ILoginResponse {
  token: string
}

export interface IMenuItem {
  path: string
  title: string
  icon: string
}

export interface IButtonItem {
  path: string
  type: string
}

export interface IUserResponse {
  id: string
  name: string
  avatar: string
  menus: IMenuItem[]
  buttons: IButtonItem[]
}

class UserService {
  async login (data: ILoginRequest): Promise<ILoginResponse | undefined> {
    const [err, response] = await to(service.post<ILoginRequest, ILoginResponse>('user/login', data))
    if (err) return

    return response?.data as ILoginResponse
  }

  async info (): Promise<IUserResponse | undefined> {
    const [err, response] = await to(service.get<IUserResponse>('user/info'))
    if (err) return

    return response?.data as IUserResponse
  }
}

export default new UserService()
