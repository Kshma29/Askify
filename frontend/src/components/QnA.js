import React from "react";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";

import "./css/QnA.css";

function QnA() {
  return (
    <div className="qna">
      <Header />
      <div className="qna__contents">
        <div className="qna__content">
          <Sidebar />
          <Feed />
       
        </div>
      </div>
    </div>
  );
}

export default QnA;