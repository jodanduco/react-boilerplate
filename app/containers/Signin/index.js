/**
 *
 * Signin
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form/immutable';
import validate from './validate';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSignin from './selectors';
import reducer from './reducer';
import saga from './saga';
import  { signinUser } from './actions';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export class Signin extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleFormSubmit({_root: { entries} }) {
    const [ [, email], [, password] ] = entries;
    console.log(email, password);
    this.props.onSigninUser({email, password});
    
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div>
        <Helmet>
          <title>Signin</title>
          <meta name="description" content="Description of Signin" />
        </Helmet>
        <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
          <fieldset>
            <Field 
              name="email" 
              type="text" 
              component={renderField} 
              label="Email" />
          </fieldset>
          <fieldset>
            <Field 
              name="password" 
              type="password" 
              component={renderField} 
              label="Password" />
          </fieldset>
          <div>
            <button 
              type="submit" 
              disabled={submitting}> 
              Sign in
              </button>
            <button 
              type="button" 
              disabled={pristine || submitting} 
              onClick={reset}> 
              Clear Values
              </button>
          </div>
        </form>
      </div>
    );
  }
}

Signin.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signin: makeSelectSignin(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSigninUser: ({ email, password }) => dispatch(signinUser({ email, password })),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signin', reducer });
const withSaga = injectSaga({ key: 'signin', saga });
const withReduxForm = reduxForm({
  form: 'signin',
  validate,
});

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withReduxForm,
)(Signin);
