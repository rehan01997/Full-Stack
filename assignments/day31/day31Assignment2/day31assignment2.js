const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer( (req, res) => {    
    const parsedUrl = url.parse(req.url);

    var filesLink = '';
    if( parsedUrl.pathname==="/" ){                
            filesLink='<ul><br/><li><a href=".docs/xyz.html">xyz</a></li>';
            fs.readdir(__dirname+'/docs', (err, files) => {
                files.forEach(file => {
                        console.log(file);
                        filesLink+=`<br/><li><a href="${file}">${file}</a></li>` ;  
                    });
                filesLink+="</ul>";          
            });                
        res.end("<h1>List of files:</h1> " + filesLink);
    }
    var pathnamee = __dirname + "/docs/xyz.html";
    fs.readFile(pathnamee, function (err,data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        console.log(req.url);
        res.writeHead(200);
        res.end(data);
    });

}).listen(3000);
  
console.log(`Server listening on port 3000`);