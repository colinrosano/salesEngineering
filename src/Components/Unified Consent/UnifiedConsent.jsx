import React from "react";
import "./UnifiedConsent.css";

const UnifiedConsent = () => {
  return (
    <div className="uc-div">
      <h1>Unified Consent</h1>
      <iframe
        className="uc-iframe"
        src="https://unifiedconsent.osano.com/638/"
        width={"100%"}
        height={"100%"}
        scrolling={"no"}
        frameBorder={"no"}
      />
    </div>
  );
};

export default UnifiedConsent;
