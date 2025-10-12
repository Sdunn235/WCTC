$(function() {

    $('#name-form').submit(function(e) {
        e.preventDefault();
        var firstName = $('#name-form>input[name="fname"]').val();
        var lastName = $('#name-form>input[name="lname"]').val();
        alert(firstName + " " + lastName + " has been submitted!")
        this.reset();
    });

    $('#complaint-form').submit(function(e) {
        e.preventDefault();
        var compDate = $('#complaint-form>input[name="cdate"]').val();
        var compDescription = $('#complaint-form>textarea[name="cdescription"]').val();
        alert("Date of complaint:\n" + compDate + "\n\nComplaint:\n"+ compDescription);
        this.reset();
    });


    $('#food-form').submit(function(e) {
        e.preventDefault();
        var fdish = $('#food-form>input[name="fdish"]').val();
        var fcat = $('#food-form>select[name="fcategory"]').val();
        alert("Your favorite dish is " + fdish + " for " + fcat);
        this.reset();
    });

});