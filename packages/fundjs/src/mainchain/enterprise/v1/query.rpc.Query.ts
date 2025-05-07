//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryEnterpriseUndPurchaseOrderRequest, QueryEnterpriseUndPurchaseOrderResponse, QueryEnterpriseUndPurchaseOrdersRequest, QueryEnterpriseUndPurchaseOrdersResponse, QueryLockedUndByAddressRequest, QueryLockedUndByAddressResponse, QueryTotalLockedRequest, QueryTotalLockedResponse, QueryWhitelistRequest, QueryWhitelistResponse, QueryWhitelistedRequest, QueryWhitelistedResponse, QueryEnterpriseAccountRequest, QueryEnterpriseAccountResponse, QueryTotalSpentEFUNDRequest, QueryTotalSpentEFUNDResponse, QuerySpentEFUNDByAddressRequest, QuerySpentEFUNDByAddressResponse } from "./query";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.enterpriseUndPurchaseOrder = this.enterpriseUndPurchaseOrder.bind(this);
    this.enterpriseUndPurchaseOrders = this.enterpriseUndPurchaseOrders.bind(this);
    this.lockedUndByAddress = this.lockedUndByAddress.bind(this);
    this.totalLocked = this.totalLocked.bind(this);
    this.whitelist = this.whitelist.bind(this);
    this.whitelisted = this.whitelisted.bind(this);
    this.enterpriseAccount = this.enterpriseAccount.bind(this);
    this.totalSpentEFUND = this.totalSpentEFUND.bind(this);
    this.spentEFUNDByAddress = this.spentEFUNDByAddress.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  enterpriseUndPurchaseOrder(request: QueryEnterpriseUndPurchaseOrderRequest): Promise<QueryEnterpriseUndPurchaseOrderResponse> {
    const data = QueryEnterpriseUndPurchaseOrderRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "EnterpriseUndPurchaseOrder", data);
    return promise.then(data => QueryEnterpriseUndPurchaseOrderResponse.decode(new BinaryReader(data)));
  }
  enterpriseUndPurchaseOrders(request: QueryEnterpriseUndPurchaseOrdersRequest): Promise<QueryEnterpriseUndPurchaseOrdersResponse> {
    const data = QueryEnterpriseUndPurchaseOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "EnterpriseUndPurchaseOrders", data);
    return promise.then(data => QueryEnterpriseUndPurchaseOrdersResponse.decode(new BinaryReader(data)));
  }
  lockedUndByAddress(request: QueryLockedUndByAddressRequest): Promise<QueryLockedUndByAddressResponse> {
    const data = QueryLockedUndByAddressRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "LockedUndByAddress", data);
    return promise.then(data => QueryLockedUndByAddressResponse.decode(new BinaryReader(data)));
  }
  totalLocked(request: QueryTotalLockedRequest = {}): Promise<QueryTotalLockedResponse> {
    const data = QueryTotalLockedRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "TotalLocked", data);
    return promise.then(data => QueryTotalLockedResponse.decode(new BinaryReader(data)));
  }
  whitelist(request: QueryWhitelistRequest = {}): Promise<QueryWhitelistResponse> {
    const data = QueryWhitelistRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "Whitelist", data);
    return promise.then(data => QueryWhitelistResponse.decode(new BinaryReader(data)));
  }
  whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse> {
    const data = QueryWhitelistedRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "Whitelisted", data);
    return promise.then(data => QueryWhitelistedResponse.decode(new BinaryReader(data)));
  }
  enterpriseAccount(request: QueryEnterpriseAccountRequest): Promise<QueryEnterpriseAccountResponse> {
    const data = QueryEnterpriseAccountRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "EnterpriseAccount", data);
    return promise.then(data => QueryEnterpriseAccountResponse.decode(new BinaryReader(data)));
  }
  totalSpentEFUND(request: QueryTotalSpentEFUNDRequest = {}): Promise<QueryTotalSpentEFUNDResponse> {
    const data = QueryTotalSpentEFUNDRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "TotalSpentEFUND", data);
    return promise.then(data => QueryTotalSpentEFUNDResponse.decode(new BinaryReader(data)));
  }
  spentEFUNDByAddress(request: QuerySpentEFUNDByAddressRequest): Promise<QuerySpentEFUNDByAddressResponse> {
    const data = QuerySpentEFUNDByAddressRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "SpentEFUNDByAddress", data);
    return promise.then(data => QuerySpentEFUNDByAddressResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    enterpriseUndPurchaseOrder(request: QueryEnterpriseUndPurchaseOrderRequest): Promise<QueryEnterpriseUndPurchaseOrderResponse> {
      return queryService.enterpriseUndPurchaseOrder(request);
    },
    enterpriseUndPurchaseOrders(request: QueryEnterpriseUndPurchaseOrdersRequest): Promise<QueryEnterpriseUndPurchaseOrdersResponse> {
      return queryService.enterpriseUndPurchaseOrders(request);
    },
    lockedUndByAddress(request: QueryLockedUndByAddressRequest): Promise<QueryLockedUndByAddressResponse> {
      return queryService.lockedUndByAddress(request);
    },
    totalLocked(request?: QueryTotalLockedRequest): Promise<QueryTotalLockedResponse> {
      return queryService.totalLocked(request);
    },
    whitelist(request?: QueryWhitelistRequest): Promise<QueryWhitelistResponse> {
      return queryService.whitelist(request);
    },
    whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse> {
      return queryService.whitelisted(request);
    },
    enterpriseAccount(request: QueryEnterpriseAccountRequest): Promise<QueryEnterpriseAccountResponse> {
      return queryService.enterpriseAccount(request);
    },
    totalSpentEFUND(request?: QueryTotalSpentEFUNDRequest): Promise<QueryTotalSpentEFUNDResponse> {
      return queryService.totalSpentEFUND(request);
    },
    spentEFUNDByAddress(request: QuerySpentEFUNDByAddressRequest): Promise<QuerySpentEFUNDByAddressResponse> {
      return queryService.spentEFUNDByAddress(request);
    }
  };
};