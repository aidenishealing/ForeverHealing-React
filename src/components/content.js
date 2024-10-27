import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content.css'

const Content = (props) => {
  return (
    <div className="content-content">
      <p>
        {props.content11 ?? (
          <Fragment>
            <p className="content-text2 thq-body-large">
              <span className="content-text3">WAIT... HOW?</span>
              <br></br>
              <span>
                Here&apos;s the story of how I healed 12+ years of IBS, ADHD,
                spiked heart rate, past shame, and joint pain, permanently.
              </span>
            </p>
          </Fragment>
        )}
      </p>
      <video
        src={props.videoSrc}
        muted="true"
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        autoPlay="true"
        className="content-video"
      ></video>
    </div>
  )
}

Content.defaultProps = {
  content11: undefined,
  videoSrc: '',
}

Content.propTypes = {
  content11: PropTypes.element,
  videoSrc: PropTypes.string,
}

export default Content
