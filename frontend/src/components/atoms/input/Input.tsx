import React from 'react';
import { EInputHtmlInterface, IFileInformation } from '../../../utils/interfaces/InputHtml.interface';
import { EInputTypes } from '../../../utils/enums/Input.enum';
import modifierState from '../../../utils/helpers/modifierState';
import './css/input.scss';

const Input = ({
  accept,
  disabled,
  id,
  modifier,
  notifyValueChange,
  placeholder,
  state,
  type = EInputTypes.TEXT,
  value,
  autocompleteType,
}: EInputHtmlInterface) => {
  const componentName = 'a-input';

  const cssClasses = modifierState(componentName, modifier, state);

  return (
    <input
      accept={accept}
      autoCapitalize="off"
      autoCorrect="off"
      autoComplete={(() => {
        if (autocompleteType) {
          return autocompleteType;
        }
        return 'off';
      })()}
      className={cssClasses}
      disabled={disabled}
      id={id}
      onChange={(evt) => {
        if (notifyValueChange && typeof notifyValueChange === 'function') {
          if (type === EInputTypes.FILE) {
            const file = evt.currentTarget.files && evt.currentTarget.files[0] ? evt.currentTarget.files[0] : null;
            if (file) {
              const reader = new FileReader();
              const fileData: IFileInformation = {
                name: file.name,
                type: file.type,
                size: file.size.toString(),
              };
              reader.onload = (evt) => {
                notifyValueChange({ file, fileData, result: evt.target?.result as string });
              };
              reader.readAsDataURL(file);
            }
          } else {
            notifyValueChange(evt.currentTarget.value);
          }
        }
      }}
      name={id}
      placeholder={placeholder}
      spellCheck="false"
      type={type}
      value={value}
    />
  );
};

export default Input;
