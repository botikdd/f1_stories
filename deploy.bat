docker build -t f1stories .
docker run --name f1storiescontainer -it --rm f1stories
docker tag f1stories lbim1537/f1stories
docker login -u lbim1537
ocker push lbim1537/f1stories

docker build -t registry.heroku.com/ubbse2017-heroku-example/web 
docker run -it --rm -p 3000:3000 registry.heroku.com/ubbse2017-heroku-example/web
docker login registry.heroku.com -u "botiko123@yahoo.com"
docker push registry.heroku.com/f1stories
