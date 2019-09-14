import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading..</div>;
  }

  return (
    <div className="ui segment">
      <h4 className="ui header">{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetails;