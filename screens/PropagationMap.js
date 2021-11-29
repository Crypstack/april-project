import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import Virus from '../components/Virus';
import StatusSheet from '../components/StatusSheet';
import CurrentPhase from '../components/CurrentPhase';
import StatusBar from '../components/StatusBar';
import { mapStyle2 } from '../utils/dummy';
import { Button } from 'react-native-elements';

export default PropagationMap = React.forwardRef((props, ref) => {

	// const [location, setLocation] = useState(null);
	// const [region, setRegion] = useState(null);

	const region = props.region;

	return (
		<View style={styles.container}>
			{/* <CurrentPhase /> */}
			{/* <StatusBar /> */}
			<StatusSheet />

			<MapView
				ref={ref}
				style={styles.mapStyle}
				initialRegion={region}
				showsUserLocation={true}
				showsCompass={false}
				rotateEnabled={false}
				showsMyLocationButton={false}
				customMapStyle={mapStyle2}
			>
				<Virus personParam={{
					uid: 'null', location: {
						latitude: 18.9244251,
						longitude: -99.2337445,
					}
				}}
				/>
			</MapView>
		</View >
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	mapStyle: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});