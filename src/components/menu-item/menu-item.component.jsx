import React from "react";

import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW!</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
/* withRouter is HOC which returns MenuItem with access to 
location, match and history props that we need access to. 
We can avoid prop drilling of history prop with this. */
