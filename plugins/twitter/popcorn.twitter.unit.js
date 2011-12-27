test( "Popcorn Twitter Plugin", function() {

  var popped = Popcorn( "#video" ),
      expects = 7,
      count = 0,
      setupId,
      twitterdiv = document.getElementById( "twitterdiv" );

  expect( expects );

  Popcorn.plugin.debug = true;

  function plus() {
    if ( ++count === expects ) {
      start();
    }
  }

  stop( 20000 );

  ok( "twitter" in popped, "twitter is a method of the popped instance" );
  plus();

  equals ( twitterdiv.innerHTML, "", "initially, there is nothing inside the twitterdiv" );
  plus();

  try {

    ok( TWTR, "Twitter constructor exists" );
    plus();

  } catch ( e ) {}

  popped.twitter({
    start: 1,
    end: 2,
    title: "Steve Song",
    src: "@stevesong",
    target: "twitterdiv"
  });

  setupId = popped.getLastTrackEventId();

  popped.exec( 1, function() {

    ok( /display: inline/.test( twitterdiv.innerHTML ), "Div contents are displayed" );
    plus();
    ok( /twtr-widget/.test( twitterdiv.innerHTML ), "A Twitter widget exists" );
    plus();
  });

  popped.exec( 2, function() {

    ok( /display: none/.test( twitterdiv.innerHTML ), "Div contents are hidden again" );
    plus();

    popped.pause().removeTrackEvent( setupId );
    ok( !twitterdiv.children[ 0 ], "removed twitter was properly destroyed" );
    plus();
  });

  popped.play();
});

test( "Popcorn Twitter Plugin", function() {

  var popped = Popcorn( "#video" ),
      expects = 4,
      count = 0,
      twitterdiv = document.getElementById( "twitterdiv" );

  expect( expects );

  Popcorn.plugin.debug = true;

  function plus() {
    if ( ++count === expects ) {
      start();
    }
  }

  stop( 20000 );

  popped.twitter({
    start: 4,
    end: 5,
    title: "bieber hash",
    src: "#oilspill",
    target: "twitterdiv"
  });

  popped.twitter({
    start: 5,
    end: 6,
    title: "plain text search",
    src: "processing.js",
    target: "twitterdiv"
  });

  popped.exec( 4, function() {

    ok( /display: inline/.test( twitterdiv.innerHTML ), "Div contents are displayed" );
    plus();
    ok( /twtr-widget/.test( twitterdiv.innerHTML ), "A Twitter widget exists" );
    plus();
  });

  popped.exec( 5, function() {

    ok( /display: inline/.test( twitterdiv.innerHTML ), "Div contents are displayed" );
    plus();
    ok( /twtr-widget/.test( twitterdiv.innerHTML ), "A Twitter widget exists" );
    plus();

    popped.pause();
  });

  popped.play( 4 );

});
