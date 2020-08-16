function validate() {
    console.log("start");
    let pass = document.querySelector("#pid").value;
    let repass = document.querySelector("#repid").value;

    if (pass == repass && pass != "" && repass !== "") {
        alert("You are login successful")
    }
    else {
        alert("Invalid")
    }

}