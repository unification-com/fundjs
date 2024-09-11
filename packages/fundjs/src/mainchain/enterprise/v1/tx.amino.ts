//@ts-nocheck
import { MsgUndPurchaseOrder, MsgProcessUndPurchaseOrder, MsgWhitelistAddress, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/mainchain.enterprise.v1.MsgUndPurchaseOrder": {
    aminoType: "enterprise/PurchaseUnd",
    toAmino: MsgUndPurchaseOrder.toAmino,
    fromAmino: MsgUndPurchaseOrder.fromAmino
  },
  "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder": {
    aminoType: "enterprise/ProcessUndPurchaseOrder",
    toAmino: MsgProcessUndPurchaseOrder.toAmino,
    fromAmino: MsgProcessUndPurchaseOrder.fromAmino
  },
  "/mainchain.enterprise.v1.MsgWhitelistAddress": {
    aminoType: "enterprise/WhitelistAddress",
    toAmino: MsgWhitelistAddress.toAmino,
    fromAmino: MsgWhitelistAddress.fromAmino
  },
  "/mainchain.enterprise.v1.MsgUpdateParams": {
    aminoType: "mainchain/x/enterprise/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};