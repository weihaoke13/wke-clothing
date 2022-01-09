import React from 'react';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
// import PreviewCollection from '../../components/preview-collection/preview-collection'


const ShopPage = ({collections})=> (
   
        <div className='shop-page' >
            <CollectionsOverview></CollectionsOverview>
        </div>
);


export default ShopPage;