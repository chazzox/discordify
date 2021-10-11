/**
 * @name SpotifyDiscord
 * @author PINPAL#5245 and chazzox#1001
 * @description Spotify but inside discord
 * @version 0.0.1
 * @website https://github.com/PINPAL/spotifyDiscord#readme
 * @source https://github.com/PINPAL/spotifyDiscord
 */
const{React:e,ReactDOM:t}=BdApi,o=e.createElement("div",null,"fuck you");function n(){const[n,d]=e.useState(!0);return e.createElement(e.Fragment,null,e.createElement("button",{onClick:()=>d(!n)},"toggle"),!n&&t.createPortal(o,document.getElementById("discordSpotifySidebar")))}module.exports=class{load(){console.log("loading up")}start(){!function(){const e=document.createElement("div");e.id="discordSpotifyToolbar";document.getElementsByClassName("toolbar-1t6TWx")[0].append(e);const t=document.createElement("div");t.id="discordSpotifySidebar";document.getElementsByClassName("container-2lgZY8")[0].append(t)}();t.render(e.createElement(n,null),document.getElementById("discordSpotifyToolbar"))}stop(){!function(){document.getElementById("discordSpotifySidebar").remove();document.getElementById("discordSpotifyToolbar").remove()}()}};