require 'sinatra'
require 'json'

set :port, 6060

before do
    headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Headers'] = 'append,delete,entries,foreach,get,has,keys,set,values,Authorization',
    headers['status'] = "200"
    
end

get "/" do
    "Hello Unknown Get Requester. Success from the Ruby Server"
end

post "/" do
    BODY = JSON.parse request.body.read
    NAME = BODY["name"]
    "Hello #{NAME}. Your are a Post Requester. Success from the Ruby Server"
end