import { Rpc } from "../../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createStream(request: MsgCreateStream): Promise<MsgCreateStreamResponse>;
    claimStream(request: MsgClaimStream): Promise<MsgClaimStreamResponse>;
    topUpDeposit(request: MsgTopUpDeposit): Promise<MsgTopUpDepositResponse>;
    updateFlowRate(request: MsgUpdateFlowRate): Promise<MsgUpdateFlowRateResponse>;
    cancelStream(request: MsgCancelStream): Promise<MsgCancelStreamResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
