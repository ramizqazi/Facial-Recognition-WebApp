import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { client } from './config/react-query';
import AppNavigation from './navigation/AppNavigation';

function App() {
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <AppNavigation />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
