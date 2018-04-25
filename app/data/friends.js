// ===============================================================================
// DATA
// Below data will hold all of the friends data.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [{
    "name":"Lady Gaga",
    "photo":"http://metrouk2.files.wordpress.com/2011/05/article-1305215133658-0c06ab6300000578-424181_521x579.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;