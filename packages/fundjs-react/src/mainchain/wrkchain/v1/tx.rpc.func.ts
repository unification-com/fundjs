//@ts-nocheck
import { buildTx } from "../../../helper-func-types";
import { MsgRegisterWrkChain, MsgRecordWrkChainBlock, MsgPurchaseWrkChainStateStorage, MsgUpdateParams } from "./tx";
/**
 * RegisterWrkChain defines a method to register a new wrkchain
 * @name registerWrkChain
 * @package mainchain.wrkchain.v1
 * @see proto service: mainchain.wrkchain.v1.RegisterWrkChain
 */
export const registerWrkChain = buildTx<MsgRegisterWrkChain>({
  msg: MsgRegisterWrkChain
});
/**
 * RecordWrkChainBlock defines a method to record a block hash set for a
 * registered wrkchain
 * @name recordWrkChainBlock
 * @package mainchain.wrkchain.v1
 * @see proto service: mainchain.wrkchain.v1.RecordWrkChainBlock
 */
export const recordWrkChainBlock = buildTx<MsgRecordWrkChainBlock>({
  msg: MsgRecordWrkChainBlock
});
/**
 * PurchaseWrkChainStateStorage defines the method to purchase more state
 * storage
 * @name purchaseWrkChainStateStorage
 * @package mainchain.wrkchain.v1
 * @see proto service: mainchain.wrkchain.v1.PurchaseWrkChainStateStorage
 */
export const purchaseWrkChainStateStorage = buildTx<MsgPurchaseWrkChainStateStorage>({
  msg: MsgPurchaseWrkChainStateStorage
});
/**
 * UpdateParams defines an operation for updating the x/wrkchain module
 * parameters.
 * Since: cosmos-sdk 0.47
 * @name updateParams
 * @package mainchain.wrkchain.v1
 * @see proto service: mainchain.wrkchain.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});