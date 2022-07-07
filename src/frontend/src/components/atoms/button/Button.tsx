import React, { useMemo } from 'react';
import modifierState from '../../../utils/helpers/modifierState';
import './css/button.scss';
import { IHtmlButton } from '../../../utils/interfaces/HtmlButton.interface';
import { Link } from 'react-router-dom';
import { EButtonIconPosition, EButtonKinds } from '../../../utils/enums/Button.enum';
import Icon, { EIConModifiers } from '../icon/Icon';

// import { v4 as uuidv4 } from 'uuid';

export enum EButtonModifiers {
  BORDERED = 'bordered',
  DANGER = 'danger',
  WARNING = 'warning',
  LINK = 'link',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  TRANSPARENT = 'transparent',
  FIT_PARENT = 'fit-parent',
  FONT_INHERIT = 'font-inherit',
  ICON = 'icon',
  ICON_ONLY = 'icon-only',
  ICON_LEFT = 'icon-left',
  ICON_RIGHT = 'icon-right',
  ICON_TOP = 'icon-top',
  ICON_BOTTOM = 'icon-bottom',
  ICON_TEXT_LARGE = 'icon-text-large',
  SITE_TITLE = 'site-title',
  MULTILINE = 'multiline',
}

const Button = ({
  data,
  iconPosition = EButtonIconPosition.LEFT,
  additionalInformation,
  customClickEvent,
  disabled,
  href,
  isExternalLink,
  kind = EButtonKinds.BUTTON,
  modifier = [],
  state,
  text,
  type = 'button',
  icon,
  iconOnly = false,
  value,
  toolTip,
  stopPropagation = false,
  copyToClipboardMessage,
}: IHtmlButton) => {
  const componentName = 'a-button';
  const internMarkup = useMemo(() => {
    if (!icon) {
      return <span className="a-button__text">{text}</span>;
    } else {
      const iconMarkup = <Icon type={icon} modifier={[EIConModifiers.FIT_PARENT]} />;
      const iconLeftOrTop = iconPosition === EButtonIconPosition.LEFT || iconPosition === EButtonIconPosition.TOP;
      const iconRightOrBottom =
        iconPosition === EButtonIconPosition.RIGHT || iconPosition === EButtonIconPosition.BOTTOM;

      return (
        <span className="a-button__icon-text">
          {iconLeftOrTop && <span className="a-button__icon">{iconMarkup}</span>}
          <span className="a-button__text">{text}</span>
          {iconRightOrBottom && <span className="a-button__icon">{iconMarkup}</span>}
        </span>
      );
    }
  }, [icon, iconPosition, text]);

  const cssClasses = useMemo(() => {
    if (icon) {
      if (!modifier.includes(EButtonModifiers.ICON) && !modifier.includes(EButtonModifiers.ICON_TEXT_LARGE)) {
        modifier.push(EButtonModifiers.ICON);
      }

      if (!modifier.includes(EButtonModifiers.ICON_LEFT) && iconPosition === EButtonIconPosition.LEFT) {
        modifier.push(EButtonModifiers.ICON_LEFT);
      }

      if (!modifier.includes(EButtonModifiers.ICON_RIGHT) && iconPosition === EButtonIconPosition.RIGHT) {
        modifier.push(EButtonModifiers.ICON_RIGHT);
      }

      if (!modifier.includes(EButtonModifiers.ICON_TOP) && iconPosition === EButtonIconPosition.TOP) {
        modifier.push(EButtonModifiers.ICON_TOP);
      }

      if (!modifier.includes(EButtonModifiers.ICON_BOTTOM) && iconPosition === EButtonIconPosition.BOTTOM) {
        modifier.push(EButtonModifiers.ICON_BOTTOM);
      }
    }

    if (iconOnly) {
      if (!modifier.includes(EButtonModifiers.ICON_ONLY)) {
        modifier.push(EButtonModifiers.ICON_ONLY);
      }
    }
    if (additionalInformation) {
      if (!modifier.includes(EButtonModifiers.MULTILINE)) {
        modifier.push(EButtonModifiers.MULTILINE);
      }
    }

    return modifierState(componentName, modifier, state);
  }, [icon, iconOnly, iconPosition, modifier, additionalInformation, state]);

  const additionalInformationHtml = useMemo(() => {
    if (additionalInformation) {
      return <span className="a-button__additional-information">{additionalInformation}</span>;
    } else return null;
  }, [additionalInformation]);

  if (kind === EButtonKinds.LINK) {
    if (isExternalLink) {
      return (
        <a
          className={`${cssClasses} a-button--link`}
          href={href}
          target="_blank"
          rel="noreferrer"
          title={toolTip ? toolTip : ''}
          onClick={
            stopPropagation
              ? (evt) => {
                  evt.stopPropagation();
                }
              : () => {}
          }
        >
          {internMarkup}
          {additionalInformationHtml}
        </a>
      );
    } else {
      return (
        <a className={`${cssClasses} a-button--link`} href={href} title={toolTip ? toolTip : ''}>
          {internMarkup}
          {additionalInformationHtml}
        </a>
      );
    }
  } else if (kind === EButtonKinds.COPY_TO_CLIPBOARD) {
    // maybe we need to use an uuid for selector. normally values to be copied are already uuids
    return (
      <button
        title={toolTip ? toolTip : ''}
        data-data={data}
        className={`${cssClasses} ${value ? `js-trigger-clipboard-${value}` : ''}`}
        type={type}
        disabled={disabled}
        value={value}
        onClick={(evt) => {
          evt.stopPropagation();
          if (value) {
            navigator.clipboard
              .writeText(value)
              .then(() => {
                alert('success');
                // dispatchNotification({
                //   type: ENotificationActions.ADD,
                //   payload: {
                //     identifier: uuidv4(),
                //     type: ENotificationTypes.SUCCESS,
                //     icon: EIcon.SMILE,
                //     text: copyToClipboardMessage ? copyToClipboardMessage : `${value} was copied to clipboard`,
                //     duration: 5000,
                //   },
                // });
              })
              .catch((error) => {
                console.log(error);
                alert('error');
                // dispatchNotification({
                //   type: ENotificationActions.ADD,
                //   payload: {
                //     identifier: uuidv4(),
                //     type: ENotificationTypes.WARNING,
                //     icon: EIcon.SMILE,
                //     text: 'We could not copy the content. Open the console for more information',
                //     duration: 5000,
                //   },
                // });
              });
          }
        }}
      >
        {internMarkup}
        {additionalInformationHtml}
      </button>
    );
  } else if (kind === EButtonKinds.LINK_REACT_ROUTER) {
    return (
      // todo fix href should not be undefined
      <Link className={`${cssClasses}`} to={href ? href : '/'} title={toolTip ? toolTip : ''}>
        {internMarkup}
        {additionalInformationHtml}
      </Link>
    );
  } else {
    return (
      <button
        title={toolTip ? toolTip : ''}
        data-data={data}
        className={cssClasses}
        type={type}
        disabled={disabled}
        value={value}
        onClick={(event) => {
          if (typeof customClickEvent === 'function') {
            if (value) {
              customClickEvent(value);
            } else {
              customClickEvent(event);
            }
          } else {
            if (type !== 'submit') {
              event.preventDefault();
            }
          }
        }}
      >
        {internMarkup}
        {additionalInformationHtml}
      </button>
    );
  }
};

export default Button;
