import { StreamPeriod, Stream, StreamAmino, StreamSDKType } from "./stream";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** StreamResult contains data about a stream */
export interface StreamResult {
    /** receiver is the wallet that will receive stream payments */
    receiver: string;
    /** sender is the wallet making the update */
    sender: string;
    /** stream is the stream data */
    stream?: Stream;
}
export interface StreamResultProtoMsg {
    typeUrl: "/mainchain.stream.v1.StreamResult";
    value: Uint8Array;
}
/** StreamResult contains data about a stream */
export interface StreamResultAmino {
    /** receiver is the wallet that will receive stream payments */
    receiver?: string;
    /** sender is the wallet making the update */
    sender?: string;
    /** stream is the stream data */
    stream?: StreamAmino;
}
export interface StreamResultAminoMsg {
    type: "/mainchain.stream.v1.StreamResult";
    value: StreamResultAmino;
}
/** StreamResult contains data about a stream */
export interface StreamResultSDKType {
    receiver: string;
    sender: string;
    stream?: StreamSDKType;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/mainchain.stream.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/mainchain.stream.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/mainchain.stream.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/mainchain.stream.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryCalculateFlowRateRequest is the request type for the Query/CalculateFlowRate RPC method */
export interface QueryCalculateFlowRateRequest {
    /**
     * coin is the coin to be used in the calculation, e.g. 10000000000nund. This is the total amount to be paid over
     * the specified duration
     */
    coin: string;
    /** period is the enumerated value of a period to be used in the calculation, e.g. month = 6 */
    period: StreamPeriod;
    /** duration is the number of periods to be used in the calculation, e.g. 2 = 2 months */
    duration: bigint;
}
export interface QueryCalculateFlowRateRequestProtoMsg {
    typeUrl: "/mainchain.stream.v1.QueryCalculateFlowRateRequest";
    value: Uint8Array;
}
/** QueryCalculateFlowRateRequest is the request type for the Query/CalculateFlowRate RPC method */
export interface QueryCalculateFlowRateRequestAmino {
    /**
     * coin is the coin to be used in the calculation, e.g. 10000000000nund. This is the total amount to be paid over
     * the specified duration
     */
    coin?: string;
    /** period is the enumerated value of a period to be used in the calculation, e.g. month = 6 */
    period?: StreamPeriod;
    /** duration is the number of periods to be used in the calculation, e.g. 2 = 2 months */
    duration?: string;
}
export interface QueryCalculateFlowRateRequestAminoMsg {
    type: "/mainchain.stream.v1.QueryCalculateFlowRateRequest";
    value: QueryCalculateFlowRateRequestAmino;
}
/** QueryCalculateFlowRateRequest is the request type for the Query/CalculateFlowRate RPC method */
export interface QueryCalculateFlowRateRequestSDKType {
    coin: string;
    period: StreamPeriod;
    duration: bigint;
}
/** QueryCalculateFlowRateResponse is the response type for the Query/CalculateFlowRate RPC method */
export interface QueryCalculateFlowRateResponse {
    /** coin is the coin used in the calculation */
    coin: Coin;
    /** period is the enumerated value of a period used in the calculation, e.g. month = 6 */
    period: StreamPeriod;
    /** duration is the number of periods used in the calculation, e.g. 2 = 2 months */
    duration: bigint;
    /** seconds is the calculated number of seconds for the stream (seconds in period * duration) */
    seconds: bigint;
    /** flow_rate is the calculated rate of coins per second, in the lowest denomination - e.g. nund */
    flowRate: bigint;
}
export interface QueryCalculateFlowRateResponseProtoMsg {
    typeUrl: "/mainchain.stream.v1.QueryCalculateFlowRateResponse";
    value: Uint8Array;
}
/** QueryCalculateFlowRateResponse is the response type for the Query/CalculateFlowRate RPC method */
export interface QueryCalculateFlowRateResponseAmino {
    /** coin is the coin used in the calculation */
    coin?: CoinAmino;
    /** period is the enumerated value of a period used in the calculation, e.g. month = 6 */
    period?: StreamPeriod;
    /** duration is the number of periods used in the calculation, e.g. 2 = 2 months */
    duration?: string;
    /** seconds is the calculated number of seconds for the stream (seconds in period * duration) */
    seconds?: string;
    /** flow_rate is the calculated rate of coins per second, in the lowest denomination - e.g. nund */
    flow_rate?: string;
}
export interface QueryCalculateFlowRateResponseAminoMsg {
    type: "/mainchain.stream.v1.QueryCalculateFlowRateResponse";
    value: QueryCalculateFlowRateResponseAmino;
}
/** QueryCalculateFlowRateResponse is the response type for the Query/CalculateFlowRate RPC method */
export interface QueryCalculateFlowRateResponseSDKType {
    coin: CoinSDKType;
    period: StreamPeriod;
    duration: bigint;
    seconds: bigint;
    flow_rate: bigint;
}
/** QueryStreamsRequest is the request type for the Query/Streams RPC method */
export interface QueryStreamsRequest {
    pagination?: PageRequest;
}
export interface QueryStreamsRequestProtoMsg {
    typeUrl: "/mainchain.stream.v1.QueryStreamsRequest";
    value: Uint8Array;
}
/** QueryStreamsRequest is the request type for the Query/Streams RPC method */
export interface QueryStreamsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryStreamsRequestAminoMsg {
    type: "/mainchain.stream.v1.QueryStreamsRequest";
    value: QueryStreamsRequestAmino;
}
/** QueryStreamsRequest is the request type for the Query/Streams RPC method */
export interface QueryStreamsRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryStreamsResponse is the response type for the Query/Streams RPC method */
export interface QueryStreamsResponse {
    /** streams is the list of all streams */
    streams: StreamResult[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryStreamsResponseProtoMsg {
    typeUrl: "/mainchain.stream.v1.QueryStreamsResponse";
    value: Uint8Array;
}
/** QueryStreamsResponse is the response type for the Query/Streams RPC method */
export interface QueryStreamsResponseAmino {
    /** streams is the list of all streams */
    streams?: StreamResultAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryStreamsResponseAminoMsg {
    type: "/mainchain.stream.v1.QueryStreamsResponse";
    value: QueryStreamsResponseAmino;
}
/** QueryStreamsResponse is the response type for the Query/Streams RPC method */
export interface QueryStreamsResponseSDKType {
    streams: StreamResultSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryAllStreamsForReceiverRequest is the request type for the Query/AllStreamsForReceiver RPC method */
export interface QueryAllStreamsForReceiverRequest {
    /** receiver_addr is the receiver wallet address being queried */
    receiverAddr: string;
    /** pagination is the pagination parameters for the request */
    pagination?: PageRequest;
}
export interface QueryAllStreamsForReceiverRequestProtoMsg {
    typeUrl: "/mainchain.stream.v1.QueryAllStreamsForReceiverRequest";
    value: Uint8Array;
}
/** QueryAllStreamsForReceiverRequest is the request type for the Query/AllStreamsForReceiver RPC method */
export interface QueryAllStreamsForReceiverRequestAmino {
    /** receiver_addr is the receiver wallet address being queried */
    receiver_addr?: string;
    /** pagination is the pagination parameters for the request */
    pagination?: PageRequestAmino;
}
export interface QueryAllStreamsForReceiverRequestAminoMsg {
    type: "/mainchain.stream.v1.QueryAllStreamsForReceiverRequest";
    value: QueryAllStreamsForReceiverRequestAmino;
}
/** QueryAllStreamsForReceiverRequest is the request type for the Query/AllStreamsForReceiver RPC method */
export interface QueryAllStreamsForReceiverRequestSDKType {
    receiver_addr: string;
    pagination?: PageRequestSDKType;
}
/** QueryAllStreamsForReceiverResponse is the response type for the Query/AllStreamsForReceiver RPC method */
export interface QueryAllStreamsForReceiverResponse {
    /** receiver_addr is the receiver wallet address being queried */
    receiverAddr: string;
    /** streams is the list of all streams */
    streams: StreamResult[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryAllStreamsForReceiverResponseProtoMsg {
    typeUrl: "/mainchain.stream.v1.QueryAllStreamsForReceiverResponse";
    value: Uint8Array;
}
/** QueryAllStreamsForReceiverResponse is the response type for the Query/AllStreamsForReceiver RPC method */
export interface QueryAllStreamsForReceiverResponseAmino {
    /** receiver_addr is the receiver wallet address being queried */
    receiver_addr?: string;
    /** streams is the list of all streams */
    streams?: StreamResultAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryAllStreamsForReceiverResponseAminoMsg {
    type: "/mainchain.stream.v1.QueryAllStreamsForReceiverResponse";
    value: QueryAllStreamsForReceiverResponseAmino;
}
/** QueryAllStreamsForReceiverResponse is the response type for the Query/AllStreamsForReceiver RPC method */
export interface QueryAllStreamsForReceiverResponseSDKType {
    receiver_addr: string;
    streams: StreamResultSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryStreamByReceiverSenderRequest is the request type for the Query/StreamByReceiverSender RPC method */
export interface QueryStreamByReceiverSenderRequest {
    /** receiver_addr is the receiver wallet address being queried */
    receiverAddr: string;
    /** sender_addr is the sender wallet address being queried */
    senderAddr: string;
}
export interface QueryStreamByReceiverSenderRequestProtoMsg {
    typeUrl: "/mainchain.stream.v1.QueryStreamByReceiverSenderRequest";
    value: Uint8Array;
}
/** QueryStreamByReceiverSenderRequest is the request type for the Query/StreamByReceiverSender RPC method */
export interface QueryStreamByReceiverSenderRequestAmino {
    /** receiver_addr is the receiver wallet address being queried */
    receiver_addr?: string;
    /** sender_addr is the sender wallet address being queried */
    sender_addr?: string;
}
export interface QueryStreamByReceiverSenderRequestAminoMsg {
    type: "/mainchain.stream.v1.QueryStreamByReceiverSenderRequest";
    value: QueryStreamByReceiverSenderRequestAmino;
}
/** QueryStreamByReceiverSenderRequest is the request type for the Query/StreamByReceiverSender RPC method */
export interface QueryStreamByReceiverSenderRequestSDKType {
    receiver_addr: string;
    sender_addr: string;
}
/** QueryStreamByReceiverSenderResponse is the response type for the Query/StreamByReceiverSender RPC method */
export interface QueryStreamByReceiverSenderResponse {
    /** stream is the StreamResult */
    stream: StreamResult;
}
export interface QueryStreamByReceiverSenderResponseProtoMsg {
    typeUrl: "/mainchain.stream.v1.QueryStreamByReceiverSenderResponse";
    value: Uint8Array;
}
/** QueryStreamByReceiverSenderResponse is the response type for the Query/StreamByReceiverSender RPC method */
export interface QueryStreamByReceiverSenderResponseAmino {
    /** stream is the StreamResult */
    stream: StreamResultAmino;
}
export interface QueryStreamByReceiverSenderResponseAminoMsg {
    type: "/mainchain.stream.v1.QueryStreamByReceiverSenderResponse";
    value: QueryStreamByReceiverSenderResponseAmino;
}
/** QueryStreamByReceiverSenderResponse is the response type for the Query/StreamByReceiverSender RPC method */
export interface QueryStreamByReceiverSenderResponseSDKType {
    stream: StreamResultSDKType;
}
/** QueryStreamReceiverSenderCurrentFlowRequest is the request type for the Query/StreamReceiverSenderCurrentFlow RPC method */
export interface QueryStreamReceiverSenderCurrentFlowRequest {
    /** receiver_addr is the receiver wallet address being queried */
    receiverAddr: string;
    /** sender_addr is the sender wallet address being queried */
    senderAddr: string;
}
export interface QueryStreamReceiverSenderCurrentFlowRequestProtoMsg {
    typeUrl: "/mainchain.stream.v1.QueryStreamReceiverSenderCurrentFlowRequest";
    value: Uint8Array;
}
/** QueryStreamReceiverSenderCurrentFlowRequest is the request type for the Query/StreamReceiverSenderCurrentFlow RPC method */
export interface QueryStreamReceiverSenderCurrentFlowRequestAmino {
    /** receiver_addr is the receiver wallet address being queried */
    receiver_addr?: string;
    /** sender_addr is the sender wallet address being queried */
    sender_addr?: string;
}
export interface QueryStreamReceiverSenderCurrentFlowRequestAminoMsg {
    type: "/mainchain.stream.v1.QueryStreamReceiverSenderCurrentFlowRequest";
    value: QueryStreamReceiverSenderCurrentFlowRequestAmino;
}
/** QueryStreamReceiverSenderCurrentFlowRequest is the request type for the Query/StreamReceiverSenderCurrentFlow RPC method */
export interface QueryStreamReceiverSenderCurrentFlowRequestSDKType {
    receiver_addr: string;
    sender_addr: string;
}
/** QueryStreamReceiverSenderCurrentFlowResponse is the response type for the Query/StreamReceiverSenderCurrentFlow RPC method */
export interface QueryStreamReceiverSenderCurrentFlowResponse {
    /** configured_flow_rate is the flow rate configured in the stream */
    configuredFlowRate: bigint;
    /** current_flow_rate is the actual flow rate. This will be zero if the depositZeroTime has passed, or deposit is zero */
    currentFlowRate: bigint;
}
export interface QueryStreamReceiverSenderCurrentFlowResponseProtoMsg {
    typeUrl: "/mainchain.stream.v1.QueryStreamReceiverSenderCurrentFlowResponse";
    value: Uint8Array;
}
/** QueryStreamReceiverSenderCurrentFlowResponse is the response type for the Query/StreamReceiverSenderCurrentFlow RPC method */
export interface QueryStreamReceiverSenderCurrentFlowResponseAmino {
    /** configured_flow_rate is the flow rate configured in the stream */
    configured_flow_rate?: string;
    /** current_flow_rate is the actual flow rate. This will be zero if the depositZeroTime has passed, or deposit is zero */
    current_flow_rate?: string;
}
export interface QueryStreamReceiverSenderCurrentFlowResponseAminoMsg {
    type: "/mainchain.stream.v1.QueryStreamReceiverSenderCurrentFlowResponse";
    value: QueryStreamReceiverSenderCurrentFlowResponseAmino;
}
/** QueryStreamReceiverSenderCurrentFlowResponse is the response type for the Query/StreamReceiverSenderCurrentFlow RPC method */
export interface QueryStreamReceiverSenderCurrentFlowResponseSDKType {
    configured_flow_rate: bigint;
    current_flow_rate: bigint;
}
/** QueryAllStreamsForSenderRequest is the request type for the Query/AllStreamsForSender RPC method */
export interface QueryAllStreamsForSenderRequest {
    /** sender_addr is the receiver wallet address being queried */
    senderAddr: string;
    /** pagination is the pagination parameters for the request */
    pagination?: PageRequest;
}
export interface QueryAllStreamsForSenderRequestProtoMsg {
    typeUrl: "/mainchain.stream.v1.QueryAllStreamsForSenderRequest";
    value: Uint8Array;
}
/** QueryAllStreamsForSenderRequest is the request type for the Query/AllStreamsForSender RPC method */
export interface QueryAllStreamsForSenderRequestAmino {
    /** sender_addr is the receiver wallet address being queried */
    sender_addr?: string;
    /** pagination is the pagination parameters for the request */
    pagination?: PageRequestAmino;
}
export interface QueryAllStreamsForSenderRequestAminoMsg {
    type: "/mainchain.stream.v1.QueryAllStreamsForSenderRequest";
    value: QueryAllStreamsForSenderRequestAmino;
}
/** QueryAllStreamsForSenderRequest is the request type for the Query/AllStreamsForSender RPC method */
export interface QueryAllStreamsForSenderRequestSDKType {
    sender_addr: string;
    pagination?: PageRequestSDKType;
}
/** QueryAllStreamsForSenderResponse is the response type for the Query/AllStreamsForSender RPC method */
export interface QueryAllStreamsForSenderResponse {
    /** sender_addr is the receiver wallet address being queried */
    senderAddr: string;
    /** streams is the list of all streams */
    streams: StreamResult[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryAllStreamsForSenderResponseProtoMsg {
    typeUrl: "/mainchain.stream.v1.QueryAllStreamsForSenderResponse";
    value: Uint8Array;
}
/** QueryAllStreamsForSenderResponse is the response type for the Query/AllStreamsForSender RPC method */
export interface QueryAllStreamsForSenderResponseAmino {
    /** sender_addr is the receiver wallet address being queried */
    sender_addr?: string;
    /** streams is the list of all streams */
    streams?: StreamResultAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryAllStreamsForSenderResponseAminoMsg {
    type: "/mainchain.stream.v1.QueryAllStreamsForSenderResponse";
    value: QueryAllStreamsForSenderResponseAmino;
}
/** QueryAllStreamsForSenderResponse is the response type for the Query/AllStreamsForSender RPC method */
export interface QueryAllStreamsForSenderResponseSDKType {
    sender_addr: string;
    streams: StreamResultSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const StreamResult: {
    typeUrl: string;
    is(o: any): o is StreamResult;
    isSDK(o: any): o is StreamResultSDKType;
    isAmino(o: any): o is StreamResultAmino;
    encode(message: StreamResult, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): StreamResult;
    fromPartial(object: Partial<StreamResult>): StreamResult;
    fromAmino(object: StreamResultAmino): StreamResult;
    toAmino(message: StreamResult): StreamResultAmino;
    fromAminoMsg(object: StreamResultAminoMsg): StreamResult;
    fromProtoMsg(message: StreamResultProtoMsg): StreamResult;
    toProto(message: StreamResult): Uint8Array;
    toProtoMsg(message: StreamResult): StreamResultProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    is(o: any): o is QueryParamsRequest;
    isSDK(o: any): o is QueryParamsRequestSDKType;
    isAmino(o: any): o is QueryParamsRequestAmino;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    is(o: any): o is QueryParamsResponse;
    isSDK(o: any): o is QueryParamsResponseSDKType;
    isAmino(o: any): o is QueryParamsResponseAmino;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryCalculateFlowRateRequest: {
    typeUrl: string;
    is(o: any): o is QueryCalculateFlowRateRequest;
    isSDK(o: any): o is QueryCalculateFlowRateRequestSDKType;
    isAmino(o: any): o is QueryCalculateFlowRateRequestAmino;
    encode(message: QueryCalculateFlowRateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCalculateFlowRateRequest;
    fromPartial(object: Partial<QueryCalculateFlowRateRequest>): QueryCalculateFlowRateRequest;
    fromAmino(object: QueryCalculateFlowRateRequestAmino): QueryCalculateFlowRateRequest;
    toAmino(message: QueryCalculateFlowRateRequest): QueryCalculateFlowRateRequestAmino;
    fromAminoMsg(object: QueryCalculateFlowRateRequestAminoMsg): QueryCalculateFlowRateRequest;
    fromProtoMsg(message: QueryCalculateFlowRateRequestProtoMsg): QueryCalculateFlowRateRequest;
    toProto(message: QueryCalculateFlowRateRequest): Uint8Array;
    toProtoMsg(message: QueryCalculateFlowRateRequest): QueryCalculateFlowRateRequestProtoMsg;
};
export declare const QueryCalculateFlowRateResponse: {
    typeUrl: string;
    is(o: any): o is QueryCalculateFlowRateResponse;
    isSDK(o: any): o is QueryCalculateFlowRateResponseSDKType;
    isAmino(o: any): o is QueryCalculateFlowRateResponseAmino;
    encode(message: QueryCalculateFlowRateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCalculateFlowRateResponse;
    fromPartial(object: Partial<QueryCalculateFlowRateResponse>): QueryCalculateFlowRateResponse;
    fromAmino(object: QueryCalculateFlowRateResponseAmino): QueryCalculateFlowRateResponse;
    toAmino(message: QueryCalculateFlowRateResponse): QueryCalculateFlowRateResponseAmino;
    fromAminoMsg(object: QueryCalculateFlowRateResponseAminoMsg): QueryCalculateFlowRateResponse;
    fromProtoMsg(message: QueryCalculateFlowRateResponseProtoMsg): QueryCalculateFlowRateResponse;
    toProto(message: QueryCalculateFlowRateResponse): Uint8Array;
    toProtoMsg(message: QueryCalculateFlowRateResponse): QueryCalculateFlowRateResponseProtoMsg;
};
export declare const QueryStreamsRequest: {
    typeUrl: string;
    is(o: any): o is QueryStreamsRequest;
    isSDK(o: any): o is QueryStreamsRequestSDKType;
    isAmino(o: any): o is QueryStreamsRequestAmino;
    encode(message: QueryStreamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamsRequest;
    fromPartial(object: Partial<QueryStreamsRequest>): QueryStreamsRequest;
    fromAmino(object: QueryStreamsRequestAmino): QueryStreamsRequest;
    toAmino(message: QueryStreamsRequest): QueryStreamsRequestAmino;
    fromAminoMsg(object: QueryStreamsRequestAminoMsg): QueryStreamsRequest;
    fromProtoMsg(message: QueryStreamsRequestProtoMsg): QueryStreamsRequest;
    toProto(message: QueryStreamsRequest): Uint8Array;
    toProtoMsg(message: QueryStreamsRequest): QueryStreamsRequestProtoMsg;
};
export declare const QueryStreamsResponse: {
    typeUrl: string;
    is(o: any): o is QueryStreamsResponse;
    isSDK(o: any): o is QueryStreamsResponseSDKType;
    isAmino(o: any): o is QueryStreamsResponseAmino;
    encode(message: QueryStreamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamsResponse;
    fromPartial(object: Partial<QueryStreamsResponse>): QueryStreamsResponse;
    fromAmino(object: QueryStreamsResponseAmino): QueryStreamsResponse;
    toAmino(message: QueryStreamsResponse): QueryStreamsResponseAmino;
    fromAminoMsg(object: QueryStreamsResponseAminoMsg): QueryStreamsResponse;
    fromProtoMsg(message: QueryStreamsResponseProtoMsg): QueryStreamsResponse;
    toProto(message: QueryStreamsResponse): Uint8Array;
    toProtoMsg(message: QueryStreamsResponse): QueryStreamsResponseProtoMsg;
};
export declare const QueryAllStreamsForReceiverRequest: {
    typeUrl: string;
    is(o: any): o is QueryAllStreamsForReceiverRequest;
    isSDK(o: any): o is QueryAllStreamsForReceiverRequestSDKType;
    isAmino(o: any): o is QueryAllStreamsForReceiverRequestAmino;
    encode(message: QueryAllStreamsForReceiverRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStreamsForReceiverRequest;
    fromPartial(object: Partial<QueryAllStreamsForReceiverRequest>): QueryAllStreamsForReceiverRequest;
    fromAmino(object: QueryAllStreamsForReceiverRequestAmino): QueryAllStreamsForReceiverRequest;
    toAmino(message: QueryAllStreamsForReceiverRequest): QueryAllStreamsForReceiverRequestAmino;
    fromAminoMsg(object: QueryAllStreamsForReceiverRequestAminoMsg): QueryAllStreamsForReceiverRequest;
    fromProtoMsg(message: QueryAllStreamsForReceiverRequestProtoMsg): QueryAllStreamsForReceiverRequest;
    toProto(message: QueryAllStreamsForReceiverRequest): Uint8Array;
    toProtoMsg(message: QueryAllStreamsForReceiverRequest): QueryAllStreamsForReceiverRequestProtoMsg;
};
export declare const QueryAllStreamsForReceiverResponse: {
    typeUrl: string;
    is(o: any): o is QueryAllStreamsForReceiverResponse;
    isSDK(o: any): o is QueryAllStreamsForReceiverResponseSDKType;
    isAmino(o: any): o is QueryAllStreamsForReceiverResponseAmino;
    encode(message: QueryAllStreamsForReceiverResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStreamsForReceiverResponse;
    fromPartial(object: Partial<QueryAllStreamsForReceiverResponse>): QueryAllStreamsForReceiverResponse;
    fromAmino(object: QueryAllStreamsForReceiverResponseAmino): QueryAllStreamsForReceiverResponse;
    toAmino(message: QueryAllStreamsForReceiverResponse): QueryAllStreamsForReceiverResponseAmino;
    fromAminoMsg(object: QueryAllStreamsForReceiverResponseAminoMsg): QueryAllStreamsForReceiverResponse;
    fromProtoMsg(message: QueryAllStreamsForReceiverResponseProtoMsg): QueryAllStreamsForReceiverResponse;
    toProto(message: QueryAllStreamsForReceiverResponse): Uint8Array;
    toProtoMsg(message: QueryAllStreamsForReceiverResponse): QueryAllStreamsForReceiverResponseProtoMsg;
};
export declare const QueryStreamByReceiverSenderRequest: {
    typeUrl: string;
    is(o: any): o is QueryStreamByReceiverSenderRequest;
    isSDK(o: any): o is QueryStreamByReceiverSenderRequestSDKType;
    isAmino(o: any): o is QueryStreamByReceiverSenderRequestAmino;
    encode(message: QueryStreamByReceiverSenderRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamByReceiverSenderRequest;
    fromPartial(object: Partial<QueryStreamByReceiverSenderRequest>): QueryStreamByReceiverSenderRequest;
    fromAmino(object: QueryStreamByReceiverSenderRequestAmino): QueryStreamByReceiverSenderRequest;
    toAmino(message: QueryStreamByReceiverSenderRequest): QueryStreamByReceiverSenderRequestAmino;
    fromAminoMsg(object: QueryStreamByReceiverSenderRequestAminoMsg): QueryStreamByReceiverSenderRequest;
    fromProtoMsg(message: QueryStreamByReceiverSenderRequestProtoMsg): QueryStreamByReceiverSenderRequest;
    toProto(message: QueryStreamByReceiverSenderRequest): Uint8Array;
    toProtoMsg(message: QueryStreamByReceiverSenderRequest): QueryStreamByReceiverSenderRequestProtoMsg;
};
export declare const QueryStreamByReceiverSenderResponse: {
    typeUrl: string;
    is(o: any): o is QueryStreamByReceiverSenderResponse;
    isSDK(o: any): o is QueryStreamByReceiverSenderResponseSDKType;
    isAmino(o: any): o is QueryStreamByReceiverSenderResponseAmino;
    encode(message: QueryStreamByReceiverSenderResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamByReceiverSenderResponse;
    fromPartial(object: Partial<QueryStreamByReceiverSenderResponse>): QueryStreamByReceiverSenderResponse;
    fromAmino(object: QueryStreamByReceiverSenderResponseAmino): QueryStreamByReceiverSenderResponse;
    toAmino(message: QueryStreamByReceiverSenderResponse): QueryStreamByReceiverSenderResponseAmino;
    fromAminoMsg(object: QueryStreamByReceiverSenderResponseAminoMsg): QueryStreamByReceiverSenderResponse;
    fromProtoMsg(message: QueryStreamByReceiverSenderResponseProtoMsg): QueryStreamByReceiverSenderResponse;
    toProto(message: QueryStreamByReceiverSenderResponse): Uint8Array;
    toProtoMsg(message: QueryStreamByReceiverSenderResponse): QueryStreamByReceiverSenderResponseProtoMsg;
};
export declare const QueryStreamReceiverSenderCurrentFlowRequest: {
    typeUrl: string;
    is(o: any): o is QueryStreamReceiverSenderCurrentFlowRequest;
    isSDK(o: any): o is QueryStreamReceiverSenderCurrentFlowRequestSDKType;
    isAmino(o: any): o is QueryStreamReceiverSenderCurrentFlowRequestAmino;
    encode(message: QueryStreamReceiverSenderCurrentFlowRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamReceiverSenderCurrentFlowRequest;
    fromPartial(object: Partial<QueryStreamReceiverSenderCurrentFlowRequest>): QueryStreamReceiverSenderCurrentFlowRequest;
    fromAmino(object: QueryStreamReceiverSenderCurrentFlowRequestAmino): QueryStreamReceiverSenderCurrentFlowRequest;
    toAmino(message: QueryStreamReceiverSenderCurrentFlowRequest): QueryStreamReceiverSenderCurrentFlowRequestAmino;
    fromAminoMsg(object: QueryStreamReceiverSenderCurrentFlowRequestAminoMsg): QueryStreamReceiverSenderCurrentFlowRequest;
    fromProtoMsg(message: QueryStreamReceiverSenderCurrentFlowRequestProtoMsg): QueryStreamReceiverSenderCurrentFlowRequest;
    toProto(message: QueryStreamReceiverSenderCurrentFlowRequest): Uint8Array;
    toProtoMsg(message: QueryStreamReceiverSenderCurrentFlowRequest): QueryStreamReceiverSenderCurrentFlowRequestProtoMsg;
};
export declare const QueryStreamReceiverSenderCurrentFlowResponse: {
    typeUrl: string;
    is(o: any): o is QueryStreamReceiverSenderCurrentFlowResponse;
    isSDK(o: any): o is QueryStreamReceiverSenderCurrentFlowResponseSDKType;
    isAmino(o: any): o is QueryStreamReceiverSenderCurrentFlowResponseAmino;
    encode(message: QueryStreamReceiverSenderCurrentFlowResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamReceiverSenderCurrentFlowResponse;
    fromPartial(object: Partial<QueryStreamReceiverSenderCurrentFlowResponse>): QueryStreamReceiverSenderCurrentFlowResponse;
    fromAmino(object: QueryStreamReceiverSenderCurrentFlowResponseAmino): QueryStreamReceiverSenderCurrentFlowResponse;
    toAmino(message: QueryStreamReceiverSenderCurrentFlowResponse): QueryStreamReceiverSenderCurrentFlowResponseAmino;
    fromAminoMsg(object: QueryStreamReceiverSenderCurrentFlowResponseAminoMsg): QueryStreamReceiverSenderCurrentFlowResponse;
    fromProtoMsg(message: QueryStreamReceiverSenderCurrentFlowResponseProtoMsg): QueryStreamReceiverSenderCurrentFlowResponse;
    toProto(message: QueryStreamReceiverSenderCurrentFlowResponse): Uint8Array;
    toProtoMsg(message: QueryStreamReceiverSenderCurrentFlowResponse): QueryStreamReceiverSenderCurrentFlowResponseProtoMsg;
};
export declare const QueryAllStreamsForSenderRequest: {
    typeUrl: string;
    is(o: any): o is QueryAllStreamsForSenderRequest;
    isSDK(o: any): o is QueryAllStreamsForSenderRequestSDKType;
    isAmino(o: any): o is QueryAllStreamsForSenderRequestAmino;
    encode(message: QueryAllStreamsForSenderRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStreamsForSenderRequest;
    fromPartial(object: Partial<QueryAllStreamsForSenderRequest>): QueryAllStreamsForSenderRequest;
    fromAmino(object: QueryAllStreamsForSenderRequestAmino): QueryAllStreamsForSenderRequest;
    toAmino(message: QueryAllStreamsForSenderRequest): QueryAllStreamsForSenderRequestAmino;
    fromAminoMsg(object: QueryAllStreamsForSenderRequestAminoMsg): QueryAllStreamsForSenderRequest;
    fromProtoMsg(message: QueryAllStreamsForSenderRequestProtoMsg): QueryAllStreamsForSenderRequest;
    toProto(message: QueryAllStreamsForSenderRequest): Uint8Array;
    toProtoMsg(message: QueryAllStreamsForSenderRequest): QueryAllStreamsForSenderRequestProtoMsg;
};
export declare const QueryAllStreamsForSenderResponse: {
    typeUrl: string;
    is(o: any): o is QueryAllStreamsForSenderResponse;
    isSDK(o: any): o is QueryAllStreamsForSenderResponseSDKType;
    isAmino(o: any): o is QueryAllStreamsForSenderResponseAmino;
    encode(message: QueryAllStreamsForSenderResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStreamsForSenderResponse;
    fromPartial(object: Partial<QueryAllStreamsForSenderResponse>): QueryAllStreamsForSenderResponse;
    fromAmino(object: QueryAllStreamsForSenderResponseAmino): QueryAllStreamsForSenderResponse;
    toAmino(message: QueryAllStreamsForSenderResponse): QueryAllStreamsForSenderResponseAmino;
    fromAminoMsg(object: QueryAllStreamsForSenderResponseAminoMsg): QueryAllStreamsForSenderResponse;
    fromProtoMsg(message: QueryAllStreamsForSenderResponseProtoMsg): QueryAllStreamsForSenderResponse;
    toProto(message: QueryAllStreamsForSenderResponse): Uint8Array;
    toProtoMsg(message: QueryAllStreamsForSenderResponse): QueryAllStreamsForSenderResponseProtoMsg;
};
