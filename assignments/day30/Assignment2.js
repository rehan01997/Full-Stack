const http = require( 'http' );
const url = require( 'url' );

const server = http.createServer(( req , res) => {
    console.log( req.url );
    const urlParts = url.parse( req.url, true );
    const x=urlParts.query.x;
    const y=urlParts.query.y;
    let ans=0;

    if(urlParts.pathname === "/add")
    {
        ans=parseInt(x)+parseInt(y);
    }
    else if(urlParts.pathname === "/subtract")
    {
        ans=parseInt(x)-parseInt(y);
    }
    else if(urlParts.pathname === "/divide")
    {
        ans=parseInt(x)/parseInt(y);
    }
    else if(urlParts.pathname === "/multiply")
    {
        ans=parseInt(x)*parseInt(y);
    }
    res.write(`${ans}`);
    console.log(ans);
    res.end( '\nThe pathname is ' + urlParts.pathname );
});

const PORT = process.env.PORT || 3000;

server.listen( PORT );

server.once( 'listening', () => {
    console.log( `Check http://localhost:${PORT}` )
});

server.on( 'error', ( error ) => {
    console.error( error.message );
});