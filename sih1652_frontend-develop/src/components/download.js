import React from "react";
import './download.css';  // External CSS file
import 'font-awesome/css/font-awesome.min.css';  // Import Font Awesome for icons

const DownloadButton = () => {
  return (
    <div>

      <button className="bt">
        <i className="fa fa-download"></i> Download
      </button>
      </div>
  );
};

export default DownloadButton;
