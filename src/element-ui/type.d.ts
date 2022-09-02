import Vue from 'vue'

declare class ElementUIComponent extends Vue {
  static install (vue: typeof Vue): void
}

declare class ElScrollbar extends ElementUIComponent {
  tag: string
  native: boolean
  noresize: boolean
  wrapStyle: string
  wrapClass: string
  viewStyle: string
  viewClass: string
}

declare module 'element-ui/types' {
  interface Scrollbar extends ElScrollbar {}
  export class Scrollbar extends ElScrollbar {}
}
