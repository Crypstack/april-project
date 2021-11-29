export const news = [
	{
		"source": {
			"id": null,
			"name": "Telemundochicago.com"
		},
		"author": "TELEMUNDO LOCAL",
		"title": "UChicago inicia pruebas con plasma de pacientes que vencieron al COVID-19 - Telemundo Chicago",
		"description": "El plasma será usado en el tratamiento de pacientes en condición crítica.",
		"url": "https://www.telemundochicago.com/noticias/local/universidad-de-medicina-de-chicago-lanza-ensayo-con-plasma-de-pacientes-recuperados-de-covid-19/2081479/",
		"urlToImage": "https://media.telemundochicago.com/2019/09/Plasma1380-universidad-chicago.jpg?resize=1200%2C675",
		"publishedAt": "2020-04-13T17:55:00Z",
		"content": "La Universidad de Medicina de Chicago comenzó un ensayo clínico para estudiar si el plasma sanguíneo de las personas que se han recuperado de COVID-19 puede usarse para tratar a pacientes internados en el hospital en estado grave.\r\nEl ensayo reclutará donante… [+2931 chars]"
	},
	{
		"source": {
			"id": null,
			"name": "Sputniknews.com"
		},
		"author": "Víctor Flores García. Sputnik Mundo",
		"title": "El coronavirus marca el renacer de la medicina tradicional en México - Sputnik Mundo",
		"description": "ATLIXCO, MÉXICO (Sputnik) — Los hierberos mexicanos recobran la confianza y su buena reputación y aumentan las ventas de sus plantas para tratamientos de la ancestral...",
		"url": "https://mundo.sputniknews.com/america-latina/202004131091093645-el-coronavirus-marca-el-renacer-de-la-medicina-tradicional-en-mexico/",
		"urlToImage": "https://cdnmundo4.img.sputniknews.com/sharing_snippet/1091093645.png?1586795280",
		"publishedAt": "2020-04-13T16:31:23Z",
		"content": "ATLIXCO, MÉXICO (Sputnik) Los hierberos mexicanos recobran la confianza y su buena reputación y aumentan las ventas de sus plantas para tratamientos de la ancestral medicina tradicional, recomendada ante enfermedades respiratorias en tiempos de la pandemia de… [+4695 chars]"
	},
	{
		"source": {
			"id": "marca",
			"name": "Marca"
		},
		"author": "Redacción Tiramillas",
		"title": "El sentir de los estudiantes de medicina en USA: \"Es muy difícil no ayudar cuando te sientes moral y - Marca Claro USA",
		"description": "Estados Unidos es el país que aparece en lo más alto cuando se ordena el mundo por número de víctimas mortales a causa del coronavirus: 22.106...",
		"url": "https://us.marca.com/claro/mas-trending/2020/04/13/5e9473c7268e3ede358b461a.html",
		"urlToImage": "https://e00-us-marca.uecdn.es/claro/assets/multimedia/imagenes/2020/04/13/15867881343276.jpg",
		"publishedAt": "2020-04-13T14:33:00Z",
		"content": "Coronavirus en Estados Unidos en vivo hoy 13 de abril\r\nEstados Unidos es el país que aparece en lo más alto cuando se ordena el mundo por número de víctimas mortales a causa del coronavirus: 22.106 muertos y más de medio millón de personas contagiadas. Desde … [+2679 chars]"
	},
	{
		"source": {
			"id": null,
			"name": "Pulsoslp.com.mx"
		},
		"author": null,
		"title": "Ensalzan a alumnos de medicina que seguirán en el HC - Pulso Diario de San Luis",
		"description": "Los estudiantes de la Medicina de la UASLP que decidieron quedarse de forma voluntaria en el Hospital Central, un gran acto de caridad, pues vencieron...",
		"url": "https://pulsoslp.com.mx/slp/ensalzan-a-alumnos-de-medicina-que-seguiran-en-el-hc-/1098211",
		"urlToImage": "https://pulsoslp.com.mx/images/tnfocus/0/0/600/315/2020/04/13/ensalzanaalumnosdemedicinaque.jpg",
		"publishedAt": "2020-04-13T08:26:11Z",
		"content": "Los estudiantes de la Medicina de la UASLP que decidieron quedarse de forma voluntaria en el Hospital Central, un gran acto de caridad, pues vencieron el miedo del egoísmo; no es tiempo de partidos políticos, sino de caridad ciudadana; además, los delincuente… [+968 chars]"
	},
]

export const prevention = {
	title: 'You can protect yourself and help prevent spreading the virus to others if you:',
	do: [
		{
			content: 'Wash your hands regularly for 20 seconds, with soap and water or alcohol - based hand rub',
			image: require('../assets/images/hands.png'),
			style: {
				backgroundColor: '#5998cc',
			},
		},
		{
			content: 'Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze',
			image: require('../assets/images/sneeze.png'),
			style: {
				backgroundColor: '#a177d6',
			}
		},
		{
			content: 'Avoid close contact(1 meter or 3 feet) with people who are unwell',
			image: require('../assets/images/contact.png'),
			style: {
				backgroundColor: '#df8948',
			}
		},
		{
			content: 'Stay home and self - isolate from others in the household if you feel unwell',
			image: require('../assets/images/home.png'),
			style: {
				backgroundColor: '#00b39f',
			}
		},
	],
	dont: {
		list: [
			'Touch your eyes, nose, or mouth if your hands are not clean',
		],
	}
}

