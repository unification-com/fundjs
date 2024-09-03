//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { toTimestamp, fromTimestamp } from "../../../helpers";
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
export interface MsgCancelStreamResponse {}
export interface MsgCancelStreamResponseProtoMsg {
  typeUrl: "/mainchain.stream.v1.MsgCancelStreamResponse";
  value: Uint8Array;
}
/** MsgCancelStreamResponse */
export interface MsgCancelStreamResponseAmino {}
export interface MsgCancelStreamResponseAminoMsg {
  type: "/mainchain.stream.v1.MsgCancelStreamResponse";
  value: MsgCancelStreamResponseAmino;
}
/** MsgCancelStreamResponse */
export interface MsgCancelStreamResponseSDKType {}
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
export interface MsgUpdateParamsResponse {}
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
export interface MsgUpdateParamsResponseAmino {}
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
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgCreateStream(): MsgCreateStream {
  return {
    receiver: "",
    sender: "",
    deposit: Coin.fromPartial({}),
    flowRate: BigInt(0)
  };
}
export const MsgCreateStream = {
  typeUrl: "/mainchain.stream.v1.MsgCreateStream",
  is(o: any): o is MsgCreateStream {
    return o && (o.$typeUrl === MsgCreateStream.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && Coin.is(o.deposit) && typeof o.flowRate === "bigint");
  },
  isSDK(o: any): o is MsgCreateStreamSDKType {
    return o && (o.$typeUrl === MsgCreateStream.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && Coin.isSDK(o.deposit) && typeof o.flow_rate === "bigint");
  },
  isAmino(o: any): o is MsgCreateStreamAmino {
    return o && (o.$typeUrl === MsgCreateStream.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && Coin.isAmino(o.deposit) && typeof o.flow_rate === "bigint");
  },
  encode(message: MsgCreateStream, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    if (message.flowRate !== BigInt(0)) {
      writer.uint32(32).int64(message.flowRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStream {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStream();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.flowRate = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateStream>): MsgCreateStream {
    const message = createBaseMsgCreateStream();
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.flowRate = object.flowRate !== undefined && object.flowRate !== null ? BigInt(object.flowRate.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateStreamAmino): MsgCreateStream {
    const message = createBaseMsgCreateStream();
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    if (object.flow_rate !== undefined && object.flow_rate !== null) {
      message.flowRate = BigInt(object.flow_rate);
    }
    return message;
  },
  toAmino(message: MsgCreateStream): MsgCreateStreamAmino {
    const obj: any = {};
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    obj.flow_rate = message.flowRate !== BigInt(0) ? message.flowRate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateStreamAminoMsg): MsgCreateStream {
    return MsgCreateStream.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateStreamProtoMsg): MsgCreateStream {
    return MsgCreateStream.decode(message.value);
  },
  toProto(message: MsgCreateStream): Uint8Array {
    return MsgCreateStream.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateStream): MsgCreateStreamProtoMsg {
    return {
      typeUrl: "/mainchain.stream.v1.MsgCreateStream",
      value: MsgCreateStream.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateStream.typeUrl, MsgCreateStream);
function createBaseMsgCreateStreamResponse(): MsgCreateStreamResponse {
  return {
    receiver: "",
    sender: "",
    deposit: Coin.fromPartial({}),
    flowRate: BigInt(0)
  };
}
export const MsgCreateStreamResponse = {
  typeUrl: "/mainchain.stream.v1.MsgCreateStreamResponse",
  is(o: any): o is MsgCreateStreamResponse {
    return o && (o.$typeUrl === MsgCreateStreamResponse.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && Coin.is(o.deposit) && typeof o.flowRate === "bigint");
  },
  isSDK(o: any): o is MsgCreateStreamResponseSDKType {
    return o && (o.$typeUrl === MsgCreateStreamResponse.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && Coin.isSDK(o.deposit) && typeof o.flow_rate === "bigint");
  },
  isAmino(o: any): o is MsgCreateStreamResponseAmino {
    return o && (o.$typeUrl === MsgCreateStreamResponse.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && Coin.isAmino(o.deposit) && typeof o.flow_rate === "bigint");
  },
  encode(message: MsgCreateStreamResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    if (message.flowRate !== BigInt(0)) {
      writer.uint32(32).int64(message.flowRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStreamResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.flowRate = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateStreamResponse>): MsgCreateStreamResponse {
    const message = createBaseMsgCreateStreamResponse();
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.flowRate = object.flowRate !== undefined && object.flowRate !== null ? BigInt(object.flowRate.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateStreamResponseAmino): MsgCreateStreamResponse {
    const message = createBaseMsgCreateStreamResponse();
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    if (object.flow_rate !== undefined && object.flow_rate !== null) {
      message.flowRate = BigInt(object.flow_rate);
    }
    return message;
  },
  toAmino(message: MsgCreateStreamResponse): MsgCreateStreamResponseAmino {
    const obj: any = {};
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    obj.flow_rate = message.flowRate !== BigInt(0) ? message.flowRate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateStreamResponseAminoMsg): MsgCreateStreamResponse {
    return MsgCreateStreamResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateStreamResponseProtoMsg): MsgCreateStreamResponse {
    return MsgCreateStreamResponse.decode(message.value);
  },
  toProto(message: MsgCreateStreamResponse): Uint8Array {
    return MsgCreateStreamResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateStreamResponse): MsgCreateStreamResponseProtoMsg {
    return {
      typeUrl: "/mainchain.stream.v1.MsgCreateStreamResponse",
      value: MsgCreateStreamResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateStreamResponse.typeUrl, MsgCreateStreamResponse);
function createBaseMsgClaimStream(): MsgClaimStream {
  return {
    sender: "",
    receiver: ""
  };
}
export const MsgClaimStream = {
  typeUrl: "/mainchain.stream.v1.MsgClaimStream",
  is(o: any): o is MsgClaimStream {
    return o && (o.$typeUrl === MsgClaimStream.typeUrl || typeof o.sender === "string" && typeof o.receiver === "string");
  },
  isSDK(o: any): o is MsgClaimStreamSDKType {
    return o && (o.$typeUrl === MsgClaimStream.typeUrl || typeof o.sender === "string" && typeof o.receiver === "string");
  },
  isAmino(o: any): o is MsgClaimStreamAmino {
    return o && (o.$typeUrl === MsgClaimStream.typeUrl || typeof o.sender === "string" && typeof o.receiver === "string");
  },
  encode(message: MsgClaimStream, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimStream {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimStream();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimStream>): MsgClaimStream {
    const message = createBaseMsgClaimStream();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: MsgClaimStreamAmino): MsgClaimStream {
    const message = createBaseMsgClaimStream();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: MsgClaimStream): MsgClaimStreamAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: MsgClaimStreamAminoMsg): MsgClaimStream {
    return MsgClaimStream.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimStreamProtoMsg): MsgClaimStream {
    return MsgClaimStream.decode(message.value);
  },
  toProto(message: MsgClaimStream): Uint8Array {
    return MsgClaimStream.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimStream): MsgClaimStreamProtoMsg {
    return {
      typeUrl: "/mainchain.stream.v1.MsgClaimStream",
      value: MsgClaimStream.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimStream.typeUrl, MsgClaimStream);
function createBaseMsgClaimStreamResponse(): MsgClaimStreamResponse {
  return {
    totalClaimed: Coin.fromPartial({}),
    streamPayment: Coin.fromPartial({}),
    validatorFee: Coin.fromPartial({}),
    remainingDeposit: Coin.fromPartial({})
  };
}
export const MsgClaimStreamResponse = {
  typeUrl: "/mainchain.stream.v1.MsgClaimStreamResponse",
  is(o: any): o is MsgClaimStreamResponse {
    return o && (o.$typeUrl === MsgClaimStreamResponse.typeUrl || Coin.is(o.totalClaimed) && Coin.is(o.streamPayment) && Coin.is(o.validatorFee) && Coin.is(o.remainingDeposit));
  },
  isSDK(o: any): o is MsgClaimStreamResponseSDKType {
    return o && (o.$typeUrl === MsgClaimStreamResponse.typeUrl || Coin.isSDK(o.total_claimed) && Coin.isSDK(o.stream_payment) && Coin.isSDK(o.validator_fee) && Coin.isSDK(o.remaining_deposit));
  },
  isAmino(o: any): o is MsgClaimStreamResponseAmino {
    return o && (o.$typeUrl === MsgClaimStreamResponse.typeUrl || Coin.isAmino(o.total_claimed) && Coin.isAmino(o.stream_payment) && Coin.isAmino(o.validator_fee) && Coin.isAmino(o.remaining_deposit));
  },
  encode(message: MsgClaimStreamResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalClaimed !== undefined) {
      Coin.encode(message.totalClaimed, writer.uint32(18).fork()).ldelim();
    }
    if (message.streamPayment !== undefined) {
      Coin.encode(message.streamPayment, writer.uint32(26).fork()).ldelim();
    }
    if (message.validatorFee !== undefined) {
      Coin.encode(message.validatorFee, writer.uint32(34).fork()).ldelim();
    }
    if (message.remainingDeposit !== undefined) {
      Coin.encode(message.remainingDeposit, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimStreamResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.totalClaimed = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.streamPayment = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.validatorFee = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.remainingDeposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimStreamResponse>): MsgClaimStreamResponse {
    const message = createBaseMsgClaimStreamResponse();
    message.totalClaimed = object.totalClaimed !== undefined && object.totalClaimed !== null ? Coin.fromPartial(object.totalClaimed) : undefined;
    message.streamPayment = object.streamPayment !== undefined && object.streamPayment !== null ? Coin.fromPartial(object.streamPayment) : undefined;
    message.validatorFee = object.validatorFee !== undefined && object.validatorFee !== null ? Coin.fromPartial(object.validatorFee) : undefined;
    message.remainingDeposit = object.remainingDeposit !== undefined && object.remainingDeposit !== null ? Coin.fromPartial(object.remainingDeposit) : undefined;
    return message;
  },
  fromAmino(object: MsgClaimStreamResponseAmino): MsgClaimStreamResponse {
    const message = createBaseMsgClaimStreamResponse();
    if (object.total_claimed !== undefined && object.total_claimed !== null) {
      message.totalClaimed = Coin.fromAmino(object.total_claimed);
    }
    if (object.stream_payment !== undefined && object.stream_payment !== null) {
      message.streamPayment = Coin.fromAmino(object.stream_payment);
    }
    if (object.validator_fee !== undefined && object.validator_fee !== null) {
      message.validatorFee = Coin.fromAmino(object.validator_fee);
    }
    if (object.remaining_deposit !== undefined && object.remaining_deposit !== null) {
      message.remainingDeposit = Coin.fromAmino(object.remaining_deposit);
    }
    return message;
  },
  toAmino(message: MsgClaimStreamResponse): MsgClaimStreamResponseAmino {
    const obj: any = {};
    obj.total_claimed = message.totalClaimed ? Coin.toAmino(message.totalClaimed) : undefined;
    obj.stream_payment = message.streamPayment ? Coin.toAmino(message.streamPayment) : undefined;
    obj.validator_fee = message.validatorFee ? Coin.toAmino(message.validatorFee) : undefined;
    obj.remaining_deposit = message.remainingDeposit ? Coin.toAmino(message.remainingDeposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgClaimStreamResponseAminoMsg): MsgClaimStreamResponse {
    return MsgClaimStreamResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimStreamResponseProtoMsg): MsgClaimStreamResponse {
    return MsgClaimStreamResponse.decode(message.value);
  },
  toProto(message: MsgClaimStreamResponse): Uint8Array {
    return MsgClaimStreamResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimStreamResponse): MsgClaimStreamResponseProtoMsg {
    return {
      typeUrl: "/mainchain.stream.v1.MsgClaimStreamResponse",
      value: MsgClaimStreamResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimStreamResponse.typeUrl, MsgClaimStreamResponse);
function createBaseMsgTopUpDeposit(): MsgTopUpDeposit {
  return {
    receiver: "",
    sender: "",
    deposit: Coin.fromPartial({})
  };
}
export const MsgTopUpDeposit = {
  typeUrl: "/mainchain.stream.v1.MsgTopUpDeposit",
  is(o: any): o is MsgTopUpDeposit {
    return o && (o.$typeUrl === MsgTopUpDeposit.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && Coin.is(o.deposit));
  },
  isSDK(o: any): o is MsgTopUpDepositSDKType {
    return o && (o.$typeUrl === MsgTopUpDeposit.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && Coin.isSDK(o.deposit));
  },
  isAmino(o: any): o is MsgTopUpDepositAmino {
    return o && (o.$typeUrl === MsgTopUpDeposit.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && Coin.isAmino(o.deposit));
  },
  encode(message: MsgTopUpDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTopUpDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTopUpDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgTopUpDeposit>): MsgTopUpDeposit {
    const message = createBaseMsgTopUpDeposit();
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object: MsgTopUpDepositAmino): MsgTopUpDeposit {
    const message = createBaseMsgTopUpDeposit();
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: MsgTopUpDeposit): MsgTopUpDepositAmino {
    const obj: any = {};
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgTopUpDepositAminoMsg): MsgTopUpDeposit {
    return MsgTopUpDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTopUpDepositProtoMsg): MsgTopUpDeposit {
    return MsgTopUpDeposit.decode(message.value);
  },
  toProto(message: MsgTopUpDeposit): Uint8Array {
    return MsgTopUpDeposit.encode(message).finish();
  },
  toProtoMsg(message: MsgTopUpDeposit): MsgTopUpDepositProtoMsg {
    return {
      typeUrl: "/mainchain.stream.v1.MsgTopUpDeposit",
      value: MsgTopUpDeposit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgTopUpDeposit.typeUrl, MsgTopUpDeposit);
function createBaseMsgTopUpDepositResponse(): MsgTopUpDepositResponse {
  return {
    depositAmount: Coin.fromPartial({}),
    currentDeposit: Coin.fromPartial({}),
    depositZeroTime: new Date()
  };
}
export const MsgTopUpDepositResponse = {
  typeUrl: "/mainchain.stream.v1.MsgTopUpDepositResponse",
  is(o: any): o is MsgTopUpDepositResponse {
    return o && (o.$typeUrl === MsgTopUpDepositResponse.typeUrl || Coin.is(o.depositAmount) && Coin.is(o.currentDeposit) && Timestamp.is(o.depositZeroTime));
  },
  isSDK(o: any): o is MsgTopUpDepositResponseSDKType {
    return o && (o.$typeUrl === MsgTopUpDepositResponse.typeUrl || Coin.isSDK(o.deposit_amount) && Coin.isSDK(o.current_deposit) && Timestamp.isSDK(o.deposit_zero_time));
  },
  isAmino(o: any): o is MsgTopUpDepositResponseAmino {
    return o && (o.$typeUrl === MsgTopUpDepositResponse.typeUrl || Coin.isAmino(o.deposit_amount) && Coin.isAmino(o.current_deposit) && Timestamp.isAmino(o.deposit_zero_time));
  },
  encode(message: MsgTopUpDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositAmount !== undefined) {
      Coin.encode(message.depositAmount, writer.uint32(18).fork()).ldelim();
    }
    if (message.currentDeposit !== undefined) {
      Coin.encode(message.currentDeposit, writer.uint32(26).fork()).ldelim();
    }
    if (message.depositZeroTime !== undefined) {
      Timestamp.encode(toTimestamp(message.depositZeroTime), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTopUpDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTopUpDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.depositAmount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.currentDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.depositZeroTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgTopUpDepositResponse>): MsgTopUpDepositResponse {
    const message = createBaseMsgTopUpDepositResponse();
    message.depositAmount = object.depositAmount !== undefined && object.depositAmount !== null ? Coin.fromPartial(object.depositAmount) : undefined;
    message.currentDeposit = object.currentDeposit !== undefined && object.currentDeposit !== null ? Coin.fromPartial(object.currentDeposit) : undefined;
    message.depositZeroTime = object.depositZeroTime ?? undefined;
    return message;
  },
  fromAmino(object: MsgTopUpDepositResponseAmino): MsgTopUpDepositResponse {
    const message = createBaseMsgTopUpDepositResponse();
    if (object.deposit_amount !== undefined && object.deposit_amount !== null) {
      message.depositAmount = Coin.fromAmino(object.deposit_amount);
    }
    if (object.current_deposit !== undefined && object.current_deposit !== null) {
      message.currentDeposit = Coin.fromAmino(object.current_deposit);
    }
    if (object.deposit_zero_time !== undefined && object.deposit_zero_time !== null) {
      message.depositZeroTime = fromTimestamp(Timestamp.fromAmino(object.deposit_zero_time));
    }
    return message;
  },
  toAmino(message: MsgTopUpDepositResponse): MsgTopUpDepositResponseAmino {
    const obj: any = {};
    obj.deposit_amount = message.depositAmount ? Coin.toAmino(message.depositAmount) : undefined;
    obj.current_deposit = message.currentDeposit ? Coin.toAmino(message.currentDeposit) : undefined;
    obj.deposit_zero_time = message.depositZeroTime ? Timestamp.toAmino(toTimestamp(message.depositZeroTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgTopUpDepositResponseAminoMsg): MsgTopUpDepositResponse {
    return MsgTopUpDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTopUpDepositResponseProtoMsg): MsgTopUpDepositResponse {
    return MsgTopUpDepositResponse.decode(message.value);
  },
  toProto(message: MsgTopUpDepositResponse): Uint8Array {
    return MsgTopUpDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTopUpDepositResponse): MsgTopUpDepositResponseProtoMsg {
    return {
      typeUrl: "/mainchain.stream.v1.MsgTopUpDepositResponse",
      value: MsgTopUpDepositResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgTopUpDepositResponse.typeUrl, MsgTopUpDepositResponse);
function createBaseMsgUpdateFlowRate(): MsgUpdateFlowRate {
  return {
    receiver: "",
    sender: "",
    flowRate: BigInt(0)
  };
}
export const MsgUpdateFlowRate = {
  typeUrl: "/mainchain.stream.v1.MsgUpdateFlowRate",
  is(o: any): o is MsgUpdateFlowRate {
    return o && (o.$typeUrl === MsgUpdateFlowRate.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && typeof o.flowRate === "bigint");
  },
  isSDK(o: any): o is MsgUpdateFlowRateSDKType {
    return o && (o.$typeUrl === MsgUpdateFlowRate.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && typeof o.flow_rate === "bigint");
  },
  isAmino(o: any): o is MsgUpdateFlowRateAmino {
    return o && (o.$typeUrl === MsgUpdateFlowRate.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && typeof o.flow_rate === "bigint");
  },
  encode(message: MsgUpdateFlowRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.flowRate !== BigInt(0)) {
      writer.uint32(24).int64(message.flowRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateFlowRate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFlowRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.flowRate = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateFlowRate>): MsgUpdateFlowRate {
    const message = createBaseMsgUpdateFlowRate();
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    message.flowRate = object.flowRate !== undefined && object.flowRate !== null ? BigInt(object.flowRate.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateFlowRateAmino): MsgUpdateFlowRate {
    const message = createBaseMsgUpdateFlowRate();
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.flow_rate !== undefined && object.flow_rate !== null) {
      message.flowRate = BigInt(object.flow_rate);
    }
    return message;
  },
  toAmino(message: MsgUpdateFlowRate): MsgUpdateFlowRateAmino {
    const obj: any = {};
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.flow_rate = message.flowRate !== BigInt(0) ? message.flowRate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFlowRateAminoMsg): MsgUpdateFlowRate {
    return MsgUpdateFlowRate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateFlowRateProtoMsg): MsgUpdateFlowRate {
    return MsgUpdateFlowRate.decode(message.value);
  },
  toProto(message: MsgUpdateFlowRate): Uint8Array {
    return MsgUpdateFlowRate.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFlowRate): MsgUpdateFlowRateProtoMsg {
    return {
      typeUrl: "/mainchain.stream.v1.MsgUpdateFlowRate",
      value: MsgUpdateFlowRate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateFlowRate.typeUrl, MsgUpdateFlowRate);
function createBaseMsgUpdateFlowRateResponse(): MsgUpdateFlowRateResponse {
  return {
    flowRate: BigInt(0)
  };
}
export const MsgUpdateFlowRateResponse = {
  typeUrl: "/mainchain.stream.v1.MsgUpdateFlowRateResponse",
  is(o: any): o is MsgUpdateFlowRateResponse {
    return o && (o.$typeUrl === MsgUpdateFlowRateResponse.typeUrl || typeof o.flowRate === "bigint");
  },
  isSDK(o: any): o is MsgUpdateFlowRateResponseSDKType {
    return o && (o.$typeUrl === MsgUpdateFlowRateResponse.typeUrl || typeof o.flow_rate === "bigint");
  },
  isAmino(o: any): o is MsgUpdateFlowRateResponseAmino {
    return o && (o.$typeUrl === MsgUpdateFlowRateResponse.typeUrl || typeof o.flow_rate === "bigint");
  },
  encode(message: MsgUpdateFlowRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowRate !== BigInt(0)) {
      writer.uint32(16).int64(message.flowRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateFlowRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFlowRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.flowRate = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateFlowRateResponse>): MsgUpdateFlowRateResponse {
    const message = createBaseMsgUpdateFlowRateResponse();
    message.flowRate = object.flowRate !== undefined && object.flowRate !== null ? BigInt(object.flowRate.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateFlowRateResponseAmino): MsgUpdateFlowRateResponse {
    const message = createBaseMsgUpdateFlowRateResponse();
    if (object.flow_rate !== undefined && object.flow_rate !== null) {
      message.flowRate = BigInt(object.flow_rate);
    }
    return message;
  },
  toAmino(message: MsgUpdateFlowRateResponse): MsgUpdateFlowRateResponseAmino {
    const obj: any = {};
    obj.flow_rate = message.flowRate !== BigInt(0) ? message.flowRate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFlowRateResponseAminoMsg): MsgUpdateFlowRateResponse {
    return MsgUpdateFlowRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateFlowRateResponseProtoMsg): MsgUpdateFlowRateResponse {
    return MsgUpdateFlowRateResponse.decode(message.value);
  },
  toProto(message: MsgUpdateFlowRateResponse): Uint8Array {
    return MsgUpdateFlowRateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFlowRateResponse): MsgUpdateFlowRateResponseProtoMsg {
    return {
      typeUrl: "/mainchain.stream.v1.MsgUpdateFlowRateResponse",
      value: MsgUpdateFlowRateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateFlowRateResponse.typeUrl, MsgUpdateFlowRateResponse);
function createBaseMsgCancelStream(): MsgCancelStream {
  return {
    receiver: "",
    sender: ""
  };
}
export const MsgCancelStream = {
  typeUrl: "/mainchain.stream.v1.MsgCancelStream",
  is(o: any): o is MsgCancelStream {
    return o && (o.$typeUrl === MsgCancelStream.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string");
  },
  isSDK(o: any): o is MsgCancelStreamSDKType {
    return o && (o.$typeUrl === MsgCancelStream.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgCancelStreamAmino {
    return o && (o.$typeUrl === MsgCancelStream.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string");
  },
  encode(message: MsgCancelStream, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelStream {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelStream();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCancelStream>): MsgCancelStream {
    const message = createBaseMsgCancelStream();
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgCancelStreamAmino): MsgCancelStream {
    const message = createBaseMsgCancelStream();
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgCancelStream): MsgCancelStreamAmino {
    const obj: any = {};
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgCancelStreamAminoMsg): MsgCancelStream {
    return MsgCancelStream.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelStreamProtoMsg): MsgCancelStream {
    return MsgCancelStream.decode(message.value);
  },
  toProto(message: MsgCancelStream): Uint8Array {
    return MsgCancelStream.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelStream): MsgCancelStreamProtoMsg {
    return {
      typeUrl: "/mainchain.stream.v1.MsgCancelStream",
      value: MsgCancelStream.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelStream.typeUrl, MsgCancelStream);
function createBaseMsgCancelStreamResponse(): MsgCancelStreamResponse {
  return {};
}
export const MsgCancelStreamResponse = {
  typeUrl: "/mainchain.stream.v1.MsgCancelStreamResponse",
  is(o: any): o is MsgCancelStreamResponse {
    return o && o.$typeUrl === MsgCancelStreamResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCancelStreamResponseSDKType {
    return o && o.$typeUrl === MsgCancelStreamResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCancelStreamResponseAmino {
    return o && o.$typeUrl === MsgCancelStreamResponse.typeUrl;
  },
  encode(_: MsgCancelStreamResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelStreamResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgCancelStreamResponse>): MsgCancelStreamResponse {
    const message = createBaseMsgCancelStreamResponse();
    return message;
  },
  fromAmino(_: MsgCancelStreamResponseAmino): MsgCancelStreamResponse {
    const message = createBaseMsgCancelStreamResponse();
    return message;
  },
  toAmino(_: MsgCancelStreamResponse): MsgCancelStreamResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelStreamResponseAminoMsg): MsgCancelStreamResponse {
    return MsgCancelStreamResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelStreamResponseProtoMsg): MsgCancelStreamResponse {
    return MsgCancelStreamResponse.decode(message.value);
  },
  toProto(message: MsgCancelStreamResponse): Uint8Array {
    return MsgCancelStreamResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelStreamResponse): MsgCancelStreamResponseProtoMsg {
    return {
      typeUrl: "/mainchain.stream.v1.MsgCancelStreamResponse",
      value: MsgCancelStreamResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelStreamResponse.typeUrl, MsgCancelStreamResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/mainchain.stream.v1.MsgUpdateParams",
  aminoType: "mainchain/x/stream/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "mainchain/x/stream/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/mainchain.stream.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/mainchain.stream.v1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/mainchain.stream.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);