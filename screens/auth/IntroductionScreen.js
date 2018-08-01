import React                        from 'react';
import { StyleSheet, Text, View }   from 'react-native';
import AppIntroSlider               from 'react-native-app-intro-slider';

import Constants                    from '../../utilities/Constants';

const styles = StyleSheet.create({
  slideImage: {
    width: 100,
    height: 100
  },
  dotStyle: {
    backgroundColor: Constants.styling.colors.secondary,
    borderRadius: 0
  },
  activeDotStyle: {
    backgroundColor: Constants.styling.colors.primary,
    borderRadius: 0
  },
  titleStyle: {
    ...Constants.styling.text,
    textAlign: 'center'
  },
  textStyle: {
    ...Constants.styling.text,
    fontSize: 18
  },
  buttonStyle: {
    marginBottom: 5
  },
  buttonTextStyle: {
    ...Constants.styling.text,
    fontSize: 24
  }
});

const slides = [
  {
    key: 'welcome',
    title: 'Welcome to Bits!',
    text: 'The shittiest app in the history of shitty apps.',
    image: require('../../assets/icon.png'),
    titleStyle: styles.titleStyle,
    textStyle: styles.textStyle,
    imageStyle: styles.slideImage,
    backgroundColor: 'black',
  },
  {
    key: 'description',
    title: 'Why Bits sucks',
    text: `With Bits, you can chat with all your friends! Oh, but there's this tiny catch: you can only send 1\'s and 0\'s. Whoops!`,
    image: require('../../assets/smiley.png'),
    titleStyle: styles.titleStyle,
    textStyle: styles.textStyle,
    imageStyle: styles.slideImage,
    backgroundColor: 'black',
  },
  {
    key: 'bitpoints',
    title: 'Become a\nBitpoints billionaire!',
    text: 'Earn Bitpoints in order to... eh... do stuff! If you work your ass off we may give you the chance to send a "2".',
    image: require('../../assets/bitpoint.png'),
    titleStyle: styles.titleStyle,
    textStyle: styles.textStyle,
    imageStyle: styles.slideImage,
    backgroundColor: 'black',
  }
];

export default class IntroductionScreen extends React.Component {
  render() {
    return (
      <AppIntroSlider
        slides={slides}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        onDone={() => this.props.navigation.navigate('PhoneNumberForm')} />
    );
  }
}
