import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './faq-component.css'

const FAQComponent = (props) => {
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  return (
    <div
      className={`faq-component-faq8 thq-section-padding ${props.rootClassName} `}
    >
      <div className="faq-component-max-width thq-section-max-width">
        <div className="thq-flex-column thq-section-max-width faq-component-container">
          <div className="faq-component-section-title">
            <div className="faq-component-content">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="faq-component-text6 thq-heading-2">
                      <span>faq (has written version via popup button)</span>
                      <br></br>
                    </h2>
                  </Fragment>
                )}
              </h2>
            </div>
          </div>
          <video
            src={props.videoSrc}
            muted="true"
            poster="https://play.teleporthq.io/static/svg/videoposter.svg"
            autoPlay="true"
            className="faq-component-video1"
          ></video>
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="faq-component-text6 thq-heading-2">
                  <span>faq (has written version via popup button)</span>
                  <br></br>
                </h2>
              </Fragment>
            )}
          </h2>
        </div>
      </div>
      <video
        src={props.videoSrc1}
        muted="true"
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        autoPlay="true"
        className="faq-component-video2"
      ></video>
      <h2>
        {props.heading1 ?? (
          <Fragment>
            <h2 className="faq-component-text6 thq-heading-2">
              <span>faq (has written version via popup button)</span>
              <br></br>
            </h2>
          </Fragment>
        )}
      </h2>
      <video
        src={props.videoSrc2}
        muted="true"
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        autoPlay="true"
        className="faq-component-video3"
      ></video>
      <h2>
        {props.heading1 ?? (
          <Fragment>
            <h2 className="faq-component-text6 thq-heading-2">
              <span>faq (has written version via popup button)</span>
              <br></br>
            </h2>
          </Fragment>
        )}
      </h2>
      <video
        src={props.videoSrc3}
        muted="true"
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        autoPlay="true"
        className="faq-component-video4"
      ></video>
      <h2>
        {props.heading1 ?? (
          <Fragment>
            <h2 className="faq-component-text6 thq-heading-2">
              <span>faq (has written version via popup button)</span>
              <br></br>
            </h2>
          </Fragment>
        )}
      </h2>
      <video
        src={props.videoSrc4}
        muted="true"
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        autoPlay="true"
        className="faq-component-video5"
      ></video>
    </div>
  )
}

FAQComponent.defaultProps = {
  videoSrc1: '',
  videoSrc2: '',
  heading1: undefined,
  videoSrc: '',
  videoSrc3: '',
  rootClassName: '',
  videoSrc4: '',
}

FAQComponent.propTypes = {
  videoSrc1: PropTypes.string,
  videoSrc2: PropTypes.string,
  heading1: PropTypes.element,
  videoSrc: PropTypes.string,
  videoSrc3: PropTypes.string,
  rootClassName: PropTypes.string,
  videoSrc4: PropTypes.string,
}

export default FAQComponent
