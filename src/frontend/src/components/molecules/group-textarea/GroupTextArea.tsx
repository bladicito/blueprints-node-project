import React, { useCallback, useEffect, useMemo, useState } from 'react';
import modifierState from '../../../utils/helpers/modifierState';
import Label from '../../atoms/label/Label';
import './css/textarea-group.scss';
import Icon from '../../atoms/icon/Icon';
import { EIcon } from '../../../utils/enums/Icons.enum';
import TextArea from '../../atoms/textarea/TextArea';
import ProgressBar from '../../atoms/progress-bar/ProgressBar';
import { IGroupTextArea } from '../../../utils/interfaces/GroupTextArea.interface';

const removeBreakLines = (value: string) => {
  return value.replace(/\n/g, ' ');
};

const TextAreaGroup = ({
  actionButton,
  alertMessage,
  allowBreakLines,
  disabled,
  errorMessage,
  fieldName,
  icon,
  id,
  label,
  maxLength = 0,
  maxLengthOnlyAlert = false,
  modifier = [],
  notifyValueChange,
  placeholder,
  required,
  rows,
  state = [],
  value,
  showProgressBar = false,
}: IGroupTextArea) => {
  const componentName = 'm-textarea-group';
  const [charsToGo, setCharsToGo] = useState(maxLength);

  const cssClasses = useMemo(() => {
    return modifierState(componentName, modifier, state);
  }, [componentName, modifier, state]);

  const calculatePercentage = useCallback((): number => {
    const percent = Math.floor((value.length * 100) / maxLength);
    return percent >= 100 ? 100 : percent;
  }, [value, maxLength]);

  useEffect(() => {
    // todo define if only targeting Chrome or other browsers. (breakline/endOfLine different on linux and windows/browsers)
    // todo define if breaklines are counted. I think no breaklines needed
    if (maxLength) {
      setCharsToGo(maxLength - (value ? value.length : 0));
    }
  }, [value, maxLength]);

  return (
    <div className={cssClasses}>
      {label ? (
        <div className="m-textarea-group__label">
          <Label state={state} attrFor={id} required={required} text={label} />
        </div>
      ) : null}
      <div className="m-textarea-group__input">
        <TextArea
          rows={rows}
          maxLength={maxLength && !maxLengthOnlyAlert ? maxLength : 0}
          disabled={disabled}
          id={id}
          modifier={modifier}
          notifyValueChange={(newValue: string) => {
            if (notifyValueChange && typeof notifyValueChange === 'function') {
              if (!allowBreakLines) {
                notifyValueChange(fieldName, removeBreakLines(newValue));
              } else {
                notifyValueChange(fieldName, newValue);
              }
            }
          }}
          placeholder={placeholder}
          state={state}
          value={value}
        />
        {icon && <Icon type={icon as EIcon} />}
      </div>
      {showProgressBar && maxLengthOnlyAlert && value.length !== 0 && (
        <div className="m-textarea-group__progress-bar">
          <ProgressBar percentage={calculatePercentage()} />
        </div>
      )}

      <div className="m-textarea-group__bottom">
        {actionButton && <div className="m-textarea-group__action">{actionButton}</div>}
        <div className="m-textarea-group__info">
          {alertMessage && (
            <p className="m-textarea-group__message m-textarea-group__message--alert">
              <Icon type={EIcon.MEME} modifier={[]} state={[]} />
              {alertMessage}
            </p>
          )}
          {errorMessage && <p className="m-textarea-group__message m-textarea-group__message--error">{errorMessage}</p>}
          {maxLength && charsToGo && (
            <p className="m-textarea-group__chars-counter">
              {(() => {
                if (charsToGo <= 0) {
                  return `Already more than ${maxLength}. Count: ${maxLength - charsToGo}`;
                } else {
                  return `${maxLength - charsToGo} / ${maxLength}`;
                }
              })()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextAreaGroup;
