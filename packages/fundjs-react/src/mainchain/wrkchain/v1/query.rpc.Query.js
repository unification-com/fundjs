"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryHooks = exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const react_query_1 = require("@tanstack/react-query");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.wrkChain = this.wrkChain.bind(this);
        this.wrkChainBlock = this.wrkChainBlock.bind(this);
        this.wrkChainsFiltered = this.wrkChainsFiltered.bind(this);
        this.wrkChainStorage = this.wrkChainStorage.bind(this);
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    wrkChain(request) {
        const data = query_1.QueryWrkChainRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "WrkChain", data);
        return promise.then(data => query_1.QueryWrkChainResponse.decode(new binary_1.BinaryReader(data)));
    }
    wrkChainBlock(request) {
        const data = query_1.QueryWrkChainBlockRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "WrkChainBlock", data);
        return promise.then(data => query_1.QueryWrkChainBlockResponse.decode(new binary_1.BinaryReader(data)));
    }
    wrkChainsFiltered(request) {
        const data = query_1.QueryWrkChainsFilteredRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "WrkChainsFiltered", data);
        return promise.then(data => query_1.QueryWrkChainsFilteredResponse.decode(new binary_1.BinaryReader(data)));
    }
    wrkChainStorage(request) {
        const data = query_1.QueryWrkChainStorageRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "WrkChainStorage", data);
        return promise.then(data => query_1.QueryWrkChainStorageResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        wrkChain(request) {
            return queryService.wrkChain(request);
        },
        wrkChainBlock(request) {
            return queryService.wrkChainBlock(request);
        },
        wrkChainsFiltered(request) {
            return queryService.wrkChainsFiltered(request);
        },
        wrkChainStorage(request) {
            return queryService.wrkChainStorage(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
const _queryClients = new WeakMap();
const getQueryService = (rpc) => {
    if (!rpc)
        return;
    if (_queryClients.has(rpc)) {
        return _queryClients.get(rpc);
    }
    const queryService = new QueryClientImpl(rpc);
    _queryClients.set(rpc, queryService);
    return queryService;
};
const createRpcQueryHooks = (rpc) => {
    const queryService = getQueryService(rpc);
    const useParams = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["paramsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.params(request);
        }, options);
    };
    const useWrkChain = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["wrkChainQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.wrkChain(request);
        }, options);
    };
    const useWrkChainBlock = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["wrkChainBlockQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.wrkChainBlock(request);
        }, options);
    };
    const useWrkChainsFiltered = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["wrkChainsFilteredQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.wrkChainsFiltered(request);
        }, options);
    };
    const useWrkChainStorage = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["wrkChainStorageQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.wrkChainStorage(request);
        }, options);
    };
    return {
        /** Params queries the parameters of x/wrkchain module. */ useParams,
        /** WrkChain queries the metadata of a wrkchain. */ useWrkChain,
        /** WrkChainBlock queries a submitted hash of a wrkchain */ useWrkChainBlock,
        /** WrkChainsFiltered queries all wrkchain metadata for given search parameters */ useWrkChainsFiltered,
        /** WrkChainStorage queries wrkchain storage for for given wrkchain ID */ useWrkChainStorage
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
