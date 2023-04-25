import Image from 'next/image'
import styles from '../components/layout.module.css'
import Metrics from '../components/Metrics'
import Layout from '../components/layout'
import Procedures from '../components/Procedures'
import Showcase from '../components/Showcase'
export default function Home() {
  return (
    <Layout>
      <Showcase/>
      <Metrics/>
      <h1>STEPS:</h1>
      <Procedures/>
    </Layout>
  )
}
