import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { ListItem } from 'react-native-elements';
import { hospitals } from '../utils/dummy';
import HospitalList from '../components/HospitalList';
import { LinearGradient } from 'expo-linear-gradient';


export default function HospitalAvailability({}) {
	
	return (
		<View style={styles.container}>

			<LinearGradient
				colors={['#1284e0', '#002766']}
				style={styles.gradient}
			/>

			<HospitalList />
			
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(18, 132, 224, 0.8)',
		padding: 10,
	},
	gradient: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: Dimensions.get('window').height,
	},
	listItem: {
		height: 'auto',
		borderRadius: 15,
		backgroundColor: 'white',
		marginBottom: 5,
		padding: 10,

		// backgroundColor: 'red',
	},
	summary: {
		height: 30,
		flexDirection: 'row',
		// alignContent: 'stretch',
		// justifyContent: 'center',
	},
	hospitalName: {
		fontFamily: 'sans-serif-condensed',
		fontSize: 20,
		color: '#545454',
	},
	info: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 5,
		borderRightColor: '#ededed',
		borderRightWidth: 1,
		paddingRight: 10,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	infoText: {
		fontFamily: 'sans-serif-thin',
		fontSize: 18,
		color: '#545454',
	},	
	image: {
		height: 20,
		width: 20,
		marginRight: 10,
	}
})