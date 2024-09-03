//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { PurchaseOrderStatus, Params, ParamsAmino, ParamsSDKType, EnterpriseUndPurchaseOrder, EnterpriseUndPurchaseOrderAmino, EnterpriseUndPurchaseOrderSDKType, UndSupply, UndSupplyAmino, UndSupplySDKType, EnterpriseUserAccount, EnterpriseUserAccountAmino, EnterpriseUserAccountSDKType } from "./enterprise";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/mainchain.enterprise.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/mainchain.enterprise.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryEnterpriseUndPurchaseOrderRequest is the request type for the Query/EnterpriseUndPurchaseOrder RPC method. */
export interface QueryEnterpriseUndPurchaseOrderRequest {
  /** purchase_order_id defines the PO to query for. */
  purchaseOrderId: bigint;
}
export interface QueryEnterpriseUndPurchaseOrderRequestProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrderRequest";
  value: Uint8Array;
}
/** QueryEnterpriseUndPurchaseOrderRequest is the request type for the Query/EnterpriseUndPurchaseOrder RPC method. */
export interface QueryEnterpriseUndPurchaseOrderRequestAmino {
  /** purchase_order_id defines the PO to query for. */
  purchase_order_id?: string;
}
export interface QueryEnterpriseUndPurchaseOrderRequestAminoMsg {
  type: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrderRequest";
  value: QueryEnterpriseUndPurchaseOrderRequestAmino;
}
/** QueryEnterpriseUndPurchaseOrderRequest is the request type for the Query/EnterpriseUndPurchaseOrder RPC method. */
export interface QueryEnterpriseUndPurchaseOrderRequestSDKType {
  purchase_order_id: bigint;
}
/** QueryEnterpriseUndPurchaseOrderResponse is the response type for the Query/EnterpriseUndPurchaseOrder RPC method. */
export interface QueryEnterpriseUndPurchaseOrderResponse {
  purchaseOrder: EnterpriseUndPurchaseOrder;
}
export interface QueryEnterpriseUndPurchaseOrderResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrderResponse";
  value: Uint8Array;
}
/** QueryEnterpriseUndPurchaseOrderResponse is the response type for the Query/EnterpriseUndPurchaseOrder RPC method. */
export interface QueryEnterpriseUndPurchaseOrderResponseAmino {
  purchase_order?: EnterpriseUndPurchaseOrderAmino;
}
export interface QueryEnterpriseUndPurchaseOrderResponseAminoMsg {
  type: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrderResponse";
  value: QueryEnterpriseUndPurchaseOrderResponseAmino;
}
/** QueryEnterpriseUndPurchaseOrderResponse is the response type for the Query/EnterpriseUndPurchaseOrder RPC method. */
export interface QueryEnterpriseUndPurchaseOrderResponseSDKType {
  purchase_order: EnterpriseUndPurchaseOrderSDKType;
}
/**
 * QueryEnterpriseUndPurchaseOrdersRequest is the request type for the Query/EnterpriseUndPurchaseOrders RPC
 * method
 */
export interface QueryEnterpriseUndPurchaseOrdersRequest {
  pagination?: PageRequest;
  purchaser: string;
  status: PurchaseOrderStatus;
}
export interface QueryEnterpriseUndPurchaseOrdersRequestProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrdersRequest";
  value: Uint8Array;
}
/**
 * QueryEnterpriseUndPurchaseOrdersRequest is the request type for the Query/EnterpriseUndPurchaseOrders RPC
 * method
 */
export interface QueryEnterpriseUndPurchaseOrdersRequestAmino {
  pagination?: PageRequestAmino;
  purchaser?: string;
  status?: PurchaseOrderStatus;
}
export interface QueryEnterpriseUndPurchaseOrdersRequestAminoMsg {
  type: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrdersRequest";
  value: QueryEnterpriseUndPurchaseOrdersRequestAmino;
}
/**
 * QueryEnterpriseUndPurchaseOrdersRequest is the request type for the Query/EnterpriseUndPurchaseOrders RPC
 * method
 */
export interface QueryEnterpriseUndPurchaseOrdersRequestSDKType {
  pagination?: PageRequestSDKType;
  purchaser: string;
  status: PurchaseOrderStatus;
}
/**
 * QueryEnterpriseUndPurchaseOrdersResponse is the response type for the Query/EnterpriseUndPurchaseOrders RPC
 * method
 */
