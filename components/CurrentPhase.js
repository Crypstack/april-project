import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function CurrentPhase({ }) {

	return (
		<View style={styles.container}>
			<Text style={styles.phaseText}>COVID-19</Text>
			<Text style={styles.phaseNumber}>1510</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// top: '8%',
		height: 50,
		width: (WIDTH - 200),
		elevation: 1,
		// position: 'absolute',
		alignItems: 'center',
		justifyContent: 'space-around',
		// backgroundColor: 'rgba(50, 86, 115, 0.5)',
		// backgroundColor: 'rgba(0, 0, 0, 0.6)',
		backgroundColor: 'rgba(0, 39, 102, 0.6)',
		borderRadius: 50,

	},
	phaseText: {
		// flex: 1,
		fontFamily: 'sans-serif-thin',
		fontSize: 16,
		color: 'white',
	},
	phaseNumber: {
		// flex: 2,
		fontFamily: 'sans-serif-medium',
		fontSize: 21,
		color: '#F9AA33',
	}

});