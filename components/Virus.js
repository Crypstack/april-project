import React, { useState, useRef } from 'react'
import { Image, View } from 'react-native';
import MapView from 'react-native-maps';
import { coors } from '../utils/dummy';

export default function Person({ personParam }) {

	const [person, setPerson] = useState(
		(personParam ?
			personParam
			: {
				uid: 'noPersonPassed',
				location: {
					latitude: 0,
					longitude: 0,
				},
			}
		)
	);

	const [coordinates, setCoordinate] = useState(
		// new MapView.AnimatedRegion({
		// 	latitude: person.location.latitude,
		// 	longitude: person.location.longitude,
		// 	latitudeDelta: 0.045,
		// 	longitudeDelta: 0.045,
		// }),
		coors.map((item, index) => (
			new MapView.AnimatedRegion({
				latitude: item[0],
				longitude: item[1],
				latitudeDelta: 0.045,
				longitudeDelta: 0.045,
			})
		))
	);

	const refMarker = useRef();

	return (
		coordinates.map((coordinate, index) => (
			<MapView.Marker.Animated
				key={index}
				coordinate={coordinate}
				anchor={{ x: 0.35, y: 0.32 }} // center virus.png image
				ref={refMarker}
				style={{ width: 50, height: 50 }}
			>
				<Image
					source={require('../assets/images/virus1.png')}
					style={{
						width: 32,
						height: 32,
					}}
				/>
			</MapView.Marker.Animated>
		))
	);
}