"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
//@ts-nocheck
const helpers_1 = require("../../../helpers");
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.calculateFlowRate = this.calculateFlowRate.bind(this);
        this.streams = this.streams.bind(this);
        this.allStreamsForReceiver = this.allStreamsForReceiver.bind(this);
        this.streamByReceiverSender = this.streamByReceiverSender.bind(this);
        this.streamReceiverSenderCurrentFlow = this.streamReceiverSenderCurrentFlow.bind(this);
        this.allStreamsForSender = this.allStreamsForSender.bind(this);
    }
    /* Parameters queries the parameters of the module. */
    async params(_params = {}) {
        const endpoint = `mainchain/stream/v1/params`;
        return await this.req.get(endpoint);
    }
    /* CalculateFlowRate can be used to calculate a flow rate (coins per second) to be used when creating/updating a stream */
    async calculateFlowRate(params) {
        const options = {
            params: {}
        };
        if (typeof params?.coin !== "undefined") {
            options.params.coin = params.coin;
        }
        if (typeof params?.period !== "undefined") {
            options.params.period = params.period;
        }
        if (typeof params?.duration !== "undefined") {
            options.params.duration = params.duration;
        }
        const endpoint = `mainchain/stream/v1/calculate_flow_Rate`;
        return await this.req.get(endpoint, options);
    }
    /* Streams queries all Streams. */
    async streams(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `mainchain/stream/v1/streams/all`;
        return await this.req.get(endpoint, options);
    }
    /* AllStreamsForReceiver queries all Streams for a given receiver address */
    async allStreamsForReceiver(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `mainchain/stream/v1/streams/receiver/${params.receiverAddr}`;
        return await this.req.get(endpoint, options);
    }
    /* StreamByReceiverSender queries a stream for a given receiver and sender pair */
    async streamByReceiverSender(params) {
        const endpoint = `mainchain/stream/v1/streams/receiver/${params.receiverAddr}/${params.senderAddr}`;
        return await this.req.get(endpoint);
    }
    /* StreamReceiverSenderCurrentFlow queries a stream by the given receiver/sender pair and returns the current flow data */
    async streamReceiverSenderCurrentFlow(params) {
        const endpoint = `mainchain/stream/v1/streams/receiver/${params.receiverAddr}/${params.senderAddr}/current_flow`;
        return await this.req.get(endpoint);
    }
    /* AllStreamsForSender queries all Streams for a given sender address */
    async allStreamsForSender(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `mainchain/stream/v1/streams/sender/${params.senderAddr}`;
        return await this.req.get(endpoint, options);
    }
}
exports.LCDQueryClient = LCDQueryClient;
