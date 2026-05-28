//@ts-nocheck
import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryEnterpriseUndPurchaseOrderRequest, QueryEnterpriseUndPurchaseOrderResponse, QueryEnterpriseUndPurchaseOrdersRequest, QueryEnterpriseUndPurchaseOrdersResponse, QueryLockedUndByAddressRequest, QueryLockedUndByAddressResponse, QueryTotalLockedRequest, QueryTotalLockedResponse, QueryWhitelistRequest, QueryWhitelistResponse, QueryWhitelistedRequest, QueryWhitelistedResponse, QueryEnterpriseAccountRequest, QueryEnterpriseAccountResponse, QueryTotalSpentEFUNDRequest, QueryTotalSpentEFUNDResponse, QuerySpentEFUNDByAddressRequest, QuerySpentEFUNDByAddressResponse } from "./query";
/**
 * Params queries the parameters of x/enterprise module.
 * @name getParams
 * @package mainchain.enterprise.v1
 * @see proto service: mainchain.enterprise.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "mainchain.enterprise.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * EnterpriseUndPurchaseOrder queries purchase order details based on
 * PurchaseOrderId.
 * @name getEnterpriseUndPurchaseOrder
 * @package mainchain.enterprise.v1
 * @see proto service: mainchain.enterprise.v1.EnterpriseUndPurchaseOrder
 */
export const getEnterpriseUndPurchaseOrder = buildQuery<QueryEnterpriseUndPurchaseOrderRequest, QueryEnterpriseUndPurchaseOrderResponse>({
  encode: QueryEnterpriseUndPurchaseOrderRequest.encode,
  decode: QueryEnterpriseUndPurchaseOrderResponse.decode,
  service: "mainchain.enterprise.v1.Query",
  method: "EnterpriseUndPurchaseOrder",
  deps: [QueryEnterpriseUndPurchaseOrderRequest, QueryEnterpriseUndPurchaseOrderResponse]
});
/**
 * EnterpriseUndPurchaseOrders queries all current purchase orders.
 * @name getEnterpriseUndPurchaseOrders
 * @package mainchain.enterprise.v1
 * @see proto service: mainchain.enterprise.v1.EnterpriseUndPurchaseOrders
 */
export const getEnterpriseUndPurchaseOrders = buildQuery<QueryEnterpriseUndPurchaseOrdersRequest, QueryEnterpriseUndPurchaseOrdersResponse>({
  encode: QueryEnterpriseUndPurchaseOrdersRequest.encode,
  decode: QueryEnterpriseUndPurchaseOrdersResponse.decode,
  service: "mainchain.enterprise.v1.Query",
  method: "EnterpriseUndPurchaseOrders",
  deps: [QueryEnterpriseUndPurchaseOrdersRequest, QueryEnterpriseUndPurchaseOrdersResponse]
});
/**
 * LockedUndByAddress queries an account address for their locked FUND
 * @name getLockedUndByAddress
 * @package mainchain.enterprise.v1
 * @see proto service: mainchain.enterprise.v1.LockedUndByAddress
 */
export const getLockedUndByAddress = buildQuery<QueryLockedUndByAddressRequest, QueryLockedUndByAddressResponse>({
  encode: QueryLockedUndByAddressRequest.encode,
  decode: QueryLockedUndByAddressResponse.decode,
  service: "mainchain.enterprise.v1.Query",
  method: "LockedUndByAddress",
  deps: [QueryLockedUndByAddressRequest, QueryLockedUndByAddressResponse]
});
/**
 * TotalLocked queries the total locked FUND
 * @name getTotalLocked
 * @package mainchain.enterprise.v1
 * @see proto service: mainchain.enterprise.v1.TotalLocked
 */
export const getTotalLocked = buildQuery<QueryTotalLockedRequest, QueryTotalLockedResponse>({
  encode: QueryTotalLockedRequest.encode,
  decode: QueryTotalLockedResponse.decode,
  service: "mainchain.enterprise.v1.Query",
  method: "TotalLocked",
  deps: [QueryTotalLockedRequest, QueryTotalLockedResponse]
});
/**
 * Whitelist queries whitelisted addresses authorised to raise new purchase
 * orders
 * @name getWhitelist
 * @package mainchain.enterprise.v1
 * @see proto service: mainchain.enterprise.v1.Whitelist
 */
export const getWhitelist = buildQuery<QueryWhitelistRequest, QueryWhitelistResponse>({
  encode: QueryWhitelistRequest.encode,
  decode: QueryWhitelistResponse.decode,
  service: "mainchain.enterprise.v1.Query",
  method: "Whitelist",
  deps: [QueryWhitelistRequest, QueryWhitelistResponse]
});
/**
 * Whitelisted queries whether or not the given address is authorised to raise
 * new purchase orders
 * @name getWhitelisted
 * @package mainchain.enterprise.v1
 * @see proto service: mainchain.enterprise.v1.Whitelisted
 */
export const getWhitelisted = buildQuery<QueryWhitelistedRequest, QueryWhitelistedResponse>({
  encode: QueryWhitelistedRequest.encode,
  decode: QueryWhitelistedResponse.decode,
  service: "mainchain.enterprise.v1.Query",
  method: "Whitelisted",
  deps: [QueryWhitelistedRequest, QueryWhitelistedResponse]
});
/**
 * EnterpriseAccount queries an account address for their locked FUND and
 * other data
 * @name getEnterpriseAccount
 * @package mainchain.enterprise.v1
 * @see proto service: mainchain.enterprise.v1.EnterpriseAccount
 */
export const getEnterpriseAccount = buildQuery<QueryEnterpriseAccountRequest, QueryEnterpriseAccountResponse>({
  encode: QueryEnterpriseAccountRequest.encode,
  decode: QueryEnterpriseAccountResponse.decode,
  service: "mainchain.enterprise.v1.Query",
  method: "EnterpriseAccount",
  deps: [QueryEnterpriseAccountRequest, QueryEnterpriseAccountResponse]
});
/**
 * TotalSpentEFUND queries the total eFUND usage to date - i.e. the amount
 * used to pay fees
 * @name getTotalSpentEFUND
 * @package mainchain.enterprise.v1
 * @see proto service: mainchain.enterprise.v1.TotalSpentEFUND
 */
export const getTotalSpentEFUND = buildQuery<QueryTotalSpentEFUNDRequest, QueryTotalSpentEFUNDResponse>({
  encode: QueryTotalSpentEFUNDRequest.encode,
  decode: QueryTotalSpentEFUNDResponse.decode,
  service: "mainchain.enterprise.v1.Query",
  method: "TotalSpentEFUND",
  deps: [QueryTotalSpentEFUNDRequest, QueryTotalSpentEFUNDResponse]
});
/**
 * SpentEFUNDByAddress queries the total eFUND usage to date for a given
 * address, i.e. the amount used to pay fees
 * @name getSpentEFUNDByAddress
 * @package mainchain.enterprise.v1
 * @see proto service: mainchain.enterprise.v1.SpentEFUNDByAddress
 */
export const getSpentEFUNDByAddress = buildQuery<QuerySpentEFUNDByAddressRequest, QuerySpentEFUNDByAddressResponse>({
  encode: QuerySpentEFUNDByAddressRequest.encode,
  decode: QuerySpentEFUNDByAddressResponse.decode,
  service: "mainchain.enterprise.v1.Query",
  method: "SpentEFUNDByAddress",
  deps: [QuerySpentEFUNDByAddressRequest, QuerySpentEFUNDByAddressResponse]
});