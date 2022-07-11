import React from 'react';
import { IHtmlOption } from '../../../utils/ts/interfaces/HtmlOption.interface';

const Option = (props: IHtmlOption) => {
  const { value, label, disabled, selected } = props;
  const componentName = 'a-option';
  return (
    <option className={componentName} value={value} disabled={disabled} selected={selected}>
      {label}
    </option>
  );
};

export default Option;
