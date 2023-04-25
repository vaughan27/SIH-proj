import Image from 'next/image'
import Link from 'next/link'
import styles from './/layout.module.css'
function Showcase() {
  return (
    <div className={styles.showcase}>
          
          <div>
              <h2>Scholarship Portal</h2>
              <p>We offer a simple and accessible approach to finding and applying for scholarships for students of all ages. Our tried, tested and acclaimed search engine delivers targeted lists of scholarships for the investment of just a few minutes. There&apos;s no quicker, better way to find free scholarship money.

              </p>
              <Link href="/scholarships">  
              <a><button>Explore</button></a>
              </Link>
              
          </div>
          <img  className={styles.img} src="/images/clip-applying-to-university-online (1).gif" alt=""/>
      </div>
  )
}

export default Showcase