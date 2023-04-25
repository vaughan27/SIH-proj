import Image from 'next/image'
import Link from 'next/link'
import styles from './/layout.module.css'

function Procedures() {
  return (
    <div className={styles.procedures}>
          <div className={styles.procedure}>
            <img className={styles.img} src="/images/casual-life-3d-young-man-in-orange-headphones-sitting-at-green-table-and-using-computer.png" alt=""/>
            <div className={styles.div}>
                <h2>Browse</h2>
                <p>Complete your profile and gain free access to our scholarship database. We make it simple and match you to college scholarships you qualify for instantly.</p>
                <button>Sign up</button>
            </div>
          </div>
          <div className={styles.procedure}>
            
            <div className={styles.div}>
                <h2>Organize Your Scholarships</h2>
                <p> Be organized and efficient and you are bound to win some scholarships! Select all the scholarships you want to apply for initially and compare them. Many of them will ask similar questions and you will most likely be able to use a single essay for more than one, possibly several different scholarships. Work smarter, not harder!</p>
                {/* <button>Sign up</button> */}
            </div>
            <img className={styles.img}  src="/images/casual-life-3d-woman-works-on-laptop-sitting-on-the-floor.png" alt=""/>
          </div>
          <div className={styles.procedure}>
            <img className={styles.img}  src="/images/casual-life-3d-young-man-holding-blue-smartphone.png" alt=""/>
            <div className={styles.div}>
                <h2>Apply For Scholarships</h2>
                <p>You have been matched to college scholarships that fit your profile. Now it&apos;s just a matter of applying for them! Check back often to update your profile and view new scholarship matches.

</p>
                
            </div>
          </div>
      </div>
  )
}

export default Procedures