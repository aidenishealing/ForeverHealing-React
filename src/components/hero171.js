import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './hero171.css'

const Hero171 = (props) => {
  return (
    <div className={`hero171-header78 ${props.rootClassName} `}>
      <div className="hero171-column thq-section-padding thq-section-max-width">
        <div className="hero171-content">
          <h1>
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero171-text16 thq-heading-1">
                  SUCCESS STORIES
                </h1>
              </Fragment>
            )}
          </h1>
        </div>
        <div className="hero171-container1">
          <div className="hero171-container2">
            <p>
              {props.content11 ?? (
                <Fragment>
                  <p className="hero171-text25 thq-body-large">
                    <span className="hero171-text26">TYPE 2 DIABETES</span>
                    <br className="hero171-text27"></br>
                    <span className="hero171-text28">
                      FROM SURVIVAL TO THRIVING
                    </span>
                    <br className="hero171-text29"></br>
                    <span className="hero171-text30">
                      PAST 20+ YEARS OF MEDS
                    </span>
                    <br></br>
                    <br></br>
                    <span className="hero171-text33">
                      Here is the story of how this 76 year old lady reversed
                      chronic fatigue, lost 20 pounds, reduced her insulin
                      intake by 24 units, and quit her medication by achieving
                      healthy blood pressure. Months after her program, she is
                      working to reduce her thyroid medication and walks
                      everyday with ease!
                    </span>
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </div>
      <video
        src={props.videoSrc2}
        muted="true"
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        autoPlay="true"
        className="hero171-video1"
      ></video>
      <Link to="/type2diabetessuccess" className="hero171-navlink1 button">
        <span>
          {props.button ?? (
            <Fragment>
              <span className="hero171-text22">
                <span>read</span>
                <br></br>
              </span>
            </Fragment>
          )}
        </span>
      </Link>
      <div className="hero171-container3">
        <p>
          {props.content112 ?? (
            <Fragment>
              <p className="hero171-text17 thq-body-large">
                <span>FREEDOM FROM AGE</span>
                <br></br>
                <br></br>
                <span>
                  Here is the story of how after a brain surgery, and decades,
                  an 84 year old reversed his knee pain, years of weakness and
                  numbness in his legs in less than a year.
                </span>
              </p>
            </Fragment>
          )}
        </p>
      </div>
      <video
        src={props.videoSrc3}
        muted="true"
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        autoPlay="true"
        className="hero171-video2"
      ></video>
      <Link to="/vijaysuccess" className="hero171-navlink2 button">
        <span>
          {props.button ?? (
            <Fragment>
              <span className="hero171-text22">
                <span>read</span>
                <br></br>
              </span>
            </Fragment>
          )}
        </span>
      </Link>
      <div className="hero171-container4">
        <p>
          {props.content1111 ?? (
            <Fragment>
              <p className="hero171-text34 thq-body-large">
                <span className="hero171-text35">
                  This is what an individual who had been practicing different
                  forms of meditation, herbal medicine, and even chinese
                  techniques for decades but still had stress built up from work
                  had to say after a session -
                </span>
                <br className="hero171-text36"></br>
                <br className="hero171-text37"></br>
                <span className="hero171-text38">
                  &quot;After working a long shift, I did a session and felt all
                  the tiredness, stress, and emotions from work release. I felt
                  like I had just came into work even though it was 6pm!
                  Completely refreshed.Take sand and imagine how it feels
                  running through your hands-then take a silk cloth and
                  imaginehow it feels then. That&apos;s how this feels. I was
                  feeling sulky, now I&apos;m feeling silky. &quot; - R.G.
                </span>
                <br></br>
              </p>
            </Fragment>
          )}
        </p>
      </div>
    </div>
  )
}

Hero171.defaultProps = {
  heading1: undefined,
  content112: undefined,
  button: undefined,
  videoSrc2: '',
  content11: undefined,
  videoSrc3: '',
  content1111: undefined,
  rootClassName: '',
}

Hero171.propTypes = {
  heading1: PropTypes.element,
  content112: PropTypes.element,
  button: PropTypes.element,
  videoSrc2: PropTypes.string,
  content11: PropTypes.element,
  videoSrc3: PropTypes.string,
  content1111: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Hero171
