import {StyleSheet} from 'react-native';
import {widthDP} from '../../utils/scale';

export default StyleSheet.create({
  button: {
    padding: 5,
    borderRadius: 5,
    width: 120,
    marginRight: widthDP(5),
  },
  connected: {
    backgroundColor: 'green',
  },
  disconnected: {
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
