import { GetStaticProps } from "next";
import React from "react";
import { P, CardList, Search } from '../shared/components';
import { withLayout } from "../shared/layouts/Layout";

function Home(): JSX.Element {
    return (
        <>

            <CardList></CardList>

        </>
    );
}

export default withLayout(Home);