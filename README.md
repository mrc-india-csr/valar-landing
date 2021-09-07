# valar-landing

Home page for TN Govt's Valar 4.0 

This is a node JS Express - reverse proxy for Valar. This contains the static landing page and a proxy for redirecting to the angular site.

To start `node valar-landing-server.js 1>log.out 2>err.out &`

To reach the hompage the url will be `http://<host>:<port>/`

All other paths will be redirected to the valar angular app.

The git repo contains the node_modules because it becomes easy to download and install the entire package on the server. As npm install will not work on that server

# Login to the server to check if the service is running and restart it

## Connect to WinSCP and PuTTY
1. Connect to the Server via WinSCP
2. If prompted enter password for appuser
3. In WinSCP Click on Connect Menu -> Open PuTTY. This will open a Putty Session
4. Enter password for appuser in PuTTY window (Note: you have to type in the passsword and press "Enter". Linux terminals will not show any indication like *** when passwords are entered)

## Switch user to root
1. Type command "sudo -i"
2. Enter password for appuser when prompted. Now you have swithed to root user

## Check if Valar landing service is running
1. Go to the Valar Landing directory using the command "cd /home/appuser/valar_landing/valar-landing-main"
2. Check if Valar landing process is already running using command "ps ef | grep valar-landing-server"
3. If the valar landing process is running then you will see an output like below

`
root    <pid>   72494  0 10:22 pts/0    00:00:00 node valar-landing-server.js
`

`
root    <pid>   72494  0 10:34 pts/0    00:00:00 grep --color=auto valar-landing-server
`

4. If the entry with `node valar-landing-server.js` is shown, then it means the server is running. If this entry is missing then it means the service is down

## Kill the service if it is already running
1. If the service is running, then kill that process by the command `kill -9 <pid>`. The pid value is the corresponding pid value from the above ps command.

## Start the service again
1. To start the service run the command `node valar-landing-server.js 1>log.out 2>err.out &`
