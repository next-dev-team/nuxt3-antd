/**
 * like Lodash Pick: remove object key to undefine with exclude key
 * @param obj
 * @param rest
 * @returns
 */
export function objToUndef<T extends object, U extends keyof T>(
  obj: T,
  ...rest: Array<Many<U>>
) {
  const newObj = _Omit(obj, ...rest)

  Object.keys(newObj).forEach(
    (key) => ((obj as unknown as IObjectKeys)[key] = undefined),
  )
  return obj
}

/**
 * Delete the falsy key-value pair in the object
 * @param obj
 * @returns
 */
export function removeEmpty<T extends {}>(obj: T): T {
  return _OmitBy(
    {
      ...obj,
    },
    (item) => isNull(item) || isUndefined(item) || item === '',
  ) as any
}

/**
remove null ,undefined empty string from obj
 * @param values
 */
export function getOnlyValue<T>(values: T): T {
  return _PickBy(
    values || {},
    (v) =>
      v !== null && v !== undefined && v !== ' ' && v !== 'null' && v !== '',
  ) as any
}

/**
remove null ,undefined, from obj
 * @param values
 */
export function removeNil<T>(values: T): T {
  return _PickBy(values || {}, (v) => v !== null && v !== undefined) as any
}

export const objToOption = (obj = {}, valueAsNumber = false) => {
  return Object.keys(obj).map((i) => {
    const getVal = (obj as any)[i]
    return {
      label: getVal,
      value: valueAsNumber ? Number(i) : i,
    }
  })
}
