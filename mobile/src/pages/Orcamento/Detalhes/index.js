import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';

import logoImg from '../../../assets/logo.png';

import styles from './styles';

export default function OrcamentoDetalhes() {
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    function sendWhatsAppCliente() {
        Linking.openURL("whatsapp://send?phone=5511982505422?text=Teste");
    }

    return (
        <View style={styles.container}>
           <View style={styles.header}>
              <Image source={logoImg} />
              
              <TouchableOpacity onPress={navigateBack}>
                     <Feather name="arrow-left" size={28} color="#E82041" />
              </TouchableOpacity>
            </View>

            <View style={styles.orcamentoDetalhes}>
                <Text style={[styles.orcamentoProperty, { marginTop: 0 }]}>CLIENTE:</Text>
                <Text style={styles.orcamentoValue}>Ariel Giacomini</Text>

                <Text style={styles.orcamentoProperty}>ORCAMENTO:</Text>
                <Text style={styles.orcamentoValue}>137827482</Text>

                <Text style={styles.orcamentoProperty}>VALOR TOTAL:</Text>
                <Text style={styles.orcamentoValue}>R$ 129,89</Text>
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
        </View>
    );
}