```javascript
// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu after clicking a link

const links =
    document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ==========================================
// ABOUT BUTTON
// ==========================================

function showAboutMessage() {

    alert(
        "PSG College of Technology is a student project demonstration website. " +
        "This page is created using HTML, CSS and JavaScript."
    );

}


// ==========================================
// DEPARTMENT BUTTON
// ==========================================

function showDepartment(department) {

    alert(
        "You selected: " +
        department +
        "\n\nMore department information can be added here."
    );

}


// ==========================================
// CONTACT BUTTON
// ==========================================

function showContactMessage() {

    alert(
        "Thank you for your interest!\n\n" +
        "Please contact the college through its official website " +
        "for current contact and admission information."
    );

}


// ==========================================
// ADMISSION FORM
// ==========================================

const admissionForm =
    document.getElementById("admissionForm");


admissionForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("studentName").value;

        const email =
            document.getElementById("studentEmail").value;

        const phone =
            document.getElementById("phone").value;

        const programme =
            document.getElementById("programme").value;


        if (phone.length < 10) {

            alert(
                "Please enter a valid phone number."
            );

            return;
        }


        alert(
            "Admission Enquiry Submitted!\n\n" +

            "Student Name: " +
            name +

            "\nEmail: " +
            email +

            "\nPhone: " +
            phone +

            "\nProgramme: " +
            programme
        );


        admissionForm.reset();

    }
);
```
