import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/SGM/logo.png';

import styles from './styles';

export default function Principal() {

    const [Principals, setPrincipals] = useState([]);
    const [totalPrincipals, setTotalPrincipals] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    // function navigateToDetail(Principal) {
    //     navigation.navigate('PrincipalDetalhes', { Principal });
    // }

    async function loadPrincipals() {
        console.log("Entrou no LoadPrincipals");
        if (loading) {
            return;
        }

        if (totalPrincipals > 0 && Principals.length == totalPrincipals) {
            return;
        }

        setLoading(true);

        const response = await api.get('SGM/cliente/veiculo/paginado/' + page);

        setPrincipals([... Principals, ... response.data]); // Anexando dois vetores dentro de um único vetor.
        setTotalPrincipals(response.headers['x-total-count']);
        setPage(page + 1)
        setLoading(false);
    }

    useEffect(() => {
        console.log("Entrou no useEffect");
        loadPrincipals();
    }, []);

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoImg} />
            <TouchableOpacity style={styles.actionRefresh} onPress={() => {} }>
                <Text style={styles.actionText}>Refresh Page</Text>
            </TouchableOpacity>
        </View>
            <Text style={styles.headerText}>
                Total de <Text style={styles.headerTextBold}>{totalPrincipals}</Text> Clientes Ativos.
            </Text>
            
            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.subTitle}>Aqui você pode visualizar os últimos clientes que efetuou algum orçamento/serviço.</Text>

            <FlatList
                data={Principals}
                style={styles.principalList}
                keyExtractor={Principals => String(Principals.clienteId)}
                showsVerticalScrollIndicator={false}
                onEndReached={() => loadPrincipals()}
                onEndReachedThreshold={0.2}
                renderItem={({ item: Principal }) => (
                    <View style={styles.principal}>

                    <Text style={styles.principalProperty}>Cliente</Text>
                    <Text style={styles.principalValue}>{Principal.nomeCliente}</Text>

                    <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={() => {}}
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