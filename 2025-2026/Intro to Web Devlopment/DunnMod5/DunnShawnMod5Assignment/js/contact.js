$(function() {
    $('#contact-form').submit(function(e) {
        e.preventDefault();

        fname = $('input[name="fname"]').val();
        lname = $('input[name="lname"]').val();
        cname = $('input[name="cname"]').val();
        ctype = $('input[name="ctype"]').val(); 
        email = $('input[name="uemail"]').val();
        info = $('textarea[name="ainfo"]').val();
        now = new Date().toLocaleDateString();

        output = `
            Submitted: ${now}
            First Name: ${fname}
            Last Name: ${lname}
            Creature Name: ${cname}
            Creature Type: ${ctype}
            Email: ${email}
            Information: ${info}
        `;

        alert(output);
        this.reset();
    });
});
