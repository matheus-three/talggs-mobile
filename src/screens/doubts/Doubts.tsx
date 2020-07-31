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
                    solucao:
                        "Caso você queira cadastrar sua empresa em nossa plataforma, você deve acessar o link www.tallgs.com.br e fazer um pré-cadastro com sua empresa. Seu pré cadastro irá ser enviado à nós e entrará em análise, caso sua empresa seja aprovada para cadastro, a gente enviará um e-mail para você com a chave para cadastro.",
                },
            ],
        },
        {
            titulo: "O que são os Pontos?",
            descricao: [
                {
                    solucao: `A empresa que possuir um sistema de pontos, disponibilizará cupons de descontos para seus clientes, esses cupons estão dispostos na tela Pontos contendo a quantidade de pontos necessárias para gera-lo e o total de desconto que o cupom garante sobre a próxima compra. O cliente que possuir pontos suficientes para usufruir do cupom, poderá gerar-lo, e então, o mesmo será adicionado a tela Cupons do cliente, podendo ser usado a qualquer momento pelo cliente, uma vez, e dentro do prazo de validade do desconto.

 - Como conseguir Pontos?

 O cliente ganha pontos conforme seus pagamentos. Pagamentos em dia com a validade do boleto garantem 5 pontos ao cliente. Pagamentos adiantados garantem 1 ponto para cada dia adiantado que o cliente pagou antes do prazo, mais, 5 pontos.
                    `,
                },
            ],
        },
        {
            titulo: "Como envio minha dúvida aqui?",
            descricao: [
                {
                    solucao:
                        "Você pode enviar suas dúvidas no nosso e-mail oficial: suporte@tallgs.com e responderemos o mais breve possível. Caso haja muitas dúvidas parecidas, a gente disponibilizará a dúvida nessa mesma tela para que todos possam verificar.",
                },
            ],
        },
        {
            titulo: "Como uso meus Cupons?",
            descricao: [
                {
                    solucao: `Seus cupons podem ser usados na próxima compra de qualquer produto da empresa a qual o cupom é referente. Tanto para compras online como para compras em lojas físicas o cupom é válido. 

 - Como usar em compra online o cupom?
Você deve copiar o código do cupom que possui e adiciona-lo a compra que estiver fazendo na empresa referente ao cupom. Após validada a compra online o cupom não será mais válido.
                    
 - Como usar em compra em loja física?
Você deve mostrar para o vendedor da empresa a qual o cupom é referente, o código de cupom de desconto que você possui. Após validada a compra o cupom não será mais válido.`,
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
