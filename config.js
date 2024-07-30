const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_25_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDg4LFxuICAgICAgICA1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0LFxuICAgICAgICA1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA3NSxcbiAgICAgICAgODcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1LFxuICAgICAgICAyMjksXG4gICAgICAgIDY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDcsXG4gICAgICAgIDU4LFxuICAgICAgICA0NixcbiAgICAgICAgMTc1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUwLFxuICAgICAgICA1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MixcbiAgICAgICAgMTIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDExOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDc5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDk2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaYS9kMWxIYTFSWVZtM0dxalVibTVpVnJmSHh4YkdmTDlIbVQzNVc2a1NBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODE3MDA1MDgwNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkJCRTQ4MTQwMzAzNzgzQzE2M0I3RTFDQzdBODA2QkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMzI3OTA2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVkYWpXdDhqUVY2a2xFaDlncjNnRFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjY1MzM2YmYtZWNkNi00YWFmLThmOGMtODQxNGQxNGFkOTg2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ2LFxuICAgICAgMTU0LFxuICAgICAgMjQyLFxuICAgICAgNDUsXG4gICAgICA5MCxcbiAgICAgIDE3OCxcbiAgICAgIDE1LFxuICAgICAgNzAsXG4gICAgICAyNDIsXG4gICAgICA5MSxcbiAgICAgIDIwNCxcbiAgICAgIDE5NCxcbiAgICAgIDQ1LFxuICAgICAgNDcsXG4gICAgICA4NSxcbiAgICAgIDYxLFxuICAgICAgMSxcbiAgICAgIDIwNyxcbiAgICAgIDQ2LFxuICAgICAgMjUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEsXG4gICAgICAyNCxcbiAgICAgIDcxLFxuICAgICAgNzAsXG4gICAgICA2NixcbiAgICAgIDIwMCxcbiAgICAgIDE0MyxcbiAgICAgIDE4MyxcbiAgICAgIDI0OCxcbiAgICAgIDg5LFxuICAgICAgNDgsXG4gICAgICAxMyxcbiAgICAgIDY2LFxuICAgICAgMTIxLFxuICAgICAgNjEsXG4gICAgICAyLFxuICAgICAgMzIsXG4gICAgICAxMzEsXG4gICAgICA2MSxcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4U1Y5TFNSRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4MTcwMDUwODA1OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiw4VMxJJYX0LDgkLDnFwiLFxuICAgIFwibGlkXCI6IFwiMzE1MTI2NjE2NTE1OTY6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTU8xNS9RSEVOckdvclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJT3hkM0s4REprM0NGeFBTZGRJUGcvZ2IyUDd6WWhwS1IxNzhxdDZvaWc0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtjODB0NFNsK2lEVkxIb3NLZERML1Q0M0cxcndtT0lBajlnamtLSjlTcG4vWlE0aU94cGY5T09RRGU2bmZIaVNiSDlFRzNPQ3NoV0tCUlFnT1pEM0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk16UndNWlZWOWJYN1kyUEEvYVBxRWtqdFFVdzY0anF4bnFob1FqSFN0N1dFN1FySUN1Y0ZZd0srSFZaVjBMZkltWVpUb2FWdEJ2NkVObndjWXZ0UGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODE3MDA1MDgwNToyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzI3OTAxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDNMXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEM0wuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJRUhNakhCSnJ4NzlRalR0dXhDamJXMElZaENrdmdaYzVqTTg1dTE5NXQ0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMjQwMTIyMjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
