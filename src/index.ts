import { Principal } from '@dfinity/principal';
import { heroes } from "./common";


export async function loadData() {
  
  const res = await heroes.getUserTokens(Principal.fromText('hpiem-ue66e-gngde-xhede-3ntv2-mb6kq-jn5ud-6n7df-mbvpf-qqva7-xae'));
  const [owner, metadata ,operator, timestamp, index] = res;
  const[tokenUri1] = owner.metadata;
  console.log(tokenUri1.tokenUri.toString());
  let a =tokenUri1.tokenUri.toString();
  return a;
}









