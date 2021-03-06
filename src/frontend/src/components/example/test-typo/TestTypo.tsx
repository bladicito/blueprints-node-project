/**
 * Author: bladimirardiles
 * Component File Name: TestTypo.tsx
 * Component Name: TestTypo
 * Project: blueprints-node-project
 * Date: Tue 28/06/2022 - 15:45
 */

import React from 'react';
import modifierState from '../../../utils/helpers/modifierState';
import './css/test-typo.scss';

interface IProps {
  title: string;
}

const TestTypo = ({ title }: IProps) => {
  const componentName = 'm-test-typo';
  const cssClasses = modifierState(componentName, [], []);

  return (
    <div className={cssClasses}>
      <p className="m-test-typo__title">{title}</p>
      <p className="m-test-typo__title-one">{title}</p>
      <p className="m-test-typo__title-two">{title}</p>
      <p className="m-test-typo__title-three">{title}</p>
      <hr />
      <p className="m-test-typo__body">Welcome to the frontend where the fox jumped the bla bla</p>
      <p className="m-test-typo__body-one">Welcome to the frontend where the fox jumped the bla bla</p>
      <p className="m-test-typo__body-two">Welcome to the frontend where the fox jumped the bla bla</p>
      <p className="m-test-typo__body-three">Welcome to the frontend where the fox jumped the bla bla</p>
      <p className="m-test-typo__body-four">Welcome to the frontend where the fox jumped the bla bla</p>
    </div>
  );
};

export default TestTypo;
