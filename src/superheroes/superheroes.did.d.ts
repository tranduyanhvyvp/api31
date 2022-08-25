import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type Errors = { 'Unauthorized' : null } |
  { 'TokenNotExist' : null } |
  { 'InvalidOperator' : null };
export type MintResult = { 'Ok' : [bigint, bigint] } |
  { 'Err' : Errors };
export interface NFTSale {
  'approve' : ActorMethod<[bigint, Principal], TxReceipt>,
  'balanceOf' : ActorMethod<[Principal], bigint>,
  'batchMint' : ActorMethod<
    [Principal, Array<[] | [TokenMetadata]>],
    MintResult
  >,
  'batchSetTokenMetadata' : ActorMethod<
    [Array<[bigint, TokenMetadata]>],
    TxReceipt
  >,
  'batchTransferFrom' : ActorMethod<
    [Principal, Principal, Array<bigint>],
    TxReceipt
  >,
  'burn' : ActorMethod<[bigint], TxReceipt>,
  'create_account' : ActorMethod<[Person], boolean>,
  'delete_account' : ActorMethod<[bigint], boolean>,
  'getAllTokens' : ActorMethod<[], Array<TokenInfoExt>>,
  'getOperator' : ActorMethod<[bigint], Principal>,
  'getTokenInfo' : ActorMethod<[bigint], TokenInfoExt>,
  'getTransaction' : ActorMethod<[bigint], TxRecord>,
  'getTransactions' : ActorMethod<[bigint, bigint], Array<TxRecord>>,
  'getUserInfo' : ActorMethod<[Principal], UserInfoExt>,
  'getUserTokens' : ActorMethod<[Principal], Array<TokenInfoExt>>,
  'getUserTransactionAmount' : ActorMethod<[Principal], bigint>,
  'getUserTransactions' : ActorMethod<
    [Principal, bigint, bigint],
    Array<TxRecord>
  >,
  'historySize' : ActorMethod<[], bigint>,
  'isApprovedForAll' : ActorMethod<[Principal, Principal], boolean>,
  'list_account' : ActorMethod<[], Array<[bigint, Person]>>,
  'mint' : ActorMethod<[Principal, [] | [TokenMetadata]], MintResult>,
  'ownerOf' : ActorMethod<[bigint], Principal>,
  'read_account' : ActorMethod<[bigint], [] | [Person]>,
  'setApprovalForAll' : ActorMethod<[Principal, boolean], TxReceipt>,
  'setOwner' : ActorMethod<[Principal], Principal>,
  'setTokenMetadata' : ActorMethod<[bigint, TokenMetadata], TxReceipt>,
  'totalSupply' : ActorMethod<[], bigint>,
  'transfer' : ActorMethod<[Principal, bigint], TxReceipt>,
  'transferFrom' : ActorMethod<[Principal, Principal, bigint], TxReceipt>,
  'update_account' : ActorMethod<[bigint, Person], boolean>,
}
export type Operation = { 'transferFrom' : null } |
  { 'burn' : null } |
  { 'approveAll' : null } |
  { 'mint' : [] | [TokenMetadata__1] } |
  { 'approve' : null } |
  { 'createOrder' : null } |
  { 'setMetadata' : null } |
  { 'transfer' : null } |
  { 'revokeAll' : null };
export interface Person { 'sex' : boolean, 'name' : string, 'phone' : string }
export type Record = { 'metadata' : [] | [TokenMetadata__1] } |
  { 'user' : Principal };
export type Time = bigint;
export interface TokenInfoExt {
  'owner' : Principal,
  'metadata' : [] | [TokenMetadata__1],
  'operator' : [] | [Principal],
  'timestamp' : Time,
  'index' : bigint,
}
export interface TokenMetadata { 'tokenUri' : string }
export interface TokenMetadata__1 { 'tokenUri' : string }
export type TxReceipt = { 'Ok' : bigint } |
  { 'Err' : Errors };
export interface TxRecord {
  'op' : Operation,
  'to' : Record,
  'tokenIndex' : [] | [bigint],
  'from' : Record,
  'timestamp' : Time,
  'caller' : Principal,
  'index' : bigint,
}
export interface UserInfoExt {
  'allowedTokens' : Array<bigint>,
  'tokens' : Array<bigint>,
  'operators' : Array<Principal>,
  'allowedBy' : Array<Principal>,
}
export interface _SERVICE extends NFTSale {}
