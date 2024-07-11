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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_21_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDk0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MSxcbiAgICAgICAgNDksXG4gICAgICAgIDYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjExLFxuICAgICAgICA4NyxcbiAgICAgICAgMjExLFxuICAgICAgICAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgODYsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICA3LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyLFxuICAgICAgICA2MixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInQ3NVNxaUtZeXFjVW1ZSW02cDJlbVo5dXU1bi9HeE1SR283eGg4SVBVb289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE4MTcwMDUwODA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1OTg2RkUyRkMyMkI1MzhFRkM3Q0YzNTk3RjhCMzc0M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2NzE2NzVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSmF3ZmhQMUlRNmVQQ2RZWGZTTTVTd1wiLFxuICBcInBob25lSWRcIjogXCIxYTk4NDAyNS04YjE4LTQwZjktOGYzOC1mZjgxNmE3M2QwMDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA0LFxuICAgICAgNjIsXG4gICAgICA3MSxcbiAgICAgIDEyLFxuICAgICAgNjMsXG4gICAgICAzNyxcbiAgICAgIDIyOCxcbiAgICAgIDQxLFxuICAgICAgMjEwLFxuICAgICAgMTM1LFxuICAgICAgMjQyLFxuICAgICAgNTMsXG4gICAgICAxOSxcbiAgICAgIDIwNyxcbiAgICAgIDQzLFxuICAgICAgMTY0LFxuICAgICAgMTUyLFxuICAgICAgMjQ2LFxuICAgICAgMTg1LFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI0LFxuICAgICAgMTI4LFxuICAgICAgMjUxLFxuICAgICAgNzQsXG4gICAgICA3OCxcbiAgICAgIDU4LFxuICAgICAgMTg4LFxuICAgICAgNDEsXG4gICAgICAxNTEsXG4gICAgICAyMTMsXG4gICAgICAzMSxcbiAgICAgIDExOSxcbiAgICAgIDEyOCxcbiAgICAgIDE4OSxcbiAgICAgIDEyMSxcbiAgICAgIDEzMixcbiAgICAgIDU5LFxuICAgICAgMTc4LFxuICAgICAgMjUyLFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRZR1FSMktHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTgxNzAwNTA4MDU6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLDhUzEklhfQsOCQsOcXCIsXG4gICAgXCJsaWRcIjogXCIzMTUxMjY2MTY1MTU5NjoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMMjE1L1FIRUxTN3ZiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIklPeGQzSzhESmszQ0Z4UFNkZElQZy9nYjJQN3pZaHBLUjE3OHF0Nm9pZzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZHFoLzV0enFSdGRYL29pWFkrZEJQaU5ucWRwNDdxTFRGQ1ROZHNLUExXYndsSWc3VFY1ZHdwMnJuNnNvRlBQVjUzbFpBUmR4UU9tL2tYZTNnYzVUQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVVlERnVoOXVsUnI4QUFGSXE0YlVHTXkrSElCaVdlcHk2bzN5dzdKa1lzdDdGVDFETVVkZEpyNjRSc095TENPTGpSRnRDZGVOL1gyVFFubnRueEVsaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4MTcwMDUwODA1OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2NzE2NzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQeU1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVB5TS5qc29uIjogIntcImtleURhdGFcIjpcIjdCRVBxTzNISkhPS3AvVy9qOVk3RVZBQS9aMDFPYjZnNlc3UjF5dGZKR0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEyNDAxMjIxOSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
