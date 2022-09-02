import { TranslateResult } from 'vue-i18n'

export interface IRule {
  required?: boolean
  validator?: (rule: IRule, value: unknown, callback: ((params?: Error) => void)) => void
  message?: string | TranslateResult
  trigger: string
}

export interface IRules {
  [key: string]: IRule[]
}
