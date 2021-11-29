import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Avatar, Input, Icon, Button, SocialIcon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient'
import Constants from 'expo-constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Login({ navigation, route }) {

	const setUser = route.params.setUser;

	const [isSignUp, setIsSignUp] = useState(false);
	// const [credentials, setCredentials] = useState(null);
	const [credentials, setCredentials] = useState({email: 'test@test.com', password: '555'})
	const [errorMessage, setErrorMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	// useEffect(() => {
	// 	console.log(credentials);
	// });

	const changeToSignUpView = () => {
		setIsSignUp(true);
	};

	const checkPasswords = (repeated) => {
		if (credentials && credentials.password) {
			credentials.password === repeated ?
				setErrorMessage('')
				: setErrorMessage('Passwords do not match');

			return
		}

		setErrorMessage('');
	};

	const signIn = async () => {
		
		if (!credentials) {
			// setErrorMessage('Fill all the fields');
			setIsLoading(false);
			return 
		}

		console.log(credentials);

		try {
			setIsLoading(true);

			// const response = await fetch('http://127.0.0.1:3000/login', {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json'
			// 	},
			// 	body: JSON.stringify(credentials),
			// });

			// const result = await response.json();
			
			// console.log(result.usuario);
			
			// setUser({
			// 	email: result.usuario.email,
			// 	nombre: result.usuario.nombre,
			// 	role: result.usuario.role,
			// });

			setUser({
				email: "test@email.com",
				nombre: "Ariel TEST",
				role: "ADMIN_ROLE",
			});

			setIsLoading(false);

		} catch (error) {
			console.error(error);
		}

	}

	const continueSignUp = () => {
		if ( credentials && credentials.email && credentials.password){
			navigation.navigate('SignUp', {
				user: {
					...credentials
				}
			})
		}
		else {
			setErrorMessage('Fill all the fields');
		}
	}

	return (
		<KeyboardAwareScrollView>
			<KeyboardAvoidingView style={styles.container}>

				<LinearGradient
					colors={['#1284e0', '#002766']}
					style={styles.gradient}
				/>

				<View style={styles.logo}>

					<Avatar
						rounded
						source={require('../assets/images/coronavirus.png')}
						size='xlarge'
						containerStyle={styles.avatar}
						overlayContainerStyle={{ backgroundColor: 'rgba(255, 255, 255, 0)'}}
					/>

					<Text style={styles.titleText}>
						APRIL PROJECT
					</Text>

				</View>

				<View style={styles.form}>

					{
						isSignUp ?
						<Text style={styles.subTitleText}>Sign Up</Text>
						: null
					}

					<Input
						inputStyle={{color: 'white'}}
						inputContainerStyle={styles.input}
						placeholder="Email"
						leftIcon={
							<Icon
								name="account-outline"
								type="material-community"
								color='white'
							/>
						}
						leftIconContainerStyle={{ marginRight: 5 }}
						onChangeText={ value => setCredentials({ ...credentials, email: value.toLowerCase() })}
						
					/>

					<Input
						inputStyle={{ color: 'white' }}
						inputContainerStyle={styles.input}
						placeholder="Password"
						leftIcon={
							<Icon
								name='lock-outline'
								type='material-community'
								color= 'white'
							/>
						}
						leftIconContainerStyle={{ marginRight: 5 }}
						secureTextEntry={true}
						onChangeText={ value => setCredentials({ ...credentials, password: value })}
					/>
					
					{
						isSignUp ? 
						<View>
							<Input
								inputStyle={{ color: 'white' }}
								inputContainerStyle={styles.input}
								placeholder="Repeat Password"
								leftIcon={
									<Icon
										name='lock-reset'
										type='material-community'
										color='white'
									/>
								}
								leftIconContainerStyle={{ marginRight: 5 }}
								secureTextEntry={true}
								errorMessage={errorMessage}
								onChangeText={value => checkPasswords(value)}
							/>

							<Button
								title='Continue'
								buttonStyle={styles.button}
								containerStyle={styles.loginButtonContainer}
								onPress={continueSignUp}
							/>

							<Button
								title='Cancel'
								type='outline'
								buttonStyle={{ borderRadius: 15, elevation: 1, }}
								containerStyle={{...styles.loginButtonContainer, marginBottom: 10}}
								onPress={() => setIsSignUp(false)}
							/>
						</View>

						:

						<Button
							title='Sign in'
							buttonStyle={styles.button}
							containerStyle={styles.loginButtonContainer}
							loading={isLoading}
							onPress={signIn}
						/>
					}



				</View>

				{
					!isSignUp ?

					<View style={styles.signUpContainer}>
						<Text style={styles.signUpText}>
							Don't have an account? {' '}
							<Text
								style={styles.signUpLink}
								onPress={changeToSignUpView}
							>
								Sign up here
							</Text>
						</Text>
						
						<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
							<View style={styles.hairline} />
							<Text style={styles.orText}>OR</Text>
							<View style={styles.hairline} />
						</View>

						<Text style={styles.signUpText}>
							Sign in with Social Networks
						</Text>


						<View style={styles.social}>
							<SocialIcon
								button
								type='facebook'
								title='Facebook'
								style={{ width: '48%'}}
							/>
							
							<SocialIcon
								button
								type='google'
								title='Google'
								style={{ width: '48%' }}
							/>
						</View>
					</View>

					: null
				}
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
	logo: {
		flex: 2,
		alignItems: 'center',
		paddingTop: Constants.statusBarHeight,
		// backgroundColor: 'red',
	},
	avatar: {
		alignSelf: 'center',
	},
	titleText: {
		color: 'white',
		fontFamily: 'sans-serif-thin',
		fontSize: 46,
	},
	subTitleText: {
		color: 'white',
		fontFamily: 'sans-serif-thin',
		fontSize: 32,
		textAlign: 'center',
		marginBottom: 10,
	},
	form: {
		// flex: 2,
		justifyContent: 'center',
		// backgroundColor: 'orange',
	},
	input: {
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		borderRadius: 15,
		borderBottomWidth: 0,
		marginBottom: 5,
	},
	loginButtonContainer: {
		marginTop: 10,
		marginHorizontal: 10,
	},
	button: {
		borderRadius: 15,
		elevation: 1,
		backgroundColor: '#0089ff'
	},
	signUpContainer: {
		flex: 2,
		justifyContent: 'space-around',
		// backgroundColor: 'yellow',
	},
	signUpText: {
		fontFamily: 'sans-serif-light',
		textAlign: 'center',
		color: 'white'
	},
	signUpLink: {
		fontFamily: 'sans-serif-light',
		color: '#56a5f2',
		textAlign: 'center',
		fontWeight: 'bold',
	},
	social: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	hairline: {
		backgroundColor: '#A2A2A2',
		height: 1,
		width: '40%'
	},
	orText: {
		fontFamily: 'sans-serif',
		fontSize: 14,
		paddingHorizontal: 5,
		alignSelf: 'center',
		color: '#A2A2A2'
	},
});