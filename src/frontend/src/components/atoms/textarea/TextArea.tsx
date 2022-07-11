import React from 'react';
import './css/textarea.scss';
import modifierState from '../../../utils/helpers/modifierState';

interface IProps {
  disabled: boolean;
  id: string;
  modifier: Array<string>;
  notifyValueChange: any;
  placeholder: string;
  state: Array<string>;
  value: any;
  maxLength?: number | null;
  rows: number;
}

const TextArea = (props: IProps) => {
  const componentName = 'a-textarea';
  const { disabled, id, modifier, notifyValueChange, placeholder, state, value, rows, maxLength } = props;
  const cssClasses = modifierState(componentName, modifier, state);

  return (
    <textarea
      autoCapitalize="off"
      autoComplete="off"
      className={cssClasses}
      disabled={disabled}
      id={id}
      onChange={(evt) => {
        if (notifyValueChange && typeof notifyValueChange === 'function') {
          notifyValueChange(evt.currentTarget.value);
        }
      }}
      rows={rows}
      {...(maxLength && { maxLength: maxLength })}
      placeholder={placeholder}
      spellCheck="false"
      value={value}
    />
  );
};

export default TextArea;
