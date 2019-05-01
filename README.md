# disboard-bumper
A selfbot to bump disboard


# How to run.
1: Download [NodeJS](https://nodejs.org/en/)   

2: Clone this repo or download as zip    
![yikes](/images/download.png)

3: Open folder containing the source code.   

4: Open a command line (shift + right click anywhere in the folder and select powershell or commandline)  

5: type "npm i" or "npm install" and wait for it to install all needed node modules   

6: Change the "myConfig.js" to "config.js" and fill in the needed fields.   

to retrieve your account token, please refer to [this guide](/Getting-Account-Token.md)   

7: Once you've gotten your token, put the token into the 
```javascript 
module.exports.token = 'token here'
```   

Once you have set all the needed config elements, you're rady to go.   
Just type "node index.js" in the command line like this   








## Notes ##
You ***could*** run it as a bot but some bots checks if the user is a bot account or not.   
I suggest making a new discord account for this. Don't risk using your own.
