import {StyleSheet} from 'react-native';
import {heightDP, widthDP} from '../../utils/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: heightDP(10),
    alignItems: 'center',
    justifyContent: 'center',
    height: heightDP(100),
    paddingHorizontal: widthDP(5),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    opacity: 0.8,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  basicButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  basicButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  p: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  positionBottom: {
    marginTop: 'auto',
    marginBottom: heightDP(20),
  },
});
