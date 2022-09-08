import type { ExtractPropTypes } from 'vue'

type ButtonHTMLType = 'error' | 'warning' | 'success' | 'secondary'

export const ButtonProp = {
  color: {
    type: String as PropType<ButtonHTMLType>,
    validator: (v: ButtonHTMLType) =>
      ['error', 'warning', 'success', ''].includes(v),
  },
  loading: { type: Boolean },
  disabled: { type: Boolean },
  /**
   * Text before icon.
   */
  preIcon: { type: Object as unknown as PropType<VNode> },
  /**
   * Text after icon.
   */
  postIcon: { type: String },
  /**
   * preIcon and postIcon icon size.
   * @default: 14
   */
  iconSize: { type: Number, default: 14 },
  onClick: {
    type: Function as PropType<(event: MouseEvent) => void>,
  },
}
export declare type IButtonProps = Partial<ExtractPropTypes<typeof ButtonProp>>
