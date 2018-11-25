# Tech Stack
- NodeJs
- ExpressJs
- Mongoose
-   React
-   Router v4
-   CSS3
# Requirements:
1.  [Node and npm](https://nodejs.org/en/)

# Installation:
1.  Clone the repo or download the zip file.
2.  Install the application using command:  `npm install`
3.  Start your server:  `node run dev-server`
4.  View in browser at  `http://localhost:3000`
5. API endpoints will be available at  `http://localhost:5000`


# API Endpoints:
1.  > ## Post Request  /api/v1/monitorURLs/save  
	 Given URL information. The server should start monitoring the URL at this point.
2.  > ## Get Request  /api/v1/monitorURL/:id 
	Retrieve data on the url being monitored by id
3.  > ## Get Request  /api/v1/monitorURL
	 Retrieve data on all the url being monitored
4.  > ## Put Request  /api/v1/updateUrl/:id
	Using the ID, the user can edit the URL information previously entered so as to continue monitoring using the new URL.

5. > ## Delete Request  /api/v1/deleteUrl/:id
	Using the ID, the user should be able to tell the server to stop monitoring the URL