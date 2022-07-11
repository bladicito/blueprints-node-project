import React from 'react';
import { EIcon } from '../enums/Icons.enum';

export interface IGroupTextArea {
  actionButton?: React.ReactNode;
  alertMessage?: string;
  allowBreakLines: boolean;
  disabled: boolean;
  errorMessage?: string;
  icon?: EIcon;
  id: string;
  label?: string;
  maxLength?: number;
  maxLengthOnlyAlert?: boolean;
  modifier?: Array<string>;
  notifyValueChange?: any;
  placeholder: string;
  required: boolean;
  rows: number;
  state?: Array<string>;
  value: string;
  showProgressBar?: boolean;
}
