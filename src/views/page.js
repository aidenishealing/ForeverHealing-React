import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import MNAV from '../components/m-nav'
import Footer from '../components/footer'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - ForeverHealing</title>
        <meta
          name="description"
          content="Helping you release the root hidden stress harming your pancreas and causing Diabetes. Board Certified with AANWP - Global Energy Method Master Practitioner."
        />
        <meta property="og:title" content="Page - ForeverHealing" />
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
            <span className="page-text10 thq-body-small thq-link">
              <span>START</span>
              <br></br>
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="page-text13 thq-body-small thq-link">
              <span>SUCCESS STORIES</span>
              <br></br>
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="page-text16 thq-body-small thq-link button">
              Heal Now
            </span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="page-text17 thq-body-small thq-link">
              <span>Who Benefits?</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="page-text20">RISK-FREE DEMO</span>
          </Fragment>
        }
        logoSrc="1ec3246b-048b-4bab-afb1-16908109702e"
      ></MNAV>
      <Footer
        text={
          <Fragment>
            <span className="page-text21">INSERT EMAIL LIST HERE</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="page-text22 thq-button-filled">START</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="page-text23 thq-button-filled">
              SUCCESS STORIES
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="page-text24 thq-button-filled">HEAL NOW</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="page-text25 thq-body-small">
              Terms &amp; Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="page-text26 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="page-text27 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name3"
      ></Footer>
    </div>
  )
}

export default Page
