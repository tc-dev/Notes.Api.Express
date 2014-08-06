(function(data){

    data.getNotes = function(next){
        next(null, {api: 'notes', data: [1,2,3]});
    }

})(module.exports);