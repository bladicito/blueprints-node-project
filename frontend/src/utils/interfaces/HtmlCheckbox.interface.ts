import { ReactElement } from 'react';
import { ECheckboxModifiers } from '../enums/Checkbox.enum';

export interface IHtmlCheckbox {
  modifier: Array<ECheckboxModifiers> | null;
  id: string;
  value: string | number;
  name: string;
  checked: boolean;
  label: string;
  notifyValueChange?: (value: IHtmlCheckboxValueOnChange) => void;
  children?: ReactElement | null;
  identifierExtra?: number;
}

export interface IHtmlCheckboxValueOnChange {
  value: number | string;
  checked: boolean;
}
