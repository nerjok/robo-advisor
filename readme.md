source venv/bin/activate

python -m ipykernel install --user --name venv --display-name "Python (venv)"

### To run bff:

- pip install -r requirements.txt
- uvicorn main:app --reload

<!--  -->
*** 
{ "assetClasses": "ETFs", "perYearInvestment": 500, "riskLevel": "medium", "selectedRegions": { "global": true, "us": false }, "years": "3y" }
***

PyPortfolio


docker build --no-cache -t nerjok/robo-advisor:v2.1 .
docker push nerjok/robo-advisor:v2.1


cd ~/Downloads/robokeys
ssh ubuntu@82.70.52.40 -i ssh-key-2026-04-25.key
docker pull nerjok/robo-advisor:v2.1
sudo docker run -d -p 80:8000 nerjok/robo-advisor:v2.1


docker run -p 8000:8000 flask-app

docker push nerjok/robo-advisor:latest

npx serve -s client




docker pull nerjok/robo-advisor:latest
docker run -d -p 8000:8000 nerjok/robo-advisor:latest

sudo docker run -d -p 80:8000 nerjok/robo-advisor:latest

