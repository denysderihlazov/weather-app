import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import { Header } from './Header/Header'
import React, { FunctionComponent } from "react";



const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <div className={styles.body}>
                {children}
            </div>
        </div>
    );
};


export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};

