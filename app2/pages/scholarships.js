import React from 'react'
import Layout from '../components/layout'
import Scholarship from '../components/scholarship'
import Filters from '../components/filters'
import styles from '../components/layout.module.css'
import { connectToDatabase } from "../utils/mongodb";

// import { connectToDatabase } from "../util/mongodb";


export default function Scholarships({ scholarships }) {
    return (
      <Layout>
      <Filters/>
        <div className={styles.scholarships}>
                    {scholarships.length === 0 ? (
                        <h2>No added scholarships</h2>
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
  export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    const scholarships = await db
      .collection("scholarships")
      .find({})
      .toArray();
    return {
      props: {
        scholarships: JSON.parse(JSON.stringify(scholarships)),
      },
    };
  }
  
