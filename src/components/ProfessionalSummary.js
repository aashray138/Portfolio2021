import React from 'react'
import './ProfessionalSummary.css'
import WorkCardItem from './WorkCardItem';
import { Link } from 'react-router-dom';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const ProfessionalSummary = () => {
  return (
    <div className="all--info">
      <div className="work_experience">
        <br />
        <marquee scrollamount="18" style={{ color: '#252e48', fontSize: '2.3em' }}>
          Software Development Intern &nbsp;🖥️&nbsp; Student Mentor &nbsp;✨&nbsp; Frontend Web Developer &nbsp;⌨️&nbsp; IT Coordinator &nbsp;📙&nbsp; Academic Mentor 👨‍💻 Author &nbsp;📚&nbsp;
          Software Development Intern &nbsp;🖥️&nbsp; Student Mentor &nbsp;✨&nbsp; Frontend Web Developer &nbsp;⌨️&nbsp; IT Coordinator &nbsp;📙&nbsp; Academic Mentor 👨‍💻 Author &nbsp;📚&nbsp;
          Software Development Intern &nbsp;🖥️&nbsp; Student Mentor &nbsp;✨&nbsp; Frontend Web Developer &nbsp;⌨️&nbsp; IT Coordinator &nbsp;📙&nbsp; Academic Mentor 👨‍💻 Author &nbsp;📚&nbsp;
          Software Development Intern &nbsp;🖥️&nbsp; Student Mentor &nbsp;✨&nbsp; Frontend Web Developer &nbsp;⌨️&nbsp; IT Coordinator &nbsp;📙&nbsp; Academic Mentor 👨‍💻 Author &nbsp;📚&nbsp;
        </marquee>
        <div className="work-list-first">
          <ul className="cards">

            <div>
              <Timeline lineColor={'#ddd'}>
                <TimelineItem
                  key="001"
                  dateComponent={(
                    <div
                      style={{
                        display: 'block',
                        float: 'left',
                        padding: '10px',
                        background: '#63ba8f',
                        color: '#fff',
                      }}
                    >
                      June 2021 - Present
                    </div>
                  )}
                >
                  <h2>Software Development Intern, SICPA Securink</h2>
                  <h3 style={{ marginLeft: '10%' }}> Solutions Delivery Team</h3>
                  <ul>
                    <li>  Developed and tested frontend functionalities in different components such as forms, tables dynamically for the 4 SETS application in Vue.js </li>
                    <li> Contributed to QA team by helping with Regression Testing and implementing automated testing using Cucumber. </li>
                    <li> Creating a mock up mobile application using Flutter as a proof of concept for future developments.</li>
                  </ul>
                </TimelineItem>

                <TimelineItem
                  key="002"
                  dateComponent={(
                    <div
                      style={{
                        display: 'block',
                        float: 'left',
                        padding: '10px',
                        background: '#7774d1',
                        color: '#fff',
                      }}
                    >
                      April 2021 - June 2021
                    </div>
                  )}
                >
                  <h2>Mobile App Developer, Develop for Good </h2>
                  <h3 style={{ marginLeft: '10%' }}> iOS and Android using Flutter</h3>
                  <ul>
                    <li> Developed a cross platform native mobile application for the Social Income non-profit organization using Flutter and Firebase. </li>
                    <li> Designed and implemented the structure of data storage in the back-end to reduce load time as the app will be used primarily in Sierra Leone </li>
                    <li> Spearheaded the use of Firebase authentication and added the OTP security feature along with custom authentication. </li>
                  </ul>
                </TimelineItem>

                <TimelineItem
                  key="003"
                  dateComponent={(
                    <div
                      style={{
                        display: 'block',
                        float: 'left',
                        padding: '10px',
                        background: '#ba8556',
                        color: '#fff',
                      }}
                    >
                      September 2020 - April 2021
                    </div>
                  )}
                >
                  <h2>IT Coordinator, Campus Activities Board</h2>
                  <h3 style={{ marginLeft: '10%' }}> Squarespace </h3>
                  <ul>
                    <li> Optimize website by embedding code into Squarespace and adding in animtations</li>
                    <li> Ensure to display the most updated, interesting, and accurate information to increase web traffic</li>
                    <li> Customize the website themes and add graphics and animation to reflect the monthly events </li>
                  </ul>
                </TimelineItem>

                <TimelineItem
                  key="004"
                  dateComponent={(
                    <div
                      style={{
                        display: 'block',
                        float: 'left',
                        padding: '10px',
                        background: '#608ce2',
                        color: '#fff',
                      }}
                    >
                      May 2020 - August 2020
                    </div>
                  )}
                >
                  <h2>Front end web Developer, Delovery </h2>
                  <h3 style={{ marginLeft: '10%' }}> HTML, CSS, JS, & React.js </h3>
                  <ul>
                    <li> Delovery is a non-profit, with a free market and delivery service that aims to reinvigorate local communities</li>
                    <li> Integrated code into Shopify and Carrd to implement the front end website using HTML, CSS, and JavaScript</li>
                    <li> Implemented the store-front using React.js and worked on multiple custom card components and login components </li>
                  </ul>
                </TimelineItem>

                <TimelineItem
                  key="005"
                  dateComponent={(
                    <div
                      style={{
                        display: 'block',
                        float: 'left',
                        padding: '10px',
                        background: '#2d9cc9',
                        color: '#fff',
                      }}
                    >
                    April 2019 - August 2020
                    </div>
                  )}
                >
                  <h2>Associate Program Manager, WMU</h2>
                  <h3 style={{ marginLeft: '10%' }}> Office Jokester Award </h3>
                  <ul>
                    <li> Utilized Salesforce to communicate with 150+ first year students by texting them biweekly and emailing monthly to help them with the transition to college.</li>
                    <li> Effectively lead alongside the professional OST team through active participation, planning, implementation, and supervision of various student leader groups 
                      of orientation programs.</li>
                  </ul>
                </TimelineItem>

                <TimelineItem
                  key="006"
                  dateComponent={(
                    <div
                      style={{
                        display: 'block',
                        float: 'left',
                        padding: '10px',
                        background: '#e44553',
                        color: '#fff',
                      }}
                    >
                    December 2019 - August 2020
                    </div>
                  )}
                >
                  <h2>Academic Mentor, Mentoring for Success</h2>
                  <ul>
                    <li> Individualized and group tutoring for students in Calculus, English, Psychology, Biology, Chemistry, Computer Science.</li>
                    <li> Mentor for participants of various target populations such as the Office of Disability Services for Students, Michigan GEAR UP 
                      Program, College Assistant Migrant Program, and TRiO</li>
                    <li> Presented weekly presentations and assisted with office duties - documentation, forum participation, and student rating </li>

                  </ul>
                </TimelineItem>
                <TimelineItem
                  key="007"
                  dateComponent={(
                    <div
                      style={{
                        display: 'block',
                        float: 'left',
                        padding: '10px',
                        background: '#b554e3',
                        color: '#fff',
                      }}
                    >
                    May 2019 - August 2019
                    </div>
                  )}
                >
                  <h2>IT Administrative Intern , MyExamsPrep</h2>
                  <ul>
                    <li> Created an admin system using HTML, CSS, JavaScript, PHP, and integrated database to update student information, payments and keep track of employee work hours</li>
                    <li> Updated and managed the student database and created monthly reports for 100+ students</li>
                    <li> Assisted with troubleshooting issues and provide technical support. </li>

                  </ul>
                </TimelineItem>

                <TimelineItem
                  key="008"
                  dateComponent={(
                    <div
                      style={{
                        display: 'block',
                        float: 'left',
                        padding: '10px',
                        background: '#2ba976',
                        color: '#fff',
                      }}
                    >
                    Aug 2018 - December 2019
                    </div>
                  )}
                >
                  <h2>Student Supervisor, Dining Halls</h2>
                  <ul>
                  </ul>
                </TimelineItem>

                <TimelineItem
                  key="009"
                  dateComponent={(
                    <div
                      style={{
                        display: 'block',
                        float: 'left',
                        padding: '10px',
                        background: '#d35d4b',
                        color: '#fff',
                      }}
                    >
                    August 2017
                    </div>
                  )}
                >
                  <h2> Enrolled in College</h2>
                  <ul>
                  </ul>
                </TimelineItem>

                <TimelineItem
                  key="009"
                  dateComponent={(
                    <div
                      style={{
                        display: 'block',
                        float: 'left',
                        padding: '10px',
                        background: '#3e34b8',
                        color: '#fff',
                      }}
                    >
                    Apr 2017 - Aug 2017
                    </div>
                  )}
                >
                  <h2>Office Intern, Youth Thinker's Society</h2>
                  <ul>
                  </ul>
                </TimelineItem>

                <TimelineItem
                  key="009"
                  dateComponent={(
                    <div
                      style={{
                        display: 'block',
                        float: 'left',
                        padding: '10px',
                        background: '#63ba8f',
                        color: '#fff',
                      }}
                    >
                    August 2016
                    </div>
                  )}
                >
                  <h2> Graduated High School </h2>
                  <ul>
                  </ul>
                </TimelineItem>

              </Timeline>
            </div>

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
