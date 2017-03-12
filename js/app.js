//firebased god -> Initialize Firebase
var config = {
    apiKey: "AIzaSyCh7oVA6ZcxM3b99Jmgf7ac-iduYNRftiI",
    authDomain: "paper-scisscors-rock-online.firebaseapp.com",
    databaseURL: "https://paper-scisscors-rock-online.firebaseio.com",
    storageBucket: "paper-scisscors-rock-online.appspot.com",
    messagingSenderId: "242538191840"
};
firebase.initializeApp(config);
var database = firebase.database();
var playerCount = 0;
var comments = {}; //empty obj that will take playr1 comments and player 2 comments
var players = []; //will house my two player objects
var throws = ['Rock','Paper','Scissors'];
var turns = 0;

function playerGen(e, num) {
  e.preventDefault();
  var name = $('#userName').val().trim();
  database.ref().on('value', function(snapshot) {
    if (playerCount === 0 || snapshot.child('player2').exists()) {
      var player1 = {
        name: name,
        wins: 0,
        losses: 0
      };
    }
    else if (playerCount === 1 || snapshot.child('player1').exists()) {
      var player2 = {
        name: name,
        wins: 0,
        losses:0
      }
    }
    playerCount++;
}

database.ref().on('value', function(snapshot) {
  var player = snapshot.child();
  for(i=0; i<throws.length; i++) {
    var choiceEl = $('<div class="choice ' + throws[i] + '" data-player="'+player+'" data-choice="'+throws[i]'">'+throws[i]+'</div>');
    $('.player > .inner').append(choiceEl);
  }
}

function makePlay(e) {
  e.preventDefault();
  player.choice = $(this).
}

//adding in FIREBASE AT END
// database.ref().on('value', function(snapshot) {
//   if(snapshot.child('players').exists()) {
//       players = snapshot.val().players;
//       console.log(players);
//       if(players.length < 2) {
//         $('.add-user').on('click', playerGen);
//       }
//
//       else {
//         $('.welcome').html('Two people are playing!');
//       }
//     }
// });
