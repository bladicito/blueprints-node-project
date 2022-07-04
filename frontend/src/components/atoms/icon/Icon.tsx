import React from 'react';
import modifierState from '../../../utils/helpers/modifierState';
import svgBanner from '../../../shared/assets/svg/icons.svg';
import './css/icon.scss';
import { EIcon } from '../../../utils/enums/Icons.enum';

interface IProps {
  modifier?: Array<EIConModifiers>;
  state?: Array<string>;
  type: EIcon;
}

const Icon = ({ modifier, state, type }: IProps) => {
  const componentName = 'a-icon';
  const cssClasses = modifierState(componentName, modifier, state);

  const svgBannerFile = `${svgBanner}#${type}`;
  let svgBannerUrl = `${svgBannerFile}`;
  const use = `<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="${svgBannerUrl}"></use>`;

  return (
    <svg
      className={cssClasses}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: use }}
    />
  );
};

export default Icon;

export enum EIConModifiers {
  FIT_PARENT = 'fit-parent',
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
  WEIRD = 'werid',
}
