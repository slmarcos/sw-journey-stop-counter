echo 'Starting the build process. Please await...'
basePath=$(dirname $(readlink -f $0))
cd $basePath && cd ../api && npm install && npm run build
cd $basePath && cd ../web && npm install && npm run build
cd $basePath && cd ../infra
echo 'Finish'
echo 'Starting containers...'
docker-compose up -d --build
docker ps
echo 
echo 'Finish'
echo 
