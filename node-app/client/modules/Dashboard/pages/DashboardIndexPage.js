import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
/* import PostList from '../../components/PostList';
import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';
*/

// Import Actions
/* import { addPostRequest, fetchPosts, deletePostRequest } from '../../PostActions';
import { toggleAddPost } from '../../../App/AppActions';
*/

// Import Selectors
/* import { getShowAddPost } from '../../../App/AppReducer';
import { getPosts } from '../../PostReducer';
*/

class DashboardIndexPage extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>To Do: Implement dashboard here.</h1>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
/* PostListPage.need = [() => { return fetchPosts(); }];
*/

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
  };
}

DashboardIndexPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

DashboardIndexPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(DashboardIndexPage);
