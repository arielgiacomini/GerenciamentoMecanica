import React, { useState, useEffect }  from 'react';
import { ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';

import api from '../../../services/api';

import logoImg from '../../../assets/SGM/logo.png';

import styles from './styles';

export default function PrincipalDetalhes() {
    const navigation = useNavigation();
    const route = useRoute();

    const principal = route.params.principal;

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToPrincipal() {
        navigation.navigate('Principal');
    } 
 
}