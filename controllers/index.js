(function(controllers){
    var notesController = require('./notes');

    controllers.init = function(app){
        notesController.init(app);
    }

})(module.exports);