import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather'

import Styles from './styles'

export const Accounts = ({ route, navigation }) => {
	const { status } = route.params;

	//Status:
	// 0 - pendente 
	// 1 - pago 
	// 2 - vencido
	const Boletos = [
		{
			empresa: 'EBANX S.A',
			data: '22 Abr 2020',
			valor: 50.00,
			status: 0,
			id: '1',
		},
		{
			empresa: 'Submarino',
			data: '21 Abr 2020',
			valor: 100.00,
			status: 0,
			id: '2',
		},
		{
			empresa: 'Vovó Gourmet',
			data: '30 Mar 2020',
			valor: 120.00,
			status: 1,
			id: '3',
		},
		{
			empresa: 'Luiz.com',
			data: '29 Fev 2020',
			valor: 5000.00,
			status: 1,
			id: '4',
		},
		{
			empresa: 'Tutupom?',
			data: '31 Mar 2020',
			valor: 200.00,
			status: 2,
			id: '5',
		},
		{
			empresa: 'São João',
			data: '31 Mar 2020',
			valor: 500.00,
			status: 2,
			id: '6',
		},
	]

	const accountIconPending = <Icon name="shopping-bag" size={20} color="#2D9AA6" />;
	const accountIconPaid = <Icon name="shopping-bag" size={20} color="#34AF2B" />;
	const accountIconVanquished = <Icon name="shopping-bag" size={20} color="#D45454" />;

	return (
		<View style={Styles.container}>
			<>
				{Boletos.map(boleto => (
					<TouchableOpacity key={boleto.id} onPress={() => navigation.navigate('PurchaseDetails')}>
						<View style={{ flexDirection: 'row', width: '90%' }} >
							{
								boleto.status === status && status === 0 ?
									<>{accountIconPending}</>
									
									: boleto.status === status && status === 1 ?
										<>{accountIconPaid}</>

										: boleto.status === status && status === 2 ?
											<>{accountIconVanquished}</>

											: undefined
							}
							{
								boleto.status === status && status === 0 ?
									<View style={Styles.containerLine}>
										<Text style={Styles.title}>{boleto.empresa}</Text>
										<Text style={Styles.date}>{boleto.data}</Text>
									</View>

									: boleto.status === status && status === 1 ?
										<View style={Styles.containerLine}>
											<Text style={Styles.title}>{boleto.empresa}</Text>
											<Text style={Styles.date}>{boleto.data}</Text>
										</View>

										: boleto.status === status && status === 2 ?
											<View style={Styles.containerLine}>
												<Text style={Styles.title}>{boleto.empresa}</Text>
												<Text style={Styles.date}>{boleto.data}</Text>
											</View>

											: undefined
							}
						</View>
						{
							boleto.status === status && status === 0 ?
								<View style={Styles.valueContainerPendente}>
									<Text style={Styles.value}>R${boleto.valor}</Text>
								</View>

								: boleto.status === status && status === 1 ?
									<View style={Styles.valueContainerPago}>
										<Text style={Styles.value}>R${boleto.valor}</Text>
									</View>

									: boleto.status === status && status === 2 ?
										<View style={Styles.valueContainerVencido}>
											<Text style={Styles.value}>R${boleto.valor}</Text>
										</View>

										: undefined
						}
					</TouchableOpacity>
				))}
			</>
		</View>
	)
}

export default Accounts

