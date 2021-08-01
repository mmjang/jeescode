npm run build
cp -r build/* ../jeescode.github.io
cd ../jeescode.github.io
git add .
git commit -m "update"
git push