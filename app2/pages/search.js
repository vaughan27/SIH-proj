
import Layout from '../components/layout'
import Scholarship from '../components/scholarship'
import Filters from '../components/filters'
import styles from '../components/layout.module.css'
import { connectToDatabase } from "../utils/mongodb";

// import { connectToDatabase } from "../util/mongodb";

     
export default function Scholarships({ scholarships }) {
  
    return (
      <Layout>
        <h1>Search Results:</h1>
        <div className={styles.scholarships}>
                    {scholarships.length === 0 ? (
                        <h2>No scholarships found :(</h2>
                    ) : (
                        <ul>
                        {scholarships.map((scholarship,i) => (
                            <Scholarship scholarship={scholarship}/>
                          ))}
                       
                            
                        </ul>
                    )}
                </div>
      </Layout>
    )
  }
  
  export async function getServerSideProps(context) {
     
     
    const category=context.query.category
              const educationLevel=context.query.educationLevel
              const areaofStudy=context.query.areaofStudy
              const type=context.query.type
              const location=context.query.location
              const funding=context.query.funding
              const { db } = await connectToDatabase();
    const scholarships = await db
      .collection("scholarships")
      .find({category:category,educationLevel:educationLevel,areaofStudy:areaofStudy,type:type,location:location,funding:funding})
      .toArray();
    return {
      props: {
        scholarships: JSON.parse(JSON.stringify(scholarships)),
      },
    };
  
}
 
