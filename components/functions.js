function checkEmail(email) {
  // function to check whether an email is legit
  // TODO: eventually use api to check

  const spamWords = ["test", "spam", "a"];
  const specialChars = ["!", "*", "&", "^", "$", "#"];

  if (!email.toLowerCase().includes("@")) {
    return false;
  }

  let tempEmail = email.toLowerCase().trim();
  let before = tempEmail.substr(0, tempEmail.indexOf("@"));

  let spam = false;
  spamWords.map((word) => {
    if (before === word) {
      spam = true;
    }
  });
  specialChars.map((char) => {
    if (tempEmail.includes(char)) {
      spam = true;
    }
  });

  if (tempEmail.split("@").length - 1 > 1) {
    spam = true;
  }
  if (before.includes(" ") || spam || before.length <= 1) {
    return false;
  }
  return true;
}

export function pushEmailToSheets(email) {
  var formData = new FormData();
  formData.append("email", email.toLowerCase().trim());

  // TODO: hide api request urls in _redirects (netlify)
  fetch(
    "https://script.google.com/macros/s/AKfycbyuqpqfYPmsGCw0sIOD2hIJr0lL8b9XJzDTtj6wvqAd-jKuMY_69-JINwswCtbSpaJ-/exec",
    { method: "POST", body: formData }
  );
}

export function sendAWSEmail(email, submit, first_name) {
  var obj = { email: email.toLowerCase().trim() };
  if (submit) {
    obj["type"] = "submitted";
  }
  if (first_name) {
    obj['first_name'] = first_name;
  }
  let objEmail = JSON.stringify(obj);

  fetch(
    `https://2jdqle79a7.execute-api.us-east-1.amazonaws.com/default/ProductStudioSignupEmail`,
    { method: "POST", body: objEmail }
  );
}

export function pushToSheets(email) {
  console.log(email)
  if (checkEmail(email)) {
    pushEmailToSheets(email);
    return true;
  } else {
    return false;
  }

}

export function sendEmail(email) {
  if (checkEmail(email)) {
    pushEmailToSheets(email);
    sendAWSEmail(email, false, false);
    return true;
  } else {
    return false;
  }
}
