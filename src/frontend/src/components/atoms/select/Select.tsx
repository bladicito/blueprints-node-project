import React from 'react';
import Icon from '../icon/Icon';
import './css/select.scss';
import Option from '../option/Option';
import { IHtmlSelect } from '../../../utils/ts/interfaces/HtmlSelect.interface';
import { EIcon } from '../../../utils/ts/enums/Icon.enum';
import modifierState from '../../../utils/helpers/modifierState';

const Select = (props: IHtmlSelect) => {
  const componentName = 'a-select';
  const {
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
  } = props;
  const labelFake = options.find((option) => option.value === value)?.label;

  if (disabled) {
    state.push('disabled');
  }

  if (value !== props.options[0].value) {
    state.push('selected');
  }

  const cssClasses = modifierState(componentName, [], state);

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
            <Icon type={EIcon.CHEVRON_DOWN} modifier={['fit-parent']} />
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
          <p className="a-select__message m-date-time-picker__message--error">{errorMessage}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Select;
