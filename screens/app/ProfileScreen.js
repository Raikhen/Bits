import React                        from 'react';
import { StyleSheet, Image, View, Share }  from 'react-native';

import { getCurrentUser }           from '../../backend/getCurrentUser';
import Constants                    from '../../utilities/Constants';
import Screen                       from '../../components/Screen';
import Button                       from '../../components/Button';
import BitsText                     from '../../components/BitsText';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile'
  };

  constructor(props) {
    super(props);
    
    this.shareApp = this.shareApp.bind(this);
    
    this.state = {
      user: null
    };
  }

  shareApp() {
    Share.share({
      title: 'Bits!!110!',
      message: 'Check out this Bits app! 0\'s and 1\'s everywhere. https://bits.com/',
    }, {
      // Android only:
      dialogTitle: 'Share B1TS G00DNESS',
      // iOS only:
      excludedActivityTypes: []
    });
  }

  componentWillMount() {
    const user = getCurrentUser();
    this.setState({ user });
  }

  render() {
    let { photoURL, displayName } = this.state.user.providerData[0];
    let imageHeight = 500;
    
    return (
      <Screen style={styles.screen}>
        <View>
          <Image
            style={{width: 256, height: 256}}
            source={{uri: photoURL + '?height=' + imageHeight}}
          />
          <BitsText style={styles.name}>{ displayName }</BitsText>
          <Button
            style={styles.shareButton}
            onPress={this.shareApp}
            icon='share'
            iconSize={30}
            text='Share'
          />
          <Button
            onPress={() => {}}
            icon='bitcoin'
            iconSize={30}
            text='Bitpoints: 2'
          />
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    textAlign: 'center',
    fontSize: 32,
    marginTop: 30
  },
  shareButton: {
    ...Constants.styling.text
  }
});
