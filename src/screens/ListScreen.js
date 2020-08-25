/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-ionicons';
import Header from '../components/Header';

function ListView() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}>
      <Text>Here goes list items</Text>
    </View>
  );
}

function ListScreen({navigation}) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Header title={'List'} />
        <ListView />
        <View style={styles.fabContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Modal')}
            style={styles.fabButton}>
            <Icon ios="ios-add" android="md-add" color="#fff" size={70} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  fabContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    bottom: 20,
  },
  fabButton: {
    backgroundColor: 'blue',
    borderRadius: 35,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ListScreen;
