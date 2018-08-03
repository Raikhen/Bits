// Constants

const Constants = {
  styling: {}
};

Constants.styling.colors = {
  primary: 'lime',
  secondary: 'green',
  tertiary: 'black',
  quaternary: '#002400',
  quinary: '#004800'
};

Constants.styling.text = {
  color: Constants.styling.colors.primary,
  fontFamily: 'VT323'
}

Constants.styling.headerStyle = {
  borderBottomWidth: 3,
  borderColor: Constants.styling.colors.primary,
  backgroundColor: Constants.styling.colors.tertiary
};

Constants.styling.headerTitleStyle = {
  ...Constants.styling.text,
  fontWeight: '200',
  fontSize: 24
};

export default Constants;
