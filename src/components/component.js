import React, { Fragment } from 'react'

import NotFound2 from './not-found2'
import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <NotFound2
        action1={
          <Fragment>
            <span className="component-text1 thq-body-small">
              Return to Homepage
            </span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="component-text2 thq-heading-2">
              Oops! Page Not Found
            </span>
          </Fragment>
        }
      ></NotFound2>
    </div>
  )
}

export default AppComponent
