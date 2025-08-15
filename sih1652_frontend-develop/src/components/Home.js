import React from 'react';
import './home.css'; 
import { useNavigate } from 'react-router-dom';
import tank from './utils/tank.jpg';
import im1 from './utils/ime1.jpg'; 
import im2 from './utils/img2.jpg'; 
import im3 from './utils/img3.jpg'; 
import im4 from './utils/kh.png'; 
import im6 from './utils/dr.png';
import im7 from './utils/KI.png';
import im8 from './utils/fg.png';
import rt1 from './utils/kd1.png';
import rt2 from './utils/kd2.png';
import rt3 from './utils/kd3.png';
import rt4 from './utils/kd4.png';
import rt5 from './utils/kd5.png';
import uio from './utils/ghy.png';
import uio1 from './utils/ghy2.png';
import { Carousel } from "react-responsive-carousel";
import CustomCarousel from './animation_compo.js';
import DownloadButton from './download.js';
import {Fade} from "react-awesome-reveal";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AttentionSeeker } from 'react-awesome-reveal';
const App = () => {
  const navigate = useNavigate();

  return (
    <div className='divakar'>
      <section className="slider-section">
        <CustomCarousel>
         <div>
        <img class='s1' src={im4} alt="Slide 1" />
        <p className="legend">Slide 1</p>
      </div>
      <div>
        <img class='s1' src={im2} alt="Slide 2" />
        <p className="legend">Slide 2</p>
      </div>
      <div>
        <img class='s1' src={im3} alt="Slide 3" />
        <p className="legend">Slide 3</p>
      </div>
      </CustomCarousel>
      </section>

      <main className="main-content" id="updates">
        <section className="left-section" style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1'}}>
          <h2>Important Updates</h2>
          <div className="scroll-container">
            <div className="scroll-tet">
              {[
    'Engagement of Retired Government Officials as Consultants on Contract Basis in DP and C DRDO',
    'Advertisement for award of Research Associate (RA) & Junior Research Fellowship (JRF) in CHESS, Hyderabad',
    'Engagement of apprentices in RCI, Hyderabad for the Financial Year 2024-25',
    'Advertisement for the Award of Junior Research Fellowship (JRF) in DYSL-AI Bengaluru',
    'Result of Interview held on 28-30 Aug 2024 for the selection of Junior Research Fellowship (JRF) against Advt no CEPTAM/JRF/2024/01',
    'Provisionally Shortlisted Candidates for Junior Research Fellowship (JRF) for Off-Line Interview in GTRE, Bengaluru',
    'GTRE Advt. No. GTRE/HRD/026/2024-25 for Engagement of Apprenticeship Trainees at GTRE,',
    'TDF Project open for inviting Detailed Project Report (Proposals) from Indian industries',
    'Announcement for the Recruitment of Scientific Assistants in Defence Research.',
    'Advertisement for the Award of Fellowships in Aerospace Engineering at DRDO, Bangalore.',
    'Inviting Applications for Research Positions in Quantum Computing at DRDO, Pune.',
    'Call for Applications for Doctoral Research Scholarships in Defence Studies.',
    'Opportunity for Junior Research Fellowship (JRF) in Cybersecurity at DRDO, Delhi.',
    'Notification for Project Trainee Positions in Signal Processing at DRDO, Chennai.',
    'Recruitment Announcement for Engineers in Defence Systems at DRDO, Hyderabad.',
    'Applications Invited for Fellowship Programs in Naval Research at DRDO, Kochi.',
    'Openings for Research Scientists in Emerging Technologies at DRDO, Chandigarh.',
    'Engagement of Specialists in Defence Technology Innovations.'
].map((role, index) => (
                <div key={index}>
                  <p>
                  {role} - 
                    <span className="applied-text">
                      <DownloadButton />
                    </span>
                  </p>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="right-section" id="jobs"  style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1'}}>
          <h1>Job Roles</h1>
          <div className="scroll-container">
            <div className="scroll-text">
              {['Senior Scientist in Nanotechnology (Advt. No. 159) –','Project Associate in Computational Biology –',
              'Senior Analyst in Data Science (Advt. No. 157) – ',
              'Chief Scientist in Robotics (Advt. No. 156) – ','Apply Now for Senior Scientist in Environmental Science (Advt. No. 155) – ',
              'Walk-in-interview for the position of Research Associate (RA) & Junior Research Fellow (JRF) in CFEES, Delhi', 
              'Online interview (through video conference) for the post of Junior Research Fellow in PXE, Balasore', 'Administration staff and Engineers', 
              'Corrigendum - Rescheduled Interview Applications are invited for the engagement of Gaduate Aprenticeship trainee in DEBEL, Bengaluru',
              'Post of Scientist ‘D’ on deputation basis (Advt.no.151','Personal Interview for Physiology (Item No. 35) and Biotechnology/ Biochemistry',
              'DIPAS, Delhi invites applications for Research Associate - Junior Research Fellows', 'Online interview (through video conference) for the post of Junior Research Fellow in PXE',
              'Corrigendum - Rescheduled Interview Applications are invited for the engagement of Gaduate Aprenticeship trainee in DEBEL',
              'Post of Scientist ‘D’ on deputation basis (Advt.no.151','Personal Interview for Physiology (Item No. 35) and Biotechnology/ Biochemistry',
              'DIPAS, Delhi invites applications for Research Associate - '
            ].map((role, index) => (
                <div className='fr' key={index}>
                  <p>
                    Apply for {role} - 
                    <span className="applied-text">
                      <a
                       onClick={() => {
                        navigate('/login');
                      }}> Apply</a>
                      <br />
                    </span>
                  </p>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="right-section" id="jobs">
          <h1>DEATILS</h1>
          <div className="scroll-container"> 
              <div className='is'>
                <img src={im7} alt="Tank" />
                <br />
                <button class="subm" 
                  onClick={() => {
                    navigate('/login');
                  }} >FILL DETAILS</button>
              </div>
              <div className='is'>
              <img src={im6} alt="Tank" />
               <br />
               <button class="subm"  onClick={() => {
                   navigate('/login');
                 }}>VIEW DETAILS</button>
            </div>
          </div>
        </section>
      </main>

   <div className='ma'>
   <Fade className='s12' direction='left'>
   <div className='s14'>
   <div className='s13'> <img src={rt1} alt="Tank" />
   <p>Technology Clusters</p></div>
   </div>
   </Fade>
   <Fade className='s12' direction='up' >
   <div className='s14'>
   <div className='s13' > <img src={rt2} alt="Tank" />
   <p>Laboratories & Establishments</p>
   </div></div>
   </Fade>
   <Fade className='s12' direction='down' >
    <div className='s14'>
   <div className='s13' >  <img src={rt3} alt="Tank" /> 
   <p>Corporate Clusters</p></div>
   </div>
   </Fade>
   <Fade className='s12' direction='up' >
   <div className='s14'>
   <div className='s13' > <img src={rt4} alt="Tank" />
   <p>Corporate Directorates</p></div>
   </div>
   </Fade>
   <Fade className='s12' direction='right' >
   <div className='s14'>
   <div className='s13'> <img src={rt5} alt="Tank" />
   <p>DER & IPR</p></div>
   </div>
   </Fade>
   </div>
   
      <main className="main-con" id="about">
        <div className='about_name'>
          
        <h1 className="about-heading">ABOUT</h1>
        
        </div>    
        <div className="about-container">
          <div className="about-text" >
            <p>
              RAC, the Recruitment and Assessment Centre of DRDO was set up on 23 July 1985 after getting exemption from the purview of Union Public Service Commission (UPSC). It is situated at Lucknow Road, Timarpur, Delhi. RAC has undertaken various recruitment programmes to induct scientists each year in variety of scientific and engineering disciplines relevant to DRDO Laboratories and assessed the suitability of DRDO scientists for promotion to next higher grade through duly constituted Assessment Boards/ Peer Committee.
            </p>
            <p>The primary responsibilities of RAC are:</p>
            <ul>
              <li>Recruitment of Scientists (Group 'A' Class I Gazetted Post) in DRDO</li>
              <li>Assessments of Scientists of DRDO for promotion to the next higher grades</li>
              <li>Selection of candidates for higher study courses (ME/ M. Tech/ MSc Engg) under Research & Training Scheme of DRDO and Post Graduate Training scheme of Army, Navy, and Air Force</li>
              <li>Any other assignment specified by Secretary, Department of Defence R&D and Chairman, DRDO</li>
            </ul>
          </div>
          <div className="about-image">
            <img src={tank} alt="Tank" />
          </div>
        </div>
      
      </main>
      <div className='s15'>
        <div className='s16'>
        <img src={uio} alt="Tank" />
        </div>
        <div className='s16'>
        <img src={uio1} alt="Tank" />
         </div>
      </div>
      <main className='contect-box' id='contect'>
      <div className='about_name'>
        <h1 className="about-heading">Contact Us</h1>
        </div>         
          <div className="con">
            <img  className="df"src={im8} alt="Tank" />
        </div>
      </main>
    </div>
  );
};

export default App;