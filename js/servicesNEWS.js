var NEWS_ALL = {
    getNEWS: function(){
            return $.ajax({
                type: 'get',
                url: ALLNEWS_API
            });
        },
}