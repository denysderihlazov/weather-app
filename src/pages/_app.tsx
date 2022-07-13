import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useState } from 'react';
import '../styles/globals.css';
import { Context } from '../shared/context/Context.js'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const [context, setContext] = useState("Kyiv");
    return (
        <Context.Provider value={[context, setContext]}>
            <Head>
                <title>Weather App</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </Context.Provider>
    )
}

export default MyApp;
