import Head from 'next/head'
import Navbar from './/navbar'
import Footer from './/footer'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
// import utilStyles from '../styles/utils.module.css'
// import Link from 'next/link'



export default function Layout({ children, home }) {
  return (
    <div className=''>
        <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
      <Head>
      <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        <title>AICTE Scholarship Portal</title>

      </Head>
      <Navbar/>
      


      <main>
          {children}
      </main>
      <Footer/>
    </div>
    
  )
}
