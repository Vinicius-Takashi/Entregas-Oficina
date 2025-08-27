let dados = '{"user":"alice","flag":"GUARDIAN{JS0N_L3AK3D}"}';
let json = JSON.parse(dados);
console.log("Flag: " + json.flag);
