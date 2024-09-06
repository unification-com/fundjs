import * as _92 from "./applications/transfer/v1/genesis";
import * as _93 from "./applications/transfer/v1/query";
import * as _94 from "./applications/transfer/v1/transfer";
import * as _95 from "./applications/transfer/v1/tx";
import * as _96 from "./applications/transfer/v2/packet";
import * as _97 from "./core/channel/v1/channel";
import * as _98 from "./core/channel/v1/genesis";
import * as _99 from "./core/channel/v1/query";
import * as _100 from "./core/channel/v1/tx";
import * as _101 from "./core/client/v1/client";
import * as _102 from "./core/client/v1/genesis";
import * as _103 from "./core/client/v1/query";
import * as _104 from "./core/client/v1/tx";
import * as _105 from "./core/commitment/v1/commitment";
import * as _106 from "./core/connection/v1/connection";
import * as _107 from "./core/connection/v1/genesis";
import * as _108 from "./core/connection/v1/query";
import * as _109 from "./core/connection/v1/tx";
import * as _110 from "./lightclients/localhost/v1/localhost";
import * as _111 from "./lightclients/solomachine/v1/solomachine";
import * as _112 from "./lightclients/solomachine/v2/solomachine";
import * as _113 from "./lightclients/tendermint/v1/tendermint";
import * as _217 from "./applications/transfer/v1/query.lcd";
import * as _218 from "./core/channel/v1/query.lcd";
import * as _219 from "./core/client/v1/query.lcd";
import * as _220 from "./core/connection/v1/query.lcd";
import * as _221 from "./applications/transfer/v1/query.rpc.Query";
import * as _222 from "./core/channel/v1/query.rpc.Query";
import * as _223 from "./core/client/v1/query.rpc.Query";
import * as _224 from "./core/connection/v1/query.rpc.Query";
import * as _225 from "./applications/transfer/v1/tx.rpc.msg";
import * as _226 from "./core/channel/v1/tx.rpc.msg";
import * as _227 from "./core/client/v1/tx.rpc.msg";
import * as _228 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _225.MsgClientImpl;
                QueryClientImpl: typeof _221.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _93.QueryDenomTraceRequest): Promise<_93.QueryDenomTraceResponse>;
                    denomTraces(request?: _93.QueryDenomTracesRequest): Promise<_93.QueryDenomTracesResponse>;
                    params(request?: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _217.LCDQueryClient;
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _95.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _95.MsgTransfer): {
                            typeUrl: string;
                            value: _95.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _95.MsgTransfer): {
                            typeUrl: string;
                            value: _95.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _95.MsgTransfer) => _95.MsgTransferAmino;
                        fromAmino: (object: _95.MsgTransferAmino) => _95.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _95.MsgTransfer;
                    isSDK(o: any): o is _95.MsgTransferSDKType;
                    isAmino(o: any): o is _95.MsgTransferAmino;
                    encode(message: _95.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.MsgTransfer;
                    fromPartial(object: Partial<_95.MsgTransfer>): _95.MsgTransfer;
                    fromAmino(object: _95.MsgTransferAmino): _95.MsgTransfer;
                    toAmino(message: _95.MsgTransfer): _95.MsgTransferAmino;
                    fromAminoMsg(object: _95.MsgTransferAminoMsg): _95.MsgTransfer;
                    toAminoMsg(message: _95.MsgTransfer): _95.MsgTransferAminoMsg;
                    fromProtoMsg(message: _95.MsgTransferProtoMsg): _95.MsgTransfer;
                    toProto(message: _95.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _95.MsgTransfer): _95.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _95.MsgTransferResponse;
                    isSDK(o: any): o is _95.MsgTransferResponseSDKType;
                    isAmino(o: any): o is _95.MsgTransferResponseAmino;
                    encode(_: _95.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.MsgTransferResponse;
                    fromPartial(_: Partial<_95.MsgTransferResponse>): _95.MsgTransferResponse;
                    fromAmino(_: _95.MsgTransferResponseAmino): _95.MsgTransferResponse;
                    toAmino(_: _95.MsgTransferResponse): _95.MsgTransferResponseAmino;
                    fromAminoMsg(object: _95.MsgTransferResponseAminoMsg): _95.MsgTransferResponse;
                    toAminoMsg(message: _95.MsgTransferResponse): _95.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _95.MsgTransferResponseProtoMsg): _95.MsgTransferResponse;
                    toProto(message: _95.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _95.MsgTransferResponse): _95.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _94.DenomTrace;
                    isSDK(o: any): o is _94.DenomTraceSDKType;
                    isAmino(o: any): o is _94.DenomTraceAmino;
                    encode(message: _94.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.DenomTrace;
                    fromPartial(object: Partial<_94.DenomTrace>): _94.DenomTrace;
                    fromAmino(object: _94.DenomTraceAmino): _94.DenomTrace;
                    toAmino(message: _94.DenomTrace): _94.DenomTraceAmino;
                    fromAminoMsg(object: _94.DenomTraceAminoMsg): _94.DenomTrace;
                    toAminoMsg(message: _94.DenomTrace): _94.DenomTraceAminoMsg;
                    fromProtoMsg(message: _94.DenomTraceProtoMsg): _94.DenomTrace;
                    toProto(message: _94.DenomTrace): Uint8Array;
                    toProtoMsg(message: _94.DenomTrace): _94.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _94.Params;
                    isSDK(o: any): o is _94.ParamsSDKType;
                    isAmino(o: any): o is _94.ParamsAmino;
                    encode(message: _94.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.Params;
                    fromPartial(object: Partial<_94.Params>): _94.Params;
                    fromAmino(object: _94.ParamsAmino): _94.Params;
                    toAmino(message: _94.Params): _94.ParamsAmino;
                    fromAminoMsg(object: _94.ParamsAminoMsg): _94.Params;
                    toAminoMsg(message: _94.Params): _94.ParamsAminoMsg;
                    fromProtoMsg(message: _94.ParamsProtoMsg): _94.Params;
                    toProto(message: _94.Params): Uint8Array;
                    toProtoMsg(message: _94.Params): _94.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _93.QueryDenomTraceRequest;
                    isSDK(o: any): o is _93.QueryDenomTraceRequestSDKType;
                    isAmino(o: any): o is _93.QueryDenomTraceRequestAmino;
                    encode(message: _93.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _93.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_93.QueryDenomTraceRequest>): _93.QueryDenomTraceRequest;
                    fromAmino(object: _93.QueryDenomTraceRequestAmino): _93.QueryDenomTraceRequest;
                    toAmino(message: _93.QueryDenomTraceRequest): _93.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _93.QueryDenomTraceRequestAminoMsg): _93.QueryDenomTraceRequest;
                    toAminoMsg(message: _93.QueryDenomTraceRequest): _93.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _93.QueryDenomTraceRequestProtoMsg): _93.QueryDenomTraceRequest;
                    toProto(message: _93.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _93.QueryDenomTraceRequest): _93.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _93.QueryDenomTraceResponse;
                    isSDK(o: any): o is _93.QueryDenomTraceResponseSDKType;
                    isAmino(o: any): o is _93.QueryDenomTraceResponseAmino;
                    encode(message: _93.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _93.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_93.QueryDenomTraceResponse>): _93.QueryDenomTraceResponse;
                    fromAmino(object: _93.QueryDenomTraceResponseAmino): _93.QueryDenomTraceResponse;
                    toAmino(message: _93.QueryDenomTraceResponse): _93.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _93.QueryDenomTraceResponseAminoMsg): _93.QueryDenomTraceResponse;
                    toAminoMsg(message: _93.QueryDenomTraceResponse): _93.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _93.QueryDenomTraceResponseProtoMsg): _93.QueryDenomTraceResponse;
                    toProto(message: _93.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _93.QueryDenomTraceResponse): _93.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _93.QueryDenomTracesRequest;
                    isSDK(o: any): o is _93.QueryDenomTracesRequestSDKType;
                    isAmino(o: any): o is _93.QueryDenomTracesRequestAmino;
                    encode(message: _93.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _93.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_93.QueryDenomTracesRequest>): _93.QueryDenomTracesRequest;
                    fromAmino(object: _93.QueryDenomTracesRequestAmino): _93.QueryDenomTracesRequest;
                    toAmino(message: _93.QueryDenomTracesRequest): _93.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _93.QueryDenomTracesRequestAminoMsg): _93.QueryDenomTracesRequest;
                    toAminoMsg(message: _93.QueryDenomTracesRequest): _93.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _93.QueryDenomTracesRequestProtoMsg): _93.QueryDenomTracesRequest;
                    toProto(message: _93.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _93.QueryDenomTracesRequest): _93.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _93.QueryDenomTracesResponse;
                    isSDK(o: any): o is _93.QueryDenomTracesResponseSDKType;
                    isAmino(o: any): o is _93.QueryDenomTracesResponseAmino;
                    encode(message: _93.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _93.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_93.QueryDenomTracesResponse>): _93.QueryDenomTracesResponse;
                    fromAmino(object: _93.QueryDenomTracesResponseAmino): _93.QueryDenomTracesResponse;
                    toAmino(message: _93.QueryDenomTracesResponse): _93.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _93.QueryDenomTracesResponseAminoMsg): _93.QueryDenomTracesResponse;
                    toAminoMsg(message: _93.QueryDenomTracesResponse): _93.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _93.QueryDenomTracesResponseProtoMsg): _93.QueryDenomTracesResponse;
                    toProto(message: _93.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _93.QueryDenomTracesResponse): _93.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _93.QueryParamsRequest;
                    isSDK(o: any): o is _93.QueryParamsRequestSDKType;
                    isAmino(o: any): o is _93.QueryParamsRequestAmino;
                    encode(_: _93.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _93.QueryParamsRequest;
                    fromPartial(_: Partial<_93.QueryParamsRequest>): _93.QueryParamsRequest;
                    fromAmino(_: _93.QueryParamsRequestAmino): _93.QueryParamsRequest;
                    toAmino(_: _93.QueryParamsRequest): _93.QueryParamsRequestAmino;
                    fromAminoMsg(object: _93.QueryParamsRequestAminoMsg): _93.QueryParamsRequest;
                    toAminoMsg(message: _93.QueryParamsRequest): _93.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _93.QueryParamsRequestProtoMsg): _93.QueryParamsRequest;
                    toProto(message: _93.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _93.QueryParamsRequest): _93.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _93.QueryParamsResponse;
                    isSDK(o: any): o is _93.QueryParamsResponseSDKType;
                    isAmino(o: any): o is _93.QueryParamsResponseAmino;
                    encode(message: _93.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _93.QueryParamsResponse;
                    fromPartial(object: Partial<_93.QueryParamsResponse>): _93.QueryParamsResponse;
                    fromAmino(object: _93.QueryParamsResponseAmino): _93.QueryParamsResponse;
                    toAmino(message: _93.QueryParamsResponse): _93.QueryParamsResponseAmino;
                    fromAminoMsg(object: _93.QueryParamsResponseAminoMsg): _93.QueryParamsResponse;
                    toAminoMsg(message: _93.QueryParamsResponse): _93.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _93.QueryParamsResponseProtoMsg): _93.QueryParamsResponse;
                    toProto(message: _93.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _93.QueryParamsResponse): _93.QueryParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _92.GenesisState;
                    isSDK(o: any): o is _92.GenesisStateSDKType;
                    isAmino(o: any): o is _92.GenesisStateAmino;
                    encode(message: _92.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.GenesisState;
                    fromPartial(object: Partial<_92.GenesisState>): _92.GenesisState;
                    fromAmino(object: _92.GenesisStateAmino): _92.GenesisState;
                    toAmino(message: _92.GenesisState): _92.GenesisStateAmino;
                    fromAminoMsg(object: _92.GenesisStateAminoMsg): _92.GenesisState;
                    toAminoMsg(message: _92.GenesisState): _92.GenesisStateAminoMsg;
                    fromProtoMsg(message: _92.GenesisStateProtoMsg): _92.GenesisState;
                    toProto(message: _92.GenesisState): Uint8Array;
                    toProtoMsg(message: _92.GenesisState): _92.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _96.FungibleTokenPacketData;
                    isSDK(o: any): o is _96.FungibleTokenPacketDataSDKType;
                    isAmino(o: any): o is _96.FungibleTokenPacketDataAmino;
                    encode(message: _96.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.FungibleTokenPacketData;
                    fromPartial(object: Partial<_96.FungibleTokenPacketData>): _96.FungibleTokenPacketData;
                    fromAmino(object: _96.FungibleTokenPacketDataAmino): _96.FungibleTokenPacketData;
                    toAmino(message: _96.FungibleTokenPacketData): _96.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _96.FungibleTokenPacketDataAminoMsg): _96.FungibleTokenPacketData;
                    toAminoMsg(message: _96.FungibleTokenPacketData): _96.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _96.FungibleTokenPacketDataProtoMsg): _96.FungibleTokenPacketData;
                    toProto(message: _96.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _96.FungibleTokenPacketData): _96.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _226.MsgClientImpl;
                QueryClientImpl: typeof _222.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _99.QueryChannelRequest): Promise<_99.QueryChannelResponse>;
                    channels(request?: _99.QueryChannelsRequest): Promise<_99.QueryChannelsResponse>;
                    connectionChannels(request: _99.QueryConnectionChannelsRequest): Promise<_99.QueryConnectionChannelsResponse>;
                    channelClientState(request: _99.QueryChannelClientStateRequest): Promise<_99.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _99.QueryChannelConsensusStateRequest): Promise<_99.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _99.QueryPacketCommitmentRequest): Promise<_99.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _99.QueryPacketCommitmentsRequest): Promise<_99.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _99.QueryPacketReceiptRequest): Promise<_99.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _99.QueryPacketAcknowledgementRequest): Promise<_99.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _99.QueryPacketAcknowledgementsRequest): Promise<_99.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _99.QueryUnreceivedPacketsRequest): Promise<_99.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _99.QueryUnreceivedAcksRequest): Promise<_99.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _99.QueryNextSequenceReceiveRequest): Promise<_99.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _218.LCDQueryClient;
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _100.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _100.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _100.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _100.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _100.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _100.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _100.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _100.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _100.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _100.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _100.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _100.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _100.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _100.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _100.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _100.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _100.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _100.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _100.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _100.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _100.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _100.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _100.MsgRecvPacket): {
                            typeUrl: string;
                            value: _100.MsgRecvPacket;
                        };
                        timeout(value: _100.MsgTimeout): {
                            typeUrl: string;
                            value: _100.MsgTimeout;
                        };
                        timeoutOnClose(value: _100.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _100.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _100.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _100.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _100.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _100.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _100.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _100.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _100.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _100.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _100.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _100.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _100.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _100.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _100.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _100.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _100.MsgRecvPacket): {
                            typeUrl: string;
                            value: _100.MsgRecvPacket;
                        };
                        timeout(value: _100.MsgTimeout): {
                            typeUrl: string;
                            value: _100.MsgTimeout;
                        };
                        timeoutOnClose(value: _100.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _100.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _100.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _100.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _100.MsgChannelOpenInit) => _100.MsgChannelOpenInitAmino;
                        fromAmino: (object: _100.MsgChannelOpenInitAmino) => _100.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _100.MsgChannelOpenTry) => _100.MsgChannelOpenTryAmino;
                        fromAmino: (object: _100.MsgChannelOpenTryAmino) => _100.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _100.MsgChannelOpenAck) => _100.MsgChannelOpenAckAmino;
                        fromAmino: (object: _100.MsgChannelOpenAckAmino) => _100.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _100.MsgChannelOpenConfirm) => _100.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _100.MsgChannelOpenConfirmAmino) => _100.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _100.MsgChannelCloseInit) => _100.MsgChannelCloseInitAmino;
                        fromAmino: (object: _100.MsgChannelCloseInitAmino) => _100.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _100.MsgChannelCloseConfirm) => _100.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _100.MsgChannelCloseConfirmAmino) => _100.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _100.MsgRecvPacket) => _100.MsgRecvPacketAmino;
                        fromAmino: (object: _100.MsgRecvPacketAmino) => _100.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _100.MsgTimeout) => _100.MsgTimeoutAmino;
                        fromAmino: (object: _100.MsgTimeoutAmino) => _100.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _100.MsgTimeoutOnClose) => _100.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _100.MsgTimeoutOnCloseAmino) => _100.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _100.MsgAcknowledgement) => _100.MsgAcknowledgementAmino;
                        fromAmino: (object: _100.MsgAcknowledgementAmino) => _100.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgChannelOpenInit;
                    isSDK(o: any): o is _100.MsgChannelOpenInitSDKType;
                    isAmino(o: any): o is _100.MsgChannelOpenInitAmino;
                    encode(message: _100.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgChannelOpenInit;
                    fromPartial(object: Partial<_100.MsgChannelOpenInit>): _100.MsgChannelOpenInit;
                    fromAmino(object: _100.MsgChannelOpenInitAmino): _100.MsgChannelOpenInit;
                    toAmino(message: _100.MsgChannelOpenInit): _100.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _100.MsgChannelOpenInitAminoMsg): _100.MsgChannelOpenInit;
                    toAminoMsg(message: _100.MsgChannelOpenInit): _100.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _100.MsgChannelOpenInitProtoMsg): _100.MsgChannelOpenInit;
                    toProto(message: _100.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _100.MsgChannelOpenInit): _100.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgChannelOpenInitResponse;
                    isSDK(o: any): o is _100.MsgChannelOpenInitResponseSDKType;
                    isAmino(o: any): o is _100.MsgChannelOpenInitResponseAmino;
                    encode(_: _100.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgChannelOpenInitResponse;
                    fromPartial(_: Partial<_100.MsgChannelOpenInitResponse>): _100.MsgChannelOpenInitResponse;
                    fromAmino(_: _100.MsgChannelOpenInitResponseAmino): _100.MsgChannelOpenInitResponse;
                    toAmino(_: _100.MsgChannelOpenInitResponse): _100.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _100.MsgChannelOpenInitResponseAminoMsg): _100.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _100.MsgChannelOpenInitResponse): _100.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _100.MsgChannelOpenInitResponseProtoMsg): _100.MsgChannelOpenInitResponse;
                    toProto(message: _100.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _100.MsgChannelOpenInitResponse): _100.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgChannelOpenTry;
                    isSDK(o: any): o is _100.MsgChannelOpenTrySDKType;
                    isAmino(o: any): o is _100.MsgChannelOpenTryAmino;
                    encode(message: _100.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgChannelOpenTry;
                    fromPartial(object: Partial<_100.MsgChannelOpenTry>): _100.MsgChannelOpenTry;
                    fromAmino(object: _100.MsgChannelOpenTryAmino): _100.MsgChannelOpenTry;
                    toAmino(message: _100.MsgChannelOpenTry): _100.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _100.MsgChannelOpenTryAminoMsg): _100.MsgChannelOpenTry;
                    toAminoMsg(message: _100.MsgChannelOpenTry): _100.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _100.MsgChannelOpenTryProtoMsg): _100.MsgChannelOpenTry;
                    toProto(message: _100.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _100.MsgChannelOpenTry): _100.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgChannelOpenTryResponse;
                    isSDK(o: any): o is _100.MsgChannelOpenTryResponseSDKType;
                    isAmino(o: any): o is _100.MsgChannelOpenTryResponseAmino;
                    encode(_: _100.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgChannelOpenTryResponse;
                    fromPartial(_: Partial<_100.MsgChannelOpenTryResponse>): _100.MsgChannelOpenTryResponse;
                    fromAmino(_: _100.MsgChannelOpenTryResponseAmino): _100.MsgChannelOpenTryResponse;
                    toAmino(_: _100.MsgChannelOpenTryResponse): _100.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _100.MsgChannelOpenTryResponseAminoMsg): _100.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _100.MsgChannelOpenTryResponse): _100.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _100.MsgChannelOpenTryResponseProtoMsg): _100.MsgChannelOpenTryResponse;
                    toProto(message: _100.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _100.MsgChannelOpenTryResponse): _100.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgChannelOpenAck;
                    isSDK(o: any): o is _100.MsgChannelOpenAckSDKType;
                    isAmino(o: any): o is _100.MsgChannelOpenAckAmino;
                    encode(message: _100.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgChannelOpenAck;
                    fromPartial(object: Partial<_100.MsgChannelOpenAck>): _100.MsgChannelOpenAck;
                    fromAmino(object: _100.MsgChannelOpenAckAmino): _100.MsgChannelOpenAck;
                    toAmino(message: _100.MsgChannelOpenAck): _100.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _100.MsgChannelOpenAckAminoMsg): _100.MsgChannelOpenAck;
                    toAminoMsg(message: _100.MsgChannelOpenAck): _100.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _100.MsgChannelOpenAckProtoMsg): _100.MsgChannelOpenAck;
                    toProto(message: _100.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _100.MsgChannelOpenAck): _100.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgChannelOpenAckResponse;
                    isSDK(o: any): o is _100.MsgChannelOpenAckResponseSDKType;
                    isAmino(o: any): o is _100.MsgChannelOpenAckResponseAmino;
                    encode(_: _100.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_100.MsgChannelOpenAckResponse>): _100.MsgChannelOpenAckResponse;
                    fromAmino(_: _100.MsgChannelOpenAckResponseAmino): _100.MsgChannelOpenAckResponse;
                    toAmino(_: _100.MsgChannelOpenAckResponse): _100.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _100.MsgChannelOpenAckResponseAminoMsg): _100.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _100.MsgChannelOpenAckResponse): _100.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _100.MsgChannelOpenAckResponseProtoMsg): _100.MsgChannelOpenAckResponse;
                    toProto(message: _100.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _100.MsgChannelOpenAckResponse): _100.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgChannelOpenConfirm;
                    isSDK(o: any): o is _100.MsgChannelOpenConfirmSDKType;
                    isAmino(o: any): o is _100.MsgChannelOpenConfirmAmino;
                    encode(message: _100.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_100.MsgChannelOpenConfirm>): _100.MsgChannelOpenConfirm;
                    fromAmino(object: _100.MsgChannelOpenConfirmAmino): _100.MsgChannelOpenConfirm;
                    toAmino(message: _100.MsgChannelOpenConfirm): _100.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _100.MsgChannelOpenConfirmAminoMsg): _100.MsgChannelOpenConfirm;
                    toAminoMsg(message: _100.MsgChannelOpenConfirm): _100.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _100.MsgChannelOpenConfirmProtoMsg): _100.MsgChannelOpenConfirm;
                    toProto(message: _100.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _100.MsgChannelOpenConfirm): _100.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgChannelOpenConfirmResponse;
                    isSDK(o: any): o is _100.MsgChannelOpenConfirmResponseSDKType;
                    isAmino(o: any): o is _100.MsgChannelOpenConfirmResponseAmino;
                    encode(_: _100.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_100.MsgChannelOpenConfirmResponse>): _100.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _100.MsgChannelOpenConfirmResponseAmino): _100.MsgChannelOpenConfirmResponse;
                    toAmino(_: _100.MsgChannelOpenConfirmResponse): _100.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _100.MsgChannelOpenConfirmResponseAminoMsg): _100.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _100.MsgChannelOpenConfirmResponse): _100.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _100.MsgChannelOpenConfirmResponseProtoMsg): _100.MsgChannelOpenConfirmResponse;
                    toProto(message: _100.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _100.MsgChannelOpenConfirmResponse): _100.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgChannelCloseInit;
                    isSDK(o: any): o is _100.MsgChannelCloseInitSDKType;
                    isAmino(o: any): o is _100.MsgChannelCloseInitAmino;
                    encode(message: _100.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgChannelCloseInit;
                    fromPartial(object: Partial<_100.MsgChannelCloseInit>): _100.MsgChannelCloseInit;
                    fromAmino(object: _100.MsgChannelCloseInitAmino): _100.MsgChannelCloseInit;
                    toAmino(message: _100.MsgChannelCloseInit): _100.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _100.MsgChannelCloseInitAminoMsg): _100.MsgChannelCloseInit;
                    toAminoMsg(message: _100.MsgChannelCloseInit): _100.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _100.MsgChannelCloseInitProtoMsg): _100.MsgChannelCloseInit;
                    toProto(message: _100.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _100.MsgChannelCloseInit): _100.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgChannelCloseInitResponse;
                    isSDK(o: any): o is _100.MsgChannelCloseInitResponseSDKType;
                    isAmino(o: any): o is _100.MsgChannelCloseInitResponseAmino;
                    encode(_: _100.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_100.MsgChannelCloseInitResponse>): _100.MsgChannelCloseInitResponse;
                    fromAmino(_: _100.MsgChannelCloseInitResponseAmino): _100.MsgChannelCloseInitResponse;
                    toAmino(_: _100.MsgChannelCloseInitResponse): _100.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _100.MsgChannelCloseInitResponseAminoMsg): _100.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _100.MsgChannelCloseInitResponse): _100.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _100.MsgChannelCloseInitResponseProtoMsg): _100.MsgChannelCloseInitResponse;
                    toProto(message: _100.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _100.MsgChannelCloseInitResponse): _100.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgChannelCloseConfirm;
                    isSDK(o: any): o is _100.MsgChannelCloseConfirmSDKType;
                    isAmino(o: any): o is _100.MsgChannelCloseConfirmAmino;
                    encode(message: _100.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_100.MsgChannelCloseConfirm>): _100.MsgChannelCloseConfirm;
                    fromAmino(object: _100.MsgChannelCloseConfirmAmino): _100.MsgChannelCloseConfirm;
                    toAmino(message: _100.MsgChannelCloseConfirm): _100.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _100.MsgChannelCloseConfirmAminoMsg): _100.MsgChannelCloseConfirm;
                    toAminoMsg(message: _100.MsgChannelCloseConfirm): _100.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _100.MsgChannelCloseConfirmProtoMsg): _100.MsgChannelCloseConfirm;
                    toProto(message: _100.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _100.MsgChannelCloseConfirm): _100.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgChannelCloseConfirmResponse;
                    isSDK(o: any): o is _100.MsgChannelCloseConfirmResponseSDKType;
                    isAmino(o: any): o is _100.MsgChannelCloseConfirmResponseAmino;
                    encode(_: _100.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_100.MsgChannelCloseConfirmResponse>): _100.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _100.MsgChannelCloseConfirmResponseAmino): _100.MsgChannelCloseConfirmResponse;
                    toAmino(_: _100.MsgChannelCloseConfirmResponse): _100.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _100.MsgChannelCloseConfirmResponseAminoMsg): _100.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _100.MsgChannelCloseConfirmResponse): _100.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _100.MsgChannelCloseConfirmResponseProtoMsg): _100.MsgChannelCloseConfirmResponse;
                    toProto(message: _100.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _100.MsgChannelCloseConfirmResponse): _100.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgRecvPacket;
                    isSDK(o: any): o is _100.MsgRecvPacketSDKType;
                    isAmino(o: any): o is _100.MsgRecvPacketAmino;
                    encode(message: _100.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgRecvPacket;
                    fromPartial(object: Partial<_100.MsgRecvPacket>): _100.MsgRecvPacket;
                    fromAmino(object: _100.MsgRecvPacketAmino): _100.MsgRecvPacket;
                    toAmino(message: _100.MsgRecvPacket): _100.MsgRecvPacketAmino;
                    fromAminoMsg(object: _100.MsgRecvPacketAminoMsg): _100.MsgRecvPacket;
                    toAminoMsg(message: _100.MsgRecvPacket): _100.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _100.MsgRecvPacketProtoMsg): _100.MsgRecvPacket;
                    toProto(message: _100.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _100.MsgRecvPacket): _100.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgRecvPacketResponse;
                    isSDK(o: any): o is _100.MsgRecvPacketResponseSDKType;
                    isAmino(o: any): o is _100.MsgRecvPacketResponseAmino;
                    encode(_: _100.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgRecvPacketResponse;
                    fromPartial(_: Partial<_100.MsgRecvPacketResponse>): _100.MsgRecvPacketResponse;
                    fromAmino(_: _100.MsgRecvPacketResponseAmino): _100.MsgRecvPacketResponse;
                    toAmino(_: _100.MsgRecvPacketResponse): _100.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _100.MsgRecvPacketResponseAminoMsg): _100.MsgRecvPacketResponse;
                    toAminoMsg(message: _100.MsgRecvPacketResponse): _100.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _100.MsgRecvPacketResponseProtoMsg): _100.MsgRecvPacketResponse;
                    toProto(message: _100.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _100.MsgRecvPacketResponse): _100.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgTimeout;
                    isSDK(o: any): o is _100.MsgTimeoutSDKType;
                    isAmino(o: any): o is _100.MsgTimeoutAmino;
                    encode(message: _100.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgTimeout;
                    fromPartial(object: Partial<_100.MsgTimeout>): _100.MsgTimeout;
                    fromAmino(object: _100.MsgTimeoutAmino): _100.MsgTimeout;
                    toAmino(message: _100.MsgTimeout): _100.MsgTimeoutAmino;
                    fromAminoMsg(object: _100.MsgTimeoutAminoMsg): _100.MsgTimeout;
                    toAminoMsg(message: _100.MsgTimeout): _100.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _100.MsgTimeoutProtoMsg): _100.MsgTimeout;
                    toProto(message: _100.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _100.MsgTimeout): _100.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgTimeoutResponse;
                    isSDK(o: any): o is _100.MsgTimeoutResponseSDKType;
                    isAmino(o: any): o is _100.MsgTimeoutResponseAmino;
                    encode(_: _100.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgTimeoutResponse;
                    fromPartial(_: Partial<_100.MsgTimeoutResponse>): _100.MsgTimeoutResponse;
                    fromAmino(_: _100.MsgTimeoutResponseAmino): _100.MsgTimeoutResponse;
                    toAmino(_: _100.MsgTimeoutResponse): _100.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _100.MsgTimeoutResponseAminoMsg): _100.MsgTimeoutResponse;
                    toAminoMsg(message: _100.MsgTimeoutResponse): _100.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _100.MsgTimeoutResponseProtoMsg): _100.MsgTimeoutResponse;
                    toProto(message: _100.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _100.MsgTimeoutResponse): _100.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgTimeoutOnClose;
                    isSDK(o: any): o is _100.MsgTimeoutOnCloseSDKType;
                    isAmino(o: any): o is _100.MsgTimeoutOnCloseAmino;
                    encode(message: _100.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_100.MsgTimeoutOnClose>): _100.MsgTimeoutOnClose;
                    fromAmino(object: _100.MsgTimeoutOnCloseAmino): _100.MsgTimeoutOnClose;
                    toAmino(message: _100.MsgTimeoutOnClose): _100.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _100.MsgTimeoutOnCloseAminoMsg): _100.MsgTimeoutOnClose;
                    toAminoMsg(message: _100.MsgTimeoutOnClose): _100.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _100.MsgTimeoutOnCloseProtoMsg): _100.MsgTimeoutOnClose;
                    toProto(message: _100.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _100.MsgTimeoutOnClose): _100.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgTimeoutOnCloseResponse;
                    isSDK(o: any): o is _100.MsgTimeoutOnCloseResponseSDKType;
                    isAmino(o: any): o is _100.MsgTimeoutOnCloseResponseAmino;
                    encode(_: _100.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgTimeoutOnCloseResponse;
                    fromPartial(_: Partial<_100.MsgTimeoutOnCloseResponse>): _100.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _100.MsgTimeoutOnCloseResponseAmino): _100.MsgTimeoutOnCloseResponse;
                    toAmino(_: _100.MsgTimeoutOnCloseResponse): _100.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _100.MsgTimeoutOnCloseResponseAminoMsg): _100.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _100.MsgTimeoutOnCloseResponse): _100.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _100.MsgTimeoutOnCloseResponseProtoMsg): _100.MsgTimeoutOnCloseResponse;
                    toProto(message: _100.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _100.MsgTimeoutOnCloseResponse): _100.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgAcknowledgement;
                    isSDK(o: any): o is _100.MsgAcknowledgementSDKType;
                    isAmino(o: any): o is _100.MsgAcknowledgementAmino;
                    encode(message: _100.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgAcknowledgement;
                    fromPartial(object: Partial<_100.MsgAcknowledgement>): _100.MsgAcknowledgement;
                    fromAmino(object: _100.MsgAcknowledgementAmino): _100.MsgAcknowledgement;
                    toAmino(message: _100.MsgAcknowledgement): _100.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _100.MsgAcknowledgementAminoMsg): _100.MsgAcknowledgement;
                    toAminoMsg(message: _100.MsgAcknowledgement): _100.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _100.MsgAcknowledgementProtoMsg): _100.MsgAcknowledgement;
                    toProto(message: _100.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _100.MsgAcknowledgement): _100.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _100.MsgAcknowledgementResponse;
                    isSDK(o: any): o is _100.MsgAcknowledgementResponseSDKType;
                    isAmino(o: any): o is _100.MsgAcknowledgementResponseAmino;
                    encode(_: _100.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgAcknowledgementResponse;
                    fromPartial(_: Partial<_100.MsgAcknowledgementResponse>): _100.MsgAcknowledgementResponse;
                    fromAmino(_: _100.MsgAcknowledgementResponseAmino): _100.MsgAcknowledgementResponse;
                    toAmino(_: _100.MsgAcknowledgementResponse): _100.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _100.MsgAcknowledgementResponseAminoMsg): _100.MsgAcknowledgementResponse;
                    toAminoMsg(message: _100.MsgAcknowledgementResponse): _100.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _100.MsgAcknowledgementResponseProtoMsg): _100.MsgAcknowledgementResponse;
                    toProto(message: _100.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _100.MsgAcknowledgementResponse): _100.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryChannelRequest;
                    isSDK(o: any): o is _99.QueryChannelRequestSDKType;
                    isAmino(o: any): o is _99.QueryChannelRequestAmino;
                    encode(message: _99.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryChannelRequest;
                    fromPartial(object: Partial<_99.QueryChannelRequest>): _99.QueryChannelRequest;
                    fromAmino(object: _99.QueryChannelRequestAmino): _99.QueryChannelRequest;
                    toAmino(message: _99.QueryChannelRequest): _99.QueryChannelRequestAmino;
                    fromAminoMsg(object: _99.QueryChannelRequestAminoMsg): _99.QueryChannelRequest;
                    toAminoMsg(message: _99.QueryChannelRequest): _99.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _99.QueryChannelRequestProtoMsg): _99.QueryChannelRequest;
                    toProto(message: _99.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _99.QueryChannelRequest): _99.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryChannelResponse;
                    isSDK(o: any): o is _99.QueryChannelResponseSDKType;
                    isAmino(o: any): o is _99.QueryChannelResponseAmino;
                    encode(message: _99.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryChannelResponse;
                    fromPartial(object: Partial<_99.QueryChannelResponse>): _99.QueryChannelResponse;
                    fromAmino(object: _99.QueryChannelResponseAmino): _99.QueryChannelResponse;
                    toAmino(message: _99.QueryChannelResponse): _99.QueryChannelResponseAmino;
                    fromAminoMsg(object: _99.QueryChannelResponseAminoMsg): _99.QueryChannelResponse;
                    toAminoMsg(message: _99.QueryChannelResponse): _99.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _99.QueryChannelResponseProtoMsg): _99.QueryChannelResponse;
                    toProto(message: _99.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _99.QueryChannelResponse): _99.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryChannelsRequest;
                    isSDK(o: any): o is _99.QueryChannelsRequestSDKType;
                    isAmino(o: any): o is _99.QueryChannelsRequestAmino;
                    encode(message: _99.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryChannelsRequest;
                    fromPartial(object: Partial<_99.QueryChannelsRequest>): _99.QueryChannelsRequest;
                    fromAmino(object: _99.QueryChannelsRequestAmino): _99.QueryChannelsRequest;
                    toAmino(message: _99.QueryChannelsRequest): _99.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _99.QueryChannelsRequestAminoMsg): _99.QueryChannelsRequest;
                    toAminoMsg(message: _99.QueryChannelsRequest): _99.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _99.QueryChannelsRequestProtoMsg): _99.QueryChannelsRequest;
                    toProto(message: _99.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _99.QueryChannelsRequest): _99.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryChannelsResponse;
                    isSDK(o: any): o is _99.QueryChannelsResponseSDKType;
                    isAmino(o: any): o is _99.QueryChannelsResponseAmino;
                    encode(message: _99.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryChannelsResponse;
                    fromPartial(object: Partial<_99.QueryChannelsResponse>): _99.QueryChannelsResponse;
                    fromAmino(object: _99.QueryChannelsResponseAmino): _99.QueryChannelsResponse;
                    toAmino(message: _99.QueryChannelsResponse): _99.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _99.QueryChannelsResponseAminoMsg): _99.QueryChannelsResponse;
                    toAminoMsg(message: _99.QueryChannelsResponse): _99.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _99.QueryChannelsResponseProtoMsg): _99.QueryChannelsResponse;
                    toProto(message: _99.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _99.QueryChannelsResponse): _99.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryConnectionChannelsRequest;
                    isSDK(o: any): o is _99.QueryConnectionChannelsRequestSDKType;
                    isAmino(o: any): o is _99.QueryConnectionChannelsRequestAmino;
                    encode(message: _99.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_99.QueryConnectionChannelsRequest>): _99.QueryConnectionChannelsRequest;
                    fromAmino(object: _99.QueryConnectionChannelsRequestAmino): _99.QueryConnectionChannelsRequest;
                    toAmino(message: _99.QueryConnectionChannelsRequest): _99.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _99.QueryConnectionChannelsRequestAminoMsg): _99.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _99.QueryConnectionChannelsRequest): _99.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _99.QueryConnectionChannelsRequestProtoMsg): _99.QueryConnectionChannelsRequest;
                    toProto(message: _99.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _99.QueryConnectionChannelsRequest): _99.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryConnectionChannelsResponse;
                    isSDK(o: any): o is _99.QueryConnectionChannelsResponseSDKType;
                    isAmino(o: any): o is _99.QueryConnectionChannelsResponseAmino;
                    encode(message: _99.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_99.QueryConnectionChannelsResponse>): _99.QueryConnectionChannelsResponse;
                    fromAmino(object: _99.QueryConnectionChannelsResponseAmino): _99.QueryConnectionChannelsResponse;
                    toAmino(message: _99.QueryConnectionChannelsResponse): _99.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _99.QueryConnectionChannelsResponseAminoMsg): _99.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _99.QueryConnectionChannelsResponse): _99.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _99.QueryConnectionChannelsResponseProtoMsg): _99.QueryConnectionChannelsResponse;
                    toProto(message: _99.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _99.QueryConnectionChannelsResponse): _99.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryChannelClientStateRequest;
                    isSDK(o: any): o is _99.QueryChannelClientStateRequestSDKType;
                    isAmino(o: any): o is _99.QueryChannelClientStateRequestAmino;
                    encode(message: _99.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_99.QueryChannelClientStateRequest>): _99.QueryChannelClientStateRequest;
                    fromAmino(object: _99.QueryChannelClientStateRequestAmino): _99.QueryChannelClientStateRequest;
                    toAmino(message: _99.QueryChannelClientStateRequest): _99.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _99.QueryChannelClientStateRequestAminoMsg): _99.QueryChannelClientStateRequest;
                    toAminoMsg(message: _99.QueryChannelClientStateRequest): _99.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _99.QueryChannelClientStateRequestProtoMsg): _99.QueryChannelClientStateRequest;
                    toProto(message: _99.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _99.QueryChannelClientStateRequest): _99.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryChannelClientStateResponse;
                    isSDK(o: any): o is _99.QueryChannelClientStateResponseSDKType;
                    isAmino(o: any): o is _99.QueryChannelClientStateResponseAmino;
                    encode(message: _99.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_99.QueryChannelClientStateResponse>): _99.QueryChannelClientStateResponse;
                    fromAmino(object: _99.QueryChannelClientStateResponseAmino): _99.QueryChannelClientStateResponse;
                    toAmino(message: _99.QueryChannelClientStateResponse): _99.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _99.QueryChannelClientStateResponseAminoMsg): _99.QueryChannelClientStateResponse;
                    toAminoMsg(message: _99.QueryChannelClientStateResponse): _99.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _99.QueryChannelClientStateResponseProtoMsg): _99.QueryChannelClientStateResponse;
                    toProto(message: _99.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _99.QueryChannelClientStateResponse): _99.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryChannelConsensusStateRequest;
                    isSDK(o: any): o is _99.QueryChannelConsensusStateRequestSDKType;
                    isAmino(o: any): o is _99.QueryChannelConsensusStateRequestAmino;
                    encode(message: _99.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_99.QueryChannelConsensusStateRequest>): _99.QueryChannelConsensusStateRequest;
                    fromAmino(object: _99.QueryChannelConsensusStateRequestAmino): _99.QueryChannelConsensusStateRequest;
                    toAmino(message: _99.QueryChannelConsensusStateRequest): _99.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _99.QueryChannelConsensusStateRequestAminoMsg): _99.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _99.QueryChannelConsensusStateRequest): _99.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _99.QueryChannelConsensusStateRequestProtoMsg): _99.QueryChannelConsensusStateRequest;
                    toProto(message: _99.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _99.QueryChannelConsensusStateRequest): _99.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryChannelConsensusStateResponse;
                    isSDK(o: any): o is _99.QueryChannelConsensusStateResponseSDKType;
                    isAmino(o: any): o is _99.QueryChannelConsensusStateResponseAmino;
                    encode(message: _99.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_99.QueryChannelConsensusStateResponse>): _99.QueryChannelConsensusStateResponse;
                    fromAmino(object: _99.QueryChannelConsensusStateResponseAmino): _99.QueryChannelConsensusStateResponse;
                    toAmino(message: _99.QueryChannelConsensusStateResponse): _99.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _99.QueryChannelConsensusStateResponseAminoMsg): _99.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _99.QueryChannelConsensusStateResponse): _99.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _99.QueryChannelConsensusStateResponseProtoMsg): _99.QueryChannelConsensusStateResponse;
                    toProto(message: _99.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _99.QueryChannelConsensusStateResponse): _99.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryPacketCommitmentRequest;
                    isSDK(o: any): o is _99.QueryPacketCommitmentRequestSDKType;
                    isAmino(o: any): o is _99.QueryPacketCommitmentRequestAmino;
                    encode(message: _99.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_99.QueryPacketCommitmentRequest>): _99.QueryPacketCommitmentRequest;
                    fromAmino(object: _99.QueryPacketCommitmentRequestAmino): _99.QueryPacketCommitmentRequest;
                    toAmino(message: _99.QueryPacketCommitmentRequest): _99.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _99.QueryPacketCommitmentRequestAminoMsg): _99.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _99.QueryPacketCommitmentRequest): _99.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _99.QueryPacketCommitmentRequestProtoMsg): _99.QueryPacketCommitmentRequest;
                    toProto(message: _99.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _99.QueryPacketCommitmentRequest): _99.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryPacketCommitmentResponse;
                    isSDK(o: any): o is _99.QueryPacketCommitmentResponseSDKType;
                    isAmino(o: any): o is _99.QueryPacketCommitmentResponseAmino;
                    encode(message: _99.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_99.QueryPacketCommitmentResponse>): _99.QueryPacketCommitmentResponse;
                    fromAmino(object: _99.QueryPacketCommitmentResponseAmino): _99.QueryPacketCommitmentResponse;
                    toAmino(message: _99.QueryPacketCommitmentResponse): _99.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _99.QueryPacketCommitmentResponseAminoMsg): _99.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _99.QueryPacketCommitmentResponse): _99.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _99.QueryPacketCommitmentResponseProtoMsg): _99.QueryPacketCommitmentResponse;
                    toProto(message: _99.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _99.QueryPacketCommitmentResponse): _99.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryPacketCommitmentsRequest;
                    isSDK(o: any): o is _99.QueryPacketCommitmentsRequestSDKType;
                    isAmino(o: any): o is _99.QueryPacketCommitmentsRequestAmino;
                    encode(message: _99.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_99.QueryPacketCommitmentsRequest>): _99.QueryPacketCommitmentsRequest;
                    fromAmino(object: _99.QueryPacketCommitmentsRequestAmino): _99.QueryPacketCommitmentsRequest;
                    toAmino(message: _99.QueryPacketCommitmentsRequest): _99.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _99.QueryPacketCommitmentsRequestAminoMsg): _99.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _99.QueryPacketCommitmentsRequest): _99.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _99.QueryPacketCommitmentsRequestProtoMsg): _99.QueryPacketCommitmentsRequest;
                    toProto(message: _99.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _99.QueryPacketCommitmentsRequest): _99.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryPacketCommitmentsResponse;
                    isSDK(o: any): o is _99.QueryPacketCommitmentsResponseSDKType;
                    isAmino(o: any): o is _99.QueryPacketCommitmentsResponseAmino;
                    encode(message: _99.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_99.QueryPacketCommitmentsResponse>): _99.QueryPacketCommitmentsResponse;
                    fromAmino(object: _99.QueryPacketCommitmentsResponseAmino): _99.QueryPacketCommitmentsResponse;
                    toAmino(message: _99.QueryPacketCommitmentsResponse): _99.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _99.QueryPacketCommitmentsResponseAminoMsg): _99.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _99.QueryPacketCommitmentsResponse): _99.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _99.QueryPacketCommitmentsResponseProtoMsg): _99.QueryPacketCommitmentsResponse;
                    toProto(message: _99.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _99.QueryPacketCommitmentsResponse): _99.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryPacketReceiptRequest;
                    isSDK(o: any): o is _99.QueryPacketReceiptRequestSDKType;
                    isAmino(o: any): o is _99.QueryPacketReceiptRequestAmino;
                    encode(message: _99.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_99.QueryPacketReceiptRequest>): _99.QueryPacketReceiptRequest;
                    fromAmino(object: _99.QueryPacketReceiptRequestAmino): _99.QueryPacketReceiptRequest;
                    toAmino(message: _99.QueryPacketReceiptRequest): _99.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _99.QueryPacketReceiptRequestAminoMsg): _99.QueryPacketReceiptRequest;
                    toAminoMsg(message: _99.QueryPacketReceiptRequest): _99.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _99.QueryPacketReceiptRequestProtoMsg): _99.QueryPacketReceiptRequest;
                    toProto(message: _99.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _99.QueryPacketReceiptRequest): _99.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryPacketReceiptResponse;
                    isSDK(o: any): o is _99.QueryPacketReceiptResponseSDKType;
                    isAmino(o: any): o is _99.QueryPacketReceiptResponseAmino;
                    encode(message: _99.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_99.QueryPacketReceiptResponse>): _99.QueryPacketReceiptResponse;
                    fromAmino(object: _99.QueryPacketReceiptResponseAmino): _99.QueryPacketReceiptResponse;
                    toAmino(message: _99.QueryPacketReceiptResponse): _99.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _99.QueryPacketReceiptResponseAminoMsg): _99.QueryPacketReceiptResponse;
                    toAminoMsg(message: _99.QueryPacketReceiptResponse): _99.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _99.QueryPacketReceiptResponseProtoMsg): _99.QueryPacketReceiptResponse;
                    toProto(message: _99.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _99.QueryPacketReceiptResponse): _99.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryPacketAcknowledgementRequest;
                    isSDK(o: any): o is _99.QueryPacketAcknowledgementRequestSDKType;
                    isAmino(o: any): o is _99.QueryPacketAcknowledgementRequestAmino;
                    encode(message: _99.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_99.QueryPacketAcknowledgementRequest>): _99.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _99.QueryPacketAcknowledgementRequestAmino): _99.QueryPacketAcknowledgementRequest;
                    toAmino(message: _99.QueryPacketAcknowledgementRequest): _99.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _99.QueryPacketAcknowledgementRequestAminoMsg): _99.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _99.QueryPacketAcknowledgementRequest): _99.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _99.QueryPacketAcknowledgementRequestProtoMsg): _99.QueryPacketAcknowledgementRequest;
                    toProto(message: _99.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _99.QueryPacketAcknowledgementRequest): _99.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryPacketAcknowledgementResponse;
                    isSDK(o: any): o is _99.QueryPacketAcknowledgementResponseSDKType;
                    isAmino(o: any): o is _99.QueryPacketAcknowledgementResponseAmino;
                    encode(message: _99.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_99.QueryPacketAcknowledgementResponse>): _99.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _99.QueryPacketAcknowledgementResponseAmino): _99.QueryPacketAcknowledgementResponse;
                    toAmino(message: _99.QueryPacketAcknowledgementResponse): _99.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _99.QueryPacketAcknowledgementResponseAminoMsg): _99.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _99.QueryPacketAcknowledgementResponse): _99.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _99.QueryPacketAcknowledgementResponseProtoMsg): _99.QueryPacketAcknowledgementResponse;
                    toProto(message: _99.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _99.QueryPacketAcknowledgementResponse): _99.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryPacketAcknowledgementsRequest;
                    isSDK(o: any): o is _99.QueryPacketAcknowledgementsRequestSDKType;
                    isAmino(o: any): o is _99.QueryPacketAcknowledgementsRequestAmino;
                    encode(message: _99.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_99.QueryPacketAcknowledgementsRequest>): _99.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _99.QueryPacketAcknowledgementsRequestAmino): _99.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _99.QueryPacketAcknowledgementsRequest): _99.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _99.QueryPacketAcknowledgementsRequestAminoMsg): _99.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _99.QueryPacketAcknowledgementsRequest): _99.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _99.QueryPacketAcknowledgementsRequestProtoMsg): _99.QueryPacketAcknowledgementsRequest;
                    toProto(message: _99.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _99.QueryPacketAcknowledgementsRequest): _99.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryPacketAcknowledgementsResponse;
                    isSDK(o: any): o is _99.QueryPacketAcknowledgementsResponseSDKType;
                    isAmino(o: any): o is _99.QueryPacketAcknowledgementsResponseAmino;
                    encode(message: _99.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_99.QueryPacketAcknowledgementsResponse>): _99.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _99.QueryPacketAcknowledgementsResponseAmino): _99.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _99.QueryPacketAcknowledgementsResponse): _99.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _99.QueryPacketAcknowledgementsResponseAminoMsg): _99.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _99.QueryPacketAcknowledgementsResponse): _99.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _99.QueryPacketAcknowledgementsResponseProtoMsg): _99.QueryPacketAcknowledgementsResponse;
                    toProto(message: _99.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _99.QueryPacketAcknowledgementsResponse): _99.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryUnreceivedPacketsRequest;
                    isSDK(o: any): o is _99.QueryUnreceivedPacketsRequestSDKType;
                    isAmino(o: any): o is _99.QueryUnreceivedPacketsRequestAmino;
                    encode(message: _99.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_99.QueryUnreceivedPacketsRequest>): _99.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _99.QueryUnreceivedPacketsRequestAmino): _99.QueryUnreceivedPacketsRequest;
                    toAmino(message: _99.QueryUnreceivedPacketsRequest): _99.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _99.QueryUnreceivedPacketsRequestAminoMsg): _99.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _99.QueryUnreceivedPacketsRequest): _99.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _99.QueryUnreceivedPacketsRequestProtoMsg): _99.QueryUnreceivedPacketsRequest;
                    toProto(message: _99.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _99.QueryUnreceivedPacketsRequest): _99.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryUnreceivedPacketsResponse;
                    isSDK(o: any): o is _99.QueryUnreceivedPacketsResponseSDKType;
                    isAmino(o: any): o is _99.QueryUnreceivedPacketsResponseAmino;
                    encode(message: _99.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_99.QueryUnreceivedPacketsResponse>): _99.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _99.QueryUnreceivedPacketsResponseAmino): _99.QueryUnreceivedPacketsResponse;
                    toAmino(message: _99.QueryUnreceivedPacketsResponse): _99.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _99.QueryUnreceivedPacketsResponseAminoMsg): _99.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _99.QueryUnreceivedPacketsResponse): _99.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _99.QueryUnreceivedPacketsResponseProtoMsg): _99.QueryUnreceivedPacketsResponse;
                    toProto(message: _99.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _99.QueryUnreceivedPacketsResponse): _99.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryUnreceivedAcksRequest;
                    isSDK(o: any): o is _99.QueryUnreceivedAcksRequestSDKType;
                    isAmino(o: any): o is _99.QueryUnreceivedAcksRequestAmino;
                    encode(message: _99.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_99.QueryUnreceivedAcksRequest>): _99.QueryUnreceivedAcksRequest;
                    fromAmino(object: _99.QueryUnreceivedAcksRequestAmino): _99.QueryUnreceivedAcksRequest;
                    toAmino(message: _99.QueryUnreceivedAcksRequest): _99.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _99.QueryUnreceivedAcksRequestAminoMsg): _99.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _99.QueryUnreceivedAcksRequest): _99.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _99.QueryUnreceivedAcksRequestProtoMsg): _99.QueryUnreceivedAcksRequest;
                    toProto(message: _99.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _99.QueryUnreceivedAcksRequest): _99.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryUnreceivedAcksResponse;
                    isSDK(o: any): o is _99.QueryUnreceivedAcksResponseSDKType;
                    isAmino(o: any): o is _99.QueryUnreceivedAcksResponseAmino;
                    encode(message: _99.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_99.QueryUnreceivedAcksResponse>): _99.QueryUnreceivedAcksResponse;
                    fromAmino(object: _99.QueryUnreceivedAcksResponseAmino): _99.QueryUnreceivedAcksResponse;
                    toAmino(message: _99.QueryUnreceivedAcksResponse): _99.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _99.QueryUnreceivedAcksResponseAminoMsg): _99.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _99.QueryUnreceivedAcksResponse): _99.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _99.QueryUnreceivedAcksResponseProtoMsg): _99.QueryUnreceivedAcksResponse;
                    toProto(message: _99.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _99.QueryUnreceivedAcksResponse): _99.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryNextSequenceReceiveRequest;
                    isSDK(o: any): o is _99.QueryNextSequenceReceiveRequestSDKType;
                    isAmino(o: any): o is _99.QueryNextSequenceReceiveRequestAmino;
                    encode(message: _99.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_99.QueryNextSequenceReceiveRequest>): _99.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _99.QueryNextSequenceReceiveRequestAmino): _99.QueryNextSequenceReceiveRequest;
                    toAmino(message: _99.QueryNextSequenceReceiveRequest): _99.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _99.QueryNextSequenceReceiveRequestAminoMsg): _99.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _99.QueryNextSequenceReceiveRequest): _99.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _99.QueryNextSequenceReceiveRequestProtoMsg): _99.QueryNextSequenceReceiveRequest;
                    toProto(message: _99.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _99.QueryNextSequenceReceiveRequest): _99.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _99.QueryNextSequenceReceiveResponse;
                    isSDK(o: any): o is _99.QueryNextSequenceReceiveResponseSDKType;
                    isAmino(o: any): o is _99.QueryNextSequenceReceiveResponseAmino;
                    encode(message: _99.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_99.QueryNextSequenceReceiveResponse>): _99.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _99.QueryNextSequenceReceiveResponseAmino): _99.QueryNextSequenceReceiveResponse;
                    toAmino(message: _99.QueryNextSequenceReceiveResponse): _99.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _99.QueryNextSequenceReceiveResponseAminoMsg): _99.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _99.QueryNextSequenceReceiveResponse): _99.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _99.QueryNextSequenceReceiveResponseProtoMsg): _99.QueryNextSequenceReceiveResponse;
                    toProto(message: _99.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _99.QueryNextSequenceReceiveResponse): _99.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _98.GenesisState;
                    isSDK(o: any): o is _98.GenesisStateSDKType;
                    isAmino(o: any): o is _98.GenesisStateAmino;
                    encode(message: _98.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _98.GenesisState;
                    fromPartial(object: Partial<_98.GenesisState>): _98.GenesisState;
                    fromAmino(object: _98.GenesisStateAmino): _98.GenesisState;
                    toAmino(message: _98.GenesisState): _98.GenesisStateAmino;
                    fromAminoMsg(object: _98.GenesisStateAminoMsg): _98.GenesisState;
                    toAminoMsg(message: _98.GenesisState): _98.GenesisStateAminoMsg;
                    fromProtoMsg(message: _98.GenesisStateProtoMsg): _98.GenesisState;
                    toProto(message: _98.GenesisState): Uint8Array;
                    toProtoMsg(message: _98.GenesisState): _98.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _98.PacketSequence;
                    isSDK(o: any): o is _98.PacketSequenceSDKType;
                    isAmino(o: any): o is _98.PacketSequenceAmino;
                    encode(message: _98.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _98.PacketSequence;
                    fromPartial(object: Partial<_98.PacketSequence>): _98.PacketSequence;
                    fromAmino(object: _98.PacketSequenceAmino): _98.PacketSequence;
                    toAmino(message: _98.PacketSequence): _98.PacketSequenceAmino;
                    fromAminoMsg(object: _98.PacketSequenceAminoMsg): _98.PacketSequence;
                    toAminoMsg(message: _98.PacketSequence): _98.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _98.PacketSequenceProtoMsg): _98.PacketSequence;
                    toProto(message: _98.PacketSequence): Uint8Array;
                    toProtoMsg(message: _98.PacketSequence): _98.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _97.State;
                stateToJSON(object: _97.State): string;
                orderFromJSON(object: any): _97.Order;
                orderToJSON(object: _97.Order): string;
                State: typeof _97.State;
                StateSDKType: typeof _97.State;
                StateAmino: typeof _97.State;
                Order: typeof _97.Order;
                OrderSDKType: typeof _97.Order;
                OrderAmino: typeof _97.Order;
                Channel: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _97.Channel;
                    isSDK(o: any): o is _97.ChannelSDKType;
                    isAmino(o: any): o is _97.ChannelAmino;
                    encode(message: _97.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.Channel;
                    fromPartial(object: Partial<_97.Channel>): _97.Channel;
                    fromAmino(object: _97.ChannelAmino): _97.Channel;
                    toAmino(message: _97.Channel): _97.ChannelAmino;
                    fromAminoMsg(object: _97.ChannelAminoMsg): _97.Channel;
                    toAminoMsg(message: _97.Channel): _97.ChannelAminoMsg;
                    fromProtoMsg(message: _97.ChannelProtoMsg): _97.Channel;
                    toProto(message: _97.Channel): Uint8Array;
                    toProtoMsg(message: _97.Channel): _97.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _97.IdentifiedChannel;
                    isSDK(o: any): o is _97.IdentifiedChannelSDKType;
                    isAmino(o: any): o is _97.IdentifiedChannelAmino;
                    encode(message: _97.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.IdentifiedChannel;
                    fromPartial(object: Partial<_97.IdentifiedChannel>): _97.IdentifiedChannel;
                    fromAmino(object: _97.IdentifiedChannelAmino): _97.IdentifiedChannel;
                    toAmino(message: _97.IdentifiedChannel): _97.IdentifiedChannelAmino;
                    fromAminoMsg(object: _97.IdentifiedChannelAminoMsg): _97.IdentifiedChannel;
                    toAminoMsg(message: _97.IdentifiedChannel): _97.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _97.IdentifiedChannelProtoMsg): _97.IdentifiedChannel;
                    toProto(message: _97.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _97.IdentifiedChannel): _97.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _97.Counterparty;
                    isSDK(o: any): o is _97.CounterpartySDKType;
                    isAmino(o: any): o is _97.CounterpartyAmino;
                    encode(message: _97.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.Counterparty;
                    fromPartial(object: Partial<_97.Counterparty>): _97.Counterparty;
                    fromAmino(object: _97.CounterpartyAmino): _97.Counterparty;
                    toAmino(message: _97.Counterparty): _97.CounterpartyAmino;
                    fromAminoMsg(object: _97.CounterpartyAminoMsg): _97.Counterparty;
                    toAminoMsg(message: _97.Counterparty): _97.CounterpartyAminoMsg;
                    fromProtoMsg(message: _97.CounterpartyProtoMsg): _97.Counterparty;
                    toProto(message: _97.Counterparty): Uint8Array;
                    toProtoMsg(message: _97.Counterparty): _97.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _97.Packet;
                    isSDK(o: any): o is _97.PacketSDKType;
                    isAmino(o: any): o is _97.PacketAmino;
                    encode(message: _97.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.Packet;
                    fromPartial(object: Partial<_97.Packet>): _97.Packet;
                    fromAmino(object: _97.PacketAmino): _97.Packet;
                    toAmino(message: _97.Packet): _97.PacketAmino;
                    fromAminoMsg(object: _97.PacketAminoMsg): _97.Packet;
                    toAminoMsg(message: _97.Packet): _97.PacketAminoMsg;
                    fromProtoMsg(message: _97.PacketProtoMsg): _97.Packet;
                    toProto(message: _97.Packet): Uint8Array;
                    toProtoMsg(message: _97.Packet): _97.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _97.PacketState;
                    isSDK(o: any): o is _97.PacketStateSDKType;
                    isAmino(o: any): o is _97.PacketStateAmino;
                    encode(message: _97.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.PacketState;
                    fromPartial(object: Partial<_97.PacketState>): _97.PacketState;
                    fromAmino(object: _97.PacketStateAmino): _97.PacketState;
                    toAmino(message: _97.PacketState): _97.PacketStateAmino;
                    fromAminoMsg(object: _97.PacketStateAminoMsg): _97.PacketState;
                    toAminoMsg(message: _97.PacketState): _97.PacketStateAminoMsg;
                    fromProtoMsg(message: _97.PacketStateProtoMsg): _97.PacketState;
                    toProto(message: _97.PacketState): Uint8Array;
                    toProtoMsg(message: _97.PacketState): _97.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _97.Acknowledgement;
                    isSDK(o: any): o is _97.AcknowledgementSDKType;
                    isAmino(o: any): o is _97.AcknowledgementAmino;
                    encode(message: _97.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.Acknowledgement;
                    fromPartial(object: Partial<_97.Acknowledgement>): _97.Acknowledgement;
                    fromAmino(object: _97.AcknowledgementAmino): _97.Acknowledgement;
                    toAmino(message: _97.Acknowledgement): _97.AcknowledgementAmino;
                    fromAminoMsg(object: _97.AcknowledgementAminoMsg): _97.Acknowledgement;
                    toAminoMsg(message: _97.Acknowledgement): _97.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _97.AcknowledgementProtoMsg): _97.Acknowledgement;
                    toProto(message: _97.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _97.Acknowledgement): _97.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _227.MsgClientImpl;
                QueryClientImpl: typeof _223.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _103.QueryClientStateRequest): Promise<_103.QueryClientStateResponse>;
                    clientStates(request?: _103.QueryClientStatesRequest): Promise<_103.QueryClientStatesResponse>;
                    consensusState(request: _103.QueryConsensusStateRequest): Promise<_103.QueryConsensusStateResponse>;
                    consensusStates(request: _103.QueryConsensusStatesRequest): Promise<_103.QueryConsensusStatesResponse>;
                    clientStatus(request: _103.QueryClientStatusRequest): Promise<_103.QueryClientStatusResponse>;
                    clientParams(request?: _103.QueryClientParamsRequest): Promise<_103.QueryClientParamsResponse>;
                    upgradedClientState(request?: _103.QueryUpgradedClientStateRequest): Promise<_103.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _103.QueryUpgradedConsensusStateRequest): Promise<_103.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _219.LCDQueryClient;
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _104.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _104.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _104.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _104.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _104.MsgCreateClient): {
                            typeUrl: string;
                            value: _104.MsgCreateClient;
                        };
                        updateClient(value: _104.MsgUpdateClient): {
                            typeUrl: string;
                            value: _104.MsgUpdateClient;
                        };
                        upgradeClient(value: _104.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _104.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _104.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _104.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _104.MsgCreateClient): {
                            typeUrl: string;
                            value: _104.MsgCreateClient;
                        };
                        updateClient(value: _104.MsgUpdateClient): {
                            typeUrl: string;
                            value: _104.MsgUpdateClient;
                        };
                        upgradeClient(value: _104.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _104.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _104.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _104.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _104.MsgCreateClient) => _104.MsgCreateClientAmino;
                        fromAmino: (object: _104.MsgCreateClientAmino) => _104.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _104.MsgUpdateClient) => _104.MsgUpdateClientAmino;
                        fromAmino: (object: _104.MsgUpdateClientAmino) => _104.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _104.MsgUpgradeClient) => _104.MsgUpgradeClientAmino;
                        fromAmino: (object: _104.MsgUpgradeClientAmino) => _104.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _104.MsgSubmitMisbehaviour) => _104.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _104.MsgSubmitMisbehaviourAmino) => _104.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _104.MsgCreateClient;
                    isSDK(o: any): o is _104.MsgCreateClientSDKType;
                    isAmino(o: any): o is _104.MsgCreateClientAmino;
                    encode(message: _104.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgCreateClient;
                    fromPartial(object: Partial<_104.MsgCreateClient>): _104.MsgCreateClient;
                    fromAmino(object: _104.MsgCreateClientAmino): _104.MsgCreateClient;
                    toAmino(message: _104.MsgCreateClient): _104.MsgCreateClientAmino;
                    fromAminoMsg(object: _104.MsgCreateClientAminoMsg): _104.MsgCreateClient;
                    toAminoMsg(message: _104.MsgCreateClient): _104.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _104.MsgCreateClientProtoMsg): _104.MsgCreateClient;
                    toProto(message: _104.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _104.MsgCreateClient): _104.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _104.MsgCreateClientResponse;
                    isSDK(o: any): o is _104.MsgCreateClientResponseSDKType;
                    isAmino(o: any): o is _104.MsgCreateClientResponseAmino;
                    encode(_: _104.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgCreateClientResponse;
                    fromPartial(_: Partial<_104.MsgCreateClientResponse>): _104.MsgCreateClientResponse;
                    fromAmino(_: _104.MsgCreateClientResponseAmino): _104.MsgCreateClientResponse;
                    toAmino(_: _104.MsgCreateClientResponse): _104.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _104.MsgCreateClientResponseAminoMsg): _104.MsgCreateClientResponse;
                    toAminoMsg(message: _104.MsgCreateClientResponse): _104.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _104.MsgCreateClientResponseProtoMsg): _104.MsgCreateClientResponse;
                    toProto(message: _104.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _104.MsgCreateClientResponse): _104.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _104.MsgUpdateClient;
                    isSDK(o: any): o is _104.MsgUpdateClientSDKType;
                    isAmino(o: any): o is _104.MsgUpdateClientAmino;
                    encode(message: _104.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgUpdateClient;
                    fromPartial(object: Partial<_104.MsgUpdateClient>): _104.MsgUpdateClient;
                    fromAmino(object: _104.MsgUpdateClientAmino): _104.MsgUpdateClient;
                    toAmino(message: _104.MsgUpdateClient): _104.MsgUpdateClientAmino;
                    fromAminoMsg(object: _104.MsgUpdateClientAminoMsg): _104.MsgUpdateClient;
                    toAminoMsg(message: _104.MsgUpdateClient): _104.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _104.MsgUpdateClientProtoMsg): _104.MsgUpdateClient;
                    toProto(message: _104.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _104.MsgUpdateClient): _104.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _104.MsgUpdateClientResponse;
                    isSDK(o: any): o is _104.MsgUpdateClientResponseSDKType;
                    isAmino(o: any): o is _104.MsgUpdateClientResponseAmino;
                    encode(_: _104.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_104.MsgUpdateClientResponse>): _104.MsgUpdateClientResponse;
                    fromAmino(_: _104.MsgUpdateClientResponseAmino): _104.MsgUpdateClientResponse;
                    toAmino(_: _104.MsgUpdateClientResponse): _104.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _104.MsgUpdateClientResponseAminoMsg): _104.MsgUpdateClientResponse;
                    toAminoMsg(message: _104.MsgUpdateClientResponse): _104.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _104.MsgUpdateClientResponseProtoMsg): _104.MsgUpdateClientResponse;
                    toProto(message: _104.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _104.MsgUpdateClientResponse): _104.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _104.MsgUpgradeClient;
                    isSDK(o: any): o is _104.MsgUpgradeClientSDKType;
                    isAmino(o: any): o is _104.MsgUpgradeClientAmino;
                    encode(message: _104.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgUpgradeClient;
                    fromPartial(object: Partial<_104.MsgUpgradeClient>): _104.MsgUpgradeClient;
                    fromAmino(object: _104.MsgUpgradeClientAmino): _104.MsgUpgradeClient;
                    toAmino(message: _104.MsgUpgradeClient): _104.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _104.MsgUpgradeClientAminoMsg): _104.MsgUpgradeClient;
                    toAminoMsg(message: _104.MsgUpgradeClient): _104.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _104.MsgUpgradeClientProtoMsg): _104.MsgUpgradeClient;
                    toProto(message: _104.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _104.MsgUpgradeClient): _104.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _104.MsgUpgradeClientResponse;
                    isSDK(o: any): o is _104.MsgUpgradeClientResponseSDKType;
                    isAmino(o: any): o is _104.MsgUpgradeClientResponseAmino;
                    encode(_: _104.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_104.MsgUpgradeClientResponse>): _104.MsgUpgradeClientResponse;
                    fromAmino(_: _104.MsgUpgradeClientResponseAmino): _104.MsgUpgradeClientResponse;
                    toAmino(_: _104.MsgUpgradeClientResponse): _104.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _104.MsgUpgradeClientResponseAminoMsg): _104.MsgUpgradeClientResponse;
                    toAminoMsg(message: _104.MsgUpgradeClientResponse): _104.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _104.MsgUpgradeClientResponseProtoMsg): _104.MsgUpgradeClientResponse;
                    toProto(message: _104.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _104.MsgUpgradeClientResponse): _104.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _104.MsgSubmitMisbehaviour;
                    isSDK(o: any): o is _104.MsgSubmitMisbehaviourSDKType;
                    isAmino(o: any): o is _104.MsgSubmitMisbehaviourAmino;
                    encode(message: _104.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_104.MsgSubmitMisbehaviour>): _104.MsgSubmitMisbehaviour;
                    fromAmino(object: _104.MsgSubmitMisbehaviourAmino): _104.MsgSubmitMisbehaviour;
                    toAmino(message: _104.MsgSubmitMisbehaviour): _104.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _104.MsgSubmitMisbehaviourAminoMsg): _104.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _104.MsgSubmitMisbehaviour): _104.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _104.MsgSubmitMisbehaviourProtoMsg): _104.MsgSubmitMisbehaviour;
                    toProto(message: _104.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _104.MsgSubmitMisbehaviour): _104.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _104.MsgSubmitMisbehaviourResponse;
                    isSDK(o: any): o is _104.MsgSubmitMisbehaviourResponseSDKType;
                    isAmino(o: any): o is _104.MsgSubmitMisbehaviourResponseAmino;
                    encode(_: _104.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_104.MsgSubmitMisbehaviourResponse>): _104.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _104.MsgSubmitMisbehaviourResponseAmino): _104.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _104.MsgSubmitMisbehaviourResponse): _104.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _104.MsgSubmitMisbehaviourResponseAminoMsg): _104.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _104.MsgSubmitMisbehaviourResponse): _104.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _104.MsgSubmitMisbehaviourResponseProtoMsg): _104.MsgSubmitMisbehaviourResponse;
                    toProto(message: _104.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _104.MsgSubmitMisbehaviourResponse): _104.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _103.QueryClientStateRequest;
                    isSDK(o: any): o is _103.QueryClientStateRequestSDKType;
                    isAmino(o: any): o is _103.QueryClientStateRequestAmino;
                    encode(message: _103.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryClientStateRequest;
                    fromPartial(object: Partial<_103.QueryClientStateRequest>): _103.QueryClientStateRequest;
                    fromAmino(object: _103.QueryClientStateRequestAmino): _103.QueryClientStateRequest;
                    toAmino(message: _103.QueryClientStateRequest): _103.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _103.QueryClientStateRequestAminoMsg): _103.QueryClientStateRequest;
                    toAminoMsg(message: _103.QueryClientStateRequest): _103.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _103.QueryClientStateRequestProtoMsg): _103.QueryClientStateRequest;
                    toProto(message: _103.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _103.QueryClientStateRequest): _103.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _103.QueryClientStateResponse;
                    isSDK(o: any): o is _103.QueryClientStateResponseSDKType;
                    isAmino(o: any): o is _103.QueryClientStateResponseAmino;
                    encode(message: _103.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryClientStateResponse;
                    fromPartial(object: Partial<_103.QueryClientStateResponse>): _103.QueryClientStateResponse;
                    fromAmino(object: _103.QueryClientStateResponseAmino): _103.QueryClientStateResponse;
                    toAmino(message: _103.QueryClientStateResponse): _103.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _103.QueryClientStateResponseAminoMsg): _103.QueryClientStateResponse;
                    toAminoMsg(message: _103.QueryClientStateResponse): _103.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _103.QueryClientStateResponseProtoMsg): _103.QueryClientStateResponse;
                    toProto(message: _103.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _103.QueryClientStateResponse): _103.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _103.QueryClientStatesRequest;
                    isSDK(o: any): o is _103.QueryClientStatesRequestSDKType;
                    isAmino(o: any): o is _103.QueryClientStatesRequestAmino;
                    encode(message: _103.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryClientStatesRequest;
                    fromPartial(object: Partial<_103.QueryClientStatesRequest>): _103.QueryClientStatesRequest;
                    fromAmino(object: _103.QueryClientStatesRequestAmino): _103.QueryClientStatesRequest;
                    toAmino(message: _103.QueryClientStatesRequest): _103.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _103.QueryClientStatesRequestAminoMsg): _103.QueryClientStatesRequest;
                    toAminoMsg(message: _103.QueryClientStatesRequest): _103.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _103.QueryClientStatesRequestProtoMsg): _103.QueryClientStatesRequest;
                    toProto(message: _103.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _103.QueryClientStatesRequest): _103.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _103.QueryClientStatesResponse;
                    isSDK(o: any): o is _103.QueryClientStatesResponseSDKType;
                    isAmino(o: any): o is _103.QueryClientStatesResponseAmino;
                    encode(message: _103.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryClientStatesResponse;
                    fromPartial(object: Partial<_103.QueryClientStatesResponse>): _103.QueryClientStatesResponse;
                    fromAmino(object: _103.QueryClientStatesResponseAmino): _103.QueryClientStatesResponse;
                    toAmino(message: _103.QueryClientStatesResponse): _103.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _103.QueryClientStatesResponseAminoMsg): _103.QueryClientStatesResponse;
                    toAminoMsg(message: _103.QueryClientStatesResponse): _103.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _103.QueryClientStatesResponseProtoMsg): _103.QueryClientStatesResponse;
                    toProto(message: _103.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _103.QueryClientStatesResponse): _103.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _103.QueryConsensusStateRequest;
                    isSDK(o: any): o is _103.QueryConsensusStateRequestSDKType;
                    isAmino(o: any): o is _103.QueryConsensusStateRequestAmino;
                    encode(message: _103.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_103.QueryConsensusStateRequest>): _103.QueryConsensusStateRequest;
                    fromAmino(object: _103.QueryConsensusStateRequestAmino): _103.QueryConsensusStateRequest;
                    toAmino(message: _103.QueryConsensusStateRequest): _103.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _103.QueryConsensusStateRequestAminoMsg): _103.QueryConsensusStateRequest;
                    toAminoMsg(message: _103.QueryConsensusStateRequest): _103.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _103.QueryConsensusStateRequestProtoMsg): _103.QueryConsensusStateRequest;
                    toProto(message: _103.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _103.QueryConsensusStateRequest): _103.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _103.QueryConsensusStateResponse;
                    isSDK(o: any): o is _103.QueryConsensusStateResponseSDKType;
                    isAmino(o: any): o is _103.QueryConsensusStateResponseAmino;
                    encode(message: _103.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_103.QueryConsensusStateResponse>): _103.QueryConsensusStateResponse;
                    fromAmino(object: _103.QueryConsensusStateResponseAmino): _103.QueryConsensusStateResponse;
                    toAmino(message: _103.QueryConsensusStateResponse): _103.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _103.QueryConsensusStateResponseAminoMsg): _103.QueryConsensusStateResponse;
                    toAminoMsg(message: _103.QueryConsensusStateResponse): _103.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _103.QueryConsensusStateResponseProtoMsg): _103.QueryConsensusStateResponse;
                    toProto(message: _103.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _103.QueryConsensusStateResponse): _103.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _103.QueryConsensusStatesRequest;
                    isSDK(o: any): o is _103.QueryConsensusStatesRequestSDKType;
                    isAmino(o: any): o is _103.QueryConsensusStatesRequestAmino;
                    encode(message: _103.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_103.QueryConsensusStatesRequest>): _103.QueryConsensusStatesRequest;
                    fromAmino(object: _103.QueryConsensusStatesRequestAmino): _103.QueryConsensusStatesRequest;
                    toAmino(message: _103.QueryConsensusStatesRequest): _103.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _103.QueryConsensusStatesRequestAminoMsg): _103.QueryConsensusStatesRequest;
                    toAminoMsg(message: _103.QueryConsensusStatesRequest): _103.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _103.QueryConsensusStatesRequestProtoMsg): _103.QueryConsensusStatesRequest;
                    toProto(message: _103.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _103.QueryConsensusStatesRequest): _103.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _103.QueryConsensusStatesResponse;
                    isSDK(o: any): o is _103.QueryConsensusStatesResponseSDKType;
                    isAmino(o: any): o is _103.QueryConsensusStatesResponseAmino;
                    encode(message: _103.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_103.QueryConsensusStatesResponse>): _103.QueryConsensusStatesResponse;
                    fromAmino(object: _103.QueryConsensusStatesResponseAmino): _103.QueryConsensusStatesResponse;
                    toAmino(message: _103.QueryConsensusStatesResponse): _103.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _103.QueryConsensusStatesResponseAminoMsg): _103.QueryConsensusStatesResponse;
                    toAminoMsg(message: _103.QueryConsensusStatesResponse): _103.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _103.QueryConsensusStatesResponseProtoMsg): _103.QueryConsensusStatesResponse;
                    toProto(message: _103.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _103.QueryConsensusStatesResponse): _103.QueryConsensusStatesResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _103.QueryClientStatusRequest;
                    isSDK(o: any): o is _103.QueryClientStatusRequestSDKType;
                    isAmino(o: any): o is _103.QueryClientStatusRequestAmino;
                    encode(message: _103.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryClientStatusRequest;
                    fromPartial(object: Partial<_103.QueryClientStatusRequest>): _103.QueryClientStatusRequest;
                    fromAmino(object: _103.QueryClientStatusRequestAmino): _103.QueryClientStatusRequest;
                    toAmino(message: _103.QueryClientStatusRequest): _103.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _103.QueryClientStatusRequestAminoMsg): _103.QueryClientStatusRequest;
                    toAminoMsg(message: _103.QueryClientStatusRequest): _103.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _103.QueryClientStatusRequestProtoMsg): _103.QueryClientStatusRequest;
                    toProto(message: _103.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _103.QueryClientStatusRequest): _103.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _103.QueryClientStatusResponse;
                    isSDK(o: any): o is _103.QueryClientStatusResponseSDKType;
                    isAmino(o: any): o is _103.QueryClientStatusResponseAmino;
                    encode(message: _103.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryClientStatusResponse;
                    fromPartial(object: Partial<_103.QueryClientStatusResponse>): _103.QueryClientStatusResponse;
                    fromAmino(object: _103.QueryClientStatusResponseAmino): _103.QueryClientStatusResponse;
                    toAmino(message: _103.QueryClientStatusResponse): _103.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _103.QueryClientStatusResponseAminoMsg): _103.QueryClientStatusResponse;
                    toAminoMsg(message: _103.QueryClientStatusResponse): _103.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _103.QueryClientStatusResponseProtoMsg): _103.QueryClientStatusResponse;
                    toProto(message: _103.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _103.QueryClientStatusResponse): _103.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _103.QueryClientParamsRequest;
                    isSDK(o: any): o is _103.QueryClientParamsRequestSDKType;
                    isAmino(o: any): o is _103.QueryClientParamsRequestAmino;
                    encode(_: _103.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryClientParamsRequest;
                    fromPartial(_: Partial<_103.QueryClientParamsRequest>): _103.QueryClientParamsRequest;
                    fromAmino(_: _103.QueryClientParamsRequestAmino): _103.QueryClientParamsRequest;
                    toAmino(_: _103.QueryClientParamsRequest): _103.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _103.QueryClientParamsRequestAminoMsg): _103.QueryClientParamsRequest;
                    toAminoMsg(message: _103.QueryClientParamsRequest): _103.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _103.QueryClientParamsRequestProtoMsg): _103.QueryClientParamsRequest;
                    toProto(message: _103.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _103.QueryClientParamsRequest): _103.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _103.QueryClientParamsResponse;
                    isSDK(o: any): o is _103.QueryClientParamsResponseSDKType;
                    isAmino(o: any): o is _103.QueryClientParamsResponseAmino;
                    encode(message: _103.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryClientParamsResponse;
                    fromPartial(object: Partial<_103.QueryClientParamsResponse>): _103.QueryClientParamsResponse;
                    fromAmino(object: _103.QueryClientParamsResponseAmino): _103.QueryClientParamsResponse;
                    toAmino(message: _103.QueryClientParamsResponse): _103.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _103.QueryClientParamsResponseAminoMsg): _103.QueryClientParamsResponse;
                    toAminoMsg(message: _103.QueryClientParamsResponse): _103.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _103.QueryClientParamsResponseProtoMsg): _103.QueryClientParamsResponse;
                    toProto(message: _103.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _103.QueryClientParamsResponse): _103.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _103.QueryUpgradedClientStateRequest;
                    isSDK(o: any): o is _103.QueryUpgradedClientStateRequestSDKType;
                    isAmino(o: any): o is _103.QueryUpgradedClientStateRequestAmino;
                    encode(_: _103.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_103.QueryUpgradedClientStateRequest>): _103.QueryUpgradedClientStateRequest;
                    fromAmino(_: _103.QueryUpgradedClientStateRequestAmino): _103.QueryUpgradedClientStateRequest;
                    toAmino(_: _103.QueryUpgradedClientStateRequest): _103.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _103.QueryUpgradedClientStateRequestAminoMsg): _103.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _103.QueryUpgradedClientStateRequest): _103.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _103.QueryUpgradedClientStateRequestProtoMsg): _103.QueryUpgradedClientStateRequest;
                    toProto(message: _103.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _103.QueryUpgradedClientStateRequest): _103.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _103.QueryUpgradedClientStateResponse;
                    isSDK(o: any): o is _103.QueryUpgradedClientStateResponseSDKType;
                    isAmino(o: any): o is _103.QueryUpgradedClientStateResponseAmino;
                    encode(message: _103.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_103.QueryUpgradedClientStateResponse>): _103.QueryUpgradedClientStateResponse;
                    fromAmino(object: _103.QueryUpgradedClientStateResponseAmino): _103.QueryUpgradedClientStateResponse;
                    toAmino(message: _103.QueryUpgradedClientStateResponse): _103.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _103.QueryUpgradedClientStateResponseAminoMsg): _103.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _103.QueryUpgradedClientStateResponse): _103.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _103.QueryUpgradedClientStateResponseProtoMsg): _103.QueryUpgradedClientStateResponse;
                    toProto(message: _103.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _103.QueryUpgradedClientStateResponse): _103.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _103.QueryUpgradedConsensusStateRequest;
                    isSDK(o: any): o is _103.QueryUpgradedConsensusStateRequestSDKType;
                    isAmino(o: any): o is _103.QueryUpgradedConsensusStateRequestAmino;
                    encode(_: _103.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_103.QueryUpgradedConsensusStateRequest>): _103.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _103.QueryUpgradedConsensusStateRequestAmino): _103.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _103.QueryUpgradedConsensusStateRequest): _103.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _103.QueryUpgradedConsensusStateRequestAminoMsg): _103.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _103.QueryUpgradedConsensusStateRequest): _103.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _103.QueryUpgradedConsensusStateRequestProtoMsg): _103.QueryUpgradedConsensusStateRequest;
                    toProto(message: _103.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _103.QueryUpgradedConsensusStateRequest): _103.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _103.QueryUpgradedConsensusStateResponse;
                    isSDK(o: any): o is _103.QueryUpgradedConsensusStateResponseSDKType;
                    isAmino(o: any): o is _103.QueryUpgradedConsensusStateResponseAmino;
                    encode(message: _103.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_103.QueryUpgradedConsensusStateResponse>): _103.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _103.QueryUpgradedConsensusStateResponseAmino): _103.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _103.QueryUpgradedConsensusStateResponse): _103.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _103.QueryUpgradedConsensusStateResponseAminoMsg): _103.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _103.QueryUpgradedConsensusStateResponse): _103.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _103.QueryUpgradedConsensusStateResponseProtoMsg): _103.QueryUpgradedConsensusStateResponse;
                    toProto(message: _103.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _103.QueryUpgradedConsensusStateResponse): _103.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _102.GenesisState;
                    isSDK(o: any): o is _102.GenesisStateSDKType;
                    isAmino(o: any): o is _102.GenesisStateAmino;
                    encode(message: _102.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.GenesisState;
                    fromPartial(object: Partial<_102.GenesisState>): _102.GenesisState;
                    fromAmino(object: _102.GenesisStateAmino): _102.GenesisState;
                    toAmino(message: _102.GenesisState): _102.GenesisStateAmino;
                    fromAminoMsg(object: _102.GenesisStateAminoMsg): _102.GenesisState;
                    toAminoMsg(message: _102.GenesisState): _102.GenesisStateAminoMsg;
                    fromProtoMsg(message: _102.GenesisStateProtoMsg): _102.GenesisState;
                    toProto(message: _102.GenesisState): Uint8Array;
                    toProtoMsg(message: _102.GenesisState): _102.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _102.GenesisMetadata;
                    isSDK(o: any): o is _102.GenesisMetadataSDKType;
                    isAmino(o: any): o is _102.GenesisMetadataAmino;
                    encode(message: _102.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.GenesisMetadata;
                    fromPartial(object: Partial<_102.GenesisMetadata>): _102.GenesisMetadata;
                    fromAmino(object: _102.GenesisMetadataAmino): _102.GenesisMetadata;
                    toAmino(message: _102.GenesisMetadata): _102.GenesisMetadataAmino;
                    fromAminoMsg(object: _102.GenesisMetadataAminoMsg): _102.GenesisMetadata;
                    toAminoMsg(message: _102.GenesisMetadata): _102.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _102.GenesisMetadataProtoMsg): _102.GenesisMetadata;
                    toProto(message: _102.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _102.GenesisMetadata): _102.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _102.IdentifiedGenesisMetadata;
                    isSDK(o: any): o is _102.IdentifiedGenesisMetadataSDKType;
                    isAmino(o: any): o is _102.IdentifiedGenesisMetadataAmino;
                    encode(message: _102.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_102.IdentifiedGenesisMetadata>): _102.IdentifiedGenesisMetadata;
                    fromAmino(object: _102.IdentifiedGenesisMetadataAmino): _102.IdentifiedGenesisMetadata;
                    toAmino(message: _102.IdentifiedGenesisMetadata): _102.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _102.IdentifiedGenesisMetadataAminoMsg): _102.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _102.IdentifiedGenesisMetadata): _102.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _102.IdentifiedGenesisMetadataProtoMsg): _102.IdentifiedGenesisMetadata;
                    toProto(message: _102.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _102.IdentifiedGenesisMetadata): _102.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _101.IdentifiedClientState;
                    isSDK(o: any): o is _101.IdentifiedClientStateSDKType;
                    isAmino(o: any): o is _101.IdentifiedClientStateAmino;
                    encode(message: _101.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _101.IdentifiedClientState;
                    fromPartial(object: Partial<_101.IdentifiedClientState>): _101.IdentifiedClientState;
                    fromAmino(object: _101.IdentifiedClientStateAmino): _101.IdentifiedClientState;
                    toAmino(message: _101.IdentifiedClientState): _101.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _101.IdentifiedClientStateAminoMsg): _101.IdentifiedClientState;
                    toAminoMsg(message: _101.IdentifiedClientState): _101.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _101.IdentifiedClientStateProtoMsg): _101.IdentifiedClientState;
                    toProto(message: _101.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _101.IdentifiedClientState): _101.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _101.ConsensusStateWithHeight;
                    isSDK(o: any): o is _101.ConsensusStateWithHeightSDKType;
                    isAmino(o: any): o is _101.ConsensusStateWithHeightAmino;
                    encode(message: _101.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _101.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_101.ConsensusStateWithHeight>): _101.ConsensusStateWithHeight;
                    fromAmino(object: _101.ConsensusStateWithHeightAmino): _101.ConsensusStateWithHeight;
                    toAmino(message: _101.ConsensusStateWithHeight): _101.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _101.ConsensusStateWithHeightAminoMsg): _101.ConsensusStateWithHeight;
                    toAminoMsg(message: _101.ConsensusStateWithHeight): _101.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _101.ConsensusStateWithHeightProtoMsg): _101.ConsensusStateWithHeight;
                    toProto(message: _101.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _101.ConsensusStateWithHeight): _101.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _101.ClientConsensusStates;
                    isSDK(o: any): o is _101.ClientConsensusStatesSDKType;
                    isAmino(o: any): o is _101.ClientConsensusStatesAmino;
                    encode(message: _101.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _101.ClientConsensusStates;
                    fromPartial(object: Partial<_101.ClientConsensusStates>): _101.ClientConsensusStates;
                    fromAmino(object: _101.ClientConsensusStatesAmino): _101.ClientConsensusStates;
                    toAmino(message: _101.ClientConsensusStates): _101.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _101.ClientConsensusStatesAminoMsg): _101.ClientConsensusStates;
                    toAminoMsg(message: _101.ClientConsensusStates): _101.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _101.ClientConsensusStatesProtoMsg): _101.ClientConsensusStates;
                    toProto(message: _101.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _101.ClientConsensusStates): _101.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _101.ClientUpdateProposal;
                    isSDK(o: any): o is _101.ClientUpdateProposalSDKType;
                    isAmino(o: any): o is _101.ClientUpdateProposalAmino;
                    encode(message: _101.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _101.ClientUpdateProposal;
                    fromPartial(object: Partial<_101.ClientUpdateProposal>): _101.ClientUpdateProposal;
                    fromAmino(object: _101.ClientUpdateProposalAmino): _101.ClientUpdateProposal;
                    toAmino(message: _101.ClientUpdateProposal): _101.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _101.ClientUpdateProposalAminoMsg): _101.ClientUpdateProposal;
                    toAminoMsg(message: _101.ClientUpdateProposal): _101.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _101.ClientUpdateProposalProtoMsg): _101.ClientUpdateProposal;
                    toProto(message: _101.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _101.ClientUpdateProposal): _101.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _101.UpgradeProposal;
                    isSDK(o: any): o is _101.UpgradeProposalSDKType;
                    isAmino(o: any): o is _101.UpgradeProposalAmino;
                    encode(message: _101.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _101.UpgradeProposal;
                    fromPartial(object: Partial<_101.UpgradeProposal>): _101.UpgradeProposal;
                    fromAmino(object: _101.UpgradeProposalAmino): _101.UpgradeProposal;
                    toAmino(message: _101.UpgradeProposal): _101.UpgradeProposalAmino;
                    fromAminoMsg(object: _101.UpgradeProposalAminoMsg): _101.UpgradeProposal;
                    toAminoMsg(message: _101.UpgradeProposal): _101.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _101.UpgradeProposalProtoMsg): _101.UpgradeProposal;
                    toProto(message: _101.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _101.UpgradeProposal): _101.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _101.Height;
                    isSDK(o: any): o is _101.HeightSDKType;
                    isAmino(o: any): o is _101.HeightAmino;
                    encode(message: _101.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _101.Height;
                    fromPartial(object: Partial<_101.Height>): _101.Height;
                    fromAmino(object: _101.HeightAmino): _101.Height;
                    toAmino(message: _101.Height): _101.HeightAmino;
                    fromAminoMsg(object: _101.HeightAminoMsg): _101.Height;
                    toAminoMsg(message: _101.Height): _101.HeightAminoMsg;
                    fromProtoMsg(message: _101.HeightProtoMsg): _101.Height;
                    toProto(message: _101.Height): Uint8Array;
                    toProtoMsg(message: _101.Height): _101.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _101.Params;
                    isSDK(o: any): o is _101.ParamsSDKType;
                    isAmino(o: any): o is _101.ParamsAmino;
                    encode(message: _101.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _101.Params;
                    fromPartial(object: Partial<_101.Params>): _101.Params;
                    fromAmino(object: _101.ParamsAmino): _101.Params;
                    toAmino(message: _101.Params): _101.ParamsAmino;
                    fromAminoMsg(object: _101.ParamsAminoMsg): _101.Params;
                    toAminoMsg(message: _101.Params): _101.ParamsAminoMsg;
                    fromProtoMsg(message: _101.ParamsProtoMsg): _101.Params;
                    toProto(message: _101.Params): Uint8Array;
                    toProtoMsg(message: _101.Params): _101.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _105.MerkleRoot;
                    isSDK(o: any): o is _105.MerkleRootSDKType;
                    isAmino(o: any): o is _105.MerkleRootAmino;
                    encode(message: _105.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.MerkleRoot;
                    fromPartial(object: Partial<_105.MerkleRoot>): _105.MerkleRoot;
                    fromAmino(object: _105.MerkleRootAmino): _105.MerkleRoot;
                    toAmino(message: _105.MerkleRoot): _105.MerkleRootAmino;
                    fromAminoMsg(object: _105.MerkleRootAminoMsg): _105.MerkleRoot;
                    toAminoMsg(message: _105.MerkleRoot): _105.MerkleRootAminoMsg;
                    fromProtoMsg(message: _105.MerkleRootProtoMsg): _105.MerkleRoot;
                    toProto(message: _105.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _105.MerkleRoot): _105.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _105.MerklePrefix;
                    isSDK(o: any): o is _105.MerklePrefixSDKType;
                    isAmino(o: any): o is _105.MerklePrefixAmino;
                    encode(message: _105.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.MerklePrefix;
                    fromPartial(object: Partial<_105.MerklePrefix>): _105.MerklePrefix;
                    fromAmino(object: _105.MerklePrefixAmino): _105.MerklePrefix;
                    toAmino(message: _105.MerklePrefix): _105.MerklePrefixAmino;
                    fromAminoMsg(object: _105.MerklePrefixAminoMsg): _105.MerklePrefix;
                    toAminoMsg(message: _105.MerklePrefix): _105.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _105.MerklePrefixProtoMsg): _105.MerklePrefix;
                    toProto(message: _105.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _105.MerklePrefix): _105.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _105.MerklePath;
                    isSDK(o: any): o is _105.MerklePathSDKType;
                    isAmino(o: any): o is _105.MerklePathAmino;
                    encode(message: _105.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.MerklePath;
                    fromPartial(object: Partial<_105.MerklePath>): _105.MerklePath;
                    fromAmino(object: _105.MerklePathAmino): _105.MerklePath;
                    toAmino(message: _105.MerklePath): _105.MerklePathAmino;
                    fromAminoMsg(object: _105.MerklePathAminoMsg): _105.MerklePath;
                    toAminoMsg(message: _105.MerklePath): _105.MerklePathAminoMsg;
                    fromProtoMsg(message: _105.MerklePathProtoMsg): _105.MerklePath;
                    toProto(message: _105.MerklePath): Uint8Array;
                    toProtoMsg(message: _105.MerklePath): _105.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _105.MerkleProof;
                    isSDK(o: any): o is _105.MerkleProofSDKType;
                    isAmino(o: any): o is _105.MerkleProofAmino;
                    encode(message: _105.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.MerkleProof;
                    fromPartial(object: Partial<_105.MerkleProof>): _105.MerkleProof;
                    fromAmino(object: _105.MerkleProofAmino): _105.MerkleProof;
                    toAmino(message: _105.MerkleProof): _105.MerkleProofAmino;
                    fromAminoMsg(object: _105.MerkleProofAminoMsg): _105.MerkleProof;
                    toAminoMsg(message: _105.MerkleProof): _105.MerkleProofAminoMsg;
                    fromProtoMsg(message: _105.MerkleProofProtoMsg): _105.MerkleProof;
                    toProto(message: _105.MerkleProof): Uint8Array;
                    toProtoMsg(message: _105.MerkleProof): _105.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _228.MsgClientImpl;
                QueryClientImpl: typeof _224.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _108.QueryConnectionRequest): Promise<_108.QueryConnectionResponse>;
                    connections(request?: _108.QueryConnectionsRequest): Promise<_108.QueryConnectionsResponse>;
                    clientConnections(request: _108.QueryClientConnectionsRequest): Promise<_108.QueryClientConnectionsResponse>;
                    connectionClientState(request: _108.QueryConnectionClientStateRequest): Promise<_108.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _108.QueryConnectionConsensusStateRequest): Promise<_108.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _220.LCDQueryClient;
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _109.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _109.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _109.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _109.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _109.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _109.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _109.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _109.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _109.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _109.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _109.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _109.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _109.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _109.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _109.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _109.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _109.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _109.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _109.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _109.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _109.MsgConnectionOpenInit) => _109.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _109.MsgConnectionOpenInitAmino) => _109.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _109.MsgConnectionOpenTry) => _109.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _109.MsgConnectionOpenTryAmino) => _109.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _109.MsgConnectionOpenAck) => _109.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _109.MsgConnectionOpenAckAmino) => _109.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _109.MsgConnectionOpenConfirm) => _109.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _109.MsgConnectionOpenConfirmAmino) => _109.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _109.MsgConnectionOpenInit;
                    isSDK(o: any): o is _109.MsgConnectionOpenInitSDKType;
                    isAmino(o: any): o is _109.MsgConnectionOpenInitAmino;
                    encode(message: _109.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_109.MsgConnectionOpenInit>): _109.MsgConnectionOpenInit;
                    fromAmino(object: _109.MsgConnectionOpenInitAmino): _109.MsgConnectionOpenInit;
                    toAmino(message: _109.MsgConnectionOpenInit): _109.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _109.MsgConnectionOpenInitAminoMsg): _109.MsgConnectionOpenInit;
                    toAminoMsg(message: _109.MsgConnectionOpenInit): _109.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _109.MsgConnectionOpenInitProtoMsg): _109.MsgConnectionOpenInit;
                    toProto(message: _109.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _109.MsgConnectionOpenInit): _109.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _109.MsgConnectionOpenInitResponse;
                    isSDK(o: any): o is _109.MsgConnectionOpenInitResponseSDKType;
                    isAmino(o: any): o is _109.MsgConnectionOpenInitResponseAmino;
                    encode(_: _109.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_109.MsgConnectionOpenInitResponse>): _109.MsgConnectionOpenInitResponse;
                    fromAmino(_: _109.MsgConnectionOpenInitResponseAmino): _109.MsgConnectionOpenInitResponse;
                    toAmino(_: _109.MsgConnectionOpenInitResponse): _109.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _109.MsgConnectionOpenInitResponseAminoMsg): _109.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _109.MsgConnectionOpenInitResponse): _109.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgConnectionOpenInitResponseProtoMsg): _109.MsgConnectionOpenInitResponse;
                    toProto(message: _109.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgConnectionOpenInitResponse): _109.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _109.MsgConnectionOpenTry;
                    isSDK(o: any): o is _109.MsgConnectionOpenTrySDKType;
                    isAmino(o: any): o is _109.MsgConnectionOpenTryAmino;
                    encode(message: _109.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_109.MsgConnectionOpenTry>): _109.MsgConnectionOpenTry;
                    fromAmino(object: _109.MsgConnectionOpenTryAmino): _109.MsgConnectionOpenTry;
                    toAmino(message: _109.MsgConnectionOpenTry): _109.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _109.MsgConnectionOpenTryAminoMsg): _109.MsgConnectionOpenTry;
                    toAminoMsg(message: _109.MsgConnectionOpenTry): _109.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _109.MsgConnectionOpenTryProtoMsg): _109.MsgConnectionOpenTry;
                    toProto(message: _109.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _109.MsgConnectionOpenTry): _109.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _109.MsgConnectionOpenTryResponse;
                    isSDK(o: any): o is _109.MsgConnectionOpenTryResponseSDKType;
                    isAmino(o: any): o is _109.MsgConnectionOpenTryResponseAmino;
                    encode(_: _109.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_109.MsgConnectionOpenTryResponse>): _109.MsgConnectionOpenTryResponse;
                    fromAmino(_: _109.MsgConnectionOpenTryResponseAmino): _109.MsgConnectionOpenTryResponse;
                    toAmino(_: _109.MsgConnectionOpenTryResponse): _109.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _109.MsgConnectionOpenTryResponseAminoMsg): _109.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _109.MsgConnectionOpenTryResponse): _109.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgConnectionOpenTryResponseProtoMsg): _109.MsgConnectionOpenTryResponse;
                    toProto(message: _109.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgConnectionOpenTryResponse): _109.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _109.MsgConnectionOpenAck;
                    isSDK(o: any): o is _109.MsgConnectionOpenAckSDKType;
                    isAmino(o: any): o is _109.MsgConnectionOpenAckAmino;
                    encode(message: _109.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_109.MsgConnectionOpenAck>): _109.MsgConnectionOpenAck;
                    fromAmino(object: _109.MsgConnectionOpenAckAmino): _109.MsgConnectionOpenAck;
                    toAmino(message: _109.MsgConnectionOpenAck): _109.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _109.MsgConnectionOpenAckAminoMsg): _109.MsgConnectionOpenAck;
                    toAminoMsg(message: _109.MsgConnectionOpenAck): _109.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _109.MsgConnectionOpenAckProtoMsg): _109.MsgConnectionOpenAck;
                    toProto(message: _109.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _109.MsgConnectionOpenAck): _109.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _109.MsgConnectionOpenAckResponse;
                    isSDK(o: any): o is _109.MsgConnectionOpenAckResponseSDKType;
                    isAmino(o: any): o is _109.MsgConnectionOpenAckResponseAmino;
                    encode(_: _109.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_109.MsgConnectionOpenAckResponse>): _109.MsgConnectionOpenAckResponse;
                    fromAmino(_: _109.MsgConnectionOpenAckResponseAmino): _109.MsgConnectionOpenAckResponse;
                    toAmino(_: _109.MsgConnectionOpenAckResponse): _109.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _109.MsgConnectionOpenAckResponseAminoMsg): _109.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _109.MsgConnectionOpenAckResponse): _109.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgConnectionOpenAckResponseProtoMsg): _109.MsgConnectionOpenAckResponse;
                    toProto(message: _109.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgConnectionOpenAckResponse): _109.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _109.MsgConnectionOpenConfirm;
                    isSDK(o: any): o is _109.MsgConnectionOpenConfirmSDKType;
                    isAmino(o: any): o is _109.MsgConnectionOpenConfirmAmino;
                    encode(message: _109.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_109.MsgConnectionOpenConfirm>): _109.MsgConnectionOpenConfirm;
                    fromAmino(object: _109.MsgConnectionOpenConfirmAmino): _109.MsgConnectionOpenConfirm;
                    toAmino(message: _109.MsgConnectionOpenConfirm): _109.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _109.MsgConnectionOpenConfirmAminoMsg): _109.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _109.MsgConnectionOpenConfirm): _109.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _109.MsgConnectionOpenConfirmProtoMsg): _109.MsgConnectionOpenConfirm;
                    toProto(message: _109.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _109.MsgConnectionOpenConfirm): _109.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _109.MsgConnectionOpenConfirmResponse;
                    isSDK(o: any): o is _109.MsgConnectionOpenConfirmResponseSDKType;
                    isAmino(o: any): o is _109.MsgConnectionOpenConfirmResponseAmino;
                    encode(_: _109.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_109.MsgConnectionOpenConfirmResponse>): _109.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _109.MsgConnectionOpenConfirmResponseAmino): _109.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _109.MsgConnectionOpenConfirmResponse): _109.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _109.MsgConnectionOpenConfirmResponseAminoMsg): _109.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _109.MsgConnectionOpenConfirmResponse): _109.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgConnectionOpenConfirmResponseProtoMsg): _109.MsgConnectionOpenConfirmResponse;
                    toProto(message: _109.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgConnectionOpenConfirmResponse): _109.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _108.QueryConnectionRequest;
                    isSDK(o: any): o is _108.QueryConnectionRequestSDKType;
                    isAmino(o: any): o is _108.QueryConnectionRequestAmino;
                    encode(message: _108.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.QueryConnectionRequest;
                    fromPartial(object: Partial<_108.QueryConnectionRequest>): _108.QueryConnectionRequest;
                    fromAmino(object: _108.QueryConnectionRequestAmino): _108.QueryConnectionRequest;
                    toAmino(message: _108.QueryConnectionRequest): _108.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _108.QueryConnectionRequestAminoMsg): _108.QueryConnectionRequest;
                    toAminoMsg(message: _108.QueryConnectionRequest): _108.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryConnectionRequestProtoMsg): _108.QueryConnectionRequest;
                    toProto(message: _108.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryConnectionRequest): _108.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _108.QueryConnectionResponse;
                    isSDK(o: any): o is _108.QueryConnectionResponseSDKType;
                    isAmino(o: any): o is _108.QueryConnectionResponseAmino;
                    encode(message: _108.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.QueryConnectionResponse;
                    fromPartial(object: Partial<_108.QueryConnectionResponse>): _108.QueryConnectionResponse;
                    fromAmino(object: _108.QueryConnectionResponseAmino): _108.QueryConnectionResponse;
                    toAmino(message: _108.QueryConnectionResponse): _108.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _108.QueryConnectionResponseAminoMsg): _108.QueryConnectionResponse;
                    toAminoMsg(message: _108.QueryConnectionResponse): _108.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryConnectionResponseProtoMsg): _108.QueryConnectionResponse;
                    toProto(message: _108.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryConnectionResponse): _108.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _108.QueryConnectionsRequest;
                    isSDK(o: any): o is _108.QueryConnectionsRequestSDKType;
                    isAmino(o: any): o is _108.QueryConnectionsRequestAmino;
                    encode(message: _108.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.QueryConnectionsRequest;
                    fromPartial(object: Partial<_108.QueryConnectionsRequest>): _108.QueryConnectionsRequest;
                    fromAmino(object: _108.QueryConnectionsRequestAmino): _108.QueryConnectionsRequest;
                    toAmino(message: _108.QueryConnectionsRequest): _108.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _108.QueryConnectionsRequestAminoMsg): _108.QueryConnectionsRequest;
                    toAminoMsg(message: _108.QueryConnectionsRequest): _108.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryConnectionsRequestProtoMsg): _108.QueryConnectionsRequest;
                    toProto(message: _108.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryConnectionsRequest): _108.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _108.QueryConnectionsResponse;
                    isSDK(o: any): o is _108.QueryConnectionsResponseSDKType;
                    isAmino(o: any): o is _108.QueryConnectionsResponseAmino;
                    encode(message: _108.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.QueryConnectionsResponse;
                    fromPartial(object: Partial<_108.QueryConnectionsResponse>): _108.QueryConnectionsResponse;
                    fromAmino(object: _108.QueryConnectionsResponseAmino): _108.QueryConnectionsResponse;
                    toAmino(message: _108.QueryConnectionsResponse): _108.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _108.QueryConnectionsResponseAminoMsg): _108.QueryConnectionsResponse;
                    toAminoMsg(message: _108.QueryConnectionsResponse): _108.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryConnectionsResponseProtoMsg): _108.QueryConnectionsResponse;
                    toProto(message: _108.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryConnectionsResponse): _108.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _108.QueryClientConnectionsRequest;
                    isSDK(o: any): o is _108.QueryClientConnectionsRequestSDKType;
                    isAmino(o: any): o is _108.QueryClientConnectionsRequestAmino;
                    encode(message: _108.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_108.QueryClientConnectionsRequest>): _108.QueryClientConnectionsRequest;
                    fromAmino(object: _108.QueryClientConnectionsRequestAmino): _108.QueryClientConnectionsRequest;
                    toAmino(message: _108.QueryClientConnectionsRequest): _108.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _108.QueryClientConnectionsRequestAminoMsg): _108.QueryClientConnectionsRequest;
                    toAminoMsg(message: _108.QueryClientConnectionsRequest): _108.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryClientConnectionsRequestProtoMsg): _108.QueryClientConnectionsRequest;
                    toProto(message: _108.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryClientConnectionsRequest): _108.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _108.QueryClientConnectionsResponse;
                    isSDK(o: any): o is _108.QueryClientConnectionsResponseSDKType;
                    isAmino(o: any): o is _108.QueryClientConnectionsResponseAmino;
                    encode(message: _108.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_108.QueryClientConnectionsResponse>): _108.QueryClientConnectionsResponse;
                    fromAmino(object: _108.QueryClientConnectionsResponseAmino): _108.QueryClientConnectionsResponse;
                    toAmino(message: _108.QueryClientConnectionsResponse): _108.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _108.QueryClientConnectionsResponseAminoMsg): _108.QueryClientConnectionsResponse;
                    toAminoMsg(message: _108.QueryClientConnectionsResponse): _108.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryClientConnectionsResponseProtoMsg): _108.QueryClientConnectionsResponse;
                    toProto(message: _108.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryClientConnectionsResponse): _108.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _108.QueryConnectionClientStateRequest;
                    isSDK(o: any): o is _108.QueryConnectionClientStateRequestSDKType;
                    isAmino(o: any): o is _108.QueryConnectionClientStateRequestAmino;
                    encode(message: _108.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_108.QueryConnectionClientStateRequest>): _108.QueryConnectionClientStateRequest;
                    fromAmino(object: _108.QueryConnectionClientStateRequestAmino): _108.QueryConnectionClientStateRequest;
                    toAmino(message: _108.QueryConnectionClientStateRequest): _108.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _108.QueryConnectionClientStateRequestAminoMsg): _108.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _108.QueryConnectionClientStateRequest): _108.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryConnectionClientStateRequestProtoMsg): _108.QueryConnectionClientStateRequest;
                    toProto(message: _108.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryConnectionClientStateRequest): _108.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _108.QueryConnectionClientStateResponse;
                    isSDK(o: any): o is _108.QueryConnectionClientStateResponseSDKType;
                    isAmino(o: any): o is _108.QueryConnectionClientStateResponseAmino;
                    encode(message: _108.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_108.QueryConnectionClientStateResponse>): _108.QueryConnectionClientStateResponse;
                    fromAmino(object: _108.QueryConnectionClientStateResponseAmino): _108.QueryConnectionClientStateResponse;
                    toAmino(message: _108.QueryConnectionClientStateResponse): _108.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _108.QueryConnectionClientStateResponseAminoMsg): _108.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _108.QueryConnectionClientStateResponse): _108.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryConnectionClientStateResponseProtoMsg): _108.QueryConnectionClientStateResponse;
                    toProto(message: _108.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryConnectionClientStateResponse): _108.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _108.QueryConnectionConsensusStateRequest;
                    isSDK(o: any): o is _108.QueryConnectionConsensusStateRequestSDKType;
                    isAmino(o: any): o is _108.QueryConnectionConsensusStateRequestAmino;
                    encode(message: _108.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_108.QueryConnectionConsensusStateRequest>): _108.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _108.QueryConnectionConsensusStateRequestAmino): _108.QueryConnectionConsensusStateRequest;
                    toAmino(message: _108.QueryConnectionConsensusStateRequest): _108.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _108.QueryConnectionConsensusStateRequestAminoMsg): _108.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _108.QueryConnectionConsensusStateRequest): _108.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryConnectionConsensusStateRequestProtoMsg): _108.QueryConnectionConsensusStateRequest;
                    toProto(message: _108.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryConnectionConsensusStateRequest): _108.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _108.QueryConnectionConsensusStateResponse;
                    isSDK(o: any): o is _108.QueryConnectionConsensusStateResponseSDKType;
                    isAmino(o: any): o is _108.QueryConnectionConsensusStateResponseAmino;
                    encode(message: _108.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_108.QueryConnectionConsensusStateResponse>): _108.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _108.QueryConnectionConsensusStateResponseAmino): _108.QueryConnectionConsensusStateResponse;
                    toAmino(message: _108.QueryConnectionConsensusStateResponse): _108.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _108.QueryConnectionConsensusStateResponseAminoMsg): _108.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _108.QueryConnectionConsensusStateResponse): _108.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryConnectionConsensusStateResponseProtoMsg): _108.QueryConnectionConsensusStateResponse;
                    toProto(message: _108.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryConnectionConsensusStateResponse): _108.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _107.GenesisState;
                    isSDK(o: any): o is _107.GenesisStateSDKType;
                    isAmino(o: any): o is _107.GenesisStateAmino;
                    encode(message: _107.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.GenesisState;
                    fromPartial(object: Partial<_107.GenesisState>): _107.GenesisState;
                    fromAmino(object: _107.GenesisStateAmino): _107.GenesisState;
                    toAmino(message: _107.GenesisState): _107.GenesisStateAmino;
                    fromAminoMsg(object: _107.GenesisStateAminoMsg): _107.GenesisState;
                    toAminoMsg(message: _107.GenesisState): _107.GenesisStateAminoMsg;
                    fromProtoMsg(message: _107.GenesisStateProtoMsg): _107.GenesisState;
                    toProto(message: _107.GenesisState): Uint8Array;
                    toProtoMsg(message: _107.GenesisState): _107.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _106.State;
                stateToJSON(object: _106.State): string;
                State: typeof _106.State;
                StateSDKType: typeof _106.State;
                StateAmino: typeof _106.State;
                ConnectionEnd: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _106.ConnectionEnd;
                    isSDK(o: any): o is _106.ConnectionEndSDKType;
                    isAmino(o: any): o is _106.ConnectionEndAmino;
                    encode(message: _106.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.ConnectionEnd;
                    fromPartial(object: Partial<_106.ConnectionEnd>): _106.ConnectionEnd;
                    fromAmino(object: _106.ConnectionEndAmino): _106.ConnectionEnd;
                    toAmino(message: _106.ConnectionEnd): _106.ConnectionEndAmino;
                    fromAminoMsg(object: _106.ConnectionEndAminoMsg): _106.ConnectionEnd;
                    toAminoMsg(message: _106.ConnectionEnd): _106.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _106.ConnectionEndProtoMsg): _106.ConnectionEnd;
                    toProto(message: _106.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _106.ConnectionEnd): _106.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _106.IdentifiedConnection;
                    isSDK(o: any): o is _106.IdentifiedConnectionSDKType;
                    isAmino(o: any): o is _106.IdentifiedConnectionAmino;
                    encode(message: _106.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.IdentifiedConnection;
                    fromPartial(object: Partial<_106.IdentifiedConnection>): _106.IdentifiedConnection;
                    fromAmino(object: _106.IdentifiedConnectionAmino): _106.IdentifiedConnection;
                    toAmino(message: _106.IdentifiedConnection): _106.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _106.IdentifiedConnectionAminoMsg): _106.IdentifiedConnection;
                    toAminoMsg(message: _106.IdentifiedConnection): _106.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _106.IdentifiedConnectionProtoMsg): _106.IdentifiedConnection;
                    toProto(message: _106.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _106.IdentifiedConnection): _106.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _106.Counterparty;
                    isSDK(o: any): o is _106.CounterpartySDKType;
                    isAmino(o: any): o is _106.CounterpartyAmino;
                    encode(message: _106.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.Counterparty;
                    fromPartial(object: Partial<_106.Counterparty>): _106.Counterparty;
                    fromAmino(object: _106.CounterpartyAmino): _106.Counterparty;
                    toAmino(message: _106.Counterparty): _106.CounterpartyAmino;
                    fromAminoMsg(object: _106.CounterpartyAminoMsg): _106.Counterparty;
                    toAminoMsg(message: _106.Counterparty): _106.CounterpartyAminoMsg;
                    fromProtoMsg(message: _106.CounterpartyProtoMsg): _106.Counterparty;
                    toProto(message: _106.Counterparty): Uint8Array;
                    toProtoMsg(message: _106.Counterparty): _106.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _106.ClientPaths;
                    isSDK(o: any): o is _106.ClientPathsSDKType;
                    isAmino(o: any): o is _106.ClientPathsAmino;
                    encode(message: _106.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.ClientPaths;
                    fromPartial(object: Partial<_106.ClientPaths>): _106.ClientPaths;
                    fromAmino(object: _106.ClientPathsAmino): _106.ClientPaths;
                    toAmino(message: _106.ClientPaths): _106.ClientPathsAmino;
                    fromAminoMsg(object: _106.ClientPathsAminoMsg): _106.ClientPaths;
                    toAminoMsg(message: _106.ClientPaths): _106.ClientPathsAminoMsg;
                    fromProtoMsg(message: _106.ClientPathsProtoMsg): _106.ClientPaths;
                    toProto(message: _106.ClientPaths): Uint8Array;
                    toProtoMsg(message: _106.ClientPaths): _106.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _106.ConnectionPaths;
                    isSDK(o: any): o is _106.ConnectionPathsSDKType;
                    isAmino(o: any): o is _106.ConnectionPathsAmino;
                    encode(message: _106.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.ConnectionPaths;
                    fromPartial(object: Partial<_106.ConnectionPaths>): _106.ConnectionPaths;
                    fromAmino(object: _106.ConnectionPathsAmino): _106.ConnectionPaths;
                    toAmino(message: _106.ConnectionPaths): _106.ConnectionPathsAmino;
                    fromAminoMsg(object: _106.ConnectionPathsAminoMsg): _106.ConnectionPaths;
                    toAminoMsg(message: _106.ConnectionPaths): _106.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _106.ConnectionPathsProtoMsg): _106.ConnectionPaths;
                    toProto(message: _106.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _106.ConnectionPaths): _106.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _106.Version;
                    isSDK(o: any): o is _106.VersionSDKType;
                    isAmino(o: any): o is _106.VersionAmino;
                    encode(message: _106.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.Version;
                    fromPartial(object: Partial<_106.Version>): _106.Version;
                    fromAmino(object: _106.VersionAmino): _106.Version;
                    toAmino(message: _106.Version): _106.VersionAmino;
                    fromAminoMsg(object: _106.VersionAminoMsg): _106.Version;
                    toAminoMsg(message: _106.Version): _106.VersionAminoMsg;
                    fromProtoMsg(message: _106.VersionProtoMsg): _106.Version;
                    toProto(message: _106.Version): Uint8Array;
                    toProtoMsg(message: _106.Version): _106.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _106.Params;
                    isSDK(o: any): o is _106.ParamsSDKType;
                    isAmino(o: any): o is _106.ParamsAmino;
                    encode(message: _106.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.Params;
                    fromPartial(object: Partial<_106.Params>): _106.Params;
                    fromAmino(object: _106.ParamsAmino): _106.Params;
                    toAmino(message: _106.Params): _106.ParamsAmino;
                    fromAminoMsg(object: _106.ParamsAminoMsg): _106.Params;
                    toAminoMsg(message: _106.Params): _106.ParamsAminoMsg;
                    fromProtoMsg(message: _106.ParamsProtoMsg): _106.Params;
                    toProto(message: _106.Params): Uint8Array;
                    toProtoMsg(message: _106.Params): _106.ParamsProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _110.ClientState;
                    isSDK(o: any): o is _110.ClientStateSDKType;
                    isAmino(o: any): o is _110.ClientStateAmino;
                    encode(message: _110.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.ClientState;
                    fromPartial(object: Partial<_110.ClientState>): _110.ClientState;
                    fromAmino(object: _110.ClientStateAmino): _110.ClientState;
                    toAmino(message: _110.ClientState): _110.ClientStateAmino;
                    fromAminoMsg(object: _110.ClientStateAminoMsg): _110.ClientState;
                    toAminoMsg(message: _110.ClientState): _110.ClientStateAminoMsg;
                    fromProtoMsg(message: _110.ClientStateProtoMsg): _110.ClientState;
                    toProto(message: _110.ClientState): Uint8Array;
                    toProtoMsg(message: _110.ClientState): _110.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _111.DataType;
                dataTypeToJSON(object: _111.DataType): string;
                DataType: typeof _111.DataType;
                DataTypeSDKType: typeof _111.DataType;
                DataTypeAmino: typeof _111.DataType;
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _111.ClientState;
                    isSDK(o: any): o is _111.ClientStateSDKType;
                    isAmino(o: any): o is _111.ClientStateAmino;
                    encode(message: _111.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.ClientState;
                    fromPartial(object: Partial<_111.ClientState>): _111.ClientState;
                    fromAmino(object: _111.ClientStateAmino): _111.ClientState;
                    toAmino(message: _111.ClientState): _111.ClientStateAmino;
                    fromAminoMsg(object: _111.ClientStateAminoMsg): _111.ClientState;
                    toAminoMsg(message: _111.ClientState): _111.ClientStateAminoMsg;
                    fromProtoMsg(message: _111.ClientStateProtoMsg): _111.ClientState;
                    toProto(message: _111.ClientState): Uint8Array;
                    toProtoMsg(message: _111.ClientState): _111.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _111.ConsensusState;
                    isSDK(o: any): o is _111.ConsensusStateSDKType;
                    isAmino(o: any): o is _111.ConsensusStateAmino;
                    encode(message: _111.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.ConsensusState;
                    fromPartial(object: Partial<_111.ConsensusState>): _111.ConsensusState;
                    fromAmino(object: _111.ConsensusStateAmino): _111.ConsensusState;
                    toAmino(message: _111.ConsensusState): _111.ConsensusStateAmino;
                    fromAminoMsg(object: _111.ConsensusStateAminoMsg): _111.ConsensusState;
                    toAminoMsg(message: _111.ConsensusState): _111.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _111.ConsensusStateProtoMsg): _111.ConsensusState;
                    toProto(message: _111.ConsensusState): Uint8Array;
                    toProtoMsg(message: _111.ConsensusState): _111.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _111.Header;
                    isSDK(o: any): o is _111.HeaderSDKType;
                    isAmino(o: any): o is _111.HeaderAmino;
                    encode(message: _111.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.Header;
                    fromPartial(object: Partial<_111.Header>): _111.Header;
                    fromAmino(object: _111.HeaderAmino): _111.Header;
                    toAmino(message: _111.Header): _111.HeaderAmino;
                    fromAminoMsg(object: _111.HeaderAminoMsg): _111.Header;
                    toAminoMsg(message: _111.Header): _111.HeaderAminoMsg;
                    fromProtoMsg(message: _111.HeaderProtoMsg): _111.Header;
                    toProto(message: _111.Header): Uint8Array;
                    toProtoMsg(message: _111.Header): _111.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _111.Misbehaviour;
                    isSDK(o: any): o is _111.MisbehaviourSDKType;
                    isAmino(o: any): o is _111.MisbehaviourAmino;
                    encode(message: _111.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.Misbehaviour;
                    fromPartial(object: Partial<_111.Misbehaviour>): _111.Misbehaviour;
                    fromAmino(object: _111.MisbehaviourAmino): _111.Misbehaviour;
                    toAmino(message: _111.Misbehaviour): _111.MisbehaviourAmino;
                    fromAminoMsg(object: _111.MisbehaviourAminoMsg): _111.Misbehaviour;
                    toAminoMsg(message: _111.Misbehaviour): _111.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _111.MisbehaviourProtoMsg): _111.Misbehaviour;
                    toProto(message: _111.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _111.Misbehaviour): _111.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _111.SignatureAndData;
                    isSDK(o: any): o is _111.SignatureAndDataSDKType;
                    isAmino(o: any): o is _111.SignatureAndDataAmino;
                    encode(message: _111.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.SignatureAndData;
                    fromPartial(object: Partial<_111.SignatureAndData>): _111.SignatureAndData;
                    fromAmino(object: _111.SignatureAndDataAmino): _111.SignatureAndData;
                    toAmino(message: _111.SignatureAndData): _111.SignatureAndDataAmino;
                    fromAminoMsg(object: _111.SignatureAndDataAminoMsg): _111.SignatureAndData;
                    toAminoMsg(message: _111.SignatureAndData): _111.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _111.SignatureAndDataProtoMsg): _111.SignatureAndData;
                    toProto(message: _111.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _111.SignatureAndData): _111.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _111.TimestampedSignatureData;
                    isSDK(o: any): o is _111.TimestampedSignatureDataSDKType;
                    isAmino(o: any): o is _111.TimestampedSignatureDataAmino;
                    encode(message: _111.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.TimestampedSignatureData;
                    fromPartial(object: Partial<_111.TimestampedSignatureData>): _111.TimestampedSignatureData;
                    fromAmino(object: _111.TimestampedSignatureDataAmino): _111.TimestampedSignatureData;
                    toAmino(message: _111.TimestampedSignatureData): _111.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _111.TimestampedSignatureDataAminoMsg): _111.TimestampedSignatureData;
                    toAminoMsg(message: _111.TimestampedSignatureData): _111.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _111.TimestampedSignatureDataProtoMsg): _111.TimestampedSignatureData;
                    toProto(message: _111.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _111.TimestampedSignatureData): _111.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _111.SignBytes;
                    isSDK(o: any): o is _111.SignBytesSDKType;
                    isAmino(o: any): o is _111.SignBytesAmino;
                    encode(message: _111.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.SignBytes;
                    fromPartial(object: Partial<_111.SignBytes>): _111.SignBytes;
                    fromAmino(object: _111.SignBytesAmino): _111.SignBytes;
                    toAmino(message: _111.SignBytes): _111.SignBytesAmino;
                    fromAminoMsg(object: _111.SignBytesAminoMsg): _111.SignBytes;
                    toAminoMsg(message: _111.SignBytes): _111.SignBytesAminoMsg;
                    fromProtoMsg(message: _111.SignBytesProtoMsg): _111.SignBytes;
                    toProto(message: _111.SignBytes): Uint8Array;
                    toProtoMsg(message: _111.SignBytes): _111.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _111.HeaderData;
                    isSDK(o: any): o is _111.HeaderDataSDKType;
                    isAmino(o: any): o is _111.HeaderDataAmino;
                    encode(message: _111.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.HeaderData;
                    fromPartial(object: Partial<_111.HeaderData>): _111.HeaderData;
                    fromAmino(object: _111.HeaderDataAmino): _111.HeaderData;
                    toAmino(message: _111.HeaderData): _111.HeaderDataAmino;
                    fromAminoMsg(object: _111.HeaderDataAminoMsg): _111.HeaderData;
                    toAminoMsg(message: _111.HeaderData): _111.HeaderDataAminoMsg;
                    fromProtoMsg(message: _111.HeaderDataProtoMsg): _111.HeaderData;
                    toProto(message: _111.HeaderData): Uint8Array;
                    toProtoMsg(message: _111.HeaderData): _111.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _111.ClientStateData;
                    isSDK(o: any): o is _111.ClientStateDataSDKType;
                    isAmino(o: any): o is _111.ClientStateDataAmino;
                    encode(message: _111.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.ClientStateData;
                    fromPartial(object: Partial<_111.ClientStateData>): _111.ClientStateData;
                    fromAmino(object: _111.ClientStateDataAmino): _111.ClientStateData;
                    toAmino(message: _111.ClientStateData): _111.ClientStateDataAmino;
                    fromAminoMsg(object: _111.ClientStateDataAminoMsg): _111.ClientStateData;
                    toAminoMsg(message: _111.ClientStateData): _111.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _111.ClientStateDataProtoMsg): _111.ClientStateData;
                    toProto(message: _111.ClientStateData): Uint8Array;
                    toProtoMsg(message: _111.ClientStateData): _111.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _111.ConsensusStateData;
                    isSDK(o: any): o is _111.ConsensusStateDataSDKType;
                    isAmino(o: any): o is _111.ConsensusStateDataAmino;
                    encode(message: _111.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.ConsensusStateData;
                    fromPartial(object: Partial<_111.ConsensusStateData>): _111.ConsensusStateData;
                    fromAmino(object: _111.ConsensusStateDataAmino): _111.ConsensusStateData;
                    toAmino(message: _111.ConsensusStateData): _111.ConsensusStateDataAmino;
                    fromAminoMsg(object: _111.ConsensusStateDataAminoMsg): _111.ConsensusStateData;
                    toAminoMsg(message: _111.ConsensusStateData): _111.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _111.ConsensusStateDataProtoMsg): _111.ConsensusStateData;
                    toProto(message: _111.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _111.ConsensusStateData): _111.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _111.ConnectionStateData;
                    isSDK(o: any): o is _111.ConnectionStateDataSDKType;
                    isAmino(o: any): o is _111.ConnectionStateDataAmino;
                    encode(message: _111.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.ConnectionStateData;
                    fromPartial(object: Partial<_111.ConnectionStateData>): _111.ConnectionStateData;
                    fromAmino(object: _111.ConnectionStateDataAmino): _111.ConnectionStateData;
                    toAmino(message: _111.ConnectionStateData): _111.ConnectionStateDataAmino;
                    fromAminoMsg(object: _111.ConnectionStateDataAminoMsg): _111.ConnectionStateData;
                    toAminoMsg(message: _111.ConnectionStateData): _111.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _111.ConnectionStateDataProtoMsg): _111.ConnectionStateData;
                    toProto(message: _111.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _111.ConnectionStateData): _111.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _111.ChannelStateData;
                    isSDK(o: any): o is _111.ChannelStateDataSDKType;
                    isAmino(o: any): o is _111.ChannelStateDataAmino;
                    encode(message: _111.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.ChannelStateData;
                    fromPartial(object: Partial<_111.ChannelStateData>): _111.ChannelStateData;
                    fromAmino(object: _111.ChannelStateDataAmino): _111.ChannelStateData;
                    toAmino(message: _111.ChannelStateData): _111.ChannelStateDataAmino;
                    fromAminoMsg(object: _111.ChannelStateDataAminoMsg): _111.ChannelStateData;
                    toAminoMsg(message: _111.ChannelStateData): _111.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _111.ChannelStateDataProtoMsg): _111.ChannelStateData;
                    toProto(message: _111.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _111.ChannelStateData): _111.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _111.PacketCommitmentData;
                    isSDK(o: any): o is _111.PacketCommitmentDataSDKType;
                    isAmino(o: any): o is _111.PacketCommitmentDataAmino;
                    encode(message: _111.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.PacketCommitmentData;
                    fromPartial(object: Partial<_111.PacketCommitmentData>): _111.PacketCommitmentData;
                    fromAmino(object: _111.PacketCommitmentDataAmino): _111.PacketCommitmentData;
                    toAmino(message: _111.PacketCommitmentData): _111.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _111.PacketCommitmentDataAminoMsg): _111.PacketCommitmentData;
                    toAminoMsg(message: _111.PacketCommitmentData): _111.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _111.PacketCommitmentDataProtoMsg): _111.PacketCommitmentData;
                    toProto(message: _111.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _111.PacketCommitmentData): _111.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _111.PacketAcknowledgementData;
                    isSDK(o: any): o is _111.PacketAcknowledgementDataSDKType;
                    isAmino(o: any): o is _111.PacketAcknowledgementDataAmino;
                    encode(message: _111.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.PacketAcknowledgementData;
                    fromPartial(object: Partial<_111.PacketAcknowledgementData>): _111.PacketAcknowledgementData;
                    fromAmino(object: _111.PacketAcknowledgementDataAmino): _111.PacketAcknowledgementData;
                    toAmino(message: _111.PacketAcknowledgementData): _111.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _111.PacketAcknowledgementDataAminoMsg): _111.PacketAcknowledgementData;
                    toAminoMsg(message: _111.PacketAcknowledgementData): _111.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _111.PacketAcknowledgementDataProtoMsg): _111.PacketAcknowledgementData;
                    toProto(message: _111.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _111.PacketAcknowledgementData): _111.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _111.PacketReceiptAbsenceData;
                    isSDK(o: any): o is _111.PacketReceiptAbsenceDataSDKType;
                    isAmino(o: any): o is _111.PacketReceiptAbsenceDataAmino;
                    encode(message: _111.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_111.PacketReceiptAbsenceData>): _111.PacketReceiptAbsenceData;
                    fromAmino(object: _111.PacketReceiptAbsenceDataAmino): _111.PacketReceiptAbsenceData;
                    toAmino(message: _111.PacketReceiptAbsenceData): _111.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _111.PacketReceiptAbsenceDataAminoMsg): _111.PacketReceiptAbsenceData;
                    toAminoMsg(message: _111.PacketReceiptAbsenceData): _111.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _111.PacketReceiptAbsenceDataProtoMsg): _111.PacketReceiptAbsenceData;
                    toProto(message: _111.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _111.PacketReceiptAbsenceData): _111.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _111.NextSequenceRecvData;
                    isSDK(o: any): o is _111.NextSequenceRecvDataSDKType;
                    isAmino(o: any): o is _111.NextSequenceRecvDataAmino;
                    encode(message: _111.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.NextSequenceRecvData;
                    fromPartial(object: Partial<_111.NextSequenceRecvData>): _111.NextSequenceRecvData;
                    fromAmino(object: _111.NextSequenceRecvDataAmino): _111.NextSequenceRecvData;
                    toAmino(message: _111.NextSequenceRecvData): _111.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _111.NextSequenceRecvDataAminoMsg): _111.NextSequenceRecvData;
                    toAminoMsg(message: _111.NextSequenceRecvData): _111.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _111.NextSequenceRecvDataProtoMsg): _111.NextSequenceRecvData;
                    toProto(message: _111.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _111.NextSequenceRecvData): _111.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _112.DataType;
                dataTypeToJSON(object: _112.DataType): string;
                DataType: typeof _112.DataType;
                DataTypeSDKType: typeof _112.DataType;
                DataTypeAmino: typeof _112.DataType;
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _112.ClientState;
                    isSDK(o: any): o is _112.ClientStateSDKType;
                    isAmino(o: any): o is _112.ClientStateAmino;
                    encode(message: _112.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.ClientState;
                    fromPartial(object: Partial<_112.ClientState>): _112.ClientState;
                    fromAmino(object: _112.ClientStateAmino): _112.ClientState;
                    toAmino(message: _112.ClientState): _112.ClientStateAmino;
                    fromAminoMsg(object: _112.ClientStateAminoMsg): _112.ClientState;
                    toAminoMsg(message: _112.ClientState): _112.ClientStateAminoMsg;
                    fromProtoMsg(message: _112.ClientStateProtoMsg): _112.ClientState;
                    toProto(message: _112.ClientState): Uint8Array;
                    toProtoMsg(message: _112.ClientState): _112.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _112.ConsensusState;
                    isSDK(o: any): o is _112.ConsensusStateSDKType;
                    isAmino(o: any): o is _112.ConsensusStateAmino;
                    encode(message: _112.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.ConsensusState;
                    fromPartial(object: Partial<_112.ConsensusState>): _112.ConsensusState;
                    fromAmino(object: _112.ConsensusStateAmino): _112.ConsensusState;
                    toAmino(message: _112.ConsensusState): _112.ConsensusStateAmino;
                    fromAminoMsg(object: _112.ConsensusStateAminoMsg): _112.ConsensusState;
                    toAminoMsg(message: _112.ConsensusState): _112.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _112.ConsensusStateProtoMsg): _112.ConsensusState;
                    toProto(message: _112.ConsensusState): Uint8Array;
                    toProtoMsg(message: _112.ConsensusState): _112.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _112.Header;
                    isSDK(o: any): o is _112.HeaderSDKType;
                    isAmino(o: any): o is _112.HeaderAmino;
                    encode(message: _112.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.Header;
                    fromPartial(object: Partial<_112.Header>): _112.Header;
                    fromAmino(object: _112.HeaderAmino): _112.Header;
                    toAmino(message: _112.Header): _112.HeaderAmino;
                    fromAminoMsg(object: _112.HeaderAminoMsg): _112.Header;
                    toAminoMsg(message: _112.Header): _112.HeaderAminoMsg;
                    fromProtoMsg(message: _112.HeaderProtoMsg): _112.Header;
                    toProto(message: _112.Header): Uint8Array;
                    toProtoMsg(message: _112.Header): _112.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _112.Misbehaviour;
                    isSDK(o: any): o is _112.MisbehaviourSDKType;
                    isAmino(o: any): o is _112.MisbehaviourAmino;
                    encode(message: _112.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.Misbehaviour;
                    fromPartial(object: Partial<_112.Misbehaviour>): _112.Misbehaviour;
                    fromAmino(object: _112.MisbehaviourAmino): _112.Misbehaviour;
                    toAmino(message: _112.Misbehaviour): _112.MisbehaviourAmino;
                    fromAminoMsg(object: _112.MisbehaviourAminoMsg): _112.Misbehaviour;
                    toAminoMsg(message: _112.Misbehaviour): _112.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _112.MisbehaviourProtoMsg): _112.Misbehaviour;
                    toProto(message: _112.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _112.Misbehaviour): _112.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _112.SignatureAndData;
                    isSDK(o: any): o is _112.SignatureAndDataSDKType;
                    isAmino(o: any): o is _112.SignatureAndDataAmino;
                    encode(message: _112.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.SignatureAndData;
                    fromPartial(object: Partial<_112.SignatureAndData>): _112.SignatureAndData;
                    fromAmino(object: _112.SignatureAndDataAmino): _112.SignatureAndData;
                    toAmino(message: _112.SignatureAndData): _112.SignatureAndDataAmino;
                    fromAminoMsg(object: _112.SignatureAndDataAminoMsg): _112.SignatureAndData;
                    toAminoMsg(message: _112.SignatureAndData): _112.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _112.SignatureAndDataProtoMsg): _112.SignatureAndData;
                    toProto(message: _112.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _112.SignatureAndData): _112.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _112.TimestampedSignatureData;
                    isSDK(o: any): o is _112.TimestampedSignatureDataSDKType;
                    isAmino(o: any): o is _112.TimestampedSignatureDataAmino;
                    encode(message: _112.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.TimestampedSignatureData;
                    fromPartial(object: Partial<_112.TimestampedSignatureData>): _112.TimestampedSignatureData;
                    fromAmino(object: _112.TimestampedSignatureDataAmino): _112.TimestampedSignatureData;
                    toAmino(message: _112.TimestampedSignatureData): _112.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _112.TimestampedSignatureDataAminoMsg): _112.TimestampedSignatureData;
                    toAminoMsg(message: _112.TimestampedSignatureData): _112.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _112.TimestampedSignatureDataProtoMsg): _112.TimestampedSignatureData;
                    toProto(message: _112.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _112.TimestampedSignatureData): _112.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _112.SignBytes;
                    isSDK(o: any): o is _112.SignBytesSDKType;
                    isAmino(o: any): o is _112.SignBytesAmino;
                    encode(message: _112.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.SignBytes;
                    fromPartial(object: Partial<_112.SignBytes>): _112.SignBytes;
                    fromAmino(object: _112.SignBytesAmino): _112.SignBytes;
                    toAmino(message: _112.SignBytes): _112.SignBytesAmino;
                    fromAminoMsg(object: _112.SignBytesAminoMsg): _112.SignBytes;
                    toAminoMsg(message: _112.SignBytes): _112.SignBytesAminoMsg;
                    fromProtoMsg(message: _112.SignBytesProtoMsg): _112.SignBytes;
                    toProto(message: _112.SignBytes): Uint8Array;
                    toProtoMsg(message: _112.SignBytes): _112.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _112.HeaderData;
                    isSDK(o: any): o is _112.HeaderDataSDKType;
                    isAmino(o: any): o is _112.HeaderDataAmino;
                    encode(message: _112.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.HeaderData;
                    fromPartial(object: Partial<_112.HeaderData>): _112.HeaderData;
                    fromAmino(object: _112.HeaderDataAmino): _112.HeaderData;
                    toAmino(message: _112.HeaderData): _112.HeaderDataAmino;
                    fromAminoMsg(object: _112.HeaderDataAminoMsg): _112.HeaderData;
                    toAminoMsg(message: _112.HeaderData): _112.HeaderDataAminoMsg;
                    fromProtoMsg(message: _112.HeaderDataProtoMsg): _112.HeaderData;
                    toProto(message: _112.HeaderData): Uint8Array;
                    toProtoMsg(message: _112.HeaderData): _112.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _112.ClientStateData;
                    isSDK(o: any): o is _112.ClientStateDataSDKType;
                    isAmino(o: any): o is _112.ClientStateDataAmino;
                    encode(message: _112.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.ClientStateData;
                    fromPartial(object: Partial<_112.ClientStateData>): _112.ClientStateData;
                    fromAmino(object: _112.ClientStateDataAmino): _112.ClientStateData;
                    toAmino(message: _112.ClientStateData): _112.ClientStateDataAmino;
                    fromAminoMsg(object: _112.ClientStateDataAminoMsg): _112.ClientStateData;
                    toAminoMsg(message: _112.ClientStateData): _112.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _112.ClientStateDataProtoMsg): _112.ClientStateData;
                    toProto(message: _112.ClientStateData): Uint8Array;
                    toProtoMsg(message: _112.ClientStateData): _112.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _112.ConsensusStateData;
                    isSDK(o: any): o is _112.ConsensusStateDataSDKType;
                    isAmino(o: any): o is _112.ConsensusStateDataAmino;
                    encode(message: _112.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.ConsensusStateData;
                    fromPartial(object: Partial<_112.ConsensusStateData>): _112.ConsensusStateData;
                    fromAmino(object: _112.ConsensusStateDataAmino): _112.ConsensusStateData;
                    toAmino(message: _112.ConsensusStateData): _112.ConsensusStateDataAmino;
                    fromAminoMsg(object: _112.ConsensusStateDataAminoMsg): _112.ConsensusStateData;
                    toAminoMsg(message: _112.ConsensusStateData): _112.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _112.ConsensusStateDataProtoMsg): _112.ConsensusStateData;
                    toProto(message: _112.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _112.ConsensusStateData): _112.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _112.ConnectionStateData;
                    isSDK(o: any): o is _112.ConnectionStateDataSDKType;
                    isAmino(o: any): o is _112.ConnectionStateDataAmino;
                    encode(message: _112.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.ConnectionStateData;
                    fromPartial(object: Partial<_112.ConnectionStateData>): _112.ConnectionStateData;
                    fromAmino(object: _112.ConnectionStateDataAmino): _112.ConnectionStateData;
                    toAmino(message: _112.ConnectionStateData): _112.ConnectionStateDataAmino;
                    fromAminoMsg(object: _112.ConnectionStateDataAminoMsg): _112.ConnectionStateData;
                    toAminoMsg(message: _112.ConnectionStateData): _112.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _112.ConnectionStateDataProtoMsg): _112.ConnectionStateData;
                    toProto(message: _112.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _112.ConnectionStateData): _112.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _112.ChannelStateData;
                    isSDK(o: any): o is _112.ChannelStateDataSDKType;
                    isAmino(o: any): o is _112.ChannelStateDataAmino;
                    encode(message: _112.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.ChannelStateData;
                    fromPartial(object: Partial<_112.ChannelStateData>): _112.ChannelStateData;
                    fromAmino(object: _112.ChannelStateDataAmino): _112.ChannelStateData;
                    toAmino(message: _112.ChannelStateData): _112.ChannelStateDataAmino;
                    fromAminoMsg(object: _112.ChannelStateDataAminoMsg): _112.ChannelStateData;
                    toAminoMsg(message: _112.ChannelStateData): _112.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _112.ChannelStateDataProtoMsg): _112.ChannelStateData;
                    toProto(message: _112.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _112.ChannelStateData): _112.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _112.PacketCommitmentData;
                    isSDK(o: any): o is _112.PacketCommitmentDataSDKType;
                    isAmino(o: any): o is _112.PacketCommitmentDataAmino;
                    encode(message: _112.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.PacketCommitmentData;
                    fromPartial(object: Partial<_112.PacketCommitmentData>): _112.PacketCommitmentData;
                    fromAmino(object: _112.PacketCommitmentDataAmino): _112.PacketCommitmentData;
                    toAmino(message: _112.PacketCommitmentData): _112.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _112.PacketCommitmentDataAminoMsg): _112.PacketCommitmentData;
                    toAminoMsg(message: _112.PacketCommitmentData): _112.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _112.PacketCommitmentDataProtoMsg): _112.PacketCommitmentData;
                    toProto(message: _112.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _112.PacketCommitmentData): _112.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _112.PacketAcknowledgementData;
                    isSDK(o: any): o is _112.PacketAcknowledgementDataSDKType;
                    isAmino(o: any): o is _112.PacketAcknowledgementDataAmino;
                    encode(message: _112.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.PacketAcknowledgementData;
                    fromPartial(object: Partial<_112.PacketAcknowledgementData>): _112.PacketAcknowledgementData;
                    fromAmino(object: _112.PacketAcknowledgementDataAmino): _112.PacketAcknowledgementData;
                    toAmino(message: _112.PacketAcknowledgementData): _112.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _112.PacketAcknowledgementDataAminoMsg): _112.PacketAcknowledgementData;
                    toAminoMsg(message: _112.PacketAcknowledgementData): _112.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _112.PacketAcknowledgementDataProtoMsg): _112.PacketAcknowledgementData;
                    toProto(message: _112.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _112.PacketAcknowledgementData): _112.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _112.PacketReceiptAbsenceData;
                    isSDK(o: any): o is _112.PacketReceiptAbsenceDataSDKType;
                    isAmino(o: any): o is _112.PacketReceiptAbsenceDataAmino;
                    encode(message: _112.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_112.PacketReceiptAbsenceData>): _112.PacketReceiptAbsenceData;
                    fromAmino(object: _112.PacketReceiptAbsenceDataAmino): _112.PacketReceiptAbsenceData;
                    toAmino(message: _112.PacketReceiptAbsenceData): _112.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _112.PacketReceiptAbsenceDataAminoMsg): _112.PacketReceiptAbsenceData;
                    toAminoMsg(message: _112.PacketReceiptAbsenceData): _112.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _112.PacketReceiptAbsenceDataProtoMsg): _112.PacketReceiptAbsenceData;
                    toProto(message: _112.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _112.PacketReceiptAbsenceData): _112.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _112.NextSequenceRecvData;
                    isSDK(o: any): o is _112.NextSequenceRecvDataSDKType;
                    isAmino(o: any): o is _112.NextSequenceRecvDataAmino;
                    encode(message: _112.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.NextSequenceRecvData;
                    fromPartial(object: Partial<_112.NextSequenceRecvData>): _112.NextSequenceRecvData;
                    fromAmino(object: _112.NextSequenceRecvDataAmino): _112.NextSequenceRecvData;
                    toAmino(message: _112.NextSequenceRecvData): _112.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _112.NextSequenceRecvDataAminoMsg): _112.NextSequenceRecvData;
                    toAminoMsg(message: _112.NextSequenceRecvData): _112.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _112.NextSequenceRecvDataProtoMsg): _112.NextSequenceRecvData;
                    toProto(message: _112.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _112.NextSequenceRecvData): _112.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _113.ClientState;
                    isSDK(o: any): o is _113.ClientStateSDKType;
                    isAmino(o: any): o is _113.ClientStateAmino;
                    encode(message: _113.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.ClientState;
                    fromPartial(object: Partial<_113.ClientState>): _113.ClientState;
                    fromAmino(object: _113.ClientStateAmino): _113.ClientState;
                    toAmino(message: _113.ClientState): _113.ClientStateAmino;
                    fromAminoMsg(object: _113.ClientStateAminoMsg): _113.ClientState;
                    toAminoMsg(message: _113.ClientState): _113.ClientStateAminoMsg;
                    fromProtoMsg(message: _113.ClientStateProtoMsg): _113.ClientState;
                    toProto(message: _113.ClientState): Uint8Array;
                    toProtoMsg(message: _113.ClientState): _113.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _113.ConsensusState;
                    isSDK(o: any): o is _113.ConsensusStateSDKType;
                    isAmino(o: any): o is _113.ConsensusStateAmino;
                    encode(message: _113.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.ConsensusState;
                    fromPartial(object: Partial<_113.ConsensusState>): _113.ConsensusState;
                    fromAmino(object: _113.ConsensusStateAmino): _113.ConsensusState;
                    toAmino(message: _113.ConsensusState): _113.ConsensusStateAmino;
                    fromAminoMsg(object: _113.ConsensusStateAminoMsg): _113.ConsensusState;
                    toAminoMsg(message: _113.ConsensusState): _113.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _113.ConsensusStateProtoMsg): _113.ConsensusState;
                    toProto(message: _113.ConsensusState): Uint8Array;
                    toProtoMsg(message: _113.ConsensusState): _113.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _113.Misbehaviour;
                    isSDK(o: any): o is _113.MisbehaviourSDKType;
                    isAmino(o: any): o is _113.MisbehaviourAmino;
                    encode(message: _113.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.Misbehaviour;
                    fromPartial(object: Partial<_113.Misbehaviour>): _113.Misbehaviour;
                    fromAmino(object: _113.MisbehaviourAmino): _113.Misbehaviour;
                    toAmino(message: _113.Misbehaviour): _113.MisbehaviourAmino;
                    fromAminoMsg(object: _113.MisbehaviourAminoMsg): _113.Misbehaviour;
                    toAminoMsg(message: _113.Misbehaviour): _113.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _113.MisbehaviourProtoMsg): _113.Misbehaviour;
                    toProto(message: _113.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _113.Misbehaviour): _113.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _113.Header;
                    isSDK(o: any): o is _113.HeaderSDKType;
                    isAmino(o: any): o is _113.HeaderAmino;
                    encode(message: _113.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.Header;
                    fromPartial(object: Partial<_113.Header>): _113.Header;
                    fromAmino(object: _113.HeaderAmino): _113.Header;
                    toAmino(message: _113.Header): _113.HeaderAmino;
                    fromAminoMsg(object: _113.HeaderAminoMsg): _113.Header;
                    toAminoMsg(message: _113.Header): _113.HeaderAminoMsg;
                    fromProtoMsg(message: _113.HeaderProtoMsg): _113.Header;
                    toProto(message: _113.Header): Uint8Array;
                    toProtoMsg(message: _113.Header): _113.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _113.Fraction;
                    isSDK(o: any): o is _113.FractionSDKType;
                    isAmino(o: any): o is _113.FractionAmino;
                    encode(message: _113.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.Fraction;
                    fromPartial(object: Partial<_113.Fraction>): _113.Fraction;
                    fromAmino(object: _113.FractionAmino): _113.Fraction;
                    toAmino(message: _113.Fraction): _113.FractionAmino;
                    fromAminoMsg(object: _113.FractionAminoMsg): _113.Fraction;
                    toAminoMsg(message: _113.Fraction): _113.FractionAminoMsg;
                    fromProtoMsg(message: _113.FractionProtoMsg): _113.Fraction;
                    toProto(message: _113.Fraction): Uint8Array;
                    toProtoMsg(message: _113.Fraction): _113.FractionProtoMsg;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _225.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _226.MsgClientImpl;
                    };
                    client: {
                        v1: _227.MsgClientImpl;
                    };
                    connection: {
                        v1: _228.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _93.QueryDenomTraceRequest): Promise<_93.QueryDenomTraceResponse>;
                            denomTraces(request?: _93.QueryDenomTracesRequest): Promise<_93.QueryDenomTracesResponse>;
                            params(request?: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _99.QueryChannelRequest): Promise<_99.QueryChannelResponse>;
                            channels(request?: _99.QueryChannelsRequest): Promise<_99.QueryChannelsResponse>;
                            connectionChannels(request: _99.QueryConnectionChannelsRequest): Promise<_99.QueryConnectionChannelsResponse>;
                            channelClientState(request: _99.QueryChannelClientStateRequest): Promise<_99.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _99.QueryChannelConsensusStateRequest): Promise<_99.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _99.QueryPacketCommitmentRequest): Promise<_99.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _99.QueryPacketCommitmentsRequest): Promise<_99.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _99.QueryPacketReceiptRequest): Promise<_99.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _99.QueryPacketAcknowledgementRequest): Promise<_99.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _99.QueryPacketAcknowledgementsRequest): Promise<_99.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _99.QueryUnreceivedPacketsRequest): Promise<_99.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _99.QueryUnreceivedAcksRequest): Promise<_99.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _99.QueryNextSequenceReceiveRequest): Promise<_99.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _103.QueryClientStateRequest): Promise<_103.QueryClientStateResponse>;
                            clientStates(request?: _103.QueryClientStatesRequest): Promise<_103.QueryClientStatesResponse>;
                            consensusState(request: _103.QueryConsensusStateRequest): Promise<_103.QueryConsensusStateResponse>;
                            consensusStates(request: _103.QueryConsensusStatesRequest): Promise<_103.QueryConsensusStatesResponse>;
                            clientStatus(request: _103.QueryClientStatusRequest): Promise<_103.QueryClientStatusResponse>;
                            clientParams(request?: _103.QueryClientParamsRequest): Promise<_103.QueryClientParamsResponse>;
                            upgradedClientState(request?: _103.QueryUpgradedClientStateRequest): Promise<_103.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _103.QueryUpgradedConsensusStateRequest): Promise<_103.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _108.QueryConnectionRequest): Promise<_108.QueryConnectionResponse>;
                            connections(request?: _108.QueryConnectionsRequest): Promise<_108.QueryConnectionsResponse>;
                            clientConnections(request: _108.QueryClientConnectionsRequest): Promise<_108.QueryClientConnectionsResponse>;
                            connectionClientState(request: _108.QueryConnectionClientStateRequest): Promise<_108.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _108.QueryConnectionConsensusStateRequest): Promise<_108.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _217.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _218.LCDQueryClient;
                    };
                    client: {
                        v1: _219.LCDQueryClient;
                    };
                    connection: {
                        v1: _220.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
