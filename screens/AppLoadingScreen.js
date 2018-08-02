import React                  from 'react';
import { AsyncStorage }       from 'react-native';
import { StyleSheet }         from 'react-native';

import loadAssets             from '../utilities/loadAssets';
import LoadingBoxes           from '../components/LoadingBoxes';
import Screen                 from '../components/Screen';

export default class AppLoadingScreen extends React.Component {
  async componentWillMount() {
    try {
      await loadAssets();
    } catch (e) {
      console.warn('There was an error loading the assets:', e.message);
    } finally {
      this.redirect();
    }
  }

  async redirect() {
    const { navigate } = this.props.navigation;
    const finishedIntro = await AsyncStorage.getItem('FinishedIntroduction');
    const isUserLogged = await AsyncStorage.getItem('FacebookUserID');

    if (!finishedIntro) navigate('Auth');
    else navigate(isUserLogged ? 'App' : 'Login');
  }

  render() {
    return (
      <Screen style={styles.container}>
        <LoadingBoxes boxSize={30} />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
