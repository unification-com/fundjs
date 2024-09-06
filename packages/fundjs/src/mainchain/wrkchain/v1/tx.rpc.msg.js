"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.registerWrkChain = this.registerWrkChain.bind(this);
        this.recordWrkChainBlock = this.recordWrkChainBlock.bind(this);
        this.purchaseWrkChainStateStorage = this.purchaseWrkChainStateStorage.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    registerWrkChain(request) {
        const data = tx_1.MsgRegisterWrkChain.encode(request).finish();
        const promise = this.rpc.request("mainchain.wrkchain.v1.Msg", "RegisterWrkChain", data);
        return promise.then(data => tx_1.MsgRegisterWrkChainResponse.decode(new binary_1.BinaryReader(data)));
    }
    recordWrkChainBlock(request) {
        const data = tx_1.MsgRecordWrkChainBlock.encode(request).finish();
        const promise = this.rpc.request("mainchain.wrkchain.v1.Msg", "RecordWrkChainBlock", data);
        return promise.then(data => tx_1.MsgRecordWrkChainBlockResponse.decode(new binary_1.BinaryReader(data)));
    }
    purchaseWrkChainStateStorage(request) {
        const data = tx_1.MsgPurchaseWrkChainStateStorage.encode(request).finish();
        const promise = this.rpc.request("mainchain.wrkchain.v1.Msg", "PurchaseWrkChainStateStorage", data);
        return promise.then(data => tx_1.MsgPurchaseWrkChainStateStorageResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateParams(request) {
        const data = tx_1.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("mainchain.wrkchain.v1.Msg", "UpdateParams", data);
        return promise.then(data => tx_1.MsgUpdateParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
