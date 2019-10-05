import React from "react";

import collectionItem from '../collection-item/collection-item.componet';

import "./collection-preview.styles.scss";
import CollectionItems from "../collection-item/collection-item.componet";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({id, ...ohterItemProps}) => (
          <CollectionItems key={id} {...ohterItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;