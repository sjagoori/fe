/**
 * Function compares the values of two password input fields.
 * In the case both passwords match, the function returns true, if not a false.
 * @function
 * @return {bool} - true if matches, else false.
 */
function validatePasswords() {
  const x = document.forms['registerForm']['password'];
  const y = document.forms['registerForm']['rpassword'];
  const z = document.getElementById('errorMessage');

  // the error message is created
  const errorMessage = document.createElement('span');
  errorMessage.setAttribute('id', 'errorMessage');
  errorMessage.textContent = 'Password does not match.';
  errorMessage.style.color = '#FF0000';

  if (x.value != y.value) {
    // if the error message does not already exist, it will be added after the repeat-password field in the DOM.
    if (z == null) {
      y.after(errorMessage);
    }
    // passwords do not match
    return false;
  }
}
