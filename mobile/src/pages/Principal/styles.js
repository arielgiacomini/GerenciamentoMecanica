import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        marginTop: 10,
        fontSize: 15,
        color: '#737380',
        flexDirection: 'row',
        alignItems: 'center'
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 35,
        color: '#13131a',
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    principalList: {
        marginTop: 32
    },

    principal: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16
    },

    principalProperty: {
        fontSize: 14,
        color: '#41414d'
    },

    principalValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: "#737380"
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    detailsButtonText: {
        color: "#E02041"
    },

    headerSlugNameProject: {
        fontSize: 28,
        marginBottom: 2,
        marginTop: 2,
        color: '#E02041',
        fontWeight: 'bold'
    }
});