import React, { useState } from 'react';
import { Input, Icon, Tile, Button } from 'react-native-elements';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function HealthWorkerRegister({ navigation, route }) {

	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	
	const { user, setUser } = route.params;

	console.log(user);

	const signUp = async () => {
		setIsLoading(true);
		console.log(user);

		try {
			const response = await fetch('https://april-project.herokuapp.com/usuario', {
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
					<TouchableOpacity style={styles.imageContainer}>
						<Image
							style={styles.image}
							source={require("../assets/images/idcard.png")}
						/>

						<Text style={styles.text}>Upload an ID that identifies you as a Health worker</Text>

					</TouchableOpacity>
				</View>

				<View style={styles.form}>

					<Text style={styles.subTitleText}>
						About you
					</Text>
					
					<Input
						inputStyle={{color: 'white'}}
						inputContainerStyle={styles.input}
						placeholder="Full name"
						leftIcon={
							<Icon
								name="account-outline"
								type="material-community"
								color='white'
							/>
						}
						leftIconContainerStyle={{ marginRight: 5 }}
					/>

					<Input
						inputStyle={{color: 'white'}}
						inputContainerStyle={styles.input}
						placeholder="Country"
						leftIcon={
							<Icon
								name='globe'
								type='font-awesome'
								color='white'
							/>
						}
						leftIconContainerStyle={{ marginRight: 5 }}
					/>

					<Input
						inputStyle={{color: 'white'}}
						inputContainerStyle={styles.input}
						placeholder="City"
						leftIcon={
							<Icon
								name='city'
								type='material-community'
								color='white'
							/>
						}
						leftIconContainerStyle={{marginRight: 5}}
					/>

					<Input
						inputStyle={{color: 'white'}}
						inputContainerStyle={styles.input}
						placeholder="Hospital"
						leftIcon={
							<Icon
								name='hospital-o'
								type='font-awesome'
								color='white'
							/>
						}
						leftIconContainerStyle={{ marginRight: 5 }}
					/>

					<Input
						inputStyle={{color: 'white'}}
						inputContainerStyle={styles.input}
						placeholder="Job"
						leftIcon={
							<Icon
								name='stethoscope'
								type='font-awesome'
								color='white'
							/>
						}
						leftIconContainerStyle={{ marginRight: 5 }}
					/>


					<Text style={styles.errorMessage}>{errorMessage}</Text>

					<Button
						title='Continue'
						buttonStyle={styles.button}
						containerStyle={styles.buttonContainer}
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
	subTitleText: {
		color: 'white',
		fontFamily: 'sans-serif-thin',
		fontSize: 32,
		textAlign: 'center',
		marginBottom: 10,
	},
	form: {
		flex: 4,
		marginTop: 10,
		// justifyContent: 'center',
		// backgroundColor: 'red',
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
	errorMessage: {
		marginHorizontal: 10,
		color: 'red',
	}
});
 
