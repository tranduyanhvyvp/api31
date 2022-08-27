import { Principal } from '@dfinity/principal';
import { heroes } from "./common";


export async function loadData(principalId:string) {
  
  var res = await heroes.getUserTokens(Principal.fromText(principalId));
  //console.log(res);
  let a="";
  var i =0;
  for(i; i<res.length;i++){
    var [owner, metadata ,operator, timestamp, index] = res.at(1);
    a=a+res.at(i).metadata.at(0).tokenUri;
  }
  //console.log(a);
  return a;
}








