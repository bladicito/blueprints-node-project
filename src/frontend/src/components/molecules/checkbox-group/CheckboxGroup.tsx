import React from 'react';
import Checkbox from '../../atoms/checkbox/Checkbox';
import modifierState from '../../../utils/helpers/modifierState';
import { IHtmlCheckbox, IHtmlCheckboxValueOnChange } from '../../../utils/interfaces/HtmlCheckbox.interface';
import './css/checkbox-group.scss';

declare interface IProps {
  modifier?: Array<string> | undefined | null;
  options: Array<IHtmlCheckbox>;
  notifyValueChange: (value: IHtmlCheckboxValueOnChange) => void;
}

const CheckboxGroup = (props: IProps) => {
  const { options, modifier } = props;
  const componentName = 'm-checkbox-group';
  const cssClasses = modifierState(componentName, modifier, null);
  return (
    <div className={cssClasses}>
      <ul className="m-checkbox-group__items">
        {options.map((option, index) => {
          return (
            <li className="m-checkbox-group__item" key={index} data-label={option.label} data-value={option.value}>
              <Checkbox
                modifier={option.modifier}
                checked={option.checked}
                value={option.value}
                label={option.label}
                id={option.id}
                name={option.name}
                notifyValueChange={(value: IHtmlCheckboxValueOnChange) => {
                  props.notifyValueChange(value);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CheckboxGroup;
