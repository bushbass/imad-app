var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    articleOne: {
    title: 'Article One | Alex Nielsen',
    heading: 'Article One',
    date: 'August 8, 2017',
    content: `
    <p>Changed.  This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. 
    </p>
    <p>This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. 
    </p>
    <p>This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. 
    </p>
    `},
    articleTwo: {
    title: 'Article Two | Alex Nielsen',
    heading: 'Article Two',
    date: 'August 10, 2017',
    content: `
    <p>This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. 
    </p>
   <p>This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. 
    </p> <p>This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. This is the content of my secod article. 
    </p>
    `},
    articleThree: {
    title: 'Article Three | Alex Nielsen',
    heading: 'Article Three',
    date: 'August 12, 2017',
    content: `
    <p>This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. 
    </p>
  <p>This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. 
    </p><p>This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. This is the content of my third article. 
    </p>
    `}
};
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = 
  `
  <html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link href="/ui/style.css" rel="stylesheet" />
     
    </head>
    
    <body>
        <header class="container"> 
            <ul>
                 <li><a href="/">Home</a> - 
                </li>
                <li><a href="/article-one">Article One</a> - 
                </li>
                <li><a href="/article-two">Article Two</a> - 
                </li>
                <li><a href="/article-three">Article Three</a>
                </li>
            </ul>
        </header>
        
        <div class="container"> 
            <div>
                <a href='/'>Home</a>
            </div>
            <hr/>
            
            <h3>${heading}</h3>
            
            <div>
                ${date}
            </div>
            
            <div>
                ${content}
            </div>
        </div>
    </body>
    
</html>
  `;
  return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
    res.send(createTemplate(articles.articleOne));
});

app.get('/article-two', function (req, res) {
    res.send(createTemplate(articles.articleTwo));
});

app.get('/article-three', function (req, res) {
    res.send(createTemplate(articles.articleThree));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
