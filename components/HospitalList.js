import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { hospitals } from '../utils/dummy';

export default function HospitalList ({}) {

	const renderItem = (hospital, index, separator) => {

		return (
			<View style={styles.listItem}>

				<Text style={styles.hospitalName}>{hospital.name}</Text>

				<View style={styles.summary}>
					{
						Object.values(hospital.summary).map((item, index1) => (
							<View
								key={index1}
								style={styles.info}
							>
								<Image
									style={styles.image}
									source={item.img}
								/>

								<Text style={styles.infoText}>{item.total}</Text>
							</View>
						))
					}

					{/* <Image
					style={styles.image}
					source={require('../assets/images/virus.png')}
				/>

				<Text>{hospital.infected}</Text> */}
				</View>

			</View>
		);
	}
	
	return (
		<View style={{ height: 300}}>
			<FlatList
				data={hospitals}
				renderItem={({ item }) => renderItem(item)}
				keyExtractor={item => item.name}
			/>
		</View>
		
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#e5f1fc',
		padding: 10,
	},
	listItem: {
		height: 'auto',
		borderRadius: 15,
		backgroundColor: 'white',
		marginBottom: 5,
		padding: 10,

		// backgroundColor: 'red',
	},
	summary: {
		height: 30,
		flexDirection: 'row',
		// alignContent: 'stretch',
		// justifyContent: 'center',
	},
	hospitalName: {
		fontFamily: 'sans-serif-condensed',
		fontSize: 20,
		color: '#545454',
	},
	info: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 5,
		borderRightColor: '#ededed',
		borderRightWidth: 1,
		paddingRight: 10,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	infoText: {
		fontFamily: 'sans-serif-thin',
		fontSize: 18,
		color: '#545454',
	},
	image: {
		height: 20,
		width: 20,
		marginRight: 10,
	}
})