import React from 'react';
import modifierState from '../../../utils/helpers/modifierState';
import './css/checkbox.scss';
import { IHtmlCheckbox } from '../../../utils/interfaces/HtmlCheckbox.interface';

const Checkbox = ({ id, value, name, checked, label, notifyValueChange, modifier, children }: IHtmlCheckbox) => {
  const componentName = 'a-checkbox';
  const cssClasses = modifierState(componentName, modifier, null);

  return (
    <div className={cssClasses}>
      <input
        className="a-checkbox__input"
        type="checkbox"
        id={id}
        value={value}
        name={name}
        checked={checked}
        onChange={(event) => {
          if (notifyValueChange && typeof notifyValueChange === 'function') {
            notifyValueChange({ value, checked: event.target.checked });
          }
        }}
      />
      <label className="a-checkbox__label" htmlFor={id}>
        {children ? <span className="a-checkbox__children">{children}</span> : null}
        <span className="a-checkbox__label-text">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
