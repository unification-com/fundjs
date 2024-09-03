//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from '../../../cosmos/base/query/v1beta1/pagination';
import { Coin, CoinAmino, CoinSDKType } from '../../../cosmos/base/v1beta1/coin';
import { isSet } from '../../../helpers';
import { GlobalDecoderRegistry } from '../../../registry';
import { Params, ParamsAmino, ParamsSDKType } from './params';
import { Stream, StreamAmino, StreamPeriod, StreamSDKType } from './stream';
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
  typeUrl: '/mainchain.stream.v1.StreamResult';
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
  type: '/mainchain.stream.v1.StreamResult';
  value: StreamResultAmino;
}
/** StreamResult contains data about a stream */
export interface StreamResultSDKType {
  receiver: string;
  sender: string;
  stream?: StreamSDKType;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: '/mainchain.stream.v1.QueryParamsRequest';
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: '/mainchain.stream.v1.QueryParamsRequest';
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: '/mainchain.stream.v1.QueryParamsResponse';
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: '/mainchain.stream.v1.QueryParamsResponse';
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
  typeUrl: '/mainchain.stream.v1.QueryCalculateFlowRateRequest';
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
  type: '/mainchain.stream.v1.QueryCalculateFlowRateRequest';
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
  typeUrl: '/mainchain.stream.v1.QueryCalculateFlowRateResponse';
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
  type: '/mainchain.stream.v1.QueryCalculateFlowRateResponse';
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
  typeUrl: '/mainchain.stream.v1.QueryStreamsRequest';
  value: Uint8Array;
}
/** QueryStreamsRequest is the request type for the Query/Streams RPC method */
export interface QueryStreamsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryStreamsRequestAminoMsg {
  type: '/mainchain.stream.v1.QueryStreamsRequest';
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
  typeUrl: '/mainchain.stream.v1.QueryStreamsResponse';
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
  type: '/mainchain.stream.v1.QueryStreamsResponse';
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
  typeUrl: '/mainchain.stream.v1.QueryAllStreamsForReceiverRequest';
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
  type: '/mainchain.stream.v1.QueryAllStreamsForReceiverRequest';
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
  typeUrl: '/mainchain.stream.v1.QueryAllStreamsForReceiverResponse';
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
  type: '/mainchain.stream.v1.QueryAllStreamsForReceiverResponse';
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
  typeUrl: '/mainchain.stream.v1.QueryStreamByReceiverSenderRequest';
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
  type: '/mainchain.stream.v1.QueryStreamByReceiverSenderRequest';
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
  typeUrl: '/mainchain.stream.v1.QueryStreamByReceiverSenderResponse';
  value: Uint8Array;
}
/** QueryStreamByReceiverSenderResponse is the response type for the Query/StreamByReceiverSender RPC method */
export interface QueryStreamByReceiverSenderResponseAmino {
  /** stream is the StreamResult */
  stream: StreamResultAmino;
}
export interface QueryStreamByReceiverSenderResponseAminoMsg {
  type: '/mainchain.stream.v1.QueryStreamByReceiverSenderResponse';
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
  typeUrl: '/mainchain.stream.v1.QueryStreamReceiverSenderCurrentFlowRequest';
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
  type: '/mainchain.stream.v1.QueryStreamReceiverSenderCurrentFlowRequest';
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
  typeUrl: '/mainchain.stream.v1.QueryStreamReceiverSenderCurrentFlowResponse';
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
  type: '/mainchain.stream.v1.QueryStreamReceiverSenderCurrentFlowResponse';
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
  typeUrl: '/mainchain.stream.v1.QueryAllStreamsForSenderRequest';
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
  type: '/mainchain.stream.v1.QueryAllStreamsForSenderRequest';
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
  typeUrl: '/mainchain.stream.v1.QueryAllStreamsForSenderResponse';
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
  type: '/mainchain.stream.v1.QueryAllStreamsForSenderResponse';
  value: QueryAllStreamsForSenderResponseAmino;
}
/** QueryAllStreamsForSenderResponse is the response type for the Query/AllStreamsForSender RPC method */
export interface QueryAllStreamsForSenderResponseSDKType {
  sender_addr: string;
  streams: StreamResultSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseStreamResult(): StreamResult {
  return {
    receiver: '',
    sender: '',
    stream: undefined
  };
}
export const StreamResult = {
  typeUrl: '/mainchain.stream.v1.StreamResult',
  is(o: any): o is StreamResult {
    return o && (o.$typeUrl === StreamResult.typeUrl || typeof o.receiver === 'string' && typeof o.sender === 'string');
  },
  isSDK(o: any): o is StreamResultSDKType {
    return o && (o.$typeUrl === StreamResult.typeUrl || typeof o.receiver === 'string' && typeof o.sender === 'string');
  },
  isAmino(o: any): o is StreamResultAmino {
    return o && (o.$typeUrl === StreamResult.typeUrl || typeof o.receiver === 'string' && typeof o.sender === 'string');
  },
  encode(message: StreamResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiver !== '') {
      writer.uint32(10).string(message.receiver);
    }
    if (message.sender !== '') {
      writer.uint32(18).string(message.sender);
    }
    if (message.stream !== undefined) {
      Stream.encode(message.stream, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StreamResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamResult();
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
        message.stream = Stream.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StreamResult>): StreamResult {
    const message = createBaseStreamResult();
    message.receiver = object.receiver ?? '';
    message.sender = object.sender ?? '';
    message.stream = object.stream !== undefined && object.stream !== null ? Stream.fromPartial(object.stream) : undefined;
    return message;
  },
  fromAmino(object: StreamResultAmino): StreamResult {
    const message = createBaseStreamResult();
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.stream !== undefined && object.stream !== null) {
      message.stream = Stream.fromAmino(object.stream);
    }
    return message;
  },
  toAmino(message: StreamResult): StreamResultAmino {
    const obj: any = {};
    obj.receiver = message.receiver === '' ? undefined : message.receiver;
    obj.sender = message.sender === '' ? undefined : message.sender;
    obj.stream = message.stream ? Stream.toAmino(message.stream) : undefined;
    return obj;
  },
  fromAminoMsg(object: StreamResultAminoMsg): StreamResult {
    return StreamResult.fromAmino(object.value);
  },
  fromProtoMsg(message: StreamResultProtoMsg): StreamResult {
    return StreamResult.decode(message.value);
  },
  toProto(message: StreamResult): Uint8Array {
    return StreamResult.encode(message).finish();
  },
  toProtoMsg(message: StreamResult): StreamResultProtoMsg {
    return {
      typeUrl: '/mainchain.stream.v1.StreamResult',
      value: StreamResult.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StreamResult.typeUrl, StreamResult);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: '/mainchain.stream.v1.QueryParamsRequest',
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: '/mainchain.stream.v1.QueryParamsRequest',
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: '/mainchain.stream.v1.QueryParamsResponse',
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.params = Params.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: '/mainchain.stream.v1.QueryParamsResponse',
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryCalculateFlowRateRequest(): QueryCalculateFlowRateRequest {
  return {
    coin: '',
    period: 0,
    duration: BigInt(0)
  };
}
export const QueryCalculateFlowRateRequest = {
  typeUrl: '/mainchain.stream.v1.QueryCalculateFlowRateRequest',
  is(o: any): o is QueryCalculateFlowRateRequest {
    return o && (o.$typeUrl === QueryCalculateFlowRateRequest.typeUrl || typeof o.coin === 'string' && isSet(o.period) && typeof o.duration === 'bigint');
  },
  isSDK(o: any): o is QueryCalculateFlowRateRequestSDKType {
    return o && (o.$typeUrl === QueryCalculateFlowRateRequest.typeUrl || typeof o.coin === 'string' && isSet(o.period) && typeof o.duration === 'bigint');
  },
  isAmino(o: any): o is QueryCalculateFlowRateRequestAmino {
    return o && (o.$typeUrl === QueryCalculateFlowRateRequest.typeUrl || typeof o.coin === 'string' && isSet(o.period) && typeof o.duration === 'bigint');
  },
  encode(message: QueryCalculateFlowRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.coin !== '') {
      writer.uint32(10).string(message.coin);
    }
    if (message.period !== 0) {
      writer.uint32(16).int32(message.period);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(24).uint64(message.duration);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalculateFlowRateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalculateFlowRateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.coin = reader.string();
        break;
      case 2:
        message.period = reader.int32() as any;
        break;
      case 3:
        message.duration = reader.uint64();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCalculateFlowRateRequest>): QueryCalculateFlowRateRequest {
    const message = createBaseQueryCalculateFlowRateRequest();
    message.coin = object.coin ?? '';
    message.period = object.period ?? 0;
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCalculateFlowRateRequestAmino): QueryCalculateFlowRateRequest {
    const message = createBaseQueryCalculateFlowRateRequest();
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = object.coin;
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = object.period;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration);
    }
    return message;
  },
  toAmino(message: QueryCalculateFlowRateRequest): QueryCalculateFlowRateRequestAmino {
    const obj: any = {};
    obj.coin = message.coin === '' ? undefined : message.coin;
    obj.period = message.period === 0 ? undefined : message.period;
    obj.duration = message.duration !== BigInt(0) ? message.duration.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCalculateFlowRateRequestAminoMsg): QueryCalculateFlowRateRequest {
    return QueryCalculateFlowRateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCalculateFlowRateRequestProtoMsg): QueryCalculateFlowRateRequest {
    return QueryCalculateFlowRateRequest.decode(message.value);
  },
  toProto(message: QueryCalculateFlowRateRequest): Uint8Array {
    return QueryCalculateFlowRateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCalculateFlowRateRequest): QueryCalculateFlowRateRequestProtoMsg {
    return {
      typeUrl: '/mainchain.stream.v1.QueryCalculateFlowRateRequest',
      value: QueryCalculateFlowRateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCalculateFlowRateRequest.typeUrl, QueryCalculateFlowRateRequest);
function createBaseQueryCalculateFlowRateResponse(): QueryCalculateFlowRateResponse {
  return {
    coin: Coin.fromPartial({}),
    period: 0,
    duration: BigInt(0),
    seconds: BigInt(0),
    flowRate: BigInt(0)
  };
}
export const QueryCalculateFlowRateResponse = {
  typeUrl: '/mainchain.stream.v1.QueryCalculateFlowRateResponse',
  is(o: any): o is QueryCalculateFlowRateResponse {
    return o && (o.$typeUrl === QueryCalculateFlowRateResponse.typeUrl || Coin.is(o.coin) && isSet(o.period) && typeof o.duration === 'bigint' && typeof o.seconds === 'bigint' && typeof o.flowRate === 'bigint');
  },
  isSDK(o: any): o is QueryCalculateFlowRateResponseSDKType {
    return o && (o.$typeUrl === QueryCalculateFlowRateResponse.typeUrl || Coin.isSDK(o.coin) && isSet(o.period) && typeof o.duration === 'bigint' && typeof o.seconds === 'bigint' && typeof o.flow_rate === 'bigint');
  },
  isAmino(o: any): o is QueryCalculateFlowRateResponseAmino {
    return o && (o.$typeUrl === QueryCalculateFlowRateResponse.typeUrl || Coin.isAmino(o.coin) && isSet(o.period) && typeof o.duration === 'bigint' && typeof o.seconds === 'bigint' && typeof o.flow_rate === 'bigint');
  },
  encode(message: QueryCalculateFlowRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== 0) {
      writer.uint32(16).int32(message.period);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(24).uint64(message.duration);
    }
    if (message.seconds !== BigInt(0)) {
      writer.uint32(32).uint64(message.seconds);
    }
    if (message.flowRate !== BigInt(0)) {
      writer.uint32(40).int64(message.flowRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalculateFlowRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalculateFlowRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.coin = Coin.decode(reader, reader.uint32());
        break;
      case 2:
        message.period = reader.int32() as any;
        break;
      case 3:
        message.duration = reader.uint64();
        break;
      case 4:
        message.seconds = reader.uint64();
        break;
      case 5:
        message.flowRate = reader.int64();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCalculateFlowRateResponse>): QueryCalculateFlowRateResponse {
    const message = createBaseQueryCalculateFlowRateResponse();
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.period = object.period ?? 0;
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    message.seconds = object.seconds !== undefined && object.seconds !== null ? BigInt(object.seconds.toString()) : BigInt(0);
    message.flowRate = object.flowRate !== undefined && object.flowRate !== null ? BigInt(object.flowRate.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCalculateFlowRateResponseAmino): QueryCalculateFlowRateResponse {
    const message = createBaseQueryCalculateFlowRateResponse();
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = object.period;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration);
    }
    if (object.seconds !== undefined && object.seconds !== null) {
      message.seconds = BigInt(object.seconds);
    }
    if (object.flow_rate !== undefined && object.flow_rate !== null) {
      message.flowRate = BigInt(object.flow_rate);
    }
    return message;
  },
  toAmino(message: QueryCalculateFlowRateResponse): QueryCalculateFlowRateResponseAmino {
    const obj: any = {};
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    obj.period = message.period === 0 ? undefined : message.period;
    obj.duration = message.duration !== BigInt(0) ? message.duration.toString() : undefined;
    obj.seconds = message.seconds !== BigInt(0) ? message.seconds.toString() : undefined;
    obj.flow_rate = message.flowRate !== BigInt(0) ? message.flowRate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCalculateFlowRateResponseAminoMsg): QueryCalculateFlowRateResponse {
    return QueryCalculateFlowRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCalculateFlowRateResponseProtoMsg): QueryCalculateFlowRateResponse {
    return QueryCalculateFlowRateResponse.decode(message.value);
  },
  toProto(message: QueryCalculateFlowRateResponse): Uint8Array {
    return QueryCalculateFlowRateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCalculateFlowRateResponse): QueryCalculateFlowRateResponseProtoMsg {
    return {
      typeUrl: '/mainchain.stream.v1.QueryCalculateFlowRateResponse',
      value: QueryCalculateFlowRateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCalculateFlowRateResponse.typeUrl, QueryCalculateFlowRateResponse);
function createBaseQueryStreamsRequest(): QueryStreamsRequest {
  return {
    pagination: undefined
  };
}
export const QueryStreamsRequest = {
  typeUrl: '/mainchain.stream.v1.QueryStreamsRequest',
  is(o: any): o is QueryStreamsRequest {
    return o && o.$typeUrl === QueryStreamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryStreamsRequestSDKType {
    return o && o.$typeUrl === QueryStreamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryStreamsRequestAmino {
    return o && o.$typeUrl === QueryStreamsRequest.typeUrl;
  },
  encode(message: QueryStreamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStreamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStreamsRequest>): QueryStreamsRequest {
    const message = createBaseQueryStreamsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryStreamsRequestAmino): QueryStreamsRequest {
    const message = createBaseQueryStreamsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStreamsRequest): QueryStreamsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStreamsRequestAminoMsg): QueryStreamsRequest {
    return QueryStreamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStreamsRequestProtoMsg): QueryStreamsRequest {
    return QueryStreamsRequest.decode(message.value);
  },
  toProto(message: QueryStreamsRequest): Uint8Array {
    return QueryStreamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStreamsRequest): QueryStreamsRequestProtoMsg {
    return {
      typeUrl: '/mainchain.stream.v1.QueryStreamsRequest',
      value: QueryStreamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryStreamsRequest.typeUrl, QueryStreamsRequest);
function createBaseQueryStreamsResponse(): QueryStreamsResponse {
  return {
    streams: [],
    pagination: undefined
  };
}
export const QueryStreamsResponse = {
  typeUrl: '/mainchain.stream.v1.QueryStreamsResponse',
  is(o: any): o is QueryStreamsResponse {
    return o && (o.$typeUrl === QueryStreamsResponse.typeUrl || Array.isArray(o.streams) && (!o.streams.length || StreamResult.is(o.streams[0])));
  },
  isSDK(o: any): o is QueryStreamsResponseSDKType {
    return o && (o.$typeUrl === QueryStreamsResponse.typeUrl || Array.isArray(o.streams) && (!o.streams.length || StreamResult.isSDK(o.streams[0])));
  },
  isAmino(o: any): o is QueryStreamsResponseAmino {
    return o && (o.$typeUrl === QueryStreamsResponse.typeUrl || Array.isArray(o.streams) && (!o.streams.length || StreamResult.isAmino(o.streams[0])));
  },
  encode(message: QueryStreamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.streams) {
      StreamResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStreamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.streams.push(StreamResult.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStreamsResponse>): QueryStreamsResponse {
    const message = createBaseQueryStreamsResponse();
    message.streams = object.streams?.map(e => StreamResult.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryStreamsResponseAmino): QueryStreamsResponse {
    const message = createBaseQueryStreamsResponse();
    message.streams = object.streams?.map(e => StreamResult.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStreamsResponse): QueryStreamsResponseAmino {
    const obj: any = {};
    if (message.streams) {
      obj.streams = message.streams.map(e => e ? StreamResult.toAmino(e) : undefined);
    } else {
      obj.streams = message.streams;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStreamsResponseAminoMsg): QueryStreamsResponse {
    return QueryStreamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStreamsResponseProtoMsg): QueryStreamsResponse {
    return QueryStreamsResponse.decode(message.value);
  },
  toProto(message: QueryStreamsResponse): Uint8Array {
    return QueryStreamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStreamsResponse): QueryStreamsResponseProtoMsg {
    return {
      typeUrl: '/mainchain.stream.v1.QueryStreamsResponse',
      value: QueryStreamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryStreamsResponse.typeUrl, QueryStreamsResponse);
function createBaseQueryAllStreamsForReceiverRequest(): QueryAllStreamsForReceiverRequest {
  return {
    receiverAddr: '',
    pagination: undefined
  };
}
export const QueryAllStreamsForReceiverRequest = {
  typeUrl: '/mainchain.stream.v1.QueryAllStreamsForReceiverRequest',
  is(o: any): o is QueryAllStreamsForReceiverRequest {
    return o && (o.$typeUrl === QueryAllStreamsForReceiverRequest.typeUrl || typeof o.receiverAddr === 'string');
  },
  isSDK(o: any): o is QueryAllStreamsForReceiverRequestSDKType {
    return o && (o.$typeUrl === QueryAllStreamsForReceiverRequest.typeUrl || typeof o.receiver_addr === 'string');
  },
  isAmino(o: any): o is QueryAllStreamsForReceiverRequestAmino {
    return o && (o.$typeUrl === QueryAllStreamsForReceiverRequest.typeUrl || typeof o.receiver_addr === 'string');
  },
  encode(message: QueryAllStreamsForReceiverRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiverAddr !== '') {
      writer.uint32(10).string(message.receiverAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStreamsForReceiverRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStreamsForReceiverRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.receiverAddr = reader.string();
        break;
      case 2:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllStreamsForReceiverRequest>): QueryAllStreamsForReceiverRequest {
    const message = createBaseQueryAllStreamsForReceiverRequest();
    message.receiverAddr = object.receiverAddr ?? '';
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStreamsForReceiverRequestAmino): QueryAllStreamsForReceiverRequest {
    const message = createBaseQueryAllStreamsForReceiverRequest();
    if (object.receiver_addr !== undefined && object.receiver_addr !== null) {
      message.receiverAddr = object.receiver_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStreamsForReceiverRequest): QueryAllStreamsForReceiverRequestAmino {
    const obj: any = {};
    obj.receiver_addr = message.receiverAddr === '' ? undefined : message.receiverAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStreamsForReceiverRequestAminoMsg): QueryAllStreamsForReceiverRequest {
    return QueryAllStreamsForReceiverRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStreamsForReceiverRequestProtoMsg): QueryAllStreamsForReceiverRequest {
    return QueryAllStreamsForReceiverRequest.decode(message.value);
  },
  toProto(message: QueryAllStreamsForReceiverRequest): Uint8Array {
    return QueryAllStreamsForReceiverRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStreamsForReceiverRequest): QueryAllStreamsForReceiverRequestProtoMsg {
    return {
      typeUrl: '/mainchain.stream.v1.QueryAllStreamsForReceiverRequest',
      value: QueryAllStreamsForReceiverRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllStreamsForReceiverRequest.typeUrl, QueryAllStreamsForReceiverRequest);
function createBaseQueryAllStreamsForReceiverResponse(): QueryAllStreamsForReceiverResponse {
  return {
    receiverAddr: '',
    streams: [],
    pagination: undefined
  };
}
export const QueryAllStreamsForReceiverResponse = {
  typeUrl: '/mainchain.stream.v1.QueryAllStreamsForReceiverResponse',
  is(o: any): o is QueryAllStreamsForReceiverResponse {
    return o && (o.$typeUrl === QueryAllStreamsForReceiverResponse.typeUrl || typeof o.receiverAddr === 'string' && Array.isArray(o.streams) && (!o.streams.length || StreamResult.is(o.streams[0])));
  },
  isSDK(o: any): o is QueryAllStreamsForReceiverResponseSDKType {
    return o && (o.$typeUrl === QueryAllStreamsForReceiverResponse.typeUrl || typeof o.receiver_addr === 'string' && Array.isArray(o.streams) && (!o.streams.length || StreamResult.isSDK(o.streams[0])));
  },
  isAmino(o: any): o is QueryAllStreamsForReceiverResponseAmino {
    return o && (o.$typeUrl === QueryAllStreamsForReceiverResponse.typeUrl || typeof o.receiver_addr === 'string' && Array.isArray(o.streams) && (!o.streams.length || StreamResult.isAmino(o.streams[0])));
  },
  encode(message: QueryAllStreamsForReceiverResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiverAddr !== '') {
      writer.uint32(10).string(message.receiverAddr);
    }
    for (const v of message.streams) {
      StreamResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStreamsForReceiverResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStreamsForReceiverResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.receiverAddr = reader.string();
        break;
      case 2:
        message.streams.push(StreamResult.decode(reader, reader.uint32()));
        break;
      case 3:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllStreamsForReceiverResponse>): QueryAllStreamsForReceiverResponse {
    const message = createBaseQueryAllStreamsForReceiverResponse();
    message.receiverAddr = object.receiverAddr ?? '';
    message.streams = object.streams?.map(e => StreamResult.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStreamsForReceiverResponseAmino): QueryAllStreamsForReceiverResponse {
    const message = createBaseQueryAllStreamsForReceiverResponse();
    if (object.receiver_addr !== undefined && object.receiver_addr !== null) {
      message.receiverAddr = object.receiver_addr;
    }
    message.streams = object.streams?.map(e => StreamResult.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStreamsForReceiverResponse): QueryAllStreamsForReceiverResponseAmino {
    const obj: any = {};
    obj.receiver_addr = message.receiverAddr === '' ? undefined : message.receiverAddr;
    if (message.streams) {
      obj.streams = message.streams.map(e => e ? StreamResult.toAmino(e) : undefined);
    } else {
      obj.streams = message.streams;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStreamsForReceiverResponseAminoMsg): QueryAllStreamsForReceiverResponse {
    return QueryAllStreamsForReceiverResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStreamsForReceiverResponseProtoMsg): QueryAllStreamsForReceiverResponse {
    return QueryAllStreamsForReceiverResponse.decode(message.value);
  },
  toProto(message: QueryAllStreamsForReceiverResponse): Uint8Array {
    return QueryAllStreamsForReceiverResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStreamsForReceiverResponse): QueryAllStreamsForReceiverResponseProtoMsg {
    return {
      typeUrl: '/mainchain.stream.v1.QueryAllStreamsForReceiverResponse',
      value: QueryAllStreamsForReceiverResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllStreamsForReceiverResponse.typeUrl, QueryAllStreamsForReceiverResponse);
function createBaseQueryStreamByReceiverSenderRequest(): QueryStreamByReceiverSenderRequest {
  return {
    receiverAddr: '',
    senderAddr: ''
  };
}
export const QueryStreamByReceiverSenderRequest = {
  typeUrl: '/mainchain.stream.v1.QueryStreamByReceiverSenderRequest',
  is(o: any): o is QueryStreamByReceiverSenderRequest {
    return o && (o.$typeUrl === QueryStreamByReceiverSenderRequest.typeUrl || typeof o.receiverAddr === 'string' && typeof o.senderAddr === 'string');
  },
  isSDK(o: any): o is QueryStreamByReceiverSenderRequestSDKType {
    return o && (o.$typeUrl === QueryStreamByReceiverSenderRequest.typeUrl || typeof o.receiver_addr === 'string' && typeof o.sender_addr === 'string');
  },
  isAmino(o: any): o is QueryStreamByReceiverSenderRequestAmino {
    return o && (o.$typeUrl === QueryStreamByReceiverSenderRequest.typeUrl || typeof o.receiver_addr === 'string' && typeof o.sender_addr === 'string');
  },
  encode(message: QueryStreamByReceiverSenderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiverAddr !== '') {
      writer.uint32(10).string(message.receiverAddr);
    }
    if (message.senderAddr !== '') {
      writer.uint32(18).string(message.senderAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamByReceiverSenderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStreamByReceiverSenderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.receiverAddr = reader.string();
        break;
      case 2:
        message.senderAddr = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStreamByReceiverSenderRequest>): QueryStreamByReceiverSenderRequest {
    const message = createBaseQueryStreamByReceiverSenderRequest();
    message.receiverAddr = object.receiverAddr ?? '';
    message.senderAddr = object.senderAddr ?? '';
    return message;
  },
  fromAmino(object: QueryStreamByReceiverSenderRequestAmino): QueryStreamByReceiverSenderRequest {
    const message = createBaseQueryStreamByReceiverSenderRequest();
    if (object.receiver_addr !== undefined && object.receiver_addr !== null) {
      message.receiverAddr = object.receiver_addr;
    }
    if (object.sender_addr !== undefined && object.sender_addr !== null) {
      message.senderAddr = object.sender_addr;
    }
    return message;
  },
  toAmino(message: QueryStreamByReceiverSenderRequest): QueryStreamByReceiverSenderRequestAmino {
    const obj: any = {};
    obj.receiver_addr = message.receiverAddr === '' ? undefined : message.receiverAddr;
    obj.sender_addr = message.senderAddr === '' ? undefined : message.senderAddr;
    return obj;
  },
  fromAminoMsg(object: QueryStreamByReceiverSenderRequestAminoMsg): QueryStreamByReceiverSenderRequest {
    return QueryStreamByReceiverSenderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStreamByReceiverSenderRequestProtoMsg): QueryStreamByReceiverSenderRequest {
    return QueryStreamByReceiverSenderRequest.decode(message.value);
  },
  toProto(message: QueryStreamByReceiverSenderRequest): Uint8Array {
    return QueryStreamByReceiverSenderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStreamByReceiverSenderRequest): QueryStreamByReceiverSenderRequestProtoMsg {
    return {
      typeUrl: '/mainchain.stream.v1.QueryStreamByReceiverSenderRequest',
      value: QueryStreamByReceiverSenderRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryStreamByReceiverSenderRequest.typeUrl, QueryStreamByReceiverSenderRequest);
function createBaseQueryStreamByReceiverSenderResponse(): QueryStreamByReceiverSenderResponse {
  return {
    stream: StreamResult.fromPartial({})
  };
}
export const QueryStreamByReceiverSenderResponse = {
  typeUrl: '/mainchain.stream.v1.QueryStreamByReceiverSenderResponse',
  is(o: any): o is QueryStreamByReceiverSenderResponse {
    return o && (o.$typeUrl === QueryStreamByReceiverSenderResponse.typeUrl || StreamResult.is(o.stream));
  },
  isSDK(o: any): o is QueryStreamByReceiverSenderResponseSDKType {
    return o && (o.$typeUrl === QueryStreamByReceiverSenderResponse.typeUrl || StreamResult.isSDK(o.stream));
  },
  isAmino(o: any): o is QueryStreamByReceiverSenderResponseAmino {
    return o && (o.$typeUrl === QueryStreamByReceiverSenderResponse.typeUrl || StreamResult.isAmino(o.stream));
  },
  encode(message: QueryStreamByReceiverSenderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stream !== undefined) {
      StreamResult.encode(message.stream, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamByReceiverSenderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStreamByReceiverSenderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.stream = StreamResult.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStreamByReceiverSenderResponse>): QueryStreamByReceiverSenderResponse {
    const message = createBaseQueryStreamByReceiverSenderResponse();
    message.stream = object.stream !== undefined && object.stream !== null ? StreamResult.fromPartial(object.stream) : undefined;
    return message;
  },
  fromAmino(object: QueryStreamByReceiverSenderResponseAmino): QueryStreamByReceiverSenderResponse {
    const message = createBaseQueryStreamByReceiverSenderResponse();
    if (object.stream !== undefined && object.stream !== null) {
      message.stream = StreamResult.fromAmino(object.stream);
    }
    return message;
  },
  toAmino(message: QueryStreamByReceiverSenderResponse): QueryStreamByReceiverSenderResponseAmino {
    const obj: any = {};
    obj.stream = message.stream ? StreamResult.toAmino(message.stream) : StreamResult.toAmino(StreamResult.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryStreamByReceiverSenderResponseAminoMsg): QueryStreamByReceiverSenderResponse {
    return QueryStreamByReceiverSenderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStreamByReceiverSenderResponseProtoMsg): QueryStreamByReceiverSenderResponse {
    return QueryStreamByReceiverSenderResponse.decode(message.value);
  },
  toProto(message: QueryStreamByReceiverSenderResponse): Uint8Array {
    return QueryStreamByReceiverSenderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStreamByReceiverSenderResponse): QueryStreamByReceiverSenderResponseProtoMsg {
    return {
      typeUrl: '/mainchain.stream.v1.QueryStreamByReceiverSenderResponse',
      value: QueryStreamByReceiverSenderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryStreamByReceiverSenderResponse.typeUrl, QueryStreamByReceiverSenderResponse);
function createBaseQueryStreamReceiverSenderCurrentFlowRequest(): QueryStreamReceiverSenderCurrentFlowRequest {
  return {
    receiverAddr: '',
    senderAddr: ''
  };
}
export const QueryStreamReceiverSenderCurrentFlowRequest = {
  typeUrl: '/mainchain.stream.v1.QueryStreamReceiverSenderCurrentFlowRequest',
  is(o: any): o is QueryStreamReceiverSenderCurrentFlowRequest {
    return o && (o.$typeUrl === QueryStreamReceiverSenderCurrentFlowRequest.typeUrl || typeof o.receiverAddr === 'string' && typeof o.senderAddr === 'string');
  },
  isSDK(o: any): o is QueryStreamReceiverSenderCurrentFlowRequestSDKType {
    return o && (o.$typeUrl === QueryStreamReceiverSenderCurrentFlowRequest.typeUrl || typeof o.receiver_addr === 'string' && typeof o.sender_addr === 'string');
  },
  isAmino(o: any): o is QueryStreamReceiverSenderCurrentFlowRequestAmino {
    return o && (o.$typeUrl === QueryStreamReceiverSenderCurrentFlowRequest.typeUrl || typeof o.receiver_addr === 'string' && typeof o.sender_addr === 'string');
  },
  encode(message: QueryStreamReceiverSenderCurrentFlowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiverAddr !== '') {
      writer.uint32(10).string(message.receiverAddr);
    }
    if (message.senderAddr !== '') {
      writer.uint32(18).string(message.senderAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamReceiverSenderCurrentFlowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStreamReceiverSenderCurrentFlowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.receiverAddr = reader.string();
        break;
      case 2:
        message.senderAddr = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStreamReceiverSenderCurrentFlowRequest>): QueryStreamReceiverSenderCurrentFlowRequest {
    const message = createBaseQueryStreamReceiverSenderCurrentFlowRequest();
    message.receiverAddr = object.receiverAddr ?? '';
    message.senderAddr = object.senderAddr ?? '';
    return message;
  },
  fromAmino(object: QueryStreamReceiverSenderCurrentFlowRequestAmino): QueryStreamReceiverSenderCurrentFlowRequest {
    const message = createBaseQueryStreamReceiverSenderCurrentFlowRequest();
    if (object.receiver_addr !== undefined && object.receiver_addr !== null) {
      message.receiverAddr = object.receiver_addr;
    }
    if (object.sender_addr !== undefined && object.sender_addr !== null) {
      message.senderAddr = object.sender_addr;
    }
    return message;
  },
  toAmino(message: QueryStreamReceiverSenderCurrentFlowRequest): QueryStreamReceiverSenderCurrentFlowRequestAmino {
    const obj: any = {};
    obj.receiver_addr = message.receiverAddr === '' ? undefined : message.receiverAddr;
    obj.sender_addr = message.senderAddr === '' ? undefined : message.senderAddr;
    return obj;
  },
  fromAminoMsg(object: QueryStreamReceiverSenderCurrentFlowRequestAminoMsg): QueryStreamReceiverSenderCurrentFlowRequest {
    return QueryStreamReceiverSenderCurrentFlowRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStreamReceiverSenderCurrentFlowRequestProtoMsg): QueryStreamReceiverSenderCurrentFlowRequest {
    return QueryStreamReceiverSenderCurrentFlowRequest.decode(message.value);
  },
  toProto(message: QueryStreamReceiverSenderCurrentFlowRequest): Uint8Array {
    return QueryStreamReceiverSenderCurrentFlowRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStreamReceiverSenderCurrentFlowRequest): QueryStreamReceiverSenderCurrentFlowRequestProtoMsg {
    return {
      typeUrl: '/mainchain.stream.v1.QueryStreamReceiverSenderCurrentFlowRequest',
      value: QueryStreamReceiverSenderCurrentFlowRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryStreamReceiverSenderCurrentFlowRequest.typeUrl, QueryStreamReceiverSenderCurrentFlowRequest);
function createBaseQueryStreamReceiverSenderCurrentFlowResponse(): QueryStreamReceiverSenderCurrentFlowResponse {
  return {
    configuredFlowRate: BigInt(0),
    currentFlowRate: BigInt(0)
  };
}
export const QueryStreamReceiverSenderCurrentFlowResponse = {
  typeUrl: '/mainchain.stream.v1.QueryStreamReceiverSenderCurrentFlowResponse',
  is(o: any): o is QueryStreamReceiverSenderCurrentFlowResponse {
    return o && (o.$typeUrl === QueryStreamReceiverSenderCurrentFlowResponse.typeUrl || typeof o.configuredFlowRate === 'bigint' && typeof o.currentFlowRate === 'bigint');
  },
  isSDK(o: any): o is QueryStreamReceiverSenderCurrentFlowResponseSDKType {
    return o && (o.$typeUrl === QueryStreamReceiverSenderCurrentFlowResponse.typeUrl || typeof o.configured_flow_rate === 'bigint' && typeof o.current_flow_rate === 'bigint');
  },
  isAmino(o: any): o is QueryStreamReceiverSenderCurrentFlowResponseAmino {
    return o && (o.$typeUrl === QueryStreamReceiverSenderCurrentFlowResponse.typeUrl || typeof o.configured_flow_rate === 'bigint' && typeof o.current_flow_rate === 'bigint');
  },
  encode(message: QueryStreamReceiverSenderCurrentFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.configuredFlowRate !== BigInt(0)) {
      writer.uint32(8).int64(message.configuredFlowRate);
    }
    if (message.currentFlowRate !== BigInt(0)) {
      writer.uint32(16).int64(message.currentFlowRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamReceiverSenderCurrentFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStreamReceiverSenderCurrentFlowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.configuredFlowRate = reader.int64();
        break;
      case 2:
        message.currentFlowRate = reader.int64();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStreamReceiverSenderCurrentFlowResponse>): QueryStreamReceiverSenderCurrentFlowResponse {
    const message = createBaseQueryStreamReceiverSenderCurrentFlowResponse();
    message.configuredFlowRate = object.configuredFlowRate !== undefined && object.configuredFlowRate !== null ? BigInt(object.configuredFlowRate.toString()) : BigInt(0);
    message.currentFlowRate = object.currentFlowRate !== undefined && object.currentFlowRate !== null ? BigInt(object.currentFlowRate.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryStreamReceiverSenderCurrentFlowResponseAmino): QueryStreamReceiverSenderCurrentFlowResponse {
    const message = createBaseQueryStreamReceiverSenderCurrentFlowResponse();
    if (object.configured_flow_rate !== undefined && object.configured_flow_rate !== null) {
      message.configuredFlowRate = BigInt(object.configured_flow_rate);
    }
    if (object.current_flow_rate !== undefined && object.current_flow_rate !== null) {
      message.currentFlowRate = BigInt(object.current_flow_rate);
    }
    return message;
  },
  toAmino(message: QueryStreamReceiverSenderCurrentFlowResponse): QueryStreamReceiverSenderCurrentFlowResponseAmino {
    const obj: any = {};
    obj.configured_flow_rate = message.configuredFlowRate !== BigInt(0) ? message.configuredFlowRate.toString() : undefined;
    obj.current_flow_rate = message.currentFlowRate !== BigInt(0) ? message.currentFlowRate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStreamReceiverSenderCurrentFlowResponseAminoMsg): QueryStreamReceiverSenderCurrentFlowResponse {
    return QueryStreamReceiverSenderCurrentFlowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStreamReceiverSenderCurrentFlowResponseProtoMsg): QueryStreamReceiverSenderCurrentFlowResponse {
    return QueryStreamReceiverSenderCurrentFlowResponse.decode(message.value);
  },
  toProto(message: QueryStreamReceiverSenderCurrentFlowResponse): Uint8Array {
    return QueryStreamReceiverSenderCurrentFlowResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStreamReceiverSenderCurrentFlowResponse): QueryStreamReceiverSenderCurrentFlowResponseProtoMsg {
    return {
      typeUrl: '/mainchain.stream.v1.QueryStreamReceiverSenderCurrentFlowResponse',
      value: QueryStreamReceiverSenderCurrentFlowResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryStreamReceiverSenderCurrentFlowResponse.typeUrl, QueryStreamReceiverSenderCurrentFlowResponse);
function createBaseQueryAllStreamsForSenderRequest(): QueryAllStreamsForSenderRequest {
  return {
    senderAddr: '',
    pagination: undefined
  };
}
export const QueryAllStreamsForSenderRequest = {
  typeUrl: '/mainchain.stream.v1.QueryAllStreamsForSenderRequest',
  is(o: any): o is QueryAllStreamsForSenderRequest {
    return o && (o.$typeUrl === QueryAllStreamsForSenderRequest.typeUrl || typeof o.senderAddr === 'string');
  },
  isSDK(o: any): o is QueryAllStreamsForSenderRequestSDKType {
    return o && (o.$typeUrl === QueryAllStreamsForSenderRequest.typeUrl || typeof o.sender_addr === 'string');
  },
  isAmino(o: any): o is QueryAllStreamsForSenderRequestAmino {
    return o && (o.$typeUrl === QueryAllStreamsForSenderRequest.typeUrl || typeof o.sender_addr === 'string');
  },
  encode(message: QueryAllStreamsForSenderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddr !== '') {
      writer.uint32(10).string(message.senderAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStreamsForSenderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStreamsForSenderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.senderAddr = reader.string();
        break;
      case 2:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllStreamsForSenderRequest>): QueryAllStreamsForSenderRequest {
    const message = createBaseQueryAllStreamsForSenderRequest();
    message.senderAddr = object.senderAddr ?? '';
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStreamsForSenderRequestAmino): QueryAllStreamsForSenderRequest {
    const message = createBaseQueryAllStreamsForSenderRequest();
    if (object.sender_addr !== undefined && object.sender_addr !== null) {
      message.senderAddr = object.sender_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStreamsForSenderRequest): QueryAllStreamsForSenderRequestAmino {
    const obj: any = {};
    obj.sender_addr = message.senderAddr === '' ? undefined : message.senderAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStreamsForSenderRequestAminoMsg): QueryAllStreamsForSenderRequest {
    return QueryAllStreamsForSenderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStreamsForSenderRequestProtoMsg): QueryAllStreamsForSenderRequest {
    return QueryAllStreamsForSenderRequest.decode(message.value);
  },
  toProto(message: QueryAllStreamsForSenderRequest): Uint8Array {
    return QueryAllStreamsForSenderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStreamsForSenderRequest): QueryAllStreamsForSenderRequestProtoMsg {
    return {
      typeUrl: '/mainchain.stream.v1.QueryAllStreamsForSenderRequest',
      value: QueryAllStreamsForSenderRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllStreamsForSenderRequest.typeUrl, QueryAllStreamsForSenderRequest);
function createBaseQueryAllStreamsForSenderResponse(): QueryAllStreamsForSenderResponse {
  return {
    senderAddr: '',
    streams: [],
    pagination: undefined
  };
}
export const QueryAllStreamsForSenderResponse = {
  typeUrl: '/mainchain.stream.v1.QueryAllStreamsForSenderResponse',
  is(o: any): o is QueryAllStreamsForSenderResponse {
    return o && (o.$typeUrl === QueryAllStreamsForSenderResponse.typeUrl || typeof o.senderAddr === 'string' && Array.isArray(o.streams) && (!o.streams.length || StreamResult.is(o.streams[0])));
  },
  isSDK(o: any): o is QueryAllStreamsForSenderResponseSDKType {
    return o && (o.$typeUrl === QueryAllStreamsForSenderResponse.typeUrl || typeof o.sender_addr === 'string' && Array.isArray(o.streams) && (!o.streams.length || StreamResult.isSDK(o.streams[0])));
  },
  isAmino(o: any): o is QueryAllStreamsForSenderResponseAmino {
    return o && (o.$typeUrl === QueryAllStreamsForSenderResponse.typeUrl || typeof o.sender_addr === 'string' && Array.isArray(o.streams) && (!o.streams.length || StreamResult.isAmino(o.streams[0])));
  },
  encode(message: QueryAllStreamsForSenderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddr !== '') {
      writer.uint32(10).string(message.senderAddr);
    }
    for (const v of message.streams) {
      StreamResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStreamsForSenderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStreamsForSenderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.senderAddr = reader.string();
        break;
      case 2:
        message.streams.push(StreamResult.decode(reader, reader.uint32()));
        break;
      case 3:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllStreamsForSenderResponse>): QueryAllStreamsForSenderResponse {
    const message = createBaseQueryAllStreamsForSenderResponse();
    message.senderAddr = object.senderAddr ?? '';
    message.streams = object.streams?.map(e => StreamResult.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStreamsForSenderResponseAmino): QueryAllStreamsForSenderResponse {
    const message = createBaseQueryAllStreamsForSenderResponse();
    if (object.sender_addr !== undefined && object.sender_addr !== null) {
      message.senderAddr = object.sender_addr;
    }
    message.streams = object.streams?.map(e => StreamResult.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStreamsForSenderResponse): QueryAllStreamsForSenderResponseAmino {
    const obj: any = {};
    obj.sender_addr = message.senderAddr === '' ? undefined : message.senderAddr;
    if (message.streams) {
      obj.streams = message.streams.map(e => e ? StreamResult.toAmino(e) : undefined);
    } else {
      obj.streams = message.streams;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStreamsForSenderResponseAminoMsg): QueryAllStreamsForSenderResponse {
    return QueryAllStreamsForSenderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStreamsForSenderResponseProtoMsg): QueryAllStreamsForSenderResponse {
    return QueryAllStreamsForSenderResponse.decode(message.value);
  },
  toProto(message: QueryAllStreamsForSenderResponse): Uint8Array {
    return QueryAllStreamsForSenderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStreamsForSenderResponse): QueryAllStreamsForSenderResponseProtoMsg {
    return {
      typeUrl: '/mainchain.stream.v1.QueryAllStreamsForSenderResponse',
      value: QueryAllStreamsForSenderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllStreamsForSenderResponse.typeUrl, QueryAllStreamsForSenderResponse);