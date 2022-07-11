import React from 'react';
import './css/textarea.scss';
import modifierState from '../../../utils/helpers/modifierState';
import { IHtmlTextArea } from '../../../utils/interfaces/HtmlTextArea.interface';

const TextArea = ({
  disabled,
  id,
  modifier,
  notifyValueChange,
  placeholder,
  state,
  value,
  rows,
  maxLength,
}: IHtmlTextArea) => {
  const componentName = 'a-textarea';
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
