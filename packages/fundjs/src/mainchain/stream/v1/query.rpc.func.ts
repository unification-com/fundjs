//@ts-nocheck
import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryCalculateFlowRateRequest, QueryCalculateFlowRateResponse, QueryStreamsRequest, QueryStreamsResponse, QueryAllStreamsForReceiverRequest, QueryAllStreamsForReceiverResponse, QueryStreamByReceiverSenderRequest, QueryStreamByReceiverSenderResponse, QueryStreamReceiverSenderCurrentFlowRequest, QueryStreamReceiverSenderCurrentFlowResponse, QueryAllStreamsForSenderRequest, QueryAllStreamsForSenderResponse, QueryAllStreamsByPairRequest, QueryAllStreamsByPairResponse } from "./query";
/**
 * Parameters queries the parameters of the module.
 * @name getParams
 * @package mainchain.stream.v1
 * @see proto service: mainchain.stream.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "mainchain.stream.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * CalculateFlowRate can be used to calculate a flow rate (coins per second)
 * to be used when creating/updating a stream
 * @name getCalculateFlowRate
 * @package mainchain.stream.v1
 * @see proto service: mainchain.stream.v1.CalculateFlowRate
 */
export const getCalculateFlowRate = buildQuery<QueryCalculateFlowRateRequest, QueryCalculateFlowRateResponse>({
  encode: QueryCalculateFlowRateRequest.encode,
  decode: QueryCalculateFlowRateResponse.decode,
  service: "mainchain.stream.v1.Query",
  method: "CalculateFlowRate",
  deps: [QueryCalculateFlowRateRequest, QueryCalculateFlowRateResponse]
});
/**
 * Streams queries all Streams.
 * @name getStreams
 * @package mainchain.stream.v1
 * @see proto service: mainchain.stream.v1.Streams
 */
export const getStreams = buildQuery<QueryStreamsRequest, QueryStreamsResponse>({
  encode: QueryStreamsRequest.encode,
  decode: QueryStreamsResponse.decode,
  service: "mainchain.stream.v1.Query",
  method: "Streams",
  deps: [QueryStreamsRequest, QueryStreamsResponse]
});
/**
 * AllStreamsForReceiver queries all Streams for a given receiver address
 * @name getAllStreamsForReceiver
 * @package mainchain.stream.v1
 * @see proto service: mainchain.stream.v1.AllStreamsForReceiver
 */
export const getAllStreamsForReceiver = buildQuery<QueryAllStreamsForReceiverRequest, QueryAllStreamsForReceiverResponse>({
  encode: QueryAllStreamsForReceiverRequest.encode,
  decode: QueryAllStreamsForReceiverResponse.decode,
  service: "mainchain.stream.v1.Query",
  method: "AllStreamsForReceiver",
  deps: [QueryAllStreamsForReceiverRequest, QueryAllStreamsForReceiverResponse]
});
/**
 * StreamByReceiverSender queries a stream for a given receiver, sender and
 * denom triple
 * @name getStreamByReceiverSender
 * @package mainchain.stream.v1
 * @see proto service: mainchain.stream.v1.StreamByReceiverSender
 */
export const getStreamByReceiverSender = buildQuery<QueryStreamByReceiverSenderRequest, QueryStreamByReceiverSenderResponse>({
  encode: QueryStreamByReceiverSenderRequest.encode,
  decode: QueryStreamByReceiverSenderResponse.decode,
  service: "mainchain.stream.v1.Query",
  method: "StreamByReceiverSender",
  deps: [QueryStreamByReceiverSenderRequest, QueryStreamByReceiverSenderResponse]
});
/**
 * StreamReceiverSenderCurrentFlow queries a stream by the given
 * receiver/sender/denom triple and returns the current flow data
 * @name getStreamReceiverSenderCurrentFlow
 * @package mainchain.stream.v1
 * @see proto service: mainchain.stream.v1.StreamReceiverSenderCurrentFlow
 */
export const getStreamReceiverSenderCurrentFlow = buildQuery<QueryStreamReceiverSenderCurrentFlowRequest, QueryStreamReceiverSenderCurrentFlowResponse>({
  encode: QueryStreamReceiverSenderCurrentFlowRequest.encode,
  decode: QueryStreamReceiverSenderCurrentFlowResponse.decode,
  service: "mainchain.stream.v1.Query",
  method: "StreamReceiverSenderCurrentFlow",
  deps: [QueryStreamReceiverSenderCurrentFlowRequest, QueryStreamReceiverSenderCurrentFlowResponse]
});
/**
 * AllStreamsForSender queries all Streams for a given sender address
 * @name getAllStreamsForSender
 * @package mainchain.stream.v1
 * @see proto service: mainchain.stream.v1.AllStreamsForSender
 */
export const getAllStreamsForSender = buildQuery<QueryAllStreamsForSenderRequest, QueryAllStreamsForSenderResponse>({
  encode: QueryAllStreamsForSenderRequest.encode,
  decode: QueryAllStreamsForSenderResponse.decode,
  service: "mainchain.stream.v1.Query",
  method: "AllStreamsForSender",
  deps: [QueryAllStreamsForSenderRequest, QueryAllStreamsForSenderResponse]
});
/**
 * AllStreamsByPair queries all Streams between a given (sender, receiver)
 * pair across denoms
 * @name getAllStreamsByPair
 * @package mainchain.stream.v1
 * @see proto service: mainchain.stream.v1.AllStreamsByPair
 */
export const getAllStreamsByPair = buildQuery<QueryAllStreamsByPairRequest, QueryAllStreamsByPairResponse>({
  encode: QueryAllStreamsByPairRequest.encode,
  decode: QueryAllStreamsByPairResponse.decode,
  service: "mainchain.stream.v1.Query",
  method: "AllStreamsByPair",
  deps: [QueryAllStreamsByPairRequest, QueryAllStreamsByPairResponse]
});