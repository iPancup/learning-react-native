import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Text>Nama : Ivan Yusuf Satria</Text>
            <Text>Kelas : XI RPL 4</Text>
            <Text>No Absen : 18</Text>
            <Image
            style={{height:256,width:191}}
            source={require('./1.jpg')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