export const mapStyle1 = [
	{
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#242f3e"
			}
		]
	},
	{
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#746855"
			}
		]
	},
	{
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"color": "#242f3e"
			}
		]
	},
	{
		"featureType": "administrative.locality",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#d59563"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#d59563"
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#263c3f"
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#6b9a76"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#38414e"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#212a37"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#9ca5b3"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#746855"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#1f2835"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#f3d19c"
			}
		]
	},
	{
		"featureType": "transit",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#2f3948"
			}
		]
	},
	{
		"featureType": "transit.station",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#d59563"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#17263c"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#515c6d"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"color": "#17263c"
			}
		]
	}
]

export const mapStyle2 = [
	{
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#1d2c4d"
			}
		]
	},
	{
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#8ec3b9"
			}
		]
	},
	{
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"color": "#1a3646"
			}
		]
	},
	{
		"featureType": "administrative.country",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#4b6878"
			}
		]
	},
	{
		"featureType": "administrative.land_parcel",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#64779e"
			}
		]
	},
	{
		"featureType": "administrative.province",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#4b6878"
			}
		]
	},
	{
		"featureType": "landscape.man_made",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#334e87"
			}
		]
	},
	{
		"featureType": "landscape.natural",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#023e58"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#283d6a"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#6f9ba5"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"color": "#1d2c4d"
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#023e58"
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#3C7680"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#304a7d"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#98a5be"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"color": "#1d2c4d"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#2c6675"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#255763"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#b0d5ce"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"color": "#023e58"
			}
		]
	},
	{
		"featureType": "transit",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#98a5be"
			}
		]
	},
	{
		"featureType": "transit",
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"color": "#1d2c4d"
			}
		]
	},
	{
		"featureType": "transit.line",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#283d6a"
			}
		]
	},
	{
		"featureType": "transit.station",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#3a4762"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#0e1626"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#4e6d70"
			}
		]
	}
]

export const hospitals = [
	{
		name: 'Hospital Morelos',
		address: 'Calle de la Luz 44, Fraccionamiento Villas Chapultepec, Chapultepec, 62450 Cuernavaca, Mor.',
		summary: [
			{
				name: 'beds',
				total: 500,
				img: require('../assets/images/bed.png'),
			},
			{
				name: 'infected',
				total: 120,
				img: require('../assets/images/virus1.png')
			}
		]
	},
	{
		name: 'Hospital General de Temixco',
		summary: [
			{
				name: 'beds',
				total: 702,
				img: require('../assets/images/bed.png'),
			},
			{
				name: 'infected',
				total: 440,
				img: require('../assets/images/virus1.png')
			}
		]
	},
	{
		name: 'Hospital General de Cuernavaca "Dr. José G. Parres"',
		summary: [
			{
				name: 'beds',
				total: 1002,
				img: require('../assets/images/bed.png'),
			},
			{
				name: 'infected',
				total: 882,
				img: require('../assets/images/virus1.png')
			}
		]
	},
	{
		name: 'Hospital del Niño Morelense',
		summary: [
			{
				name: 'beds',
				total: 443,
				img: require('../assets/images/bed.png'),
			},
			{
				name: 'infected',
				total: 52,
				img: require('../assets/images/virus1.png')
			}
		]
	},
	{
		name: 'Hospital de Alta Especialidad Centenario de la Revolución Mexicana ISSSTE',
		summary: [
			{
				name: 'beds',
				total: 204,
				img: require('../assets/images/bed.png'),
			},
			{
				name: 'infected',
				total: 167,
				img: require('../assets/images/virus1.png')
			}
		]
	},
]

export const coors = [[18.95476058115178, -99.14107421546292], [18.908854542008985, -99.16110981912347], [18.886888198407792, -99.2155002824529], [18.944674399887482, -99.16642263707374], [18.89057176701146, -99.16950866772852], [18.95362980870497, -99.13679110240747], [18.87148006259578, -99.2096752282118], [18.861087342851338, -99.16792772559778], [18.94903448127257, -99.18847571861176], [18.950217618005567, -99.23240033742097], [18.871837260634464, -99.21496972790285], [18.888409804437295, -99.2349124549693], [18.942449440584234, -99.18637770485607], [18.908596339819695, -99.13768335052117], [18.895972282838926, -99.17484196684507], [18.881468577580367, -99.19797917917539], [18.877328303512304, -99.17109617372707], [18.93497483023718, -99.1742708515016], [18.86770481674017, -99.16663989442202], [18.88612777574026, -99.18868030612525]]