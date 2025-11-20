function validate() {
    console.log("Name and age is: ");
    var name = document.forms["form1"]["studName"].value;
    var age = parseInt(document.forms["form1"]["studAge"].value);
    console.log(name, age);

    if (name.trim() == "") {
        document.getElementsByClassName("errormessage")[0].style.visibility = 'visible';
        return false;
    } else {
        document.getElementsByClassName("errormessage")[0].style.visibility = 'hidden';
    }


    if (isNaN(age) || age < 10) {
        document.getElementsByClassName("errormessage")[1].style.visibility = 'visible';
        return false;
    } else {
        document.getElementsByClassName("errormessage")[1].style.visibility = 'hidden';
        return true;
    }
}
