const http = require( 'http' );
const url = require( 'url' );
const querystring = require( 'querystring' );
const fs = require( 'fs' );
const path = require( 'path' );

const server = http.createServer(( req, res ) => {
    const urlParts = url.parse( req.url, true );
    const method = req.method.toLowerCase();


    // home page request
    if( method === 'get'  && urlParts.pathname === '/' ) {
        fs.readFile( path.join( __dirname, 'index.html' ), 'utf-8', ( error, contents ) => {
            if( error ) {
                res.statusCode = 500;
                res.end( 'Some error' );
                return;
            }
            
            res.end( contents );
        });
    }
    if( method === 'get'  && urlParts.pathname === '/contact' ) {
        fs.readFile( path.join( __dirname, 'contact.html' ), 'utf-8', ( error, contents ) => {
            if( error ) {
                res.statusCode = 500;
                res.end( 'Some error' );
                return;
            }
            
            res.end( contents );
        });
    }

    // POST form
    if( method === 'post' && urlParts.pathname === '/message' ) {
        let buffer = '';

        req.on( 'data', chunk => {
            buffer += chunk;
        });

        req.on( 'end', () => {
            
            const parsedData = querystring.parse( buffer );
            let jsondata = JSON.stringify(parsedData);

            fs.appendFile( path.join( __dirname, 'messages.json' ), jsondata , error => {
                if( error ) {
                    console.error( `Some error occured` );
                    console.error( error.message );
                    return;
                }
                console.log( 'File has been created' );
            });
            res.end( 'Recieved User Details' );
        });
    }
});

// you can read environment variables - you cannot set
const PORT = process.env.PORT || 3000;

// server.listen() is an async function
server.listen( PORT );

server.once( 'listening', () => {
    console.log( `Check http://localhost:${PORT}` )
});

server.on( 'error', ( error ) => {
    console.error( error.message );
});