export interface QueryEnterpriseUndPurchaseOrdersResponse {
  /** purchase_orders is the list of all purchase orders */
  purchaseOrders: EnterpriseUndPurchaseOrder[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryEnterpriseUndPurchaseOrdersResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrdersResponse";
  value: Uint8Array;
}
/**
 * QueryEnterpriseUndPurchaseOrdersResponse is the response type for the Query/EnterpriseUndPurchaseOrders RPC
 * method
 */
export interface QueryEnterpriseUndPurchaseOrdersResponseAmino {
  /** purchase_orders is the list of all purchase orders */
  purchase_orders?: EnterpriseUndPurchaseOrderAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryEnterpriseUndPurchaseOrdersResponseAminoMsg {
  type: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrdersResponse";
  value: QueryEnterpriseUndPurchaseOrdersResponseAmino;
}
/**
 * QueryEnterpriseUndPurchaseOrdersResponse is the response type for the Query/EnterpriseUndPurchaseOrders RPC
 * method
 */
export interface QueryEnterpriseUndPurchaseOrdersResponseSDKType {
  purchase_orders: EnterpriseUndPurchaseOrderSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryLockedUndByAddressRequest is the request type for the Query/LockedUndByAddress RPC method */
export interface QueryLockedUndByAddressRequest {
  /** owner is the address to query */
  owner: string;
}
export interface QueryLockedUndByAddressRequestProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryLockedUndByAddressRequest";
  value: Uint8Array;
}
/** QueryLockedUndByAddressRequest is the request type for the Query/LockedUndByAddress RPC method */
export interface QueryLockedUndByAddressRequestAmino {
  /** owner is the address to query */
  owner?: string;
}
export interface QueryLockedUndByAddressRequestAminoMsg {
  type: "/mainchain.enterprise.v1.QueryLockedUndByAddressRequest";
  value: QueryLockedUndByAddressRequestAmino;
}
/** QueryLockedUndByAddressRequest is the request type for the Query/LockedUndByAddress RPC method */
export interface QueryLockedUndByAddressRequestSDKType {
  owner: string;
}
/** QueryLockedUndByAddressResponse is the response type for the Query/LockedUndByAddress RPC method */
export interface QueryLockedUndByAddressResponse {
  amount: Coin;
}
export interface QueryLockedUndByAddressResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryLockedUndByAddressResponse";
  value: Uint8Array;
}
/** QueryLockedUndByAddressResponse is the response type for the Query/LockedUndByAddress RPC method */
export interface QueryLockedUndByAddressResponseAmino {
  amount?: CoinAmino;
}
export interface QueryLockedUndByAddressResponseAminoMsg {
  type: "/mainchain.enterprise.v1.QueryLockedUndByAddressResponse";
  value: QueryLockedUndByAddressResponseAmino;
}
/** QueryLockedUndByAddressResponse is the response type for the Query/LockedUndByAddress RPC method */
export interface QueryLockedUndByAddressResponseSDKType {
  amount: CoinSDKType;
}
/** QueryTotalLockedRequest is the request type for the Query/TotalLocked RPC method */
export interface QueryTotalLockedRequest {}
export interface QueryTotalLockedRequestProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalLockedRequest";
  value: Uint8Array;
}
/** QueryTotalLockedRequest is the request type for the Query/TotalLocked RPC method */
export interface QueryTotalLockedRequestAmino {}
export interface QueryTotalLockedRequestAminoMsg {
  type: "/mainchain.enterprise.v1.QueryTotalLockedRequest";
  value: QueryTotalLockedRequestAmino;
}
/** QueryTotalLockedRequest is the request type for the Query/TotalLocked RPC method */
export interface QueryTotalLockedRequestSDKType {}
/** QueryTotalLockedResponse is the response type for the Query/TotalLocked RPC method */
export interface QueryTotalLockedResponse {
  amount: Coin;
}
export interface QueryTotalLockedResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalLockedResponse";
  value: Uint8Array;
}
/** QueryTotalLockedResponse is the response type for the Query/TotalLocked RPC method */
export interface QueryTotalLockedResponseAmino {
  amount?: CoinAmino;
}
export interface QueryTotalLockedResponseAminoMsg {
  type: "/mainchain.enterprise.v1.QueryTotalLockedResponse";
  value: QueryTotalLockedResponseAmino;
}
/** QueryTotalLockedResponse is the response type for the Query/TotalLocked RPC method */
export interface QueryTotalLockedResponseSDKType {
  amount: CoinSDKType;
}
/** QueryTotalUnlockedRequest is the request type for the Query/TotalUnlocked RPC method */
export interface QueryTotalUnlockedRequest {}
export interface QueryTotalUnlockedRequestProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalUnlockedRequest";
  value: Uint8Array;
}
/** QueryTotalUnlockedRequest is the request type for the Query/TotalUnlocked RPC method */
export interface QueryTotalUnlockedRequestAmino {}
export interface QueryTotalUnlockedRequestAminoMsg {
  type: "/mainchain.enterprise.v1.QueryTotalUnlockedRequest";
  value: QueryTotalUnlockedRequestAmino;
}
/** QueryTotalUnlockedRequest is the request type for the Query/TotalUnlocked RPC method */
export interface QueryTotalUnlockedRequestSDKType {}
/** QueryTotalUnlockedResponse is the response type for the Query/TotalUnlocked RPC method */
export interface QueryTotalUnlockedResponse {
  amount: Coin;
}
export interface QueryTotalUnlockedResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalUnlockedResponse";
  value: Uint8Array;
}
/** QueryTotalUnlockedResponse is the response type for the Query/TotalUnlocked RPC method */
export interface QueryTotalUnlockedResponseAmino {
  amount?: CoinAmino;
}
export interface QueryTotalUnlockedResponseAminoMsg {
  type: "/mainchain.enterprise.v1.QueryTotalUnlockedResponse";
  value: QueryTotalUnlockedResponseAmino;
}
/** QueryTotalUnlockedResponse is the response type for the Query/TotalUnlocked RPC method */
export interface QueryTotalUnlockedResponseSDKType {
  amount: CoinSDKType;
}
/** QueryEnterpriseSupplyRequest is the request type for the Query/EnterpriseSupply RPC method */
export interface QueryEnterpriseSupplyRequest {}
export interface QueryEnterpriseSupplyRequestProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseSupplyRequest";
  value: Uint8Array;
}
/** QueryEnterpriseSupplyRequest is the request type for the Query/EnterpriseSupply RPC method */
export interface QueryEnterpriseSupplyRequestAmino {}
export interface QueryEnterpriseSupplyRequestAminoMsg {
  type: "/mainchain.enterprise.v1.QueryEnterpriseSupplyRequest";
  value: QueryEnterpriseSupplyRequestAmino;
}
/** QueryEnterpriseSupplyRequest is the request type for the Query/EnterpriseSupply RPC method */
export interface QueryEnterpriseSupplyRequestSDKType {}
/** QueryEnterpriseSupplyResponse is the response type for the Query/EnterpriseSupply RPC method */
export interface QueryEnterpriseSupplyResponse {
  supply: UndSupply;
}
export interface QueryEnterpriseSupplyResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseSupplyResponse";
  value: Uint8Array;
}
/** QueryEnterpriseSupplyResponse is the response type for the Query/EnterpriseSupply RPC method */
export interface QueryEnterpriseSupplyResponseAmino {
  supply?: UndSupplyAmino;
}
export interface QueryEnterpriseSupplyResponseAminoMsg {
  type: "/mainchain.enterprise.v1.QueryEnterpriseSupplyResponse";
  value: QueryEnterpriseSupplyResponseAmino;
}
/** QueryEnterpriseSupplyResponse is the response type for the Query/EnterpriseSupply RPC method */
export interface QueryEnterpriseSupplyResponseSDKType {
  supply: UndSupplySDKType;
}
/** QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC method */
export interface QueryTotalSupplyRequest {
  pagination?: PageRequest;
}
export interface QueryTotalSupplyRequestProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalSupplyRequest";
  value: Uint8Array;
}
/** QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC method */
export interface QueryTotalSupplyRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryTotalSupplyRequestAminoMsg {
  type: "/mainchain.enterprise.v1.QueryTotalSupplyRequest";
  value: QueryTotalSupplyRequestAmino;
}
/** QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC method */
export interface QueryTotalSupplyRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC method */
export interface QueryTotalSupplyResponse {
  supply: Coin[];
  pagination?: PageResponse;
}
export interface QueryTotalSupplyResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalSupplyResponse";
  value: Uint8Array;
}
/** QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC method */
export interface QueryTotalSupplyResponseAmino {
  supply?: CoinAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryTotalSupplyResponseAminoMsg {
  type: "/mainchain.enterprise.v1.QueryTotalSupplyResponse";
  value: QueryTotalSupplyResponseAmino;
}
/** QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC method */
export interface QueryTotalSupplyResponseSDKType {
  supply: CoinSDKType[];
  pagination?: PageResponseSDKType;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequest {
  /** denom is the coin denom to query balances for. */
  denom: string;
}
export interface QuerySupplyOfRequestProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QuerySupplyOfRequest";
  value: Uint8Array;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequestAmino {
  /** denom is the coin denom to query balances for. */
  denom?: string;
}
export interface QuerySupplyOfRequestAminoMsg {
  type: "/mainchain.enterprise.v1.QuerySupplyOfRequest";
  value: QuerySupplyOfRequestAmino;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequestSDKType {
  denom: string;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponse {
  /** amount is the supply of the coin. */
  amount: Coin;
}
export interface QuerySupplyOfResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QuerySupplyOfResponse";
  value: Uint8Array;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponseAmino {
  /** amount is the supply of the coin. */
  amount?: CoinAmino;
}
export interface QuerySupplyOfResponseAminoMsg {
  type: "/mainchain.enterprise.v1.QuerySupplyOfResponse";
  value: QuerySupplyOfResponseAmino;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponseSDKType {
  amount: CoinSDKType;
}
/** QueryWhitelistRequest is the request type for the Query/Whitelist RPC method. */
export interface QueryWhitelistRequest {}
export interface QueryWhitelistRequestProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryWhitelistRequest";
  value: Uint8Array;
}
/** QueryWhitelistRequest is the request type for the Query/Whitelist RPC method. */
export interface QueryWhitelistRequestAmino {}
export interface QueryWhitelistRequestAminoMsg {
  type: "/mainchain.enterprise.v1.QueryWhitelistRequest";
  value: QueryWhitelistRequestAmino;
}
/** QueryWhitelistRequest is the request type for the Query/Whitelist RPC method. */
export interface QueryWhitelistRequestSDKType {}
/** QueryWhitelistResponse is the response type for the Query/Whitelist RPC method. */
export interface QueryWhitelistResponse {
  addresses: string[];
}
export interface QueryWhitelistResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryWhitelistResponse";
  value: Uint8Array;
}
/** QueryWhitelistResponse is the response type for the Query/Whitelist RPC method. */
export interface QueryWhitelistResponseAmino {
  addresses?: string[];
}
export interface QueryWhitelistResponseAminoMsg {
  type: "/mainchain.enterprise.v1.QueryWhitelistResponse";
  value: QueryWhitelistResponseAmino;
}
/** QueryWhitelistResponse is the response type for the Query/Whitelist RPC method. */
export interface QueryWhitelistResponseSDKType {
  addresses: string[];
}
/** QueryWhitelistedRequest is the request type for the Query/Whitelisted RPC method. */
export interface QueryWhitelistedRequest {
  /** address is the address to query */
  address: string;
}
export interface QueryWhitelistedRequestProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryWhitelistedRequest";
  value: Uint8Array;
}
/** QueryWhitelistedRequest is the request type for the Query/Whitelisted RPC method. */
export interface QueryWhitelistedRequestAmino {
  /** address is the address to query */
  address?: string;
}
export interface QueryWhitelistedRequestAminoMsg {
  type: "/mainchain.enterprise.v1.QueryWhitelistedRequest";
  value: QueryWhitelistedRequestAmino;
}
/** QueryWhitelistedRequest is the request type for the Query/Whitelisted RPC method. */
export interface QueryWhitelistedRequestSDKType {
  address: string;
}
/** QueryWhitelistedResponse is the response type for the Query/Whitelisted RPC method. */
export interface QueryWhitelistedResponse {
  address: string;
  whitelisted: boolean;
}
export interface QueryWhitelistedResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryWhitelistedResponse";
  value: Uint8Array;
}
/** QueryWhitelistedResponse is the response type for the Query/Whitelisted RPC method. */
export interface QueryWhitelistedResponseAmino {
  address?: string;
  whitelisted?: boolean;
}
export interface QueryWhitelistedResponseAminoMsg {
  type: "/mainchain.enterprise.v1.QueryWhitelistedResponse";
  value: QueryWhitelistedResponseAmino;
}
/** QueryWhitelistedResponse is the response type for the Query/Whitelisted RPC method. */
export interface QueryWhitelistedResponseSDKType {
  address: string;
  whitelisted: boolean;
}
/** QueryEnterpriseAccountRequest is the request type for the Query/EnterpriseAccount RPC method. */
export interface QueryEnterpriseAccountRequest {
  /** address is the address to query */
  address: string;
}
export interface QueryEnterpriseAccountRequestProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseAccountRequest";
  value: Uint8Array;
}
/** QueryEnterpriseAccountRequest is the request type for the Query/EnterpriseAccount RPC method. */
export interface QueryEnterpriseAccountRequestAmino {
  /** address is the address to query */
  address?: string;
}
export interface QueryEnterpriseAccountRequestAminoMsg {
  type: "/mainchain.enterprise.v1.QueryEnterpriseAccountRequest";
  value: QueryEnterpriseAccountRequestAmino;
}
/** QueryEnterpriseAccountRequest is the request type for the Query/EnterpriseAccount RPC method. */
export interface QueryEnterpriseAccountRequestSDKType {
  address: string;
}
/** QueryEnterpriseAccountResponse is the response type for the Query/EnterpriseAccount RPC method. */
export interface QueryEnterpriseAccountResponse {
  account: EnterpriseUserAccount;
}
export interface QueryEnterpriseAccountResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseAccountResponse";
  value: Uint8Array;
}
/** QueryEnterpriseAccountResponse is the response type for the Query/EnterpriseAccount RPC method. */
export interface QueryEnterpriseAccountResponseAmino {
  account?: EnterpriseUserAccountAmino;
}
export interface QueryEnterpriseAccountResponseAminoMsg {
  type: "/mainchain.enterprise.v1.QueryEnterpriseAccountResponse";
  value: QueryEnterpriseAccountResponseAmino;
}
/** QueryEnterpriseAccountResponse is the response type for the Query/EnterpriseAccount RPC method. */
export interface QueryEnterpriseAccountResponseSDKType {
  account: EnterpriseUserAccountSDKType;
}
/** QueryTotalSpentEFUNDRequest is the request type for the Query/TotalSpentEFUND RPC method. */
export interface QueryTotalSpentEFUNDRequest {}
export interface QueryTotalSpentEFUNDRequestProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalSpentEFUNDRequest";
  value: Uint8Array;
}
/** QueryTotalSpentEFUNDRequest is the request type for the Query/TotalSpentEFUND RPC method. */
export interface QueryTotalSpentEFUNDRequestAmino {}
export interface QueryTotalSpentEFUNDRequestAminoMsg {
  type: "/mainchain.enterprise.v1.QueryTotalSpentEFUNDRequest";
  value: QueryTotalSpentEFUNDRequestAmino;
}
/** QueryTotalSpentEFUNDRequest is the request type for the Query/TotalSpentEFUND RPC method. */
export interface QueryTotalSpentEFUNDRequestSDKType {}
/** QueryTotalSpentEFUNDResponse is the response type for the Query/TotalSpentEFUND RPC method. */
export interface QueryTotalSpentEFUNDResponse {
  amount: Coin;
}
export interface QueryTotalSpentEFUNDResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalSpentEFUNDResponse";
  value: Uint8Array;
}
/** QueryTotalSpentEFUNDResponse is the response type for the Query/TotalSpentEFUND RPC method. */
export interface QueryTotalSpentEFUNDResponseAmino {
  amount?: CoinAmino;
}
export interface QueryTotalSpentEFUNDResponseAminoMsg {
  type: "/mainchain.enterprise.v1.QueryTotalSpentEFUNDResponse";
  value: QueryTotalSpentEFUNDResponseAmino;
}
/** QueryTotalSpentEFUNDResponse is the response type for the Query/TotalSpentEFUND RPC method. */
export interface QueryTotalSpentEFUNDResponseSDKType {
  amount: CoinSDKType;
}
/** QuerySpentEFUNDByAddressRequest is the request type for the Query/SpentEFUNDByAddress RPC method. */
export interface QuerySpentEFUNDByAddressRequest {
  /** address is the address to query */
  address: string;
}
export interface QuerySpentEFUNDByAddressRequestProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QuerySpentEFUNDByAddressRequest";
  value: Uint8Array;
}
/** QuerySpentEFUNDByAddressRequest is the request type for the Query/SpentEFUNDByAddress RPC method. */
export interface QuerySpentEFUNDByAddressRequestAmino {
  /** address is the address to query */
  address?: string;
}
export interface QuerySpentEFUNDByAddressRequestAminoMsg {
  type: "/mainchain.enterprise.v1.QuerySpentEFUNDByAddressRequest";
  value: QuerySpentEFUNDByAddressRequestAmino;
}
/** QuerySpentEFUNDByAddressRequest is the request type for the Query/SpentEFUNDByAddress RPC method. */
export interface QuerySpentEFUNDByAddressRequestSDKType {
  address: string;
}
/** QuerySpentEFUNDByAddressResponse is the response type for the Query/SpentEFUNDByAddress RPC method. */
export interface QuerySpentEFUNDByAddressResponse {
  amount: Coin;
}
export interface QuerySpentEFUNDByAddressResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.QuerySpentEFUNDByAddressResponse";
  value: Uint8Array;
}
/** QuerySpentEFUNDByAddressResponse is the response type for the Query/SpentEFUNDByAddress RPC method. */
export interface QuerySpentEFUNDByAddressResponseAmino {
  amount?: CoinAmino;
}
export interface QuerySpentEFUNDByAddressResponseAminoMsg {
  type: "/mainchain.enterprise.v1.QuerySpentEFUNDByAddressResponse";
  value: QuerySpentEFUNDByAddressResponseAmino;
}
/** QuerySpentEFUNDByAddressResponse is the response type for the Query/SpentEFUNDByAddress RPC method. */
export interface QuerySpentEFUNDByAddressResponseSDKType {
  amount: CoinSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryEnterpriseUndPurchaseOrderRequest(): QueryEnterpriseUndPurchaseOrderRequest {
  return {
    purchaseOrderId: BigInt(0)
  };
}
export const QueryEnterpriseUndPurchaseOrderRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrderRequest",
  is(o: any): o is QueryEnterpriseUndPurchaseOrderRequest {
    return o && (o.$typeUrl === QueryEnterpriseUndPurchaseOrderRequest.typeUrl || typeof o.purchaseOrderId === "bigint");
  },
  isSDK(o: any): o is QueryEnterpriseUndPurchaseOrderRequestSDKType {
    return o && (o.$typeUrl === QueryEnterpriseUndPurchaseOrderRequest.typeUrl || typeof o.purchase_order_id === "bigint");
  },
  isAmino(o: any): o is QueryEnterpriseUndPurchaseOrderRequestAmino {
    return o && (o.$typeUrl === QueryEnterpriseUndPurchaseOrderRequest.typeUrl || typeof o.purchase_order_id === "bigint");
  },
  encode(message: QueryEnterpriseUndPurchaseOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.purchaseOrderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.purchaseOrderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseUndPurchaseOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEnterpriseUndPurchaseOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaseOrderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEnterpriseUndPurchaseOrderRequest>): QueryEnterpriseUndPurchaseOrderRequest {
    const message = createBaseQueryEnterpriseUndPurchaseOrderRequest();
    message.purchaseOrderId = object.purchaseOrderId !== undefined && object.purchaseOrderId !== null ? BigInt(object.purchaseOrderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryEnterpriseUndPurchaseOrderRequestAmino): QueryEnterpriseUndPurchaseOrderRequest {
    const message = createBaseQueryEnterpriseUndPurchaseOrderRequest();
    if (object.purchase_order_id !== undefined && object.purchase_order_id !== null) {
      message.purchaseOrderId = BigInt(object.purchase_order_id);
    }
    return message;
  },
  toAmino(message: QueryEnterpriseUndPurchaseOrderRequest): QueryEnterpriseUndPurchaseOrderRequestAmino {
    const obj: any = {};
    obj.purchase_order_id = message.purchaseOrderId !== BigInt(0) ? message.purchaseOrderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEnterpriseUndPurchaseOrderRequestAminoMsg): QueryEnterpriseUndPurchaseOrderRequest {
    return QueryEnterpriseUndPurchaseOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEnterpriseUndPurchaseOrderRequestProtoMsg): QueryEnterpriseUndPurchaseOrderRequest {
    return QueryEnterpriseUndPurchaseOrderRequest.decode(message.value);
  },
  toProto(message: QueryEnterpriseUndPurchaseOrderRequest): Uint8Array {
    return QueryEnterpriseUndPurchaseOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEnterpriseUndPurchaseOrderRequest): QueryEnterpriseUndPurchaseOrderRequestProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrderRequest",
      value: QueryEnterpriseUndPurchaseOrderRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEnterpriseUndPurchaseOrderRequest.typeUrl, QueryEnterpriseUndPurchaseOrderRequest);
function createBaseQueryEnterpriseUndPurchaseOrderResponse(): QueryEnterpriseUndPurchaseOrderResponse {
  return {
    purchaseOrder: EnterpriseUndPurchaseOrder.fromPartial({})
  };
}
export const QueryEnterpriseUndPurchaseOrderResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrderResponse",
  is(o: any): o is QueryEnterpriseUndPurchaseOrderResponse {
    return o && (o.$typeUrl === QueryEnterpriseUndPurchaseOrderResponse.typeUrl || EnterpriseUndPurchaseOrder.is(o.purchaseOrder));
  },
  isSDK(o: any): o is QueryEnterpriseUndPurchaseOrderResponseSDKType {
    return o && (o.$typeUrl === QueryEnterpriseUndPurchaseOrderResponse.typeUrl || EnterpriseUndPurchaseOrder.isSDK(o.purchase_order));
  },
  isAmino(o: any): o is QueryEnterpriseUndPurchaseOrderResponseAmino {
    return o && (o.$typeUrl === QueryEnterpriseUndPurchaseOrderResponse.typeUrl || EnterpriseUndPurchaseOrder.isAmino(o.purchase_order));
  },
  encode(message: QueryEnterpriseUndPurchaseOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.purchaseOrder !== undefined) {
      EnterpriseUndPurchaseOrder.encode(message.purchaseOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseUndPurchaseOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEnterpriseUndPurchaseOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaseOrder = EnterpriseUndPurchaseOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEnterpriseUndPurchaseOrderResponse>): QueryEnterpriseUndPurchaseOrderResponse {
    const message = createBaseQueryEnterpriseUndPurchaseOrderResponse();
    message.purchaseOrder = object.purchaseOrder !== undefined && object.purchaseOrder !== null ? EnterpriseUndPurchaseOrder.fromPartial(object.purchaseOrder) : undefined;
    return message;
  },
  fromAmino(object: QueryEnterpriseUndPurchaseOrderResponseAmino): QueryEnterpriseUndPurchaseOrderResponse {
    const message = createBaseQueryEnterpriseUndPurchaseOrderResponse();
    if (object.purchase_order !== undefined && object.purchase_order !== null) {
      message.purchaseOrder = EnterpriseUndPurchaseOrder.fromAmino(object.purchase_order);
    }
    return message;
  },
  toAmino(message: QueryEnterpriseUndPurchaseOrderResponse): QueryEnterpriseUndPurchaseOrderResponseAmino {
    const obj: any = {};
    obj.purchase_order = message.purchaseOrder ? EnterpriseUndPurchaseOrder.toAmino(message.purchaseOrder) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEnterpriseUndPurchaseOrderResponseAminoMsg): QueryEnterpriseUndPurchaseOrderResponse {
    return QueryEnterpriseUndPurchaseOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEnterpriseUndPurchaseOrderResponseProtoMsg): QueryEnterpriseUndPurchaseOrderResponse {
    return QueryEnterpriseUndPurchaseOrderResponse.decode(message.value);
  },
  toProto(message: QueryEnterpriseUndPurchaseOrderResponse): Uint8Array {
    return QueryEnterpriseUndPurchaseOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEnterpriseUndPurchaseOrderResponse): QueryEnterpriseUndPurchaseOrderResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrderResponse",
      value: QueryEnterpriseUndPurchaseOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEnterpriseUndPurchaseOrderResponse.typeUrl, QueryEnterpriseUndPurchaseOrderResponse);
function createBaseQueryEnterpriseUndPurchaseOrdersRequest(): QueryEnterpriseUndPurchaseOrdersRequest {
  return {
    pagination: undefined,
    purchaser: "",
    status: 0
  };
}
export const QueryEnterpriseUndPurchaseOrdersRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrdersRequest",
  is(o: any): o is QueryEnterpriseUndPurchaseOrdersRequest {
    return o && (o.$typeUrl === QueryEnterpriseUndPurchaseOrdersRequest.typeUrl || typeof o.purchaser === "string" && isSet(o.status));
  },
  isSDK(o: any): o is QueryEnterpriseUndPurchaseOrdersRequestSDKType {
    return o && (o.$typeUrl === QueryEnterpriseUndPurchaseOrdersRequest.typeUrl || typeof o.purchaser === "string" && isSet(o.status));
  },
  isAmino(o: any): o is QueryEnterpriseUndPurchaseOrdersRequestAmino {
    return o && (o.$typeUrl === QueryEnterpriseUndPurchaseOrdersRequest.typeUrl || typeof o.purchaser === "string" && isSet(o.status));
  },
  encode(message: QueryEnterpriseUndPurchaseOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.purchaser !== "") {
      writer.uint32(18).string(message.purchaser);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseUndPurchaseOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEnterpriseUndPurchaseOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.purchaser = reader.string();
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEnterpriseUndPurchaseOrdersRequest>): QueryEnterpriseUndPurchaseOrdersRequest {
    const message = createBaseQueryEnterpriseUndPurchaseOrdersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.purchaser = object.purchaser ?? "";
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: QueryEnterpriseUndPurchaseOrdersRequestAmino): QueryEnterpriseUndPurchaseOrdersRequest {
    const message = createBaseQueryEnterpriseUndPurchaseOrdersRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.purchaser !== undefined && object.purchaser !== null) {
      message.purchaser = object.purchaser;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: QueryEnterpriseUndPurchaseOrdersRequest): QueryEnterpriseUndPurchaseOrdersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.purchaser = message.purchaser === "" ? undefined : message.purchaser;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: QueryEnterpriseUndPurchaseOrdersRequestAminoMsg): QueryEnterpriseUndPurchaseOrdersRequest {
    return QueryEnterpriseUndPurchaseOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEnterpriseUndPurchaseOrdersRequestProtoMsg): QueryEnterpriseUndPurchaseOrdersRequest {
    return QueryEnterpriseUndPurchaseOrdersRequest.decode(message.value);
  },
  toProto(message: QueryEnterpriseUndPurchaseOrdersRequest): Uint8Array {
    return QueryEnterpriseUndPurchaseOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEnterpriseUndPurchaseOrdersRequest): QueryEnterpriseUndPurchaseOrdersRequestProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrdersRequest",
      value: QueryEnterpriseUndPurchaseOrdersRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEnterpriseUndPurchaseOrdersRequest.typeUrl, QueryEnterpriseUndPurchaseOrdersRequest);
