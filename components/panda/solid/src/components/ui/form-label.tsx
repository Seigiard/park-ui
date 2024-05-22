import { type Assign, type HTMLArkProps, ark } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { type FormLabelVariantProps, formLabel } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'

export interface FormLabelProps
  extends Assign<JsxStyleProps, HTMLArkProps<'label'>>,
    FormLabelVariantProps {}
export const FormLabel = styled(ark.label, formLabel)
