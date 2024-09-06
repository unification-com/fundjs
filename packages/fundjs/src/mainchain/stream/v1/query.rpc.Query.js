"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../binary");
const stargate_1 = require("@cosmjs/stargate");
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
