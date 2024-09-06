"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.verifyInvariant = this.verifyInvariant.bind(this);
    }
    verifyInvariant(request) {
        const data = tx_1.MsgVerifyInvariant.encode(request).finish();
        const promise = this.rpc.request("cosmos.crisis.v1beta1.Msg", "VerifyInvariant", data);
        return promise.then(data => tx_1.MsgVerifyInvariantResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
