import { Add } from "@material-ui/icons";
import React from "react";
import "./css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption" style={{ border: '2px solid black'}}>
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg"
          alt=""
        />
        <p style={{color: 'red'}}>History</p>
      </div>

      <div className="sidebarOption"  style={{ border: '2px solid black'}}>
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
          alt=""
        />

        <p style={{color: 'blue'}}>Business</p>
      </div>
      <div className="sidebarOption"  style={{ border: '2px solid black'}}>
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg"
          alt=""
        />
        <p style={{color: 'Dodgerblue'}}>Psychology</p>
      </div>

      <div className="sidebarOption"  style={{ border: '2px solid black'}}>
        <img
          src="https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.png?format=png&width=1200"
          alt=""
        />
        <p style={{color: 'green'}}>Coding</p>
      </div>

      <div className="sidebarOption"  style={{ border: '2px solid black'}}>
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
          alt=""
        />
        <p style={{color: 'Tomato'}}>Music</p>
      </div>

      <div className="sidebarOption"  style={{ border: '2px solid black'}}>
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg"
          alt=""
        />
        <p style={{color: 'orange'}}>Science</p>
      </div>

      <div className="sidebarOption"  style={{ border: '2px solid black'}}>
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-1140-100-24q3tiv4WhPssc5TGwf0mvCM5aiqGVXW.jpeg"
          alt=""
        />
        <p style={{color: 'Violet'}}>Health</p>
      </div>

      <div className="sidebarOption"  style={{ border: '2px solid black'}}>
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg"
          alt=""
        />
        <p style={{color: 'SlateBlue'}}>Movies</p>
      </div>

      <div className="sidebarOption"  style={{ border: '2px solid black'}}>
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg"
          alt=""
        />
        <p style={{color: 'brown'}}>Technology</p>
      </div>

      <div className="sidebarOption"  style={{ border: '2px solid black'}}>
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg"
          alt=""
        />
        <p style={{color: 'pink'}}>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">and more...</p>
      </div>
    </div>
  );
}

export default SidebarOptions;