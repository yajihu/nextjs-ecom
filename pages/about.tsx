import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Head from "next/head"

import "../styles.scss"

interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <img src="/static/aquarium.svg" alt="a" className="background-image" />
        <div className="promotional-message">
          <h1 className="header__title">Contact Me At</h1>
          <img src="https://i.loli.net/2020/07/20/cYIimjADX6ZxtGS.jpg" width="505" height="672" alt="" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

Index.getInitialProps = async () => {
  return {

  }
}

export default Index