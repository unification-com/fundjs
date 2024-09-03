//@ts-nocheck
import { MsgProcessUndPurchaseOrder, MsgUndPurchaseOrder, MsgUpdateParams,MsgWhitelistAddress } from './tx';
export const AminoConverter = {
  '/mainchain.enterprise.v1.MsgUndPurchaseOrder': {
    aminoType: '/mainchain.enterprise.v1.MsgUndPurchaseOrder',
    toAmino: MsgUndPurchaseOrder.toAmino,
    fromAmino: MsgUndPurchaseOrder.fromAmino
  },
  '/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder': {
    aminoType: '/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder',
    toAmino: MsgProcessUndPurchaseOrder.toAmino,
    fromAmino: MsgProcessUndPurchaseOrder.fromAmino
  },
  '/mainchain.enterprise.v1.MsgWhitelistAddress': {
    aminoType: '/mainchain.enterprise.v1.MsgWhitelistAddress',
    toAmino: MsgWhitelistAddress.toAmino,
    fromAmino: MsgWhitelistAddress.fromAmino
  },
  '/mainchain.enterprise.v1.MsgUpdateParams': {
    aminoType: 'mainchain/x/enterprise/MsgUpdateParams',
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};