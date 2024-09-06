"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/mainchain.enterprise.v1.MsgUndPurchaseOrder", tx_1.MsgUndPurchaseOrder], ["/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder", tx_1.MsgProcessUndPurchaseOrder], ["/mainchain.enterprise.v1.MsgWhitelistAddress", tx_1.MsgWhitelistAddress], ["/mainchain.enterprise.v1.MsgUpdateParams", tx_1.MsgUpdateParams]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        undPurchaseOrder(value) {
            return {
                typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrder",
                value: tx_1.MsgUndPurchaseOrder.encode(value).finish()
            };
        },
        processUndPurchaseOrder(value) {
            return {
                typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder",
                value: tx_1.MsgProcessUndPurchaseOrder.encode(value).finish()
            };
        },
        whitelistAddress(value) {
            return {
                typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddress",
                value: tx_1.MsgWhitelistAddress.encode(value).finish()
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/mainchain.enterprise.v1.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        undPurchaseOrder(value) {
            return {
                typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrder",
                value
            };
        },
        processUndPurchaseOrder(value) {
            return {
                typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder",
                value
            };
        },
        whitelistAddress(value) {
            return {
                typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddress",
                value
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/mainchain.enterprise.v1.MsgUpdateParams",
                value
            };
        }
    },
    fromPartial: {
        undPurchaseOrder(value) {
            return {
                typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrder",
                value: tx_1.MsgUndPurchaseOrder.fromPartial(value)
            };
        },
        processUndPurchaseOrder(value) {
            return {
                typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder",
                value: tx_1.MsgProcessUndPurchaseOrder.fromPartial(value)
            };
        },
        whitelistAddress(value) {
            return {
                typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddress",
                value: tx_1.MsgWhitelistAddress.fromPartial(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/mainchain.enterprise.v1.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
