import { Rpc } from "../../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
    /** Channel queries an IBC Channel. */
    channel(request: QueryChannelRequest): Promise<QueryChannelResponse>;
    /** Channels queries all the IBC channels of a chain. */
    channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponse>;
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    connectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse>;
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    channelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse>;
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    channelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse>;
    /** PacketCommitment queries a stored packet commitment hash. */
    packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
    /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
    packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse>;
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse>;
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
    /** NextSequenceReceive returns the next receive sequence for a given channel. */
    nextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    channel(request: QueryChannelRequest): Promise<QueryChannelResponse>;
    channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponse>;
    connectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse>;
    channelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse>;
    channelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse>;
    packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
    packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
    packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
    packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse>;
    packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse>;
    unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
    unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
    nextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    channel(request: QueryChannelRequest): Promise<QueryChannelResponse>;
    channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponse>;
    connectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse>;
    channelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse>;
    channelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse>;
    packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
    packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
    packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
    packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse>;
    packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse>;
    unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
    unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
    nextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse>;
};
export interface UseChannelQuery<TData> extends ReactQueryParams<QueryChannelResponse, TData> {
    request: QueryChannelRequest;
}
export interface UseChannelsQuery<TData> extends ReactQueryParams<QueryChannelsResponse, TData> {
    request?: QueryChannelsRequest;
}
export interface UseConnectionChannelsQuery<TData> extends ReactQueryParams<QueryConnectionChannelsResponse, TData> {
    request: QueryConnectionChannelsRequest;
}
export interface UseChannelClientStateQuery<TData> extends ReactQueryParams<QueryChannelClientStateResponse, TData> {
    request: QueryChannelClientStateRequest;
}
export interface UseChannelConsensusStateQuery<TData> extends ReactQueryParams<QueryChannelConsensusStateResponse, TData> {
    request: QueryChannelConsensusStateRequest;
}
export interface UsePacketCommitmentQuery<TData> extends ReactQueryParams<QueryPacketCommitmentResponse, TData> {
    request: QueryPacketCommitmentRequest;
}
export interface UsePacketCommitmentsQuery<TData> extends ReactQueryParams<QueryPacketCommitmentsResponse, TData> {
    request: QueryPacketCommitmentsRequest;
}
export interface UsePacketReceiptQuery<TData> extends ReactQueryParams<QueryPacketReceiptResponse, TData> {
    request: QueryPacketReceiptRequest;
}
export interface UsePacketAcknowledgementQuery<TData> extends ReactQueryParams<QueryPacketAcknowledgementResponse, TData> {
    request: QueryPacketAcknowledgementRequest;
}
export interface UsePacketAcknowledgementsQuery<TData> extends ReactQueryParams<QueryPacketAcknowledgementsResponse, TData> {
    request: QueryPacketAcknowledgementsRequest;
}
export interface UseUnreceivedPacketsQuery<TData> extends ReactQueryParams<QueryUnreceivedPacketsResponse, TData> {
    request: QueryUnreceivedPacketsRequest;
}
export interface UseUnreceivedAcksQuery<TData> extends ReactQueryParams<QueryUnreceivedAcksResponse, TData> {
    request: QueryUnreceivedAcksRequest;
}
export interface UseNextSequenceReceiveQuery<TData> extends ReactQueryParams<QueryNextSequenceReceiveResponse, TData> {
    request: QueryNextSequenceReceiveRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Channel queries an IBC Channel. */ useChannel: <TData = QueryChannelResponse>({ request, options }: UseChannelQuery<TData>) => any;
    /** Channels queries all the IBC channels of a chain. */ useChannels: <TData = QueryChannelsResponse>({ request, options }: UseChannelsQuery<TData>) => any;
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    useConnectionChannels: <TData = QueryConnectionChannelsResponse>({ request, options }: UseConnectionChannelsQuery<TData>) => any;
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    useChannelClientState: <TData = QueryChannelClientStateResponse>({ request, options }: UseChannelClientStateQuery<TData>) => any;
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    useChannelConsensusState: <TData = QueryChannelConsensusStateResponse>({ request, options }: UseChannelConsensusStateQuery<TData>) => any;
    /** PacketCommitment queries a stored packet commitment hash. */ usePacketCommitment: <TData = QueryPacketCommitmentResponse>({ request, options }: UsePacketCommitmentQuery<TData>) => any;
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    usePacketCommitments: <TData = QueryPacketCommitmentsResponse>({ request, options }: UsePacketCommitmentsQuery<TData>) => any;
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    usePacketReceipt: <TData = QueryPacketReceiptResponse>({ request, options }: UsePacketReceiptQuery<TData>) => any;
    /** PacketAcknowledgement queries a stored packet acknowledgement hash. */ usePacketAcknowledgement: <TData = QueryPacketAcknowledgementResponse>({ request, options }: UsePacketAcknowledgementQuery<TData>) => any;
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    usePacketAcknowledgements: <TData = QueryPacketAcknowledgementsResponse>({ request, options }: UsePacketAcknowledgementsQuery<TData>) => any;
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    useUnreceivedPackets: <TData = QueryUnreceivedPacketsResponse>({ request, options }: UseUnreceivedPacketsQuery<TData>) => any;
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    useUnreceivedAcks: <TData = QueryUnreceivedAcksResponse>({ request, options }: UseUnreceivedAcksQuery<TData>) => any;
    /** NextSequenceReceive returns the next receive sequence for a given channel. */ useNextSequenceReceive: <TData = QueryNextSequenceReceiveResponse>({ request, options }: UseNextSequenceReceiveQuery<TData>) => any;
};
