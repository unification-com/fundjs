//@ts-nocheck
import { createProtobufRpcClient, ProtobufRpcClient,QueryClient } from '@cosmjs/stargate';
import { useQuery } from '@tanstack/react-query';

import { BinaryReader } from '../../../binary';
import { Rpc } from '../../../helpers';
import { ReactQueryParams } from '../../../react-query';
import { QueryParamsRequest, QueryParamsResponse, QueryWrkChainBlockRequest, QueryWrkChainBlockResponse, QueryWrkChainRequest, QueryWrkChainResponse, QueryWrkChainsFilteredRequest, QueryWrkChainsFilteredResponse, QueryWrkChainStorageRequest, QueryWrkChainStorageResponse } from './query';
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of x/wrkchain module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** WrkChain queries the metadata of a wrkchain. */
  wrkChain(request: QueryWrkChainRequest): Promise<QueryWrkChainResponse>;
  /** WrkChainBlock queries a submitted hash of a wrkchain */
  wrkChainBlock(request: QueryWrkChainBlockRequest): Promise<QueryWrkChainBlockResponse>;
  /** WrkChainsFiltered queries all wrkchain metadata for given search parameters */
  wrkChainsFiltered(request: QueryWrkChainsFilteredRequest): Promise<QueryWrkChainsFilteredResponse>;
  /** WrkChainStorage queries wrkchain storage for for given wrkchain ID */
  wrkChainStorage(request: QueryWrkChainStorageRequest): Promise<QueryWrkChainStorageResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.wrkChain = this.wrkChain.bind(this);
    this.wrkChainBlock = this.wrkChainBlock.bind(this);
    this.wrkChainsFiltered = this.wrkChainsFiltered.bind(this);
    this.wrkChainStorage = this.wrkChainStorage.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.wrkchain.v1.Query', 'Params', data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  wrkChain(request: QueryWrkChainRequest): Promise<QueryWrkChainResponse> {
    const data = QueryWrkChainRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.wrkchain.v1.Query', 'WrkChain', data);
    return promise.then(data => QueryWrkChainResponse.decode(new BinaryReader(data)));
  }
  wrkChainBlock(request: QueryWrkChainBlockRequest): Promise<QueryWrkChainBlockResponse> {
    const data = QueryWrkChainBlockRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.wrkchain.v1.Query', 'WrkChainBlock', data);
    return promise.then(data => QueryWrkChainBlockResponse.decode(new BinaryReader(data)));
  }
  wrkChainsFiltered(request: QueryWrkChainsFilteredRequest): Promise<QueryWrkChainsFilteredResponse> {
    const data = QueryWrkChainsFilteredRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.wrkchain.v1.Query', 'WrkChainsFiltered', data);
    return promise.then(data => QueryWrkChainsFilteredResponse.decode(new BinaryReader(data)));
  }
  wrkChainStorage(request: QueryWrkChainStorageRequest): Promise<QueryWrkChainStorageResponse> {
    const data = QueryWrkChainStorageRequest.encode(request).finish();
    const promise = this.rpc.request('mainchain.wrkchain.v1.Query', 'WrkChainStorage', data);
    return promise.then(data => QueryWrkChainStorageResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    wrkChain(request: QueryWrkChainRequest): Promise<QueryWrkChainResponse> {
      return queryService.wrkChain(request);
    },
    wrkChainBlock(request: QueryWrkChainBlockRequest): Promise<QueryWrkChainBlockResponse> {
      return queryService.wrkChainBlock(request);
    },
    wrkChainsFiltered(request: QueryWrkChainsFilteredRequest): Promise<QueryWrkChainsFilteredResponse> {
      return queryService.wrkChainsFiltered(request);
    },
    wrkChainStorage(request: QueryWrkChainStorageRequest): Promise<QueryWrkChainStorageResponse> {
      return queryService.wrkChainStorage(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseWrkChainQuery<TData> extends ReactQueryParams<QueryWrkChainResponse, TData> {
  request: QueryWrkChainRequest;
}
export interface UseWrkChainBlockQuery<TData> extends ReactQueryParams<QueryWrkChainBlockResponse, TData> {
  request: QueryWrkChainBlockRequest;
}
export interface UseWrkChainsFilteredQuery<TData> extends ReactQueryParams<QueryWrkChainsFilteredResponse, TData> {
  request: QueryWrkChainsFilteredRequest;
}
export interface UseWrkChainStorageQuery<TData> extends ReactQueryParams<QueryWrkChainStorageResponse, TData> {
  request: QueryWrkChainStorageRequest;
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
  const useWrkChain = <TData = QueryWrkChainResponse,>({
    request,
    options
  }: UseWrkChainQuery<TData>) => {
    return useQuery<QueryWrkChainResponse, Error, TData>(['wrkChainQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.wrkChain(request);
    }, options);
  };
  const useWrkChainBlock = <TData = QueryWrkChainBlockResponse,>({
    request,
    options
  }: UseWrkChainBlockQuery<TData>) => {
    return useQuery<QueryWrkChainBlockResponse, Error, TData>(['wrkChainBlockQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.wrkChainBlock(request);
    }, options);
  };
  const useWrkChainsFiltered = <TData = QueryWrkChainsFilteredResponse,>({
    request,
    options
  }: UseWrkChainsFilteredQuery<TData>) => {
    return useQuery<QueryWrkChainsFilteredResponse, Error, TData>(['wrkChainsFilteredQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.wrkChainsFiltered(request);
    }, options);
  };
  const useWrkChainStorage = <TData = QueryWrkChainStorageResponse,>({
    request,
    options
  }: UseWrkChainStorageQuery<TData>) => {
    return useQuery<QueryWrkChainStorageResponse, Error, TData>(['wrkChainStorageQuery', request], () => {
      if (!queryService) throw new Error('Query Service not initialized');
      return queryService.wrkChainStorage(request);
    }, options);
  };
  return {
    /** Params queries the parameters of x/wrkchain module. */useParams,
    /** WrkChain queries the metadata of a wrkchain. */useWrkChain,
    /** WrkChainBlock queries a submitted hash of a wrkchain */useWrkChainBlock,
    /** WrkChainsFiltered queries all wrkchain metadata for given search parameters */useWrkChainsFiltered,
    /** WrkChainStorage queries wrkchain storage for for given wrkchain ID */useWrkChainStorage
  };
};