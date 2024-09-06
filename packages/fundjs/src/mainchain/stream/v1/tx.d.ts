import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgCreateStream creates a new stream */
export interface MsgCreateStream {
    /** receiver is the wallet that will receive stream payments */
    receiver: string;
    /** sender is the address of the stream creator, sending the stream */
    sender: string;
    /** deposit is the amount being sent to deposit for the stream */
    deposit: Coin;
    /** flow_rate is the rate of nund per second */
    flowRate: bigint;
}
export interface MsgCreateStreamProtoMsg {
    typeUrl: "/mainchain.stream.v1.MsgCreateStream";
    value: Uint8Array;
}
/** MsgCreateStream creates a new stream */
export interface MsgCreateStreamAmino {
    /** receiver is the wallet that will receive stream payments */
    receiver?: string;
    /** sender is the address of the stream creator, sending the stream */
    sender?: string;
    /** deposit is the amount being sent to deposit for the stream */
    deposit?: CoinAmino;
    /** flow_rate is the rate of nund per second */
    flow_rate?: string;
}
export interface MsgCreateStreamAminoMsg {
    type: "/mainchain.stream.v1.MsgCreateStream";
    value: MsgCreateStreamAmino;
}
/** MsgCreateStream creates a new stream */
export interface MsgCreateStreamSDKType {
    receiver: string;
    sender: string;
    deposit: CoinSDKType;
    flow_rate: bigint;
}
/** MsgCreateStreamResponse is the response for MsgCreateStream */
export interface MsgCreateStreamResponse {
    /** receiver is the wallet that will receive stream payments */
    receiver: string;
    /** sender is the address of the stream creator, sending the stream */
    sender: string;
    /** deposit is the amount being sent to deposit for the stream */
    deposit: Coin;
    /** flow_rate is the rate of nund per second */
    flowRate: bigint;
}
export interface MsgCreateStreamResponseProtoMsg {
    typeUrl: "/mainchain.stream.v1.MsgCreateStreamResponse";
    value: Uint8Array;
}
/** MsgCreateStreamResponse is the response for MsgCreateStream */
export interface MsgCreateStreamResponseAmino {
    /** receiver is the wallet that will receive stream payments */
    receiver?: string;
    /** sender is the address of the stream creator, sending the stream */
    sender?: string;
    /** deposit is the amount being sent to deposit for the stream */
    deposit?: CoinAmino;
    /** flow_rate is the rate of nund per second */
    flow_rate?: string;
}
export interface MsgCreateStreamResponseAminoMsg {
    type: "/mainchain.stream.v1.MsgCreateStreamResponse";
    value: MsgCreateStreamResponseAmino;
}
/** MsgCreateStreamResponse is the response for MsgCreateStream */
export interface MsgCreateStreamResponseSDKType {
    receiver: string;
    sender: string;
    deposit: CoinSDKType;
    flow_rate: bigint;
}
/** MsgClaimStream claims pending payments form a stream using the sender and receiver addresses */
export interface MsgClaimStream {
    /** sender is sender wallet of the stream being claimed */
    sender: string;
    /** receiver is the wallet making the claim */
    receiver: string;
}
export interface MsgClaimStreamProtoMsg {
    typeUrl: "/mainchain.stream.v1.MsgClaimStream";
    value: Uint8Array;
}
/** MsgClaimStream claims pending payments form a stream using the sender and receiver addresses */
export interface MsgClaimStreamAmino {
    /** sender is sender wallet of the stream being claimed */
    sender?: string;
    /** receiver is the wallet making the claim */
    receiver?: string;
}
export interface MsgClaimStreamAminoMsg {
    type: "/mainchain.stream.v1.MsgClaimStream";
    value: MsgClaimStreamAmino;
}
/** MsgClaimStream claims pending payments form a stream using the sender and receiver addresses */
export interface MsgClaimStreamSDKType {
    sender: string;
    receiver: string;
}
export interface MsgClaimStreamResponse {
    /** total_claimed is the total value of the claim */
    totalClaimed: Coin;
    /** stream_payment is the amount received by the receiver wallet */
    streamPayment: Coin;
    /** validator_fee is the amount sent to validators */
    validatorFee: Coin;
    /** remaining_deposit is the amount of deposit remaining in the stream */
    remainingDeposit: Coin;
}
export interface MsgClaimStreamResponseProtoMsg {
    typeUrl: "/mainchain.stream.v1.MsgClaimStreamResponse";
    value: Uint8Array;
}
export interface MsgClaimStreamResponseAmino {
    /** total_claimed is the total value of the claim */
    total_claimed?: CoinAmino;
    /** stream_payment is the amount received by the receiver wallet */
    stream_payment?: CoinAmino;
    /** validator_fee is the amount sent to validators */
    validator_fee?: CoinAmino;
    /** remaining_deposit is the amount of deposit remaining in the stream */
    remaining_deposit?: CoinAmino;
}
export interface MsgClaimStreamResponseAminoMsg {
    type: "/mainchain.stream.v1.MsgClaimStreamResponse";
    value: MsgClaimStreamResponseAmino;
}
export interface MsgClaimStreamResponseSDKType {
    total_claimed: CoinSDKType;
    stream_payment: CoinSDKType;
    validator_fee: CoinSDKType;
    remaining_deposit: CoinSDKType;
}
/** MsgTopUpDeposit tops up deposits in an existing stream */
export interface MsgTopUpDeposit {
    /** receiver is the wallet that will receive stream payments */
    receiver: string;
    /** sender is the wallet making the deposit */
    sender: string;
    /** deposit is the amount being sent to deposit for the stream */
    deposit: Coin;
}
export interface MsgTopUpDepositProtoMsg {
    typeUrl: "/mainchain.stream.v1.MsgTopUpDeposit";
    value: Uint8Array;
}
/** MsgTopUpDeposit tops up deposits in an existing stream */
export interface MsgTopUpDepositAmino {
    /** receiver is the wallet that will receive stream payments */
    receiver?: string;
    /** sender is the wallet making the deposit */
    sender?: string;
    /** deposit is the amount being sent to deposit for the stream */
    deposit?: CoinAmino;
}
export interface MsgTopUpDepositAminoMsg {
    type: "/mainchain.stream.v1.MsgTopUpDeposit";
    value: MsgTopUpDepositAmino;
}
/** MsgTopUpDeposit tops up deposits in an existing stream */
export interface MsgTopUpDepositSDKType {
    receiver: string;
    sender: string;
    deposit: CoinSDKType;
}
/** MsgTopUpDepositResponse is the response for MsgTopUpDeposit */
export interface MsgTopUpDepositResponse {
    /** deposit_amount is the amount deposited */
    depositAmount: Coin;
    /** current_deposit is the total current deposit in the stream */
    currentDeposit: Coin;
    /** deposit_zero_time is the timestamp for when the current deposited amount will run out */
    depositZeroTime: Date;
}
export interface MsgTopUpDepositResponseProtoMsg {
    typeUrl: "/mainchain.stream.v1.MsgTopUpDepositResponse";
    value: Uint8Array;
}
/** MsgTopUpDepositResponse is the response for MsgTopUpDeposit */
export interface MsgTopUpDepositResponseAmino {
    /** deposit_amount is the amount deposited */
    deposit_amount?: CoinAmino;
    /** current_deposit is the total current deposit in the stream */
    current_deposit?: CoinAmino;
    /** deposit_zero_time is the timestamp for when the current deposited amount will run out */
    deposit_zero_time?: string;
}
export interface MsgTopUpDepositResponseAminoMsg {
    type: "/mainchain.stream.v1.MsgTopUpDepositResponse";
    value: MsgTopUpDepositResponseAmino;
}
/** MsgTopUpDepositResponse is the response for MsgTopUpDeposit */
export interface MsgTopUpDepositResponseSDKType {
    deposit_amount: CoinSDKType;
    current_deposit: CoinSDKType;
    deposit_zero_time: Date;
}
/** MsgUpdateFlowRate updates a stream's flow rate */
export interface MsgUpdateFlowRate {
    /** receiver is the wallet that will receive stream payments */
    receiver: string;
    /** sender is the wallet making the update */
    sender: string;
    /** flow_rate is the rate of nund per second */
    flowRate: bigint;
}
export interface MsgUpdateFlowRateProtoMsg {
    typeUrl: "/mainchain.stream.v1.MsgUpdateFlowRate";
    value: Uint8Array;
}
/** MsgUpdateFlowRate updates a stream's flow rate */
export interface MsgUpdateFlowRateAmino {
    /** receiver is the wallet that will receive stream payments */
    receiver?: string;
    /** sender is the wallet making the update */
    sender?: string;
    /** flow_rate is the rate of nund per second */
    flow_rate?: string;
}
export interface MsgUpdateFlowRateAminoMsg {
    type: "/mainchain.stream.v1.MsgUpdateFlowRate";
    value: MsgUpdateFlowRateAmino;
}
/** MsgUpdateFlowRate updates a stream's flow rate */
export interface MsgUpdateFlowRateSDKType {
    receiver: string;
    sender: string;
    flow_rate: bigint;
}
/** MsgUpdateFlowRateResponse is the response for MsgUpdateFlowRate */
export interface MsgUpdateFlowRateResponse {
    /** flow_rate is the rate of nund per second */
    flowRate: bigint;
}
export interface MsgUpdateFlowRateResponseProtoMsg {
    typeUrl: "/mainchain.stream.v1.MsgUpdateFlowRateResponse";
    value: Uint8Array;
}
/** MsgUpdateFlowRateResponse is the response for MsgUpdateFlowRate */
export interface MsgUpdateFlowRateResponseAmino {
    /** flow_rate is the rate of nund per second */
    flow_rate?: string;
}
export interface MsgUpdateFlowRateResponseAminoMsg {
    type: "/mainchain.stream.v1.MsgUpdateFlowRateResponse";
    value: MsgUpdateFlowRateResponseAmino;
}
/** MsgUpdateFlowRateResponse is the response for MsgUpdateFlowRate */
export interface MsgUpdateFlowRateResponseSDKType {
    flow_rate: bigint;
}
/** MsgCancelStream */
export interface MsgCancelStream {
    /** receiver is the wallet that will receive stream payments */
    receiver: string;
    /** sender is the wallet cancelling */
    sender: string;
}
export interface MsgCancelStreamProtoMsg {
    typeUrl: "/mainchain.stream.v1.MsgCancelStream";
    value: Uint8Array;
}
/** MsgCancelStream */
export interface MsgCancelStreamAmino {
    /** receiver is the wallet that will receive stream payments */
    receiver?: string;
    /** sender is the wallet cancelling */
    sender?: string;
}
export interface MsgCancelStreamAminoMsg {
    type: "/mainchain.stream.v1.MsgCancelStream";
    value: MsgCancelStreamAmino;
}
/** MsgCancelStream */
export interface MsgCancelStreamSDKType {
    receiver: string;
    sender: string;
}
/** MsgCancelStreamResponse */
export interface MsgCancelStreamResponse {
}
export interface MsgCancelStreamResponseProtoMsg {
    typeUrl: "/mainchain.stream.v1.MsgCancelStreamResponse";
    value: Uint8Array;
}
/** MsgCancelStreamResponse */
export interface MsgCancelStreamResponseAmino {
}
export interface MsgCancelStreamResponseAminoMsg {
    type: "/mainchain.stream.v1.MsgCancelStreamResponse";
    value: MsgCancelStreamResponseAmino;
}
/** MsgCancelStreamResponse */
export interface MsgCancelStreamResponseSDKType {
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the x/stream parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/mainchain.stream.v1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority?: string;
    /**
     * params defines the x/stream parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "mainchain/x/stream/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/mainchain.stream.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/mainchain.stream.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgCreateStream: {
    typeUrl: string;
    is(o: any): o is MsgCreateStream;
    isSDK(o: any): o is MsgCreateStreamSDKType;
    isAmino(o: any): o is MsgCreateStreamAmino;
    encode(message: MsgCreateStream, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStream;
    fromPartial(object: Partial<MsgCreateStream>): MsgCreateStream;
    fromAmino(object: MsgCreateStreamAmino): MsgCreateStream;
    toAmino(message: MsgCreateStream): MsgCreateStreamAmino;
    fromAminoMsg(object: MsgCreateStreamAminoMsg): MsgCreateStream;
    fromProtoMsg(message: MsgCreateStreamProtoMsg): MsgCreateStream;
    toProto(message: MsgCreateStream): Uint8Array;
    toProtoMsg(message: MsgCreateStream): MsgCreateStreamProtoMsg;
};
export declare const MsgCreateStreamResponse: {
    typeUrl: string;
    is(o: any): o is MsgCreateStreamResponse;
    isSDK(o: any): o is MsgCreateStreamResponseSDKType;
    isAmino(o: any): o is MsgCreateStreamResponseAmino;
    encode(message: MsgCreateStreamResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStreamResponse;
    fromPartial(object: Partial<MsgCreateStreamResponse>): MsgCreateStreamResponse;
    fromAmino(object: MsgCreateStreamResponseAmino): MsgCreateStreamResponse;
    toAmino(message: MsgCreateStreamResponse): MsgCreateStreamResponseAmino;
    fromAminoMsg(object: MsgCreateStreamResponseAminoMsg): MsgCreateStreamResponse;
    fromProtoMsg(message: MsgCreateStreamResponseProtoMsg): MsgCreateStreamResponse;
    toProto(message: MsgCreateStreamResponse): Uint8Array;
    toProtoMsg(message: MsgCreateStreamResponse): MsgCreateStreamResponseProtoMsg;
};
export declare const MsgClaimStream: {
    typeUrl: string;
    is(o: any): o is MsgClaimStream;
    isSDK(o: any): o is MsgClaimStreamSDKType;
    isAmino(o: any): o is MsgClaimStreamAmino;
    encode(message: MsgClaimStream, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimStream;
    fromPartial(object: Partial<MsgClaimStream>): MsgClaimStream;
    fromAmino(object: MsgClaimStreamAmino): MsgClaimStream;
    toAmino(message: MsgClaimStream): MsgClaimStreamAmino;
    fromAminoMsg(object: MsgClaimStreamAminoMsg): MsgClaimStream;
    fromProtoMsg(message: MsgClaimStreamProtoMsg): MsgClaimStream;
    toProto(message: MsgClaimStream): Uint8Array;
    toProtoMsg(message: MsgClaimStream): MsgClaimStreamProtoMsg;
};
export declare const MsgClaimStreamResponse: {
    typeUrl: string;
    is(o: any): o is MsgClaimStreamResponse;
    isSDK(o: any): o is MsgClaimStreamResponseSDKType;
    isAmino(o: any): o is MsgClaimStreamResponseAmino;
    encode(message: MsgClaimStreamResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimStreamResponse;
    fromPartial(object: Partial<MsgClaimStreamResponse>): MsgClaimStreamResponse;
    fromAmino(object: MsgClaimStreamResponseAmino): MsgClaimStreamResponse;
    toAmino(message: MsgClaimStreamResponse): MsgClaimStreamResponseAmino;
    fromAminoMsg(object: MsgClaimStreamResponseAminoMsg): MsgClaimStreamResponse;
    fromProtoMsg(message: MsgClaimStreamResponseProtoMsg): MsgClaimStreamResponse;
    toProto(message: MsgClaimStreamResponse): Uint8Array;
    toProtoMsg(message: MsgClaimStreamResponse): MsgClaimStreamResponseProtoMsg;
};
export declare const MsgTopUpDeposit: {
    typeUrl: string;
    is(o: any): o is MsgTopUpDeposit;
    isSDK(o: any): o is MsgTopUpDepositSDKType;
    isAmino(o: any): o is MsgTopUpDepositAmino;
    encode(message: MsgTopUpDeposit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTopUpDeposit;
    fromPartial(object: Partial<MsgTopUpDeposit>): MsgTopUpDeposit;
    fromAmino(object: MsgTopUpDepositAmino): MsgTopUpDeposit;
    toAmino(message: MsgTopUpDeposit): MsgTopUpDepositAmino;
    fromAminoMsg(object: MsgTopUpDepositAminoMsg): MsgTopUpDeposit;
    fromProtoMsg(message: MsgTopUpDepositProtoMsg): MsgTopUpDeposit;
    toProto(message: MsgTopUpDeposit): Uint8Array;
    toProtoMsg(message: MsgTopUpDeposit): MsgTopUpDepositProtoMsg;
};
export declare const MsgTopUpDepositResponse: {
    typeUrl: string;
    is(o: any): o is MsgTopUpDepositResponse;
    isSDK(o: any): o is MsgTopUpDepositResponseSDKType;
    isAmino(o: any): o is MsgTopUpDepositResponseAmino;
    encode(message: MsgTopUpDepositResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTopUpDepositResponse;
    fromPartial(object: Partial<MsgTopUpDepositResponse>): MsgTopUpDepositResponse;
    fromAmino(object: MsgTopUpDepositResponseAmino): MsgTopUpDepositResponse;
    toAmino(message: MsgTopUpDepositResponse): MsgTopUpDepositResponseAmino;
    fromAminoMsg(object: MsgTopUpDepositResponseAminoMsg): MsgTopUpDepositResponse;
    fromProtoMsg(message: MsgTopUpDepositResponseProtoMsg): MsgTopUpDepositResponse;
    toProto(message: MsgTopUpDepositResponse): Uint8Array;
    toProtoMsg(message: MsgTopUpDepositResponse): MsgTopUpDepositResponseProtoMsg;
};
export declare const MsgUpdateFlowRate: {
    typeUrl: string;
    is(o: any): o is MsgUpdateFlowRate;
    isSDK(o: any): o is MsgUpdateFlowRateSDKType;
    isAmino(o: any): o is MsgUpdateFlowRateAmino;
    encode(message: MsgUpdateFlowRate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateFlowRate;
    fromPartial(object: Partial<MsgUpdateFlowRate>): MsgUpdateFlowRate;
    fromAmino(object: MsgUpdateFlowRateAmino): MsgUpdateFlowRate;
    toAmino(message: MsgUpdateFlowRate): MsgUpdateFlowRateAmino;
    fromAminoMsg(object: MsgUpdateFlowRateAminoMsg): MsgUpdateFlowRate;
    fromProtoMsg(message: MsgUpdateFlowRateProtoMsg): MsgUpdateFlowRate;
    toProto(message: MsgUpdateFlowRate): Uint8Array;
    toProtoMsg(message: MsgUpdateFlowRate): MsgUpdateFlowRateProtoMsg;
};
export declare const MsgUpdateFlowRateResponse: {
    typeUrl: string;
    is(o: any): o is MsgUpdateFlowRateResponse;
    isSDK(o: any): o is MsgUpdateFlowRateResponseSDKType;
    isAmino(o: any): o is MsgUpdateFlowRateResponseAmino;
    encode(message: MsgUpdateFlowRateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateFlowRateResponse;
    fromPartial(object: Partial<MsgUpdateFlowRateResponse>): MsgUpdateFlowRateResponse;
    fromAmino(object: MsgUpdateFlowRateResponseAmino): MsgUpdateFlowRateResponse;
    toAmino(message: MsgUpdateFlowRateResponse): MsgUpdateFlowRateResponseAmino;
    fromAminoMsg(object: MsgUpdateFlowRateResponseAminoMsg): MsgUpdateFlowRateResponse;
    fromProtoMsg(message: MsgUpdateFlowRateResponseProtoMsg): MsgUpdateFlowRateResponse;
    toProto(message: MsgUpdateFlowRateResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateFlowRateResponse): MsgUpdateFlowRateResponseProtoMsg;
};
export declare const MsgCancelStream: {
    typeUrl: string;
    is(o: any): o is MsgCancelStream;
    isSDK(o: any): o is MsgCancelStreamSDKType;
    isAmino(o: any): o is MsgCancelStreamAmino;
    encode(message: MsgCancelStream, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelStream;
    fromPartial(object: Partial<MsgCancelStream>): MsgCancelStream;
    fromAmino(object: MsgCancelStreamAmino): MsgCancelStream;
    toAmino(message: MsgCancelStream): MsgCancelStreamAmino;
    fromAminoMsg(object: MsgCancelStreamAminoMsg): MsgCancelStream;
    fromProtoMsg(message: MsgCancelStreamProtoMsg): MsgCancelStream;
    toProto(message: MsgCancelStream): Uint8Array;
    toProtoMsg(message: MsgCancelStream): MsgCancelStreamProtoMsg;
};
export declare const MsgCancelStreamResponse: {
    typeUrl: string;
    is(o: any): o is MsgCancelStreamResponse;
    isSDK(o: any): o is MsgCancelStreamResponseSDKType;
    isAmino(o: any): o is MsgCancelStreamResponseAmino;
    encode(_: MsgCancelStreamResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelStreamResponse;
    fromPartial(_: Partial<MsgCancelStreamResponse>): MsgCancelStreamResponse;
    fromAmino(_: MsgCancelStreamResponseAmino): MsgCancelStreamResponse;
    toAmino(_: MsgCancelStreamResponse): MsgCancelStreamResponseAmino;
    fromAminoMsg(object: MsgCancelStreamResponseAminoMsg): MsgCancelStreamResponse;
    fromProtoMsg(message: MsgCancelStreamResponseProtoMsg): MsgCancelStreamResponse;
    toProto(message: MsgCancelStreamResponse): Uint8Array;
    toProtoMsg(message: MsgCancelStreamResponse): MsgCancelStreamResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateParams;
    isSDK(o: any): o is MsgUpdateParamsSDKType;
    isAmino(o: any): o is MsgUpdateParamsAmino;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    is(o: any): o is MsgUpdateParamsResponse;
    isSDK(o: any): o is MsgUpdateParamsResponseSDKType;
    isAmino(o: any): o is MsgUpdateParamsResponseAmino;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
