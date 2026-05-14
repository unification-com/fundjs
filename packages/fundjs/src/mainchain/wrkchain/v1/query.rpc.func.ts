//@ts-nocheck
import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryWrkChainRequest, QueryWrkChainResponse, QueryWrkChainBlockRequest, QueryWrkChainBlockResponse, QueryWrkChainsFilteredRequest, QueryWrkChainsFilteredResponse, QueryWrkChainStorageRequest, QueryWrkChainStorageResponse } from "./query";
/**
 * Params queries the parameters of x/wrkchain module.
 * @name getParams
 * @package mainchain.wrkchain.v1
 * @see proto service: mainchain.wrkchain.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "mainchain.wrkchain.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * WrkChain queries the metadata of a wrkchain.
 * @name getWrkChain
 * @package mainchain.wrkchain.v1
 * @see proto service: mainchain.wrkchain.v1.WrkChain
 */
export const getWrkChain = buildQuery<QueryWrkChainRequest, QueryWrkChainResponse>({
  encode: QueryWrkChainRequest.encode,
  decode: QueryWrkChainResponse.decode,
  service: "mainchain.wrkchain.v1.Query",
  method: "WrkChain",
  deps: [QueryWrkChainRequest, QueryWrkChainResponse]
});
/**
 * WrkChainBlock queries a submitted hash of a wrkchain
 * @name getWrkChainBlock
 * @package mainchain.wrkchain.v1
 * @see proto service: mainchain.wrkchain.v1.WrkChainBlock
 */
export const getWrkChainBlock = buildQuery<QueryWrkChainBlockRequest, QueryWrkChainBlockResponse>({
  encode: QueryWrkChainBlockRequest.encode,
  decode: QueryWrkChainBlockResponse.decode,
  service: "mainchain.wrkchain.v1.Query",
  method: "WrkChainBlock",
  deps: [QueryWrkChainBlockRequest, QueryWrkChainBlockResponse]
});
/**
 * WrkChainsFiltered queries all wrkchain metadata for given search parameters
 * @name getWrkChainsFiltered
 * @package mainchain.wrkchain.v1
 * @see proto service: mainchain.wrkchain.v1.WrkChainsFiltered
 */
export const getWrkChainsFiltered = buildQuery<QueryWrkChainsFilteredRequest, QueryWrkChainsFilteredResponse>({
  encode: QueryWrkChainsFilteredRequest.encode,
  decode: QueryWrkChainsFilteredResponse.decode,
  service: "mainchain.wrkchain.v1.Query",
  method: "WrkChainsFiltered",
  deps: [QueryWrkChainsFilteredRequest, QueryWrkChainsFilteredResponse]
});
/**
 * WrkChainStorage queries wrkchain storage for for given wrkchain ID
 * @name getWrkChainStorage
 * @package mainchain.wrkchain.v1
 * @see proto service: mainchain.wrkchain.v1.WrkChainStorage
 */
export const getWrkChainStorage = buildQuery<QueryWrkChainStorageRequest, QueryWrkChainStorageResponse>({
  encode: QueryWrkChainStorageRequest.encode,
  decode: QueryWrkChainStorageResponse.decode,
  service: "mainchain.wrkchain.v1.Query",
  method: "WrkChainStorage",
  deps: [QueryWrkChainStorageRequest, QueryWrkChainStorageResponse]
});