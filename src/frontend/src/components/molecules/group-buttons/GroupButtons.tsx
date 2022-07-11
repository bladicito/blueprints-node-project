import Button from '../../atoms/button/Button';
import React from 'react';
import { IHtmlButton } from '../../../utils/interfaces/HtmlButton.interface';
import './css/group-buttons.scss';
import modifierState from '../../../utils/helpers/modifierState';

export enum EButtonsGroupModifiers {
  CENTERED = 'centered',
  RIGHT_ALIGNED = 'right-aligned',
  VERTICAL = 'vertical',
  FIXED_SIZE = 'fixed-size',
}

declare interface IProps {
  buttons?: Array<IHtmlButton>;
  modifier?: Array<EButtonsGroupModifiers>;
  onButtonSelected?: any;
  children?: Array<React.ReactNode>;
}

const GroupButtons = ({ modifier, buttons, onButtonSelected, children }: IProps) => {
  const componentName = 'm-group-buttons';
  const cssClasses = modifierState(componentName, modifier, null);

  return (
    <div className={cssClasses}>
      <ul className="m-group-buttons__buttons">
        {buttons
          ? buttons.map((btn, index) => {
              return (
                <li className="m-group-buttons__button" key={index}>
                  <Button
                    {...btn}
                    customClickEvent={(value: any) => {
                      if (onButtonSelected && typeof onButtonSelected === 'function') {
                        onButtonSelected(value);
                      }
                    }}
                  />
                </li>
              );
            })
          : null}

        {children
          ? children.map((child, index: number) => {
              if (child) {
                return (
                  <li className="m-group-buttons__button" key={index}>
                    {child}
                  </li>
                );
              }
              return null;
            })
          : null}
      </ul>
    </div>
  );
};

export default GroupButtons;