function createBaseQueryEnterpriseUndPurchaseOrdersResponse(): QueryEnterpriseUndPurchaseOrdersResponse {
  return {
    purchaseOrders: [],
    pagination: undefined
  };
}
export const QueryEnterpriseUndPurchaseOrdersResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrdersResponse",
  is(o: any): o is QueryEnterpriseUndPurchaseOrdersResponse {
    return o && (o.$typeUrl === QueryEnterpriseUndPurchaseOrdersResponse.typeUrl || Array.isArray(o.purchaseOrders) && (!o.purchaseOrders.length || EnterpriseUndPurchaseOrder.is(o.purchaseOrders[0])));
  },
  isSDK(o: any): o is QueryEnterpriseUndPurchaseOrdersResponseSDKType {
    return o && (o.$typeUrl === QueryEnterpriseUndPurchaseOrdersResponse.typeUrl || Array.isArray(o.purchase_orders) && (!o.purchase_orders.length || EnterpriseUndPurchaseOrder.isSDK(o.purchase_orders[0])));
  },
  isAmino(o: any): o is QueryEnterpriseUndPurchaseOrdersResponseAmino {
    return o && (o.$typeUrl === QueryEnterpriseUndPurchaseOrdersResponse.typeUrl || Array.isArray(o.purchase_orders) && (!o.purchase_orders.length || EnterpriseUndPurchaseOrder.isAmino(o.purchase_orders[0])));
  },
  encode(message: QueryEnterpriseUndPurchaseOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.purchaseOrders) {
      EnterpriseUndPurchaseOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseUndPurchaseOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEnterpriseUndPurchaseOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaseOrders.push(EnterpriseUndPurchaseOrder.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEnterpriseUndPurchaseOrdersResponse>): QueryEnterpriseUndPurchaseOrdersResponse {
    const message = createBaseQueryEnterpriseUndPurchaseOrdersResponse();
    message.purchaseOrders = object.purchaseOrders?.map(e => EnterpriseUndPurchaseOrder.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEnterpriseUndPurchaseOrdersResponseAmino): QueryEnterpriseUndPurchaseOrdersResponse {
    const message = createBaseQueryEnterpriseUndPurchaseOrdersResponse();
    message.purchaseOrders = object.purchase_orders?.map(e => EnterpriseUndPurchaseOrder.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryEnterpriseUndPurchaseOrdersResponse): QueryEnterpriseUndPurchaseOrdersResponseAmino {
    const obj: any = {};
    if (message.purchaseOrders) {
      obj.purchase_orders = message.purchaseOrders.map(e => e ? EnterpriseUndPurchaseOrder.toAmino(e) : undefined);
    } else {
      obj.purchase_orders = message.purchaseOrders;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEnterpriseUndPurchaseOrdersResponseAminoMsg): QueryEnterpriseUndPurchaseOrdersResponse {
    return QueryEnterpriseUndPurchaseOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEnterpriseUndPurchaseOrdersResponseProtoMsg): QueryEnterpriseUndPurchaseOrdersResponse {
    return QueryEnterpriseUndPurchaseOrdersResponse.decode(message.value);
  },
  toProto(message: QueryEnterpriseUndPurchaseOrdersResponse): Uint8Array {
    return QueryEnterpriseUndPurchaseOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEnterpriseUndPurchaseOrdersResponse): QueryEnterpriseUndPurchaseOrdersResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrdersResponse",
      value: QueryEnterpriseUndPurchaseOrdersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEnterpriseUndPurchaseOrdersResponse.typeUrl, QueryEnterpriseUndPurchaseOrdersResponse);
function createBaseQueryLockedUndByAddressRequest(): QueryLockedUndByAddressRequest {
  return {
    owner: ""
  };
}
export const QueryLockedUndByAddressRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryLockedUndByAddressRequest",
  is(o: any): o is QueryLockedUndByAddressRequest {
    return o && (o.$typeUrl === QueryLockedUndByAddressRequest.typeUrl || typeof o.owner === "string");
  },
  isSDK(o: any): o is QueryLockedUndByAddressRequestSDKType {
    return o && (o.$typeUrl === QueryLockedUndByAddressRequest.typeUrl || typeof o.owner === "string");
  },
  isAmino(o: any): o is QueryLockedUndByAddressRequestAmino {
    return o && (o.$typeUrl === QueryLockedUndByAddressRequest.typeUrl || typeof o.owner === "string");
  },
  encode(message: QueryLockedUndByAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockedUndByAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedUndByAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLockedUndByAddressRequest>): QueryLockedUndByAddressRequest {
    const message = createBaseQueryLockedUndByAddressRequest();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryLockedUndByAddressRequestAmino): QueryLockedUndByAddressRequest {
    const message = createBaseQueryLockedUndByAddressRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryLockedUndByAddressRequest): QueryLockedUndByAddressRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryLockedUndByAddressRequestAminoMsg): QueryLockedUndByAddressRequest {
    return QueryLockedUndByAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLockedUndByAddressRequestProtoMsg): QueryLockedUndByAddressRequest {
    return QueryLockedUndByAddressRequest.decode(message.value);
  },
  toProto(message: QueryLockedUndByAddressRequest): Uint8Array {
    return QueryLockedUndByAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLockedUndByAddressRequest): QueryLockedUndByAddressRequestProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryLockedUndByAddressRequest",
      value: QueryLockedUndByAddressRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLockedUndByAddressRequest.typeUrl, QueryLockedUndByAddressRequest);
function createBaseQueryLockedUndByAddressResponse(): QueryLockedUndByAddressResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const QueryLockedUndByAddressResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryLockedUndByAddressResponse",
  is(o: any): o is QueryLockedUndByAddressResponse {
    return o && (o.$typeUrl === QueryLockedUndByAddressResponse.typeUrl || Coin.is(o.amount));
  },
  isSDK(o: any): o is QueryLockedUndByAddressResponseSDKType {
    return o && (o.$typeUrl === QueryLockedUndByAddressResponse.typeUrl || Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is QueryLockedUndByAddressResponseAmino {
    return o && (o.$typeUrl === QueryLockedUndByAddressResponse.typeUrl || Coin.isAmino(o.amount));
  },
  encode(message: QueryLockedUndByAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockedUndByAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedUndByAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLockedUndByAddressResponse>): QueryLockedUndByAddressResponse {
    const message = createBaseQueryLockedUndByAddressResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: QueryLockedUndByAddressResponseAmino): QueryLockedUndByAddressResponse {
    const message = createBaseQueryLockedUndByAddressResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: QueryLockedUndByAddressResponse): QueryLockedUndByAddressResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLockedUndByAddressResponseAminoMsg): QueryLockedUndByAddressResponse {
    return QueryLockedUndByAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLockedUndByAddressResponseProtoMsg): QueryLockedUndByAddressResponse {
    return QueryLockedUndByAddressResponse.decode(message.value);
  },
  toProto(message: QueryLockedUndByAddressResponse): Uint8Array {
    return QueryLockedUndByAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLockedUndByAddressResponse): QueryLockedUndByAddressResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryLockedUndByAddressResponse",
      value: QueryLockedUndByAddressResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLockedUndByAddressResponse.typeUrl, QueryLockedUndByAddressResponse);
function createBaseQueryTotalLockedRequest(): QueryTotalLockedRequest {
  return {};
}
export const QueryTotalLockedRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalLockedRequest",
  is(o: any): o is QueryTotalLockedRequest {
    return o && o.$typeUrl === QueryTotalLockedRequest.typeUrl;
  },
  isSDK(o: any): o is QueryTotalLockedRequestSDKType {
    return o && o.$typeUrl === QueryTotalLockedRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTotalLockedRequestAmino {
    return o && o.$typeUrl === QueryTotalLockedRequest.typeUrl;
  },
  encode(_: QueryTotalLockedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLockedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLockedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryTotalLockedRequest>): QueryTotalLockedRequest {
    const message = createBaseQueryTotalLockedRequest();
    return message;
  },
  fromAmino(_: QueryTotalLockedRequestAmino): QueryTotalLockedRequest {
    const message = createBaseQueryTotalLockedRequest();
    return message;
  },
  toAmino(_: QueryTotalLockedRequest): QueryTotalLockedRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalLockedRequestAminoMsg): QueryTotalLockedRequest {
    return QueryTotalLockedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalLockedRequestProtoMsg): QueryTotalLockedRequest {
    return QueryTotalLockedRequest.decode(message.value);
  },
  toProto(message: QueryTotalLockedRequest): Uint8Array {
    return QueryTotalLockedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLockedRequest): QueryTotalLockedRequestProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryTotalLockedRequest",
      value: QueryTotalLockedRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalLockedRequest.typeUrl, QueryTotalLockedRequest);
