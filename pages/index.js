import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
import styles from "../styles/Home.module.css"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our smart contract lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <LotteryEntrance />
        </div>
    )
}
