"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryHooks = exports.createRpcQueryExtension = exports.ServiceClientImpl = void 0;
const binary_1 = require("../../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const react_query_1 = require("@tanstack/react-query");
const query_1 = require("./query");
class ServiceClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.getNodeInfo = this.getNodeInfo.bind(this);
        this.getSyncing = this.getSyncing.bind(this);
        this.getLatestBlock = this.getLatestBlock.bind(this);
        this.getBlockByHeight = this.getBlockByHeight.bind(this);
        this.getLatestValidatorSet = this.getLatestValidatorSet.bind(this);
        this.getValidatorSetByHeight = this.getValidatorSetByHeight.bind(this);
    }
    getNodeInfo(request = {}) {
        const data = query_1.GetNodeInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
        return promise.then(data => query_1.GetNodeInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    getSyncing(request = {}) {
        const data = query_1.GetSyncingRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
        return promise.then(data => query_1.GetSyncingResponse.decode(new binary_1.BinaryReader(data)));
    }
    getLatestBlock(request = {}) {
        const data = query_1.GetLatestBlockRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
        return promise.then(data => query_1.GetLatestBlockResponse.decode(new binary_1.BinaryReader(data)));
    }
    getBlockByHeight(request) {
        const data = query_1.GetBlockByHeightRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
        return promise.then(data => query_1.GetBlockByHeightResponse.decode(new binary_1.BinaryReader(data)));
    }
    getLatestValidatorSet(request = {
        pagination: undefined
    }) {
        const data = query_1.GetLatestValidatorSetRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
        return promise.then(data => query_1.GetLatestValidatorSetResponse.decode(new binary_1.BinaryReader(data)));
    }
    getValidatorSetByHeight(request) {
        const data = query_1.GetValidatorSetByHeightRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetValidatorSetByHeight", data);
        return promise.then(data => query_1.GetValidatorSetByHeightResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.ServiceClientImpl = ServiceClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new ServiceClientImpl(rpc);
    return {
        getNodeInfo(request) {
            return queryService.getNodeInfo(request);
        },
        getSyncing(request) {
            return queryService.getSyncing(request);
        },
        getLatestBlock(request) {
            return queryService.getLatestBlock(request);
        },
        getBlockByHeight(request) {
            return queryService.getBlockByHeight(request);
        },
        getLatestValidatorSet(request) {
            return queryService.getLatestValidatorSet(request);
        },
        getValidatorSetByHeight(request) {
            return queryService.getValidatorSetByHeight(request);
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
    const queryService = new ServiceClientImpl(rpc);
    _queryClients.set(rpc, queryService);
    return queryService;
};
const createRpcQueryHooks = (rpc) => {
    const queryService = getQueryService(rpc);
    const useGetNodeInfo = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["getNodeInfoQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.getNodeInfo(request);
        }, options);
    };
    const useGetSyncing = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["getSyncingQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.getSyncing(request);
        }, options);
    };
    const useGetLatestBlock = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["getLatestBlockQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.getLatestBlock(request);
        }, options);
    };
    const useGetBlockByHeight = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["getBlockByHeightQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.getBlockByHeight(request);
        }, options);
    };
    const useGetLatestValidatorSet = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["getLatestValidatorSetQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.getLatestValidatorSet(request);
        }, options);
    };
    const useGetValidatorSetByHeight = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["getValidatorSetByHeightQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.getValidatorSetByHeight(request);
        }, options);
    };
    return {
        /** GetNodeInfo queries the current node info. */ useGetNodeInfo,
        /** GetSyncing queries node syncing. */ useGetSyncing,
        /** GetLatestBlock returns the latest block. */ useGetLatestBlock,
        /** GetBlockByHeight queries block for given height. */ useGetBlockByHeight,
        /** GetLatestValidatorSet queries latest validator-set. */ useGetLatestValidatorSet,
        /** GetValidatorSetByHeight queries validator-set at a given height. */ useGetValidatorSetByHeight
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
