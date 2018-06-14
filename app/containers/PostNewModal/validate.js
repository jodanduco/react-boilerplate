const validate = (values) => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {};
  if (!values.get('title')) {
    errors.title = 'Required';
  } else if (values.get('title').length <= 3) {
    errors.title = 'Title is too short';
  }
  if (!values.get('categories')) {
    errors.categories = 'Required';
  }
  if (!values.get('content')) {
    errors.categories = 'Required';
  }

  return errors;
};

export default validate;
