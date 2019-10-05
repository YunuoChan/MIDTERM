$(function(){
    var country = '';
    var totalRes = $('.myRes');
    var resText = $('.resText');
    var newsContainer = $('.news-container');
    var list = $('#news-list');
    var count_news = 0;

    
    function START(){
        count_news = 0;
        NEWS_API;
        GetNews();
    }
    
    const GetNews = async() => {
        try {
            const getNews = await getMyNews();
            const news_list = getNews.articles;
            var getNewsTotalResult = getNews.totalResults;

            NewsTotalResults(getNews.totalResults);

            news_list.forEach(function(res){
               
                NewsItem(res.urlToImage, res.title, res.author, res.url)
            });
            
        }
        catch(err){
            console.log(err);
        }
    }

    function getMyNews(){
      return NEWS_SERVICE.getAllNews();
    }

    function NewsTotalResults(res) {
        resText.text(`You have ${res} results`);
    }

    function NewsItem(image, title, author, description, url){
        var item = `<li>
                    <img src="${image}" alt="">
                    <p>${title}</p>
                    <p>${author}</p>
                    <a href="${url}">${url}</a>
                    </li>`;
   
            list.append(item);
        
    }
    START();
    
})