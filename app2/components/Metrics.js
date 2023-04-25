import Image from 'next/image'
import styles from './/layout.module.css'

function Metrics() {
  return (
    <div>
        <div className={styles.metrics}>
          <div className={styles.metric}>
            <img className={styles.img} src="/images/casual-life-3d-blue-graduation-hat.png"/>
            <div>
                <h2>100+</h2>
              <h4>Scholarships</h4>
            </div>
              
          </div>
          <div className={styles.metric}>
            <img  className={styles.img} src="/images/casual-life-3d-wad-of-money-coins.png"/>
            <div>
                <h2>10 Lakh+</h2>
            <h4>Scholarship amount</h4>
            </div>
            
        </div>
        <div className={styles.metric}>
            <img  className={styles.img}  src="/images/casual-life-3d-green-microscope.png" />
            <div>
                <h2>100+</h2>
            <h4>Categories & Domains</h4>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Metrics