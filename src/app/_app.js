import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        // Put your mantine theme override here light or dark theme
        colorScheme: 'light',
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
