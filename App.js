import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Judul from './Components/Judul';


export default class App extends React.Component {
    render() {
        return (
          <View style={styles.container}>
          <Judul title="BIODATA"/>
          <Judul title="USERNAME"/>
          <Judul title="PASSWORD"/>
            <Text style={warna.teks}>Nama : Ivan Yusuf Satria</Text>
            <Text style={warna.teks}>Kelas : XI RPL 4</Text>
            <Text style={warna.teks}>No Absen : 18</Text>
            <Image
            style={{height:250,width:200}}
            source={require('./2.jpg')}/>
      </View>
    );
  }
}
const warna={
	teks:{
		color:'#FFFFFF'
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
