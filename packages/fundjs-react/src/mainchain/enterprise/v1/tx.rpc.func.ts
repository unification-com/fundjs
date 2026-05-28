//@ts-nocheck
import { buildTx } from "../../../helper-func-types";
import { MsgUndPurchaseOrder, MsgProcessUndPurchaseOrder, MsgWhitelistAddress, MsgUpdateParams } from "./tx";
/**
 * UndPurchaseOrder defines a method to create new purchase order.
 * @name undPurchaseOrder
 * @package mainchain.enterprise.v1
 * @see proto service: mainchain.enterprise.v1.UndPurchaseOrder
 */
export const undPurchaseOrder = buildTx<MsgUndPurchaseOrder>({
  msg: MsgUndPurchaseOrder
});
/**
 * ProcessUndPurchaseOrder defines a method to process a decision on a
 * purchase order.
 * @name processUndPurchaseOrder
 * @package mainchain.enterprise.v1
 * @see proto service: mainchain.enterprise.v1.ProcessUndPurchaseOrder
 */
export const processUndPurchaseOrder = buildTx<MsgProcessUndPurchaseOrder>({
  msg: MsgProcessUndPurchaseOrder
});
/**
 * WhitelistAddress defines a method to execute a whitelist action.
 * @name whitelistAddress
 * @package mainchain.enterprise.v1
 * @see proto service: mainchain.enterprise.v1.WhitelistAddress
 */
export const whitelistAddress = buildTx<MsgWhitelistAddress>({
  msg: MsgWhitelistAddress
});
/**
 * UpdateParams defines an operation for updating the x/enterprise module
 * parameters.
 * Since: cosmos-sdk 0.47
 * @name updateParams
 * @package mainchain.enterprise.v1
 * @see proto service: mainchain.enterprise.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});