function validate() {
    // username validation
    var uname = document.forms["f1"]["username"].value;
    if (uname.length <= 0) {
    alert("Please Enter UserName");
    document.forms["f1"]["username"].focus();
    return false;
    }
    //father name
    var fname = document.forms["f1"]["fathername"].value;
    if (fname.length <= 0) {
    alert("Please Enter fathername");
    document.forms["f1"]["fathername"].focus();
    return false;
    }
    //mothername
    var mname = document.forms["f1"]["mothername"].value;
    if (mname.length <= 0) {
    alert("Please Enter mothername");
    document.forms["f1"]["mothername"].focus();
    return false;
    }
    // email validation
    var email = document.forms["f1"]["email"].value;
    if (email.length <= 0) {
    alert("Please Enter email");
    document.forms["f1"]["email"].focus();
    return false;
    } else {
    let eflag = false;
    for (i = 0; i < email.length; i++) {
    if (email.charAt(i) == "@") {
    eflag = true;
    }
    }
    if (!(eflag)) {
    alert("Please enter a valid Email ID");
    document.forms["f1"]["email"].focus();
    return false;
    }
    }
    // phone number validation
    var phno = document.forms["f1"]["phno"].value;
    if (phno.length <= 0) {
    alert("Please Enter Phone Number");
    document.forms["f1"]["phno"].focus();
    return false;
    }
    if (isNaN(phno)) {
    alert("Please Enter Valid Phone Number");
    document.forms["f1"]["phno"].focus();
    return false;
    }
    if (phno.length != 10) {
    alert("Please Enter Valid Phone Number");
    document.forms["f1"]["phno"].focus();
    return false;
    }
    // roll number validation
    var rollno = document.forms["f1"]["rollno"].value;
    if (rollno.length <= 0) {
    alert("Please Enter Roll Number");
    document.forms["f1"]["rollno"].focus();
    return false;
    }
    if (isNaN(rollno)) {
    alert("Please Enter a Valid Roll Number");
    document.forms["f1"]["rollno"].focus();
    return false;
    }
    // department validation
    var dept = document.forms["f1"]["department"].value;
    if (dept.length <= 0) {
    alert("Please Enter Department");
    document.forms["f1"]["department"].focus();
    return false;
    }
    // gender validation
    let flag = false;
    for (i = 0; i < document.forms["f1"]["gen"].length; i++)
    if (document.forms["f1"]["gen"][i].checked)
    flag = true;
    if (!(flag)) {
    alert("Please choose a Gender");
    return false;
    }
    // Language validation
    flag = false;
    for (i = 0; i < document.forms["f1"]["lang"].length; i++)
    if (document.forms["f1"]["lang"][i].checked)
    flag = true;
    if (!(flag)) {
    alert("Please select at least one of the Language options.");
    return false;
    }
    // address validation
    var addr = document.forms["f1"]["address"].value;
    if (addr.length <= 0) {
    alert("Please Enter address");
    document.forms["f1"]["address"].focus();
    return false;
    }
    // to display Success message
    alert("Registration Successful");
    }