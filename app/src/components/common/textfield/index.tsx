import React from 'react'

interface Props {
  type: string
  name: string
  value?: any
  placeholder?: string
  defaultValue?: any
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => any
  autoFocus?: boolean
  readOnly?: boolean
  focusOutline?: boolean
  disabled?: boolean
}

export const Textfield = (props: Props) => {
  return <input {...props} />
}
