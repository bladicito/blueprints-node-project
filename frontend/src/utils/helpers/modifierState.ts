const modifierState = (
  componentName: string,
  modifier: Array<string> | null | undefined,
  state: Array<string> | null | undefined
) => {
  const cssClasses = [componentName];
  if (modifier && Array.isArray(modifier)) {
    modifier.forEach((mod) => {
      cssClasses.push(`${componentName}--${mod}`);
    });
  }

  if (state && Array.isArray(state)) {
    state.forEach((sta) => {
      cssClasses.push(`state-${componentName}--${sta}`);
    });
  }
  return cssClasses.join(' ');
};

export default modifierState;
