import React, { useState, useEffect, useRef } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	TouchableOpacity
} from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet'

import Prevention from './Prevention';
import Symptoms from './Symptoms';
import HospitalList from './HospitalList';
import { Icon } from 'react-native-elements';

const HEIGHT = Dimensions.get('window').height;

export default function StatusSheet({ }) {

	const renderInner = () => {

		return (
			<View style={styles.panel}>

				<HospitalList />
				
			</View>
		)
	}

	renderHeader = () => (
		<View style={styles.header}>
					<Icon
						reverse
						name='hospital-o'
						type='font-awesome'
						color='rgba(0, 39, 102, 1)'
						containerStyle={styles.icon}
						iconStyle={{ color: '#F9AA33'}}
					/>
			{/* <View style={styles.panelHeader}>
				<View style={styles.panelHandle}>
				</View>
			</View> */}
		</View>
	)

	bs = useRef()

	return (
		<BottomSheet
			ref={bs}
			snapPoints={[HEIGHT * 0.6, 215]}
			renderContent={renderInner}
			renderHeader={renderHeader}
			initialSnap={1}
			enabledContentGestureInteraction={false}
		/>
	)

}

const styles = StyleSheet.create({
	panel: {
		height: 'auto',
		backgroundColor: 'rgba(18, 132, 224, 0.8)',
		padding: 20,
	},
	header: {
		// backgroundColor: '#325673',
		backgroundColor: 'rgba(0, 39, 102, 1)',
		paddingBottom: 30,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		height: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	icon: {
		height: 64,
		width: 64,
	},
})
