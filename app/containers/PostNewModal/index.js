/**
 *
 * PostNewModal
 *
 */

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPostNewModal from './selectors';
import reducer from './reducer';
import saga from './saga';
import validate from './validate';
// Actions
import { createPost } from './actions';

export class PostNewModal extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderField(field) {
    const { meta: { touched, error } } = field; // Destructuring
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div
        className={className}>
        <label>{field.label}:</label>
        <input
          className="form-control"
          type="text"
          {...field.input} // ---> onChange={field.input.onChange}, onChange={field.input.onBlur}, etc
        />
        <div
          className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div
        className="modal fade"
        id="postNewModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div
          className="modal-dialog"
          role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalLabel">Create a new post.</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={reset}
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                id="createNewPostForm"
                onSubmit={handleSubmit(this.props.onSubmit.bind(this))}>
                <Field
                  label="Title for post"
                  name="title"
                  type="text"
                  component={this.renderField}
                />
                <Field
                  label="Categories"
                  name="categories"
                  type="text"
                  component={this.renderField}
                />
                <Field
                  label="Post Content"
                  name="content"
                  type="text"
                  component={this.renderField}
                />
              <button
                type="submit"
                disabled={submitting}
                form="createNewPostForm"
                className="btn btn-primary">
                Create
              </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={reset}
                data-dismiss="modal">Close
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                disabled={pristine || submitting}
                onClick={reset}>Clear values
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostNewModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.any,
  createPost: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  postnewmodal: makeSelectPostNewModal(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSubmit: (values) => {
      console.log('onSubmit');
      const postData = {
        title: values.get('title'),
        categories: values.get('categories'),
        content: values.get('content'),
      };
      dispatch(createPost(postData));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'postNewModal', reducer });
const withSaga = injectSaga({ key: 'postNewModal', saga });
const withReduxForm = reduxForm({
  form: 'PostsNewForm',
  validate,
});

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withReduxForm,
)(PostNewModal);
