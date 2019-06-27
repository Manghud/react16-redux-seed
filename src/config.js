const development = {
  displayReduxTools: true
};

const staging = {
  displayReduxTools: true
};

const production = {
  displayReduxTools: false
};

const environmentConfigs = {
  development,
  staging,
  production
};

/*eslint no-undef: off*/
export default environmentConfigs[process.env.REACT_APP_ENVIRONMENT] || dev;
