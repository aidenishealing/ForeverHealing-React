import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer
      className={`footer-footer7 thq-section-padding ${props.rootClassName} `}
    >
      <span>
        {props.text ?? (
          <Fragment>
            <span className="footer-text17">INSERT EMAIL LIST HERE</span>
          </Fragment>
        )}
      </span>
      <div className="footer-max-width thq-section-max-width">
        <div className="footer-credits">
          <div className="footer-links">
            <Link to="/" className="footer-navlink1">
              {props.link1 ?? (
                <Fragment>
                  <span className="footer-text20 thq-button-filled">START</span>
                </Fragment>
              )}
            </Link>
            <Link to="/success-stories" className="footer-navlink2">
              {props.link2 ?? (
                <Fragment>
                  <span className="footer-text22 thq-button-filled">
                    SUCCESS STORIES
                  </span>
                </Fragment>
              )}
            </Link>
            <a
              href="https://cal.com/cheatcode"
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer-text18 thq-button-filled">
                    HEAL NOW
                  </span>
                </Fragment>
              )}
            </a>
          </div>
          <div className="footer-row">
            <div className="footer-footer-links thq-body-small">
              <span>
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer-text21 thq-body-small">
                      Privacy Policy
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer-text23 thq-body-small">
                      Terms &amp; Conditions
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer-text19 thq-body-small">
                      Cookies Policy
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="footer-container">
            <span className="footer-text14 thq-body-small">
              <span>© 2024 AidenInnovationsLLC</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text: undefined,
  link3: undefined,
  cookiesLink: undefined,
  rootClassName: '',
  link1: undefined,
  privacyLink: undefined,
  link2: undefined,
  termsLink: undefined,
}

Footer.propTypes = {
  text: PropTypes.element,
  link3: PropTypes.element,
  cookiesLink: PropTypes.element,
  rootClassName: PropTypes.string,
  link1: PropTypes.element,
  privacyLink: PropTypes.element,
  link2: PropTypes.element,
  termsLink: PropTypes.element,
}

export default Footer
