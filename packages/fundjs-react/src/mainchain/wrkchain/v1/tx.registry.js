"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/mainchain.wrkchain.v1.MsgRegisterWrkChain", tx_1.MsgRegisterWrkChain], ["/mainchain.wrkchain.v1.MsgRecordWrkChainBlock", tx_1.MsgRecordWrkChainBlock], ["/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage", tx_1.MsgPurchaseWrkChainStateStorage], ["/mainchain.wrkchain.v1.MsgUpdateParams", tx_1.MsgUpdateParams]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        registerWrkChain(value) {
            return {
                typeUrl: "/mainchain.wrkchain.v1.MsgRegisterWrkChain",
                value: tx_1.MsgRegisterWrkChain.encode(value).finish()
            };
        },
        recordWrkChainBlock(value) {
            return {
                typeUrl: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock",
                value: tx_1.MsgRecordWrkChainBlock.encode(value).finish()
            };
        },
        purchaseWrkChainStateStorage(value) {
            return {
                typeUrl: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage",
                value: tx_1.MsgPurchaseWrkChainStateStorage.encode(value).finish()
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/mainchain.wrkchain.v1.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        registerWrkChain(value) {
            return {
                typeUrl: "/mainchain.wrkchain.v1.MsgRegisterWrkChain",
                value
            };
        },
        recordWrkChainBlock(value) {
            return {
                typeUrl: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock",
                value
            };
        },
        purchaseWrkChainStateStorage(value) {
            return {
                typeUrl: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage",
                value
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/mainchain.wrkchain.v1.MsgUpdateParams",
                value
            };
        }
    },
    fromPartial: {
        registerWrkChain(value) {
            return {
                typeUrl: "/mainchain.wrkchain.v1.MsgRegisterWrkChain",
                value: tx_1.MsgRegisterWrkChain.fromPartial(value)
            };
        },
        recordWrkChainBlock(value) {
            return {
                typeUrl: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock",
                value: tx_1.MsgRecordWrkChainBlock.fromPartial(value)
            };
        },
        purchaseWrkChainStateStorage(value) {
            return {
                typeUrl: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage",
                value: tx_1.MsgPurchaseWrkChainStateStorage.fromPartial(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/mainchain.wrkchain.v1.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
