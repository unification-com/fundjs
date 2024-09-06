"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryHooks = exports.createRpcQueryExtension = exports.ServiceClientImpl = void 0;
const binary_1 = require("../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const react_query_1 = require("@tanstack/react-query");
const service_1 = require("./service");
class ServiceClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.simulate = this.simulate.bind(this);
        this.getTx = this.getTx.bind(this);
        this.broadcastTx = this.broadcastTx.bind(this);
        this.getTxsEvent = this.getTxsEvent.bind(this);
        this.getBlockWithTxs = this.getBlockWithTxs.bind(this);
    }
    simulate(request) {
        const data = service_1.SimulateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
        return promise.then(data => service_1.SimulateResponse.decode(new binary_1.BinaryReader(data)));
    }
    getTx(request) {
        const data = service_1.GetTxRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
        return promise.then(data => service_1.GetTxResponse.decode(new binary_1.BinaryReader(data)));
    }
    broadcastTx(request) {
        const data = service_1.BroadcastTxRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
        return promise.then(data => service_1.BroadcastTxResponse.decode(new binary_1.BinaryReader(data)));
    }
    getTxsEvent(request) {
        const data = service_1.GetTxsEventRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
        return promise.then(data => service_1.GetTxsEventResponse.decode(new binary_1.BinaryReader(data)));
    }
    getBlockWithTxs(request) {
        const data = service_1.GetBlockWithTxsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
        return promise.then(data => service_1.GetBlockWithTxsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.ServiceClientImpl = ServiceClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new ServiceClientImpl(rpc);
    return {
        simulate(request) {
            return queryService.simulate(request);
        },
        getTx(request) {
            return queryService.getTx(request);
        },
        broadcastTx(request) {
            return queryService.broadcastTx(request);
        },
        getTxsEvent(request) {
            return queryService.getTxsEvent(request);
        },
        getBlockWithTxs(request) {
            return queryService.getBlockWithTxs(request);
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
    const useSimulate = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["simulateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.simulate(request);
        }, options);
    };
    const useGetTx = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["getTxQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.getTx(request);
        }, options);
    };
    const useBroadcastTx = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["broadcastTxQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.broadcastTx(request);
        }, options);
    };
    const useGetTxsEvent = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["getTxsEventQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.getTxsEvent(request);
        }, options);
    };
    const useGetBlockWithTxs = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["getBlockWithTxsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.getBlockWithTxs(request);
        }, options);
    };
    return {
        /** Simulate simulates executing a transaction for estimating gas usage. */ useSimulate,
        /** GetTx fetches a tx by hash. */ useGetTx,
        /** BroadcastTx broadcast transaction. */ useBroadcastTx,
        /** GetTxsEvent fetches txs by event. */ useGetTxsEvent,
        /**
         * GetBlockWithTxs fetches a block with decoded txs.
         *
         * Since: cosmos-sdk 0.45.2
         */
        useGetBlockWithTxs
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
