export interface IHtmlTextArea {
  disabled: boolean;
  id: string;
  modifier: Array<string>;
  notifyValueChange: any;
  placeholder: string;
  state: Array<string>;
  value: any;
  maxLength?: number | null;
  rows: number;
}
