import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Orcamento from './pages/Orcamento';
import OrcamentoDetalhes from './pages/Orcamento/Detalhes';
import Servico from './pages/Servico';
import Principal from './pages/Principal';
import PrincipalDetalhes from './pages/Principal/Detalhes';


export default function Routes() {
    return (
           <NavigationContainer>
               <AppStack.Navigator screenOptions={{ headerShown: false }}>
                   <AppStack.Screen name="Principal" component={Principal} />
                   <AppStack.Screen name="PrincipalDetalhes" component={PrincipalDetalhes} />
                   {/* <AppStack.Screen name="Orcamento" component={Orcamento} /> */}
                   {/* <AppStack.Screen name="OrcamentoDetalhes" component={OrcamentoDetalhes} /> */}
                   <AppStack.Screen name="Servico" component={Servico} />
               </AppStack.Navigator>
           </NavigationContainer> 
    );
}