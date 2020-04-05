import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Orcamento from './pages/Orcamento';
import Servico from './pages/Servico';

export default function Routes() {
    return (
           <NavigationContainer>
               <AppStack.Navigator screenOptions={{ headerShown: false }}>
                   <AppStack.Screen name="Orçamentos" component={Orcamento} />
                   <AppStack.Screen name="Serviços" component={Servico} />
               </AppStack.Navigator>
           </NavigationContainer> 
    );
}