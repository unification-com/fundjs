"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/mainchain.enterprise.v1.MsgUndPurchaseOrder": {
        aminoType: "/mainchain.enterprise.v1.MsgUndPurchaseOrder",
        toAmino: tx_1.MsgUndPurchaseOrder.toAmino,
        fromAmino: tx_1.MsgUndPurchaseOrder.fromAmino
    },
    "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder": {
        aminoType: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder",
        toAmino: tx_1.MsgProcessUndPurchaseOrder.toAmino,
        fromAmino: tx_1.MsgProcessUndPurchaseOrder.fromAmino
    },
    "/mainchain.enterprise.v1.MsgWhitelistAddress": {
        aminoType: "/mainchain.enterprise.v1.MsgWhitelistAddress",
        toAmino: tx_1.MsgWhitelistAddress.toAmino,
        fromAmino: tx_1.MsgWhitelistAddress.fromAmino
    },
    "/mainchain.enterprise.v1.MsgUpdateParams": {
        aminoType: "mainchain/x/enterprise/MsgUpdateParams",
        toAmino: tx_1.MsgUpdateParams.toAmino,
        fromAmino: tx_1.MsgUpdateParams.fromAmino
    }
};
