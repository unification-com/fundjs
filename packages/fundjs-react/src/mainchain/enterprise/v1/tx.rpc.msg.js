"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.undPurchaseOrder = this.undPurchaseOrder.bind(this);
        this.processUndPurchaseOrder = this.processUndPurchaseOrder.bind(this);
        this.whitelistAddress = this.whitelistAddress.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    undPurchaseOrder(request) {
        const data = tx_1.MsgUndPurchaseOrder.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Msg", "UndPurchaseOrder", data);
        return promise.then(data => tx_1.MsgUndPurchaseOrderResponse.decode(new binary_1.BinaryReader(data)));
    }
    processUndPurchaseOrder(request) {
        const data = tx_1.MsgProcessUndPurchaseOrder.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Msg", "ProcessUndPurchaseOrder", data);
        return promise.then(data => tx_1.MsgProcessUndPurchaseOrderResponse.decode(new binary_1.BinaryReader(data)));
    }
    whitelistAddress(request) {
        const data = tx_1.MsgWhitelistAddress.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Msg", "WhitelistAddress", data);
        return promise.then(data => tx_1.MsgWhitelistAddressResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateParams(request) {
        const data = tx_1.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Msg", "UpdateParams", data);
        return promise.then(data => tx_1.MsgUpdateParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
