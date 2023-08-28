import Head from "next/head";
import Image from "next/image";

export default function Header(props) {
    return(
        <>
        <Head>
            <title>{props.title}</title>
            <link rel="icon" type="image/x-icon" href="bibimbap.png"></link>
        </Head>
        </>
    )
}