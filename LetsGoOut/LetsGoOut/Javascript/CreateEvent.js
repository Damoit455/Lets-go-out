var config = {
    apiKey: "AIzaSyCfzy2pPMvaPzTa6JTS7FTqzauOEMna0NA",
    authDomain: "letsgoout-d5bbf.firebaseapp.com",
    databaseURL: "https://letsgoout-d5bbf.firebaseio.com",
    storageBucket: "letsgoout-d5bbf.appspot.com",
    messagingSenderId: "993637214597"
};
firebase.initializeApp(config);

const tEventname = document.getElementById('txtEventname');
const tEmail = document.getElementById('txtEmail');
const tDate = document.getElementById('txtDate');
const tDeadline = document.getElementById('txtDeadline');
const tPlace = document.getElementById('txtPlace');
const tParticipants = document.getElementById('txtParticipants');
const tComments = document.getElementById('txtComments');
const bSubmit = document.getElementById('btnSubmit');

bSubmit.addEventListener('click', e => {
        
    const Eventname = txtEventname.value;
    const Email = tEmail.value;
    const Date = tDate.value;
    const Deadline = tDeadline.value;
    const Place = tPlace.value;
    const Participants = tParticipants.value;
    const Comments = tComments.value;

    var Checker = 0;
    var message = "";
    

    if (Eventname != "")
    {
        Checker++;
        }
        else {
            message += "Fill in an eventname\n";
        }

    if (Email != "" && validateEmail(Email)) {
            Checker++;
        }
        else {
            message += "Fill in an actual email\n";
        }

        if (Date != "") {
            Checker++;
        }
        else {
            message += "Fill in a date\n";
        }

        if (Deadline != "" && Deadline< Date) {
            Checker++;
        }
        else {
            message += "Fill in a (good) deadline\n";
        }

        if (Place != "") {
            Checker++;
        }
        else {
            message += "Fill in a place\n";
        }
        7
        if (Participants != "") {
            Checker++;
        }
        else {
            message += "Fill in the number of participants\n";
        }

        if (Comments != "")
        {
            Checker++;
        }
        else {
            Checker++;
            tComments.value = "blank";
        }

        if (Checker == 7) {
        firebase.database().ref('Events/' + Eventname).update({
            'Owner e-mail': Email, 'Date': Date,
            'Deadline': Deadline, 'Place': Place,
            'Participants': Participants, 'Comments': Comments
        });
        firebase.auth().createUserWithEmailAndPassword(Email, Eventname).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }
    else
    {
            window.alert(message);
    }
})

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}