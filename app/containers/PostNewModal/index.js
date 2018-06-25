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
import Modal from 'react-modal';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// Selectors
import { selectStatus } from './selectors';
import reducer from './reducer';
import saga from './saga';
import validate from './validate';
// Actions
import { makeSelectLoading } from 'containers/App/selectors';
import { createPost, hideCreatePostModal } from './actions';

export class PostNewModal extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  renderField(field) {
    const {
      meta: { touched, error }
    } = field; // Destructuring
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label htmlFor={field.input.name}>
          {field.label}:
        </label>
        <input
          id={field.input.name}
          className="form-control"
          type="text"
          {...field.input} // ---> onChange={field.input.onChange}, onChange={field.input.onBlur}, etc
        />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div>
        <Modal
          isOpen={this.props.isOpened}
          onRequestClose={this.props.onCloseModal}
          className="modal-dialog"
          id="postNewModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="postNewModalLabel"
          aria-hidden="true"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="postNewModalLabel"
              >
                Create a new post.
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={this.props.onCloseModal}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                id="createNewPostForm"
                role="form"
                onSubmit={handleSubmit(this.props.onSubmit.bind(this))}
              >
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
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                disabled={submitting}
                form="createNewPostForm"
                className="btn btn-primary"
              >
                Create
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.props.onCloseModal}
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                disabled={pristine || submitting}
                onClick={reset}
              >
                Clear values
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

PostNewModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.any,
  createPost: PropTypes.any,
  onCloseModal: PropTypes.any,
  isOpened: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isOpened: selectStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSubmit: values => {
      const postData = {
        title: values.get('title'),
        categories: values.get('categories'),
        content: values.get('content')
      };
      dispatch(createPost(postData));
    },
    loading: makeSelectLoading(),
    onCloseModal: () => {
      dispatch(hideCreatePostModal());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

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
  withReduxForm
)(PostNewModal);
