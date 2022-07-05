import React from 'react';
import { EButtonIconPosition, EButtonTypes } from '../enums/Button.enum';
import { EIcon } from '../enums/Icons.enum';

export interface IHtmlButton {
  data?: string;
  action?: object;
  additionalInformation?: string;
  customClickEvent?: object;
  disabled?: boolean;
  href?: string;
  isExternalLink?: boolean | null;
  kind?: EButtonTypes;
  modifier?: Array<string>;
  state?: Array<string> | null;
  text?: string;
  type?: 'button' | 'submit';
  icon?: EIcon;
  iconPosition?: EButtonIconPosition;
  iconOnly?: boolean;
  value?: string;
  toolTip?: string;
  stopPropagation?: boolean;
  copyToClipboardMessage?: string;
}
