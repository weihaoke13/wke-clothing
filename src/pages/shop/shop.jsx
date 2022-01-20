import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {connect} from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
// import PreviewCollection from '../../components/preview-collection/preview-collection'
import CollectionPage from '../collection/collection';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{

  // state={
  //   loading:true
  // };

  // unsubscribeFromSnapshot = null;

  componentDidMount(){

    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
    
    // const { updateCollections } = this.props;

    // const collectionRef = firestore.collection('collections');

    

    // collectionRef.get().then((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({loading:false});
    // });

  }

  render(){
    const {match, isCollectionFetching} = this.props;
    // const {loading} = this.state;

    return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
        <Route path={`${match.path}/:collectionId`} 
            render={ props => (
              <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />
            )}
        />
    </div>

    )
   
  
  }

} ;

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps = dispatch => ({
  // updateCollections: (collectionsMap) =>
  // dispatch(updateCollections(collectionsMap)),

  fetchCollectionsStartAsync:() => dispatch(fetchCollectionsStartAsync())


})


export default connect(null, mapDispatchToProps)(ShopPage);
