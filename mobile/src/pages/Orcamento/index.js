import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/SGM/logo.png';

import styles from './styles';

export default function Orcamento() {
    const [orcamentos, setOrcamentos] = useState([]);
    const [totalOrcamentos, setTotalOrcamentos] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToDetail(orcamento) {
        navigation.navigate('OrcamentoDetalhes', { orcamento });
    }

    async function loadOrcamentos() {
        if (loading) {
            return;
        }

        if (totalOrcamentos > 0 && orcamentos.length == totalOrcamentos) {
            return;
        }

        setLoading(true);

        const response = await api.get('orcamento', {
            params: { page }
        });
        setOrcamentos([... orcamentos, ... response.data]); // Anexando dois vetores dentro de um único vetor.
        setTotalOrcamentos(response.headers['x-total-count']);
        setPage(page + 1)
        setLoading(false);
    }

    useEffect(() => {
        loadOrcamentos();
    }, []);

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoImg} />
        </View>
            <Text style={styles.headerText}>
                Total de <Text style={styles.headerTextBold}>{totalOrcamentos}</Text> orçamentos gerdos hoje.
            </Text>
            
            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.subTitle}>Aqui você pode gerar um orçamento ou um serviço para seu cliente.</Text>

            <FlatList
                data={orcamentos}
                style={styles.orcamentoList}
                keyExtractor={orcamentos => String(orcamentos.Id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadOrcamentos}
                onEndReachedThreshold={0.2}
                renderItem={({ item: orcamento }) => (
                    <View style={styles.orcamento}>

                    <Text style={styles.orcamentoProperty}>Cliente</Text>
                    <Text style={styles.orcamentoValue}>{orcamento.NomeCliente}</Text>

                    <Text style={styles.orcamentoProperty}>Valor Total</Text>
                    <Text style={styles.orcamentoValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(orcamento.ValorTotal)}</Text>

                    <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={() => navigateToDetail(orcamento)}
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