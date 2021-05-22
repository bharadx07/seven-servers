require 'sinatra'
require 'json'

set :port, 6060

before do
    headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Headers'] = 'Accept, Authorization, Origin'
end

get "/" do
    "Hello Unknown Get Requester. Success from the Ruby Server"
end

post "/" do
    BODY = JSON.parse request.body.read
    NAME = BODY["name"]
    "Hello #{NAME}. Your are a Post Requester. Success from the Ruby Server"
end