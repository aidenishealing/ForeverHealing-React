import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import MNAV from '../components/m-nav'
import Hero9 from '../components/hero9'
import MCURE from '../components/m-cure'
import Senja1 from '../components/senja1'
import FAQComponent from '../components/faq-component'
import Typeform from '../components/typeform'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>ForeverHealing</title>
        <meta
          name="description"
          content="Helping you release the root hidden stress harming your pancreas and causing Diabetes. Board Certified with AANWP - Global Energy Method Master Practitioner."
        />
        <meta property="og:title" content="ForeverHealing" />
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
            <span className="home-text10 thq-body-small thq-link">Start</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11 thq-body-small thq-link">
              <span>Success Stories</span>
              <br></br>
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span
              id="healnowbutton"
              className="home-text14 thq-body-small thq-link button"
            >
              <span className="home-text15">Contact Us</span>
              <br></br>
            </span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="home-text17 thq-body-small thq-link">
              <span>Contact Us</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text20">RISK-FREE DEMO</span>
          </Fragment>
        }
        rootClassName="mna-vroot-class-name"
      ></MNAV>
      <Hero9
        action1={
          <Fragment>
            <span className="home-text21 thq-body-small">IM READY</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text22 thq-body-large">
              Ready to stop managing your health problems and make permanent
              changes?
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text23 thq-heading-1">
              <span className="home-text24">
                STOP MANAGING, START REVERSING.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="hero9root-class-name"
      ></Hero9>
      <MCURE
        text={
          <Fragment>
            <span className="home-text26">
              Years of researching the fields of psychology, sociology,
              agriculture, ancient history, meditation, physical therapy,
              chinese medicine, frequency medicine, yoga, hypnosis, fasting, the
              mind-body connection, applying every methodology, and practicing
              for hundreds of hours with the sole focus of permanently making
              changes for IBS, ADHD, joint pain, early stage insulin resistance,
              brain fog, led me to complete coursework, training with dozens of
              individuals, and becoming Board Certified with the American
              Association of Natural Wellness Practitioners. 
            </span>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="home-text27">
              CLICK HERE TO HEAR HOW SOMEONE REVERSED THEIR TYPE 2 DIABETES IN
              UNDER A YEAR
            </span>
          </Fragment>
        }
        button2={
          <Fragment>
            <span className="home-text28">
              <span>CLICK TO READ</span>
              <br></br>
            </span>
          </Fragment>
        }
        content11={
          <Fragment>
            <span className="home-text31 thq-body-large">
              <span className="home-text32">WAIT... HOW?</span>
              <br></br>
              <span>
                Here&apos;s the story of how I healed 12+ years of IBS, ADHD,
                spiked heart rate, past shame, and joint pain, permanently.
              </span>
            </span>
          </Fragment>
        }
        content11111={
          <Fragment>
            <span className="home-text35 thq-body-large">
              <span className="home-text36">
                I worked with clients to heal decades of chronic fatigue, joint
                pain, insulin resistance, high blood pressure. I took everything
                I leanred from my thousands of hours of success, failure, and
                created ForeverHealing - heal forever, not for now.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="mcur-eroot-class-name1"
      ></MCURE>
      <Senja1 rootClassName="senja1root-class-name"></Senja1>
      <FAQComponent
        heading1={
          <Fragment>
            <span className="home-text38 thq-heading-2">
              <span>faq (has written version via popup button)</span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="faq-componentroot-class-name1"
      ></FAQComponent>
      <Typeform rootClassName="typeformroot-class-name"></Typeform>
      <Footer
        text={
          <Fragment>
            <span className="home-text41">INSERT EMAIL LIST HERE</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text42 thq-button-filled">START</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text43 thq-button-filled">
              SUCCESS STORIES
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text44 thq-button-filled">HEAL NOW</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text45 thq-body-small">
              Terms &amp; Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text46 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text47 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name"
      ></Footer>
    </div>
  )
}

export default Home