function createBaseQueryTotalLockedResponse(): QueryTotalLockedResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const QueryTotalLockedResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalLockedResponse",
  is(o: any): o is QueryTotalLockedResponse {
    return o && (o.$typeUrl === QueryTotalLockedResponse.typeUrl || Coin.is(o.amount));
  },
  isSDK(o: any): o is QueryTotalLockedResponseSDKType {
    return o && (o.$typeUrl === QueryTotalLockedResponse.typeUrl || Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is QueryTotalLockedResponseAmino {
    return o && (o.$typeUrl === QueryTotalLockedResponse.typeUrl || Coin.isAmino(o.amount));
  },
  encode(message: QueryTotalLockedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLockedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLockedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalLockedResponse>): QueryTotalLockedResponse {
    const message = createBaseQueryTotalLockedResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: QueryTotalLockedResponseAmino): QueryTotalLockedResponse {
    const message = createBaseQueryTotalLockedResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: QueryTotalLockedResponse): QueryTotalLockedResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalLockedResponseAminoMsg): QueryTotalLockedResponse {
    return QueryTotalLockedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalLockedResponseProtoMsg): QueryTotalLockedResponse {
    return QueryTotalLockedResponse.decode(message.value);
  },
  toProto(message: QueryTotalLockedResponse): Uint8Array {
    return QueryTotalLockedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLockedResponse): QueryTotalLockedResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryTotalLockedResponse",
      value: QueryTotalLockedResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalLockedResponse.typeUrl, QueryTotalLockedResponse);
