import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import MNAV from '../components/m-nav'
import Hero171 from '../components/hero171'
import CALEMBED from '../components/calembed'
import Senja1 from '../components/senja1'
import FAQComponent from '../components/faq-component'
import Footer from '../components/footer'
import './success-stories.css'

const SuccessStories = (props) => {
  return (
    <div className="success-stories-container">
      <Helmet>
        <title>Success-Stories - ForeverHealing</title>
        <meta
          name="description"
          content="Helping you release the root hidden stress harming your pancreas and causing Diabetes. Board Certified with AANWP - Global Energy Method Master Practitioner."
        />
        <meta property="og:title" content="Success-Stories - ForeverHealing" />
        <meta
          property="og:description"
          content="Helping you release the root hidden stress harming your pancreas and causing Diabetes. Board Certified with AANWP - Global Energy Method Master Practitioner."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ae95f0c2-9fb0-4920-a918-077a9d3a28cb/d872cd76-7b7a-44e6-b7fd-e608d388263a?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <MNAV
        link1={
          <Fragment>
            <span className="success-stories-text10 thq-body-small thq-link">
              Start
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="success-stories-text11 thq-body-small thq-link">
              <span>Success Stories</span>
              <br></br>
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span
              id="healnowbutton"
              className="success-stories-text14 thq-body-small thq-link button"
            >
              <span className="success-stories-text15">Contact Us</span>
              <br></br>
            </span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="success-stories-text17 thq-body-small thq-link">
              <span>(moved FAQ to Page 2)</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="success-stories-text20">RISK-FREE DEMO</span>
          </Fragment>
        }
        rootClassName="mna-vroot-class-name2"
      ></MNAV>
      <Hero171
        button={
          <Fragment>
            <span className="success-stories-text21">
              <span>read</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="success-stories-text24 thq-heading-1">
              SUCCESS STORIES
            </span>
          </Fragment>
        }
        content11={
          <Fragment>
            <span className="success-stories-text25 thq-body-large">
              <span className="success-stories-text26">TYPE 2 DIABETES</span>
              <br className="success-stories-text27"></br>
              <span className="success-stories-text28">
                FROM SURVIVAL TO THRIVING
              </span>
              <br className="success-stories-text29"></br>
              <span className="success-stories-text30">
                PAST 20+ YEARS OF MEDS
              </span>
              <br></br>
              <br></br>
              <span className="success-stories-text33">
                Here is the story of how this 76 year old lady reversed chronic
                fatigue, lost 20 pounds, reduced her insulin intake by 24 units,
                and quit her medication by achieving healthy blood pressure.
                Months after her program, she is working to reduce her thyroid
                medication and walks everyday with ease!
              </span>
            </span>
          </Fragment>
        }
        content112={
          <Fragment>
            <span className="success-stories-text34 thq-body-large">
              <span>FREEDOM FROM AGE</span>
              <br></br>
              <br></br>
              <span>
                Here is the story of how after a brain surgery, and decades, an
                84 year old reversed his knee pain, years of weakness and
                numbness in his legs in less than a year.
              </span>
            </span>
          </Fragment>
        }
        content1111={
          <Fragment>
            <span className="success-stories-text39 thq-body-large">
              <span className="success-stories-text40">
                This is what an individual who had been practicing different
                forms of meditation, herbal medicine, and even chinese
                techniques for decades but still had stress built up from work
                had to say after a session -
              </span>
              <br className="success-stories-text41"></br>
              <br className="success-stories-text42"></br>
              <span className="success-stories-text43">
                &quot;After working a long shift, I did a session and felt all
                the tiredness, stress, and emotions from work release. I felt
                like I had just came into work even though it was 6pm!
                Completely refreshed.Take sand and imagine how it feels running
                through your hands-then take a silk cloth and imaginehow it
                feels then. That&apos;s how this feels. I was feeling sulky, now
                I&apos;m feeling silky. &quot; - R.G.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="hero171root-class-name"
      ></Hero171>
      <CALEMBED
        button={
          <Fragment>
            <span className="success-stories-text45">
              <span>View All Reviews</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="success-stories-text48 thq-heading-1">
              <span className="success-stories-text49">
                So... you want to experience REAL change 
              </span>
              <br className="success-stories-text50"></br>
              <span className="success-stories-text51">
                but still feel skeptical? Try
              </span>
              <br className="success-stories-text52"></br>
              <span className="success-stories-text53">THE RISK-FREE DEMO</span>
              <br></br>
              <span className="success-stories-text55">
                IN 30 MINUTES IF YOU DON&apos;T FEEL
              </span>
              <br className="success-stories-text56"></br>
              <span className="success-stories-text57">
                - REDUCTION in PAIN
              </span>
              <br className="success-stories-text58"></br>
              <span className="success-stories-text59">
                - CLEARHEADED without thoughts
              </span>
              <br className="success-stories-text60"></br>
              <span className="success-stories-text61">
                - NEWFOUND Calmness...
              </span>
              <br className="success-stories-text62"></br>
              <span className="success-stories-text63">
                You get your money-back. Seriously.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="calembe-droot-class-name"
      ></CALEMBED>
      <Senja1 rootClassName="senja1root-class-name1"></Senja1>
      <FAQComponent
        heading1={
          <Fragment>
            <span className="success-stories-text65 thq-heading-2">
              <span>faq (has written version via popup button)</span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="faq-componentroot-class-name"
      ></FAQComponent>
      <Footer
        text={
          <Fragment>
            <span className="success-stories-text68">
              INSERT EMAIL LIST HERE
            </span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="success-stories-text69 thq-button-filled">
              START
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="success-stories-text70 thq-button-filled">
              SUCCESS STORIES
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="success-stories-text71 thq-button-filled">
              HEAL NOW
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="success-stories-text72 thq-body-small">
              Terms &amp; Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="success-stories-text73 thq-body-small">
              Cookies Policy
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="success-stories-text74 thq-body-small">
              Privacy Policy
            </span>
          </Fragment>
        }
        rootClassName="footerroot-class-name2"
      ></Footer>
    </div>
  )
}

export default SuccessStories
