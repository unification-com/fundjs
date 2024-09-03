//@ts-nocheck
import { createProtobufRpcClient, ProtobufRpcClient,QueryClient } from '@cosmjs/stargate';
import { useQuery } from '@tanstack/react-query';

import { BinaryReader } from '../../../binary';
import { Rpc } from '../../../helpers';
import { ReactQueryParams } from '../../../react-query';
import { QueryEnterpriseAccountRequest, QueryEnterpriseAccountResponse, QueryEnterpriseSupplyRequest, QueryEnterpriseSupplyResponse, QueryEnterpriseUndPurchaseOrderRequest, QueryEnterpriseUndPurchaseOrderResponse, QueryEnterpriseUndPurchaseOrdersRequest, QueryEnterpriseUndPurchaseOrdersResponse, QueryLockedUndByAddressRequest, QueryLockedUndByAddressResponse, QueryParamsRequest, QueryParamsResponse, QuerySpentEFUNDByAddressRequest, QuerySpentEFUNDByAddressResponse,QuerySupplyOfRequest, QuerySupplyOfResponse, QueryTotalLockedRequest, QueryTotalLockedResponse, QueryTotalSpentEFUNDRequest, QueryTotalSpentEFUNDResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QueryTotalUnlockedRequest, QueryTotalUnlockedResponse, QueryWhitelistedRequest, QueryWhitelistedResponse, QueryWhitelistRequest, QueryWhitelistResponse } from './query';
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.enterpriseUndPurchaseOrder = this.enterpriseUndPurchaseOrder.bind(this);
    this.enterpriseUndPurchaseOrders = this.enterpriseUndPurchaseOrders.bind(this);
    this.lockedUndByAddress = this.lockedUndByAddress.bind(this);
    this.totalLocked = this.totalLocked.bind(this);
    this.totalUnlocked = this.totalUnlocked.bind(this);
    this.enterpriseSupply = this.enterpriseSupply.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.supplyOf = this.supplyOf.bind(this);
    this.totalSupplyOverwrite = this.totalSupplyOverwrite.bind(this);
    this.supplyOfOverwrite = this.supplyOfOverwrite.bind(this);
    this.whitelist = this.whitelist.bind(this);
    this.whitelisted = this.whitelisted.bind(this);
    this.enterpriseAccount = this.enterpriseAccount.bind(this);
    this.totalSpentEFUND = this.totalSpentEFUND.bind(this);
    this.spentEFUNDByAddress = this.spentEFUNDByAddress.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Query', 'Params', data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  enterpriseUndPurchaseOrder(request: QueryEnterpriseUndPurchaseOrderRequest): Promise<QueryEnterpriseUndPurchaseOrderResponse> {
    const data = QueryEnterpriseUndPurchaseOrderRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Query', 'EnterpriseUndPurchaseOrder', data);
    return promise.then(data => QueryEnterpriseUndPurchaseOrderResponse.decode(new BinaryReader(data)));
  }
  enterpriseUndPurchaseOrders(request: QueryEnterpriseUndPurchaseOrdersRequest): Promise<QueryEnterpriseUndPurchaseOrdersResponse> {
    const data = QueryEnterpriseUndPurchaseOrdersRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Query', 'EnterpriseUndPurchaseOrders', data);
    return promise.then(data => QueryEnterpriseUndPurchaseOrdersResponse.decode(new BinaryReader(data)));
  }
  lockedUndByAddress(request: QueryLockedUndByAddressRequest): Promise<QueryLockedUndByAddressResponse> {
    const data = QueryLockedUndByAddressRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Query', 'LockedUndByAddress', data);
    return promise.then(data => QueryLockedUndByAddressResponse.decode(new BinaryReader(data)));
  }
  totalLocked(request: QueryTotalLockedRequest = {}): Promise<QueryTotalLockedResponse> {
    const data = QueryTotalLockedRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Query', 'TotalLocked', data);
    return promise.then(data => QueryTotalLockedResponse.decode(new BinaryReader(data)));
  }
  totalUnlocked(request: QueryTotalUnlockedRequest = {}): Promise<QueryTotalUnlockedResponse> {
    const data = QueryTotalUnlockedRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Query', 'TotalUnlocked', data);
    return promise.then(data => QueryTotalUnlockedResponse.decode(new BinaryReader(data)));
  }
  enterpriseSupply(request: QueryEnterpriseSupplyRequest = {}): Promise<QueryEnterpriseSupplyResponse> {
    const data = QueryEnterpriseSupplyRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Query', 'EnterpriseSupply', data);
    return promise.then(data => QueryEnterpriseSupplyResponse.decode(new BinaryReader(data)));
  }
  totalSupply(request: QueryTotalSupplyRequest = {
    pagination: undefined
  }): Promise<QueryTotalSupplyResponse> {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Query', 'TotalSupply', data);
    return promise.then(data => QueryTotalSupplyResponse.decode(new BinaryReader(data)));
  }
  supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
    const data = QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Query', 'SupplyOf', data);
    return promise.then(data => QuerySupplyOfResponse.decode(new BinaryReader(data)));
  }
  totalSupplyOverwrite(request: QueryTotalSupplyRequest = {
    pagination: undefined
  }): Promise<QueryTotalSupplyResponse> {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Query', 'TotalSupplyOverwrite', data);
    return promise.then(data => QueryTotalSupplyResponse.decode(new BinaryReader(data)));
  }
  supplyOfOverwrite(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
    const data = QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Query', 'SupplyOfOverwrite', data);
    return promise.then(data => QuerySupplyOfResponse.decode(new BinaryReader(data)));
  }
  whitelist(request: QueryWhitelistRequest = {}): Promise<QueryWhitelistResponse> {
    const data = QueryWhitelistRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Query', 'Whitelist', data);
    return promise.then(data => QueryWhitelistResponse.decode(new BinaryReader(data)));
  }
  whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse> {
    const data = QueryWhitelistedRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Query', 'Whitelisted', data);
    return promise.then(data => QueryWhitelistedResponse.decode(new BinaryReader(data)));
  }
  enterpriseAccount(request: QueryEnterpriseAccountRequest): Promise<QueryEnterpriseAccountResponse> {
    const data = QueryEnterpriseAccountRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Query', 'EnterpriseAccount', data);
    return promise.then(data => QueryEnterpriseAccountResponse.decode(new BinaryReader(data)));
  }
  totalSpentEFUND(request: QueryTotalSpentEFUNDRequest = {}): Promise<QueryTotalSpentEFUNDResponse> {
    const data = QueryTotalSpentEFUNDRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Query', 'TotalSpentEFUND', data);
    return promise.then(data => QueryTotalSpentEFUNDResponse.decode(new BinaryReader(data)));
  }
  spentEFUNDByAddress(request: QuerySpentEFUNDByAddressRequest): Promise<QuerySpentEFUNDByAddressResponse> {
    const data = QuerySpentEFUNDByAddressRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Query', 'SpentEFUNDByAddress', data);
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
    totalUnlocked(request?: QueryTotalUnlockedRequest): Promise<QueryTotalUnlockedResponse> {
      return queryService.totalUnlocked(request);
    },
    enterpriseSupply(request?: QueryEnterpriseSupplyRequest): Promise<QueryEnterpriseSupplyResponse> {
      return queryService.enterpriseSupply(request);
    },
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse> {
      return queryService.totalSupply(request);
    },
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
      return queryService.supplyOf(request);
    },
    totalSupplyOverwrite(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse> {
      return queryService.totalSupplyOverwrite(request);
    },
    supplyOfOverwrite(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
      return queryService.supplyOfOverwrite(request);
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
const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(['paramsQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.params(request);
    }, options);
  };
  const useEnterpriseUndPurchaseOrder = <TData = QueryEnterpriseUndPurchaseOrderResponse,>({
    request,
    options
  }: UseEnterpriseUndPurchaseOrderQuery<TData>) => {
    return useQuery<QueryEnterpriseUndPurchaseOrderResponse, Error, TData>(['enterpriseUndPurchaseOrderQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.enterpriseUndPurchaseOrder(request);
    }, options);
  };
  const useEnterpriseUndPurchaseOrders = <TData = QueryEnterpriseUndPurchaseOrdersResponse,>({
    request,
    options
  }: UseEnterpriseUndPurchaseOrdersQuery<TData>) => {
    return useQuery<QueryEnterpriseUndPurchaseOrdersResponse, Error, TData>(['enterpriseUndPurchaseOrdersQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.enterpriseUndPurchaseOrders(request);
    }, options);
  };
  const useLockedUndByAddress = <TData = QueryLockedUndByAddressResponse,>({
    request,
    options
  }: UseLockedUndByAddressQuery<TData>) => {
    return useQuery<QueryLockedUndByAddressResponse, Error, TData>(['lockedUndByAddressQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.lockedUndByAddress(request);
    }, options);
  };
  const useTotalLocked = <TData = QueryTotalLockedResponse,>({
    request,
    options
  }: UseTotalLockedQuery<TData>) => {
    return useQuery<QueryTotalLockedResponse, Error, TData>(['totalLockedQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.totalLocked(request);
    }, options);
  };
  const useTotalUnlocked = <TData = QueryTotalUnlockedResponse,>({
    request,
    options
  }: UseTotalUnlockedQuery<TData>) => {
    return useQuery<QueryTotalUnlockedResponse, Error, TData>(['totalUnlockedQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.totalUnlocked(request);
    }, options);
  };
  const useEnterpriseSupply = <TData = QueryEnterpriseSupplyResponse,>({
    request,
    options
  }: UseEnterpriseSupplyQuery<TData>) => {
    return useQuery<QueryEnterpriseSupplyResponse, Error, TData>(['enterpriseSupplyQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.enterpriseSupply(request);
    }, options);
  };
  const useTotalSupply = <TData = QueryTotalSupplyResponse,>({
    request,
    options
  }: UseTotalSupplyQuery<TData>) => {
    return useQuery<QueryTotalSupplyResponse, Error, TData>(['totalSupplyQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.totalSupply(request);
    }, options);
  };
  const useSupplyOf = <TData = QuerySupplyOfResponse,>({
    request,
    options
  }: UseSupplyOfQuery<TData>) => {
    return useQuery<QuerySupplyOfResponse, Error, TData>(['supplyOfQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.supplyOf(request);
    }, options);
  };
  const useTotalSupplyOverwrite = <TData = QueryTotalSupplyResponse,>({
    request,
    options
  }: UseTotalSupplyOverwriteQuery<TData>) => {
    return useQuery<QueryTotalSupplyResponse, Error, TData>(['totalSupplyOverwriteQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.totalSupplyOverwrite(request);
    }, options);
  };
  const useSupplyOfOverwrite = <TData = QuerySupplyOfResponse,>({
    request,
    options
  }: UseSupplyOfOverwriteQuery<TData>) => {
    return useQuery<QuerySupplyOfResponse, Error, TData>(['supplyOfOverwriteQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.supplyOfOverwrite(request);
    }, options);
  };
  const useWhitelist = <TData = QueryWhitelistResponse,>({
    request,
    options
  }: UseWhitelistQuery<TData>) => {
    return useQuery<QueryWhitelistResponse, Error, TData>(['whitelistQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.whitelist(request);
    }, options);
  };
  const useWhitelisted = <TData = QueryWhitelistedResponse,>({
    request,
    options
  }: UseWhitelistedQuery<TData>) => {
    return useQuery<QueryWhitelistedResponse, Error, TData>(['whitelistedQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.whitelisted(request);
    }, options);
  };
  const useEnterpriseAccount = <TData = QueryEnterpriseAccountResponse,>({
    request,
    options
  }: UseEnterpriseAccountQuery<TData>) => {
    return useQuery<QueryEnterpriseAccountResponse, Error, TData>(['enterpriseAccountQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.enterpriseAccount(request);
    }, options);
  };
  const useTotalSpentEFUND = <TData = QueryTotalSpentEFUNDResponse,>({
    request,
    options
  }: UseTotalSpentEFUNDQuery<TData>) => {
    return useQuery<QueryTotalSpentEFUNDResponse, Error, TData>(['totalSpentEFUNDQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.totalSpentEFUND(request);
    }, options);
  };
  const useSpentEFUNDByAddress = <TData = QuerySpentEFUNDByAddressResponse,>({
    request,
    options
  }: UseSpentEFUNDByAddressQuery<TData>) => {
    return useQuery<QuerySpentEFUNDByAddressResponse, Error, TData>(['spentEFUNDByAddressQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.spentEFUNDByAddress(request);
    }, options);
  };
  return {
    /** Params queries the parameters of x/enterprise module. */useParams,
    /** EnterpriseUndPurchaseOrder queries purchase order details based on PurchaseOrderId. */useEnterpriseUndPurchaseOrder,
    /** EnterpriseUndPurchaseOrders queries all current purchase orders. */useEnterpriseUndPurchaseOrders,
    /** LockedUndByAddress queries an account address for their locked FUND */useLockedUndByAddress,
    /** TotalLocked queries the total locked FUND */useTotalLocked,
    /** TotalUnlocked queries the total Unlocked FUND */useTotalUnlocked,
    /** EnterpriseSupply queries the chain's supply, including locked Ent. FUND. Only returns nund data */useEnterpriseSupply,
    /**
     * TotalSupply should be used instead of /cosmos/bank/v1beta1/supply to get true total supply available
     * for general use, i.e. with locked eFUND removed from total for nund
     */
    useTotalSupply,
    /**
     * SupplyOf should be used in place of /cosmos/bank/v1beta1/supply to get true total supply,
     * with locked eFUND removed from total for nund
     */
    useSupplyOf,
    /**
     * TotalSupplyOverwrite should be used instead of /cosmos/bank/v1beta1/supply to get true total supply available
     * for general use, i.e. with locked eFUND removed from total for nund
     */
    useTotalSupplyOverwrite,
    /**
     * SupplyOf should be used in place of /cosmos/bank/v1beta1/supply to get true total supply,
     * with locked eFUND removed from total for nund
     */
    useSupplyOfOverwrite,
    /** Whitelist queries whitelisted addresses authorised to raise new purchase orders */useWhitelist,
    /** Whitelisted queries whether or not the given address is authorised to raise new purchase orders */useWhitelisted,
    /** EnterpriseAccount queries an account address for their locked FUND and other data */useEnterpriseAccount,
    /** TotalSpentEFUND queries the total eFUND usage to date - i.e. the amount used to pay fees */useTotalSpentEFUND,
    /** SpentEFUNDByAddress queries the total eFUND usage to date for a given address, i.e. the amount used to pay fees */useSpentEFUNDByAddress
  };
};