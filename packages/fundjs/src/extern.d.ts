/**
* This file and any referenced files were automatically generated by @cosmology/telescope@1.8.3
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or npm scripts command that is used to regenerate this bundle.
*/
import { ProtobufRpcClient } from '@cosmjs/stargate';
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const getRpcEndpointKey: (rpcEndpoint: string | HttpEndpoint) => string;
export declare const getRpcClient: (rpcEndpoint: string | HttpEndpoint) => Promise<ProtobufRpcClient>;
export declare const createRpcClient: (rpcEndpoint: string | HttpEndpoint) => Promise<ProtobufRpcClient>;
