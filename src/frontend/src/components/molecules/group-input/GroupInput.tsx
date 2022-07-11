import React, { useMemo } from 'react';
import modifierState from '../../../utils/helpers/modifierState';
import Label from '../../atoms/label/Label';
import Input from '../../atoms/input/Input';
import './css/group-input.scss';
import Icon from '../../atoms/icon/Icon';
import { EIcon } from '../../../utils/enums/Icons.enum';
import { EInputTypes } from '../../../utils/enums/Input.enum';
import { IGroupInputInterface } from '../../../utils/interfaces/GroupInput.interface';

const GroupInput = ({
  alertMessage,
  disabled,
  errorMessage,
  icon = EIcon.EDIT,
  id,
  label,
  modifier = [],
  notifyValueChange,
  placeholder,
  required = false,
  state = [],
  type = EInputTypes.TEXT,
  value,
  actionButton,
  autocompleteType,
}: IGroupInputInterface) => {
  const componentName = 'm-input-group';

  const cssClasses = useMemo(() => {
    if (disabled) {
      state.push('disabled');
    }
    return modifierState(componentName, modifier, state);
  }, [state, componentName, modifier, disabled]);

  return (
    <div className={cssClasses}>
      {label ? (
        <div className="m-input-group__label">
          <Label state={state} attrFor={id} required={required} text={label} />
        </div>
      ) : null}
      <div className="m-input-group__input">
        <Input
          autocompleteType={autocompleteType}
          disabled={disabled}
          id={id}
          modifier={modifier}
          notifyValueChange={(newValue: any) => {
            if (notifyValueChange && typeof notifyValueChange === 'function') {
              notifyValueChange(newValue);
            }
          }}
          placeholder={placeholder}
          state={state}
          type={type}
          value={value}
        />
        {icon && <Icon type={disabled ? EIcon.LOCKED : (icon as EIcon)} />}
      </div>
      {errorMessage || alertMessage ? (
        <div className="m-input-group__message-wrapper">
          {actionButton && actionButton}
          {alertMessage && (
            <p className="m-input-group__message m-input-group__message--alert">
              <Icon type={EIcon.WARNING} />
              &nbsp;
              <span>{alertMessage}</span>
            </p>
          )}
          {errorMessage && <p className="m-input-group__message m-input-group__message--error">{errorMessage}</p>}
        </div>
      ) : null}
    </div>
  );
};

export default GroupInput;
