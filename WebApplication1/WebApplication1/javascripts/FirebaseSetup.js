var config = {
    apiKey: "AIzaSyCfzy2pPMvaPzTa6JTS7FTqzauOEMna0NA",
    authDomain: "letsgoout-d5bbf.firebaseapp.com",
    databaseURL: "https://letsgoout-d5bbf.firebaseio.com",
    storageBucket: "letsgoout-d5bbf.appspot.com",
    messagingSenderId: "993637214597"
};
firebase.initializeApp(config);

    const tEventname = document.getElementById('txtEventname');
    const tOwner = document.getElementById('txtEmail');
    const tDate = document.getElementById('txtDate');
    const tDeadline = document.getElementById('txtDeadline');
    const tPlace = document.getElementById('txtPlace');
    const tParticipants = document.getElementById('txtParticipants');
    const tComments = document.getElementById('txtComments');
    const bSubmit = document.getElementById('btnSubmit');

    bSubmit.addEventListener('click', e => {
        const Eventname = txtEventname.value;
        const Owner = tOwner.value;
        const Date = tDate.value;
        const Deadline = tDeadline.value;
        const Place = tPlace.value;
        const Participants = tParticipants.value;
        const Comments = tComments.value;

        firebase.database().ref('Events/' + Eventname).update({
            'Owner': Owner, 'Date': Date,
            'Deadline': Deadline, 'Place': Place,
            'Participants': Participants, 'Comments': Comments});
    })
