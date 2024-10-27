import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './senja1.css'

const Senja1 = (props) => {
  return (
    <div
      id="senja1"
      className={`senja1-testimonial13 thq-section-padding ${props.rootClassName} `}
    >
      <div className="senja1-max-width thq-section-max-width">
        <div className="senja1-container1">
          <div className="senja1-container2">
            <Script
              html={`<script src="https://widget.senja.io/widget/9bed0350-d77d-45d5-8dbc-9c7d9fe6f591/platform.js" type="text/javascript" async></script>
<div class="senja-embed" data-id="9bed0350-d77d-45d5-8dbc-9c7d9fe6f591" data-mode="shadow" data-lazyload="false" style="display: block;"></div>`}
            ></Script>
          </div>
        </div>
      </div>
    </div>
  )
}

Senja1.defaultProps = {
  rootClassName: '',
}

Senja1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Senja1
