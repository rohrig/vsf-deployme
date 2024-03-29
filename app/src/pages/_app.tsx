import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '@/components/layout';
import { initSDK, buildModule } from '@vue-storefront/sdk';
import {
  boilerplateModule,
  BoilerplateModuleType,
} from 'vsf-deployme-sdk';

const sdkConfig = {
  boilerplate: buildModule<BoilerplateModuleType>(boilerplateModule, {
    apiUrl: 'http://0.0.0.0:8181/boilerplate',
  }),
};

export const sdk = initSDK<typeof sdkConfig>(sdkConfig);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
