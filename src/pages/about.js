import * as React from 'react'
import Layout from '../components/layout'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hello, I am Sourav Christian.</p>
    </Layout>
//      <Carousel>
//      <div>
//          <img src="https://i.picsum.photos/id/547/200/300.jpg?hmac=O1sHSqamP2AYNG_ADzB7uKiGjh_fmg-Xq4v2KEapg_k" />
//          <p className="legend">Legend 1</p>
//      </div>
//      <div>
//          <img src="https://homepages.cae.wisc.edu/~ece533/images/boat.png" />
//          <p className="legend">Legend 2</p>
//      </div>
//      <div>
//          <img src="https://homepages.cae.wisc.edu/~ece533/images/pool.png" />
//          <p className="legend">Legend 3</p>
//      </div>
//  </Carousel>
  )
}

export default AboutPage

