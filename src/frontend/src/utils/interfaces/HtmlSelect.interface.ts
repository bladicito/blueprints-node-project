import { IHtmlOption } from './HtmlOption.interface';

export interface IHtmlSelect {
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  fieldName: string;
  id: string;
  label?: string;
  name: string;
  notifyValueChange?: (newValue: string) => void;
  options: Array<IHtmlOption>;
  required?: boolean;
  state?: Array<string>;
  value: string;
}
