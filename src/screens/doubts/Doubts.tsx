import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import {
    Collapse,
    CollapseHeader,
    CollapseBody,
} from "accordion-collapse-react-native";

import Styles from "./styles";

export const Doubts = () => {
    const [collapsed, setCollapsed] = useState(false);
    const doubts = [
        {
            titulo: "Esqueci minha senha",
            descricao: [
                {
                    solucao:
                        "Caso venha esquecer sua senha entre em contato pelo e-mail: suporte@talggs.com.br, solicite uma nova senha e informe seu e-mail de cadastro e CPF. Retornaremos em breve com uma nova senha.",
                },
            ],
        },
        {
            titulo: "Eu tenho uma Empresa",
            descricao: [
                {
                    solucao: "Entre no site Tallgs: link",
                },
            ],
        },
        {
            titulo: "O que são os Pontos?",
            descricao: [
                {
                    solucao: "Te garante descontos",
                },
            ],
        },
        {
            titulo: "Como envio minha dúvida aqui?",
            descricao: [
                {
                    solucao: "Entre no site Tallgs: link",
                },
            ],
        },
        {
            titulo: "Como uso meus Cupons?",
            descricao: [
                {
                    solucao: "Não usa, emmmn zuera",
                },
            ],
        },
    ];

    const chevronRight = <Icon name="chevron-down" size={25} color="#2D4F6C" />;

    return (
        <ScrollView style={Styles.scrollContainer}>
            <View style={Styles.container}>
                {doubts.map((ponto) => (
                    <Collapse style={Styles.doubtContainer}>
                        <CollapseHeader style={Styles.header}>
                            <Text style={Styles.title}>{ponto.titulo}</Text>
                            <Text>{chevronRight}</Text>
                        </CollapseHeader>

                        <CollapseBody>
                            {ponto.descricao.map((item) => (
                                <View>
                                    <View>
                                        <Text style={Styles.solution}>
                                            {item.solucao}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </CollapseBody>
                    </Collapse>
                ))}
            </View>
            <View style={{ marginBottom: 30 }}></View>
        </ScrollView>
    );
};

export default Doubts;
