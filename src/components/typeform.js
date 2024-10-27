import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './typeform.css'

const Typeform = (props) => {
  return (
    <div
      id="typeform"
      className={`typeform-container1 ${props.rootClassName} `}
    >
      <div className="typeform-container2">
        <div className="typeform-container3">
          <div className="typeform-container4">
            <Script
              html={`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page title</title>
    <style>
      body, html { margin: 0; padding: 0; height: 100%; overflow: hidden}
    </style>
  </head>
  <body>
    <iframe
      src="https://formless.ai/c/QXU30lOcD12t"
      class="formless-embed"
      width="100%"
      height="100%"
      allow="microphone"
      style="border: 0; display: block"
    ></iframe>
    <script src="https://embed.formless.ai/embed.js" async></script>
  </body>
</html>

`}
            ></Script>
          </div>
        </div>
      </div>
    </div>
  )
}

Typeform.defaultProps = {
  rootClassName: '',
}

Typeform.propTypes = {
  rootClassName: PropTypes.string,
}

export default Typeform
