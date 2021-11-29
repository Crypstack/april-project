import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import { prevention, hospitals } from '../utils/dummy';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

export default function Prevention({ }) {

	const renderItem = (item) => (
		<View
			style={{ ...styles.item, ...item.style }}
		>
			<Text style={styles.itemText}>{item.content}</Text>
			<Image
				style={styles.image}
				source={item.image}
			/>
		</View>
	)

	return (
		<View style={styles.container}>
			<LinearGradient
				colors={['#1284e0', '#002766']}
				style={styles.gradient}
			/>

			<View style={{ flex: 2 }}>
				<Text style={styles.title}>#StayAtHome</Text>
				
				<Text style={styles.subTitle}>{prevention.title}</Text>
			</View>


			<View style={styles.listContainer}>
				<FlatList
					data={prevention.do}
					renderItem={({ item }) => renderItem(item)}
					keyExtractor={(item, index) => index.toString()}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		paddingHorizontal: 10,
		// height: prevention.do.length * 120 + 100
	},
	gradient: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: Dimensions.get('window').height,
	},
	item: {
		flexDirection: 'row',
		height: 120,
		borderRadius: 15,
		elevation: 3,
		marginBottom: 10,
	},
	itemText: {
		flex: 4,
		color: 'white',
		fontSize: 18,
		fontFamily: 'sans-serif-condensed',
		textAlign: 'center',
		textAlignVertical: 'center',
		paddingHorizontal: 5,
	},
	image: {
		flex: 2,
		height: 'auto',
		resizeMode: 'contain',
	},
	title: {
		textAlign: 'center',
		fontFamily: 'sans-serif-thin',
		fontSize: 46,
		color: 'white',
	},
	subTitle: {
		textAlign: 'center',
		fontFamily: 'sans-serif-thin',
		fontSize: 22,
		color: 'white',
		marginTop: 15,
		// backgroundColor: 'rgba(255, 255, 255, 0.8)',
		// borderRadius: 15
	},
	listContainer: {
		// marginTop: 25,
		flex: 4,
		height: 300,
		// backgroundColor: 'red'
	}
});