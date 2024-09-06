"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/mainchain.wrkchain.v1.MsgRegisterWrkChain": {
        aminoType: "/mainchain.wrkchain.v1.MsgRegisterWrkChain",
        toAmino: tx_1.MsgRegisterWrkChain.toAmino,
        fromAmino: tx_1.MsgRegisterWrkChain.fromAmino
    },
    "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock": {
        aminoType: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock",
        toAmino: tx_1.MsgRecordWrkChainBlock.toAmino,
        fromAmino: tx_1.MsgRecordWrkChainBlock.fromAmino
    },
    "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage": {
        aminoType: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage",
        toAmino: tx_1.MsgPurchaseWrkChainStateStorage.toAmino,
        fromAmino: tx_1.MsgPurchaseWrkChainStateStorage.fromAmino
    },
    "/mainchain.wrkchain.v1.MsgUpdateParams": {
        aminoType: "mainchain/x/wrkchain/MsgUpdateParams",
        toAmino: tx_1.MsgUpdateParams.toAmino,
        fromAmino: tx_1.MsgUpdateParams.fromAmino
    }
};
