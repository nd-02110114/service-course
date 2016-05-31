angular.module('starter.services', [])

    .factory('Chats', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var chats = [{
        id: 0,
        name: 'レソラサウステラス',
        lastText: '福岡市中央区今泉1-22-17',

      }, ];

      return {
        all: function() {
          return chats;
        },
        remove: function(chat) {
          chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
          for (var i = 0; i < chats.length; i++) {
            if (chats[i].id === parseInt(chatId)) {
              return chats[i];
            }
          }
          return null;
        }
      };
    });

////<script src="./js/jquery.xdomainajax.js"> </script>
////
//angular.module('starter.services', [])
////    .factory('Chats', function() {
////var wp_url_admin_ajax = 'http://192.168.33.10/wp-admin/admin-ajax.php';
////jQuery(function ($) {
////  $.ajax({
////    type: 'POST',
////    dataType: 'json',
////    crossDomain: true,
////    url: wp_url_admin_ajax,
////    data: {
////      'action': 'tell_me'
////
////    },
////    success: function (response) {
////
////      var len = response.length;
////      for (var i = 0; i < len; i++) {
////        var chats = new Array();
////            chats[i] = {id:response[i][0],name:response[i][1],lastText:response[i][4]};
////      }
////
////
////    }
////  });
////})
//
//
//
//
//.factory('Chats', function() {
//  var chats = [{
//    id: 0,
//    name: 'Ben Sparrow',
//    lastText: 'You on your way?',
//    face: 'img/ben.png'
//  }, {
//    id: 1,
//    name: 'Max Lynx',
//    lastText: 'Hey, it\'s me',
//    face: 'img/max.png'
//  }, {
//    id: 2,
//    name: 'Adam Bradleyson',
//    lastText: 'I should buy a boat',
//    face: 'img/adam.jpg'
//  }, {
//    id: 3,
//    name: 'Perry Governor',
//    lastText: 'Look at my mukluks!',
//    face: 'img/perry.png'
//  }, {
//    id: 4,
//    name: 'Mike Harrington',
//    lastText: 'This is wicked good ice cream.',
//    face: 'img/mike.png'
//  }];
//
//  return {
//    all: function() {
//      return chats;
//    },
//    remove: function(chat) {
//      chats.splice(chats.indexOf(chat), 1);
//    },
//    get: function(chatId) {
//      for (var i = 0; i < chats.length; i++) {
//        if (chats[i].id === parseInt(chatId)) {
//          return chats[i];
//        }
//      }
//      return null;
//    }
//  };
//});
