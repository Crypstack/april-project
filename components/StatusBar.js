import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;

export default function StatusBar({ }) {

	return (
		<TouchableOpacity
			onPress={() => { }}
			style={styles.container}
		>
			<View style={styles.leftCol}>
				<Text style={styles.header}>
					Muertes
				</Text>
			</View>

			<View style={styles.centerCol}>
				<Text style={styles.header}>
					Infectados
				</Text>
				<Text style={styles.subHeader}>
					4500
				</Text>
			</View>

			<View style={styles.rightCol}>
				<Text style={styles.header}>Recuperados</Text>
			</View>

		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		zIndex: 9,
		position: 'absolute',
		flexDirection: 'row',
		width: (WIDTH - 40),
		height: 100,
		top: 110,
		left: 20,
		borderRadius: 2,
		backgroundColor: 'white',
		alignItems: 'center',
		shadowColor: '#000000',
		elevation: 7,
		shadowRadius: 5,
		shadowOpacity: 1.0,
	},
	leftCol: {
		flex: 2,
		alignItems: 'center',
		backgroundColor: 'red'
	},
	centerCol: {
		flex: 2,
		backgroundColor: 'orange',
		// alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	rightCol: {
		flex: 2,
		borderLeftWidth: 1,
		borderColor: '#ededed',
		backgroundColor: 'lightgreen'
	},
	header: {
		flex: 1,
		fontFamily: 'sans-serif-thin',
		fontSize: 21,
		color: '#545454',
	},
	subHeader: {
		flex: 2,
		fontFamily: 'sans-serif',
		fontSize: 21,
	}
});