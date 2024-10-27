import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import MNAV from '../components/m-nav'
import FAQComponent from '../components/faq-component'
import CALEMBED from '../components/calembed'
import Footer from '../components/footer'
import './faq.css'

const FAQ = (props) => {
  return (
    <div className="faq-container">
      <Helmet>
        <title>FAQ - ForeverHealing</title>
        <meta
          name="description"
          content="Helping you release the root hidden stress harming your pancreas and causing Diabetes. Board Certified with AANWP - Global Energy Method Master Practitioner."
        />
        <meta property="og:title" content="FAQ - ForeverHealing" />
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
            <span className="faq-text10 thq-body-small thq-link">Start</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="faq-text11 thq-body-small thq-link">
              <span>Success Stories</span>
              <br></br>
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span
              id="healnowbutton"
              className="faq-text14 thq-body-small thq-link button"
            >
              <span className="faq-text15">Contact Us</span>
              <br></br>
            </span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="faq-text17 thq-body-small thq-link">
              <span>(moved FAQ to Page 2)</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="faq-text20">RISK-FREE DEMO</span>
          </Fragment>
        }
        rootClassName="mna-vroot-class-name1"
      ></MNAV>
      <FAQComponent
        heading1={
          <Fragment>
            <span className="faq-text21 thq-heading-2">
              <span className="faq-text22">
                (each question is answered via video)
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="faq-componentroot-class-name2"
      ></FAQComponent>
      <CALEMBED
        button={
          <Fragment>
            <span className="faq-text24">
              <span>View All Reviews</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="faq-text27 thq-heading-1">
              <span className="faq-text28">
                So... you want to experience REAL change 
              </span>
              <br className="faq-text29"></br>
              <span className="faq-text30">but still feel skeptical?</span>
              <br></br>
              <span className="faq-text32">EXPERIENCE</span>
              <br></br>
              <span className="faq-text34">THE RISK-FREE DEMO</span>
              <br></br>
              <span className="faq-text36">
                IN 40 MINUTES IF YOU DON&apos;T FEEL
              </span>
              <br className="faq-text37"></br>
              <span className="faq-text38">- REDUCTION in PAIN</span>
              <br className="faq-text39"></br>
              <span className="faq-text40">- CLEARHEADED without thoughts</span>
              <br className="faq-text41"></br>
              <span className="faq-text42">- NEWFOUND Calmness...</span>
              <br className="faq-text43"></br>
              <span className="faq-text44">
                You get your money-back. Seriously.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="calembe-droot-class-name1"
      ></CALEMBED>
      <Footer
        text={
          <Fragment>
            <span className="faq-text46">INSERT EMAIL LIST HERE</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="faq-text47 thq-button-filled">START</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="faq-text48 thq-button-filled">
              SUCCESS STORIES
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="faq-text49 thq-button-filled">HEAL NOW</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="faq-text50 thq-body-small">
              Terms &amp; Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="faq-text51 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="faq-text52 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name1"
      ></Footer>
    </div>
  )
}

export default FAQ
