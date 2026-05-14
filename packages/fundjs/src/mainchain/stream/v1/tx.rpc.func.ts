//@ts-nocheck
import { buildTx } from "../../../helper-func-types";
import { MsgCreateStream, MsgClaimStream, MsgTopUpDeposit, MsgUpdateFlowRate, MsgCancelStream, MsgUpdateParams } from "./tx";
/**
 * CreateStream defines a method to create a new stream
 * @name createStream
 * @package mainchain.stream.v1
 * @see proto service: mainchain.stream.v1.CreateStream
 */
export const createStream = buildTx<MsgCreateStream>({
  msg: MsgCreateStream
});
/**
 * ClaimStream defines a method for a receiver to claim from a stream using
 * the sender and receiver
 * @name claimStream
 * @package mainchain.stream.v1
 * @see proto service: mainchain.stream.v1.ClaimStream
 */
export const claimStream = buildTx<MsgClaimStream>({
  msg: MsgClaimStream
});
/**
 * TopUpDeposit defines a method for senders to top up their streams
 * @name topUpDeposit
 * @package mainchain.stream.v1
 * @see proto service: mainchain.stream.v1.TopUpDeposit
 */
export const topUpDeposit = buildTx<MsgTopUpDeposit>({
  msg: MsgTopUpDeposit
});
/**
 * UpdateFlowRate defines a method to update a stream flow rate
 * @name updateFlowRate
 * @package mainchain.stream.v1
 * @see proto service: mainchain.stream.v1.UpdateFlowRate
 */
export const updateFlowRate = buildTx<MsgUpdateFlowRate>({
  msg: MsgUpdateFlowRate
});
/**
 * CancelStream defines a method to cancel a stream
 * @name cancelStream
 * @package mainchain.stream.v1
 * @see proto service: mainchain.stream.v1.CancelStream
 */
export const cancelStream = buildTx<MsgCancelStream>({
  msg: MsgCancelStream
});
/**
 * UpdateParams defines an operation for updating the x/stream module
 * parameters.
 * Since: cosmos-sdk 0.47
 * @name updateParams
 * @package mainchain.stream.v1
 * @see proto service: mainchain.stream.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});