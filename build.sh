#/bin/bash
cd Frontend/
yarn install
yarn build

cd ..
mkdir -p Backend/static
cp -r Frontend/build/* Backend/static/