function createBaseQueryTotalUnlockedRequest(): QueryTotalUnlockedRequest {
  return {};
}
export const QueryTotalUnlockedRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalUnlockedRequest",
  is(o: any): o is QueryTotalUnlockedRequest {
    return o && o.$typeUrl === QueryTotalUnlockedRequest.typeUrl;
  },
  isSDK(o: any): o is QueryTotalUnlockedRequestSDKType {
    return o && o.$typeUrl === QueryTotalUnlockedRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTotalUnlockedRequestAmino {
    return o && o.$typeUrl === QueryTotalUnlockedRequest.typeUrl;
  },
  encode(_: QueryTotalUnlockedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalUnlockedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalUnlockedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryTotalUnlockedRequest>): QueryTotalUnlockedRequest {
    const message = createBaseQueryTotalUnlockedRequest();
    return message;
  },
  fromAmino(_: QueryTotalUnlockedRequestAmino): QueryTotalUnlockedRequest {
    const message = createBaseQueryTotalUnlockedRequest();
    return message;
  },
  toAmino(_: QueryTotalUnlockedRequest): QueryTotalUnlockedRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalUnlockedRequestAminoMsg): QueryTotalUnlockedRequest {
    return QueryTotalUnlockedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalUnlockedRequestProtoMsg): QueryTotalUnlockedRequest {
    return QueryTotalUnlockedRequest.decode(message.value);
  },
  toProto(message: QueryTotalUnlockedRequest): Uint8Array {
    return QueryTotalUnlockedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalUnlockedRequest): QueryTotalUnlockedRequestProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryTotalUnlockedRequest",
      value: QueryTotalUnlockedRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalUnlockedRequest.typeUrl, QueryTotalUnlockedRequest);
function createBaseQueryTotalUnlockedResponse(): QueryTotalUnlockedResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const QueryTotalUnlockedResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalUnlockedResponse",
  is(o: any): o is QueryTotalUnlockedResponse {
    return o && (o.$typeUrl === QueryTotalUnlockedResponse.typeUrl || Coin.is(o.amount));
  },
  isSDK(o: any): o is QueryTotalUnlockedResponseSDKType {
    return o && (o.$typeUrl === QueryTotalUnlockedResponse.typeUrl || Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is QueryTotalUnlockedResponseAmino {
    return o && (o.$typeUrl === QueryTotalUnlockedResponse.typeUrl || Coin.isAmino(o.amount));
  },
  encode(message: QueryTotalUnlockedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalUnlockedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalUnlockedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalUnlockedResponse>): QueryTotalUnlockedResponse {
    const message = createBaseQueryTotalUnlockedResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: QueryTotalUnlockedResponseAmino): QueryTotalUnlockedResponse {
    const message = createBaseQueryTotalUnlockedResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: QueryTotalUnlockedResponse): QueryTotalUnlockedResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalUnlockedResponseAminoMsg): QueryTotalUnlockedResponse {
    return QueryTotalUnlockedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalUnlockedResponseProtoMsg): QueryTotalUnlockedResponse {
    return QueryTotalUnlockedResponse.decode(message.value);
  },
  toProto(message: QueryTotalUnlockedResponse): Uint8Array {
    return QueryTotalUnlockedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalUnlockedResponse): QueryTotalUnlockedResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryTotalUnlockedResponse",
      value: QueryTotalUnlockedResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalUnlockedResponse.typeUrl, QueryTotalUnlockedResponse);
