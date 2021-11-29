import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';


// Screens
import PropagationMap from '../screens/PropagationMap';
import HealthWorkerRegister from '../screens/HealthWorkerRegister';
import PatientRegister from '../screens/PatientRegister';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import { Icon } from 'react-native-elements';
import CurrentPhase from '../components/CurrentPhase';
import HealthWorker from '../screens/HealthWorker';
import DrawerContent from '../components/DrawerContent';
import Prevention from '../components/Prevention';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export function RootNavigator() {

	const [user, setUser] = useState(null);
	const [location, setLocation] = useState(null);
	const [region, setRegion] = useState(null);

	const map = useRef(null);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestPermissionsAsync();

			let location = null;
			// console.log(status)

			if (status !== 'granted') {
				console.log('Permission to access location was denied');
			}
			else {
				try {
					location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
				} catch (error) {
					// If the user rejects to use the location
					location = {
						coords: {
							latitude: 18.9647751,
							longitude: - 99.2349478,
						}
					}
				}
			}

			location = {
				coords: {
					latitude: 18.905617,
					longitude: -99.178062
				}
			}

			// console.log(location)
			setLocation(location);

			setRegion({
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
				latitudeDelta: 0.045,
				longitudeDelta: 0.045,
			});
		})(); // Calling the function at the same time that is declared
	}, []);
	
	const centerMap = () => {
		map.current.animateToRegion({
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
			latitudeDelta: 0.045,
			longitudeDelta: 0.045,
		});
	};

	const Propagation = (props) => {

		return (
			<PropagationMap {...props} region={region} ref={map} />
		)
	};

	const HomeStackMavigator = () => (
		<Stack.Navigator
			headerMode='screen'
		>

			{
				user && user.role === 'ADMIN_ROLE' ?

				<Stack.Screen
					name='HealthWorker'
					component={HealthWorker}
					options={({ navigation }) => ({
						title: '',
						headerTransparent: true,
						headerLeft: () => (
							<Icon
								reverse
								name='menu'
								type='material'
								color='rgba(0, 39, 102, 0.1)'
								onPress={() => navigation.toggleDrawer()}
							/>
						)
						// headerRight: () => (
						// 	<Icon
						// 		reverse
						// 		name='map'
						// 		type='material'
						// 		color='rgba(0, 39, 102, 0.6)'
						// 		onPress={() => navigation.navigate('PropagationMap')}
						// 	/>
						// ),
					})}
				/>

				: null
			}

			{
				user && user.role === 'USER_ROLE' ?
				
				<Stack.Screen
					name='Prevention'
					component={Prevention}
					// options={{
					// 	headerShown: false,
					// }}
					options={({ navigation }) => ({
						title: '',
						headerTransparent: true,
						headerLeft: () => (
							<Icon
								reverse
								name='menu'
								type='material'
								color='rgba(0, 39, 102, 0.1)'
								onPress={() => navigation.toggleDrawer()}
							/>
						)
					})}
				/>

				: null
			}


			<Stack.Screen
				name="PropagationMap"
				component={Propagation}
				options={({ navigation }) => ({
					// title: 'Propagation map',
					headerTitleAlign: 'center',
					headerTitle: props => <CurrentPhase />,
					headerStyle: {
						// backgroundColor: '#325673'
						// backgroundColor: 'rgba(0, 39, 102, 1)',

					},
					// headerTintColor: '#F9AA33',
					headerTransparent: true,
					headerTintColor: 'white',
					headerTitleStyle: {
						fontFamily: 'sans-serif-thin',
					},
					headerLeft: () => (
						// <Icon
						// 	reverse
						// 	name={
						// 		user.email === 'health' ?
						// 		'arrow-back'
						// 		: 'exit-to-app'
						// 	}
						// 	type='material'
						// 	color='rgba(0, 39, 102, 0.6)'
						// 	onPress={() => {
						// 		user.email === 'health' ?
						// 		navigation.dispatch(CommonActions.goBack())
						// 		: setUser(null)
						// 	}}
						// />
						
						<Icon
							reverse
							name = 'menu'
							type = 'material'
							color = 'rgba(0, 39, 102, 0.6)'
							onPress = { () => navigation.toggleDrawer() }
						/>
					),
					headerRight: () => (
						<Icon
							reverse
							name='gps-fixed'
							type='material'
							color='rgba(0, 39, 102, 0.6)'
							onPress={centerMap}
						/>
					),
				})}
			/>

		</Stack.Navigator>
	);

	const LoginStackNavigator = () => (
		<Stack.Navigator
			headerMode="screen"
		>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{
					headerShown: false,
				}}
				initialParams={{
					// do this causes a warning about non-serializable value in React-Navigation
					setUser,
				}}
			/>

			<Stack.Screen
				name="HealthWorkerRegister"
				component={HealthWorkerRegister}
				options={{
					headerShown: false,
					title: 'Register',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#325673'
					},
					headerTintColor: '#F9AA33'
				}}
				initialParams={{
					// do this causes a warning about non-serializable value in React-Navigation
					setUser,
				}}
			/>

			<Stack.Screen
				name="PatientRegister"
				component={PatientRegister}
				options={{
					headerShown: false,
					title: 'Register',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#325673'
					},
					headerTintColor: '#F9AA33'
				}}
				initialParams={{
					// do this causes a warning about non-serializable value in React-Navigation
					setUser,
				}}
			/>

			<Stack.Screen
				name="SignUp"
				component={SignUp}
				options={{
					headerShown: false,
					title: 'Sign up',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#325673'
					},
					headerTintColor: '#F9AA33'
				}}
			/>

		</Stack.Navigator>
	);

	return (
		<NavigationContainer>

			{
				// user ?
				// HomeStackMavigator
				// : LoginStackNavigator
				// MenuDrawerNavigator
			}

			<Drawer.Navigator
				initialRouteName='Home'
				drawerContent={ (props) => DrawerContent({...props, user, setUser})}
			>
				{
					user ?

					<Drawer.Screen
						name="Home"
						component={HomeStackMavigator}
					/>
					
					:
					
					<Drawer.Screen
						name="Login"
						component={LoginStackNavigator}
						options={{
							swipeEnabled: false,
						}}
					/>
				}


			</Drawer.Navigator>

			
		</NavigationContainer>
	);	
};

