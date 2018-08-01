import { createStackNavigator }   from 'react-navigation';

import IntroductionScreen         from '../screens/auth/IntroductionScreen';
import PhoneNumberFormScreen      from '../screens/auth/PhoneNumberFormScreen';
import SMSConfirmationFormScreen  from '../screens/auth/SMSConfirmationFormScreen';
import NameAndPhotoFormScreen     from '../screens/auth/NameAndPhotoFormScreen';

export default createStackNavigator(
  {
    Introduction: IntroductionScreen,
    PhoneNumberForm: PhoneNumberFormScreen,
    SMSConfirmationForm: SMSConfirmationFormScreen,
    NameAndPhotoForm: NameAndPhotoFormScreen
  },
  {
    initialRouteName: 'Introduction',
    headerMode: 'none'
  }
);
