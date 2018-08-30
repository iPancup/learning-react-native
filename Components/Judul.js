import React from 'React';
import {Text} from 'react-native';

class Judul extends React.Component{
	render(){
		return(
			<Text style={salon.Judul}>BIODATA</Text>
		)
	}
}

const salon = {
	Judul: {
		color: '#fff',
		fontSize: 50,
		backgroundColor: '#727272'
	}
}

export default Judul;