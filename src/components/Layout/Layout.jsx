import * as React from 'react'
import Head from 'next/head'

import { Footer } from '../Footer/Footer'

export const Layout = React.memo(({ children }) => (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            <meta name="description" content="Description" />
            <meta name="keywords" content="Keywords" />
            <title>Todo List</title>
        </Head>

        <main>{children}</main>

        <Footer />

        <style jsx>{`
            main {
                min-height: calc(100vh - 60px);
            }
        `}</style>
    </>
))
