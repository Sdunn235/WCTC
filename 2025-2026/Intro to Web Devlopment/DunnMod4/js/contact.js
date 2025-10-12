$(function() {
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        fname = $('input[name="fname"]').val();
        lname = $('input[name="lname"]').val();
        email = $('input[name="uemail"]').val();
        info = $('textarea[name="ainfo"]').val();
        now = new Date().toLocaleDateString();
        output =
            `Submitted: ${now}
             First Name: ${fname}
             Last Name: ${lname}
             Email: ${email}
             Information: ${info}
            `;
        alert(output);
        this.reset();
    })
});