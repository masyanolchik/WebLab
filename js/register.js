function checkSignUp(el) {
  const em = el.em.value;
  const pas = el.pas.value;
  const log = el.log.value;
  const pas1 = el.pas1.value;
  let error = "";
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(em) == false) error = "Enter a vali email";
  else if (log.length <= 4) error = "Enter a valid login";
  else if (log.length > 20) error = "Enter a valid login";
  else if (pas.length <= 4) error = "Enter a valid password";
  else if (pas != pas1) error = "Passwords should match";

  if (error != "") {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").style.visibility = "visible";
    document.getElementById("error").innerHTML = error;
  } else {
    window.location = "./main.html";
  }

  return false;
}
