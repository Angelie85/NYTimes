Instruction to run the application

First install nodejs
* nodejs.org and install the current version of node
After installion of nodejs, install yarn
* On command prompt type following, for windows users a restart is needed after yarn installation
npm install -g yarn
Fro Mac<br>
sudo npm install -g yarn

* To start the service we need to get all the libraries for validation by following command
yarn install
* Start the services by following command
yarn start

After you are done go to 127.0.0.1:3000/home to see the application


1)	Some note for the application:
From the requirement point #2 mention that if there are more than 10 articles pagination should take place.  Since for search result api the result is always 10 articles. I have done the pagination on the search result list but not the Top stories page.
Point #3 stated that an iframe would need to show the detail of the NY times detail page. However, due to CORS issue, the page won’t be able to show on the page, one solution is if we change the header setting on nginx, if we are using nginx locally.  I didn’t add the iframe part as the page wont’ be showing unless if you will have to set up a port for my application. I only show the little deatil which was shown from the api call.

