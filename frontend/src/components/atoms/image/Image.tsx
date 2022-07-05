import React from 'react';
import modifierState from '../../../utils/helpers/modifierState';
import { ELazyLoading } from '../../../utils/enums/Image.enum';
import './css/image.scss';

interface IProps {
  src: string;
  alt: string;
  lazy: ELazyLoading;
  modifier?: Array<string>;
  state?: Array<string>;
}

const Image = ({ state, modifier, src, alt, lazy }: IProps) => {
  const componentName = 'a-image';
  const cssClasses = modifierState(componentName, modifier, state);
  return (
    <div className={cssClasses}>
      <img className="a-image__image" src={src} alt={alt} loading={lazy} />
    </div>
  );
};

export default Image;
