"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.registerBeacon = this.registerBeacon.bind(this);
        this.recordBeaconTimestamp = this.recordBeaconTimestamp.bind(this);
        this.purchaseBeaconStateStorage = this.purchaseBeaconStateStorage.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    registerBeacon(request) {
        const data = tx_1.MsgRegisterBeacon.encode(request).finish();
        const promise = this.rpc.request("mainchain.beacon.v1.Msg", "RegisterBeacon", data);
        return promise.then(data => tx_1.MsgRegisterBeaconResponse.decode(new binary_1.BinaryReader(data)));
    }
    recordBeaconTimestamp(request) {
        const data = tx_1.MsgRecordBeaconTimestamp.encode(request).finish();
        const promise = this.rpc.request("mainchain.beacon.v1.Msg", "RecordBeaconTimestamp", data);
        return promise.then(data => tx_1.MsgRecordBeaconTimestampResponse.decode(new binary_1.BinaryReader(data)));
    }
    purchaseBeaconStateStorage(request) {
        const data = tx_1.MsgPurchaseBeaconStateStorage.encode(request).finish();
        const promise = this.rpc.request("mainchain.beacon.v1.Msg", "PurchaseBeaconStateStorage", data);
        return promise.then(data => tx_1.MsgPurchaseBeaconStateStorageResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateParams(request) {
        const data = tx_1.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("mainchain.beacon.v1.Msg", "UpdateParams", data);
        return promise.then(data => tx_1.MsgUpdateParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
