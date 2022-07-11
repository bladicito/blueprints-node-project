/**
 * Author: bladimirardiles
 * Component File Name: ProgressBar.js
 * Component Name: ProgressBar
 * Project: campaign-manager2
 * Date: Fri 01/04/2022 - 09:30
 */

import React, { useMemo } from 'react';
import modifierState from '../../../utils/helpers/modifierState';
import './css/progress-bar.scss';

interface IProps {
  percentage: number;
}

enum EProgressBarStatuses {
  GOOD = 'good',
  GREAT = 'great',
  ALERT = 'alert',
  DANGER = 'danger',
}

const ProgressBar = ({ percentage }: IProps) => {
  const componentName = 'a-progress-bar';
  const cssClasses = useMemo(() => {
    const state = (() => {
      if (percentage < 30) {
        return EProgressBarStatuses.GOOD;
      } else if (percentage < 70) {
        return EProgressBarStatuses.GREAT;
      } else if (percentage >= 70 && percentage < 100) {
        return EProgressBarStatuses.ALERT;
      } else {
        return EProgressBarStatuses.DANGER;
      }
    })();
    return modifierState(componentName, [], [state]);
  }, [componentName, percentage]);

  return (
    <div className={cssClasses}>
      <div className="a-progress-bar__holder">
        <div className="a-progress-bar__progress" style={{ width: `${percentage}%` }} />
        <ol className="a-progress-bar__scale">
          {(() => {
            const items = [];
            for (let x = 1; x < 10; x++) {
              items.push(
                <li className="a-progress-bar__item" style={{ width: `${100 / 8}%` }} key={x}>
                  <div className={`a-progress-bar__tile a-progress-bar__tile--${x}`} />
                </li>
              );
            }
            return items;
          })()}
        </ol>
        <div className="a-progress-bar__progress" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;
