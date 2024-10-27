import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './not-found2.css'

const NotFound2 = (props) => {
  return (
    <div className="not-found2-container1 thq-section-padding">
      <div className="not-found2-container2">
        <h1 className="not-found2-text1 thq-heading-1">404</h1>
        <h2>
          {props.heading2 ?? (
            <Fragment>
              <h2 className="not-found2-text3 thq-heading-2">
                Oops! Page Not Found
              </h2>
            </Fragment>
          )}
        </h2>
        <button className="not-found2-button thq-button-outline thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="not-found2-text4 thq-body-small">
                  Return to Homepage
                </span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="not-found2-image"
      />
      <div className="not-found2-container3"></div>
    </div>
  )
}

NotFound2.defaultProps = {
  heading2: undefined,
  action1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1634069913399-5b3bc8e88d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODg3OTYxNXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Illustration of a person looking confused',
}

NotFound2.propTypes = {
  heading2: PropTypes.element,
  action1: PropTypes.element,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default NotFound2
