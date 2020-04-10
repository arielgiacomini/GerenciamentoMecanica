import React from 'react';
import { ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';

import logoImg from '../../../assets/SGM/logo.png';

import styles from './styles';

export default function OrcamentoDetalhes() {
    const navigation = useNavigation();
    const route = useRoute();

    const orcamento = route.params.orcamento;
    const mensagemWhatsApp = `Olá, ${orcamento.NomeCliente}, você fez um orçamento conosco no valor de: ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(orcamento.ValorTotal)}`;

    function navigateBack() {
        navigation.goBack();
    }
 
    function sendWhatsAppCliente() {
        Linking.openURL(`whatsapp://send?phone=5511982505422&text=${mensagemWhatsApp}`);
    }

    return (
        
        <View style={styles.container}>
           <View style={styles.header}>
                <Image source={logoImg} />
                        <View style={styles.actionBack}>
                            <TouchableOpacity onPress={navigateBack}>
                                <Feather name="arrow-left" size={28} color="#E82041" />
                            </TouchableOpacity>
                        </View>
            </View>
                <Text style={styles.headerText}>Abaixo você pode escolher o que fazer com este item.</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.orcamentoDetalhes}>
                    <Text style={[styles.orcamentoProperty, { marginTop: 0 }]}>Nº</Text>
                    <Text style={styles.orcamentoValue}>{orcamento.OrcamentoId}</Text>

                    <Text style={styles.orcamentoProperty}>Cliente</Text>
                    <Text style={styles.orcamentoValue}>{orcamento.NomeCliente}</Text>

                    <Text style={styles.orcamentoProperty}>Valor Adicional</Text>
                    <Text style={styles.orcamentoValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(orcamento.ValorAdicional)}</Text>

                    <Text style={styles.orcamentoProperty}>Desconto</Text>
                    <Text style={[styles.orcamentoValue, { marginBottom: 0 }]}>{Intl.NumberFormat('pt-BR', {style: 'percent', maximumFractionDigits: 2}).format(orcamento.ValorDesconto)}</Text>
                    <Text style={styles.orcamentoValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(orcamento.ValorDesconto)}</Text>
                    <Text style={styles.orcamentoProperty}>Valor Total</Text>
                    <Text style={styles.orcamentoValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(orcamento.ValorTotal)}</Text>
            </View>

            <View style={styles.gerarServico}>
                    <Text style={styles.gerarServicoTitle}>Vamos garantir este serviço?</Text>
                    <Text style={styles.gerarServicoTitleDescricao}>Você pode gerar um serviço deste orçamento, garantindo assim sua mão de obra.</Text>
                <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={() => {}}>
                    <Text style={styles.actionText}>Gerar Serviço</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action} onPress={() => {}}>
                    <Text style={styles.actionText}>Excluir Orçamento</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.actionsWhatsApp}>
                <TouchableOpacity style={styles.actionWhatsApp} onPress={sendWhatsAppCliente}>
                    <Text style={styles.actionText}>Enviar WhatsApp para Cliente</Text>
                </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </View>

    );
}