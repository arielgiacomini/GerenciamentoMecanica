import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Orcamento() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('OrcamentoDetalhes');
    }

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoImg} />
            <Text style={styles.headerText}>
                Total de <Text style={styles.headerTextBold}>0 orçamentos gerdos hoje.</Text>
            </Text>
        </View>
            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.subTitle}>Aqui você pode gerar um orçamento ou um serviço para seu cliente.</Text>

            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7]}
                style={styles.orcamentoList}
                keyExtractor={orcamento => String(orcamento)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.orcamento}>
                    <Text style={styles.orcamentoProperty}>CLIENTE:</Text>
                    <Text style={styles.orcamentoValue}>Ariel Giacomini</Text>

                    <Text style={styles.orcamentoProperty}>ORCAMENTO:</Text>
                    <Text style={styles.orcamentoValue}>137827482</Text>

                    <Text style={styles.orcamentoProperty}>VALOR TOTAL:</Text>
                    <Text style={styles.orcamentoValue}>R$ 129,89</Text>

                    <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={navigateToDetail}
                    >
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                         <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
                </View> 
                )}
            />
        </View>
    );
}