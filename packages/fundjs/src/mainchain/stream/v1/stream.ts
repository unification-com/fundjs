//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** StreamPeriod enumerates the valid periods for calculating flow rates */
export enum StreamPeriod {
  /** STREAM_PERIOD_UNSPECIFIED - STREAM_PERIOD_UNSPECIFIED defines unspecified */
  STREAM_PERIOD_UNSPECIFIED = 0,
  /** STREAM_PERIOD_SECOND - STREAM_PERIOD_SECOND defines second */
  STREAM_PERIOD_SECOND = 1,
  /** STREAM_PERIOD_MINUTE - STREAM_PERIOD_MINUTE defines minute */
  STREAM_PERIOD_MINUTE = 2,
  /** STREAM_PERIOD_HOUR - STREAM_PERIOD_HOUR defines hour */
  STREAM_PERIOD_HOUR = 3,
  /** STREAM_PERIOD_DAY - STREAM_PERIOD_DAY defines day */
  STREAM_PERIOD_DAY = 4,
  /** STREAM_PERIOD_WEEK - STREAM_PERIOD_WEEK defines week */
  STREAM_PERIOD_WEEK = 5,
  /** STREAM_PERIOD_MONTH - STREAM_PERIOD_MONTH defines month */
  STREAM_PERIOD_MONTH = 6,
  /** STREAM_PERIOD_YEAR - STREAM_PERIOD_YEAR defines year */
  STREAM_PERIOD_YEAR = 7,
  UNRECOGNIZED = -1,
}
export const StreamPeriodSDKType = StreamPeriod;
export const StreamPeriodAmino = StreamPeriod;
export function streamPeriodFromJSON(object: any): StreamPeriod {
  switch (object) {
    case 0:
    case "STREAM_PERIOD_UNSPECIFIED":
      return StreamPeriod.STREAM_PERIOD_UNSPECIFIED;
    case 1:
    case "STREAM_PERIOD_SECOND":
      return StreamPeriod.STREAM_PERIOD_SECOND;
    case 2:
    case "STREAM_PERIOD_MINUTE":
      return StreamPeriod.STREAM_PERIOD_MINUTE;
    case 3:
    case "STREAM_PERIOD_HOUR":
      return StreamPeriod.STREAM_PERIOD_HOUR;
    case 4:
    case "STREAM_PERIOD_DAY":
      return StreamPeriod.STREAM_PERIOD_DAY;
    case 5:
    case "STREAM_PERIOD_WEEK":
      return StreamPeriod.STREAM_PERIOD_WEEK;
    case 6:
    case "STREAM_PERIOD_MONTH":
      return StreamPeriod.STREAM_PERIOD_MONTH;
    case 7:
    case "STREAM_PERIOD_YEAR":
      return StreamPeriod.STREAM_PERIOD_YEAR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StreamPeriod.UNRECOGNIZED;
  }
}
export function streamPeriodToJSON(object: StreamPeriod): string {
  switch (object) {
    case StreamPeriod.STREAM_PERIOD_UNSPECIFIED:
      return "STREAM_PERIOD_UNSPECIFIED";
    case StreamPeriod.STREAM_PERIOD_SECOND:
      return "STREAM_PERIOD_SECOND";
    case StreamPeriod.STREAM_PERIOD_MINUTE:
      return "STREAM_PERIOD_MINUTE";
    case StreamPeriod.STREAM_PERIOD_HOUR:
      return "STREAM_PERIOD_HOUR";
    case StreamPeriod.STREAM_PERIOD_DAY:
      return "STREAM_PERIOD_DAY";
    case StreamPeriod.STREAM_PERIOD_WEEK:
      return "STREAM_PERIOD_WEEK";
    case StreamPeriod.STREAM_PERIOD_MONTH:
      return "STREAM_PERIOD_MONTH";
    case StreamPeriod.STREAM_PERIOD_YEAR:
      return "STREAM_PERIOD_YEAR";
    case StreamPeriod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Stream holds data about a stream */
export interface Stream {
  /** deposit tracks the total amount the user has deposited to cover the stream, including any updates to the stream */
  deposit: Coin;
  /** flow_rate is the current rate of nund per second */
  flowRate: bigint;
  /** last_outflow_time is the timestamp of the last claim. Allows for a start point to calculate the next claim */
  lastOutflowTime: Date;
  /** deposit_zero_time is the timestamp for when the current deposited amount will run out */
  depositZeroTime: Date;
  /** cancellable is whether a stream can be cancelled. Default is true, but will be false for example id eFUND is used */
  cancellable: boolean;
}
export interface StreamProtoMsg {
  typeUrl: "/mainchain.stream.v1.Stream";
  value: Uint8Array;
}
/** Stream holds data about a stream */
export interface StreamAmino {
  /** deposit tracks the total amount the user has deposited to cover the stream, including any updates to the stream */
  deposit?: CoinAmino;
  /** flow_rate is the current rate of nund per second */
  flow_rate?: string;
  /** last_outflow_time is the timestamp of the last claim. Allows for a start point to calculate the next claim */
  last_outflow_time?: string;
  /** deposit_zero_time is the timestamp for when the current deposited amount will run out */
  deposit_zero_time?: string;
  /** cancellable is whether a stream can be cancelled. Default is true, but will be false for example id eFUND is used */
  cancellable?: boolean;
}
export interface StreamAminoMsg {
  type: "/mainchain.stream.v1.Stream";
  value: StreamAmino;
}
/** Stream holds data about a stream */
export interface StreamSDKType {
  deposit: CoinSDKType;
  flow_rate: bigint;
  last_outflow_time: Date;
  deposit_zero_time: Date;
  cancellable: boolean;
}
function createBaseStream(): Stream {
  return {
    deposit: Coin.fromPartial({}),
    flowRate: BigInt(0),
    lastOutflowTime: new Date(),
    depositZeroTime: new Date(),
    cancellable: false
  };
}
export const Stream = {
  typeUrl: "/mainchain.stream.v1.Stream",
  is(o: any): o is Stream {
    return o && (o.$typeUrl === Stream.typeUrl || Coin.is(o.deposit) && typeof o.flowRate === "bigint" && Timestamp.is(o.lastOutflowTime) && Timestamp.is(o.depositZeroTime) && typeof o.cancellable === "boolean");
  },
  isSDK(o: any): o is StreamSDKType {
    return o && (o.$typeUrl === Stream.typeUrl || Coin.isSDK(o.deposit) && typeof o.flow_rate === "bigint" && Timestamp.isSDK(o.last_outflow_time) && Timestamp.isSDK(o.deposit_zero_time) && typeof o.cancellable === "boolean");
  },
  isAmino(o: any): o is StreamAmino {
    return o && (o.$typeUrl === Stream.typeUrl || Coin.isAmino(o.deposit) && typeof o.flow_rate === "bigint" && Timestamp.isAmino(o.last_outflow_time) && Timestamp.isAmino(o.deposit_zero_time) && typeof o.cancellable === "boolean");
  },
  encode(message: Stream, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.flowRate !== BigInt(0)) {
      writer.uint32(16).int64(message.flowRate);
    }
    if (message.lastOutflowTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastOutflowTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.depositZeroTime !== undefined) {
      Timestamp.encode(toTimestamp(message.depositZeroTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.cancellable === true) {
      writer.uint32(40).bool(message.cancellable);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Stream {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStream();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.flowRate = reader.int64();
          break;
        case 3:
          message.lastOutflowTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.depositZeroTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.cancellable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Stream>): Stream {
    const message = createBaseStream();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.flowRate = object.flowRate !== undefined && object.flowRate !== null ? BigInt(object.flowRate.toString()) : BigInt(0);
    message.lastOutflowTime = object.lastOutflowTime ?? undefined;
    message.depositZeroTime = object.depositZeroTime ?? undefined;
    message.cancellable = object.cancellable ?? false;
    return message;
  },
  fromAmino(object: StreamAmino): Stream {
    const message = createBaseStream();
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    if (object.flow_rate !== undefined && object.flow_rate !== null) {
      message.flowRate = BigInt(object.flow_rate);
    }
    if (object.last_outflow_time !== undefined && object.last_outflow_time !== null) {
      message.lastOutflowTime = fromTimestamp(Timestamp.fromAmino(object.last_outflow_time));
    }
    if (object.deposit_zero_time !== undefined && object.deposit_zero_time !== null) {
      message.depositZeroTime = fromTimestamp(Timestamp.fromAmino(object.deposit_zero_time));
    }
    if (object.cancellable !== undefined && object.cancellable !== null) {
      message.cancellable = object.cancellable;
    }
    return message;
  },
  toAmino(message: Stream): StreamAmino {
    const obj: any = {};
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    obj.flow_rate = message.flowRate !== BigInt(0) ? message.flowRate.toString() : undefined;
    obj.last_outflow_time = message.lastOutflowTime ? Timestamp.toAmino(toTimestamp(message.lastOutflowTime)) : undefined;
    obj.deposit_zero_time = message.depositZeroTime ? Timestamp.toAmino(toTimestamp(message.depositZeroTime)) : undefined;
    obj.cancellable = message.cancellable === false ? undefined : message.cancellable;
    return obj;
  },
  fromAminoMsg(object: StreamAminoMsg): Stream {
    return Stream.fromAmino(object.value);
  },
  fromProtoMsg(message: StreamProtoMsg): Stream {
    return Stream.decode(message.value);
  },
  toProto(message: Stream): Uint8Array {
    return Stream.encode(message).finish();
  },
  toProtoMsg(message: Stream): StreamProtoMsg {
    return {
      typeUrl: "/mainchain.stream.v1.Stream",
      value: Stream.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Stream.typeUrl, Stream);