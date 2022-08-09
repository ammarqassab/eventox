import Document, { Html, Head, Main, NextScript } from 'next/document'
import { appName, appurl } from '../src/Api/AuthApi'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="application-name" content={`${appName}`} />
                    <meta name="theme-color" content="#39c7da" />
                    <meta name="robots" content="follow, index" />
                    <meta property="og:url" content={appurl} />
                    <meta property="og:type" content={'project'} />
                    <meta property="og:site_name" content={appName} />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body  className=" bgc-1 textc-2">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
