import React from 'react';
import { EIcon } from '../enums/Icons.enum';
import { EAutoCompleteInput, EInputTypes } from '../enums/Input.enum';

export interface IInputGroupInterface {
  alertMessage?: string;
  actionButton?: React.ReactNode;
  disabled: boolean;
  errorMessage?: string;
  icon?: EIcon;
  id: string;
  label?: string;
  modifier?: Array<string>;
  notifyValueChange?: (value: string) => void;
  placeholder: string;
  required?: boolean;
  state?: Array<string>;
  type: EInputTypes;
  value: string;
  autocompleteType?: EAutoCompleteInput;
}
