import React from 'react';
import Radio from '../../atoms/radio/Radio';
import modifierState from '../../../utils/helpers/modifierState';
import './css/radio-group.scss';
import { IHtmlRadio, IHtmlRadioValueOnChange } from '../../../utils/interfaces/HtmlRadio.interface';
import { ERadioGroupModifiers } from '../../../utils/enums/Radio.enum';

declare interface IProps {
  modifier?: Array<ERadioGroupModifiers> | undefined | null;
  options: Array<IHtmlRadio>;
  onRadioSelection: (value: IHtmlRadioValueOnChange) => void;
  label?: string;
}

const RadioGroup = ({ options, modifier, label, onRadioSelection }: IProps) => {
  const componentName = 'm-radio-group';
  const cssClasses = modifierState(componentName, modifier, null);
  return (
    <div className={cssClasses}>
      {label && <h5 className="m-radio-group__label">{label}</h5>}
      <ul className="m-radio-group__items">
        {options.map((option, index) => {
          return (
            <li className="m-radio-group__item" key={index}>
              <Radio
                disabled={option.disabled}
                modifier={option.modifier}
                checked={option.checked}
                value={option.value}
                label={option.label}
                id={option.id}
                name={option.name}
                onRadioChange={(value: IHtmlRadioValueOnChange) => {
                  onRadioSelection(value);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RadioGroup;
