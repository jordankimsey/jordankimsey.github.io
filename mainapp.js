//selectors
const form = document.getElementById('contact-form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
//-------------------------
//event listener
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     validateForm();

// });
//-------------------------------------
//check inputs function
function validateForm() {
    //get values from inputs
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    //first name
    if (firstNameValue === '') {
        //show error
        //add error class
        setErrorFor(firstName, 'First name cannot be blank');
    } else {
        //add success class
        setSuccessFor(firstName);
    }


    //last name
    if (lastNameValue === '') {
        //show error
        //add error class
        setErrorFor(lastName, 'Last name cannot be blank');
    } else {
        //add success class
        setSuccessFor(lastName);
    }

    //phone
    if (phoneValue === '') {
        //show error
        //add error class
        setErrorFor(phone, 'Phone number cannot be blank');
    } else {
        //add success class
        setSuccessFor(phone);
    }

    //email
    if (emailValue === '') {
        //show error
        //add error class
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        //not valid
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    //message 
    if (messageValue === '') {
        //show error
        //add error class
        bigErrorFor(message, 'Message cannot be blank');
    } else {
        //add success class
        bigSuccessFor(message);
    }

    //sending
    // document.querySelector('.status').innerHTML = "Sending...";

    //sending email without reloading AJAX
    formData = {
        'firstName': $('input[name=firstName]').val(),
        'lastName': $('input[name=lastName]').val(),
        'phone': $(`input[name=phone]`).val(),
        'email': $('input[name=email]').val(),
        'subject': $('select[name=subject]').val(),
        'message': $('textarea[name=message]').val()
    };


    $.ajax({
        url: "mail.php",
        type: "POST",
        data: formData,
        success: function (data, textStatus, jqXHR)
        {
            $('#status').text(data.message);
            if (data.code) //If mail was sent successfully, reset the form.
                $('#contact-form').closest('form').find("input[type=text], textarea").val("");
            $('#status').text('Successful!').addClass('sent');

        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#status').text('Successful!').addClass('sent');
            $('#contact-form').closest('form').find("input[type=text], textarea, input[type = email], input[type = number]").val("");
            $('#status').text('Successful!').addClass('sent');
        }
    });
   
    
}



//-----------------
//functions

//set error message col-md-6
function setErrorFor(input, message) {

    const formAlgin = input.parentElement.parentElement;
    const small = formAlgin.querySelector('small');

    //error message inside small
    small.innerText = message;
    //add error class
    // formAlgin.className = 'form-algin col-md-6 error';
    formAlgin.className = 'form-algin col-md-6 error';
}


//set error message col-md-12
function bigErrorFor(input, message) {

    const formAlgin = input.parentElement.parentElement;
    const small = formAlgin.querySelector('small');

    //error message inside small
    small.innerText = message;
    //add error class
    // formAlgin.className = 'form-algin col-md-12 error';
    formAlgin.className = 'form-algin col-md-12 error';
}

//set success col-md-6
function setSuccessFor(input) {
    const formAlgin = input.parentElement.parentElement;
    //success
    // formAlgin.className = 'form-algin col-md-6 success';
    formAlgin.className = 'form-algin col-md-6 success';

}

//set success col-md-12
function bigSuccessFor(input) {
    const formAlgin = input.parentElement.parentElement;
    //success
    // formAlgin.className = 'form-algin col-md-12 success';
    formAlgin.className = 'form-algin col-md-12 success';
}

//check if email valid
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

















//------------------------------------------
//orginal app
// //add error class
// // function errorClass() {
// //     document.querySelector('.status').className = "error";
// // }




// // //form validation
// function validateForm() {
//     //     //first name check

//     var firstName = document.getElementById('firstName').value;
//     if (firstName == "") {
//         document.querySelector('.status').innerHTML = "First name cannot be empty";
//         let destroy = document.querySelector('.status').className = "error";
//         return false;
//         destroy.remove("error");
//     }
//     //     //last name check
//     var lastName = document.getElementById('lastName').value;
//     if (lastName == "") {
//         document.querySelector('.status').innerHTML = "Last name cannot be empty";
//         // document.querySelector('.status').className = "error";
//         return false;
//     }

//     //     //email check
//     var email = document.getElementById('email').value;
//     if (email == "") {
//         document.querySelector('.status').innerHTML = "Email cannot be empty";

//         return false;
//     } else {
//         var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if (!re.test(email)) {
//             document.querySelector('.status').innerHTML = "Email format invalid";

//             return false;
//         }
//     }
//     //     //subject check
//     var subject = document.getElementById('subject').value;
//     if (subject == "") {
//         document.querySelector('.status').innerHTML = "Subject cannot be empty";

//         return false;
//     }
//     //     //message check
//     var message = document.getElementById('message').value;
//     if (message == "") {
//         document.querySelector('.status').innerHTML = "Message cannot be empty";
//         return false;
//     }
//     //sending
//     document.querySelector('.status').innerHTML = "Sending...";

//     //sending email without reloading AJAX
//     formData = {
//         'firstName': $('input[name=firstName]').val(),
//         'lastName': $('input[name=lastName]').val(),
//         'phone': $(`input[name=phone]`).val(),
//         'email': $('input[name=email]').val(),
//         'subject': $('select[name=subject]').val(),
//         'message': $('textarea[name=message]').val()
//     };


//     $.ajax({
//         url: "mail.php",
//         type: "POST",
//         data: formData,
//         success: function (data, textStatus, jqXHR) {

//             $('#status').text(data.message);
//             if (data.code) //If mail was sent successfully, reset the form.
//                 $('#contact-form').closest('form').find("input[type=text], textarea").val("");
//         },
//         error: function (jqXHR, textStatus, errorThrown) {
//             $('#status').text('Successful!').addClass('sent');
//             $('#contact-form').closest('form').find("input[type=text], textarea, input[type = number]").val("");
//         }

//     });
// }
