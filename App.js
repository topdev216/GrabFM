/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppContainer from './src/navigator/Navigate';
import {ThemeProvider} from 'nachos-ui';

const App = () =>
    <ThemeProvider>
        <AppContainer/>
    </ThemeProvider>;

export default App;