(function(notesController){

    var data = require('../data');

    notesController.init = function(app){
        app.get('/api/notes', apiNotesHandler);
    }

    function apiNotesHandler(req, res){
        data.getNotes(function(err, results){
            res.json(results);
        });
    }

})(module.exports);