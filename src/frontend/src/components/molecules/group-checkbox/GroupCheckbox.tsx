import React from 'react';
import Checkbox from '../../atoms/checkbox/Checkbox';
import modifierState from '../../../utils/helpers/modifierState';
import { IHtmlCheckbox, IHtmlCheckboxValueOnChange } from '../../../utils/interfaces/HtmlCheckbox.interface';
import './css/group-checkbox.scss';

declare interface IProps {
  modifier?: Array<string> | undefined | null;
  options: Array<IHtmlCheckbox>;
  notifyValueChange: (value: IHtmlCheckboxValueOnChange) => void;
}

const GroupCheckbox = ({ options, modifier, notifyValueChange }: IProps) => {
  const componentName = 'm-group-checkbox';
  const cssClasses = modifierState(componentName, modifier, null);
  return (
    <div className={cssClasses}>
      <ul className="m-group-checkbox__items">
        {options.map((option, index) => {
          return (
            <li className="m-group-checkbox__item" key={index} data-label={option.label} data-value={option.value}>
              <Checkbox
                modifier={option.modifier}
                checked={option.checked}
                value={option.value}
                label={option.label}
                id={option.id}
                name={option.name}
                notifyValueChange={(value: IHtmlCheckboxValueOnChange) => {
                  notifyValueChange(value);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GroupCheckbox;
