import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { PurchaseOrderStatus, Params, ParamsAmino, ParamsSDKType, EnterpriseUndPurchaseOrder, EnterpriseUndPurchaseOrderAmino, EnterpriseUndPurchaseOrderSDKType, UndSupply, UndSupplyAmino, UndSupplySDKType, EnterpriseUserAccount, EnterpriseUserAccountAmino, EnterpriseUserAccountSDKType } from "./enterprise";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/mainchain.enterprise.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/mainchain.enterprise.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestSDKType {
}
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
export interface QueryTotalLockedRequest {
}
export interface QueryTotalLockedRequestProtoMsg {
    typeUrl: "/mainchain.enterprise.v1.QueryTotalLockedRequest";
    value: Uint8Array;
}
/** QueryTotalLockedRequest is the request type for the Query/TotalLocked RPC method */
export interface QueryTotalLockedRequestAmino {
}
export interface QueryTotalLockedRequestAminoMsg {
    type: "/mainchain.enterprise.v1.QueryTotalLockedRequest";
    value: QueryTotalLockedRequestAmino;
}
/** QueryTotalLockedRequest is the request type for the Query/TotalLocked RPC method */
export interface QueryTotalLockedRequestSDKType {
}
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
export interface QueryTotalUnlockedRequest {
}
export interface QueryTotalUnlockedRequestProtoMsg {
    typeUrl: "/mainchain.enterprise.v1.QueryTotalUnlockedRequest";
    value: Uint8Array;
}
/** QueryTotalUnlockedRequest is the request type for the Query/TotalUnlocked RPC method */
export interface QueryTotalUnlockedRequestAmino {
}
export interface QueryTotalUnlockedRequestAminoMsg {
    type: "/mainchain.enterprise.v1.QueryTotalUnlockedRequest";
    value: QueryTotalUnlockedRequestAmino;
}
/** QueryTotalUnlockedRequest is the request type for the Query/TotalUnlocked RPC method */
export interface QueryTotalUnlockedRequestSDKType {
}
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
export interface QueryEnterpriseSupplyRequest {
}
export interface QueryEnterpriseSupplyRequestProtoMsg {
    typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseSupplyRequest";
    value: Uint8Array;
}
/** QueryEnterpriseSupplyRequest is the request type for the Query/EnterpriseSupply RPC method */
export interface QueryEnterpriseSupplyRequestAmino {
}
export interface QueryEnterpriseSupplyRequestAminoMsg {
    type: "/mainchain.enterprise.v1.QueryEnterpriseSupplyRequest";
    value: QueryEnterpriseSupplyRequestAmino;
}
/** QueryEnterpriseSupplyRequest is the request type for the Query/EnterpriseSupply RPC method */
export interface QueryEnterpriseSupplyRequestSDKType {
}
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
export interface QueryWhitelistRequest {
}
export interface QueryWhitelistRequestProtoMsg {
    typeUrl: "/mainchain.enterprise.v1.QueryWhitelistRequest";
    value: Uint8Array;
}
/** QueryWhitelistRequest is the request type for the Query/Whitelist RPC method. */
export interface QueryWhitelistRequestAmino {
}
export interface QueryWhitelistRequestAminoMsg {
    type: "/mainchain.enterprise.v1.QueryWhitelistRequest";
    value: QueryWhitelistRequestAmino;
}
/** QueryWhitelistRequest is the request type for the Query/Whitelist RPC method. */
export interface QueryWhitelistRequestSDKType {
}
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
export interface QueryTotalSpentEFUNDRequest {
}
export interface QueryTotalSpentEFUNDRequestProtoMsg {
    typeUrl: "/mainchain.enterprise.v1.QueryTotalSpentEFUNDRequest";
    value: Uint8Array;
}
/** QueryTotalSpentEFUNDRequest is the request type for the Query/TotalSpentEFUND RPC method. */
export interface QueryTotalSpentEFUNDRequestAmino {
}
export interface QueryTotalSpentEFUNDRequestAminoMsg {
    type: "/mainchain.enterprise.v1.QueryTotalSpentEFUNDRequest";
    value: QueryTotalSpentEFUNDRequestAmino;
}
/** QueryTotalSpentEFUNDRequest is the request type for the Query/TotalSpentEFUND RPC method. */
export interface QueryTotalSpentEFUNDRequestSDKType {
}
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
export declare const QueryParamsRequest: {
    typeUrl: string;
    is(o: any): o is QueryParamsRequest;
    isSDK(o: any): o is QueryParamsRequestSDKType;
    isAmino(o: any): o is QueryParamsRequestAmino;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    is(o: any): o is QueryParamsResponse;
    isSDK(o: any): o is QueryParamsResponseSDKType;
    isAmino(o: any): o is QueryParamsResponseAmino;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryEnterpriseUndPurchaseOrderRequest: {
    typeUrl: string;
    is(o: any): o is QueryEnterpriseUndPurchaseOrderRequest;
    isSDK(o: any): o is QueryEnterpriseUndPurchaseOrderRequestSDKType;
    isAmino(o: any): o is QueryEnterpriseUndPurchaseOrderRequestAmino;
    encode(message: QueryEnterpriseUndPurchaseOrderRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseUndPurchaseOrderRequest;
    fromPartial(object: Partial<QueryEnterpriseUndPurchaseOrderRequest>): QueryEnterpriseUndPurchaseOrderRequest;
    fromAmino(object: QueryEnterpriseUndPurchaseOrderRequestAmino): QueryEnterpriseUndPurchaseOrderRequest;
    toAmino(message: QueryEnterpriseUndPurchaseOrderRequest): QueryEnterpriseUndPurchaseOrderRequestAmino;
    fromAminoMsg(object: QueryEnterpriseUndPurchaseOrderRequestAminoMsg): QueryEnterpriseUndPurchaseOrderRequest;
    fromProtoMsg(message: QueryEnterpriseUndPurchaseOrderRequestProtoMsg): QueryEnterpriseUndPurchaseOrderRequest;
    toProto(message: QueryEnterpriseUndPurchaseOrderRequest): Uint8Array;
    toProtoMsg(message: QueryEnterpriseUndPurchaseOrderRequest): QueryEnterpriseUndPurchaseOrderRequestProtoMsg;
};
export declare const QueryEnterpriseUndPurchaseOrderResponse: {
    typeUrl: string;
    is(o: any): o is QueryEnterpriseUndPurchaseOrderResponse;
    isSDK(o: any): o is QueryEnterpriseUndPurchaseOrderResponseSDKType;
    isAmino(o: any): o is QueryEnterpriseUndPurchaseOrderResponseAmino;
    encode(message: QueryEnterpriseUndPurchaseOrderResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseUndPurchaseOrderResponse;
    fromPartial(object: Partial<QueryEnterpriseUndPurchaseOrderResponse>): QueryEnterpriseUndPurchaseOrderResponse;
    fromAmino(object: QueryEnterpriseUndPurchaseOrderResponseAmino): QueryEnterpriseUndPurchaseOrderResponse;
    toAmino(message: QueryEnterpriseUndPurchaseOrderResponse): QueryEnterpriseUndPurchaseOrderResponseAmino;
    fromAminoMsg(object: QueryEnterpriseUndPurchaseOrderResponseAminoMsg): QueryEnterpriseUndPurchaseOrderResponse;
    fromProtoMsg(message: QueryEnterpriseUndPurchaseOrderResponseProtoMsg): QueryEnterpriseUndPurchaseOrderResponse;
    toProto(message: QueryEnterpriseUndPurchaseOrderResponse): Uint8Array;
    toProtoMsg(message: QueryEnterpriseUndPurchaseOrderResponse): QueryEnterpriseUndPurchaseOrderResponseProtoMsg;
};
export declare const QueryEnterpriseUndPurchaseOrdersRequest: {
    typeUrl: string;
    is(o: any): o is QueryEnterpriseUndPurchaseOrdersRequest;
    isSDK(o: any): o is QueryEnterpriseUndPurchaseOrdersRequestSDKType;
    isAmino(o: any): o is QueryEnterpriseUndPurchaseOrdersRequestAmino;
    encode(message: QueryEnterpriseUndPurchaseOrdersRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseUndPurchaseOrdersRequest;
    fromPartial(object: Partial<QueryEnterpriseUndPurchaseOrdersRequest>): QueryEnterpriseUndPurchaseOrdersRequest;
    fromAmino(object: QueryEnterpriseUndPurchaseOrdersRequestAmino): QueryEnterpriseUndPurchaseOrdersRequest;
    toAmino(message: QueryEnterpriseUndPurchaseOrdersRequest): QueryEnterpriseUndPurchaseOrdersRequestAmino;
    fromAminoMsg(object: QueryEnterpriseUndPurchaseOrdersRequestAminoMsg): QueryEnterpriseUndPurchaseOrdersRequest;
    fromProtoMsg(message: QueryEnterpriseUndPurchaseOrdersRequestProtoMsg): QueryEnterpriseUndPurchaseOrdersRequest;
    toProto(message: QueryEnterpriseUndPurchaseOrdersRequest): Uint8Array;
    toProtoMsg(message: QueryEnterpriseUndPurchaseOrdersRequest): QueryEnterpriseUndPurchaseOrdersRequestProtoMsg;
};
export declare const QueryEnterpriseUndPurchaseOrdersResponse: {
    typeUrl: string;
    is(o: any): o is QueryEnterpriseUndPurchaseOrdersResponse;
    isSDK(o: any): o is QueryEnterpriseUndPurchaseOrdersResponseSDKType;
    isAmino(o: any): o is QueryEnterpriseUndPurchaseOrdersResponseAmino;
    encode(message: QueryEnterpriseUndPurchaseOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseUndPurchaseOrdersResponse;
    fromPartial(object: Partial<QueryEnterpriseUndPurchaseOrdersResponse>): QueryEnterpriseUndPurchaseOrdersResponse;
    fromAmino(object: QueryEnterpriseUndPurchaseOrdersResponseAmino): QueryEnterpriseUndPurchaseOrdersResponse;
    toAmino(message: QueryEnterpriseUndPurchaseOrdersResponse): QueryEnterpriseUndPurchaseOrdersResponseAmino;
    fromAminoMsg(object: QueryEnterpriseUndPurchaseOrdersResponseAminoMsg): QueryEnterpriseUndPurchaseOrdersResponse;
    fromProtoMsg(message: QueryEnterpriseUndPurchaseOrdersResponseProtoMsg): QueryEnterpriseUndPurchaseOrdersResponse;
    toProto(message: QueryEnterpriseUndPurchaseOrdersResponse): Uint8Array;
    toProtoMsg(message: QueryEnterpriseUndPurchaseOrdersResponse): QueryEnterpriseUndPurchaseOrdersResponseProtoMsg;
};
export declare const QueryLockedUndByAddressRequest: {
    typeUrl: string;
    is(o: any): o is QueryLockedUndByAddressRequest;
    isSDK(o: any): o is QueryLockedUndByAddressRequestSDKType;
    isAmino(o: any): o is QueryLockedUndByAddressRequestAmino;
    encode(message: QueryLockedUndByAddressRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLockedUndByAddressRequest;
    fromPartial(object: Partial<QueryLockedUndByAddressRequest>): QueryLockedUndByAddressRequest;
    fromAmino(object: QueryLockedUndByAddressRequestAmino): QueryLockedUndByAddressRequest;
    toAmino(message: QueryLockedUndByAddressRequest): QueryLockedUndByAddressRequestAmino;
    fromAminoMsg(object: QueryLockedUndByAddressRequestAminoMsg): QueryLockedUndByAddressRequest;
    fromProtoMsg(message: QueryLockedUndByAddressRequestProtoMsg): QueryLockedUndByAddressRequest;
    toProto(message: QueryLockedUndByAddressRequest): Uint8Array;
    toProtoMsg(message: QueryLockedUndByAddressRequest): QueryLockedUndByAddressRequestProtoMsg;
};
export declare const QueryLockedUndByAddressResponse: {
    typeUrl: string;
    is(o: any): o is QueryLockedUndByAddressResponse;
    isSDK(o: any): o is QueryLockedUndByAddressResponseSDKType;
    isAmino(o: any): o is QueryLockedUndByAddressResponseAmino;
    encode(message: QueryLockedUndByAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLockedUndByAddressResponse;
    fromPartial(object: Partial<QueryLockedUndByAddressResponse>): QueryLockedUndByAddressResponse;
    fromAmino(object: QueryLockedUndByAddressResponseAmino): QueryLockedUndByAddressResponse;
    toAmino(message: QueryLockedUndByAddressResponse): QueryLockedUndByAddressResponseAmino;
    fromAminoMsg(object: QueryLockedUndByAddressResponseAminoMsg): QueryLockedUndByAddressResponse;
    fromProtoMsg(message: QueryLockedUndByAddressResponseProtoMsg): QueryLockedUndByAddressResponse;
    toProto(message: QueryLockedUndByAddressResponse): Uint8Array;
    toProtoMsg(message: QueryLockedUndByAddressResponse): QueryLockedUndByAddressResponseProtoMsg;
};
export declare const QueryTotalLockedRequest: {
    typeUrl: string;
    is(o: any): o is QueryTotalLockedRequest;
    isSDK(o: any): o is QueryTotalLockedRequestSDKType;
    isAmino(o: any): o is QueryTotalLockedRequestAmino;
    encode(_: QueryTotalLockedRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLockedRequest;
    fromPartial(_: Partial<QueryTotalLockedRequest>): QueryTotalLockedRequest;
    fromAmino(_: QueryTotalLockedRequestAmino): QueryTotalLockedRequest;
    toAmino(_: QueryTotalLockedRequest): QueryTotalLockedRequestAmino;
    fromAminoMsg(object: QueryTotalLockedRequestAminoMsg): QueryTotalLockedRequest;
    fromProtoMsg(message: QueryTotalLockedRequestProtoMsg): QueryTotalLockedRequest;
    toProto(message: QueryTotalLockedRequest): Uint8Array;
    toProtoMsg(message: QueryTotalLockedRequest): QueryTotalLockedRequestProtoMsg;
};
export declare const QueryTotalLockedResponse: {
    typeUrl: string;
    is(o: any): o is QueryTotalLockedResponse;
    isSDK(o: any): o is QueryTotalLockedResponseSDKType;
    isAmino(o: any): o is QueryTotalLockedResponseAmino;
    encode(message: QueryTotalLockedResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLockedResponse;
    fromPartial(object: Partial<QueryTotalLockedResponse>): QueryTotalLockedResponse;
    fromAmino(object: QueryTotalLockedResponseAmino): QueryTotalLockedResponse;
    toAmino(message: QueryTotalLockedResponse): QueryTotalLockedResponseAmino;
    fromAminoMsg(object: QueryTotalLockedResponseAminoMsg): QueryTotalLockedResponse;
    fromProtoMsg(message: QueryTotalLockedResponseProtoMsg): QueryTotalLockedResponse;
    toProto(message: QueryTotalLockedResponse): Uint8Array;
    toProtoMsg(message: QueryTotalLockedResponse): QueryTotalLockedResponseProtoMsg;
};
export declare const QueryTotalUnlockedRequest: {
    typeUrl: string;
    is(o: any): o is QueryTotalUnlockedRequest;
    isSDK(o: any): o is QueryTotalUnlockedRequestSDKType;
    isAmino(o: any): o is QueryTotalUnlockedRequestAmino;
    encode(_: QueryTotalUnlockedRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalUnlockedRequest;
    fromPartial(_: Partial<QueryTotalUnlockedRequest>): QueryTotalUnlockedRequest;
    fromAmino(_: QueryTotalUnlockedRequestAmino): QueryTotalUnlockedRequest;
    toAmino(_: QueryTotalUnlockedRequest): QueryTotalUnlockedRequestAmino;
    fromAminoMsg(object: QueryTotalUnlockedRequestAminoMsg): QueryTotalUnlockedRequest;
    fromProtoMsg(message: QueryTotalUnlockedRequestProtoMsg): QueryTotalUnlockedRequest;
    toProto(message: QueryTotalUnlockedRequest): Uint8Array;
    toProtoMsg(message: QueryTotalUnlockedRequest): QueryTotalUnlockedRequestProtoMsg;
};
export declare const QueryTotalUnlockedResponse: {
    typeUrl: string;
    is(o: any): o is QueryTotalUnlockedResponse;
    isSDK(o: any): o is QueryTotalUnlockedResponseSDKType;
    isAmino(o: any): o is QueryTotalUnlockedResponseAmino;
    encode(message: QueryTotalUnlockedResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalUnlockedResponse;
    fromPartial(object: Partial<QueryTotalUnlockedResponse>): QueryTotalUnlockedResponse;
    fromAmino(object: QueryTotalUnlockedResponseAmino): QueryTotalUnlockedResponse;
    toAmino(message: QueryTotalUnlockedResponse): QueryTotalUnlockedResponseAmino;
    fromAminoMsg(object: QueryTotalUnlockedResponseAminoMsg): QueryTotalUnlockedResponse;
    fromProtoMsg(message: QueryTotalUnlockedResponseProtoMsg): QueryTotalUnlockedResponse;
    toProto(message: QueryTotalUnlockedResponse): Uint8Array;
    toProtoMsg(message: QueryTotalUnlockedResponse): QueryTotalUnlockedResponseProtoMsg;
};
export declare const QueryEnterpriseSupplyRequest: {
    typeUrl: string;
    is(o: any): o is QueryEnterpriseSupplyRequest;
    isSDK(o: any): o is QueryEnterpriseSupplyRequestSDKType;
    isAmino(o: any): o is QueryEnterpriseSupplyRequestAmino;
    encode(_: QueryEnterpriseSupplyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseSupplyRequest;
    fromPartial(_: Partial<QueryEnterpriseSupplyRequest>): QueryEnterpriseSupplyRequest;
    fromAmino(_: QueryEnterpriseSupplyRequestAmino): QueryEnterpriseSupplyRequest;
    toAmino(_: QueryEnterpriseSupplyRequest): QueryEnterpriseSupplyRequestAmino;
    fromAminoMsg(object: QueryEnterpriseSupplyRequestAminoMsg): QueryEnterpriseSupplyRequest;
    fromProtoMsg(message: QueryEnterpriseSupplyRequestProtoMsg): QueryEnterpriseSupplyRequest;
    toProto(message: QueryEnterpriseSupplyRequest): Uint8Array;
    toProtoMsg(message: QueryEnterpriseSupplyRequest): QueryEnterpriseSupplyRequestProtoMsg;
};
export declare const QueryEnterpriseSupplyResponse: {
    typeUrl: string;
    is(o: any): o is QueryEnterpriseSupplyResponse;
    isSDK(o: any): o is QueryEnterpriseSupplyResponseSDKType;
    isAmino(o: any): o is QueryEnterpriseSupplyResponseAmino;
    encode(message: QueryEnterpriseSupplyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseSupplyResponse;
    fromPartial(object: Partial<QueryEnterpriseSupplyResponse>): QueryEnterpriseSupplyResponse;
    fromAmino(object: QueryEnterpriseSupplyResponseAmino): QueryEnterpriseSupplyResponse;
    toAmino(message: QueryEnterpriseSupplyResponse): QueryEnterpriseSupplyResponseAmino;
    fromAminoMsg(object: QueryEnterpriseSupplyResponseAminoMsg): QueryEnterpriseSupplyResponse;
    fromProtoMsg(message: QueryEnterpriseSupplyResponseProtoMsg): QueryEnterpriseSupplyResponse;
    toProto(message: QueryEnterpriseSupplyResponse): Uint8Array;
    toProtoMsg(message: QueryEnterpriseSupplyResponse): QueryEnterpriseSupplyResponseProtoMsg;
};
export declare const QueryTotalSupplyRequest: {
    typeUrl: string;
    is(o: any): o is QueryTotalSupplyRequest;
    isSDK(o: any): o is QueryTotalSupplyRequestSDKType;
    isAmino(o: any): o is QueryTotalSupplyRequestAmino;
    encode(message: QueryTotalSupplyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyRequest;
    fromPartial(object: Partial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest;
    fromAmino(object: QueryTotalSupplyRequestAmino): QueryTotalSupplyRequest;
    toAmino(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestAmino;
    fromAminoMsg(object: QueryTotalSupplyRequestAminoMsg): QueryTotalSupplyRequest;
    fromProtoMsg(message: QueryTotalSupplyRequestProtoMsg): QueryTotalSupplyRequest;
    toProto(message: QueryTotalSupplyRequest): Uint8Array;
    toProtoMsg(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestProtoMsg;
};
export declare const QueryTotalSupplyResponse: {
    typeUrl: string;
    is(o: any): o is QueryTotalSupplyResponse;
    isSDK(o: any): o is QueryTotalSupplyResponseSDKType;
    isAmino(o: any): o is QueryTotalSupplyResponseAmino;
    encode(message: QueryTotalSupplyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyResponse;
    fromPartial(object: Partial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse;
    fromAmino(object: QueryTotalSupplyResponseAmino): QueryTotalSupplyResponse;
    toAmino(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAmino;
    fromAminoMsg(object: QueryTotalSupplyResponseAminoMsg): QueryTotalSupplyResponse;
    fromProtoMsg(message: QueryTotalSupplyResponseProtoMsg): QueryTotalSupplyResponse;
    toProto(message: QueryTotalSupplyResponse): Uint8Array;
    toProtoMsg(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseProtoMsg;
};
export declare const QuerySupplyOfRequest: {
    typeUrl: string;
    is(o: any): o is QuerySupplyOfRequest;
    isSDK(o: any): o is QuerySupplyOfRequestSDKType;
    isAmino(o: any): o is QuerySupplyOfRequestAmino;
    encode(message: QuerySupplyOfRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfRequest;
    fromPartial(object: Partial<QuerySupplyOfRequest>): QuerySupplyOfRequest;
    fromAmino(object: QuerySupplyOfRequestAmino): QuerySupplyOfRequest;
    toAmino(message: QuerySupplyOfRequest): QuerySupplyOfRequestAmino;
    fromAminoMsg(object: QuerySupplyOfRequestAminoMsg): QuerySupplyOfRequest;
    fromProtoMsg(message: QuerySupplyOfRequestProtoMsg): QuerySupplyOfRequest;
    toProto(message: QuerySupplyOfRequest): Uint8Array;
    toProtoMsg(message: QuerySupplyOfRequest): QuerySupplyOfRequestProtoMsg;
};
export declare const QuerySupplyOfResponse: {
    typeUrl: string;
    is(o: any): o is QuerySupplyOfResponse;
    isSDK(o: any): o is QuerySupplyOfResponseSDKType;
    isAmino(o: any): o is QuerySupplyOfResponseAmino;
    encode(message: QuerySupplyOfResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfResponse;
    fromPartial(object: Partial<QuerySupplyOfResponse>): QuerySupplyOfResponse;
    fromAmino(object: QuerySupplyOfResponseAmino): QuerySupplyOfResponse;
    toAmino(message: QuerySupplyOfResponse): QuerySupplyOfResponseAmino;
    fromAminoMsg(object: QuerySupplyOfResponseAminoMsg): QuerySupplyOfResponse;
    fromProtoMsg(message: QuerySupplyOfResponseProtoMsg): QuerySupplyOfResponse;
    toProto(message: QuerySupplyOfResponse): Uint8Array;
    toProtoMsg(message: QuerySupplyOfResponse): QuerySupplyOfResponseProtoMsg;
};
export declare const QueryWhitelistRequest: {
    typeUrl: string;
    is(o: any): o is QueryWhitelistRequest;
    isSDK(o: any): o is QueryWhitelistRequestSDKType;
    isAmino(o: any): o is QueryWhitelistRequestAmino;
    encode(_: QueryWhitelistRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWhitelistRequest;
    fromPartial(_: Partial<QueryWhitelistRequest>): QueryWhitelistRequest;
    fromAmino(_: QueryWhitelistRequestAmino): QueryWhitelistRequest;
    toAmino(_: QueryWhitelistRequest): QueryWhitelistRequestAmino;
    fromAminoMsg(object: QueryWhitelistRequestAminoMsg): QueryWhitelistRequest;
    fromProtoMsg(message: QueryWhitelistRequestProtoMsg): QueryWhitelistRequest;
    toProto(message: QueryWhitelistRequest): Uint8Array;
    toProtoMsg(message: QueryWhitelistRequest): QueryWhitelistRequestProtoMsg;
};
export declare const QueryWhitelistResponse: {
    typeUrl: string;
    is(o: any): o is QueryWhitelistResponse;
    isSDK(o: any): o is QueryWhitelistResponseSDKType;
    isAmino(o: any): o is QueryWhitelistResponseAmino;
    encode(message: QueryWhitelistResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWhitelistResponse;
    fromPartial(object: Partial<QueryWhitelistResponse>): QueryWhitelistResponse;
    fromAmino(object: QueryWhitelistResponseAmino): QueryWhitelistResponse;
    toAmino(message: QueryWhitelistResponse): QueryWhitelistResponseAmino;
    fromAminoMsg(object: QueryWhitelistResponseAminoMsg): QueryWhitelistResponse;
    fromProtoMsg(message: QueryWhitelistResponseProtoMsg): QueryWhitelistResponse;
    toProto(message: QueryWhitelistResponse): Uint8Array;
    toProtoMsg(message: QueryWhitelistResponse): QueryWhitelistResponseProtoMsg;
};
export declare const QueryWhitelistedRequest: {
    typeUrl: string;
    is(o: any): o is QueryWhitelistedRequest;
    isSDK(o: any): o is QueryWhitelistedRequestSDKType;
    isAmino(o: any): o is QueryWhitelistedRequestAmino;
    encode(message: QueryWhitelistedRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWhitelistedRequest;
    fromPartial(object: Partial<QueryWhitelistedRequest>): QueryWhitelistedRequest;
    fromAmino(object: QueryWhitelistedRequestAmino): QueryWhitelistedRequest;
    toAmino(message: QueryWhitelistedRequest): QueryWhitelistedRequestAmino;
    fromAminoMsg(object: QueryWhitelistedRequestAminoMsg): QueryWhitelistedRequest;
    fromProtoMsg(message: QueryWhitelistedRequestProtoMsg): QueryWhitelistedRequest;
    toProto(message: QueryWhitelistedRequest): Uint8Array;
    toProtoMsg(message: QueryWhitelistedRequest): QueryWhitelistedRequestProtoMsg;
};
export declare const QueryWhitelistedResponse: {
    typeUrl: string;
    is(o: any): o is QueryWhitelistedResponse;
    isSDK(o: any): o is QueryWhitelistedResponseSDKType;
    isAmino(o: any): o is QueryWhitelistedResponseAmino;
    encode(message: QueryWhitelistedResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWhitelistedResponse;
    fromPartial(object: Partial<QueryWhitelistedResponse>): QueryWhitelistedResponse;
    fromAmino(object: QueryWhitelistedResponseAmino): QueryWhitelistedResponse;
    toAmino(message: QueryWhitelistedResponse): QueryWhitelistedResponseAmino;
    fromAminoMsg(object: QueryWhitelistedResponseAminoMsg): QueryWhitelistedResponse;
    fromProtoMsg(message: QueryWhitelistedResponseProtoMsg): QueryWhitelistedResponse;
    toProto(message: QueryWhitelistedResponse): Uint8Array;
    toProtoMsg(message: QueryWhitelistedResponse): QueryWhitelistedResponseProtoMsg;
};
export declare const QueryEnterpriseAccountRequest: {
    typeUrl: string;
    is(o: any): o is QueryEnterpriseAccountRequest;
    isSDK(o: any): o is QueryEnterpriseAccountRequestSDKType;
    isAmino(o: any): o is QueryEnterpriseAccountRequestAmino;
    encode(message: QueryEnterpriseAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseAccountRequest;
    fromPartial(object: Partial<QueryEnterpriseAccountRequest>): QueryEnterpriseAccountRequest;
    fromAmino(object: QueryEnterpriseAccountRequestAmino): QueryEnterpriseAccountRequest;
    toAmino(message: QueryEnterpriseAccountRequest): QueryEnterpriseAccountRequestAmino;
    fromAminoMsg(object: QueryEnterpriseAccountRequestAminoMsg): QueryEnterpriseAccountRequest;
    fromProtoMsg(message: QueryEnterpriseAccountRequestProtoMsg): QueryEnterpriseAccountRequest;
    toProto(message: QueryEnterpriseAccountRequest): Uint8Array;
    toProtoMsg(message: QueryEnterpriseAccountRequest): QueryEnterpriseAccountRequestProtoMsg;
};
export declare const QueryEnterpriseAccountResponse: {
    typeUrl: string;
    is(o: any): o is QueryEnterpriseAccountResponse;
    isSDK(o: any): o is QueryEnterpriseAccountResponseSDKType;
    isAmino(o: any): o is QueryEnterpriseAccountResponseAmino;
    encode(message: QueryEnterpriseAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseAccountResponse;
    fromPartial(object: Partial<QueryEnterpriseAccountResponse>): QueryEnterpriseAccountResponse;
    fromAmino(object: QueryEnterpriseAccountResponseAmino): QueryEnterpriseAccountResponse;
    toAmino(message: QueryEnterpriseAccountResponse): QueryEnterpriseAccountResponseAmino;
    fromAminoMsg(object: QueryEnterpriseAccountResponseAminoMsg): QueryEnterpriseAccountResponse;
    fromProtoMsg(message: QueryEnterpriseAccountResponseProtoMsg): QueryEnterpriseAccountResponse;
    toProto(message: QueryEnterpriseAccountResponse): Uint8Array;
    toProtoMsg(message: QueryEnterpriseAccountResponse): QueryEnterpriseAccountResponseProtoMsg;
};
export declare const QueryTotalSpentEFUNDRequest: {
    typeUrl: string;
    is(o: any): o is QueryTotalSpentEFUNDRequest;
    isSDK(o: any): o is QueryTotalSpentEFUNDRequestSDKType;
    isAmino(o: any): o is QueryTotalSpentEFUNDRequestAmino;
    encode(_: QueryTotalSpentEFUNDRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSpentEFUNDRequest;
    fromPartial(_: Partial<QueryTotalSpentEFUNDRequest>): QueryTotalSpentEFUNDRequest;
    fromAmino(_: QueryTotalSpentEFUNDRequestAmino): QueryTotalSpentEFUNDRequest;
    toAmino(_: QueryTotalSpentEFUNDRequest): QueryTotalSpentEFUNDRequestAmino;
    fromAminoMsg(object: QueryTotalSpentEFUNDRequestAminoMsg): QueryTotalSpentEFUNDRequest;
    fromProtoMsg(message: QueryTotalSpentEFUNDRequestProtoMsg): QueryTotalSpentEFUNDRequest;
    toProto(message: QueryTotalSpentEFUNDRequest): Uint8Array;
    toProtoMsg(message: QueryTotalSpentEFUNDRequest): QueryTotalSpentEFUNDRequestProtoMsg;
};
export declare const QueryTotalSpentEFUNDResponse: {
    typeUrl: string;
    is(o: any): o is QueryTotalSpentEFUNDResponse;
    isSDK(o: any): o is QueryTotalSpentEFUNDResponseSDKType;
    isAmino(o: any): o is QueryTotalSpentEFUNDResponseAmino;
    encode(message: QueryTotalSpentEFUNDResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSpentEFUNDResponse;
    fromPartial(object: Partial<QueryTotalSpentEFUNDResponse>): QueryTotalSpentEFUNDResponse;
    fromAmino(object: QueryTotalSpentEFUNDResponseAmino): QueryTotalSpentEFUNDResponse;
    toAmino(message: QueryTotalSpentEFUNDResponse): QueryTotalSpentEFUNDResponseAmino;
    fromAminoMsg(object: QueryTotalSpentEFUNDResponseAminoMsg): QueryTotalSpentEFUNDResponse;
    fromProtoMsg(message: QueryTotalSpentEFUNDResponseProtoMsg): QueryTotalSpentEFUNDResponse;
    toProto(message: QueryTotalSpentEFUNDResponse): Uint8Array;
    toProtoMsg(message: QueryTotalSpentEFUNDResponse): QueryTotalSpentEFUNDResponseProtoMsg;
};
export declare const QuerySpentEFUNDByAddressRequest: {
    typeUrl: string;
    is(o: any): o is QuerySpentEFUNDByAddressRequest;
    isSDK(o: any): o is QuerySpentEFUNDByAddressRequestSDKType;
    isAmino(o: any): o is QuerySpentEFUNDByAddressRequestAmino;
    encode(message: QuerySpentEFUNDByAddressRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpentEFUNDByAddressRequest;
    fromPartial(object: Partial<QuerySpentEFUNDByAddressRequest>): QuerySpentEFUNDByAddressRequest;
    fromAmino(object: QuerySpentEFUNDByAddressRequestAmino): QuerySpentEFUNDByAddressRequest;
    toAmino(message: QuerySpentEFUNDByAddressRequest): QuerySpentEFUNDByAddressRequestAmino;
    fromAminoMsg(object: QuerySpentEFUNDByAddressRequestAminoMsg): QuerySpentEFUNDByAddressRequest;
    fromProtoMsg(message: QuerySpentEFUNDByAddressRequestProtoMsg): QuerySpentEFUNDByAddressRequest;
    toProto(message: QuerySpentEFUNDByAddressRequest): Uint8Array;
    toProtoMsg(message: QuerySpentEFUNDByAddressRequest): QuerySpentEFUNDByAddressRequestProtoMsg;
};
export declare const QuerySpentEFUNDByAddressResponse: {
    typeUrl: string;
    is(o: any): o is QuerySpentEFUNDByAddressResponse;
    isSDK(o: any): o is QuerySpentEFUNDByAddressResponseSDKType;
    isAmino(o: any): o is QuerySpentEFUNDByAddressResponseAmino;
    encode(message: QuerySpentEFUNDByAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpentEFUNDByAddressResponse;
    fromPartial(object: Partial<QuerySpentEFUNDByAddressResponse>): QuerySpentEFUNDByAddressResponse;
    fromAmino(object: QuerySpentEFUNDByAddressResponseAmino): QuerySpentEFUNDByAddressResponse;
    toAmino(message: QuerySpentEFUNDByAddressResponse): QuerySpentEFUNDByAddressResponseAmino;
    fromAminoMsg(object: QuerySpentEFUNDByAddressResponseAminoMsg): QuerySpentEFUNDByAddressResponse;
    fromProtoMsg(message: QuerySpentEFUNDByAddressResponseProtoMsg): QuerySpentEFUNDByAddressResponse;
    toProto(message: QuerySpentEFUNDByAddressResponse): Uint8Array;
    toProtoMsg(message: QuerySpentEFUNDByAddressResponse): QuerySpentEFUNDByAddressResponseProtoMsg;
};
