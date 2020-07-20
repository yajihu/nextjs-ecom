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
		  <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="NTI0ZmY0M2EtNGNmNi00YTkxLWExNmMtNjQ5NDNmODIyMzY3NjM3MzA3ODQ2NzU4ODcxMzU1" id="snipcart"></script>
		  <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
		  <link rel="shortcut icon" href="/static/favicon.ico" />
		</Head>
      <Header />
      <main className="main">
		<img src="/static/aquarium.svg" alt="a" className="background-image" />
		<div className="promotional-message">
          <h3>New Opening!!!</h3>
          <h2>Need For Speed</h2>
          <p>An <strong>exclusive collection of sports car</strong> available for everyone.</p>
        </div>
        <ProductList products={props.products} />
      </main>
      <Footer />
    </div>
  )
}
Index.getInitialProps = async ({ req }) => {
  return {
    products: [
	  {id: "nextjs_benzAMGGTR", name: "Mercedes-AMG GT R", price: 190400.00, image: "https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/whichcar/2019/06/19/-1/2019-Mercedes-AMG-GT-R-12-hours-review.jpg", description: "Engine type: 	4.0 L M178 (Mercedes-AMG) twin-turbocharged V8 6.2 L M159 DOHC V8 (AMG GT3)."} as IProduct,
      {id: "nextjs_audiR8", name: "Audi R8", price: 221000.00, image: "https://cdn.motor1.com/images/mgl/JmVR6/s4/2019-audi-r8-onlocation.jpg", description: "Engine type: V10 / 40V. Max. output 602 hp @ 8100 rpm."} as IProduct,
	  {id: "nextjs_porsche911", name: "Porsche 911 GT2", price: 295000.00, image: "https://www.motortrend.com/uploads/sites/5/2018/09/2018-Porsche-911-GT2-front-three-quarter-in-motion-2.jpg?fit=around%7C875:492", description: "Engine type: 3.8L flat-six 700 hp and 553 lb-ft of torque."} as IProduct,
	  {id: "nextjs_mclaren600LT", name: "McLaren 600LT", price: 259000.00, image: "https://www.carscoops.com/wp-content/uploads/2019/10/b225c912-mclaren-600lt-comet-fade.jpg", description: "Engine type: turbocharged 3.8-liter V8 (592 horsepower, 457 lb-ft of torque)."} as IProduct

    ]
  }
}
export default Index