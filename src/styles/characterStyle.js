import {StyleSheet} from 'react-native';
import Colors from '../theme/colors';

export const characterStyle = StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
  },
  name: {
    marginVertical: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.DARK,
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  aliveStatusContainer: {
    backgroundColor: Colors.TABICON,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 8,
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
  },
  deadStatusContainer: {
    backgroundColor: Colors.DARK,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 8,
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
  },
  status: {
    color: Colors.BGTAB,
    fontWeight: '600',
    fontSize: 16,
  },
  statusAliveBorder: {
    borderColor: Colors.TABICON,
  },
  statusDeadBorder: {
    borderColor: Colors.DARK,
  },
  sectionTitle: {
    color: Colors.DETAIL,
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  sectionContainer: {
    margin: 5,
    paddingHorizontal: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 4,
  },
  infoContainer: {
    backgroundColor: Colors.BGTAB,
    padding: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  infoBox: {
    backgroundColor: Colors.DETAIL2,
    padding: 10,
    marginLeft: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
});
