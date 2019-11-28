import React from 'react';
import faker from "faker";
export default function VideoCards(props) {
  
  return (
    <div className="inline-block m-2">
    <div>
    <iframe src={props.video} width="300" height="215"></iframe>
    </div>
    <div className="flex-container">
    <div className="avatar">
    <img src={faker.image.avatar()} />
    </div>
    <div>
    <h5>lorem ipsum dolor</h5>
    <h6>fake name</h6>
    <div className="flex-container">
    <div>
    410kviews
    </div>
    <div>. 1 week ago</div>
    </div>
    </div>
    </div>
    </div>
  );
}
