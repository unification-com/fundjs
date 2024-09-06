"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createStream = this.createStream.bind(this);
        this.claimStream = this.claimStream.bind(this);
        this.topUpDeposit = this.topUpDeposit.bind(this);
        this.updateFlowRate = this.updateFlowRate.bind(this);
        this.cancelStream = this.cancelStream.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    createStream(request) {
        const data = tx_1.MsgCreateStream.encode(request).finish();
        const promise = this.rpc.request("mainchain.stream.v1.Msg", "CreateStream", data);
        return promise.then(data => tx_1.MsgCreateStreamResponse.decode(new binary_1.BinaryReader(data)));
    }
    claimStream(request) {
        const data = tx_1.MsgClaimStream.encode(request).finish();
        const promise = this.rpc.request("mainchain.stream.v1.Msg", "ClaimStream", data);
        return promise.then(data => tx_1.MsgClaimStreamResponse.decode(new binary_1.BinaryReader(data)));
    }
    topUpDeposit(request) {
        const data = tx_1.MsgTopUpDeposit.encode(request).finish();
        const promise = this.rpc.request("mainchain.stream.v1.Msg", "TopUpDeposit", data);
        return promise.then(data => tx_1.MsgTopUpDepositResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateFlowRate(request) {
        const data = tx_1.MsgUpdateFlowRate.encode(request).finish();
        const promise = this.rpc.request("mainchain.stream.v1.Msg", "UpdateFlowRate", data);
        return promise.then(data => tx_1.MsgUpdateFlowRateResponse.decode(new binary_1.BinaryReader(data)));
    }
    cancelStream(request) {
        const data = tx_1.MsgCancelStream.encode(request).finish();
        const promise = this.rpc.request("mainchain.stream.v1.Msg", "CancelStream", data);
        return promise.then(data => tx_1.MsgCancelStreamResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateParams(request) {
        const data = tx_1.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("mainchain.stream.v1.Msg", "UpdateParams", data);
        return promise.then(data => tx_1.MsgUpdateParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
