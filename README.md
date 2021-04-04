# flashforge-finder-dashboard
A simple dashboard for FlashForge Finder printers. Uses a flask backend api to communicate with the printers.

![Dashboard example image](https://github.com/01F0/flashforge-finder-dashboard/blob/master/example.png)

# How to get it running

1. Make sure you have the [Backend](https://github.com/01F0/flashforge-finder-api) running first.

2. Set the backend URL in the **.env** file or create a **.env.local** file.

3. Add your printers to the **index.js** file:

    `<Printer ip_address='192.168.1.134' name='Fiona'/>`. 

4. If you have a camera server you can add a socket as a parameter to 

    `<Printer ip_address='192.168.1.134' camera_ws_url='ws://192.168.1.199:8000/websocket' name='Fiona'/>`. 

    This camera server was used during development: https://github.com/patrickfuller/camp

5. Install the node modules:

    `npm install`

6. Start the development server:

    `npm start`

