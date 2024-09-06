"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/mainchain.beacon.v1.MsgRegisterBeacon", tx_1.MsgRegisterBeacon], ["/mainchain.beacon.v1.MsgRecordBeaconTimestamp", tx_1.MsgRecordBeaconTimestamp], ["/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage", tx_1.MsgPurchaseBeaconStateStorage], ["/mainchain.beacon.v1.MsgUpdateParams", tx_1.MsgUpdateParams]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        registerBeacon(value) {
            return {
                typeUrl: "/mainchain.beacon.v1.MsgRegisterBeacon",
                value: tx_1.MsgRegisterBeacon.encode(value).finish()
            };
        },
        recordBeaconTimestamp(value) {
            return {
                typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestamp",
                value: tx_1.MsgRecordBeaconTimestamp.encode(value).finish()
            };
        },
        purchaseBeaconStateStorage(value) {
            return {
                typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage",
                value: tx_1.MsgPurchaseBeaconStateStorage.encode(value).finish()
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/mainchain.beacon.v1.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        registerBeacon(value) {
            return {
                typeUrl: "/mainchain.beacon.v1.MsgRegisterBeacon",
                value
            };
        },
        recordBeaconTimestamp(value) {
            return {
                typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestamp",
                value
            };
        },
        purchaseBeaconStateStorage(value) {
            return {
                typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage",
                value
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/mainchain.beacon.v1.MsgUpdateParams",
                value
            };
        }
    },
    fromPartial: {
        registerBeacon(value) {
            return {
                typeUrl: "/mainchain.beacon.v1.MsgRegisterBeacon",
                value: tx_1.MsgRegisterBeacon.fromPartial(value)
            };
        },
        recordBeaconTimestamp(value) {
            return {
                typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestamp",
                value: tx_1.MsgRecordBeaconTimestamp.fromPartial(value)
            };
        },
        purchaseBeaconStateStorage(value) {
            return {
                typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage",
                value: tx_1.MsgPurchaseBeaconStateStorage.fromPartial(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/mainchain.beacon.v1.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
