import React from 'react'
import './ProfessionalSummary.css'
import WorkCardItem from './WorkCardItem';
import { Link } from 'react-router-dom';

const ProfessionalSummary = () => {
    return (
        <div className = "all--info">
            <div className="all-info-edu">
                <div className ="education">
                    <h1> Education </h1> 
                    <div className = "school">
                    <h2> Bachelor's of Science in Computer Science @ Western Michigan University </h2>
                    <br/> <h3>Graduation : Anticipated 2022 
                    <br/><br/>
                    Data Structures & Algorithms | Database Management Systems | Artificial Intelligence | Web Dev | Computer Systems </h3>
                    </div>
                </div>
            </div>
            <div className="work_experience">
                <h1> Work Experiences</h1>
                <br />  
                <div className = "work-list-first">
            <ul className ="cards">

            <WorkCardItem
              text='IT Co-ordinator &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Aug 2020 - Present '
              place ='Campus Activities Board - Kalamazoo, MI'
              responsibilities1 ='Optimize website by embedding code into Squarespace'
              responsibilities2 ='Ensure to display the most updated, interesting, and accurate information to increase web traffic'
              responsibilities3 = 'Customize the website themes and add graphics and animation to reflect the monthly events'
              website ='wmucab.com'
            />

            <WorkCardItem
              text='Student Mentor &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; April 2019 - Present'
              place ='Peer2Peer - Kalamazoo, MI'
              responsibilities1 ='Utilize Salesforce, a CRM, to communicate with 150+ first year students by texting them biweekly and emailing monthly to help them with the transition to college'
              responsibilities2 ='Track and analyze data using MS Excel to create plans for engagement and future communication'
              responsibilities3 = 'Collaborate with other team members to develop videos released biweekly with an audience of over 4,000 students'
              website ='instagram.com\peer2peerwmu'
            />   

            <WorkCardItem
              text='Frontend Web Developer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; May 2020 - Aug 2020 '
              place ='Delovery - San Francisco, CA'
              responsibilities1 ='Delovery is a non-profit, with a free market and delivery service that aims to reinvigorate local communities'
              responsibilities2 ='Integrated code into Shopify and Carrd to implement the front end website using HTML, CSS, and JavaScript- delovery.org'
              responsibilities3 = 'Implemented the store-front using React.js - which will be used once the store is ready to launch'
              website ='delovery.com'
            />

            <WorkCardItem
              text='Peer Mentor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; December 2019 - August 2020'
              place ='Mentoring for Success - Kalamazoo, MI'
              responsibilities2 ='Individualized and group tutoring for students in Calculus, English, Psychology, Biology, Chemistry, Computer Science'
              responsibilities1 ='Mentor for participants of various target populations such as the Office of Disability Services for Students, Michigan GEAR UP Program, College Assistant Migrant Program, and TRiO'
              responsibilities3 = 'Presented weekly presentations and assisted with office duties - documentation, forum participation, and student ratings'
              website ='instagram.com\peer2peerwmu'
            />     

            <WorkCardItem
              text='IT Administrative Intern&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; April 2019 - August 2019'
              place ='MyExamsPrep - Ashburn, VA'
              responsibilities1 ='Created an admin system using HTML, CSS, JavaScript, PHP, and integrated database to update student information, payments and keep track of employee work hours'
              responsibilities2 ='Updated and managed the student database and created monthly reports for 100+ students'
              responsibilities3 = 'Assisted with troubleshooting issues and provide technical support'
              website ='myexamsprep.com'
            />     

            <WorkCardItem
              text='Office Intern&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; April 2017 - August 2017'
              place ='Everest International Model United Nations-  Kathmandu, Nepal'
              responsibilities1 ='Documented and updated various spreadsheets daily related to tasks that led to the conference'
              responsibilities2 ='Communicated with over 200 participants scheduled to attend the largest MUN in Nepal'
              responsibilities3 = 'Communicated with official sponsors and vendors for updates'
              website ='instagram.com\peer2peerwmu'
            />             
            </ul>

            <Link className="projectss" to='/projects'>
                    Click here to take a look at my projects
            </Link>
            </div>
              
            </div>
        </div>
    )
}

export default ProfessionalSummary
