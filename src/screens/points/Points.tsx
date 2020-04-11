import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
	Collapse,
	CollapseHeader,
	CollapseBody,
} from 'accordion-collapse-react-native'

import Styles from './styles'

export const Points = () => {
	const [collapsed, setCollapsed] = useState(false)
	const pontos = [
		{
			titulo: 'EBANX S.A',
			total: 70,
			opcaoPontos: [
				{
					qtdPontos: 100,
					totalDesconto: 20,
				},
				{
					qtdPontos: 175,
					totalDesconto: 25,
				},
				{
					qtdPontos: 250,
					totalDesconto: 30
				}

			],
		},
		{
			titulo: 'Americanas',
			total: 31,
			opcaoPontos: [
				{
					qtdPontos: 100,
					totalDesconto: 20,
				},
				{
					qtdPontos: 250,
					totalDesconto: 30
				}

			],
		}

	]

	const chevronDown = <Icon name="chevron-down" size={20} color="#101D25" />
	const chevronUp = <Icon name="chevron-up" size={20} color="#101D25" />
	const chevronRight = <Icon name="chevron-right" size={20} color="#2D4F6C" />
	const star = <Ionicons name="md-star-outline" size={30} color="#f2a950" />

	return (
		<View style={Styles.container}>
			<Collapse style={Styles.couponContainer}>

				<CollapseHeader style={Styles.header}>
					<Text style={Styles.title}>EBANX S.A</Text>
					<Text style={Styles.points}> 70 {star} </Text>
				</CollapseHeader>

				<CollapseBody>
					<View style={Styles.containerLine}>
						<Text style={Styles.label}>Pontos</Text>
						<Text style={Styles.label}>Desconto</Text>
					</View>


					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<View style={Styles.containerLine}>
							<Text style={Styles.items}>120</Text>
							<Text style={Styles.items}>20%</Text>
						</View>

						<View style={Styles.containerGenerateCoupons}>
							<Text style={Styles.generateCoupons}>Gerar cupom</Text>
							<Text>{chevronRight}</Text>
						</View>
					</View>



				</CollapseBody>

			</Collapse>
		</View>

	);
}

export default Points

