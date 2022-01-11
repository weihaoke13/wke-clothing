import React from 'react';
import {connect} from 'react-redux';

import collectionItem from '../../components/collection-item/collection-item';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.scss';

const CollectionPage = ({collection}) => (
    <div className='category'>
        <h2>
            Collection Page
        </h2>
    </div>
);

const mapStateToProps = (state, ownPros) => ({
    collection: selectCollection(ownPros.match.params.collectionId)(state)
})


export default (mapStateToProps)(CollectionPage);