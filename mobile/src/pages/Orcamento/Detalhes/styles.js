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
        alignItems: 'center',
    },

    headerText: {
        marginTop: 10,
        fontSize: 15,
        color: '#737380',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },

    orcamentoDetalhes: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16,
        marginTop: 48,
    },

    orcamentoProperty: {
        fontSize: 14,
        color: '#41414d',
        marginTop: 24,
    },

    orcamentoValue: {
        marginTop: 8,
        fontSize: 15,
        color: "#737380"
    },

    gerarServico: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16,
    },

    gerarServicoTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    gerarServicoTitleDescricao: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },

    actionsWhatsApp: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    
    actionWhatsApp: {
        backgroundColor: '#25d366',
        borderRadius: 10,
        height: 65,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerSlugNameProject: {
        fontSize: 22,
        marginBottom: 2,
        marginTop: 2,
        color: '#E02041',
        fontWeight: 'bold'
    }
});