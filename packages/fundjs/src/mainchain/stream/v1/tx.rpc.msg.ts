//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateStream, MsgCreateStreamResponse, MsgClaimStream, MsgClaimStreamResponse, MsgTopUpDeposit, MsgTopUpDepositResponse, MsgUpdateFlowRate, MsgUpdateFlowRateResponse, MsgCancelStream, MsgCancelStreamResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** CreateStream defines a method to create a new stream */
  createStream(request: MsgCreateStream): Promise<MsgCreateStreamResponse>;
  /** ClaimStream defines a method for a receiver to claim from a stream using the sender and receiver */
  claimStream(request: MsgClaimStream): Promise<MsgClaimStreamResponse>;
  /** TopUpDeposit defines a method for senders to top up their streams */
  topUpDeposit(request: MsgTopUpDeposit): Promise<MsgTopUpDepositResponse>;
  /** UpdateFlowRate defines a method to update a stream flow rate */
  updateFlowRate(request: MsgUpdateFlowRate): Promise<MsgUpdateFlowRateResponse>;
  /** CancelStream defines a method to cancel a stream */
  cancelStream(request: MsgCancelStream): Promise<MsgCancelStreamResponse>;
  /**
   * UpdateParams defines an operation for updating the x/stream module
   * parameters.
   * Since: cosmos-sdk 0.47
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createStream = this.createStream.bind(this);
    this.claimStream = this.claimStream.bind(this);
    this.topUpDeposit = this.topUpDeposit.bind(this);
    this.updateFlowRate = this.updateFlowRate.bind(this);
    this.cancelStream = this.cancelStream.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  createStream(request: MsgCreateStream): Promise<MsgCreateStreamResponse> {
    const data = MsgCreateStream.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Msg", "CreateStream", data);
    return promise.then(data => MsgCreateStreamResponse.decode(new BinaryReader(data)));
  }
  claimStream(request: MsgClaimStream): Promise<MsgClaimStreamResponse> {
    const data = MsgClaimStream.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Msg", "ClaimStream", data);
    return promise.then(data => MsgClaimStreamResponse.decode(new BinaryReader(data)));
  }
  topUpDeposit(request: MsgTopUpDeposit): Promise<MsgTopUpDepositResponse> {
    const data = MsgTopUpDeposit.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Msg", "TopUpDeposit", data);
    return promise.then(data => MsgTopUpDepositResponse.decode(new BinaryReader(data)));
  }
  updateFlowRate(request: MsgUpdateFlowRate): Promise<MsgUpdateFlowRateResponse> {
    const data = MsgUpdateFlowRate.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Msg", "UpdateFlowRate", data);
    return promise.then(data => MsgUpdateFlowRateResponse.decode(new BinaryReader(data)));
  }
  cancelStream(request: MsgCancelStream): Promise<MsgCancelStreamResponse> {
    const data = MsgCancelStream.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Msg", "CancelStream", data);
    return promise.then(data => MsgCancelStreamResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};