function createBaseQueryEnterpriseSupplyRequest(): QueryEnterpriseSupplyRequest {
  return {};
}
export const QueryEnterpriseSupplyRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseSupplyRequest",
  is(o: any): o is QueryEnterpriseSupplyRequest {
    return o && o.$typeUrl === QueryEnterpriseSupplyRequest.typeUrl;
  },
  isSDK(o: any): o is QueryEnterpriseSupplyRequestSDKType {
    return o && o.$typeUrl === QueryEnterpriseSupplyRequest.typeUrl;
  },
  isAmino(o: any): o is QueryEnterpriseSupplyRequestAmino {
    return o && o.$typeUrl === QueryEnterpriseSupplyRequest.typeUrl;
  },
  encode(_: QueryEnterpriseSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEnterpriseSupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryEnterpriseSupplyRequest>): QueryEnterpriseSupplyRequest {
    const message = createBaseQueryEnterpriseSupplyRequest();
    return message;
  },
  fromAmino(_: QueryEnterpriseSupplyRequestAmino): QueryEnterpriseSupplyRequest {
    const message = createBaseQueryEnterpriseSupplyRequest();
    return message;
  },
  toAmino(_: QueryEnterpriseSupplyRequest): QueryEnterpriseSupplyRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryEnterpriseSupplyRequestAminoMsg): QueryEnterpriseSupplyRequest {
    return QueryEnterpriseSupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEnterpriseSupplyRequestProtoMsg): QueryEnterpriseSupplyRequest {
    return QueryEnterpriseSupplyRequest.decode(message.value);
  },
  toProto(message: QueryEnterpriseSupplyRequest): Uint8Array {
    return QueryEnterpriseSupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEnterpriseSupplyRequest): QueryEnterpriseSupplyRequestProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseSupplyRequest",
      value: QueryEnterpriseSupplyRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEnterpriseSupplyRequest.typeUrl, QueryEnterpriseSupplyRequest);
function createBaseQueryEnterpriseSupplyResponse(): QueryEnterpriseSupplyResponse {
  return {
    supply: UndSupply.fromPartial({})
  };
}
export const QueryEnterpriseSupplyResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseSupplyResponse",
  is(o: any): o is QueryEnterpriseSupplyResponse {
    return o && (o.$typeUrl === QueryEnterpriseSupplyResponse.typeUrl || UndSupply.is(o.supply));
  },
  isSDK(o: any): o is QueryEnterpriseSupplyResponseSDKType {
    return o && (o.$typeUrl === QueryEnterpriseSupplyResponse.typeUrl || UndSupply.isSDK(o.supply));
  },
  isAmino(o: any): o is QueryEnterpriseSupplyResponseAmino {
    return o && (o.$typeUrl === QueryEnterpriseSupplyResponse.typeUrl || UndSupply.isAmino(o.supply));
  },
  encode(message: QueryEnterpriseSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supply !== undefined) {
      UndSupply.encode(message.supply, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEnterpriseSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply = UndSupply.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEnterpriseSupplyResponse>): QueryEnterpriseSupplyResponse {
    const message = createBaseQueryEnterpriseSupplyResponse();
    message.supply = object.supply !== undefined && object.supply !== null ? UndSupply.fromPartial(object.supply) : undefined;
    return message;
  },
  fromAmino(object: QueryEnterpriseSupplyResponseAmino): QueryEnterpriseSupplyResponse {
    const message = createBaseQueryEnterpriseSupplyResponse();
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = UndSupply.fromAmino(object.supply);
    }
    return message;
  },
  toAmino(message: QueryEnterpriseSupplyResponse): QueryEnterpriseSupplyResponseAmino {
    const obj: any = {};
    obj.supply = message.supply ? UndSupply.toAmino(message.supply) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEnterpriseSupplyResponseAminoMsg): QueryEnterpriseSupplyResponse {
    return QueryEnterpriseSupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEnterpriseSupplyResponseProtoMsg): QueryEnterpriseSupplyResponse {
    return QueryEnterpriseSupplyResponse.decode(message.value);
  },
  toProto(message: QueryEnterpriseSupplyResponse): Uint8Array {
    return QueryEnterpriseSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEnterpriseSupplyResponse): QueryEnterpriseSupplyResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseSupplyResponse",
      value: QueryEnterpriseSupplyResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEnterpriseSupplyResponse.typeUrl, QueryEnterpriseSupplyResponse);
function createBaseQueryTotalSupplyRequest(): QueryTotalSupplyRequest {
  return {
    pagination: undefined
  };
}
export const QueryTotalSupplyRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalSupplyRequest",
  is(o: any): o is QueryTotalSupplyRequest {
    return o && o.$typeUrl === QueryTotalSupplyRequest.typeUrl;
  },
  isSDK(o: any): o is QueryTotalSupplyRequestSDKType {
    return o && o.$typeUrl === QueryTotalSupplyRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTotalSupplyRequestAmino {
    return o && o.$typeUrl === QueryTotalSupplyRequest.typeUrl;
  },
  encode(message: QueryTotalSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTotalSupplyRequestAmino): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalSupplyRequestAminoMsg): QueryTotalSupplyRequest {
    return QueryTotalSupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalSupplyRequestProtoMsg): QueryTotalSupplyRequest {
    return QueryTotalSupplyRequest.decode(message.value);
  },
  toProto(message: QueryTotalSupplyRequest): Uint8Array {
    return QueryTotalSupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryTotalSupplyRequest",
      value: QueryTotalSupplyRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalSupplyRequest.typeUrl, QueryTotalSupplyRequest);
