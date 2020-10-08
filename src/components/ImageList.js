import React from "react";
import "./ImageList.css";
class ImageList extends React.Component {
  render(props) {
    console.log(this.props.images);
    return (
      <div className="image-list ui segment">
        {this.props.images.map((i) => {
          console.log(i.urls.small);
          return (
            <div key={i.id}>
              <img src={i.urls.small} alt={i.alt_description} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ImageList;
