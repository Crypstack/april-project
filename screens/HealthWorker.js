import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import InputSpinner from "react-native-input-spinner";
import { hospitals } from '../utils/dummy';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

export default function HealthWorker({ }) {

	const hospital = hospitals[0];

	return(
		<View style={styles.container}>
			<LinearGradient
				colors={['#1284e0', '#002766']}
				style={styles.gradient}
			/>
			
			<Image
				style={styles.image}
				source={require("../assets/images/hospital.png")}
			/>

			<Text style={styles.title}>{hospital.name}</Text>
			<Text style={styles.subTitle}>{hospital.address}</Text>


			<View style={styles.fieldContainer}>
				<Image
					style={styles.icon}
					source={require('../assets/images/bed.png')}
				/>

				<Text style={styles.fieldTitle}>Bed availability</Text>

			</View>


			<View style={styles.field}>
				<Text style={{ ...styles.infoText, fontSize: 20 }}>Total</Text>
				
				<InputSpinner
					max={10000}
					min={1}
					step={1}
					// colorMax={"#f04048"}
					// colorMin={"#40c5f4"}
					value={1}
					onChange={(num) => {}}
					style={{ width: 200, alignItems: 'center'}}
					inputStyle={{ ...styles.infoText, fontSize: 20 }}
					buttonStyle={{ height: 32, width: 32, }}
					color='rgba(0, 39, 102, 0.5)'
				/>
			</View>

			<View style={styles.field}>
				<Text style={{ ...styles.infoText, fontSize: 20 }}>Available</Text>
				
				<InputSpinner
					max={10000}
					min={1}
					step={1}
					// colorMax={"#f04048"}
					// colorMin={"#40c5f4"}
					value={1}
					onChange={(num) => {}}
					style={{ width: 200, alignItems: 'center'}}
					inputStyle={{ ...styles.infoText, fontSize: 20 }}
					buttonStyle={{ height: 32, width: 32, }}
					color='rgba(0, 39, 102, 0.5)'
				/>
			</View>

			<View style={styles.fieldContainer}>
				<Image
					style={styles.icon}
					source={require('../assets/images/virus1.png')}
				/>

				<Text style={styles.fieldTitle}>COVID-19 cases</Text>

			</View>


			<View style={styles.field}>
				<Text style={{ ...styles.infoText, fontSize: 20 }}>Infected</Text>
				
				<InputSpinner
					max={10000}
					min={1}
					step={1}
					// colorMax={"#f04048"}
					// colorMin={"#40c5f4"}
					value={1}
					onChange={(num) => {}}
					style={{ width: 200, alignItems: 'center'}}
					inputStyle={{ ...styles.infoText, fontSize: 20 }}
					buttonStyle={{ height: 32, width: 32, }}
					color='rgba(0, 39, 102, 0.5)'
				/>
			</View>

			<View style={styles.field}>
				<Text style={{ ...styles.infoText, fontSize: 20 }}>Deaths</Text>
				
				<InputSpinner
					max={10000}
					min={1}
					step={1}
					// colorMax={"#f04048"}
					// colorMin={"#40c5f4"}
					value={1}
					onChange={(num) => {}}
					style={{ width: 200, alignItems: 'center'}}
					inputStyle={{ ...styles.infoText, fontSize: 20 }}
					buttonStyle={{ height: 32, width: 32, }}
					color='rgba(0, 39, 102, 0.5)'
				/>
			</View>
			

		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: 'center',
		padding: 10,
		
	},
	gradient: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: Dimensions.get('window').height,
	},
	image: {
		height: 64,
		width: 64,
		alignSelf: 'center',
		marginTop: Constants.statusBarHeight,
	},
	title: {
		fontFamily: 'sans-serif-condensed',
		fontSize: 32,
		textAlign: 'center',
		marginBottom: 10,
		color: 'white',
	},
	subTitle: {
		fontFamily: 'sans-serif-thin',
		fontSize: 18,
		textAlign: 'center',
		// marginBottom: 10,
		color: 'white',
	},
	infoText: {
		fontFamily: 'sans-serif-thin',
		fontSize: 22,
		// color: '#545454',
		color: 'white'
	},
	icon: {
		height: 32,
		width: 32,
		// alignSelf: 'flex-start'
		marginRight: 10,
	},
	fieldContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 30,
	},
	fieldTitle: {
		fontFamily: 'sans-serif-condensed',
		fontSize: 22,
		// color: '#545454',
		color: 'white'
	},
	field: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between', 
		// backgroundColor: 'red'
	},
});