import React, { useMemo } from 'react';
import Icon, { EIConModifiers } from '../icon/Icon';
import './css/select.scss';
import Option from '../option/Option';
import { IHtmlSelect } from '../../../utils/interfaces/HtmlSelect.interface';
import { EIcon } from '../../../utils/enums/Icons.enum';
import modifierState from '../../../utils/helpers/modifierState';

const Select = ({
  disabled = false,
  id,
  required = false,
  name,
  errorMessage,
  label,
  options,
  value,
  state = [],
  notifyValueChange,
}: IHtmlSelect) => {
  const componentName = 'a-select';
  const labelFake = useMemo(() => {
    return options.find((option) => option.value === value)?.label;
  }, [options, value]);

  const cssClasses = useMemo(() => {
    if (disabled) state.push('disabled');
    if (value !== options[0].value) state.push('selected');

    return modifierState(componentName, [], state);
  }, [value, disabled, state, componentName, options]);

  return (
    <div className={cssClasses}>
      <div className="a-select__fake-label-wrapper">
        <p className="a-select__fake-label">
          {label} {required ? <span className="a-select__mandatory">*</span> : ''}
        </p>
      </div>
      <div className="a-select__interaction">
        <label className="a-select__label" htmlFor={id}>
          <span className="a-select__current-option">{labelFake}</span>
          <span className="a-select__icon">
            <Icon type={EIcon.CHEVRON_DOWN} modifier={[EIConModifiers.FIT_PARENT]} />
          </span>
        </label>
        {options ? (
          <select
            className="a-select__field"
            disabled={disabled}
            id={id}
            name={name}
            onChange={(e) => {
              if (notifyValueChange && typeof notifyValueChange === 'function') {
                const value = e.currentTarget.value;
                notifyValueChange(value);
              }
            }}
            required={required}
            value={value}
          >
            {options.map((option, index) => {
              return <Option disabled={option.disabled} value={option.value} label={option.label} key={index} />;
            })}
          </select>
        ) : null}
      </div>
      {errorMessage ? (
        <div className="a-select__message-wrapper">
          <p className="a-select__message a-select__message__message--error">{errorMessage}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Select;
