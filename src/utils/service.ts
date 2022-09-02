import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  AxiosError
} from 'axios'

import { MessageBox, Message } from 'element-ui'
import { ResponseCode } from '@/config/enums'
import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'

interface ServiceResponse<R = unknown> {
  code: number
  message: string
  data?: R | R[]
}

const defaults: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}

class Service {
  instance: AxiosInstance

  constructor (config: AxiosRequestConfig = {}) {
    this.instance = axios.create(Object.assign({}, defaults, config))

    this._initInterceptorsRequest()
    this._initInterceptorsReponse()
  }

  public get<R> (url: string, config?: AxiosRequestConfig): Promise<ServiceResponse<R>> {
    return this.instance.get(url, config)
  }

  public post<T, R> (url: string, data: T, config?: AxiosRequestConfig): Promise<ServiceResponse<R>> {
    return this.instance.post(url, data, config)
  }

  private _initInterceptorsRequest (): void {
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig): AxiosRequestConfig => {
        const token: string = store.getters['user/token']
        !config.headers && (config.headers = {} as AxiosRequestHeaders)
        token && (config.headers.Authorization = token)
        return config
      },

      (error: AxiosError): Promise<AxiosError> => {
        return Promise.reject(error)
      }
    )
  }

  private _initInterceptorsReponse (): void {
    this.instance.interceptors.response.use(
      (response: AxiosResponse): ServiceResponse | Promise<never> => {
        const result = response.data
        if (result.code === ResponseCode.success) return result

        if (result.code === ResponseCode.unauthorized) {
          MessageBox.confirm(i18n.t('unauthorized-dialog.title').toString(), {
            confirmButtonText: i18n.t('unauthorized-dialog.confirm').toString(),
            cancelButtonText: i18n.t('unauthorized-dialog.cancel').toString(),
            type: 'warning'
          }).then(() => {
            store.dispatch('user/logout').then(() => router.push('/login'))
          })
        } else {
          Message.error(result.message)
        }

        return Promise.reject(new Error(result.message))
      },

      (error: AxiosError): Promise<AxiosError> => {
        // error.response.status: 3xx 4xx 5xx
        Message.error(error.message)
        return Promise.reject(error)
      }
    )
  }
}

const service: Service = new Service()

export default service
