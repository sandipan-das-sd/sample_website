function func() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var a = true;
  
    if (email.length > 20) {
      alert("Your email is too long");
      a = false;
      document.getElementById("email").focus();
      return a;
    } else if (email.search(/@/) === -1) {
      alert("Your email doesn't contain @");
      a = false;
      document.getElementById("email").focus();
      return a;
    }
  
    if (pass === "") {
      alert("Please enter some password");
      a = false;
      document.getElementById("password").focus();
      return a;
    }
    if (pass.length < 8) {
      alert("Please enter at least 8 characters");
      a = false;
      document.getElementById("password").focus();
      return a;
    }
    if (pass.search(/[0-9]/) === -1) {
      alert("Please enter at least 1 numeric value");
      a = false;
      document.getElementById("password").focus();
      return a;
    }
    if (pass.search(/[a-z]/) === -1) {
      alert("Please enter at least 1 lowercase character");
      a = false;
      document.getElementById("password").focus();
      return a;
    }
    if (pass.search(/[A-Z]/) === -1) {
      alert("Please enter at least 1 uppercase character");
      a = false;
      document.getElementById("password").focus();
      return a;
    }
    if (pass.search(/[!@#$%^&*()+=<>\?]/) === -1) {
      alert("Please enter at least 1 special character");
      a = false;
      document.getElementById("password").focus();
      return a;
    }
 
    if (a) {
      window.open("registration-form.html");
    }
  }
  