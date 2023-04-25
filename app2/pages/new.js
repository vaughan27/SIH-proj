import Router from "next/router"
import * as React from 'react';
import Layout from '../components/layout'
import Link from 'next/link'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import styles from '../components/layout.module.css'
import axios from 'axios';
import { saveAs } from 'file-saver';
import {useUser, withPageAuthRequired} from '@auth0/nextjs-auth0'
import {WithPageAuthRequired} from '@auth0/nextjs-auth0'
export default function Form() {
   

    
    const addScholarship = async event => {
      event.preventDefault()

 
      const res = await fetch('/api/scholarships', {
        body: JSON.stringify({
          title:event.target.title.value,
          description:event.target.description.value,
        category:event.target.Category.value,
        educationLevel:event.target.EducationLevel.value,
        areaofStudy:event.target.Areaofstudy.value,
        type:event.target.TypeofScholarship.value,
        location:event.target.Locationofstudy.value,
        funding:event.target.Scholarshipfunding.value,
        deadline:event.target.deadline.value,
        link:event.target.link.value
        
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
      Router.push('/scholarships');
      const result = await res.json()
      console.log(result);
      // result.user => 'Ada Lovelace'
    }
    function redirect()
  {
    NextResponse.redirect('/scholarships')
  }
    // createAndDownloadPdf = function () {
    //   axios.post('/fetch-pdf', form)
    //     .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
    //     .then((res) => {
    //       const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

    //       saveAs(pdfBlob, 'newPdf.pdf');
    //     });
    // }
  
    return (
      <Layout>
        <h1>Admin Portal</h1>
      <form onSubmit={addScholarship} className={styles.formContainer}>
        <InputLabel id="demo-simple-select-label">Title</InputLabel>
        <input id="title" className={styles.formTitle} name="title" type="text" autoComplete="name" required />
        <InputLabel id="demo-simple-select-label">Description</InputLabel>
        <textarea id="description" className={styles.formDescription} name="description" type="text" required />
        
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="Category"
          label="Category"
        >
          <MenuItem value={"Scholarships for Women"}>Scholarships for Women</MenuItem>
          <MenuItem value={"SC"}>SC</MenuItem>
          <MenuItem value={"ST"}>ST</MenuItem>
          <MenuItem value={"OBC"}>OBC</MenuItem>
          <MenuItem value={"Genral"}>Genral</MenuItem>
          <MenuItem value={"Not specified"}>Not specified</MenuItem>
        </Select>
        <InputLabel id="demo-simple-select-label">Education Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="EducationLevel"
          label="Education Level"
        >
          <MenuItem value={"Metric"}>Metric</MenuItem>
          <MenuItem value={"Diploma"}>Diploma</MenuItem>
          <MenuItem value={"Undergraduate"}>Undergraduate</MenuItem>
          <MenuItem value={"Masters"}>Masters</MenuItem>
          <MenuItem value={"PhD"}>PhD</MenuItem>
          <MenuItem value={"PostDoc"}>PostDoc</MenuItem>
          <MenuItem value={"Not specified"}>Not specified</MenuItem>
        </Select>
        <InputLabel id="demo-simple-select-label">Area of study</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="Areaofstudy"
          label="Area of study"
        >
          <MenuItem value={"Computer Science"}>Computer Science</MenuItem>
          <MenuItem value={"Physics"}>Physics</MenuItem>
          <MenuItem value={"Psychology"}>Psychology</MenuItem>
          <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
          <MenuItem value={"Mechanical Engineering"}>Mechanical Engineering</MenuItem>
          <MenuItem value={"Not specified"}>Not specified</MenuItem>
        </Select>
        <InputLabel id="demo-simple-select-label">Type of Scholarship</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="TypeofScholarship"
          label="Type of Scholarship"
        >
          <MenuItem value={"Merit-Based"}>Merit-Based</MenuItem>
          <MenuItem value={"Means-Based"}>Means-Based</MenuItem>
          <MenuItem value={"Fellowships"}>Fellowships</MenuItem>
          <MenuItem value={"Zero interest loans"}>Zero interest loans</MenuItem>
          <MenuItem value={"Fully funded scholarships"}>Fully funded scholarships</MenuItem>
          <MenuItem value={"Not specified"}>Not specified</MenuItem>
        </Select>
        <InputLabel id="demo-simple-select-label">Location of study</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="Locationofstudy"
          label="Location of study"
        >
          <MenuItem value={"Within India"}>Within India</MenuItem>
          <MenuItem value={"Abroad"}>Abroad</MenuItem>
          <MenuItem value={"Not specified"}>Not specified</MenuItem>
        </Select>
        <InputLabel id="demo-simple-select-label">Scholarship funding</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="Scholarshipfunding"
          label="Scholarship funding"
        >
          <MenuItem value={"Government"}>Government</MenuItem>
          <MenuItem value={"Private"}>Private</MenuItem>
          <MenuItem value={"Not specified"}>Not specified</MenuItem>
        </Select>
        
        <InputLabel id="demo-simple-select-label">Deadline</InputLabel>
        <input className={styles.formDate} type="date" id="date" name="deadline"/>
        <InputLabel id="demo-simple-select-label">Link to Guidelines</InputLabel>
        <input id="link" className={styles.formLink} name="link" type="text" autoComplete="link" required />
        <button type="submit" className={styles.submitButton}>Register Scholarship</button>
      </form>
      <Link href="/api/auth/logout">
      <button className={styles.logoutButton}>Logout</button>
      </Link>
      
      </Layout>
     
    )
  }
 
export const getServerSideProps= withPageAuthRequired();