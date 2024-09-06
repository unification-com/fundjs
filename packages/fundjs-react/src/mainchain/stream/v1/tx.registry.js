"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/mainchain.stream.v1.MsgCreateStream", tx_1.MsgCreateStream], ["/mainchain.stream.v1.MsgClaimStream", tx_1.MsgClaimStream], ["/mainchain.stream.v1.MsgTopUpDeposit", tx_1.MsgTopUpDeposit], ["/mainchain.stream.v1.MsgUpdateFlowRate", tx_1.MsgUpdateFlowRate], ["/mainchain.stream.v1.MsgCancelStream", tx_1.MsgCancelStream], ["/mainchain.stream.v1.MsgUpdateParams", tx_1.MsgUpdateParams]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createStream(value) {
            return {
                typeUrl: "/mainchain.stream.v1.MsgCreateStream",
                value: tx_1.MsgCreateStream.encode(value).finish()
            };
        },
        claimStream(value) {
            return {
                typeUrl: "/mainchain.stream.v1.MsgClaimStream",
                value: tx_1.MsgClaimStream.encode(value).finish()
            };
        },
        topUpDeposit(value) {
            return {
                typeUrl: "/mainchain.stream.v1.MsgTopUpDeposit",
                value: tx_1.MsgTopUpDeposit.encode(value).finish()
            };
        },
        updateFlowRate(value) {
            return {
                typeUrl: "/mainchain.stream.v1.MsgUpdateFlowRate",
                value: tx_1.MsgUpdateFlowRate.encode(value).finish()
            };
        },
        cancelStream(value) {
            return {
                typeUrl: "/mainchain.stream.v1.MsgCancelStream",
                value: tx_1.MsgCancelStream.encode(value).finish()
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/mainchain.stream.v1.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createStream(value) {
            return {
                typeUrl: "/mainchain.stream.v1.MsgCreateStream",
                value
            };
        },
        claimStream(value) {
            return {
                typeUrl: "/mainchain.stream.v1.MsgClaimStream",
                value
            };
        },
        topUpDeposit(value) {
            return {
                typeUrl: "/mainchain.stream.v1.MsgTopUpDeposit",
                value
            };
        },
        updateFlowRate(value) {
            return {
                typeUrl: "/mainchain.stream.v1.MsgUpdateFlowRate",
                value
            };
        },
        cancelStream(value) {
            return {
                typeUrl: "/mainchain.stream.v1.MsgCancelStream",
                value
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/mainchain.stream.v1.MsgUpdateParams",
                value
            };
        }
    },
    fromPartial: {
        createStream(value) {
            return {
                typeUrl: "/mainchain.stream.v1.MsgCreateStream",
                value: tx_1.MsgCreateStream.fromPartial(value)
            };
        },
        claimStream(value) {
            return {
                typeUrl: "/mainchain.stream.v1.MsgClaimStream",
                value: tx_1.MsgClaimStream.fromPartial(value)
            };
        },
        topUpDeposit(value) {
            return {
                typeUrl: "/mainchain.stream.v1.MsgTopUpDeposit",
                value: tx_1.MsgTopUpDeposit.fromPartial(value)
            };
        },
        updateFlowRate(value) {
            return {
                typeUrl: "/mainchain.stream.v1.MsgUpdateFlowRate",
                value: tx_1.MsgUpdateFlowRate.fromPartial(value)
            };
        },
        cancelStream(value) {
            return {
                typeUrl: "/mainchain.stream.v1.MsgCancelStream",
                value: tx_1.MsgCancelStream.fromPartial(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/mainchain.stream.v1.MsgUpdateParams",
                value: tx_1.MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
