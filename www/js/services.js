angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

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
}).factory('Setting', function(){

    var settings = [{
        numberRange: 10,
        timeout: 900,
        numberCount: 5
    },{
      numberRange: 100,
      timeout: 1000,
      numberCount: 5
    },{
      numberRange: 1000,
      timeout: 1200,
      numberCount: 4
    },{
      numberRange: 1000,
      timeout: 1000,
      numberCount: 5
    }];

    var config = {
        numberRange: 10,
        timeout: 900,
        numberCount: 5
    };

    var option = {
        level1: true,
        level2: false,
        level3: false,
        level4: false
    };

    var setOption = function(opt) {
        this.option.level1 = false;
        this.option.level2 = false;
        this.option.level3 = false;
        this.option.level4 = false;
        switch(opt){
            case 1:
                this.option.level1 = true;
                break;
            case 2:
                this.option.level2 = true;
                break;
            case 3:
                this.option.level3 = true;
                break;
            case 4:
                this.option.level4 = true;
                break;
        }
    };

    var setSetting = function(opt){
        this.config.numberRange = settings[opt-1].numberRange;
        this.config.numberCount = settings[opt-1].numberCount;
        this.config.timeout = settings[opt-1].timeout;
    };

    return {
        option: option,
        setOption: setOption,
        setSetting: setSetting,
        config: config
    }
});
