import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

import PreviewCollection from '../preview-collection/preview-collection';
import './collections-overview.scss';


const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>

        {collections.map(({id, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
        }

    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)