import Link from 'next/link'

import styles from './layout.module.css'

function Scholarship( {scholarship}) {
    return (

         <div className={styles.scholarship}>
        <h2>{scholarship.title}</h2>
        <p>
          {scholarship.description}
        </p>
        <div className={styles.tags}>
          <div className={styles.category} id="category">
            Category: {scholarship.category}
          </div>
          <div className={styles.educationLevel} id="category">
            Education Level: {scholarship.educationLevel}
          </div>
          <div className={styles.areaofStudy} id="category">
            Area of study: {scholarship.areaofStudy}
          </div>
          <div className={styles.type} id="category">
            Type: {scholarship.type}
          </div>
          <div className={styles.location} id="category">
            Location: {scholarship.location}
          </div>
          <div className={styles.funding} id="category">
            Funding: {scholarship.funding}
          </div>
        </div>
        <div className={styles.deadline}>
          <h3>Deadline: {scholarship.deadline}</h3>
          <div className="deadline-circle">
          </div>
        </div>
        <div className={styles.buttons}>

        {(() => {
        if (scholarship.link) {
          return (
            
          <Link href={scholarship.link}>
          <button>Scheme Guidelines<img src="https://img.icons8.com/fluency/48/000000/document.png" /></button>
          </Link>
          )
        }
      })()}
        
        
        
        
      
        
      
        
          
        </div>
      </div>
      
  
   
        
        
    )
}
export default Scholarship
