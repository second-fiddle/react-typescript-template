import { ChangeEventHandler, FocusEventHandler, Ref } from 'react';

export type InputFieldProps = {
  inputRef: Ref<HTMLInputElement>;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
};
