/* eslint-disable */
import type { ConditionalValue, SystemStyleObject } from '../types/index'
import type { DistributiveOmit } from '../types/system-types'

export interface CenterProperties {
  inline?: ConditionalValue<boolean>
}

interface CenterStyles
  extends CenterProperties,
    DistributiveOmit<SystemStyleObject, keyof CenterProperties> {}

interface CenterPatternFn {
  (styles?: CenterStyles): string
  raw: (styles?: CenterStyles) => SystemStyleObject
}

export declare const center: CenterPatternFn
