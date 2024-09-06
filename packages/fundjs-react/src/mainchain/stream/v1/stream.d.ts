import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** StreamPeriod enumerates the valid periods for calculating flow rates */
export declare enum StreamPeriod {
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
    UNRECOGNIZED = -1
}
export declare const StreamPeriodSDKType: typeof StreamPeriod;
export declare const StreamPeriodAmino: typeof StreamPeriod;
export declare function streamPeriodFromJSON(object: any): StreamPeriod;
export declare function streamPeriodToJSON(object: StreamPeriod): string;
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
export declare const Stream: {
    typeUrl: string;
    is(o: any): o is Stream;
    isSDK(o: any): o is StreamSDKType;
    isAmino(o: any): o is StreamAmino;
    encode(message: Stream, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Stream;
    fromPartial(object: Partial<Stream>): Stream;
    fromAmino(object: StreamAmino): Stream;
    toAmino(message: Stream): StreamAmino;
    fromAminoMsg(object: StreamAminoMsg): Stream;
    fromProtoMsg(message: StreamProtoMsg): Stream;
    toProto(message: Stream): Uint8Array;
    toProtoMsg(message: Stream): StreamProtoMsg;
};
