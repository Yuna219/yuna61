var http =require('http')
http.createServer(function (request, response){

response.writeHead(200,{"Content-Type":"text/plain"})
response.end( "Hello world\n")
I
}).listen(process.env.PORT)
log.Fatal(http.ListenAndServe(":" + os.Getenv("PORT"), router))
