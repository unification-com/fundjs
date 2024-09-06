import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryEnterpriseUndPurchaseOrderRequest, QueryEnterpriseUndPurchaseOrderResponseSDKType, QueryEnterpriseUndPurchaseOrdersRequest, QueryEnterpriseUndPurchaseOrdersResponseSDKType, QueryLockedUndByAddressRequest, QueryLockedUndByAddressResponseSDKType, QueryTotalLockedRequest, QueryTotalLockedResponseSDKType, QueryTotalUnlockedRequest, QueryTotalUnlockedResponseSDKType, QueryEnterpriseSupplyRequest, QueryEnterpriseSupplyResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfResponseSDKType, QueryWhitelistRequest, QueryWhitelistResponseSDKType, QueryWhitelistedRequest, QueryWhitelistedResponseSDKType, QueryEnterpriseAccountRequest, QueryEnterpriseAccountResponseSDKType, QueryTotalSpentEFUNDRequest, QueryTotalSpentEFUNDResponseSDKType, QuerySpentEFUNDByAddressRequest, QuerySpentEFUNDByAddressResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    enterpriseUndPurchaseOrder(params: QueryEnterpriseUndPurchaseOrderRequest): Promise<QueryEnterpriseUndPurchaseOrderResponseSDKType>;
    enterpriseUndPurchaseOrders(params: QueryEnterpriseUndPurchaseOrdersRequest): Promise<QueryEnterpriseUndPurchaseOrdersResponseSDKType>;
    lockedUndByAddress(params: QueryLockedUndByAddressRequest): Promise<QueryLockedUndByAddressResponseSDKType>;
    totalLocked(_params?: QueryTotalLockedRequest): Promise<QueryTotalLockedResponseSDKType>;
    totalUnlocked(_params?: QueryTotalUnlockedRequest): Promise<QueryTotalUnlockedResponseSDKType>;
    enterpriseSupply(_params?: QueryEnterpriseSupplyRequest): Promise<QueryEnterpriseSupplyResponseSDKType>;
    totalSupply(params?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponseSDKType>;
    supplyOf(params: QuerySupplyOfRequest): Promise<QuerySupplyOfResponseSDKType>;
    totalSupplyOverwrite(params?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponseSDKType>;
    supplyOfOverwrite(params: QuerySupplyOfRequest): Promise<QuerySupplyOfResponseSDKType>;
    whitelist(_params?: QueryWhitelistRequest): Promise<QueryWhitelistResponseSDKType>;
    whitelisted(params: QueryWhitelistedRequest): Promise<QueryWhitelistedResponseSDKType>;
    enterpriseAccount(params: QueryEnterpriseAccountRequest): Promise<QueryEnterpriseAccountResponseSDKType>;
    totalSpentEFUND(_params?: QueryTotalSpentEFUNDRequest): Promise<QueryTotalSpentEFUNDResponseSDKType>;
    spentEFUNDByAddress(params: QuerySpentEFUNDByAddressRequest): Promise<QuerySpentEFUNDByAddressResponseSDKType>;
}
