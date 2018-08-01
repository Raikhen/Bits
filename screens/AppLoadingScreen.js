import React                  from 'react';
import { ActivityIndicator }  from 'react-native';
import { AsyncStorage }       from 'react-native';
import { StyleSheet }         from 'react-native';
import { View }               from 'react-native';
import { Text }               from 'react-native';

import loadAssets             from '../utilities/LoadAssets';
import LoadingBoxes           from '../components/LoadingBoxes';

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
    const userToken = await AsyncStorage.getItem('BitsUser');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }

  render() {
    return (
      <View style={styles.container}>
        <LoadingBoxes boxSize={30} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  }
});
