import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Input, Icon, Button, ButtonGroup } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

export default function PatientRegister ({ navigation, route }) {

	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const { user, setUser } = route.params;

	console.log(user);

	const buttons = [
		{
			element: () => (
				<View style={{flexDirection: "row", alignItems: 'center'}}>
					<Icon
						// color='white'
						name='home'
						type='font-awesome'
						containerStyle={{marginRight: 5}}
					/>
					<Text>Home</Text>
				</View>
			)
		},
		{
			element: () => (
				<View style={{flexDirection: "row", alignItems: 'center'}}>
					<Icon
						// color='white'
						name='hospital-o'
						type='font-awesome'
						containerStyle={{marginRight: 5}}
					/>
					<Text>Hospital</Text>
				</View>
			)
		},
	];
	
	const [selectedIndex, setSelectedIndex] = useState(1);

	const updateIndex = (index) => {
		setSelectedIndex(index);
	}

	const signUp = async () => {
		setIsLoading(true);
		try {
			const response = await fetch('localhost:3000/usuario', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ ...user, nombre: 'Random' }),
			});

			const result = await response.json();
			setIsLoading(false);
			console.log(result);

			if (result.ok) {
				setUser(user);
				setErrorMessage('');
			}
			else {
				setErrorMessage(result.err.message)
			}

		} catch (error) {
			console.error(error);
		}
	};

	return (
		<KeyboardAwareScrollView>
			<KeyboardAvoidingView style={styles.container}>

				<LinearGradient
					colors={['#1284e0', '#002766']}
					style={styles.gradient}
				/>

				<View style={styles.headerContainer}>
					<TouchableOpacity
						style={styles.imageContainer}
					>
						<Image
							style={styles.image}
							source={require("../assets/images/prescription.png")}
						/>

						<Text style={styles.text}>Upload a document that confirms you're COVID-19 positive</Text>

					</TouchableOpacity>
				</View>


			<View style={styles.form} >
				<View>
					<Input
						inputContainerStyle={styles.input}
						placeholder="Full name"
						leftIcon={
							<Icon
								color='white'
								name="account-outline"
								type="material-community"
							/>
						}
						leftIconContainerStyle={{ marginRight: 5 }}
					/>

					<Input
						inputContainerStyle={styles.input}
						placeholder="Country"
						leftIcon={
							<Icon
								color='white'
								name='globe'
								type='font-awesome'
							/>
						}
						leftIconContainerStyle={{ marginRight: 5 }}
					/>

					<Input
						inputContainerStyle={styles.input}
						placeholder="City"
						leftIcon={
							<Icon
								color='white'
								name='city'
								type='material-community'
							/>
						}
						leftIconContainerStyle={{ marginRight: 5 }}
					/>

					<Input
						inputContainerStyle={styles.input}
						placeholder="Zip code"
						leftIcon={
							<Icon
								color='white'
								name='map-marker'
								type='material-community'
							/>
						}
						leftIconContainerStyle={{ marginRight: 5 }}
					/>
				</View>

				<View>
					<Text
						style={styles.questionText}
					>
						I am isolated at:
					</Text>

					<ButtonGroup
						onPress={updateIndex}
						selectedIndex={selectedIndex}
						buttons={buttons}
					/>
				</View>

				<Text style={styles.errorMessage}>{errorMessage}</Text>

				<Button
					title='Continue'
					containerStyle={styles.buttonContainer}
					buttonStyle={styles.button}
					loading={isLoading}
					onPress={signUp}
				/>
				
			</View>
			
			</KeyboardAvoidingView>
		</KeyboardAwareScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
		justifyContent: 'center',
		// alignItems: 'center',
		height: Dimensions.get('window').height
	},
	gradient: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: Dimensions.get('window').height,
	},
	headerContainer: {
		flex: 2,
		marginTop: Constants.statusBarHeight,
		padding: 10,
		// backgroundColor: 'yellow',
	},
	imageContainer: {
		height: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderRadius: 15,
		borderStyle: 'dashed',
		padding: 10,
	},
	image: {
		width: Dimensions.get('window').width * 0.85,
		height: Dimensions.get('window').height * 0.3,
		position: 'absolute',
		resizeMode: 'contain',
	},
	text: {
		textAlignVertical: 'top',
		textAlign: 'center',
		fontFamily: 'sans-serif-condensed',
		fontSize: 20,
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		borderRadius: 15
	},
	form: {
		flex: 3,
		marginTop: 10,
		// justifyContent: 'space-between'
	},
	input: {
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		borderRadius: 15,
		borderBottomWidth: 0,
		marginBottom: 5,
	},
	buttonContainer: {
		marginTop: 10,
		marginHorizontal: 10,
	},
	button: {
		elevation: 1,
		borderRadius: 15,
		backgroundColor: '#0089ff'
	},
	questionText: {
		backgroundColor: '#90cefd',
		borderBottomWidth: 0,
		marginBottom: 5,
		borderRadius: 10,
		textAlign: 'center',
		fontFamily: 'sans-serif-thin',
		fontSize: 20,
		marginHorizontal: 10
	},
	errorMessage: {
		marginHorizontal: 10,
		color: 'red',
	}
});
