import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
