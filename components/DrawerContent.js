import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer, Text, Avatar, Title, Caption } from 'react-native-paper';
import { Icon } from 'react-native-elements';


export default function DrawerContent( props ) {

	const { setUser } = props;

	const swapMode = () => {
		const user = props.user.role.includes('ADMIN') ?
		{...props.user, role: 'USER_ROLE'}
		: {...props.user, role: 'ADMIN_ROLE'}

		setUser(user);
		console.log('Swaping to: ', user.role);
	};

	return (
		<View style={styles.container}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={styles.userInfoSection}>
						<View style={{ flexDirection: 'row', marginTop: 15 }}>
							<Avatar.Image
								source={require('../assets/images/ariel.jpg')}
								size={50}
							/>
							<View style={{ marginLeft: 15, flexDirection: 'column' }}>
								<Title style={styles.title}>Ariel Bravo</Title>
								<Caption style={styles.caption}>@arielbravo.cs</Caption>
							</View>
						</View>
					</View>

					<Drawer.Section style={styles.drawerSection}>

						{
							props.user && props.user.role === 'ADMIN_ROLE' ?
							<DrawerItem
								label='Home'
								onPress={() => { props.navigation.navigate('HealthWorker') }}
								icon={({ color, size }) => (
									<Icon
										name='home-outline'
										type='material-community'
										color={color}
										size={size}
									/>
								)}
							/>
							
							: null
						}

						{
							props.user && props.user.role === 'USER_ROLE' ?

								<DrawerItem
									label='Prevention'
									onPress={() => { props.navigation.navigate('Prevention') }}
									icon={({ color, size }) => (
										<Icon
											name='pill'
											type='material-community'
											color={color}
											size={size}
										/>
									)}
								/>
								: null
						}

						<DrawerItem
							label='Swap mode'
							onPress={swapMode}
							icon={({ color, size }) => (
								<Icon
									name='swap-horiz'
									type='material'
									color={color}
									size={size}
								/>
							)}
						/>

						<DrawerItem
							label='Propagation map'
							onPress={() => { props.navigation.navigate('PropagationMap') }}
							icon={({ color, size }) => (
								<Icon
									name='map'
									type='material-community'
									color={color}
									size={size}
								/>
							)}
						/>
					</Drawer.Section>

				</View>
			</DrawerContentScrollView>

			<Drawer.Section style={styles.bottomDrawerSection}>

				<DrawerItem
					label='Sign out'
					onPress={() => { props.setUser(null) }}
					icon={({ focused, color, size }) =>
						<Icon
							name='exit-to-app'
							type='material'
							color={color}
							size={size}
						/>
					}
				/>
			</Drawer.Section>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	drawerContent: {
		flex: 1,
	},
	userInfoSection: {
		paddingLeft: 20,
	},
	title: {
		fontSize: 16,
		marginTop: 3,
		fontWeight: 'bold',
	},
	caption: {
		fontSize: 14,
		lineHeight: 14,
	},
	drawerSection: {
		marginTop: 15,
	},
	bottomDrawerSection: {
		marginBottom: 15,
		borderTopColor: '#f4f4f4',
		borderTopWidth: 1
	},
});

