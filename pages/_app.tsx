import React from 'react';
import { AppProps } from 'next/app';
import ReactModal from 'react-modal';

import '../styles/globals.css';
import '../styles/modal.css';

if (typeof window !== 'undefined') {
  ReactModal.setAppElement('body');
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
