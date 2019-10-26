import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";


import './coolection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
  
    <div className='collection-overview'>    
    {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
);

const mapStateToProbs = createStructuredSelector({
    collections: selectCollectionForPreview
  });
  
  export default connect(mapStateToProbs)(CollectionOverview);
  