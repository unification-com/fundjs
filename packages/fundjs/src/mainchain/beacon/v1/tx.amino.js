"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/mainchain.beacon.v1.MsgRegisterBeacon": {
        aminoType: "/mainchain.beacon.v1.MsgRegisterBeacon",
        toAmino: tx_1.MsgRegisterBeacon.toAmino,
        fromAmino: tx_1.MsgRegisterBeacon.fromAmino
    },
    "/mainchain.beacon.v1.MsgRecordBeaconTimestamp": {
        aminoType: "/mainchain.beacon.v1.MsgRecordBeaconTimestamp",
        toAmino: tx_1.MsgRecordBeaconTimestamp.toAmino,
        fromAmino: tx_1.MsgRecordBeaconTimestamp.fromAmino
    },
    "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage": {
        aminoType: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage",
        toAmino: tx_1.MsgPurchaseBeaconStateStorage.toAmino,
        fromAmino: tx_1.MsgPurchaseBeaconStateStorage.fromAmino
    },
    "/mainchain.beacon.v1.MsgUpdateParams": {
        aminoType: "mainchain/x/beacon/MsgUpdateParams",
        toAmino: tx_1.MsgUpdateParams.toAmino,
        fromAmino: tx_1.MsgUpdateParams.fromAmino
    }
};
