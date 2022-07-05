import Button from '../../atoms/button/Button';
import React from 'react';
import { IHtmlButton } from '../../../utils/interfaces/HtmlButton.interface';
import './css/buttons-group.scss';
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

const ButtonsGroup = (props: IProps) => {
  const componentName = 'm-buttons-group';
  const cssClasses = modifierState(componentName, props.modifier, null);

  return (
    <div className={cssClasses}>
      <ul className="m-buttons-group__buttons">
        {props.buttons
          ? props.buttons.map((btn, index) => {
              return (
                <li className="m-buttons-group__button" key={index}>
                  <Button
                    {...btn}
                    customClickEvent={(value: any) => {
                      if (props.onButtonSelected && typeof props.onButtonSelected === 'function') {
                        props.onButtonSelected(value);
                      }
                    }}
                  />
                </li>
              );
            })
          : null}

        {props.children
          ? props.children.map((child, index: number) => {
              if (child) {
                return (
                  <li className="m-buttons-group__button" key={index}>
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

export default ButtonsGroup;