function createBaseQueryTotalSupplyResponse(): QueryTotalSupplyResponse {
  return {
    supply: [],
    pagination: undefined
  };
}
export const QueryTotalSupplyResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalSupplyResponse",
  is(o: any): o is QueryTotalSupplyResponse {
    return o && (o.$typeUrl === QueryTotalSupplyResponse.typeUrl || Array.isArray(o.supply) && (!o.supply.length || Coin.is(o.supply[0])));
  },
  isSDK(o: any): o is QueryTotalSupplyResponseSDKType {
    return o && (o.$typeUrl === QueryTotalSupplyResponse.typeUrl || Array.isArray(o.supply) && (!o.supply.length || Coin.isSDK(o.supply[0])));
  },
  isAmino(o: any): o is QueryTotalSupplyResponseAmino {
    return o && (o.$typeUrl === QueryTotalSupplyResponse.typeUrl || Array.isArray(o.supply) && (!o.supply.length || Coin.isAmino(o.supply[0])));
  },
  encode(message: QueryTotalSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.supply) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    message.supply = object.supply?.map(e => Coin.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTotalSupplyResponseAmino): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    message.supply = object.supply?.map(e => Coin.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAmino {
    const obj: any = {};
    if (message.supply) {
      obj.supply = message.supply.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.supply = message.supply;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalSupplyResponseAminoMsg): QueryTotalSupplyResponse {
    return QueryTotalSupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalSupplyResponseProtoMsg): QueryTotalSupplyResponse {
    return QueryTotalSupplyResponse.decode(message.value);
  },
  toProto(message: QueryTotalSupplyResponse): Uint8Array {
    return QueryTotalSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryTotalSupplyResponse",
      value: QueryTotalSupplyResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalSupplyResponse.typeUrl, QueryTotalSupplyResponse);
function createBaseQuerySupplyOfRequest(): QuerySupplyOfRequest {
  return {
    denom: ""
  };
}
export const QuerySupplyOfRequest = {
  typeUrl: "/mainchain.enterprise.v1.QuerySupplyOfRequest",
  is(o: any): o is QuerySupplyOfRequest {
    return o && (o.$typeUrl === QuerySupplyOfRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QuerySupplyOfRequestSDKType {
    return o && (o.$typeUrl === QuerySupplyOfRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QuerySupplyOfRequestAmino {
    return o && (o.$typeUrl === QuerySupplyOfRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QuerySupplyOfRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyOfRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySupplyOfRequest>): QuerySupplyOfRequest {
    const message = createBaseQuerySupplyOfRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QuerySupplyOfRequestAmino): QuerySupplyOfRequest {
    const message = createBaseQuerySupplyOfRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QuerySupplyOfRequest): QuerySupplyOfRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyOfRequestAminoMsg): QuerySupplyOfRequest {
    return QuerySupplyOfRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupplyOfRequestProtoMsg): QuerySupplyOfRequest {
    return QuerySupplyOfRequest.decode(message.value);
  },
  toProto(message: QuerySupplyOfRequest): Uint8Array {
    return QuerySupplyOfRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyOfRequest): QuerySupplyOfRequestProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QuerySupplyOfRequest",
      value: QuerySupplyOfRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySupplyOfRequest.typeUrl, QuerySupplyOfRequest);
function createBaseQuerySupplyOfResponse(): QuerySupplyOfResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const QuerySupplyOfResponse = {
  typeUrl: "/mainchain.enterprise.v1.QuerySupplyOfResponse",
  is(o: any): o is QuerySupplyOfResponse {
    return o && (o.$typeUrl === QuerySupplyOfResponse.typeUrl || Coin.is(o.amount));
  },
  isSDK(o: any): o is QuerySupplyOfResponseSDKType {
    return o && (o.$typeUrl === QuerySupplyOfResponse.typeUrl || Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is QuerySupplyOfResponseAmino {
    return o && (o.$typeUrl === QuerySupplyOfResponse.typeUrl || Coin.isAmino(o.amount));
  },
  encode(message: QuerySupplyOfResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyOfResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySupplyOfResponse>): QuerySupplyOfResponse {
    const message = createBaseQuerySupplyOfResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: QuerySupplyOfResponseAmino): QuerySupplyOfResponse {
    const message = createBaseQuerySupplyOfResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: QuerySupplyOfResponse): QuerySupplyOfResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyOfResponseAminoMsg): QuerySupplyOfResponse {
    return QuerySupplyOfResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupplyOfResponseProtoMsg): QuerySupplyOfResponse {
    return QuerySupplyOfResponse.decode(message.value);
  },
  toProto(message: QuerySupplyOfResponse): Uint8Array {
    return QuerySupplyOfResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyOfResponse): QuerySupplyOfResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QuerySupplyOfResponse",
      value: QuerySupplyOfResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySupplyOfResponse.typeUrl, QuerySupplyOfResponse);
function createBaseQueryWhitelistRequest(): QueryWhitelistRequest {
  return {};
}
export const QueryWhitelistRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryWhitelistRequest",
  is(o: any): o is QueryWhitelistRequest {
    return o && o.$typeUrl === QueryWhitelistRequest.typeUrl;
  },
  isSDK(o: any): o is QueryWhitelistRequestSDKType {
    return o && o.$typeUrl === QueryWhitelistRequest.typeUrl;
  },
  isAmino(o: any): o is QueryWhitelistRequestAmino {
    return o && o.$typeUrl === QueryWhitelistRequest.typeUrl;
  },
  encode(_: QueryWhitelistRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWhitelistRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryWhitelistRequest>): QueryWhitelistRequest {
    const message = createBaseQueryWhitelistRequest();
    return message;
  },
  fromAmino(_: QueryWhitelistRequestAmino): QueryWhitelistRequest {
    const message = createBaseQueryWhitelistRequest();
    return message;
  },
  toAmino(_: QueryWhitelistRequest): QueryWhitelistRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryWhitelistRequestAminoMsg): QueryWhitelistRequest {
    return QueryWhitelistRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWhitelistRequestProtoMsg): QueryWhitelistRequest {
    return QueryWhitelistRequest.decode(message.value);
  },
  toProto(message: QueryWhitelistRequest): Uint8Array {
    return QueryWhitelistRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWhitelistRequest): QueryWhitelistRequestProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryWhitelistRequest",
      value: QueryWhitelistRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryWhitelistRequest.typeUrl, QueryWhitelistRequest);
function createBaseQueryWhitelistResponse(): QueryWhitelistResponse {
  return {
    addresses: []
  };
}
export const QueryWhitelistResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryWhitelistResponse",
  is(o: any): o is QueryWhitelistResponse {
    return o && (o.$typeUrl === QueryWhitelistResponse.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
  },
  isSDK(o: any): o is QueryWhitelistResponseSDKType {
    return o && (o.$typeUrl === QueryWhitelistResponse.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
  },
  isAmino(o: any): o is QueryWhitelistResponseAmino {
    return o && (o.$typeUrl === QueryWhitelistResponse.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
  },
  encode(message: QueryWhitelistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWhitelistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryWhitelistResponse>): QueryWhitelistResponse {
    const message = createBaseQueryWhitelistResponse();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryWhitelistResponseAmino): QueryWhitelistResponse {
    const message = createBaseQueryWhitelistResponse();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryWhitelistResponse): QueryWhitelistResponseAmino {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object: QueryWhitelistResponseAminoMsg): QueryWhitelistResponse {
    return QueryWhitelistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWhitelistResponseProtoMsg): QueryWhitelistResponse {
    return QueryWhitelistResponse.decode(message.value);
  },
  toProto(message: QueryWhitelistResponse): Uint8Array {
    return QueryWhitelistResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWhitelistResponse): QueryWhitelistResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryWhitelistResponse",
      value: QueryWhitelistResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryWhitelistResponse.typeUrl, QueryWhitelistResponse);
function createBaseQueryWhitelistedRequest(): QueryWhitelistedRequest {
  return {
    address: ""
  };
}
export const QueryWhitelistedRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryWhitelistedRequest",
  is(o: any): o is QueryWhitelistedRequest {
    return o && (o.$typeUrl === QueryWhitelistedRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryWhitelistedRequestSDKType {
    return o && (o.$typeUrl === QueryWhitelistedRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryWhitelistedRequestAmino {
    return o && (o.$typeUrl === QueryWhitelistedRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryWhitelistedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWhitelistedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryWhitelistedRequest>): QueryWhitelistedRequest {
    const message = createBaseQueryWhitelistedRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryWhitelistedRequestAmino): QueryWhitelistedRequest {
    const message = createBaseQueryWhitelistedRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryWhitelistedRequest): QueryWhitelistedRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryWhitelistedRequestAminoMsg): QueryWhitelistedRequest {
    return QueryWhitelistedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWhitelistedRequestProtoMsg): QueryWhitelistedRequest {
    return QueryWhitelistedRequest.decode(message.value);
  },
  toProto(message: QueryWhitelistedRequest): Uint8Array {
    return QueryWhitelistedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWhitelistedRequest): QueryWhitelistedRequestProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryWhitelistedRequest",
      value: QueryWhitelistedRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryWhitelistedRequest.typeUrl, QueryWhitelistedRequest);
function createBaseQueryWhitelistedResponse(): QueryWhitelistedResponse {
  return {
    address: "",
    whitelisted: false
  };
}
export const QueryWhitelistedResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryWhitelistedResponse",
  is(o: any): o is QueryWhitelistedResponse {
    return o && (o.$typeUrl === QueryWhitelistedResponse.typeUrl || typeof o.address === "string" && typeof o.whitelisted === "boolean");
  },
  isSDK(o: any): o is QueryWhitelistedResponseSDKType {
    return o && (o.$typeUrl === QueryWhitelistedResponse.typeUrl || typeof o.address === "string" && typeof o.whitelisted === "boolean");
  },
  isAmino(o: any): o is QueryWhitelistedResponseAmino {
    return o && (o.$typeUrl === QueryWhitelistedResponse.typeUrl || typeof o.address === "string" && typeof o.whitelisted === "boolean");
  },
  encode(message: QueryWhitelistedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.whitelisted === true) {
      writer.uint32(16).bool(message.whitelisted);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWhitelistedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.whitelisted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryWhitelistedResponse>): QueryWhitelistedResponse {
    const message = createBaseQueryWhitelistedResponse();
    message.address = object.address ?? "";
    message.whitelisted = object.whitelisted ?? false;
    return message;
  },
  fromAmino(object: QueryWhitelistedResponseAmino): QueryWhitelistedResponse {
    const message = createBaseQueryWhitelistedResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.whitelisted !== undefined && object.whitelisted !== null) {
      message.whitelisted = object.whitelisted;
    }
    return message;
  },
  toAmino(message: QueryWhitelistedResponse): QueryWhitelistedResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.whitelisted = message.whitelisted === false ? undefined : message.whitelisted;
    return obj;
  },
  fromAminoMsg(object: QueryWhitelistedResponseAminoMsg): QueryWhitelistedResponse {
    return QueryWhitelistedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWhitelistedResponseProtoMsg): QueryWhitelistedResponse {
    return QueryWhitelistedResponse.decode(message.value);
  },
  toProto(message: QueryWhitelistedResponse): Uint8Array {
    return QueryWhitelistedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWhitelistedResponse): QueryWhitelistedResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryWhitelistedResponse",
      value: QueryWhitelistedResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryWhitelistedResponse.typeUrl, QueryWhitelistedResponse);
function createBaseQueryEnterpriseAccountRequest(): QueryEnterpriseAccountRequest {
  return {
    address: ""
  };
}
export const QueryEnterpriseAccountRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseAccountRequest",
  is(o: any): o is QueryEnterpriseAccountRequest {
    return o && (o.$typeUrl === QueryEnterpriseAccountRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryEnterpriseAccountRequestSDKType {
    return o && (o.$typeUrl === QueryEnterpriseAccountRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryEnterpriseAccountRequestAmino {
    return o && (o.$typeUrl === QueryEnterpriseAccountRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryEnterpriseAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEnterpriseAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEnterpriseAccountRequest>): QueryEnterpriseAccountRequest {
    const message = createBaseQueryEnterpriseAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryEnterpriseAccountRequestAmino): QueryEnterpriseAccountRequest {
    const message = createBaseQueryEnterpriseAccountRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryEnterpriseAccountRequest): QueryEnterpriseAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryEnterpriseAccountRequestAminoMsg): QueryEnterpriseAccountRequest {
    return QueryEnterpriseAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEnterpriseAccountRequestProtoMsg): QueryEnterpriseAccountRequest {
    return QueryEnterpriseAccountRequest.decode(message.value);
  },
  toProto(message: QueryEnterpriseAccountRequest): Uint8Array {
    return QueryEnterpriseAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEnterpriseAccountRequest): QueryEnterpriseAccountRequestProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseAccountRequest",
      value: QueryEnterpriseAccountRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEnterpriseAccountRequest.typeUrl, QueryEnterpriseAccountRequest);
function createBaseQueryEnterpriseAccountResponse(): QueryEnterpriseAccountResponse {
  return {
    account: EnterpriseUserAccount.fromPartial({})
  };
}
export const QueryEnterpriseAccountResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseAccountResponse",
  is(o: any): o is QueryEnterpriseAccountResponse {
    return o && (o.$typeUrl === QueryEnterpriseAccountResponse.typeUrl || EnterpriseUserAccount.is(o.account));
  },
  isSDK(o: any): o is QueryEnterpriseAccountResponseSDKType {
    return o && (o.$typeUrl === QueryEnterpriseAccountResponse.typeUrl || EnterpriseUserAccount.isSDK(o.account));
  },
  isAmino(o: any): o is QueryEnterpriseAccountResponseAmino {
    return o && (o.$typeUrl === QueryEnterpriseAccountResponse.typeUrl || EnterpriseUserAccount.isAmino(o.account));
  },
  encode(message: QueryEnterpriseAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== undefined) {
      EnterpriseUserAccount.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEnterpriseAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = EnterpriseUserAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEnterpriseAccountResponse>): QueryEnterpriseAccountResponse {
    const message = createBaseQueryEnterpriseAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? EnterpriseUserAccount.fromPartial(object.account) : undefined;
    return message;
  },
  fromAmino(object: QueryEnterpriseAccountResponseAmino): QueryEnterpriseAccountResponse {
    const message = createBaseQueryEnterpriseAccountResponse();
    if (object.account !== undefined && object.account !== null) {
      message.account = EnterpriseUserAccount.fromAmino(object.account);
    }
    return message;
  },
  toAmino(message: QueryEnterpriseAccountResponse): QueryEnterpriseAccountResponseAmino {
    const obj: any = {};
    obj.account = message.account ? EnterpriseUserAccount.toAmino(message.account) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEnterpriseAccountResponseAminoMsg): QueryEnterpriseAccountResponse {
    return QueryEnterpriseAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEnterpriseAccountResponseProtoMsg): QueryEnterpriseAccountResponse {
    return QueryEnterpriseAccountResponse.decode(message.value);
  },
  toProto(message: QueryEnterpriseAccountResponse): Uint8Array {
    return QueryEnterpriseAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEnterpriseAccountResponse): QueryEnterpriseAccountResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseAccountResponse",
      value: QueryEnterpriseAccountResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEnterpriseAccountResponse.typeUrl, QueryEnterpriseAccountResponse);
function createBaseQueryTotalSpentEFUNDRequest(): QueryTotalSpentEFUNDRequest {
  return {};
}
export const QueryTotalSpentEFUNDRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalSpentEFUNDRequest",
  is(o: any): o is QueryTotalSpentEFUNDRequest {
    return o && o.$typeUrl === QueryTotalSpentEFUNDRequest.typeUrl;
  },
  isSDK(o: any): o is QueryTotalSpentEFUNDRequestSDKType {
    return o && o.$typeUrl === QueryTotalSpentEFUNDRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTotalSpentEFUNDRequestAmino {
    return o && o.$typeUrl === QueryTotalSpentEFUNDRequest.typeUrl;
  },
  encode(_: QueryTotalSpentEFUNDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSpentEFUNDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSpentEFUNDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryTotalSpentEFUNDRequest>): QueryTotalSpentEFUNDRequest {
    const message = createBaseQueryTotalSpentEFUNDRequest();
    return message;
  },
  fromAmino(_: QueryTotalSpentEFUNDRequestAmino): QueryTotalSpentEFUNDRequest {
    const message = createBaseQueryTotalSpentEFUNDRequest();
    return message;
  },
  toAmino(_: QueryTotalSpentEFUNDRequest): QueryTotalSpentEFUNDRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalSpentEFUNDRequestAminoMsg): QueryTotalSpentEFUNDRequest {
    return QueryTotalSpentEFUNDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalSpentEFUNDRequestProtoMsg): QueryTotalSpentEFUNDRequest {
    return QueryTotalSpentEFUNDRequest.decode(message.value);
  },
  toProto(message: QueryTotalSpentEFUNDRequest): Uint8Array {
    return QueryTotalSpentEFUNDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSpentEFUNDRequest): QueryTotalSpentEFUNDRequestProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryTotalSpentEFUNDRequest",
      value: QueryTotalSpentEFUNDRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalSpentEFUNDRequest.typeUrl, QueryTotalSpentEFUNDRequest);
function createBaseQueryTotalSpentEFUNDResponse(): QueryTotalSpentEFUNDResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const QueryTotalSpentEFUNDResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalSpentEFUNDResponse",
  is(o: any): o is QueryTotalSpentEFUNDResponse {
    return o && (o.$typeUrl === QueryTotalSpentEFUNDResponse.typeUrl || Coin.is(o.amount));
  },
  isSDK(o: any): o is QueryTotalSpentEFUNDResponseSDKType {
    return o && (o.$typeUrl === QueryTotalSpentEFUNDResponse.typeUrl || Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is QueryTotalSpentEFUNDResponseAmino {
    return o && (o.$typeUrl === QueryTotalSpentEFUNDResponse.typeUrl || Coin.isAmino(o.amount));
  },
  encode(message: QueryTotalSpentEFUNDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSpentEFUNDResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSpentEFUNDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalSpentEFUNDResponse>): QueryTotalSpentEFUNDResponse {
    const message = createBaseQueryTotalSpentEFUNDResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: QueryTotalSpentEFUNDResponseAmino): QueryTotalSpentEFUNDResponse {
    const message = createBaseQueryTotalSpentEFUNDResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: QueryTotalSpentEFUNDResponse): QueryTotalSpentEFUNDResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalSpentEFUNDResponseAminoMsg): QueryTotalSpentEFUNDResponse {
    return QueryTotalSpentEFUNDResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalSpentEFUNDResponseProtoMsg): QueryTotalSpentEFUNDResponse {
    return QueryTotalSpentEFUNDResponse.decode(message.value);
  },
  toProto(message: QueryTotalSpentEFUNDResponse): Uint8Array {
    return QueryTotalSpentEFUNDResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSpentEFUNDResponse): QueryTotalSpentEFUNDResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QueryTotalSpentEFUNDResponse",
      value: QueryTotalSpentEFUNDResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalSpentEFUNDResponse.typeUrl, QueryTotalSpentEFUNDResponse);
function createBaseQuerySpentEFUNDByAddressRequest(): QuerySpentEFUNDByAddressRequest {
  return {
    address: ""
  };
}
export const QuerySpentEFUNDByAddressRequest = {
  typeUrl: "/mainchain.enterprise.v1.QuerySpentEFUNDByAddressRequest",
  is(o: any): o is QuerySpentEFUNDByAddressRequest {
    return o && (o.$typeUrl === QuerySpentEFUNDByAddressRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QuerySpentEFUNDByAddressRequestSDKType {
    return o && (o.$typeUrl === QuerySpentEFUNDByAddressRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QuerySpentEFUNDByAddressRequestAmino {
    return o && (o.$typeUrl === QuerySpentEFUNDByAddressRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QuerySpentEFUNDByAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpentEFUNDByAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpentEFUNDByAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySpentEFUNDByAddressRequest>): QuerySpentEFUNDByAddressRequest {
    const message = createBaseQuerySpentEFUNDByAddressRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QuerySpentEFUNDByAddressRequestAmino): QuerySpentEFUNDByAddressRequest {
    const message = createBaseQuerySpentEFUNDByAddressRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QuerySpentEFUNDByAddressRequest): QuerySpentEFUNDByAddressRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QuerySpentEFUNDByAddressRequestAminoMsg): QuerySpentEFUNDByAddressRequest {
    return QuerySpentEFUNDByAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpentEFUNDByAddressRequestProtoMsg): QuerySpentEFUNDByAddressRequest {
    return QuerySpentEFUNDByAddressRequest.decode(message.value);
  },
  toProto(message: QuerySpentEFUNDByAddressRequest): Uint8Array {
    return QuerySpentEFUNDByAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpentEFUNDByAddressRequest): QuerySpentEFUNDByAddressRequestProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QuerySpentEFUNDByAddressRequest",
      value: QuerySpentEFUNDByAddressRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySpentEFUNDByAddressRequest.typeUrl, QuerySpentEFUNDByAddressRequest);
function createBaseQuerySpentEFUNDByAddressResponse(): QuerySpentEFUNDByAddressResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const QuerySpentEFUNDByAddressResponse = {
  typeUrl: "/mainchain.enterprise.v1.QuerySpentEFUNDByAddressResponse",
  is(o: any): o is QuerySpentEFUNDByAddressResponse {
    return o && (o.$typeUrl === QuerySpentEFUNDByAddressResponse.typeUrl || Coin.is(o.amount));
  },
  isSDK(o: any): o is QuerySpentEFUNDByAddressResponseSDKType {
    return o && (o.$typeUrl === QuerySpentEFUNDByAddressResponse.typeUrl || Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is QuerySpentEFUNDByAddressResponseAmino {
    return o && (o.$typeUrl === QuerySpentEFUNDByAddressResponse.typeUrl || Coin.isAmino(o.amount));
  },
  encode(message: QuerySpentEFUNDByAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpentEFUNDByAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpentEFUNDByAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySpentEFUNDByAddressResponse>): QuerySpentEFUNDByAddressResponse {
    const message = createBaseQuerySpentEFUNDByAddressResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: QuerySpentEFUNDByAddressResponseAmino): QuerySpentEFUNDByAddressResponse {
    const message = createBaseQuerySpentEFUNDByAddressResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: QuerySpentEFUNDByAddressResponse): QuerySpentEFUNDByAddressResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySpentEFUNDByAddressResponseAminoMsg): QuerySpentEFUNDByAddressResponse {
    return QuerySpentEFUNDByAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpentEFUNDByAddressResponseProtoMsg): QuerySpentEFUNDByAddressResponse {
    return QuerySpentEFUNDByAddressResponse.decode(message.value);
  },
  toProto(message: QuerySpentEFUNDByAddressResponse): Uint8Array {
    return QuerySpentEFUNDByAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpentEFUNDByAddressResponse): QuerySpentEFUNDByAddressResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.QuerySpentEFUNDByAddressResponse",
      value: QuerySpentEFUNDByAddressResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySpentEFUNDByAddressResponse.typeUrl, QuerySpentEFUNDByAddressResponse);