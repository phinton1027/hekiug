/*INSERT GROUP ID AND COOKIE BELOW*/
 
var groupId = 13168338 // << Replace 12345 with your Group Id
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_6779A24DB79BBCBE1B849D20FD959B2C4EE158D3C97E4FABFD79C82BC4EE4325CB99F954B70B850B47D591C6031455FA9ECE09208DCB475790D5B04C155B654DDFBC08AB8822019288D156F11BF9614290C283F9984CCB8534495F2DF158DC4E107FA2167B89CD86E93B456E9B332113933875A4752C52AE8B14416EACD8630DF2C5C8C8FA4417A344041F3DB2FA4AE8EB4DDA8681249CB8C8DE98B9DD88BB76C1C13A06F5E027F6F06366DCE2AAA6A0FE180577EA3695F9DBFC0A780FFDA09682F987D6A5C5731E705CB434AE9405B0381B068ABC7C32BBF0C1C1F4EEBBC310C9EA8E51B3C499A610C411406ECC2F050A770A18354586D80401CAE2D254221BF9C79280FB0F55B7510893ADDC647980C4A097C6BB707644A8DDA3B5D8E80AD0E3C2EEB5C7BBF59BE640B4750C7D715F679B1706F23F8496FC7A3A7F565B31A7329A23E605BA4122F88D6D00B81A5AB207F1E7D4EECF5EC65A542805201341CFC371D962C462A8CC80EB1CADCB638A0A31A67E88440E922DD4AEF79AEAA53E84695D4009E69A7FBA476AE62D344D21FABFBFC0F8D5398B894D49B389BC54F522DB4E5CDBB113F3491848E00D29720B2A47734C34D143BD276CE92A1DA59FCFFE6CE1901C92394E1D2D3739260C2F974857CB80E1CD3B7B08ED2368FAB92461479325136BC9306DEED77E5D7D6951742995A7DEA7419C15941C01166F99348B5457468993ADF01D00E777BF28875584C8708298A7B0F63BD5E61BDE54FD42C76A3698B5BB3E24E53934EBA468A0EBD1932E52F46B86485CD43B95BAEFED32FB572EA1320EC158EA0EA360102E4D140B78142CA281B476A3E5EF8E77677934260B67BC62613DADC74B825D70B88F5BACA71CD7BC30E196866BAFB8D970153175840144A1563AD57C9200415EED1171FF7D97728345F85A20E1BECCCD7667A9AE993C6EB9AF83331F9A70FDC069A60B656A4EC88CEAB86B6665D07546FEF774F38503231FCE45425874A1ED248A5976737876B15445B5C9F825BA505D0FB4A89C64D221DA8A436889F3CA3DD094C0AAF67056CF7945" // << Put your account cookie inside of the quotes
 
/*INSERT GROUP ID AND COOKIE ABOVE*/
 
 
const express = require("express");
const rbx = require("noblox.js");
const app = express();
 
app.use(express.static("public"));
 
async function startApp() {
  await rbx.setCookie(cookie);
  let currentUser = await rbx.getCurrentUser();
  console.log(currentUser.UserName);
}
startApp();
 
app.get("/ranker", (req, res) => {
    var User = req.param("userid");
    var Rank = req.param("rank");
 
    rbx.setRank(groupId, parseInt(User), parseInt(Rank));
    res.json("Ranked!");
});
 
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
