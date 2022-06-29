import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";
import "./css/QnAbox.css";

function QnAbox() {
  const user = useSelector(selectUser);
  return (
    <div className="qnaBox">
      <div className="qnaBox__info">
        <Avatar src={user?.photo} />
      </div>
      <div className="qnaBox__qna">
        <h5>Get your queries resolved.....</h5>
      </div>
    </div>
  );
}

export default QnAbox;