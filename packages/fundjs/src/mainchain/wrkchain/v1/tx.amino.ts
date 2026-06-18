//@ts-nocheck
import { MsgRegisterWrkChain, MsgRecordWrkChainBlock, MsgPurchaseWrkChainStateStorage, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/mainchain.wrkchain.v1.MsgRegisterWrkChain": {
    aminoType: "wrkchain/MsgRegisterWrkChain",
    toAmino: MsgRegisterWrkChain.toAmino,
    fromAmino: MsgRegisterWrkChain.fromAmino
  },
  "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock": {
    aminoType: "wrkchain/MsgRecordWrkChainBlock",
    toAmino: MsgRecordWrkChainBlock.toAmino,
    fromAmino: MsgRecordWrkChainBlock.fromAmino
  },
  "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage": {
    aminoType: "wrkchain/MsgPurchaseWrkChainStorage",
    toAmino: MsgPurchaseWrkChainStateStorage.toAmino,
    fromAmino: MsgPurchaseWrkChainStateStorage.fromAmino
  },
  "/mainchain.wrkchain.v1.MsgUpdateParams": {
    aminoType: "wrkchain/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};