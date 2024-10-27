import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './m-cure.css'

const MCURE = (props) => {
  return (
    <div className={`m-cure-header78 ${props.rootClassName} `}>
      <div className="m-cure-content">
        <div className="m-cure-container1">
          <video
            id="storycharacter"
            src={props.videoSrc}
            muted="true"
            poster="https://play.teleporthq.io/static/svg/videoposter.svg"
            autoPlay="true"
            className="m-cure-video"
          ></video>
          <div className="m-cure-container2"></div>
          <div className="m-cure-container3">
            <p>
              {props.content11 ?? (
                <Fragment>
                  <p className="m-cure-text15 thq-body-large">
                    <span className="m-cure-text16">WAIT... HOW?</span>
                    <br></br>
                    <span className="m-cure-text18">
                      Here&apos;s the story of how I healed 12+ years of IBS,
                      ADHD, spiked heart rate, past shame, and joint pain,
                      permanently.
                    </span>
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </div>
      <button type="button" className="button m-cure-button">
        <span>
          {props.button2 ?? (
            <Fragment>
              <span className="m-cure-text23">
                <span>CLICK TO READ</span>
                <br></br>
              </span>
            </Fragment>
          )}
        </span>
      </button>
      <span>
        {props.text ?? (
          <Fragment>
            <span className="m-cure-text26">
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
        )}
      </span>
      <div className="m-cure-container4">
        <img
          alt={props.imageAlt}
          src={props.imageSrc1}
          className="m-cure-image1"
        />
        <img
          alt={props.imageAlt3}
          src={props.imageSrc4}
          className="m-cure-image2"
        />
        <img
          alt={props.imageAlt4}
          src={props.imageSrc11}
          className="m-cure-image3"
        />
      </div>
      <p>
        {props.content11111 ?? (
          <Fragment>
            <p className="m-cure-text19 thq-body-large">
              <span className="m-cure-text20">
                Then my journey began to help people relieve decades of chronic
                fatigue, joint pain, insulin resistance, high blood pressure and
                Type 2 Diabetes. I took everything I learned from my thousands
                of hours of success, failure, and with results-first in mind,
                created ForeverHealing - heal forever, not for now.
              </span>
              <br></br>
            </p>
          </Fragment>
        )}
      </p>
      <Link to="/success-stories" className="m-cure-navlink button">
        <span>
          {props.button1 ?? (
            <Fragment>
              <span className="m-cure-text22">
                CLICK HERE TO HEAR HOW SOMEONE REVERSED THEIR TYPE 2 DIABETES IN
                UNDER A YEAR
              </span>
            </Fragment>
          )}
        </span>
      </Link>
    </div>
  )
}

MCURE.defaultProps = {
  imageAlt: 'image',
  rootClassName: '',
  content11: undefined,
  imageSrc11: '/aiden%20matt%20master%20gem%20certification-1500h.webp',
  content11111: undefined,
  button1: undefined,
  button2: undefined,
  text: undefined,
  imageSrc4: '/aanwp-boardcertified-color-scaled-1500h.webp',
  imageAlt3: 'image',
  imageSrc1: '/aidenmattemotioncodelevel1certification-1500h.webp',
  imageSrc: '2785a337-8657-4ea7-a1d9-3fa9e4ac1d7e',
  videoSrc: '',
  imageAlt4: 'image',
}

MCURE.propTypes = {
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  content11: PropTypes.element,
  imageSrc11: PropTypes.string,
  content11111: PropTypes.element,
  button1: PropTypes.element,
  button2: PropTypes.element,
  text: PropTypes.element,
  imageSrc4: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc: PropTypes.string,
  videoSrc: PropTypes.string,
  imageAlt4: PropTypes.string,
}

export default MCURE
