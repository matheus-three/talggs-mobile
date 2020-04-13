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
			total: 80,
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
					qtdPontos: 350,
					totalDesconto: 30
				}

			],
		},

		{
			titulo: 'Submarino',
			total: 200,
			opcaoPontos: [
				{
					qtdPontos: 1000,
					totalDesconto: 50,
				},
			],
		},
	]

	const chevronRight = <Icon name="chevron-right" size={20} color="#2D4F6C" />
	const star = <Ionicons name="md-star-outline" size={30} color="#f2a950" />

	return (
		<ScrollView style={Styles.scrollContainer}>
			<View style={Styles.container}>
				{pontos.map(ponto => (

					<Collapse style={Styles.couponContainer}>

						<CollapseHeader style={Styles.header}>
							<Text style={Styles.title}>{ponto.titulo}</Text>
							<Text style={Styles.points}> {ponto.total}{star} </Text>
						</CollapseHeader>



						<CollapseBody>


							<View style={Styles.containerLine}>
								<Text style={Styles.label}>Pontos</Text>
								<Text style={Styles.label}>Desconto</Text>
							</View>

							{ponto.opcaoPontos.map(item => (

								<View style={Styles.containerItems}>
									<View style={Styles.containerLine}>
										<Text style={Styles.items}>{item.qtdPontos}</Text>
										<Text style={Styles.items}>{item.totalDesconto}%</Text>
									</View>

									<View style={Styles.containerGenerateCoupons}>
										<Text style={Styles.generateCoupons}>Gerar cupom</Text>
										<Text>{chevronRight}</Text>
									</View>
								</View>

							))}

						</CollapseBody>

					</Collapse>

				))}
			</View>
		</ScrollView>
	);
}

export default Points

