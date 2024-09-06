"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/mainchain.stream.v1.MsgCreateStream": {
        aminoType: "/mainchain.stream.v1.MsgCreateStream",
        toAmino: tx_1.MsgCreateStream.toAmino,
        fromAmino: tx_1.MsgCreateStream.fromAmino
    },
    "/mainchain.stream.v1.MsgClaimStream": {
        aminoType: "/mainchain.stream.v1.MsgClaimStream",
        toAmino: tx_1.MsgClaimStream.toAmino,
        fromAmino: tx_1.MsgClaimStream.fromAmino
    },
    "/mainchain.stream.v1.MsgTopUpDeposit": {
        aminoType: "/mainchain.stream.v1.MsgTopUpDeposit",
        toAmino: tx_1.MsgTopUpDeposit.toAmino,
        fromAmino: tx_1.MsgTopUpDeposit.fromAmino
    },
    "/mainchain.stream.v1.MsgUpdateFlowRate": {
        aminoType: "/mainchain.stream.v1.MsgUpdateFlowRate",
        toAmino: tx_1.MsgUpdateFlowRate.toAmino,
        fromAmino: tx_1.MsgUpdateFlowRate.fromAmino
    },
    "/mainchain.stream.v1.MsgCancelStream": {
        aminoType: "/mainchain.stream.v1.MsgCancelStream",
        toAmino: tx_1.MsgCancelStream.toAmino,
        fromAmino: tx_1.MsgCancelStream.fromAmino
    },
    "/mainchain.stream.v1.MsgUpdateParams": {
        aminoType: "mainchain/x/stream/MsgUpdateParams",
        toAmino: tx_1.MsgUpdateParams.toAmino,
        fromAmino: tx_1.MsgUpdateParams.fromAmino
    }
};
