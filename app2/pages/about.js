import Image from 'next/image'
import styles from '../components/layout.module.css'
import Metrics from '../components/Metrics'
import Layout from '../components/layout'
import Procedures from '../components/Procedures'
import Showcase from '../components/Showcase'
export default function Home() {
  return (
    <Layout>
      <div className={styles.about}><br /><br />
      For many students, finance tends to be an omnipresent barrier to a good education.<br /><br />

With the support of the government and well-wishers, the All India Council of Technical Education has done its level best to provide tremendous opportunities to break down these financial barriers in the form of scholarships. While these scholarships exist in great numbers, a lot of these remain vacant owing to the lack of information on the same. While yes, a few scholarship websites do exist, they are often sluggish, tedious, and don&apos;t have a good end-user experience. This is where our team, &apos;Solutionism at its finest&apos; comes in. Our mission is to build an elegant solution to this problem in the form of a fast, seamless website coupled with a modern User Interface. 
<br /><br />
1) Doing the small things well:<br />
The two core features of any good website are the User Interface and speed. To achieve this we will be using Next.js and MongoDB.
<br />
Next.js is a production-quality framework built over the popular React.js library used to build dynamic UIs. Next.js also provides advanced SEO Optimization, Image Optimization, Caching, advanced data security, and several other features. It also supports server-side rendering, which translates to faster load times and less data consumption. 
This would allow students from the most remote parts of the country to be able to access the platform even with a weak internet connection.
<br />
We have chosen to use MongoDB as it is a modern database system that is a faster and a more secure option as compared to SQL-based databases.
<br /><br />
2) The structure of the portal:<br />
The homepage of the website will provide snippets of important information about the platform and how it can be used.
The scholarships page will first contain various filters and eligibility criteria such as your level of study, gender, subject of study, etc. These filters allow you to make a highly selective scholarship search that matches you with the exact scholarships you are eligible for in a single click. This allows the user to spend minimum effort on the platform and find exactly what they are looking for.
All of the filters have unique colors and these colors then appear as tags on each scholarship listing to give the user a quick glance at the eligibility criteria for that particular scholarship. 
<br />
On each scholarship listing, there are buttons that link to the supporting documents/application form. 
The deadline is also clearly mentioned along with a colored circle to indicate the proximity to the deadline which will be automatically updated by the system. 
Additionally, we could add an option to compare scholarships based on fund amount and other criteria.
<br /><br />
3) Intelligent recommender system<br />
In the event that the candidate is not eligible for any scholarship at their present education qualification, we look to implement an intelligent recommender system that could analyze trends to suggest scholarships that they could be eligible for in the near future when they pursue higher studies. This would also serve as a good motivating factor (in the case of merit-based scholarships) for the student to aim to perform well to avail of that scholarship in their higher education.
<br /><br />
4) Adding new scholarships to the platform:
For administrators, there is a password-protected page where the administrators would be prompted with a detailed form to enter all the necessary information regarding the scholarship. There would also be an option to generate a PDF with a custom-made template (with the AICTE logo, etc ) of the entered information as we observed that this would be required for print publication/ hard copy. Scholarships can optionally be chosen to be automatically deleted post their deadline.
Scholarship data can alternatively be fetched from existing sites by means of a web scraping API.
<br />
We have given special thought to these features to make the data entry and maintenance of the platform minimal, thereby allowing the platform to be updated with the latest scholarships.
      </div>
    </Layout>
  )
}