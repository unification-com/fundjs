import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryEnterpriseUndPurchaseOrderRequest, QueryEnterpriseUndPurchaseOrderResponse, QueryEnterpriseUndPurchaseOrdersRequest, QueryEnterpriseUndPurchaseOrdersResponse, QueryLockedUndByAddressRequest, QueryLockedUndByAddressResponse, QueryTotalLockedRequest, QueryTotalLockedResponse, QueryTotalUnlockedRequest, QueryTotalUnlockedResponse, QueryEnterpriseSupplyRequest, QueryEnterpriseSupplyResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryWhitelistRequest, QueryWhitelistResponse, QueryWhitelistedRequest, QueryWhitelistedResponse, QueryEnterpriseAccountRequest, QueryEnterpriseAccountResponse, QueryTotalSpentEFUNDRequest, QueryTotalSpentEFUNDResponse, QuerySpentEFUNDByAddressRequest, QuerySpentEFUNDByAddressResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params queries the parameters of x/enterprise module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** EnterpriseUndPurchaseOrder queries purchase order details based on PurchaseOrderId. */
    enterpriseUndPurchaseOrder(request: QueryEnterpriseUndPurchaseOrderRequest): Promise<QueryEnterpriseUndPurchaseOrderResponse>;
    /** EnterpriseUndPurchaseOrders queries all current purchase orders. */
    enterpriseUndPurchaseOrders(request: QueryEnterpriseUndPurchaseOrdersRequest): Promise<QueryEnterpriseUndPurchaseOrdersResponse>;
    /** LockedUndByAddress queries an account address for their locked FUND */
    lockedUndByAddress(request: QueryLockedUndByAddressRequest): Promise<QueryLockedUndByAddressResponse>;
    /** TotalLocked queries the total locked FUND */
    totalLocked(request?: QueryTotalLockedRequest): Promise<QueryTotalLockedResponse>;
    /** TotalUnlocked queries the total Unlocked FUND */
    totalUnlocked(request?: QueryTotalUnlockedRequest): Promise<QueryTotalUnlockedResponse>;
    /** EnterpriseSupply queries the chain's supply, including locked Ent. FUND. Only returns nund data */
    enterpriseSupply(request?: QueryEnterpriseSupplyRequest): Promise<QueryEnterpriseSupplyResponse>;
    /**
     * TotalSupply should be used instead of /cosmos/bank/v1beta1/supply to get true total supply available
     * for general use, i.e. with locked eFUND removed from total for nund
     */
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    /**
     * SupplyOf should be used in place of /cosmos/bank/v1beta1/supply to get true total supply,
     * with locked eFUND removed from total for nund
     */
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    /**
     * TotalSupplyOverwrite should be used instead of /cosmos/bank/v1beta1/supply to get true total supply available
     * for general use, i.e. with locked eFUND removed from total for nund
     */
    totalSupplyOverwrite(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    /**
     * SupplyOf should be used in place of /cosmos/bank/v1beta1/supply to get true total supply,
     * with locked eFUND removed from total for nund
     */
    supplyOfOverwrite(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    /** Whitelist queries whitelisted addresses authorised to raise new purchase orders */
    whitelist(request?: QueryWhitelistRequest): Promise<QueryWhitelistResponse>;
    /** Whitelisted queries whether or not the given address is authorised to raise new purchase orders */
    whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse>;
    /** EnterpriseAccount queries an account address for their locked FUND and other data */
    enterpriseAccount(request: QueryEnterpriseAccountRequest): Promise<QueryEnterpriseAccountResponse>;
    /** TotalSpentEFUND queries the total eFUND usage to date - i.e. the amount used to pay fees */
    totalSpentEFUND(request?: QueryTotalSpentEFUNDRequest): Promise<QueryTotalSpentEFUNDResponse>;
    /** SpentEFUNDByAddress queries the total eFUND usage to date for a given address, i.e. the amount used to pay fees */
    spentEFUNDByAddress(request: QuerySpentEFUNDByAddressRequest): Promise<QuerySpentEFUNDByAddressResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    enterpriseUndPurchaseOrder(request: QueryEnterpriseUndPurchaseOrderRequest): Promise<QueryEnterpriseUndPurchaseOrderResponse>;
    enterpriseUndPurchaseOrders(request: QueryEnterpriseUndPurchaseOrdersRequest): Promise<QueryEnterpriseUndPurchaseOrdersResponse>;
    lockedUndByAddress(request: QueryLockedUndByAddressRequest): Promise<QueryLockedUndByAddressResponse>;
    totalLocked(request?: QueryTotalLockedRequest): Promise<QueryTotalLockedResponse>;
    totalUnlocked(request?: QueryTotalUnlockedRequest): Promise<QueryTotalUnlockedResponse>;
    enterpriseSupply(request?: QueryEnterpriseSupplyRequest): Promise<QueryEnterpriseSupplyResponse>;
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    totalSupplyOverwrite(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    supplyOfOverwrite(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    whitelist(request?: QueryWhitelistRequest): Promise<QueryWhitelistResponse>;
    whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse>;
    enterpriseAccount(request: QueryEnterpriseAccountRequest): Promise<QueryEnterpriseAccountResponse>;
    totalSpentEFUND(request?: QueryTotalSpentEFUNDRequest): Promise<QueryTotalSpentEFUNDResponse>;
    spentEFUNDByAddress(request: QuerySpentEFUNDByAddressRequest): Promise<QuerySpentEFUNDByAddressResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    enterpriseUndPurchaseOrder(request: QueryEnterpriseUndPurchaseOrderRequest): Promise<QueryEnterpriseUndPurchaseOrderResponse>;
    enterpriseUndPurchaseOrders(request: QueryEnterpriseUndPurchaseOrdersRequest): Promise<QueryEnterpriseUndPurchaseOrdersResponse>;
    lockedUndByAddress(request: QueryLockedUndByAddressRequest): Promise<QueryLockedUndByAddressResponse>;
    totalLocked(request?: QueryTotalLockedRequest): Promise<QueryTotalLockedResponse>;
    totalUnlocked(request?: QueryTotalUnlockedRequest): Promise<QueryTotalUnlockedResponse>;
    enterpriseSupply(request?: QueryEnterpriseSupplyRequest): Promise<QueryEnterpriseSupplyResponse>;
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    totalSupplyOverwrite(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    supplyOfOverwrite(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    whitelist(request?: QueryWhitelistRequest): Promise<QueryWhitelistResponse>;
    whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse>;
    enterpriseAccount(request: QueryEnterpriseAccountRequest): Promise<QueryEnterpriseAccountResponse>;
    totalSpentEFUND(request?: QueryTotalSpentEFUNDRequest): Promise<QueryTotalSpentEFUNDResponse>;
    spentEFUNDByAddress(request: QuerySpentEFUNDByAddressRequest): Promise<QuerySpentEFUNDByAddressResponse>;
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseEnterpriseUndPurchaseOrderQuery<TData> extends ReactQueryParams<QueryEnterpriseUndPurchaseOrderResponse, TData> {
    request: QueryEnterpriseUndPurchaseOrderRequest;
}
export interface UseEnterpriseUndPurchaseOrdersQuery<TData> extends ReactQueryParams<QueryEnterpriseUndPurchaseOrdersResponse, TData> {
    request: QueryEnterpriseUndPurchaseOrdersRequest;
}
export interface UseLockedUndByAddressQuery<TData> extends ReactQueryParams<QueryLockedUndByAddressResponse, TData> {
    request: QueryLockedUndByAddressRequest;
}
export interface UseTotalLockedQuery<TData> extends ReactQueryParams<QueryTotalLockedResponse, TData> {
    request?: QueryTotalLockedRequest;
}
export interface UseTotalUnlockedQuery<TData> extends ReactQueryParams<QueryTotalUnlockedResponse, TData> {
    request?: QueryTotalUnlockedRequest;
}
export interface UseEnterpriseSupplyQuery<TData> extends ReactQueryParams<QueryEnterpriseSupplyResponse, TData> {
    request?: QueryEnterpriseSupplyRequest;
}
export interface UseTotalSupplyQuery<TData> extends ReactQueryParams<QueryTotalSupplyResponse, TData> {
    request?: QueryTotalSupplyRequest;
}
export interface UseSupplyOfQuery<TData> extends ReactQueryParams<QuerySupplyOfResponse, TData> {
    request: QuerySupplyOfRequest;
}
export interface UseTotalSupplyOverwriteQuery<TData> extends ReactQueryParams<QueryTotalSupplyResponse, TData> {
    request?: QueryTotalSupplyRequest;
}
export interface UseSupplyOfOverwriteQuery<TData> extends ReactQueryParams<QuerySupplyOfResponse, TData> {
    request: QuerySupplyOfRequest;
}
export interface UseWhitelistQuery<TData> extends ReactQueryParams<QueryWhitelistResponse, TData> {
    request?: QueryWhitelistRequest;
}
export interface UseWhitelistedQuery<TData> extends ReactQueryParams<QueryWhitelistedResponse, TData> {
    request: QueryWhitelistedRequest;
}
export interface UseEnterpriseAccountQuery<TData> extends ReactQueryParams<QueryEnterpriseAccountResponse, TData> {
    request: QueryEnterpriseAccountRequest;
}
export interface UseTotalSpentEFUNDQuery<TData> extends ReactQueryParams<QueryTotalSpentEFUNDResponse, TData> {
    request?: QueryTotalSpentEFUNDRequest;
}
export interface UseSpentEFUNDByAddressQuery<TData> extends ReactQueryParams<QuerySpentEFUNDByAddressResponse, TData> {
    request: QuerySpentEFUNDByAddressRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Params queries the parameters of x/enterprise module. */ useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => any;
    /** EnterpriseUndPurchaseOrder queries purchase order details based on PurchaseOrderId. */ useEnterpriseUndPurchaseOrder: <TData = QueryEnterpriseUndPurchaseOrderResponse>({ request, options }: UseEnterpriseUndPurchaseOrderQuery<TData>) => any;
    /** EnterpriseUndPurchaseOrders queries all current purchase orders. */ useEnterpriseUndPurchaseOrders: <TData = QueryEnterpriseUndPurchaseOrdersResponse>({ request, options }: UseEnterpriseUndPurchaseOrdersQuery<TData>) => any;
    /** LockedUndByAddress queries an account address for their locked FUND */ useLockedUndByAddress: <TData = QueryLockedUndByAddressResponse>({ request, options }: UseLockedUndByAddressQuery<TData>) => any;
    /** TotalLocked queries the total locked FUND */ useTotalLocked: <TData = QueryTotalLockedResponse>({ request, options }: UseTotalLockedQuery<TData>) => any;
    /** TotalUnlocked queries the total Unlocked FUND */ useTotalUnlocked: <TData = QueryTotalUnlockedResponse>({ request, options }: UseTotalUnlockedQuery<TData>) => any;
    /** EnterpriseSupply queries the chain's supply, including locked Ent. FUND. Only returns nund data */ useEnterpriseSupply: <TData = QueryEnterpriseSupplyResponse>({ request, options }: UseEnterpriseSupplyQuery<TData>) => any;
    /**
     * TotalSupply should be used instead of /cosmos/bank/v1beta1/supply to get true total supply available
     * for general use, i.e. with locked eFUND removed from total for nund
     */
    useTotalSupply: <TData = QueryTotalSupplyResponse>({ request, options }: UseTotalSupplyQuery<TData>) => any;
    /**
     * SupplyOf should be used in place of /cosmos/bank/v1beta1/supply to get true total supply,
     * with locked eFUND removed from total for nund
     */
    useSupplyOf: <TData = QuerySupplyOfResponse>({ request, options }: UseSupplyOfQuery<TData>) => any;
    /**
     * TotalSupplyOverwrite should be used instead of /cosmos/bank/v1beta1/supply to get true total supply available
     * for general use, i.e. with locked eFUND removed from total for nund
     */
    useTotalSupplyOverwrite: <TData = QueryTotalSupplyResponse>({ request, options }: UseTotalSupplyOverwriteQuery<TData>) => any;
    /**
     * SupplyOf should be used in place of /cosmos/bank/v1beta1/supply to get true total supply,
     * with locked eFUND removed from total for nund
     */
    useSupplyOfOverwrite: <TData = QuerySupplyOfResponse>({ request, options }: UseSupplyOfOverwriteQuery<TData>) => any;
    /** Whitelist queries whitelisted addresses authorised to raise new purchase orders */ useWhitelist: <TData = QueryWhitelistResponse>({ request, options }: UseWhitelistQuery<TData>) => any;
    /** Whitelisted queries whether or not the given address is authorised to raise new purchase orders */ useWhitelisted: <TData = QueryWhitelistedResponse>({ request, options }: UseWhitelistedQuery<TData>) => any;
    /** EnterpriseAccount queries an account address for their locked FUND and other data */ useEnterpriseAccount: <TData = QueryEnterpriseAccountResponse>({ request, options }: UseEnterpriseAccountQuery<TData>) => any;
    /** TotalSpentEFUND queries the total eFUND usage to date - i.e. the amount used to pay fees */ useTotalSpentEFUND: <TData = QueryTotalSpentEFUNDResponse>({ request, options }: UseTotalSpentEFUNDQuery<TData>) => any;
    /** SpentEFUNDByAddress queries the total eFUND usage to date for a given address, i.e. the amount used to pay fees */ useSpentEFUNDByAddress: <TData = QuerySpentEFUNDByAddressResponse>({ request, options }: UseSpentEFUNDByAddressQuery<TData>) => any;
};
