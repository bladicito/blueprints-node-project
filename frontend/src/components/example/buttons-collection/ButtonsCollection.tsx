/**
 * Author: bladimirardiles
 * Component File Name: ButtonsCollection.js
 * Component Name: ButtonsCollection
 * Project: blueprints-node-project
 * Date: Tue 05/07/2022 - 09:38
 */

import React from 'react';
import modifierState from '../../../utils/helpers/modifierState';
import Button, { EButtonModifiers } from '../../atoms/button/Button';
import ButtonsGroup from '../../molecules/buttons-group/ButtonsGroup';
import { EIcon } from '../../../utils/enums/Icons.enum';
import { EButtonIconPosition, EButtonKinds } from '../../../utils/enums/Button.enum';

const ButtonsCollection = () => {
  const componentName = 'm-buttons-collection';
  const cssClasses = modifierState(componentName, [], []);

  return (
    <div className={cssClasses}>
      <ButtonsGroup>
        <Button text="Bordered" modifier={[EButtonModifiers.BORDERED]} />
        <Button text="Danger" modifier={[EButtonModifiers.DANGER]} />
        <Button text="Warning" modifier={[EButtonModifiers.WARNING]} />
        <Button text="Success" modifier={[EButtonModifiers.SUCCESS]} />
        <Button text="Secondary" modifier={[EButtonModifiers.SECONDARY]} />
        <Button text="Default" />
      </ButtonsGroup>
      <ButtonsGroup>
        <Button text="With Icon Left (default)" icon={EIcon.CHEVRON_LEFT} />
        <Button text="With Icon right" icon={EIcon.CHEVRON_RIGHT} iconPosition={EButtonIconPosition.RIGHT} />
        <Button text="With Icon top" icon={EIcon.CHEVRON_UP} iconPosition={EButtonIconPosition.TOP} />
        <Button text="With Icon bottom" icon={EIcon.CHEVRON_DOWN} iconPosition={EButtonIconPosition.BOTTOM} />
        <Button additionalInformation="Additional info" text="With " iconPosition={EButtonIconPosition.RIGHT} />
      </ButtonsGroup>
      <div style={{ marginBottom: 10 }}>
        <Button modifier={[EButtonModifiers.FIT_PARENT]} text="Fit Parent" />
      </div>
      <div style={{ marginBottom: 10 }}>
        <Button
          modifier={[EButtonModifiers.FIT_PARENT]}
          additionalInformation="Additional info"
          text="Fit Parent with additional text"
        />
      </div>
      <ButtonsGroup>
        <Button text="Simple Link" kind={EButtonKinds.LINK} icon={EIcon.CHEVRON_LEFT} />
        <Button text="Simple link 2" kind={EButtonKinds.LINK} />
        <Button
          toolTip="With tooltip native"
          text="Simple Link"
          kind={EButtonKinds.LINK}
          icon={EIcon.CHEVRON_RIGHT}
          iconPosition={EButtonIconPosition.RIGHT}
        />
      </ButtonsGroup>
    </div>
  );
};

export default ButtonsCollection;
