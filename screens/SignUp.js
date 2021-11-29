import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function SignUp({ navigation, route }) {

	const setSelection = (screen) => {
		let role;

		switch (screen) {
			case 'PatientRegister':
				role = 'USER_ROLE';
				break;
			case 'HealthWorkerRegister':
				role = 'ADMIN_ROLE';
			default:
				break;
		}

		console.log(role);

		navigation.navigate(screen, { 
			user: {
				...route.params.user,
				// email: 'test1@test.com',
				// password: '123456',
				role,
			}
		});
	}
	
	return(
		<View style={styles.container}>
			<LinearGradient
				colors={['#1284e0', '#002766']}
				style={styles.gradient}
			/>

			<Text style={styles.titleText}>
				I am a...
			</Text>

			<View style={styles.cardContainer}>
				<TouchableOpacity
					style={{ ...styles.item, backgroundColor: "#008568" }}
					onPress={() => setSelection('HealthWorkerRegister')}
				>
					<Text style={styles.text}>Health worker</Text>

					<Image
						style={styles.image}
						source={require("../assets/images/nurse.png")}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					style={{ ...styles.item, backgroundColor: "#0c5fc3" }}
					onPress={() => setSelection('PatientRegister')}
				>
					<Text style={styles.text}>Patient</Text>

					<Image
						style={styles.image}
						source={require("../assets/images/patient.png")}
					/>
				</TouchableOpacity>
			</View>
		
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
		justifyContent: 'center',
		// height: Dimensions.get('window').height
	},
	cardContainer: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'space-evenly',
	},
	gradient: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: Dimensions.get('window').height,
	},
	item: {
		width: Dimensions.get('window').width / 2 * 0.80,
		height: Dimensions.get('window').height / 2 * 0.60,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'space-evenly',
		marginBottom: 20,
		padding: 15,
		elevation: 10
	},
	titleText: {
		color: 'white',
		fontFamily: 'sans-serif-thin',
		fontSize: 48,
		textAlign: 'center',
		marginBottom: 20,
	},
	text: {
		color: 'white',
		fontFamily: 'sans-serif-condensed',
		fontSize: 18,
		textAlign: 'center',
		textAlignVertical: 'center',
	},
	image: {
		height: 64,
		width: 64,
	},
});