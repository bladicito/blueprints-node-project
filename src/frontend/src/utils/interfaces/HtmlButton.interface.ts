import { EButtonIconPosition, EButtonKinds, EButtonType } from '../enums/Button.enum';
import { EIcon } from '../enums/Icons.enum';

export interface IHtmlButton {
  data?: string;
  action?: object;
  additionalInformation?: string;
  customClickEvent?: object;
  disabled?: boolean;
  href?: string;
  isExternalLink?: boolean | null;
  kind?: EButtonKinds;
  modifier?: Array<string>;
  state?: Array<string> | null;
  text?: string;
  type?: EButtonType;
  icon?: EIcon;
  iconPosition?: EButtonIconPosition;
  iconOnly?: boolean;
  value?: string;
  toolTip?: string;
  stopPropagation?: boolean;
  copyToClipboardMessage?: string;
}
