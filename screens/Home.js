import React from 'react';
import { StyleSheet, View, Text, Button, Dimensions, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {
	return (
		<View style={styles.container}>

			<LinearGradient
				colors={['#1284e0', '#002766']}
				style={styles.gradient}
			/>
			
			<View style={styles.titleContainer}>
				<Text style={styles.titleText}>
					APRIL PROJECT
				</Text>
			</View>

			<View style={styles.cardContainer}>
				<TouchableOpacity
					style={{ ...styles.item, backgroundColor: "#c33d29" }}
					onPress={() => navigation.navigate("HospitalAvailability")}
				>
					<Text style={styles.text}>Hospital availability</Text>

					<Image
						style={styles.image}
						source={require("../assets/images/hospital.png")}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					style={{ ...styles.item, backgroundColor: "#6818bf" }}
					onPress={() => navigation.navigate("PropagationMap")}
				>
					<Text style={styles.text}>Propagation map</Text>

					<Image
						style={styles.image}
						source={require("../assets/images/map.png")}
					/>
				</TouchableOpacity>
			</View>
			
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
		justifyContent: 'center',
		// alignItems: 'center',
		height: Dimensions.get('window').height
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
	titleContainer: {
		shadowColor: 'red',
		elevation: 7,
		shadowRadius: 5,
		shadowOpacity: 10,
	},
	titleText: {
		color: 'white',
		fontFamily: 'sans-serif-thin',
		fontSize: 46,
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
	}
});

