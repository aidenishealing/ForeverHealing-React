import React, { useState, Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './calembed.css'

const CALEMBED = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div
      className={`calembed-pricing23 thq-section-padding ${props.rootClassName} `}
    >
      <div className="calembed-max-width thq-section-max-width">
        <div className="calembed-section-title">
          <div className="calembed-content">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h1 className="calembed-text15 thq-heading-1">
                    <span className="calembed-text16">
                      So... you want to experience REAL change 
                    </span>
                    <br className="calembed-text17"></br>
                    <span className="calembed-text18">
                      but still feel skeptical?
                    </span>
                    <br></br>
                    <span className="calembed-text20">EXPERIENCE</span>
                    <br></br>
                    <span className="calembed-text22">THE RISK-FREE DEMO</span>
                    <br></br>
                    <span className="calembed-text24">
                      IN 40 MINUTES IF YOU DON&apos;T FEEL
                    </span>
                    <br className="calembed-text25"></br>
                    <span className="calembed-text26">- REDUCTION in PAIN</span>
                    <br className="calembed-text27"></br>
                    <span className="calembed-text28">
                      - CLEARHEADED without thoughts
                    </span>
                    <br className="calembed-text29"></br>
                    <span className="calembed-text30">
                      - NEWFOUND Calmness...
                    </span>
                    <br className="calembed-text31"></br>
                    <span className="calembed-text32">
                      You get your money-back. Seriously.
                    </span>
                    <br></br>
                  </h1>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="calembed-container1">
            <div className="calembed-container2">
              <Script
                html={`<!-- Cal inline embed code begins -->
<div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline"></div>
<script type="text/javascript">
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "risk-free", {origin:"https://cal.com"});

  Cal.ns["risk-free"]("inline", {
	elementOrSelector:"#my-cal-inline",
	calLink: "cheatcode/risk-free",
	layout: "month_view"
  });

  Cal.ns["risk-free"]("ui", {"styles":{"branding":{"brandColor":"#281617"}},"hideEventTypeDetails":false,"layout":"month_view"});
  </script>
  <!-- Cal inline embed code ends -->`}
              ></Script>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="button calembed-button">
        <span>
          {props.button ?? (
            <Fragment>
              <span className="calembed-text12">
                <span>View All Reviews</span>
                <br></br>
              </span>
            </Fragment>
          )}
        </span>
      </button>
    </div>
  )
}

CALEMBED.defaultProps = {
  rootClassName: '',
  button: undefined,
  heading1: undefined,
}

CALEMBED.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.element,
  heading1: PropTypes.element,
}

export default CALEMBED
