import modifierState from '../../../utils/helpers/modifierState';
import React from 'react';
import './css/label.scss';
import { IHtmlLabel } from '../../../utils/interfaces/HtmlLabel.interface';

const Label = ({ attrFor, required, text, state }: IHtmlLabel) => {
  const componentName = 'a-label';
  const cssClasses = modifierState(componentName, null, state);
  return (
    <label className={cssClasses} htmlFor={attrFor}>
      {text} {required ? <span className="a-label__mandatory">*</span> : null}
    </label>
  );
};

export default Label;
