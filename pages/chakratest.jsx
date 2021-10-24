// React
import * as React from "react"
import Head from 'next/head'
import Image from 'next/image'




// Navbar
import Navbar from '../components/navbar'


import PropertyImageCarousel from '../components/PropertyImageCarousel'
import PropertySlideCard from '../components/PropertySlideCard'

function ChakraTest() {
  // 


  const slideItems = [
      {
        img: '/images/property-10.jpg',
      },

      {
        img: '/images/property-9.jpg',
      },

      {
        img: '/images/property-7.jpg',
      },

      {
        img: '/images/property-8.jpg',
      }
  ];

  return (
    <div className='homebody'>

      <Head>
        <title>Damac - Test Page for Chakra UI</title>
        <meta name="description" content="Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main home-main">


          <div class="container">
            
            <div className="row">

              <PropertySlideCard 
              title="My property..." 
              subtitle="Hello world!" 
              slideItems={slideItems} 
              location="DAMAC Hills, Dubailand, Dubai"
              url="https://www.example.com/"
              />
              

            </div>

          </div>
          
        
      </main>


      
    </div>


  )
}


export default ChakraTest