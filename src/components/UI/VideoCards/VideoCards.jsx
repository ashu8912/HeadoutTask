import React from 'react';
import faker from "faker";
export default function VideoCards(props) {
  return (
    <div>
    <div>
    <img src={props.thumbnail}/>
    </div>
    <div className="flex-container">
    <img src={faker.image.avatar()}/>
    <div>
    <h5>lorem ipsum dolor</h5>
    <h6>fake name</h6>
    <div>
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
