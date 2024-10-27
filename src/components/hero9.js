import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div
      className={`hero9-header30 thq-section-padding ${props.rootClassName} `}
    >
      <div className="hero9-container">
        <div className="hero9-content">
          <h1>
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero9-text13 thq-heading-1">
                  <span>STOP MANAGING, START REVERSING.</span>
                  <br></br>
                </h1>
              </Fragment>
            )}
          </h1>
          <p className="hero9-text11">
            {props.content1 ?? (
              <Fragment>
                <p className="hero9-text19 thq-body-large"></p>
              </Fragment>
            )}
          </p>
          <div className="hero9-actions">
            <a
              href="#storycharacter"
              className="hero9-button thq-button-filled"
            >
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero9-text16 thq-body-small">
                      <span>I&apos;M READY</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </a>
          </div>
        </div>
        <img
          alt={props.imageAlt4}
          src={props.imageSrc4}
          className="hero9-image"
        />
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  heading1: undefined,
  rootClassName: '',
  image1Src: 'b778519f-31ee-4e32-a301-2849e9aa1c24',
  action1: undefined,
  imageSrc4: '/pancreas%20art-500w.webp',
  imageSrc: 'b778519f-31ee-4e32-a301-2849e9aa1c24',
  content1: undefined,
  imageAlt4: 'image',
}

Hero9.propTypes = {
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.element,
  imageSrc4: PropTypes.string,
  imageSrc: PropTypes.string,
  content1: PropTypes.element,
  imageAlt4: PropTypes.string,
}

export default Hero9
