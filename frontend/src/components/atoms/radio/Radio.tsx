import React, { useMemo } from 'react';
import modifierState from '../../../utils/helpers/modifierState';
import './css/radio.scss';
import { IHtmlRadio } from '../../../utils/interfaces/HtmlRadio.interface';

const Radio = ({ id, value, name, checked, label, onRadioChange, modifier, disabled }: IHtmlRadio) => {
  const componentName = 'a-radio';

  const cssClasses = useMemo(() => {
    return modifierState(componentName, modifier, null);
  }, [componentName, modifier]);

  return (
    <div className={cssClasses}>
      <input
        className="a-radio__input"
        type="radio"
        id={id}
        value={value}
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={(event) => {
          if (onRadioChange && typeof onRadioChange === 'function') {
            onRadioChange({ value, checked: event.target.checked });
          }
        }}
      />
      <label className="a-radio__label" htmlFor={id}>
        <span className="a-radio__label-text">{label}</span>
      </label>
    </div>
  );
};

export default Radio;
