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
        this.calculateFlowRate = this.calculateFlowRate.bind(this);
        this.streams = this.streams.bind(this);
        this.allStreamsForReceiver = this.allStreamsForReceiver.bind(this);
        this.streamByReceiverSender = this.streamByReceiverSender.bind(this);
        this.streamReceiverSenderCurrentFlow = this.streamReceiverSenderCurrentFlow.bind(this);
        this.allStreamsForSender = this.allStreamsForSender.bind(this);
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.stream.v1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    calculateFlowRate(request) {
        const data = query_1.QueryCalculateFlowRateRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.stream.v1.Query", "CalculateFlowRate", data);
        return promise.then(data => query_1.QueryCalculateFlowRateResponse.decode(new binary_1.BinaryReader(data)));
    }
    streams(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryStreamsRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.stream.v1.Query", "Streams", data);
        return promise.then(data => query_1.QueryStreamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    allStreamsForReceiver(request) {
        const data = query_1.QueryAllStreamsForReceiverRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.stream.v1.Query", "AllStreamsForReceiver", data);
        return promise.then(data => query_1.QueryAllStreamsForReceiverResponse.decode(new binary_1.BinaryReader(data)));
    }
    streamByReceiverSender(request) {
        const data = query_1.QueryStreamByReceiverSenderRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.stream.v1.Query", "StreamByReceiverSender", data);
        return promise.then(data => query_1.QueryStreamByReceiverSenderResponse.decode(new binary_1.BinaryReader(data)));
    }
    streamReceiverSenderCurrentFlow(request) {
        const data = query_1.QueryStreamReceiverSenderCurrentFlowRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.stream.v1.Query", "StreamReceiverSenderCurrentFlow", data);
        return promise.then(data => query_1.QueryStreamReceiverSenderCurrentFlowResponse.decode(new binary_1.BinaryReader(data)));
    }
    allStreamsForSender(request) {
        const data = query_1.QueryAllStreamsForSenderRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.stream.v1.Query", "AllStreamsForSender", data);
        return promise.then(data => query_1.QueryAllStreamsForSenderResponse.decode(new binary_1.BinaryReader(data)));
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
        calculateFlowRate(request) {
            return queryService.calculateFlowRate(request);
        },
        streams(request) {
            return queryService.streams(request);
        },
        allStreamsForReceiver(request) {
            return queryService.allStreamsForReceiver(request);
        },
        streamByReceiverSender(request) {
            return queryService.streamByReceiverSender(request);
        },
        streamReceiverSenderCurrentFlow(request) {
            return queryService.streamReceiverSenderCurrentFlow(request);
        },
        allStreamsForSender(request) {
            return queryService.allStreamsForSender(request);
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
    const useCalculateFlowRate = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["calculateFlowRateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.calculateFlowRate(request);
        }, options);
    };
    const useStreams = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["streamsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.streams(request);
        }, options);
    };
    const useAllStreamsForReceiver = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["allStreamsForReceiverQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.allStreamsForReceiver(request);
        }, options);
    };
    const useStreamByReceiverSender = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["streamByReceiverSenderQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.streamByReceiverSender(request);
        }, options);
    };
    const useStreamReceiverSenderCurrentFlow = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["streamReceiverSenderCurrentFlowQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.streamReceiverSenderCurrentFlow(request);
        }, options);
    };
    const useAllStreamsForSender = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["allStreamsForSenderQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.allStreamsForSender(request);
        }, options);
    };
    return {
        /** Parameters queries the parameters of the module. */ useParams,
        /** CalculateFlowRate can be used to calculate a flow rate (coins per second) to be used when creating/updating a stream */ useCalculateFlowRate,
        /** Streams queries all Streams. */ useStreams,
        /** AllStreamsForReceiver queries all Streams for a given receiver address */ useAllStreamsForReceiver,
        /** StreamByReceiverSender queries a stream for a given receiver and sender pair */ useStreamByReceiverSender,
        /** StreamReceiverSenderCurrentFlow queries a stream by the given receiver/sender pair and returns the current flow data */ useStreamReceiverSenderCurrentFlow,
        /** AllStreamsForSender queries all Streams for a given sender address */ useAllStreamsForSender
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
