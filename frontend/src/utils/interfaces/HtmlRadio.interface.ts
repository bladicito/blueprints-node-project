import { ERadioModifiers } from '../enums/Radio.enum';

export interface IHtmlRadio {
  modifier: Array<ERadioModifiers> | null;
  id: string;
  value: string | number;
  name: string;
  checked: boolean;
  label: string;
  onRadioChange?: (value: IHtmlRadioValueOnChange) => void;
  disabled?: boolean;
}

export interface IHtmlRadioValueOnChange {
  value: number | string;
  checked: boolean;
}
