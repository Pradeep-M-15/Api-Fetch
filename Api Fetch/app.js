const submit_button = document.querySelector(".button");
submit_button.onclick = () => {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phone_no = document.getElementById("phone_no").value;

    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Phone Number', phone_no);

    if(fname == "" && lname == "" && email == "" && phone_no == ""){
        alert("Please fill all the necessary details");
    }
    else
    {
        alert("Good Job!.You have sucessfully registered");
    }
}

// login function

const login = document.querySelector('.login');
login.onclick = () => {
    // catch the value which is type user login page
    const emailAddress = document.getElementById("emailAddress").value;
    const phoneNo = document.getElementById("phoneno").value;


    //value in localstorage which store user in registration field
    const Email = localStorage.getItem("Email");
    const PhoneNumber = localStorage.getItem("PhoneNumber");

    if( emailAddress == "" && phoneNo == ""){
        alert("Oops! Please fill all the necessary details");
    }
    else{
        window.location.assign("homepage.html");
        alert("Sucessfully Done!");
    }
}

//logout function

function logout(){
    localStorage.clear();
    location.href='./login.html'
}
