import * as _0 from "./beacon/v1/beacon";
import * as _1 from "./beacon/v1/genesis";
import * as _2 from "./beacon/v1/query";
import * as _3 from "./beacon/v1/tx";
import * as _4 from "./enterprise/v1/enterprise";
import * as _5 from "./enterprise/v1/genesis";
import * as _6 from "./enterprise/v1/query";
import * as _7 from "./enterprise/v1/tx";
import * as _8 from "./stream/v1/genesis";
import * as _9 from "./stream/v1/params";
import * as _10 from "./stream/v1/query";
import * as _11 from "./stream/v1/stream";
import * as _12 from "./stream/v1/tx";
import * as _13 from "./wrkchain/v1/genesis";
import * as _14 from "./wrkchain/v1/query";
import * as _15 from "./wrkchain/v1/tx";
import * as _16 from "./wrkchain/v1/wrkchain";
import * as _133 from "./beacon/v1/query.lcd";
import * as _134 from "./enterprise/v1/query.lcd";
import * as _135 from "./stream/v1/query.lcd";
import * as _136 from "./wrkchain/v1/query.lcd";
import * as _137 from "./beacon/v1/query.rpc.Query";
import * as _138 from "./enterprise/v1/query.rpc.Query";
import * as _139 from "./stream/v1/query.rpc.Query";
import * as _140 from "./wrkchain/v1/query.rpc.Query";
import * as _141 from "./beacon/v1/tx.rpc.msg";
import * as _142 from "./enterprise/v1/tx.rpc.msg";
import * as _143 from "./stream/v1/tx.rpc.msg";
import * as _144 from "./wrkchain/v1/tx.rpc.msg";
export declare namespace mainchain {
    namespace beacon {
        const v1: {
            MsgClientImpl: typeof _141.MsgClientImpl;
            QueryClientImpl: typeof _137.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                beacon(request: _2.QueryBeaconRequest): Promise<_2.QueryBeaconResponse>;
                beaconTimestamp(request: _2.QueryBeaconTimestampRequest): Promise<_2.QueryBeaconTimestampResponse>;
                beaconsFiltered(request: _2.QueryBeaconsFilteredRequest): Promise<_2.QueryBeaconsFilteredResponse>;
                beaconStorage(request: _2.QueryBeaconStorageRequest): Promise<_2.QueryBeaconStorageResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient | undefined) => {
                useParams: <TData = _2.QueryParamsResponse>({ request, options }: _137.UseParamsQuery<TData>) => any;
                useBeacon: <TData = _2.QueryBeaconResponse>({ request, options }: _137.UseBeaconQuery<TData>) => any;
                useBeaconTimestamp: <TData = _2.QueryBeaconTimestampResponse>({ request, options }: _137.UseBeaconTimestampQuery<TData>) => any;
                useBeaconsFiltered: <TData = _2.QueryBeaconsFilteredResponse>({ request, options }: _137.UseBeaconsFilteredQuery<TData>) => any;
                useBeaconStorage: <TData = _2.QueryBeaconStorageResponse>({ request, options }: _137.UseBeaconStorageQuery<TData>) => any;
            };
            LCDQueryClient: typeof _133.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerBeacon(value: _3.MsgRegisterBeacon): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    recordBeaconTimestamp(value: _3.MsgRecordBeaconTimestamp): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    purchaseBeaconStateStorage(value: _3.MsgPurchaseBeaconStateStorage): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _3.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerBeacon(value: _3.MsgRegisterBeacon): {
                        typeUrl: string;
                        value: _3.MsgRegisterBeacon;
                    };
                    recordBeaconTimestamp(value: _3.MsgRecordBeaconTimestamp): {
                        typeUrl: string;
                        value: _3.MsgRecordBeaconTimestamp;
                    };
                    purchaseBeaconStateStorage(value: _3.MsgPurchaseBeaconStateStorage): {
                        typeUrl: string;
                        value: _3.MsgPurchaseBeaconStateStorage;
                    };
                    updateParams(value: _3.MsgUpdateParams): {
                        typeUrl: string;
                        value: _3.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    registerBeacon(value: _3.MsgRegisterBeacon): {
                        typeUrl: string;
                        value: _3.MsgRegisterBeacon;
                    };
                    recordBeaconTimestamp(value: _3.MsgRecordBeaconTimestamp): {
                        typeUrl: string;
                        value: _3.MsgRecordBeaconTimestamp;
                    };
                    purchaseBeaconStateStorage(value: _3.MsgPurchaseBeaconStateStorage): {
                        typeUrl: string;
                        value: _3.MsgPurchaseBeaconStateStorage;
                    };
                    updateParams(value: _3.MsgUpdateParams): {
                        typeUrl: string;
                        value: _3.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/mainchain.beacon.v1.MsgRegisterBeacon": {
                    aminoType: string;
                    toAmino: (message: _3.MsgRegisterBeacon) => _3.MsgRegisterBeaconAmino;
                    fromAmino: (object: _3.MsgRegisterBeaconAmino) => _3.MsgRegisterBeacon;
                };
                "/mainchain.beacon.v1.MsgRecordBeaconTimestamp": {
                    aminoType: string;
                    toAmino: (message: _3.MsgRecordBeaconTimestamp) => _3.MsgRecordBeaconTimestampAmino;
                    fromAmino: (object: _3.MsgRecordBeaconTimestampAmino) => _3.MsgRecordBeaconTimestamp;
                };
                "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage": {
                    aminoType: string;
                    toAmino: (message: _3.MsgPurchaseBeaconStateStorage) => _3.MsgPurchaseBeaconStateStorageAmino;
                    fromAmino: (object: _3.MsgPurchaseBeaconStateStorageAmino) => _3.MsgPurchaseBeaconStateStorage;
                };
                "/mainchain.beacon.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _3.MsgUpdateParams) => _3.MsgUpdateParamsAmino;
                    fromAmino: (object: _3.MsgUpdateParamsAmino) => _3.MsgUpdateParams;
                };
            };
            MsgRegisterBeacon: {
                typeUrl: string;
                is(o: any): o is _3.MsgRegisterBeacon;
                isSDK(o: any): o is _3.MsgRegisterBeaconSDKType;
                isAmino(o: any): o is _3.MsgRegisterBeaconAmino;
                encode(message: _3.MsgRegisterBeacon, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _3.MsgRegisterBeacon;
                fromPartial(object: Partial<_3.MsgRegisterBeacon>): _3.MsgRegisterBeacon;
                fromAmino(object: _3.MsgRegisterBeaconAmino): _3.MsgRegisterBeacon;
                toAmino(message: _3.MsgRegisterBeacon): _3.MsgRegisterBeaconAmino;
                fromAminoMsg(object: _3.MsgRegisterBeaconAminoMsg): _3.MsgRegisterBeacon;
                fromProtoMsg(message: _3.MsgRegisterBeaconProtoMsg): _3.MsgRegisterBeacon;
                toProto(message: _3.MsgRegisterBeacon): Uint8Array;
                toProtoMsg(message: _3.MsgRegisterBeacon): _3.MsgRegisterBeaconProtoMsg;
            };
            MsgRegisterBeaconResponse: {
                typeUrl: string;
                is(o: any): o is _3.MsgRegisterBeaconResponse;
                isSDK(o: any): o is _3.MsgRegisterBeaconResponseSDKType;
                isAmino(o: any): o is _3.MsgRegisterBeaconResponseAmino;
                encode(message: _3.MsgRegisterBeaconResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _3.MsgRegisterBeaconResponse;
                fromPartial(object: Partial<_3.MsgRegisterBeaconResponse>): _3.MsgRegisterBeaconResponse;
                fromAmino(object: _3.MsgRegisterBeaconResponseAmino): _3.MsgRegisterBeaconResponse;
                toAmino(message: _3.MsgRegisterBeaconResponse): _3.MsgRegisterBeaconResponseAmino;
                fromAminoMsg(object: _3.MsgRegisterBeaconResponseAminoMsg): _3.MsgRegisterBeaconResponse;
                fromProtoMsg(message: _3.MsgRegisterBeaconResponseProtoMsg): _3.MsgRegisterBeaconResponse;
                toProto(message: _3.MsgRegisterBeaconResponse): Uint8Array;
                toProtoMsg(message: _3.MsgRegisterBeaconResponse): _3.MsgRegisterBeaconResponseProtoMsg;
            };
            MsgRecordBeaconTimestamp: {
                typeUrl: string;
                is(o: any): o is _3.MsgRecordBeaconTimestamp;
                isSDK(o: any): o is _3.MsgRecordBeaconTimestampSDKType;
                isAmino(o: any): o is _3.MsgRecordBeaconTimestampAmino;
                encode(message: _3.MsgRecordBeaconTimestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _3.MsgRecordBeaconTimestamp;
                fromPartial(object: Partial<_3.MsgRecordBeaconTimestamp>): _3.MsgRecordBeaconTimestamp;
                fromAmino(object: _3.MsgRecordBeaconTimestampAmino): _3.MsgRecordBeaconTimestamp;
                toAmino(message: _3.MsgRecordBeaconTimestamp): _3.MsgRecordBeaconTimestampAmino;
                fromAminoMsg(object: _3.MsgRecordBeaconTimestampAminoMsg): _3.MsgRecordBeaconTimestamp;
                fromProtoMsg(message: _3.MsgRecordBeaconTimestampProtoMsg): _3.MsgRecordBeaconTimestamp;
                toProto(message: _3.MsgRecordBeaconTimestamp): Uint8Array;
                toProtoMsg(message: _3.MsgRecordBeaconTimestamp): _3.MsgRecordBeaconTimestampProtoMsg;
            };
            MsgRecordBeaconTimestampResponse: {
                typeUrl: string;
                is(o: any): o is _3.MsgRecordBeaconTimestampResponse;
                isSDK(o: any): o is _3.MsgRecordBeaconTimestampResponseSDKType;
                isAmino(o: any): o is _3.MsgRecordBeaconTimestampResponseAmino;
                encode(message: _3.MsgRecordBeaconTimestampResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _3.MsgRecordBeaconTimestampResponse;
                fromPartial(object: Partial<_3.MsgRecordBeaconTimestampResponse>): _3.MsgRecordBeaconTimestampResponse;
                fromAmino(object: _3.MsgRecordBeaconTimestampResponseAmino): _3.MsgRecordBeaconTimestampResponse;
                toAmino(message: _3.MsgRecordBeaconTimestampResponse): _3.MsgRecordBeaconTimestampResponseAmino;
                fromAminoMsg(object: _3.MsgRecordBeaconTimestampResponseAminoMsg): _3.MsgRecordBeaconTimestampResponse;
                fromProtoMsg(message: _3.MsgRecordBeaconTimestampResponseProtoMsg): _3.MsgRecordBeaconTimestampResponse;
                toProto(message: _3.MsgRecordBeaconTimestampResponse): Uint8Array;
                toProtoMsg(message: _3.MsgRecordBeaconTimestampResponse): _3.MsgRecordBeaconTimestampResponseProtoMsg;
            };
            MsgPurchaseBeaconStateStorage: {
                typeUrl: string;
                is(o: any): o is _3.MsgPurchaseBeaconStateStorage;
                isSDK(o: any): o is _3.MsgPurchaseBeaconStateStorageSDKType;
                isAmino(o: any): o is _3.MsgPurchaseBeaconStateStorageAmino;
                encode(message: _3.MsgPurchaseBeaconStateStorage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _3.MsgPurchaseBeaconStateStorage;
                fromPartial(object: Partial<_3.MsgPurchaseBeaconStateStorage>): _3.MsgPurchaseBeaconStateStorage;
                fromAmino(object: _3.MsgPurchaseBeaconStateStorageAmino): _3.MsgPurchaseBeaconStateStorage;
                toAmino(message: _3.MsgPurchaseBeaconStateStorage): _3.MsgPurchaseBeaconStateStorageAmino;
                fromAminoMsg(object: _3.MsgPurchaseBeaconStateStorageAminoMsg): _3.MsgPurchaseBeaconStateStorage;
                fromProtoMsg(message: _3.MsgPurchaseBeaconStateStorageProtoMsg): _3.MsgPurchaseBeaconStateStorage;
                toProto(message: _3.MsgPurchaseBeaconStateStorage): Uint8Array;
                toProtoMsg(message: _3.MsgPurchaseBeaconStateStorage): _3.MsgPurchaseBeaconStateStorageProtoMsg;
            };
            MsgPurchaseBeaconStateStorageResponse: {
                typeUrl: string;
                is(o: any): o is _3.MsgPurchaseBeaconStateStorageResponse;
                isSDK(o: any): o is _3.MsgPurchaseBeaconStateStorageResponseSDKType;
                isAmino(o: any): o is _3.MsgPurchaseBeaconStateStorageResponseAmino;
                encode(message: _3.MsgPurchaseBeaconStateStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _3.MsgPurchaseBeaconStateStorageResponse;
                fromPartial(object: Partial<_3.MsgPurchaseBeaconStateStorageResponse>): _3.MsgPurchaseBeaconStateStorageResponse;
                fromAmino(object: _3.MsgPurchaseBeaconStateStorageResponseAmino): _3.MsgPurchaseBeaconStateStorageResponse;
                toAmino(message: _3.MsgPurchaseBeaconStateStorageResponse): _3.MsgPurchaseBeaconStateStorageResponseAmino;
                fromAminoMsg(object: _3.MsgPurchaseBeaconStateStorageResponseAminoMsg): _3.MsgPurchaseBeaconStateStorageResponse;
                fromProtoMsg(message: _3.MsgPurchaseBeaconStateStorageResponseProtoMsg): _3.MsgPurchaseBeaconStateStorageResponse;
                toProto(message: _3.MsgPurchaseBeaconStateStorageResponse): Uint8Array;
                toProtoMsg(message: _3.MsgPurchaseBeaconStateStorageResponse): _3.MsgPurchaseBeaconStateStorageResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _3.MsgUpdateParams;
                isSDK(o: any): o is _3.MsgUpdateParamsSDKType;
                isAmino(o: any): o is _3.MsgUpdateParamsAmino;
                encode(message: _3.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _3.MsgUpdateParams;
                fromPartial(object: Partial<_3.MsgUpdateParams>): _3.MsgUpdateParams;
                fromAmino(object: _3.MsgUpdateParamsAmino): _3.MsgUpdateParams;
                toAmino(message: _3.MsgUpdateParams): _3.MsgUpdateParamsAmino;
                fromAminoMsg(object: _3.MsgUpdateParamsAminoMsg): _3.MsgUpdateParams;
                toAminoMsg(message: _3.MsgUpdateParams): _3.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _3.MsgUpdateParamsProtoMsg): _3.MsgUpdateParams;
                toProto(message: _3.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _3.MsgUpdateParams): _3.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                is(o: any): o is _3.MsgUpdateParamsResponse;
                isSDK(o: any): o is _3.MsgUpdateParamsResponseSDKType;
                isAmino(o: any): o is _3.MsgUpdateParamsResponseAmino;
                encode(_: _3.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _3.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_3.MsgUpdateParamsResponse>): _3.MsgUpdateParamsResponse;
                fromAmino(_: _3.MsgUpdateParamsResponseAmino): _3.MsgUpdateParamsResponse;
                toAmino(_: _3.MsgUpdateParamsResponse): _3.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _3.MsgUpdateParamsResponseAminoMsg): _3.MsgUpdateParamsResponse;
                fromProtoMsg(message: _3.MsgUpdateParamsResponseProtoMsg): _3.MsgUpdateParamsResponse;
                toProto(message: _3.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _3.MsgUpdateParamsResponse): _3.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                is(o: any): o is _2.QueryParamsRequest;
                isSDK(o: any): o is _2.QueryParamsRequestSDKType;
                isAmino(o: any): o is _2.QueryParamsRequestAmino;
                encode(_: _2.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _2.QueryParamsRequest;
                fromPartial(_: Partial<_2.QueryParamsRequest>): _2.QueryParamsRequest;
                fromAmino(_: _2.QueryParamsRequestAmino): _2.QueryParamsRequest;
                toAmino(_: _2.QueryParamsRequest): _2.QueryParamsRequestAmino;
                fromAminoMsg(object: _2.QueryParamsRequestAminoMsg): _2.QueryParamsRequest;
                fromProtoMsg(message: _2.QueryParamsRequestProtoMsg): _2.QueryParamsRequest;
                toProto(message: _2.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _2.QueryParamsRequest): _2.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                is(o: any): o is _2.QueryParamsResponse;
                isSDK(o: any): o is _2.QueryParamsResponseSDKType;
                isAmino(o: any): o is _2.QueryParamsResponseAmino;
                encode(message: _2.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _2.QueryParamsResponse;
                fromPartial(object: Partial<_2.QueryParamsResponse>): _2.QueryParamsResponse;
                fromAmino(object: _2.QueryParamsResponseAmino): _2.QueryParamsResponse;
                toAmino(message: _2.QueryParamsResponse): _2.QueryParamsResponseAmino;
                fromAminoMsg(object: _2.QueryParamsResponseAminoMsg): _2.QueryParamsResponse;
                fromProtoMsg(message: _2.QueryParamsResponseProtoMsg): _2.QueryParamsResponse;
                toProto(message: _2.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _2.QueryParamsResponse): _2.QueryParamsResponseProtoMsg;
            };
            QueryBeaconRequest: {
                typeUrl: string;
                is(o: any): o is _2.QueryBeaconRequest;
                isSDK(o: any): o is _2.QueryBeaconRequestSDKType;
                isAmino(o: any): o is _2.QueryBeaconRequestAmino;
                encode(message: _2.QueryBeaconRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _2.QueryBeaconRequest;
                fromPartial(object: Partial<_2.QueryBeaconRequest>): _2.QueryBeaconRequest;
                fromAmino(object: _2.QueryBeaconRequestAmino): _2.QueryBeaconRequest;
                toAmino(message: _2.QueryBeaconRequest): _2.QueryBeaconRequestAmino;
                fromAminoMsg(object: _2.QueryBeaconRequestAminoMsg): _2.QueryBeaconRequest;
                fromProtoMsg(message: _2.QueryBeaconRequestProtoMsg): _2.QueryBeaconRequest;
                toProto(message: _2.QueryBeaconRequest): Uint8Array;
                toProtoMsg(message: _2.QueryBeaconRequest): _2.QueryBeaconRequestProtoMsg;
            };
            QueryBeaconResponse: {
                typeUrl: string;
                is(o: any): o is _2.QueryBeaconResponse;
                isSDK(o: any): o is _2.QueryBeaconResponseSDKType;
                isAmino(o: any): o is _2.QueryBeaconResponseAmino;
                encode(message: _2.QueryBeaconResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _2.QueryBeaconResponse;
                fromPartial(object: Partial<_2.QueryBeaconResponse>): _2.QueryBeaconResponse;
                fromAmino(object: _2.QueryBeaconResponseAmino): _2.QueryBeaconResponse;
                toAmino(message: _2.QueryBeaconResponse): _2.QueryBeaconResponseAmino;
                fromAminoMsg(object: _2.QueryBeaconResponseAminoMsg): _2.QueryBeaconResponse;
                fromProtoMsg(message: _2.QueryBeaconResponseProtoMsg): _2.QueryBeaconResponse;
                toProto(message: _2.QueryBeaconResponse): Uint8Array;
                toProtoMsg(message: _2.QueryBeaconResponse): _2.QueryBeaconResponseProtoMsg;
            };
            QueryBeaconTimestampRequest: {
                typeUrl: string;
                is(o: any): o is _2.QueryBeaconTimestampRequest;
                isSDK(o: any): o is _2.QueryBeaconTimestampRequestSDKType;
                isAmino(o: any): o is _2.QueryBeaconTimestampRequestAmino;
                encode(message: _2.QueryBeaconTimestampRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _2.QueryBeaconTimestampRequest;
                fromPartial(object: Partial<_2.QueryBeaconTimestampRequest>): _2.QueryBeaconTimestampRequest;
                fromAmino(object: _2.QueryBeaconTimestampRequestAmino): _2.QueryBeaconTimestampRequest;
                toAmino(message: _2.QueryBeaconTimestampRequest): _2.QueryBeaconTimestampRequestAmino;
                fromAminoMsg(object: _2.QueryBeaconTimestampRequestAminoMsg): _2.QueryBeaconTimestampRequest;
                fromProtoMsg(message: _2.QueryBeaconTimestampRequestProtoMsg): _2.QueryBeaconTimestampRequest;
                toProto(message: _2.QueryBeaconTimestampRequest): Uint8Array;
                toProtoMsg(message: _2.QueryBeaconTimestampRequest): _2.QueryBeaconTimestampRequestProtoMsg;
            };
            QueryBeaconTimestampResponse: {
                typeUrl: string;
                is(o: any): o is _2.QueryBeaconTimestampResponse;
                isSDK(o: any): o is _2.QueryBeaconTimestampResponseSDKType;
                isAmino(o: any): o is _2.QueryBeaconTimestampResponseAmino;
                encode(message: _2.QueryBeaconTimestampResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _2.QueryBeaconTimestampResponse;
                fromPartial(object: Partial<_2.QueryBeaconTimestampResponse>): _2.QueryBeaconTimestampResponse;
                fromAmino(object: _2.QueryBeaconTimestampResponseAmino): _2.QueryBeaconTimestampResponse;
                toAmino(message: _2.QueryBeaconTimestampResponse): _2.QueryBeaconTimestampResponseAmino;
                fromAminoMsg(object: _2.QueryBeaconTimestampResponseAminoMsg): _2.QueryBeaconTimestampResponse;
                fromProtoMsg(message: _2.QueryBeaconTimestampResponseProtoMsg): _2.QueryBeaconTimestampResponse;
                toProto(message: _2.QueryBeaconTimestampResponse): Uint8Array;
                toProtoMsg(message: _2.QueryBeaconTimestampResponse): _2.QueryBeaconTimestampResponseProtoMsg;
            };
            QueryBeaconsFilteredRequest: {
                typeUrl: string;
                is(o: any): o is _2.QueryBeaconsFilteredRequest;
                isSDK(o: any): o is _2.QueryBeaconsFilteredRequestSDKType;
                isAmino(o: any): o is _2.QueryBeaconsFilteredRequestAmino;
                encode(message: _2.QueryBeaconsFilteredRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _2.QueryBeaconsFilteredRequest;
                fromPartial(object: Partial<_2.QueryBeaconsFilteredRequest>): _2.QueryBeaconsFilteredRequest;
                fromAmino(object: _2.QueryBeaconsFilteredRequestAmino): _2.QueryBeaconsFilteredRequest;
                toAmino(message: _2.QueryBeaconsFilteredRequest): _2.QueryBeaconsFilteredRequestAmino;
                fromAminoMsg(object: _2.QueryBeaconsFilteredRequestAminoMsg): _2.QueryBeaconsFilteredRequest;
                fromProtoMsg(message: _2.QueryBeaconsFilteredRequestProtoMsg): _2.QueryBeaconsFilteredRequest;
                toProto(message: _2.QueryBeaconsFilteredRequest): Uint8Array;
                toProtoMsg(message: _2.QueryBeaconsFilteredRequest): _2.QueryBeaconsFilteredRequestProtoMsg;
            };
            QueryBeaconsFilteredResponse: {
                typeUrl: string;
                is(o: any): o is _2.QueryBeaconsFilteredResponse;
                isSDK(o: any): o is _2.QueryBeaconsFilteredResponseSDKType;
                isAmino(o: any): o is _2.QueryBeaconsFilteredResponseAmino;
                encode(message: _2.QueryBeaconsFilteredResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _2.QueryBeaconsFilteredResponse;
                fromPartial(object: Partial<_2.QueryBeaconsFilteredResponse>): _2.QueryBeaconsFilteredResponse;
                fromAmino(object: _2.QueryBeaconsFilteredResponseAmino): _2.QueryBeaconsFilteredResponse;
                toAmino(message: _2.QueryBeaconsFilteredResponse): _2.QueryBeaconsFilteredResponseAmino;
                fromAminoMsg(object: _2.QueryBeaconsFilteredResponseAminoMsg): _2.QueryBeaconsFilteredResponse;
                fromProtoMsg(message: _2.QueryBeaconsFilteredResponseProtoMsg): _2.QueryBeaconsFilteredResponse;
                toProto(message: _2.QueryBeaconsFilteredResponse): Uint8Array;
                toProtoMsg(message: _2.QueryBeaconsFilteredResponse): _2.QueryBeaconsFilteredResponseProtoMsg;
            };
            QueryBeaconStorageRequest: {
                typeUrl: string;
                is(o: any): o is _2.QueryBeaconStorageRequest;
                isSDK(o: any): o is _2.QueryBeaconStorageRequestSDKType;
                isAmino(o: any): o is _2.QueryBeaconStorageRequestAmino;
                encode(message: _2.QueryBeaconStorageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _2.QueryBeaconStorageRequest;
                fromPartial(object: Partial<_2.QueryBeaconStorageRequest>): _2.QueryBeaconStorageRequest;
                fromAmino(object: _2.QueryBeaconStorageRequestAmino): _2.QueryBeaconStorageRequest;
                toAmino(message: _2.QueryBeaconStorageRequest): _2.QueryBeaconStorageRequestAmino;
                fromAminoMsg(object: _2.QueryBeaconStorageRequestAminoMsg): _2.QueryBeaconStorageRequest;
                fromProtoMsg(message: _2.QueryBeaconStorageRequestProtoMsg): _2.QueryBeaconStorageRequest;
                toProto(message: _2.QueryBeaconStorageRequest): Uint8Array;
                toProtoMsg(message: _2.QueryBeaconStorageRequest): _2.QueryBeaconStorageRequestProtoMsg;
            };
            QueryBeaconStorageResponse: {
                typeUrl: string;
                is(o: any): o is _2.QueryBeaconStorageResponse;
                isSDK(o: any): o is _2.QueryBeaconStorageResponseSDKType;
                isAmino(o: any): o is _2.QueryBeaconStorageResponseAmino;
                encode(message: _2.QueryBeaconStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _2.QueryBeaconStorageResponse;
                fromPartial(object: Partial<_2.QueryBeaconStorageResponse>): _2.QueryBeaconStorageResponse;
                fromAmino(object: _2.QueryBeaconStorageResponseAmino): _2.QueryBeaconStorageResponse;
                toAmino(message: _2.QueryBeaconStorageResponse): _2.QueryBeaconStorageResponseAmino;
                fromAminoMsg(object: _2.QueryBeaconStorageResponseAminoMsg): _2.QueryBeaconStorageResponse;
                fromProtoMsg(message: _2.QueryBeaconStorageResponseProtoMsg): _2.QueryBeaconStorageResponse;
                toProto(message: _2.QueryBeaconStorageResponse): Uint8Array;
                toProtoMsg(message: _2.QueryBeaconStorageResponse): _2.QueryBeaconStorageResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                is(o: any): o is _1.GenesisState;
                isSDK(o: any): o is _1.GenesisStateSDKType;
                isAmino(o: any): o is _1.GenesisStateAmino;
                encode(message: _1.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _1.GenesisState;
                fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
                fromAmino(object: _1.GenesisStateAmino): _1.GenesisState;
                toAmino(message: _1.GenesisState): _1.GenesisStateAmino;
                fromAminoMsg(object: _1.GenesisStateAminoMsg): _1.GenesisState;
                fromProtoMsg(message: _1.GenesisStateProtoMsg): _1.GenesisState;
                toProto(message: _1.GenesisState): Uint8Array;
                toProtoMsg(message: _1.GenesisState): _1.GenesisStateProtoMsg;
            };
            BeaconTimestampGenesisExport: {
                typeUrl: string;
                is(o: any): o is _1.BeaconTimestampGenesisExport;
                isSDK(o: any): o is _1.BeaconTimestampGenesisExportSDKType;
                isAmino(o: any): o is _1.BeaconTimestampGenesisExportAmino;
                encode(message: _1.BeaconTimestampGenesisExport, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _1.BeaconTimestampGenesisExport;
                fromPartial(object: Partial<_1.BeaconTimestampGenesisExport>): _1.BeaconTimestampGenesisExport;
                fromAmino(object: _1.BeaconTimestampGenesisExportAmino): _1.BeaconTimestampGenesisExport;
                toAmino(message: _1.BeaconTimestampGenesisExport): _1.BeaconTimestampGenesisExportAmino;
                fromAminoMsg(object: _1.BeaconTimestampGenesisExportAminoMsg): _1.BeaconTimestampGenesisExport;
                fromProtoMsg(message: _1.BeaconTimestampGenesisExportProtoMsg): _1.BeaconTimestampGenesisExport;
                toProto(message: _1.BeaconTimestampGenesisExport): Uint8Array;
                toProtoMsg(message: _1.BeaconTimestampGenesisExport): _1.BeaconTimestampGenesisExportProtoMsg;
            };
            BeaconExport: {
                typeUrl: string;
                is(o: any): o is _1.BeaconExport;
                isSDK(o: any): o is _1.BeaconExportSDKType;
                isAmino(o: any): o is _1.BeaconExportAmino;
                encode(message: _1.BeaconExport, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _1.BeaconExport;
                fromPartial(object: Partial<_1.BeaconExport>): _1.BeaconExport;
                fromAmino(object: _1.BeaconExportAmino): _1.BeaconExport;
                toAmino(message: _1.BeaconExport): _1.BeaconExportAmino;
                fromAminoMsg(object: _1.BeaconExportAminoMsg): _1.BeaconExport;
                fromProtoMsg(message: _1.BeaconExportProtoMsg): _1.BeaconExport;
                toProto(message: _1.BeaconExport): Uint8Array;
                toProtoMsg(message: _1.BeaconExport): _1.BeaconExportProtoMsg;
            };
            Beacon: {
                typeUrl: string;
                is(o: any): o is _0.Beacon;
                isSDK(o: any): o is _0.BeaconSDKType;
                isAmino(o: any): o is _0.BeaconAmino;
                encode(message: _0.Beacon, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _0.Beacon;
                fromPartial(object: Partial<_0.Beacon>): _0.Beacon;
                fromAmino(object: _0.BeaconAmino): _0.Beacon;
                toAmino(message: _0.Beacon): _0.BeaconAmino;
                fromAminoMsg(object: _0.BeaconAminoMsg): _0.Beacon;
                fromProtoMsg(message: _0.BeaconProtoMsg): _0.Beacon;
                toProto(message: _0.Beacon): Uint8Array;
                toProtoMsg(message: _0.Beacon): _0.BeaconProtoMsg;
            };
            BeaconStorageLimit: {
                typeUrl: string;
                is(o: any): o is _0.BeaconStorageLimit;
                isSDK(o: any): o is _0.BeaconStorageLimitSDKType;
                isAmino(o: any): o is _0.BeaconStorageLimitAmino;
                encode(message: _0.BeaconStorageLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _0.BeaconStorageLimit;
                fromPartial(object: Partial<_0.BeaconStorageLimit>): _0.BeaconStorageLimit;
                fromAmino(object: _0.BeaconStorageLimitAmino): _0.BeaconStorageLimit;
                toAmino(message: _0.BeaconStorageLimit): _0.BeaconStorageLimitAmino;
                fromAminoMsg(object: _0.BeaconStorageLimitAminoMsg): _0.BeaconStorageLimit;
                fromProtoMsg(message: _0.BeaconStorageLimitProtoMsg): _0.BeaconStorageLimit;
                toProto(message: _0.BeaconStorageLimit): Uint8Array;
                toProtoMsg(message: _0.BeaconStorageLimit): _0.BeaconStorageLimitProtoMsg;
            };
            BeaconTimestamp: {
                typeUrl: string;
                is(o: any): o is _0.BeaconTimestamp;
                isSDK(o: any): o is _0.BeaconTimestampSDKType;
                isAmino(o: any): o is _0.BeaconTimestampAmino;
                encode(message: _0.BeaconTimestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _0.BeaconTimestamp;
                fromPartial(object: Partial<_0.BeaconTimestamp>): _0.BeaconTimestamp;
                fromAmino(object: _0.BeaconTimestampAmino): _0.BeaconTimestamp;
                toAmino(message: _0.BeaconTimestamp): _0.BeaconTimestampAmino;
                fromAminoMsg(object: _0.BeaconTimestampAminoMsg): _0.BeaconTimestamp;
                fromProtoMsg(message: _0.BeaconTimestampProtoMsg): _0.BeaconTimestamp;
                toProto(message: _0.BeaconTimestamp): Uint8Array;
                toProtoMsg(message: _0.BeaconTimestamp): _0.BeaconTimestampProtoMsg;
            };
            Params: {
                typeUrl: string;
                is(o: any): o is _0.Params;
                isSDK(o: any): o is _0.ParamsSDKType;
                isAmino(o: any): o is _0.ParamsAmino;
                encode(message: _0.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _0.Params;
                fromPartial(object: Partial<_0.Params>): _0.Params;
                fromAmino(object: _0.ParamsAmino): _0.Params;
                toAmino(message: _0.Params): _0.ParamsAmino;
                fromAminoMsg(object: _0.ParamsAminoMsg): _0.Params;
                fromProtoMsg(message: _0.ParamsProtoMsg): _0.Params;
                toProto(message: _0.Params): Uint8Array;
                toProtoMsg(message: _0.Params): _0.ParamsProtoMsg;
            };
        };
    }
    namespace enterprise {
        const v1: {
            MsgClientImpl: typeof _142.MsgClientImpl;
            QueryClientImpl: typeof _138.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                enterpriseUndPurchaseOrder(request: _6.QueryEnterpriseUndPurchaseOrderRequest): Promise<_6.QueryEnterpriseUndPurchaseOrderResponse>;
                enterpriseUndPurchaseOrders(request: _6.QueryEnterpriseUndPurchaseOrdersRequest): Promise<_6.QueryEnterpriseUndPurchaseOrdersResponse>;
                lockedUndByAddress(request: _6.QueryLockedUndByAddressRequest): Promise<_6.QueryLockedUndByAddressResponse>;
                totalLocked(request?: _6.QueryTotalLockedRequest): Promise<_6.QueryTotalLockedResponse>;
                totalUnlocked(request?: _6.QueryTotalUnlockedRequest): Promise<_6.QueryTotalUnlockedResponse>;
                enterpriseSupply(request?: _6.QueryEnterpriseSupplyRequest): Promise<_6.QueryEnterpriseSupplyResponse>;
                totalSupply(request?: _6.QueryTotalSupplyRequest): Promise<_6.QueryTotalSupplyResponse>;
                supplyOf(request: _6.QuerySupplyOfRequest): Promise<_6.QuerySupplyOfResponse>;
                totalSupplyOverwrite(request?: _6.QueryTotalSupplyRequest): Promise<_6.QueryTotalSupplyResponse>;
                supplyOfOverwrite(request: _6.QuerySupplyOfRequest): Promise<_6.QuerySupplyOfResponse>;
                whitelist(request?: _6.QueryWhitelistRequest): Promise<_6.QueryWhitelistResponse>;
                whitelisted(request: _6.QueryWhitelistedRequest): Promise<_6.QueryWhitelistedResponse>;
                enterpriseAccount(request: _6.QueryEnterpriseAccountRequest): Promise<_6.QueryEnterpriseAccountResponse>;
                totalSpentEFUND(request?: _6.QueryTotalSpentEFUNDRequest): Promise<_6.QueryTotalSpentEFUNDResponse>;
                spentEFUNDByAddress(request: _6.QuerySpentEFUNDByAddressRequest): Promise<_6.QuerySpentEFUNDByAddressResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient | undefined) => {
                useParams: <TData = _6.QueryParamsResponse>({ request, options }: _138.UseParamsQuery<TData>) => any;
                useEnterpriseUndPurchaseOrder: <TData = _6.QueryEnterpriseUndPurchaseOrderResponse>({ request, options }: _138.UseEnterpriseUndPurchaseOrderQuery<TData>) => any;
                useEnterpriseUndPurchaseOrders: <TData = _6.QueryEnterpriseUndPurchaseOrdersResponse>({ request, options }: _138.UseEnterpriseUndPurchaseOrdersQuery<TData>) => any;
                useLockedUndByAddress: <TData = _6.QueryLockedUndByAddressResponse>({ request, options }: _138.UseLockedUndByAddressQuery<TData>) => any;
                useTotalLocked: <TData = _6.QueryTotalLockedResponse>({ request, options }: _138.UseTotalLockedQuery<TData>) => any;
                useTotalUnlocked: <TData = _6.QueryTotalUnlockedResponse>({ request, options }: _138.UseTotalUnlockedQuery<TData>) => any;
                useEnterpriseSupply: <TData = _6.QueryEnterpriseSupplyResponse>({ request, options }: _138.UseEnterpriseSupplyQuery<TData>) => any;
                useTotalSupply: <TData = _6.QueryTotalSupplyResponse>({ request, options }: _138.UseTotalSupplyQuery<TData>) => any;
                useSupplyOf: <TData = _6.QuerySupplyOfResponse>({ request, options }: _138.UseSupplyOfQuery<TData>) => any;
                useTotalSupplyOverwrite: <TData = _6.QueryTotalSupplyResponse>({ request, options }: _138.UseTotalSupplyOverwriteQuery<TData>) => any;
                useSupplyOfOverwrite: <TData = _6.QuerySupplyOfResponse>({ request, options }: _138.UseSupplyOfOverwriteQuery<TData>) => any;
                useWhitelist: <TData = _6.QueryWhitelistResponse>({ request, options }: _138.UseWhitelistQuery<TData>) => any;
                useWhitelisted: <TData = _6.QueryWhitelistedResponse>({ request, options }: _138.UseWhitelistedQuery<TData>) => any;
                useEnterpriseAccount: <TData = _6.QueryEnterpriseAccountResponse>({ request, options }: _138.UseEnterpriseAccountQuery<TData>) => any;
                useTotalSpentEFUND: <TData = _6.QueryTotalSpentEFUNDResponse>({ request, options }: _138.UseTotalSpentEFUNDQuery<TData>) => any;
                useSpentEFUNDByAddress: <TData = _6.QuerySpentEFUNDByAddressResponse>({ request, options }: _138.UseSpentEFUNDByAddressQuery<TData>) => any;
            };
            LCDQueryClient: typeof _134.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    undPurchaseOrder(value: _7.MsgUndPurchaseOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    processUndPurchaseOrder(value: _7.MsgProcessUndPurchaseOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    whitelistAddress(value: _7.MsgWhitelistAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _7.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    undPurchaseOrder(value: _7.MsgUndPurchaseOrder): {
                        typeUrl: string;
                        value: _7.MsgUndPurchaseOrder;
                    };
                    processUndPurchaseOrder(value: _7.MsgProcessUndPurchaseOrder): {
                        typeUrl: string;
                        value: _7.MsgProcessUndPurchaseOrder;
                    };
                    whitelistAddress(value: _7.MsgWhitelistAddress): {
                        typeUrl: string;
                        value: _7.MsgWhitelistAddress;
                    };
                    updateParams(value: _7.MsgUpdateParams): {
                        typeUrl: string;
                        value: _7.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    undPurchaseOrder(value: _7.MsgUndPurchaseOrder): {
                        typeUrl: string;
                        value: _7.MsgUndPurchaseOrder;
                    };
                    processUndPurchaseOrder(value: _7.MsgProcessUndPurchaseOrder): {
                        typeUrl: string;
                        value: _7.MsgProcessUndPurchaseOrder;
                    };
                    whitelistAddress(value: _7.MsgWhitelistAddress): {
                        typeUrl: string;
                        value: _7.MsgWhitelistAddress;
                    };
                    updateParams(value: _7.MsgUpdateParams): {
                        typeUrl: string;
                        value: _7.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/mainchain.enterprise.v1.MsgUndPurchaseOrder": {
                    aminoType: string;
                    toAmino: (message: _7.MsgUndPurchaseOrder) => _7.MsgUndPurchaseOrderAmino;
                    fromAmino: (object: _7.MsgUndPurchaseOrderAmino) => _7.MsgUndPurchaseOrder;
                };
                "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder": {
                    aminoType: string;
                    toAmino: (message: _7.MsgProcessUndPurchaseOrder) => _7.MsgProcessUndPurchaseOrderAmino;
                    fromAmino: (object: _7.MsgProcessUndPurchaseOrderAmino) => _7.MsgProcessUndPurchaseOrder;
                };
                "/mainchain.enterprise.v1.MsgWhitelistAddress": {
                    aminoType: string;
                    toAmino: (message: _7.MsgWhitelistAddress) => _7.MsgWhitelistAddressAmino;
                    fromAmino: (object: _7.MsgWhitelistAddressAmino) => _7.MsgWhitelistAddress;
                };
                "/mainchain.enterprise.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _7.MsgUpdateParams) => _7.MsgUpdateParamsAmino;
                    fromAmino: (object: _7.MsgUpdateParamsAmino) => _7.MsgUpdateParams;
                };
            };
            MsgUndPurchaseOrder: {
                typeUrl: string;
                is(o: any): o is _7.MsgUndPurchaseOrder;
                isSDK(o: any): o is _7.MsgUndPurchaseOrderSDKType;
                isAmino(o: any): o is _7.MsgUndPurchaseOrderAmino;
                encode(message: _7.MsgUndPurchaseOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgUndPurchaseOrder;
                fromPartial(object: Partial<_7.MsgUndPurchaseOrder>): _7.MsgUndPurchaseOrder;
                fromAmino(object: _7.MsgUndPurchaseOrderAmino): _7.MsgUndPurchaseOrder;
                toAmino(message: _7.MsgUndPurchaseOrder): _7.MsgUndPurchaseOrderAmino;
                fromAminoMsg(object: _7.MsgUndPurchaseOrderAminoMsg): _7.MsgUndPurchaseOrder;
                fromProtoMsg(message: _7.MsgUndPurchaseOrderProtoMsg): _7.MsgUndPurchaseOrder;
                toProto(message: _7.MsgUndPurchaseOrder): Uint8Array;
                toProtoMsg(message: _7.MsgUndPurchaseOrder): _7.MsgUndPurchaseOrderProtoMsg;
            };
            MsgUndPurchaseOrderResponse: {
                typeUrl: string;
                is(o: any): o is _7.MsgUndPurchaseOrderResponse;
                isSDK(o: any): o is _7.MsgUndPurchaseOrderResponseSDKType;
                isAmino(o: any): o is _7.MsgUndPurchaseOrderResponseAmino;
                encode(message: _7.MsgUndPurchaseOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgUndPurchaseOrderResponse;
                fromPartial(object: Partial<_7.MsgUndPurchaseOrderResponse>): _7.MsgUndPurchaseOrderResponse;
                fromAmino(object: _7.MsgUndPurchaseOrderResponseAmino): _7.MsgUndPurchaseOrderResponse;
                toAmino(message: _7.MsgUndPurchaseOrderResponse): _7.MsgUndPurchaseOrderResponseAmino;
                fromAminoMsg(object: _7.MsgUndPurchaseOrderResponseAminoMsg): _7.MsgUndPurchaseOrderResponse;
                fromProtoMsg(message: _7.MsgUndPurchaseOrderResponseProtoMsg): _7.MsgUndPurchaseOrderResponse;
                toProto(message: _7.MsgUndPurchaseOrderResponse): Uint8Array;
                toProtoMsg(message: _7.MsgUndPurchaseOrderResponse): _7.MsgUndPurchaseOrderResponseProtoMsg;
            };
            MsgProcessUndPurchaseOrder: {
                typeUrl: string;
                is(o: any): o is _7.MsgProcessUndPurchaseOrder;
                isSDK(o: any): o is _7.MsgProcessUndPurchaseOrderSDKType;
                isAmino(o: any): o is _7.MsgProcessUndPurchaseOrderAmino;
                encode(message: _7.MsgProcessUndPurchaseOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgProcessUndPurchaseOrder;
                fromPartial(object: Partial<_7.MsgProcessUndPurchaseOrder>): _7.MsgProcessUndPurchaseOrder;
                fromAmino(object: _7.MsgProcessUndPurchaseOrderAmino): _7.MsgProcessUndPurchaseOrder;
                toAmino(message: _7.MsgProcessUndPurchaseOrder): _7.MsgProcessUndPurchaseOrderAmino;
                fromAminoMsg(object: _7.MsgProcessUndPurchaseOrderAminoMsg): _7.MsgProcessUndPurchaseOrder;
                fromProtoMsg(message: _7.MsgProcessUndPurchaseOrderProtoMsg): _7.MsgProcessUndPurchaseOrder;
                toProto(message: _7.MsgProcessUndPurchaseOrder): Uint8Array;
                toProtoMsg(message: _7.MsgProcessUndPurchaseOrder): _7.MsgProcessUndPurchaseOrderProtoMsg;
            };
            MsgProcessUndPurchaseOrderResponse: {
                typeUrl: string;
                is(o: any): o is _7.MsgProcessUndPurchaseOrderResponse;
                isSDK(o: any): o is _7.MsgProcessUndPurchaseOrderResponseSDKType;
                isAmino(o: any): o is _7.MsgProcessUndPurchaseOrderResponseAmino;
                encode(_: _7.MsgProcessUndPurchaseOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgProcessUndPurchaseOrderResponse;
                fromPartial(_: Partial<_7.MsgProcessUndPurchaseOrderResponse>): _7.MsgProcessUndPurchaseOrderResponse;
                fromAmino(_: _7.MsgProcessUndPurchaseOrderResponseAmino): _7.MsgProcessUndPurchaseOrderResponse;
                toAmino(_: _7.MsgProcessUndPurchaseOrderResponse): _7.MsgProcessUndPurchaseOrderResponseAmino;
                fromAminoMsg(object: _7.MsgProcessUndPurchaseOrderResponseAminoMsg): _7.MsgProcessUndPurchaseOrderResponse;
                fromProtoMsg(message: _7.MsgProcessUndPurchaseOrderResponseProtoMsg): _7.MsgProcessUndPurchaseOrderResponse;
                toProto(message: _7.MsgProcessUndPurchaseOrderResponse): Uint8Array;
                toProtoMsg(message: _7.MsgProcessUndPurchaseOrderResponse): _7.MsgProcessUndPurchaseOrderResponseProtoMsg;
            };
            MsgWhitelistAddress: {
                typeUrl: string;
                is(o: any): o is _7.MsgWhitelistAddress;
                isSDK(o: any): o is _7.MsgWhitelistAddressSDKType;
                isAmino(o: any): o is _7.MsgWhitelistAddressAmino;
                encode(message: _7.MsgWhitelistAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgWhitelistAddress;
                fromPartial(object: Partial<_7.MsgWhitelistAddress>): _7.MsgWhitelistAddress;
                fromAmino(object: _7.MsgWhitelistAddressAmino): _7.MsgWhitelistAddress;
                toAmino(message: _7.MsgWhitelistAddress): _7.MsgWhitelistAddressAmino;
                fromAminoMsg(object: _7.MsgWhitelistAddressAminoMsg): _7.MsgWhitelistAddress;
                fromProtoMsg(message: _7.MsgWhitelistAddressProtoMsg): _7.MsgWhitelistAddress;
                toProto(message: _7.MsgWhitelistAddress): Uint8Array;
                toProtoMsg(message: _7.MsgWhitelistAddress): _7.MsgWhitelistAddressProtoMsg;
            };
            MsgWhitelistAddressResponse: {
                typeUrl: string;
                is(o: any): o is _7.MsgWhitelistAddressResponse;
                isSDK(o: any): o is _7.MsgWhitelistAddressResponseSDKType;
                isAmino(o: any): o is _7.MsgWhitelistAddressResponseAmino;
                encode(_: _7.MsgWhitelistAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgWhitelistAddressResponse;
                fromPartial(_: Partial<_7.MsgWhitelistAddressResponse>): _7.MsgWhitelistAddressResponse;
                fromAmino(_: _7.MsgWhitelistAddressResponseAmino): _7.MsgWhitelistAddressResponse;
                toAmino(_: _7.MsgWhitelistAddressResponse): _7.MsgWhitelistAddressResponseAmino;
                fromAminoMsg(object: _7.MsgWhitelistAddressResponseAminoMsg): _7.MsgWhitelistAddressResponse;
                fromProtoMsg(message: _7.MsgWhitelistAddressResponseProtoMsg): _7.MsgWhitelistAddressResponse;
                toProto(message: _7.MsgWhitelistAddressResponse): Uint8Array;
                toProtoMsg(message: _7.MsgWhitelistAddressResponse): _7.MsgWhitelistAddressResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _7.MsgUpdateParams;
                isSDK(o: any): o is _7.MsgUpdateParamsSDKType;
                isAmino(o: any): o is _7.MsgUpdateParamsAmino;
                encode(message: _7.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgUpdateParams;
                fromPartial(object: Partial<_7.MsgUpdateParams>): _7.MsgUpdateParams;
                fromAmino(object: _7.MsgUpdateParamsAmino): _7.MsgUpdateParams;
                toAmino(message: _7.MsgUpdateParams): _7.MsgUpdateParamsAmino;
                fromAminoMsg(object: _7.MsgUpdateParamsAminoMsg): _7.MsgUpdateParams;
                toAminoMsg(message: _7.MsgUpdateParams): _7.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _7.MsgUpdateParamsProtoMsg): _7.MsgUpdateParams;
                toProto(message: _7.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _7.MsgUpdateParams): _7.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                is(o: any): o is _7.MsgUpdateParamsResponse;
                isSDK(o: any): o is _7.MsgUpdateParamsResponseSDKType;
                isAmino(o: any): o is _7.MsgUpdateParamsResponseAmino;
                encode(_: _7.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_7.MsgUpdateParamsResponse>): _7.MsgUpdateParamsResponse;
                fromAmino(_: _7.MsgUpdateParamsResponseAmino): _7.MsgUpdateParamsResponse;
                toAmino(_: _7.MsgUpdateParamsResponse): _7.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _7.MsgUpdateParamsResponseAminoMsg): _7.MsgUpdateParamsResponse;
                fromProtoMsg(message: _7.MsgUpdateParamsResponseProtoMsg): _7.MsgUpdateParamsResponse;
                toProto(message: _7.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _7.MsgUpdateParamsResponse): _7.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                is(o: any): o is _6.QueryParamsRequest;
                isSDK(o: any): o is _6.QueryParamsRequestSDKType;
                isAmino(o: any): o is _6.QueryParamsRequestAmino;
                encode(_: _6.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryParamsRequest;
                fromPartial(_: Partial<_6.QueryParamsRequest>): _6.QueryParamsRequest;
                fromAmino(_: _6.QueryParamsRequestAmino): _6.QueryParamsRequest;
                toAmino(_: _6.QueryParamsRequest): _6.QueryParamsRequestAmino;
                fromAminoMsg(object: _6.QueryParamsRequestAminoMsg): _6.QueryParamsRequest;
                fromProtoMsg(message: _6.QueryParamsRequestProtoMsg): _6.QueryParamsRequest;
                toProto(message: _6.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _6.QueryParamsRequest): _6.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                is(o: any): o is _6.QueryParamsResponse;
                isSDK(o: any): o is _6.QueryParamsResponseSDKType;
                isAmino(o: any): o is _6.QueryParamsResponseAmino;
                encode(message: _6.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryParamsResponse;
                fromPartial(object: Partial<_6.QueryParamsResponse>): _6.QueryParamsResponse;
                fromAmino(object: _6.QueryParamsResponseAmino): _6.QueryParamsResponse;
                toAmino(message: _6.QueryParamsResponse): _6.QueryParamsResponseAmino;
                fromAminoMsg(object: _6.QueryParamsResponseAminoMsg): _6.QueryParamsResponse;
                fromProtoMsg(message: _6.QueryParamsResponseProtoMsg): _6.QueryParamsResponse;
                toProto(message: _6.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _6.QueryParamsResponse): _6.QueryParamsResponseProtoMsg;
            };
            QueryEnterpriseUndPurchaseOrderRequest: {
                typeUrl: string;
                is(o: any): o is _6.QueryEnterpriseUndPurchaseOrderRequest;
                isSDK(o: any): o is _6.QueryEnterpriseUndPurchaseOrderRequestSDKType;
                isAmino(o: any): o is _6.QueryEnterpriseUndPurchaseOrderRequestAmino;
                encode(message: _6.QueryEnterpriseUndPurchaseOrderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryEnterpriseUndPurchaseOrderRequest;
                fromPartial(object: Partial<_6.QueryEnterpriseUndPurchaseOrderRequest>): _6.QueryEnterpriseUndPurchaseOrderRequest;
                fromAmino(object: _6.QueryEnterpriseUndPurchaseOrderRequestAmino): _6.QueryEnterpriseUndPurchaseOrderRequest;
                toAmino(message: _6.QueryEnterpriseUndPurchaseOrderRequest): _6.QueryEnterpriseUndPurchaseOrderRequestAmino;
                fromAminoMsg(object: _6.QueryEnterpriseUndPurchaseOrderRequestAminoMsg): _6.QueryEnterpriseUndPurchaseOrderRequest;
                fromProtoMsg(message: _6.QueryEnterpriseUndPurchaseOrderRequestProtoMsg): _6.QueryEnterpriseUndPurchaseOrderRequest;
                toProto(message: _6.QueryEnterpriseUndPurchaseOrderRequest): Uint8Array;
                toProtoMsg(message: _6.QueryEnterpriseUndPurchaseOrderRequest): _6.QueryEnterpriseUndPurchaseOrderRequestProtoMsg;
            };
            QueryEnterpriseUndPurchaseOrderResponse: {
                typeUrl: string;
                is(o: any): o is _6.QueryEnterpriseUndPurchaseOrderResponse;
                isSDK(o: any): o is _6.QueryEnterpriseUndPurchaseOrderResponseSDKType;
                isAmino(o: any): o is _6.QueryEnterpriseUndPurchaseOrderResponseAmino;
                encode(message: _6.QueryEnterpriseUndPurchaseOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryEnterpriseUndPurchaseOrderResponse;
                fromPartial(object: Partial<_6.QueryEnterpriseUndPurchaseOrderResponse>): _6.QueryEnterpriseUndPurchaseOrderResponse;
                fromAmino(object: _6.QueryEnterpriseUndPurchaseOrderResponseAmino): _6.QueryEnterpriseUndPurchaseOrderResponse;
                toAmino(message: _6.QueryEnterpriseUndPurchaseOrderResponse): _6.QueryEnterpriseUndPurchaseOrderResponseAmino;
                fromAminoMsg(object: _6.QueryEnterpriseUndPurchaseOrderResponseAminoMsg): _6.QueryEnterpriseUndPurchaseOrderResponse;
                fromProtoMsg(message: _6.QueryEnterpriseUndPurchaseOrderResponseProtoMsg): _6.QueryEnterpriseUndPurchaseOrderResponse;
                toProto(message: _6.QueryEnterpriseUndPurchaseOrderResponse): Uint8Array;
                toProtoMsg(message: _6.QueryEnterpriseUndPurchaseOrderResponse): _6.QueryEnterpriseUndPurchaseOrderResponseProtoMsg;
            };
            QueryEnterpriseUndPurchaseOrdersRequest: {
                typeUrl: string;
                is(o: any): o is _6.QueryEnterpriseUndPurchaseOrdersRequest;
                isSDK(o: any): o is _6.QueryEnterpriseUndPurchaseOrdersRequestSDKType;
                isAmino(o: any): o is _6.QueryEnterpriseUndPurchaseOrdersRequestAmino;
                encode(message: _6.QueryEnterpriseUndPurchaseOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryEnterpriseUndPurchaseOrdersRequest;
                fromPartial(object: Partial<_6.QueryEnterpriseUndPurchaseOrdersRequest>): _6.QueryEnterpriseUndPurchaseOrdersRequest;
                fromAmino(object: _6.QueryEnterpriseUndPurchaseOrdersRequestAmino): _6.QueryEnterpriseUndPurchaseOrdersRequest;
                toAmino(message: _6.QueryEnterpriseUndPurchaseOrdersRequest): _6.QueryEnterpriseUndPurchaseOrdersRequestAmino;
                fromAminoMsg(object: _6.QueryEnterpriseUndPurchaseOrdersRequestAminoMsg): _6.QueryEnterpriseUndPurchaseOrdersRequest;
                fromProtoMsg(message: _6.QueryEnterpriseUndPurchaseOrdersRequestProtoMsg): _6.QueryEnterpriseUndPurchaseOrdersRequest;
                toProto(message: _6.QueryEnterpriseUndPurchaseOrdersRequest): Uint8Array;
                toProtoMsg(message: _6.QueryEnterpriseUndPurchaseOrdersRequest): _6.QueryEnterpriseUndPurchaseOrdersRequestProtoMsg;
            };
            QueryEnterpriseUndPurchaseOrdersResponse: {
                typeUrl: string;
                is(o: any): o is _6.QueryEnterpriseUndPurchaseOrdersResponse;
                isSDK(o: any): o is _6.QueryEnterpriseUndPurchaseOrdersResponseSDKType;
                isAmino(o: any): o is _6.QueryEnterpriseUndPurchaseOrdersResponseAmino;
                encode(message: _6.QueryEnterpriseUndPurchaseOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryEnterpriseUndPurchaseOrdersResponse;
                fromPartial(object: Partial<_6.QueryEnterpriseUndPurchaseOrdersResponse>): _6.QueryEnterpriseUndPurchaseOrdersResponse;
                fromAmino(object: _6.QueryEnterpriseUndPurchaseOrdersResponseAmino): _6.QueryEnterpriseUndPurchaseOrdersResponse;
                toAmino(message: _6.QueryEnterpriseUndPurchaseOrdersResponse): _6.QueryEnterpriseUndPurchaseOrdersResponseAmino;
                fromAminoMsg(object: _6.QueryEnterpriseUndPurchaseOrdersResponseAminoMsg): _6.QueryEnterpriseUndPurchaseOrdersResponse;
                fromProtoMsg(message: _6.QueryEnterpriseUndPurchaseOrdersResponseProtoMsg): _6.QueryEnterpriseUndPurchaseOrdersResponse;
                toProto(message: _6.QueryEnterpriseUndPurchaseOrdersResponse): Uint8Array;
                toProtoMsg(message: _6.QueryEnterpriseUndPurchaseOrdersResponse): _6.QueryEnterpriseUndPurchaseOrdersResponseProtoMsg;
            };
            QueryLockedUndByAddressRequest: {
                typeUrl: string;
                is(o: any): o is _6.QueryLockedUndByAddressRequest;
                isSDK(o: any): o is _6.QueryLockedUndByAddressRequestSDKType;
                isAmino(o: any): o is _6.QueryLockedUndByAddressRequestAmino;
                encode(message: _6.QueryLockedUndByAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryLockedUndByAddressRequest;
                fromPartial(object: Partial<_6.QueryLockedUndByAddressRequest>): _6.QueryLockedUndByAddressRequest;
                fromAmino(object: _6.QueryLockedUndByAddressRequestAmino): _6.QueryLockedUndByAddressRequest;
                toAmino(message: _6.QueryLockedUndByAddressRequest): _6.QueryLockedUndByAddressRequestAmino;
                fromAminoMsg(object: _6.QueryLockedUndByAddressRequestAminoMsg): _6.QueryLockedUndByAddressRequest;
                fromProtoMsg(message: _6.QueryLockedUndByAddressRequestProtoMsg): _6.QueryLockedUndByAddressRequest;
                toProto(message: _6.QueryLockedUndByAddressRequest): Uint8Array;
                toProtoMsg(message: _6.QueryLockedUndByAddressRequest): _6.QueryLockedUndByAddressRequestProtoMsg;
            };
            QueryLockedUndByAddressResponse: {
                typeUrl: string;
                is(o: any): o is _6.QueryLockedUndByAddressResponse;
                isSDK(o: any): o is _6.QueryLockedUndByAddressResponseSDKType;
                isAmino(o: any): o is _6.QueryLockedUndByAddressResponseAmino;
                encode(message: _6.QueryLockedUndByAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryLockedUndByAddressResponse;
                fromPartial(object: Partial<_6.QueryLockedUndByAddressResponse>): _6.QueryLockedUndByAddressResponse;
                fromAmino(object: _6.QueryLockedUndByAddressResponseAmino): _6.QueryLockedUndByAddressResponse;
                toAmino(message: _6.QueryLockedUndByAddressResponse): _6.QueryLockedUndByAddressResponseAmino;
                fromAminoMsg(object: _6.QueryLockedUndByAddressResponseAminoMsg): _6.QueryLockedUndByAddressResponse;
                fromProtoMsg(message: _6.QueryLockedUndByAddressResponseProtoMsg): _6.QueryLockedUndByAddressResponse;
                toProto(message: _6.QueryLockedUndByAddressResponse): Uint8Array;
                toProtoMsg(message: _6.QueryLockedUndByAddressResponse): _6.QueryLockedUndByAddressResponseProtoMsg;
            };
            QueryTotalLockedRequest: {
                typeUrl: string;
                is(o: any): o is _6.QueryTotalLockedRequest;
                isSDK(o: any): o is _6.QueryTotalLockedRequestSDKType;
                isAmino(o: any): o is _6.QueryTotalLockedRequestAmino;
                encode(_: _6.QueryTotalLockedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryTotalLockedRequest;
                fromPartial(_: Partial<_6.QueryTotalLockedRequest>): _6.QueryTotalLockedRequest;
                fromAmino(_: _6.QueryTotalLockedRequestAmino): _6.QueryTotalLockedRequest;
                toAmino(_: _6.QueryTotalLockedRequest): _6.QueryTotalLockedRequestAmino;
                fromAminoMsg(object: _6.QueryTotalLockedRequestAminoMsg): _6.QueryTotalLockedRequest;
                fromProtoMsg(message: _6.QueryTotalLockedRequestProtoMsg): _6.QueryTotalLockedRequest;
                toProto(message: _6.QueryTotalLockedRequest): Uint8Array;
                toProtoMsg(message: _6.QueryTotalLockedRequest): _6.QueryTotalLockedRequestProtoMsg;
            };
            QueryTotalLockedResponse: {
                typeUrl: string;
                is(o: any): o is _6.QueryTotalLockedResponse;
                isSDK(o: any): o is _6.QueryTotalLockedResponseSDKType;
                isAmino(o: any): o is _6.QueryTotalLockedResponseAmino;
                encode(message: _6.QueryTotalLockedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryTotalLockedResponse;
                fromPartial(object: Partial<_6.QueryTotalLockedResponse>): _6.QueryTotalLockedResponse;
                fromAmino(object: _6.QueryTotalLockedResponseAmino): _6.QueryTotalLockedResponse;
                toAmino(message: _6.QueryTotalLockedResponse): _6.QueryTotalLockedResponseAmino;
                fromAminoMsg(object: _6.QueryTotalLockedResponseAminoMsg): _6.QueryTotalLockedResponse;
                fromProtoMsg(message: _6.QueryTotalLockedResponseProtoMsg): _6.QueryTotalLockedResponse;
                toProto(message: _6.QueryTotalLockedResponse): Uint8Array;
                toProtoMsg(message: _6.QueryTotalLockedResponse): _6.QueryTotalLockedResponseProtoMsg;
            };
            QueryTotalUnlockedRequest: {
                typeUrl: string;
                is(o: any): o is _6.QueryTotalUnlockedRequest;
                isSDK(o: any): o is _6.QueryTotalUnlockedRequestSDKType;
                isAmino(o: any): o is _6.QueryTotalUnlockedRequestAmino;
                encode(_: _6.QueryTotalUnlockedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryTotalUnlockedRequest;
                fromPartial(_: Partial<_6.QueryTotalUnlockedRequest>): _6.QueryTotalUnlockedRequest;
                fromAmino(_: _6.QueryTotalUnlockedRequestAmino): _6.QueryTotalUnlockedRequest;
                toAmino(_: _6.QueryTotalUnlockedRequest): _6.QueryTotalUnlockedRequestAmino;
                fromAminoMsg(object: _6.QueryTotalUnlockedRequestAminoMsg): _6.QueryTotalUnlockedRequest;
                fromProtoMsg(message: _6.QueryTotalUnlockedRequestProtoMsg): _6.QueryTotalUnlockedRequest;
                toProto(message: _6.QueryTotalUnlockedRequest): Uint8Array;
                toProtoMsg(message: _6.QueryTotalUnlockedRequest): _6.QueryTotalUnlockedRequestProtoMsg;
            };
            QueryTotalUnlockedResponse: {
                typeUrl: string;
                is(o: any): o is _6.QueryTotalUnlockedResponse;
                isSDK(o: any): o is _6.QueryTotalUnlockedResponseSDKType;
                isAmino(o: any): o is _6.QueryTotalUnlockedResponseAmino;
                encode(message: _6.QueryTotalUnlockedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryTotalUnlockedResponse;
                fromPartial(object: Partial<_6.QueryTotalUnlockedResponse>): _6.QueryTotalUnlockedResponse;
                fromAmino(object: _6.QueryTotalUnlockedResponseAmino): _6.QueryTotalUnlockedResponse;
                toAmino(message: _6.QueryTotalUnlockedResponse): _6.QueryTotalUnlockedResponseAmino;
                fromAminoMsg(object: _6.QueryTotalUnlockedResponseAminoMsg): _6.QueryTotalUnlockedResponse;
                fromProtoMsg(message: _6.QueryTotalUnlockedResponseProtoMsg): _6.QueryTotalUnlockedResponse;
                toProto(message: _6.QueryTotalUnlockedResponse): Uint8Array;
                toProtoMsg(message: _6.QueryTotalUnlockedResponse): _6.QueryTotalUnlockedResponseProtoMsg;
            };
            QueryEnterpriseSupplyRequest: {
                typeUrl: string;
                is(o: any): o is _6.QueryEnterpriseSupplyRequest;
                isSDK(o: any): o is _6.QueryEnterpriseSupplyRequestSDKType;
                isAmino(o: any): o is _6.QueryEnterpriseSupplyRequestAmino;
                encode(_: _6.QueryEnterpriseSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryEnterpriseSupplyRequest;
                fromPartial(_: Partial<_6.QueryEnterpriseSupplyRequest>): _6.QueryEnterpriseSupplyRequest;
                fromAmino(_: _6.QueryEnterpriseSupplyRequestAmino): _6.QueryEnterpriseSupplyRequest;
                toAmino(_: _6.QueryEnterpriseSupplyRequest): _6.QueryEnterpriseSupplyRequestAmino;
                fromAminoMsg(object: _6.QueryEnterpriseSupplyRequestAminoMsg): _6.QueryEnterpriseSupplyRequest;
                fromProtoMsg(message: _6.QueryEnterpriseSupplyRequestProtoMsg): _6.QueryEnterpriseSupplyRequest;
                toProto(message: _6.QueryEnterpriseSupplyRequest): Uint8Array;
                toProtoMsg(message: _6.QueryEnterpriseSupplyRequest): _6.QueryEnterpriseSupplyRequestProtoMsg;
            };
            QueryEnterpriseSupplyResponse: {
                typeUrl: string;
                is(o: any): o is _6.QueryEnterpriseSupplyResponse;
                isSDK(o: any): o is _6.QueryEnterpriseSupplyResponseSDKType;
                isAmino(o: any): o is _6.QueryEnterpriseSupplyResponseAmino;
                encode(message: _6.QueryEnterpriseSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryEnterpriseSupplyResponse;
                fromPartial(object: Partial<_6.QueryEnterpriseSupplyResponse>): _6.QueryEnterpriseSupplyResponse;
                fromAmino(object: _6.QueryEnterpriseSupplyResponseAmino): _6.QueryEnterpriseSupplyResponse;
                toAmino(message: _6.QueryEnterpriseSupplyResponse): _6.QueryEnterpriseSupplyResponseAmino;
                fromAminoMsg(object: _6.QueryEnterpriseSupplyResponseAminoMsg): _6.QueryEnterpriseSupplyResponse;
                fromProtoMsg(message: _6.QueryEnterpriseSupplyResponseProtoMsg): _6.QueryEnterpriseSupplyResponse;
                toProto(message: _6.QueryEnterpriseSupplyResponse): Uint8Array;
                toProtoMsg(message: _6.QueryEnterpriseSupplyResponse): _6.QueryEnterpriseSupplyResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                is(o: any): o is _6.QueryTotalSupplyRequest;
                isSDK(o: any): o is _6.QueryTotalSupplyRequestSDKType;
                isAmino(o: any): o is _6.QueryTotalSupplyRequestAmino;
                encode(message: _6.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_6.QueryTotalSupplyRequest>): _6.QueryTotalSupplyRequest;
                fromAmino(object: _6.QueryTotalSupplyRequestAmino): _6.QueryTotalSupplyRequest;
                toAmino(message: _6.QueryTotalSupplyRequest): _6.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _6.QueryTotalSupplyRequestAminoMsg): _6.QueryTotalSupplyRequest;
                fromProtoMsg(message: _6.QueryTotalSupplyRequestProtoMsg): _6.QueryTotalSupplyRequest;
                toProto(message: _6.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _6.QueryTotalSupplyRequest): _6.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                is(o: any): o is _6.QueryTotalSupplyResponse;
                isSDK(o: any): o is _6.QueryTotalSupplyResponseSDKType;
                isAmino(o: any): o is _6.QueryTotalSupplyResponseAmino;
                encode(message: _6.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_6.QueryTotalSupplyResponse>): _6.QueryTotalSupplyResponse;
                fromAmino(object: _6.QueryTotalSupplyResponseAmino): _6.QueryTotalSupplyResponse;
                toAmino(message: _6.QueryTotalSupplyResponse): _6.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _6.QueryTotalSupplyResponseAminoMsg): _6.QueryTotalSupplyResponse;
                fromProtoMsg(message: _6.QueryTotalSupplyResponseProtoMsg): _6.QueryTotalSupplyResponse;
                toProto(message: _6.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _6.QueryTotalSupplyResponse): _6.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                is(o: any): o is _6.QuerySupplyOfRequest;
                isSDK(o: any): o is _6.QuerySupplyOfRequestSDKType;
                isAmino(o: any): o is _6.QuerySupplyOfRequestAmino;
                encode(message: _6.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QuerySupplyOfRequest;
                fromPartial(object: Partial<_6.QuerySupplyOfRequest>): _6.QuerySupplyOfRequest;
                fromAmino(object: _6.QuerySupplyOfRequestAmino): _6.QuerySupplyOfRequest;
                toAmino(message: _6.QuerySupplyOfRequest): _6.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _6.QuerySupplyOfRequestAminoMsg): _6.QuerySupplyOfRequest;
                fromProtoMsg(message: _6.QuerySupplyOfRequestProtoMsg): _6.QuerySupplyOfRequest;
                toProto(message: _6.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _6.QuerySupplyOfRequest): _6.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                is(o: any): o is _6.QuerySupplyOfResponse;
                isSDK(o: any): o is _6.QuerySupplyOfResponseSDKType;
                isAmino(o: any): o is _6.QuerySupplyOfResponseAmino;
                encode(message: _6.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QuerySupplyOfResponse;
                fromPartial(object: Partial<_6.QuerySupplyOfResponse>): _6.QuerySupplyOfResponse;
                fromAmino(object: _6.QuerySupplyOfResponseAmino): _6.QuerySupplyOfResponse;
                toAmino(message: _6.QuerySupplyOfResponse): _6.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _6.QuerySupplyOfResponseAminoMsg): _6.QuerySupplyOfResponse;
                fromProtoMsg(message: _6.QuerySupplyOfResponseProtoMsg): _6.QuerySupplyOfResponse;
                toProto(message: _6.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _6.QuerySupplyOfResponse): _6.QuerySupplyOfResponseProtoMsg;
            };
            QueryWhitelistRequest: {
                typeUrl: string;
                is(o: any): o is _6.QueryWhitelistRequest;
                isSDK(o: any): o is _6.QueryWhitelistRequestSDKType;
                isAmino(o: any): o is _6.QueryWhitelistRequestAmino;
                encode(_: _6.QueryWhitelistRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryWhitelistRequest;
                fromPartial(_: Partial<_6.QueryWhitelistRequest>): _6.QueryWhitelistRequest;
                fromAmino(_: _6.QueryWhitelistRequestAmino): _6.QueryWhitelistRequest;
                toAmino(_: _6.QueryWhitelistRequest): _6.QueryWhitelistRequestAmino;
                fromAminoMsg(object: _6.QueryWhitelistRequestAminoMsg): _6.QueryWhitelistRequest;
                fromProtoMsg(message: _6.QueryWhitelistRequestProtoMsg): _6.QueryWhitelistRequest;
                toProto(message: _6.QueryWhitelistRequest): Uint8Array;
                toProtoMsg(message: _6.QueryWhitelistRequest): _6.QueryWhitelistRequestProtoMsg;
            };
            QueryWhitelistResponse: {
                typeUrl: string;
                is(o: any): o is _6.QueryWhitelistResponse;
                isSDK(o: any): o is _6.QueryWhitelistResponseSDKType;
                isAmino(o: any): o is _6.QueryWhitelistResponseAmino;
                encode(message: _6.QueryWhitelistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryWhitelistResponse;
                fromPartial(object: Partial<_6.QueryWhitelistResponse>): _6.QueryWhitelistResponse;
                fromAmino(object: _6.QueryWhitelistResponseAmino): _6.QueryWhitelistResponse;
                toAmino(message: _6.QueryWhitelistResponse): _6.QueryWhitelistResponseAmino;
                fromAminoMsg(object: _6.QueryWhitelistResponseAminoMsg): _6.QueryWhitelistResponse;
                fromProtoMsg(message: _6.QueryWhitelistResponseProtoMsg): _6.QueryWhitelistResponse;
                toProto(message: _6.QueryWhitelistResponse): Uint8Array;
                toProtoMsg(message: _6.QueryWhitelistResponse): _6.QueryWhitelistResponseProtoMsg;
            };
            QueryWhitelistedRequest: {
                typeUrl: string;
                is(o: any): o is _6.QueryWhitelistedRequest;
                isSDK(o: any): o is _6.QueryWhitelistedRequestSDKType;
                isAmino(o: any): o is _6.QueryWhitelistedRequestAmino;
                encode(message: _6.QueryWhitelistedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryWhitelistedRequest;
                fromPartial(object: Partial<_6.QueryWhitelistedRequest>): _6.QueryWhitelistedRequest;
                fromAmino(object: _6.QueryWhitelistedRequestAmino): _6.QueryWhitelistedRequest;
                toAmino(message: _6.QueryWhitelistedRequest): _6.QueryWhitelistedRequestAmino;
                fromAminoMsg(object: _6.QueryWhitelistedRequestAminoMsg): _6.QueryWhitelistedRequest;
                fromProtoMsg(message: _6.QueryWhitelistedRequestProtoMsg): _6.QueryWhitelistedRequest;
                toProto(message: _6.QueryWhitelistedRequest): Uint8Array;
                toProtoMsg(message: _6.QueryWhitelistedRequest): _6.QueryWhitelistedRequestProtoMsg;
            };
            QueryWhitelistedResponse: {
                typeUrl: string;
                is(o: any): o is _6.QueryWhitelistedResponse;
                isSDK(o: any): o is _6.QueryWhitelistedResponseSDKType;
                isAmino(o: any): o is _6.QueryWhitelistedResponseAmino;
                encode(message: _6.QueryWhitelistedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryWhitelistedResponse;
                fromPartial(object: Partial<_6.QueryWhitelistedResponse>): _6.QueryWhitelistedResponse;
                fromAmino(object: _6.QueryWhitelistedResponseAmino): _6.QueryWhitelistedResponse;
                toAmino(message: _6.QueryWhitelistedResponse): _6.QueryWhitelistedResponseAmino;
                fromAminoMsg(object: _6.QueryWhitelistedResponseAminoMsg): _6.QueryWhitelistedResponse;
                fromProtoMsg(message: _6.QueryWhitelistedResponseProtoMsg): _6.QueryWhitelistedResponse;
                toProto(message: _6.QueryWhitelistedResponse): Uint8Array;
                toProtoMsg(message: _6.QueryWhitelistedResponse): _6.QueryWhitelistedResponseProtoMsg;
            };
            QueryEnterpriseAccountRequest: {
                typeUrl: string;
                is(o: any): o is _6.QueryEnterpriseAccountRequest;
                isSDK(o: any): o is _6.QueryEnterpriseAccountRequestSDKType;
                isAmino(o: any): o is _6.QueryEnterpriseAccountRequestAmino;
                encode(message: _6.QueryEnterpriseAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryEnterpriseAccountRequest;
                fromPartial(object: Partial<_6.QueryEnterpriseAccountRequest>): _6.QueryEnterpriseAccountRequest;
                fromAmino(object: _6.QueryEnterpriseAccountRequestAmino): _6.QueryEnterpriseAccountRequest;
                toAmino(message: _6.QueryEnterpriseAccountRequest): _6.QueryEnterpriseAccountRequestAmino;
                fromAminoMsg(object: _6.QueryEnterpriseAccountRequestAminoMsg): _6.QueryEnterpriseAccountRequest;
                fromProtoMsg(message: _6.QueryEnterpriseAccountRequestProtoMsg): _6.QueryEnterpriseAccountRequest;
                toProto(message: _6.QueryEnterpriseAccountRequest): Uint8Array;
                toProtoMsg(message: _6.QueryEnterpriseAccountRequest): _6.QueryEnterpriseAccountRequestProtoMsg;
            };
            QueryEnterpriseAccountResponse: {
                typeUrl: string;
                is(o: any): o is _6.QueryEnterpriseAccountResponse;
                isSDK(o: any): o is _6.QueryEnterpriseAccountResponseSDKType;
                isAmino(o: any): o is _6.QueryEnterpriseAccountResponseAmino;
                encode(message: _6.QueryEnterpriseAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryEnterpriseAccountResponse;
                fromPartial(object: Partial<_6.QueryEnterpriseAccountResponse>): _6.QueryEnterpriseAccountResponse;
                fromAmino(object: _6.QueryEnterpriseAccountResponseAmino): _6.QueryEnterpriseAccountResponse;
                toAmino(message: _6.QueryEnterpriseAccountResponse): _6.QueryEnterpriseAccountResponseAmino;
                fromAminoMsg(object: _6.QueryEnterpriseAccountResponseAminoMsg): _6.QueryEnterpriseAccountResponse;
                fromProtoMsg(message: _6.QueryEnterpriseAccountResponseProtoMsg): _6.QueryEnterpriseAccountResponse;
                toProto(message: _6.QueryEnterpriseAccountResponse): Uint8Array;
                toProtoMsg(message: _6.QueryEnterpriseAccountResponse): _6.QueryEnterpriseAccountResponseProtoMsg;
            };
            QueryTotalSpentEFUNDRequest: {
                typeUrl: string;
                is(o: any): o is _6.QueryTotalSpentEFUNDRequest;
                isSDK(o: any): o is _6.QueryTotalSpentEFUNDRequestSDKType;
                isAmino(o: any): o is _6.QueryTotalSpentEFUNDRequestAmino;
                encode(_: _6.QueryTotalSpentEFUNDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryTotalSpentEFUNDRequest;
                fromPartial(_: Partial<_6.QueryTotalSpentEFUNDRequest>): _6.QueryTotalSpentEFUNDRequest;
                fromAmino(_: _6.QueryTotalSpentEFUNDRequestAmino): _6.QueryTotalSpentEFUNDRequest;
                toAmino(_: _6.QueryTotalSpentEFUNDRequest): _6.QueryTotalSpentEFUNDRequestAmino;
                fromAminoMsg(object: _6.QueryTotalSpentEFUNDRequestAminoMsg): _6.QueryTotalSpentEFUNDRequest;
                fromProtoMsg(message: _6.QueryTotalSpentEFUNDRequestProtoMsg): _6.QueryTotalSpentEFUNDRequest;
                toProto(message: _6.QueryTotalSpentEFUNDRequest): Uint8Array;
                toProtoMsg(message: _6.QueryTotalSpentEFUNDRequest): _6.QueryTotalSpentEFUNDRequestProtoMsg;
            };
            QueryTotalSpentEFUNDResponse: {
                typeUrl: string;
                is(o: any): o is _6.QueryTotalSpentEFUNDResponse;
                isSDK(o: any): o is _6.QueryTotalSpentEFUNDResponseSDKType;
                isAmino(o: any): o is _6.QueryTotalSpentEFUNDResponseAmino;
                encode(message: _6.QueryTotalSpentEFUNDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QueryTotalSpentEFUNDResponse;
                fromPartial(object: Partial<_6.QueryTotalSpentEFUNDResponse>): _6.QueryTotalSpentEFUNDResponse;
                fromAmino(object: _6.QueryTotalSpentEFUNDResponseAmino): _6.QueryTotalSpentEFUNDResponse;
                toAmino(message: _6.QueryTotalSpentEFUNDResponse): _6.QueryTotalSpentEFUNDResponseAmino;
                fromAminoMsg(object: _6.QueryTotalSpentEFUNDResponseAminoMsg): _6.QueryTotalSpentEFUNDResponse;
                fromProtoMsg(message: _6.QueryTotalSpentEFUNDResponseProtoMsg): _6.QueryTotalSpentEFUNDResponse;
                toProto(message: _6.QueryTotalSpentEFUNDResponse): Uint8Array;
                toProtoMsg(message: _6.QueryTotalSpentEFUNDResponse): _6.QueryTotalSpentEFUNDResponseProtoMsg;
            };
            QuerySpentEFUNDByAddressRequest: {
                typeUrl: string;
                is(o: any): o is _6.QuerySpentEFUNDByAddressRequest;
                isSDK(o: any): o is _6.QuerySpentEFUNDByAddressRequestSDKType;
                isAmino(o: any): o is _6.QuerySpentEFUNDByAddressRequestAmino;
                encode(message: _6.QuerySpentEFUNDByAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QuerySpentEFUNDByAddressRequest;
                fromPartial(object: Partial<_6.QuerySpentEFUNDByAddressRequest>): _6.QuerySpentEFUNDByAddressRequest;
                fromAmino(object: _6.QuerySpentEFUNDByAddressRequestAmino): _6.QuerySpentEFUNDByAddressRequest;
                toAmino(message: _6.QuerySpentEFUNDByAddressRequest): _6.QuerySpentEFUNDByAddressRequestAmino;
                fromAminoMsg(object: _6.QuerySpentEFUNDByAddressRequestAminoMsg): _6.QuerySpentEFUNDByAddressRequest;
                fromProtoMsg(message: _6.QuerySpentEFUNDByAddressRequestProtoMsg): _6.QuerySpentEFUNDByAddressRequest;
                toProto(message: _6.QuerySpentEFUNDByAddressRequest): Uint8Array;
                toProtoMsg(message: _6.QuerySpentEFUNDByAddressRequest): _6.QuerySpentEFUNDByAddressRequestProtoMsg;
            };
            QuerySpentEFUNDByAddressResponse: {
                typeUrl: string;
                is(o: any): o is _6.QuerySpentEFUNDByAddressResponse;
                isSDK(o: any): o is _6.QuerySpentEFUNDByAddressResponseSDKType;
                isAmino(o: any): o is _6.QuerySpentEFUNDByAddressResponseAmino;
                encode(message: _6.QuerySpentEFUNDByAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.QuerySpentEFUNDByAddressResponse;
                fromPartial(object: Partial<_6.QuerySpentEFUNDByAddressResponse>): _6.QuerySpentEFUNDByAddressResponse;
                fromAmino(object: _6.QuerySpentEFUNDByAddressResponseAmino): _6.QuerySpentEFUNDByAddressResponse;
                toAmino(message: _6.QuerySpentEFUNDByAddressResponse): _6.QuerySpentEFUNDByAddressResponseAmino;
                fromAminoMsg(object: _6.QuerySpentEFUNDByAddressResponseAminoMsg): _6.QuerySpentEFUNDByAddressResponse;
                fromProtoMsg(message: _6.QuerySpentEFUNDByAddressResponseProtoMsg): _6.QuerySpentEFUNDByAddressResponse;
                toProto(message: _6.QuerySpentEFUNDByAddressResponse): Uint8Array;
                toProtoMsg(message: _6.QuerySpentEFUNDByAddressResponse): _6.QuerySpentEFUNDByAddressResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                is(o: any): o is _5.GenesisState;
                isSDK(o: any): o is _5.GenesisStateSDKType;
                isAmino(o: any): o is _5.GenesisStateAmino;
                encode(message: _5.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.GenesisState;
                fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
                fromAmino(object: _5.GenesisStateAmino): _5.GenesisState;
                toAmino(message: _5.GenesisState): _5.GenesisStateAmino;
                fromAminoMsg(object: _5.GenesisStateAminoMsg): _5.GenesisState;
                fromProtoMsg(message: _5.GenesisStateProtoMsg): _5.GenesisState;
                toProto(message: _5.GenesisState): Uint8Array;
                toProtoMsg(message: _5.GenesisState): _5.GenesisStateProtoMsg;
            };
            purchaseOrderStatusFromJSON(object: any): _4.PurchaseOrderStatus;
            purchaseOrderStatusToJSON(object: _4.PurchaseOrderStatus): string;
            whitelistActionFromJSON(object: any): _4.WhitelistAction;
            whitelistActionToJSON(object: _4.WhitelistAction): string;
            PurchaseOrderStatus: typeof _4.PurchaseOrderStatus;
            PurchaseOrderStatusSDKType: typeof _4.PurchaseOrderStatus;
            PurchaseOrderStatusAmino: typeof _4.PurchaseOrderStatus;
            WhitelistAction: typeof _4.WhitelistAction;
            WhitelistActionSDKType: typeof _4.WhitelistAction;
            WhitelistActionAmino: typeof _4.WhitelistAction;
            PurchaseOrderDecision: {
                typeUrl: string;
                is(o: any): o is _4.PurchaseOrderDecision;
                isSDK(o: any): o is _4.PurchaseOrderDecisionSDKType;
                isAmino(o: any): o is _4.PurchaseOrderDecisionAmino;
                encode(message: _4.PurchaseOrderDecision, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.PurchaseOrderDecision;
                fromPartial(object: Partial<_4.PurchaseOrderDecision>): _4.PurchaseOrderDecision;
                fromAmino(object: _4.PurchaseOrderDecisionAmino): _4.PurchaseOrderDecision;
                toAmino(message: _4.PurchaseOrderDecision): _4.PurchaseOrderDecisionAmino;
                fromAminoMsg(object: _4.PurchaseOrderDecisionAminoMsg): _4.PurchaseOrderDecision;
                fromProtoMsg(message: _4.PurchaseOrderDecisionProtoMsg): _4.PurchaseOrderDecision;
                toProto(message: _4.PurchaseOrderDecision): Uint8Array;
                toProtoMsg(message: _4.PurchaseOrderDecision): _4.PurchaseOrderDecisionProtoMsg;
            };
            EnterpriseUndPurchaseOrder: {
                typeUrl: string;
                is(o: any): o is _4.EnterpriseUndPurchaseOrder;
                isSDK(o: any): o is _4.EnterpriseUndPurchaseOrderSDKType;
                isAmino(o: any): o is _4.EnterpriseUndPurchaseOrderAmino;
                encode(message: _4.EnterpriseUndPurchaseOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.EnterpriseUndPurchaseOrder;
                fromPartial(object: Partial<_4.EnterpriseUndPurchaseOrder>): _4.EnterpriseUndPurchaseOrder;
                fromAmino(object: _4.EnterpriseUndPurchaseOrderAmino): _4.EnterpriseUndPurchaseOrder;
                toAmino(message: _4.EnterpriseUndPurchaseOrder): _4.EnterpriseUndPurchaseOrderAmino;
                fromAminoMsg(object: _4.EnterpriseUndPurchaseOrderAminoMsg): _4.EnterpriseUndPurchaseOrder;
                fromProtoMsg(message: _4.EnterpriseUndPurchaseOrderProtoMsg): _4.EnterpriseUndPurchaseOrder;
                toProto(message: _4.EnterpriseUndPurchaseOrder): Uint8Array;
                toProtoMsg(message: _4.EnterpriseUndPurchaseOrder): _4.EnterpriseUndPurchaseOrderProtoMsg;
            };
            PurchaseOrders: {
                typeUrl: string;
                is(o: any): o is _4.PurchaseOrders;
                isSDK(o: any): o is _4.PurchaseOrdersSDKType;
                isAmino(o: any): o is _4.PurchaseOrdersAmino;
                encode(message: _4.PurchaseOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.PurchaseOrders;
                fromPartial(object: Partial<_4.PurchaseOrders>): _4.PurchaseOrders;
                fromAmino(object: _4.PurchaseOrdersAmino): _4.PurchaseOrders;
                toAmino(message: _4.PurchaseOrders): _4.PurchaseOrdersAmino;
                fromAminoMsg(object: _4.PurchaseOrdersAminoMsg): _4.PurchaseOrders;
                fromProtoMsg(message: _4.PurchaseOrdersProtoMsg): _4.PurchaseOrders;
                toProto(message: _4.PurchaseOrders): Uint8Array;
                toProtoMsg(message: _4.PurchaseOrders): _4.PurchaseOrdersProtoMsg;
            };
            LockedUnd: {
                typeUrl: string;
                is(o: any): o is _4.LockedUnd;
                isSDK(o: any): o is _4.LockedUndSDKType;
                isAmino(o: any): o is _4.LockedUndAmino;
                encode(message: _4.LockedUnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.LockedUnd;
                fromPartial(object: Partial<_4.LockedUnd>): _4.LockedUnd;
                fromAmino(object: _4.LockedUndAmino): _4.LockedUnd;
                toAmino(message: _4.LockedUnd): _4.LockedUndAmino;
                fromAminoMsg(object: _4.LockedUndAminoMsg): _4.LockedUnd;
                fromProtoMsg(message: _4.LockedUndProtoMsg): _4.LockedUnd;
                toProto(message: _4.LockedUnd): Uint8Array;
                toProtoMsg(message: _4.LockedUnd): _4.LockedUndProtoMsg;
            };
            SpentEFUND: {
                typeUrl: string;
                is(o: any): o is _4.SpentEFUND;
                isSDK(o: any): o is _4.SpentEFUNDSDKType;
                isAmino(o: any): o is _4.SpentEFUNDAmino;
                encode(message: _4.SpentEFUND, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.SpentEFUND;
                fromPartial(object: Partial<_4.SpentEFUND>): _4.SpentEFUND;
                fromAmino(object: _4.SpentEFUNDAmino): _4.SpentEFUND;
                toAmino(message: _4.SpentEFUND): _4.SpentEFUNDAmino;
                fromAminoMsg(object: _4.SpentEFUNDAminoMsg): _4.SpentEFUND;
                fromProtoMsg(message: _4.SpentEFUNDProtoMsg): _4.SpentEFUND;
                toProto(message: _4.SpentEFUND): Uint8Array;
                toProtoMsg(message: _4.SpentEFUND): _4.SpentEFUNDProtoMsg;
            };
            EnterpriseUserAccount: {
                typeUrl: string;
                is(o: any): o is _4.EnterpriseUserAccount;
                isSDK(o: any): o is _4.EnterpriseUserAccountSDKType;
                isAmino(o: any): o is _4.EnterpriseUserAccountAmino;
                encode(message: _4.EnterpriseUserAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.EnterpriseUserAccount;
                fromPartial(object: Partial<_4.EnterpriseUserAccount>): _4.EnterpriseUserAccount;
                fromAmino(object: _4.EnterpriseUserAccountAmino): _4.EnterpriseUserAccount;
                toAmino(message: _4.EnterpriseUserAccount): _4.EnterpriseUserAccountAmino;
                fromAminoMsg(object: _4.EnterpriseUserAccountAminoMsg): _4.EnterpriseUserAccount;
                fromProtoMsg(message: _4.EnterpriseUserAccountProtoMsg): _4.EnterpriseUserAccount;
                toProto(message: _4.EnterpriseUserAccount): Uint8Array;
                toProtoMsg(message: _4.EnterpriseUserAccount): _4.EnterpriseUserAccountProtoMsg;
            };
            UndSupply: {
                typeUrl: string;
                is(o: any): o is _4.UndSupply;
                isSDK(o: any): o is _4.UndSupplySDKType;
                isAmino(o: any): o is _4.UndSupplyAmino;
                encode(message: _4.UndSupply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.UndSupply;
                fromPartial(object: Partial<_4.UndSupply>): _4.UndSupply;
                fromAmino(object: _4.UndSupplyAmino): _4.UndSupply;
                toAmino(message: _4.UndSupply): _4.UndSupplyAmino;
                fromAminoMsg(object: _4.UndSupplyAminoMsg): _4.UndSupply;
                fromProtoMsg(message: _4.UndSupplyProtoMsg): _4.UndSupply;
                toProto(message: _4.UndSupply): Uint8Array;
                toProtoMsg(message: _4.UndSupply): _4.UndSupplyProtoMsg;
            };
            WhitelistAddresses: {
                typeUrl: string;
                is(o: any): o is _4.WhitelistAddresses;
                isSDK(o: any): o is _4.WhitelistAddressesSDKType;
                isAmino(o: any): o is _4.WhitelistAddressesAmino;
                encode(message: _4.WhitelistAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.WhitelistAddresses;
                fromPartial(object: Partial<_4.WhitelistAddresses>): _4.WhitelistAddresses;
                fromAmino(object: _4.WhitelistAddressesAmino): _4.WhitelistAddresses;
                toAmino(message: _4.WhitelistAddresses): _4.WhitelistAddressesAmino;
                fromAminoMsg(object: _4.WhitelistAddressesAminoMsg): _4.WhitelistAddresses;
                fromProtoMsg(message: _4.WhitelistAddressesProtoMsg): _4.WhitelistAddresses;
                toProto(message: _4.WhitelistAddresses): Uint8Array;
                toProtoMsg(message: _4.WhitelistAddresses): _4.WhitelistAddressesProtoMsg;
            };
            Params: {
                typeUrl: string;
                is(o: any): o is _4.Params;
                isSDK(o: any): o is _4.ParamsSDKType;
                isAmino(o: any): o is _4.ParamsAmino;
                encode(message: _4.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.Params;
                fromPartial(object: Partial<_4.Params>): _4.Params;
                fromAmino(object: _4.ParamsAmino): _4.Params;
                toAmino(message: _4.Params): _4.ParamsAmino;
                fromAminoMsg(object: _4.ParamsAminoMsg): _4.Params;
                fromProtoMsg(message: _4.ParamsProtoMsg): _4.Params;
                toProto(message: _4.Params): Uint8Array;
                toProtoMsg(message: _4.Params): _4.ParamsProtoMsg;
            };
        };
    }
    namespace stream {
        const v1: {
            MsgClientImpl: typeof _143.MsgClientImpl;
            QueryClientImpl: typeof _139.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                calculateFlowRate(request: _10.QueryCalculateFlowRateRequest): Promise<_10.QueryCalculateFlowRateResponse>;
                streams(request?: _10.QueryStreamsRequest): Promise<_10.QueryStreamsResponse>;
                allStreamsForReceiver(request: _10.QueryAllStreamsForReceiverRequest): Promise<_10.QueryAllStreamsForReceiverResponse>;
                streamByReceiverSender(request: _10.QueryStreamByReceiverSenderRequest): Promise<_10.QueryStreamByReceiverSenderResponse>;
                streamReceiverSenderCurrentFlow(request: _10.QueryStreamReceiverSenderCurrentFlowRequest): Promise<_10.QueryStreamReceiverSenderCurrentFlowResponse>;
                allStreamsForSender(request: _10.QueryAllStreamsForSenderRequest): Promise<_10.QueryAllStreamsForSenderResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient | undefined) => {
                useParams: <TData = _10.QueryParamsResponse>({ request, options }: _139.UseParamsQuery<TData>) => any;
                useCalculateFlowRate: <TData = _10.QueryCalculateFlowRateResponse>({ request, options }: _139.UseCalculateFlowRateQuery<TData>) => any;
                useStreams: <TData = _10.QueryStreamsResponse>({ request, options }: _139.UseStreamsQuery<TData>) => any;
                useAllStreamsForReceiver: <TData = _10.QueryAllStreamsForReceiverResponse>({ request, options }: _139.UseAllStreamsForReceiverQuery<TData>) => any;
                useStreamByReceiverSender: <TData = _10.QueryStreamByReceiverSenderResponse>({ request, options }: _139.UseStreamByReceiverSenderQuery<TData>) => any;
                useStreamReceiverSenderCurrentFlow: <TData = _10.QueryStreamReceiverSenderCurrentFlowResponse>({ request, options }: _139.UseStreamReceiverSenderCurrentFlowQuery<TData>) => any;
                useAllStreamsForSender: <TData = _10.QueryAllStreamsForSenderResponse>({ request, options }: _139.UseAllStreamsForSenderQuery<TData>) => any;
            };
            LCDQueryClient: typeof _135.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createStream(value: _12.MsgCreateStream): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimStream(value: _12.MsgClaimStream): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    topUpDeposit(value: _12.MsgTopUpDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateFlowRate(value: _12.MsgUpdateFlowRate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelStream(value: _12.MsgCancelStream): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _12.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createStream(value: _12.MsgCreateStream): {
                        typeUrl: string;
                        value: _12.MsgCreateStream;
                    };
                    claimStream(value: _12.MsgClaimStream): {
                        typeUrl: string;
                        value: _12.MsgClaimStream;
                    };
                    topUpDeposit(value: _12.MsgTopUpDeposit): {
                        typeUrl: string;
                        value: _12.MsgTopUpDeposit;
                    };
                    updateFlowRate(value: _12.MsgUpdateFlowRate): {
                        typeUrl: string;
                        value: _12.MsgUpdateFlowRate;
                    };
                    cancelStream(value: _12.MsgCancelStream): {
                        typeUrl: string;
                        value: _12.MsgCancelStream;
                    };
                    updateParams(value: _12.MsgUpdateParams): {
                        typeUrl: string;
                        value: _12.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createStream(value: _12.MsgCreateStream): {
                        typeUrl: string;
                        value: _12.MsgCreateStream;
                    };
                    claimStream(value: _12.MsgClaimStream): {
                        typeUrl: string;
                        value: _12.MsgClaimStream;
                    };
                    topUpDeposit(value: _12.MsgTopUpDeposit): {
                        typeUrl: string;
                        value: _12.MsgTopUpDeposit;
                    };
                    updateFlowRate(value: _12.MsgUpdateFlowRate): {
                        typeUrl: string;
                        value: _12.MsgUpdateFlowRate;
                    };
                    cancelStream(value: _12.MsgCancelStream): {
                        typeUrl: string;
                        value: _12.MsgCancelStream;
                    };
                    updateParams(value: _12.MsgUpdateParams): {
                        typeUrl: string;
                        value: _12.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/mainchain.stream.v1.MsgCreateStream": {
                    aminoType: string;
                    toAmino: (message: _12.MsgCreateStream) => _12.MsgCreateStreamAmino;
                    fromAmino: (object: _12.MsgCreateStreamAmino) => _12.MsgCreateStream;
                };
                "/mainchain.stream.v1.MsgClaimStream": {
                    aminoType: string;
                    toAmino: (message: _12.MsgClaimStream) => _12.MsgClaimStreamAmino;
                    fromAmino: (object: _12.MsgClaimStreamAmino) => _12.MsgClaimStream;
                };
                "/mainchain.stream.v1.MsgTopUpDeposit": {
                    aminoType: string;
                    toAmino: (message: _12.MsgTopUpDeposit) => _12.MsgTopUpDepositAmino;
                    fromAmino: (object: _12.MsgTopUpDepositAmino) => _12.MsgTopUpDeposit;
                };
                "/mainchain.stream.v1.MsgUpdateFlowRate": {
                    aminoType: string;
                    toAmino: (message: _12.MsgUpdateFlowRate) => _12.MsgUpdateFlowRateAmino;
                    fromAmino: (object: _12.MsgUpdateFlowRateAmino) => _12.MsgUpdateFlowRate;
                };
                "/mainchain.stream.v1.MsgCancelStream": {
                    aminoType: string;
                    toAmino: (message: _12.MsgCancelStream) => _12.MsgCancelStreamAmino;
                    fromAmino: (object: _12.MsgCancelStreamAmino) => _12.MsgCancelStream;
                };
                "/mainchain.stream.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _12.MsgUpdateParams) => _12.MsgUpdateParamsAmino;
                    fromAmino: (object: _12.MsgUpdateParamsAmino) => _12.MsgUpdateParams;
                };
            };
            MsgCreateStream: {
                typeUrl: string;
                is(o: any): o is _12.MsgCreateStream;
                isSDK(o: any): o is _12.MsgCreateStreamSDKType;
                isAmino(o: any): o is _12.MsgCreateStreamAmino;
                encode(message: _12.MsgCreateStream, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgCreateStream;
                fromPartial(object: Partial<_12.MsgCreateStream>): _12.MsgCreateStream;
                fromAmino(object: _12.MsgCreateStreamAmino): _12.MsgCreateStream;
                toAmino(message: _12.MsgCreateStream): _12.MsgCreateStreamAmino;
                fromAminoMsg(object: _12.MsgCreateStreamAminoMsg): _12.MsgCreateStream;
                fromProtoMsg(message: _12.MsgCreateStreamProtoMsg): _12.MsgCreateStream;
                toProto(message: _12.MsgCreateStream): Uint8Array;
                toProtoMsg(message: _12.MsgCreateStream): _12.MsgCreateStreamProtoMsg;
            };
            MsgCreateStreamResponse: {
                typeUrl: string;
                is(o: any): o is _12.MsgCreateStreamResponse;
                isSDK(o: any): o is _12.MsgCreateStreamResponseSDKType;
                isAmino(o: any): o is _12.MsgCreateStreamResponseAmino;
                encode(message: _12.MsgCreateStreamResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgCreateStreamResponse;
                fromPartial(object: Partial<_12.MsgCreateStreamResponse>): _12.MsgCreateStreamResponse;
                fromAmino(object: _12.MsgCreateStreamResponseAmino): _12.MsgCreateStreamResponse;
                toAmino(message: _12.MsgCreateStreamResponse): _12.MsgCreateStreamResponseAmino;
                fromAminoMsg(object: _12.MsgCreateStreamResponseAminoMsg): _12.MsgCreateStreamResponse;
                fromProtoMsg(message: _12.MsgCreateStreamResponseProtoMsg): _12.MsgCreateStreamResponse;
                toProto(message: _12.MsgCreateStreamResponse): Uint8Array;
                toProtoMsg(message: _12.MsgCreateStreamResponse): _12.MsgCreateStreamResponseProtoMsg;
            };
            MsgClaimStream: {
                typeUrl: string;
                is(o: any): o is _12.MsgClaimStream;
                isSDK(o: any): o is _12.MsgClaimStreamSDKType;
                isAmino(o: any): o is _12.MsgClaimStreamAmino;
                encode(message: _12.MsgClaimStream, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgClaimStream;
                fromPartial(object: Partial<_12.MsgClaimStream>): _12.MsgClaimStream;
                fromAmino(object: _12.MsgClaimStreamAmino): _12.MsgClaimStream;
                toAmino(message: _12.MsgClaimStream): _12.MsgClaimStreamAmino;
                fromAminoMsg(object: _12.MsgClaimStreamAminoMsg): _12.MsgClaimStream;
                fromProtoMsg(message: _12.MsgClaimStreamProtoMsg): _12.MsgClaimStream;
                toProto(message: _12.MsgClaimStream): Uint8Array;
                toProtoMsg(message: _12.MsgClaimStream): _12.MsgClaimStreamProtoMsg;
            };
            MsgClaimStreamResponse: {
                typeUrl: string;
                is(o: any): o is _12.MsgClaimStreamResponse;
                isSDK(o: any): o is _12.MsgClaimStreamResponseSDKType;
                isAmino(o: any): o is _12.MsgClaimStreamResponseAmino;
                encode(message: _12.MsgClaimStreamResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgClaimStreamResponse;
                fromPartial(object: Partial<_12.MsgClaimStreamResponse>): _12.MsgClaimStreamResponse;
                fromAmino(object: _12.MsgClaimStreamResponseAmino): _12.MsgClaimStreamResponse;
                toAmino(message: _12.MsgClaimStreamResponse): _12.MsgClaimStreamResponseAmino;
                fromAminoMsg(object: _12.MsgClaimStreamResponseAminoMsg): _12.MsgClaimStreamResponse;
                fromProtoMsg(message: _12.MsgClaimStreamResponseProtoMsg): _12.MsgClaimStreamResponse;
                toProto(message: _12.MsgClaimStreamResponse): Uint8Array;
                toProtoMsg(message: _12.MsgClaimStreamResponse): _12.MsgClaimStreamResponseProtoMsg;
            };
            MsgTopUpDeposit: {
                typeUrl: string;
                is(o: any): o is _12.MsgTopUpDeposit;
                isSDK(o: any): o is _12.MsgTopUpDepositSDKType;
                isAmino(o: any): o is _12.MsgTopUpDepositAmino;
                encode(message: _12.MsgTopUpDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgTopUpDeposit;
                fromPartial(object: Partial<_12.MsgTopUpDeposit>): _12.MsgTopUpDeposit;
                fromAmino(object: _12.MsgTopUpDepositAmino): _12.MsgTopUpDeposit;
                toAmino(message: _12.MsgTopUpDeposit): _12.MsgTopUpDepositAmino;
                fromAminoMsg(object: _12.MsgTopUpDepositAminoMsg): _12.MsgTopUpDeposit;
                fromProtoMsg(message: _12.MsgTopUpDepositProtoMsg): _12.MsgTopUpDeposit;
                toProto(message: _12.MsgTopUpDeposit): Uint8Array;
                toProtoMsg(message: _12.MsgTopUpDeposit): _12.MsgTopUpDepositProtoMsg;
            };
            MsgTopUpDepositResponse: {
                typeUrl: string;
                is(o: any): o is _12.MsgTopUpDepositResponse;
                isSDK(o: any): o is _12.MsgTopUpDepositResponseSDKType;
                isAmino(o: any): o is _12.MsgTopUpDepositResponseAmino;
                encode(message: _12.MsgTopUpDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgTopUpDepositResponse;
                fromPartial(object: Partial<_12.MsgTopUpDepositResponse>): _12.MsgTopUpDepositResponse;
                fromAmino(object: _12.MsgTopUpDepositResponseAmino): _12.MsgTopUpDepositResponse;
                toAmino(message: _12.MsgTopUpDepositResponse): _12.MsgTopUpDepositResponseAmino;
                fromAminoMsg(object: _12.MsgTopUpDepositResponseAminoMsg): _12.MsgTopUpDepositResponse;
                fromProtoMsg(message: _12.MsgTopUpDepositResponseProtoMsg): _12.MsgTopUpDepositResponse;
                toProto(message: _12.MsgTopUpDepositResponse): Uint8Array;
                toProtoMsg(message: _12.MsgTopUpDepositResponse): _12.MsgTopUpDepositResponseProtoMsg;
            };
            MsgUpdateFlowRate: {
                typeUrl: string;
                is(o: any): o is _12.MsgUpdateFlowRate;
                isSDK(o: any): o is _12.MsgUpdateFlowRateSDKType;
                isAmino(o: any): o is _12.MsgUpdateFlowRateAmino;
                encode(message: _12.MsgUpdateFlowRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgUpdateFlowRate;
                fromPartial(object: Partial<_12.MsgUpdateFlowRate>): _12.MsgUpdateFlowRate;
                fromAmino(object: _12.MsgUpdateFlowRateAmino): _12.MsgUpdateFlowRate;
                toAmino(message: _12.MsgUpdateFlowRate): _12.MsgUpdateFlowRateAmino;
                fromAminoMsg(object: _12.MsgUpdateFlowRateAminoMsg): _12.MsgUpdateFlowRate;
                fromProtoMsg(message: _12.MsgUpdateFlowRateProtoMsg): _12.MsgUpdateFlowRate;
                toProto(message: _12.MsgUpdateFlowRate): Uint8Array;
                toProtoMsg(message: _12.MsgUpdateFlowRate): _12.MsgUpdateFlowRateProtoMsg;
            };
            MsgUpdateFlowRateResponse: {
                typeUrl: string;
                is(o: any): o is _12.MsgUpdateFlowRateResponse;
                isSDK(o: any): o is _12.MsgUpdateFlowRateResponseSDKType;
                isAmino(o: any): o is _12.MsgUpdateFlowRateResponseAmino;
                encode(message: _12.MsgUpdateFlowRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgUpdateFlowRateResponse;
                fromPartial(object: Partial<_12.MsgUpdateFlowRateResponse>): _12.MsgUpdateFlowRateResponse;
                fromAmino(object: _12.MsgUpdateFlowRateResponseAmino): _12.MsgUpdateFlowRateResponse;
                toAmino(message: _12.MsgUpdateFlowRateResponse): _12.MsgUpdateFlowRateResponseAmino;
                fromAminoMsg(object: _12.MsgUpdateFlowRateResponseAminoMsg): _12.MsgUpdateFlowRateResponse;
                fromProtoMsg(message: _12.MsgUpdateFlowRateResponseProtoMsg): _12.MsgUpdateFlowRateResponse;
                toProto(message: _12.MsgUpdateFlowRateResponse): Uint8Array;
                toProtoMsg(message: _12.MsgUpdateFlowRateResponse): _12.MsgUpdateFlowRateResponseProtoMsg;
            };
            MsgCancelStream: {
                typeUrl: string;
                is(o: any): o is _12.MsgCancelStream;
                isSDK(o: any): o is _12.MsgCancelStreamSDKType;
                isAmino(o: any): o is _12.MsgCancelStreamAmino;
                encode(message: _12.MsgCancelStream, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgCancelStream;
                fromPartial(object: Partial<_12.MsgCancelStream>): _12.MsgCancelStream;
                fromAmino(object: _12.MsgCancelStreamAmino): _12.MsgCancelStream;
                toAmino(message: _12.MsgCancelStream): _12.MsgCancelStreamAmino;
                fromAminoMsg(object: _12.MsgCancelStreamAminoMsg): _12.MsgCancelStream;
                fromProtoMsg(message: _12.MsgCancelStreamProtoMsg): _12.MsgCancelStream;
                toProto(message: _12.MsgCancelStream): Uint8Array;
                toProtoMsg(message: _12.MsgCancelStream): _12.MsgCancelStreamProtoMsg;
            };
            MsgCancelStreamResponse: {
                typeUrl: string;
                is(o: any): o is _12.MsgCancelStreamResponse;
                isSDK(o: any): o is _12.MsgCancelStreamResponseSDKType;
                isAmino(o: any): o is _12.MsgCancelStreamResponseAmino;
                encode(_: _12.MsgCancelStreamResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgCancelStreamResponse;
                fromPartial(_: Partial<_12.MsgCancelStreamResponse>): _12.MsgCancelStreamResponse;
                fromAmino(_: _12.MsgCancelStreamResponseAmino): _12.MsgCancelStreamResponse;
                toAmino(_: _12.MsgCancelStreamResponse): _12.MsgCancelStreamResponseAmino;
                fromAminoMsg(object: _12.MsgCancelStreamResponseAminoMsg): _12.MsgCancelStreamResponse;
                fromProtoMsg(message: _12.MsgCancelStreamResponseProtoMsg): _12.MsgCancelStreamResponse;
                toProto(message: _12.MsgCancelStreamResponse): Uint8Array;
                toProtoMsg(message: _12.MsgCancelStreamResponse): _12.MsgCancelStreamResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _12.MsgUpdateParams;
                isSDK(o: any): o is _12.MsgUpdateParamsSDKType;
                isAmino(o: any): o is _12.MsgUpdateParamsAmino;
                encode(message: _12.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgUpdateParams;
                fromPartial(object: Partial<_12.MsgUpdateParams>): _12.MsgUpdateParams;
                fromAmino(object: _12.MsgUpdateParamsAmino): _12.MsgUpdateParams;
                toAmino(message: _12.MsgUpdateParams): _12.MsgUpdateParamsAmino;
                fromAminoMsg(object: _12.MsgUpdateParamsAminoMsg): _12.MsgUpdateParams;
                toAminoMsg(message: _12.MsgUpdateParams): _12.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _12.MsgUpdateParamsProtoMsg): _12.MsgUpdateParams;
                toProto(message: _12.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _12.MsgUpdateParams): _12.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                is(o: any): o is _12.MsgUpdateParamsResponse;
                isSDK(o: any): o is _12.MsgUpdateParamsResponseSDKType;
                isAmino(o: any): o is _12.MsgUpdateParamsResponseAmino;
                encode(_: _12.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_12.MsgUpdateParamsResponse>): _12.MsgUpdateParamsResponse;
                fromAmino(_: _12.MsgUpdateParamsResponseAmino): _12.MsgUpdateParamsResponse;
                toAmino(_: _12.MsgUpdateParamsResponse): _12.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _12.MsgUpdateParamsResponseAminoMsg): _12.MsgUpdateParamsResponse;
                fromProtoMsg(message: _12.MsgUpdateParamsResponseProtoMsg): _12.MsgUpdateParamsResponse;
                toProto(message: _12.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _12.MsgUpdateParamsResponse): _12.MsgUpdateParamsResponseProtoMsg;
            };
            streamPeriodFromJSON(object: any): _11.StreamPeriod;
            streamPeriodToJSON(object: _11.StreamPeriod): string;
            StreamPeriod: typeof _11.StreamPeriod;
            StreamPeriodSDKType: typeof _11.StreamPeriod;
            StreamPeriodAmino: typeof _11.StreamPeriod;
            Stream: {
                typeUrl: string;
                is(o: any): o is _11.Stream;
                isSDK(o: any): o is _11.StreamSDKType;
                isAmino(o: any): o is _11.StreamAmino;
                encode(message: _11.Stream, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.Stream;
                fromPartial(object: Partial<_11.Stream>): _11.Stream;
                fromAmino(object: _11.StreamAmino): _11.Stream;
                toAmino(message: _11.Stream): _11.StreamAmino;
                fromAminoMsg(object: _11.StreamAminoMsg): _11.Stream;
                fromProtoMsg(message: _11.StreamProtoMsg): _11.Stream;
                toProto(message: _11.Stream): Uint8Array;
                toProtoMsg(message: _11.Stream): _11.StreamProtoMsg;
            };
            StreamResult: {
                typeUrl: string;
                is(o: any): o is _10.StreamResult;
                isSDK(o: any): o is _10.StreamResultSDKType;
                isAmino(o: any): o is _10.StreamResultAmino;
                encode(message: _10.StreamResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.StreamResult;
                fromPartial(object: Partial<_10.StreamResult>): _10.StreamResult;
                fromAmino(object: _10.StreamResultAmino): _10.StreamResult;
                toAmino(message: _10.StreamResult): _10.StreamResultAmino;
                fromAminoMsg(object: _10.StreamResultAminoMsg): _10.StreamResult;
                fromProtoMsg(message: _10.StreamResultProtoMsg): _10.StreamResult;
                toProto(message: _10.StreamResult): Uint8Array;
                toProtoMsg(message: _10.StreamResult): _10.StreamResultProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                is(o: any): o is _10.QueryParamsRequest;
                isSDK(o: any): o is _10.QueryParamsRequestSDKType;
                isAmino(o: any): o is _10.QueryParamsRequestAmino;
                encode(_: _10.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryParamsRequest;
                fromPartial(_: Partial<_10.QueryParamsRequest>): _10.QueryParamsRequest;
                fromAmino(_: _10.QueryParamsRequestAmino): _10.QueryParamsRequest;
                toAmino(_: _10.QueryParamsRequest): _10.QueryParamsRequestAmino;
                fromAminoMsg(object: _10.QueryParamsRequestAminoMsg): _10.QueryParamsRequest;
                fromProtoMsg(message: _10.QueryParamsRequestProtoMsg): _10.QueryParamsRequest;
                toProto(message: _10.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _10.QueryParamsRequest): _10.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                is(o: any): o is _10.QueryParamsResponse;
                isSDK(o: any): o is _10.QueryParamsResponseSDKType;
                isAmino(o: any): o is _10.QueryParamsResponseAmino;
                encode(message: _10.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryParamsResponse;
                fromPartial(object: Partial<_10.QueryParamsResponse>): _10.QueryParamsResponse;
                fromAmino(object: _10.QueryParamsResponseAmino): _10.QueryParamsResponse;
                toAmino(message: _10.QueryParamsResponse): _10.QueryParamsResponseAmino;
                fromAminoMsg(object: _10.QueryParamsResponseAminoMsg): _10.QueryParamsResponse;
                fromProtoMsg(message: _10.QueryParamsResponseProtoMsg): _10.QueryParamsResponse;
                toProto(message: _10.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _10.QueryParamsResponse): _10.QueryParamsResponseProtoMsg;
            };
            QueryCalculateFlowRateRequest: {
                typeUrl: string;
                is(o: any): o is _10.QueryCalculateFlowRateRequest;
                isSDK(o: any): o is _10.QueryCalculateFlowRateRequestSDKType;
                isAmino(o: any): o is _10.QueryCalculateFlowRateRequestAmino;
                encode(message: _10.QueryCalculateFlowRateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryCalculateFlowRateRequest;
                fromPartial(object: Partial<_10.QueryCalculateFlowRateRequest>): _10.QueryCalculateFlowRateRequest;
                fromAmino(object: _10.QueryCalculateFlowRateRequestAmino): _10.QueryCalculateFlowRateRequest;
                toAmino(message: _10.QueryCalculateFlowRateRequest): _10.QueryCalculateFlowRateRequestAmino;
                fromAminoMsg(object: _10.QueryCalculateFlowRateRequestAminoMsg): _10.QueryCalculateFlowRateRequest;
                fromProtoMsg(message: _10.QueryCalculateFlowRateRequestProtoMsg): _10.QueryCalculateFlowRateRequest;
                toProto(message: _10.QueryCalculateFlowRateRequest): Uint8Array;
                toProtoMsg(message: _10.QueryCalculateFlowRateRequest): _10.QueryCalculateFlowRateRequestProtoMsg;
            };
            QueryCalculateFlowRateResponse: {
                typeUrl: string;
                is(o: any): o is _10.QueryCalculateFlowRateResponse;
                isSDK(o: any): o is _10.QueryCalculateFlowRateResponseSDKType;
                isAmino(o: any): o is _10.QueryCalculateFlowRateResponseAmino;
                encode(message: _10.QueryCalculateFlowRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryCalculateFlowRateResponse;
                fromPartial(object: Partial<_10.QueryCalculateFlowRateResponse>): _10.QueryCalculateFlowRateResponse;
                fromAmino(object: _10.QueryCalculateFlowRateResponseAmino): _10.QueryCalculateFlowRateResponse;
                toAmino(message: _10.QueryCalculateFlowRateResponse): _10.QueryCalculateFlowRateResponseAmino;
                fromAminoMsg(object: _10.QueryCalculateFlowRateResponseAminoMsg): _10.QueryCalculateFlowRateResponse;
                fromProtoMsg(message: _10.QueryCalculateFlowRateResponseProtoMsg): _10.QueryCalculateFlowRateResponse;
                toProto(message: _10.QueryCalculateFlowRateResponse): Uint8Array;
                toProtoMsg(message: _10.QueryCalculateFlowRateResponse): _10.QueryCalculateFlowRateResponseProtoMsg;
            };
            QueryStreamsRequest: {
                typeUrl: string;
                is(o: any): o is _10.QueryStreamsRequest;
                isSDK(o: any): o is _10.QueryStreamsRequestSDKType;
                isAmino(o: any): o is _10.QueryStreamsRequestAmino;
                encode(message: _10.QueryStreamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryStreamsRequest;
                fromPartial(object: Partial<_10.QueryStreamsRequest>): _10.QueryStreamsRequest;
                fromAmino(object: _10.QueryStreamsRequestAmino): _10.QueryStreamsRequest;
                toAmino(message: _10.QueryStreamsRequest): _10.QueryStreamsRequestAmino;
                fromAminoMsg(object: _10.QueryStreamsRequestAminoMsg): _10.QueryStreamsRequest;
                fromProtoMsg(message: _10.QueryStreamsRequestProtoMsg): _10.QueryStreamsRequest;
                toProto(message: _10.QueryStreamsRequest): Uint8Array;
                toProtoMsg(message: _10.QueryStreamsRequest): _10.QueryStreamsRequestProtoMsg;
            };
            QueryStreamsResponse: {
                typeUrl: string;
                is(o: any): o is _10.QueryStreamsResponse;
                isSDK(o: any): o is _10.QueryStreamsResponseSDKType;
                isAmino(o: any): o is _10.QueryStreamsResponseAmino;
                encode(message: _10.QueryStreamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryStreamsResponse;
                fromPartial(object: Partial<_10.QueryStreamsResponse>): _10.QueryStreamsResponse;
                fromAmino(object: _10.QueryStreamsResponseAmino): _10.QueryStreamsResponse;
                toAmino(message: _10.QueryStreamsResponse): _10.QueryStreamsResponseAmino;
                fromAminoMsg(object: _10.QueryStreamsResponseAminoMsg): _10.QueryStreamsResponse;
                fromProtoMsg(message: _10.QueryStreamsResponseProtoMsg): _10.QueryStreamsResponse;
                toProto(message: _10.QueryStreamsResponse): Uint8Array;
                toProtoMsg(message: _10.QueryStreamsResponse): _10.QueryStreamsResponseProtoMsg;
            };
            QueryAllStreamsForReceiverRequest: {
                typeUrl: string;
                is(o: any): o is _10.QueryAllStreamsForReceiverRequest;
                isSDK(o: any): o is _10.QueryAllStreamsForReceiverRequestSDKType;
                isAmino(o: any): o is _10.QueryAllStreamsForReceiverRequestAmino;
                encode(message: _10.QueryAllStreamsForReceiverRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryAllStreamsForReceiverRequest;
                fromPartial(object: Partial<_10.QueryAllStreamsForReceiverRequest>): _10.QueryAllStreamsForReceiverRequest;
                fromAmino(object: _10.QueryAllStreamsForReceiverRequestAmino): _10.QueryAllStreamsForReceiverRequest;
                toAmino(message: _10.QueryAllStreamsForReceiverRequest): _10.QueryAllStreamsForReceiverRequestAmino;
                fromAminoMsg(object: _10.QueryAllStreamsForReceiverRequestAminoMsg): _10.QueryAllStreamsForReceiverRequest;
                fromProtoMsg(message: _10.QueryAllStreamsForReceiverRequestProtoMsg): _10.QueryAllStreamsForReceiverRequest;
                toProto(message: _10.QueryAllStreamsForReceiverRequest): Uint8Array;
                toProtoMsg(message: _10.QueryAllStreamsForReceiverRequest): _10.QueryAllStreamsForReceiverRequestProtoMsg;
            };
            QueryAllStreamsForReceiverResponse: {
                typeUrl: string;
                is(o: any): o is _10.QueryAllStreamsForReceiverResponse;
                isSDK(o: any): o is _10.QueryAllStreamsForReceiverResponseSDKType;
                isAmino(o: any): o is _10.QueryAllStreamsForReceiverResponseAmino;
                encode(message: _10.QueryAllStreamsForReceiverResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryAllStreamsForReceiverResponse;
                fromPartial(object: Partial<_10.QueryAllStreamsForReceiverResponse>): _10.QueryAllStreamsForReceiverResponse;
                fromAmino(object: _10.QueryAllStreamsForReceiverResponseAmino): _10.QueryAllStreamsForReceiverResponse;
                toAmino(message: _10.QueryAllStreamsForReceiverResponse): _10.QueryAllStreamsForReceiverResponseAmino;
                fromAminoMsg(object: _10.QueryAllStreamsForReceiverResponseAminoMsg): _10.QueryAllStreamsForReceiverResponse;
                fromProtoMsg(message: _10.QueryAllStreamsForReceiverResponseProtoMsg): _10.QueryAllStreamsForReceiverResponse;
                toProto(message: _10.QueryAllStreamsForReceiverResponse): Uint8Array;
                toProtoMsg(message: _10.QueryAllStreamsForReceiverResponse): _10.QueryAllStreamsForReceiverResponseProtoMsg;
            };
            QueryStreamByReceiverSenderRequest: {
                typeUrl: string;
                is(o: any): o is _10.QueryStreamByReceiverSenderRequest;
                isSDK(o: any): o is _10.QueryStreamByReceiverSenderRequestSDKType;
                isAmino(o: any): o is _10.QueryStreamByReceiverSenderRequestAmino;
                encode(message: _10.QueryStreamByReceiverSenderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryStreamByReceiverSenderRequest;
                fromPartial(object: Partial<_10.QueryStreamByReceiverSenderRequest>): _10.QueryStreamByReceiverSenderRequest;
                fromAmino(object: _10.QueryStreamByReceiverSenderRequestAmino): _10.QueryStreamByReceiverSenderRequest;
                toAmino(message: _10.QueryStreamByReceiverSenderRequest): _10.QueryStreamByReceiverSenderRequestAmino;
                fromAminoMsg(object: _10.QueryStreamByReceiverSenderRequestAminoMsg): _10.QueryStreamByReceiverSenderRequest;
                fromProtoMsg(message: _10.QueryStreamByReceiverSenderRequestProtoMsg): _10.QueryStreamByReceiverSenderRequest;
                toProto(message: _10.QueryStreamByReceiverSenderRequest): Uint8Array;
                toProtoMsg(message: _10.QueryStreamByReceiverSenderRequest): _10.QueryStreamByReceiverSenderRequestProtoMsg;
            };
            QueryStreamByReceiverSenderResponse: {
                typeUrl: string;
                is(o: any): o is _10.QueryStreamByReceiverSenderResponse;
                isSDK(o: any): o is _10.QueryStreamByReceiverSenderResponseSDKType;
                isAmino(o: any): o is _10.QueryStreamByReceiverSenderResponseAmino;
                encode(message: _10.QueryStreamByReceiverSenderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryStreamByReceiverSenderResponse;
                fromPartial(object: Partial<_10.QueryStreamByReceiverSenderResponse>): _10.QueryStreamByReceiverSenderResponse;
                fromAmino(object: _10.QueryStreamByReceiverSenderResponseAmino): _10.QueryStreamByReceiverSenderResponse;
                toAmino(message: _10.QueryStreamByReceiverSenderResponse): _10.QueryStreamByReceiverSenderResponseAmino;
                fromAminoMsg(object: _10.QueryStreamByReceiverSenderResponseAminoMsg): _10.QueryStreamByReceiverSenderResponse;
                fromProtoMsg(message: _10.QueryStreamByReceiverSenderResponseProtoMsg): _10.QueryStreamByReceiverSenderResponse;
                toProto(message: _10.QueryStreamByReceiverSenderResponse): Uint8Array;
                toProtoMsg(message: _10.QueryStreamByReceiverSenderResponse): _10.QueryStreamByReceiverSenderResponseProtoMsg;
            };
            QueryStreamReceiverSenderCurrentFlowRequest: {
                typeUrl: string;
                is(o: any): o is _10.QueryStreamReceiverSenderCurrentFlowRequest;
                isSDK(o: any): o is _10.QueryStreamReceiverSenderCurrentFlowRequestSDKType;
                isAmino(o: any): o is _10.QueryStreamReceiverSenderCurrentFlowRequestAmino;
                encode(message: _10.QueryStreamReceiverSenderCurrentFlowRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryStreamReceiverSenderCurrentFlowRequest;
                fromPartial(object: Partial<_10.QueryStreamReceiverSenderCurrentFlowRequest>): _10.QueryStreamReceiverSenderCurrentFlowRequest;
                fromAmino(object: _10.QueryStreamReceiverSenderCurrentFlowRequestAmino): _10.QueryStreamReceiverSenderCurrentFlowRequest;
                toAmino(message: _10.QueryStreamReceiverSenderCurrentFlowRequest): _10.QueryStreamReceiverSenderCurrentFlowRequestAmino;
                fromAminoMsg(object: _10.QueryStreamReceiverSenderCurrentFlowRequestAminoMsg): _10.QueryStreamReceiverSenderCurrentFlowRequest;
                fromProtoMsg(message: _10.QueryStreamReceiverSenderCurrentFlowRequestProtoMsg): _10.QueryStreamReceiverSenderCurrentFlowRequest;
                toProto(message: _10.QueryStreamReceiverSenderCurrentFlowRequest): Uint8Array;
                toProtoMsg(message: _10.QueryStreamReceiverSenderCurrentFlowRequest): _10.QueryStreamReceiverSenderCurrentFlowRequestProtoMsg;
            };
            QueryStreamReceiverSenderCurrentFlowResponse: {
                typeUrl: string;
                is(o: any): o is _10.QueryStreamReceiverSenderCurrentFlowResponse;
                isSDK(o: any): o is _10.QueryStreamReceiverSenderCurrentFlowResponseSDKType;
                isAmino(o: any): o is _10.QueryStreamReceiverSenderCurrentFlowResponseAmino;
                encode(message: _10.QueryStreamReceiverSenderCurrentFlowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryStreamReceiverSenderCurrentFlowResponse;
                fromPartial(object: Partial<_10.QueryStreamReceiverSenderCurrentFlowResponse>): _10.QueryStreamReceiverSenderCurrentFlowResponse;
                fromAmino(object: _10.QueryStreamReceiverSenderCurrentFlowResponseAmino): _10.QueryStreamReceiverSenderCurrentFlowResponse;
                toAmino(message: _10.QueryStreamReceiverSenderCurrentFlowResponse): _10.QueryStreamReceiverSenderCurrentFlowResponseAmino;
                fromAminoMsg(object: _10.QueryStreamReceiverSenderCurrentFlowResponseAminoMsg): _10.QueryStreamReceiverSenderCurrentFlowResponse;
                fromProtoMsg(message: _10.QueryStreamReceiverSenderCurrentFlowResponseProtoMsg): _10.QueryStreamReceiverSenderCurrentFlowResponse;
                toProto(message: _10.QueryStreamReceiverSenderCurrentFlowResponse): Uint8Array;
                toProtoMsg(message: _10.QueryStreamReceiverSenderCurrentFlowResponse): _10.QueryStreamReceiverSenderCurrentFlowResponseProtoMsg;
            };
            QueryAllStreamsForSenderRequest: {
                typeUrl: string;
                is(o: any): o is _10.QueryAllStreamsForSenderRequest;
                isSDK(o: any): o is _10.QueryAllStreamsForSenderRequestSDKType;
                isAmino(o: any): o is _10.QueryAllStreamsForSenderRequestAmino;
                encode(message: _10.QueryAllStreamsForSenderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryAllStreamsForSenderRequest;
                fromPartial(object: Partial<_10.QueryAllStreamsForSenderRequest>): _10.QueryAllStreamsForSenderRequest;
                fromAmino(object: _10.QueryAllStreamsForSenderRequestAmino): _10.QueryAllStreamsForSenderRequest;
                toAmino(message: _10.QueryAllStreamsForSenderRequest): _10.QueryAllStreamsForSenderRequestAmino;
                fromAminoMsg(object: _10.QueryAllStreamsForSenderRequestAminoMsg): _10.QueryAllStreamsForSenderRequest;
                fromProtoMsg(message: _10.QueryAllStreamsForSenderRequestProtoMsg): _10.QueryAllStreamsForSenderRequest;
                toProto(message: _10.QueryAllStreamsForSenderRequest): Uint8Array;
                toProtoMsg(message: _10.QueryAllStreamsForSenderRequest): _10.QueryAllStreamsForSenderRequestProtoMsg;
            };
            QueryAllStreamsForSenderResponse: {
                typeUrl: string;
                is(o: any): o is _10.QueryAllStreamsForSenderResponse;
                isSDK(o: any): o is _10.QueryAllStreamsForSenderResponseSDKType;
                isAmino(o: any): o is _10.QueryAllStreamsForSenderResponseAmino;
                encode(message: _10.QueryAllStreamsForSenderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.QueryAllStreamsForSenderResponse;
                fromPartial(object: Partial<_10.QueryAllStreamsForSenderResponse>): _10.QueryAllStreamsForSenderResponse;
                fromAmino(object: _10.QueryAllStreamsForSenderResponseAmino): _10.QueryAllStreamsForSenderResponse;
                toAmino(message: _10.QueryAllStreamsForSenderResponse): _10.QueryAllStreamsForSenderResponseAmino;
                fromAminoMsg(object: _10.QueryAllStreamsForSenderResponseAminoMsg): _10.QueryAllStreamsForSenderResponse;
                fromProtoMsg(message: _10.QueryAllStreamsForSenderResponseProtoMsg): _10.QueryAllStreamsForSenderResponse;
                toProto(message: _10.QueryAllStreamsForSenderResponse): Uint8Array;
                toProtoMsg(message: _10.QueryAllStreamsForSenderResponse): _10.QueryAllStreamsForSenderResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                is(o: any): o is _9.Params;
                isSDK(o: any): o is _9.ParamsSDKType;
                isAmino(o: any): o is _9.ParamsAmino;
                encode(message: _9.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _9.Params;
                fromPartial(object: Partial<_9.Params>): _9.Params;
                fromAmino(object: _9.ParamsAmino): _9.Params;
                toAmino(message: _9.Params): _9.ParamsAmino;
                fromAminoMsg(object: _9.ParamsAminoMsg): _9.Params;
                fromProtoMsg(message: _9.ParamsProtoMsg): _9.Params;
                toProto(message: _9.Params): Uint8Array;
                toProtoMsg(message: _9.Params): _9.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                is(o: any): o is _8.GenesisState;
                isSDK(o: any): o is _8.GenesisStateSDKType;
                isAmino(o: any): o is _8.GenesisStateAmino;
                encode(message: _8.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _8.GenesisState;
                fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
                fromAmino(object: _8.GenesisStateAmino): _8.GenesisState;
                toAmino(message: _8.GenesisState): _8.GenesisStateAmino;
                fromAminoMsg(object: _8.GenesisStateAminoMsg): _8.GenesisState;
                fromProtoMsg(message: _8.GenesisStateProtoMsg): _8.GenesisState;
                toProto(message: _8.GenesisState): Uint8Array;
                toProtoMsg(message: _8.GenesisState): _8.GenesisStateProtoMsg;
            };
            StreamExport: {
                typeUrl: string;
                is(o: any): o is _8.StreamExport;
                isSDK(o: any): o is _8.StreamExportSDKType;
                isAmino(o: any): o is _8.StreamExportAmino;
                encode(message: _8.StreamExport, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _8.StreamExport;
                fromPartial(object: Partial<_8.StreamExport>): _8.StreamExport;
                fromAmino(object: _8.StreamExportAmino): _8.StreamExport;
                toAmino(message: _8.StreamExport): _8.StreamExportAmino;
                fromAminoMsg(object: _8.StreamExportAminoMsg): _8.StreamExport;
                fromProtoMsg(message: _8.StreamExportProtoMsg): _8.StreamExport;
                toProto(message: _8.StreamExport): Uint8Array;
                toProtoMsg(message: _8.StreamExport): _8.StreamExportProtoMsg;
            };
        };
    }
    namespace wrkchain {
        const v1: {
            MsgClientImpl: typeof _144.MsgClientImpl;
            QueryClientImpl: typeof _140.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
                wrkChain(request: _14.QueryWrkChainRequest): Promise<_14.QueryWrkChainResponse>;
                wrkChainBlock(request: _14.QueryWrkChainBlockRequest): Promise<_14.QueryWrkChainBlockResponse>;
                wrkChainsFiltered(request: _14.QueryWrkChainsFilteredRequest): Promise<_14.QueryWrkChainsFilteredResponse>;
                wrkChainStorage(request: _14.QueryWrkChainStorageRequest): Promise<_14.QueryWrkChainStorageResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient | undefined) => {
                useParams: <TData = _14.QueryParamsResponse>({ request, options }: _140.UseParamsQuery<TData>) => any;
                useWrkChain: <TData = _14.QueryWrkChainResponse>({ request, options }: _140.UseWrkChainQuery<TData>) => any;
                useWrkChainBlock: <TData = _14.QueryWrkChainBlockResponse>({ request, options }: _140.UseWrkChainBlockQuery<TData>) => any;
                useWrkChainsFiltered: <TData = _14.QueryWrkChainsFilteredResponse>({ request, options }: _140.UseWrkChainsFilteredQuery<TData>) => any;
                useWrkChainStorage: <TData = _14.QueryWrkChainStorageResponse>({ request, options }: _140.UseWrkChainStorageQuery<TData>) => any;
            };
            LCDQueryClient: typeof _136.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerWrkChain(value: _15.MsgRegisterWrkChain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    recordWrkChainBlock(value: _15.MsgRecordWrkChainBlock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    purchaseWrkChainStateStorage(value: _15.MsgPurchaseWrkChainStateStorage): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _15.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerWrkChain(value: _15.MsgRegisterWrkChain): {
                        typeUrl: string;
                        value: _15.MsgRegisterWrkChain;
                    };
                    recordWrkChainBlock(value: _15.MsgRecordWrkChainBlock): {
                        typeUrl: string;
                        value: _15.MsgRecordWrkChainBlock;
                    };
                    purchaseWrkChainStateStorage(value: _15.MsgPurchaseWrkChainStateStorage): {
                        typeUrl: string;
                        value: _15.MsgPurchaseWrkChainStateStorage;
                    };
                    updateParams(value: _15.MsgUpdateParams): {
                        typeUrl: string;
                        value: _15.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    registerWrkChain(value: _15.MsgRegisterWrkChain): {
                        typeUrl: string;
                        value: _15.MsgRegisterWrkChain;
                    };
                    recordWrkChainBlock(value: _15.MsgRecordWrkChainBlock): {
                        typeUrl: string;
                        value: _15.MsgRecordWrkChainBlock;
                    };
                    purchaseWrkChainStateStorage(value: _15.MsgPurchaseWrkChainStateStorage): {
                        typeUrl: string;
                        value: _15.MsgPurchaseWrkChainStateStorage;
                    };
                    updateParams(value: _15.MsgUpdateParams): {
                        typeUrl: string;
                        value: _15.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/mainchain.wrkchain.v1.MsgRegisterWrkChain": {
                    aminoType: string;
                    toAmino: (message: _15.MsgRegisterWrkChain) => _15.MsgRegisterWrkChainAmino;
                    fromAmino: (object: _15.MsgRegisterWrkChainAmino) => _15.MsgRegisterWrkChain;
                };
                "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock": {
                    aminoType: string;
                    toAmino: (message: _15.MsgRecordWrkChainBlock) => _15.MsgRecordWrkChainBlockAmino;
                    fromAmino: (object: _15.MsgRecordWrkChainBlockAmino) => _15.MsgRecordWrkChainBlock;
                };
                "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage": {
                    aminoType: string;
                    toAmino: (message: _15.MsgPurchaseWrkChainStateStorage) => _15.MsgPurchaseWrkChainStateStorageAmino;
                    fromAmino: (object: _15.MsgPurchaseWrkChainStateStorageAmino) => _15.MsgPurchaseWrkChainStateStorage;
                };
                "/mainchain.wrkchain.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _15.MsgUpdateParams) => _15.MsgUpdateParamsAmino;
                    fromAmino: (object: _15.MsgUpdateParamsAmino) => _15.MsgUpdateParams;
                };
            };
            WrkChain: {
                typeUrl: string;
                is(o: any): o is _16.WrkChain;
                isSDK(o: any): o is _16.WrkChainSDKType;
                isAmino(o: any): o is _16.WrkChainAmino;
                encode(message: _16.WrkChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.WrkChain;
                fromPartial(object: Partial<_16.WrkChain>): _16.WrkChain;
                fromAmino(object: _16.WrkChainAmino): _16.WrkChain;
                toAmino(message: _16.WrkChain): _16.WrkChainAmino;
                fromAminoMsg(object: _16.WrkChainAminoMsg): _16.WrkChain;
                fromProtoMsg(message: _16.WrkChainProtoMsg): _16.WrkChain;
                toProto(message: _16.WrkChain): Uint8Array;
                toProtoMsg(message: _16.WrkChain): _16.WrkChainProtoMsg;
            };
            WrkChainStorageLimit: {
                typeUrl: string;
                is(o: any): o is _16.WrkChainStorageLimit;
                isSDK(o: any): o is _16.WrkChainStorageLimitSDKType;
                isAmino(o: any): o is _16.WrkChainStorageLimitAmino;
                encode(message: _16.WrkChainStorageLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.WrkChainStorageLimit;
                fromPartial(object: Partial<_16.WrkChainStorageLimit>): _16.WrkChainStorageLimit;
                fromAmino(object: _16.WrkChainStorageLimitAmino): _16.WrkChainStorageLimit;
                toAmino(message: _16.WrkChainStorageLimit): _16.WrkChainStorageLimitAmino;
                fromAminoMsg(object: _16.WrkChainStorageLimitAminoMsg): _16.WrkChainStorageLimit;
                fromProtoMsg(message: _16.WrkChainStorageLimitProtoMsg): _16.WrkChainStorageLimit;
                toProto(message: _16.WrkChainStorageLimit): Uint8Array;
                toProtoMsg(message: _16.WrkChainStorageLimit): _16.WrkChainStorageLimitProtoMsg;
            };
            WrkChainBlock: {
                typeUrl: string;
                is(o: any): o is _16.WrkChainBlock;
                isSDK(o: any): o is _16.WrkChainBlockSDKType;
                isAmino(o: any): o is _16.WrkChainBlockAmino;
                encode(message: _16.WrkChainBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.WrkChainBlock;
                fromPartial(object: Partial<_16.WrkChainBlock>): _16.WrkChainBlock;
                fromAmino(object: _16.WrkChainBlockAmino): _16.WrkChainBlock;
                toAmino(message: _16.WrkChainBlock): _16.WrkChainBlockAmino;
                fromAminoMsg(object: _16.WrkChainBlockAminoMsg): _16.WrkChainBlock;
                fromProtoMsg(message: _16.WrkChainBlockProtoMsg): _16.WrkChainBlock;
                toProto(message: _16.WrkChainBlock): Uint8Array;
                toProtoMsg(message: _16.WrkChainBlock): _16.WrkChainBlockProtoMsg;
            };
            Params: {
                typeUrl: string;
                is(o: any): o is _16.Params;
                isSDK(o: any): o is _16.ParamsSDKType;
                isAmino(o: any): o is _16.ParamsAmino;
                encode(message: _16.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.Params;
                fromPartial(object: Partial<_16.Params>): _16.Params;
                fromAmino(object: _16.ParamsAmino): _16.Params;
                toAmino(message: _16.Params): _16.ParamsAmino;
                fromAminoMsg(object: _16.ParamsAminoMsg): _16.Params;
                fromProtoMsg(message: _16.ParamsProtoMsg): _16.Params;
                toProto(message: _16.Params): Uint8Array;
                toProtoMsg(message: _16.Params): _16.ParamsProtoMsg;
            };
            MsgRegisterWrkChain: {
                typeUrl: string;
                is(o: any): o is _15.MsgRegisterWrkChain;
                isSDK(o: any): o is _15.MsgRegisterWrkChainSDKType;
                isAmino(o: any): o is _15.MsgRegisterWrkChainAmino;
                encode(message: _15.MsgRegisterWrkChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.MsgRegisterWrkChain;
                fromPartial(object: Partial<_15.MsgRegisterWrkChain>): _15.MsgRegisterWrkChain;
                fromAmino(object: _15.MsgRegisterWrkChainAmino): _15.MsgRegisterWrkChain;
                toAmino(message: _15.MsgRegisterWrkChain): _15.MsgRegisterWrkChainAmino;
                fromAminoMsg(object: _15.MsgRegisterWrkChainAminoMsg): _15.MsgRegisterWrkChain;
                fromProtoMsg(message: _15.MsgRegisterWrkChainProtoMsg): _15.MsgRegisterWrkChain;
                toProto(message: _15.MsgRegisterWrkChain): Uint8Array;
                toProtoMsg(message: _15.MsgRegisterWrkChain): _15.MsgRegisterWrkChainProtoMsg;
            };
            MsgRegisterWrkChainResponse: {
                typeUrl: string;
                is(o: any): o is _15.MsgRegisterWrkChainResponse;
                isSDK(o: any): o is _15.MsgRegisterWrkChainResponseSDKType;
                isAmino(o: any): o is _15.MsgRegisterWrkChainResponseAmino;
                encode(message: _15.MsgRegisterWrkChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.MsgRegisterWrkChainResponse;
                fromPartial(object: Partial<_15.MsgRegisterWrkChainResponse>): _15.MsgRegisterWrkChainResponse;
                fromAmino(object: _15.MsgRegisterWrkChainResponseAmino): _15.MsgRegisterWrkChainResponse;
                toAmino(message: _15.MsgRegisterWrkChainResponse): _15.MsgRegisterWrkChainResponseAmino;
                fromAminoMsg(object: _15.MsgRegisterWrkChainResponseAminoMsg): _15.MsgRegisterWrkChainResponse;
                fromProtoMsg(message: _15.MsgRegisterWrkChainResponseProtoMsg): _15.MsgRegisterWrkChainResponse;
                toProto(message: _15.MsgRegisterWrkChainResponse): Uint8Array;
                toProtoMsg(message: _15.MsgRegisterWrkChainResponse): _15.MsgRegisterWrkChainResponseProtoMsg;
            };
            MsgRecordWrkChainBlock: {
                typeUrl: string;
                is(o: any): o is _15.MsgRecordWrkChainBlock;
                isSDK(o: any): o is _15.MsgRecordWrkChainBlockSDKType;
                isAmino(o: any): o is _15.MsgRecordWrkChainBlockAmino;
                encode(message: _15.MsgRecordWrkChainBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.MsgRecordWrkChainBlock;
                fromPartial(object: Partial<_15.MsgRecordWrkChainBlock>): _15.MsgRecordWrkChainBlock;
                fromAmino(object: _15.MsgRecordWrkChainBlockAmino): _15.MsgRecordWrkChainBlock;
                toAmino(message: _15.MsgRecordWrkChainBlock): _15.MsgRecordWrkChainBlockAmino;
                fromAminoMsg(object: _15.MsgRecordWrkChainBlockAminoMsg): _15.MsgRecordWrkChainBlock;
                fromProtoMsg(message: _15.MsgRecordWrkChainBlockProtoMsg): _15.MsgRecordWrkChainBlock;
                toProto(message: _15.MsgRecordWrkChainBlock): Uint8Array;
                toProtoMsg(message: _15.MsgRecordWrkChainBlock): _15.MsgRecordWrkChainBlockProtoMsg;
            };
            MsgRecordWrkChainBlockResponse: {
                typeUrl: string;
                is(o: any): o is _15.MsgRecordWrkChainBlockResponse;
                isSDK(o: any): o is _15.MsgRecordWrkChainBlockResponseSDKType;
                isAmino(o: any): o is _15.MsgRecordWrkChainBlockResponseAmino;
                encode(message: _15.MsgRecordWrkChainBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.MsgRecordWrkChainBlockResponse;
                fromPartial(object: Partial<_15.MsgRecordWrkChainBlockResponse>): _15.MsgRecordWrkChainBlockResponse;
                fromAmino(object: _15.MsgRecordWrkChainBlockResponseAmino): _15.MsgRecordWrkChainBlockResponse;
                toAmino(message: _15.MsgRecordWrkChainBlockResponse): _15.MsgRecordWrkChainBlockResponseAmino;
                fromAminoMsg(object: _15.MsgRecordWrkChainBlockResponseAminoMsg): _15.MsgRecordWrkChainBlockResponse;
                fromProtoMsg(message: _15.MsgRecordWrkChainBlockResponseProtoMsg): _15.MsgRecordWrkChainBlockResponse;
                toProto(message: _15.MsgRecordWrkChainBlockResponse): Uint8Array;
                toProtoMsg(message: _15.MsgRecordWrkChainBlockResponse): _15.MsgRecordWrkChainBlockResponseProtoMsg;
            };
            MsgPurchaseWrkChainStateStorage: {
                typeUrl: string;
                is(o: any): o is _15.MsgPurchaseWrkChainStateStorage;
                isSDK(o: any): o is _15.MsgPurchaseWrkChainStateStorageSDKType;
                isAmino(o: any): o is _15.MsgPurchaseWrkChainStateStorageAmino;
                encode(message: _15.MsgPurchaseWrkChainStateStorage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.MsgPurchaseWrkChainStateStorage;
                fromPartial(object: Partial<_15.MsgPurchaseWrkChainStateStorage>): _15.MsgPurchaseWrkChainStateStorage;
                fromAmino(object: _15.MsgPurchaseWrkChainStateStorageAmino): _15.MsgPurchaseWrkChainStateStorage;
                toAmino(message: _15.MsgPurchaseWrkChainStateStorage): _15.MsgPurchaseWrkChainStateStorageAmino;
                fromAminoMsg(object: _15.MsgPurchaseWrkChainStateStorageAminoMsg): _15.MsgPurchaseWrkChainStateStorage;
                fromProtoMsg(message: _15.MsgPurchaseWrkChainStateStorageProtoMsg): _15.MsgPurchaseWrkChainStateStorage;
                toProto(message: _15.MsgPurchaseWrkChainStateStorage): Uint8Array;
                toProtoMsg(message: _15.MsgPurchaseWrkChainStateStorage): _15.MsgPurchaseWrkChainStateStorageProtoMsg;
            };
            MsgPurchaseWrkChainStateStorageResponse: {
                typeUrl: string;
                is(o: any): o is _15.MsgPurchaseWrkChainStateStorageResponse;
                isSDK(o: any): o is _15.MsgPurchaseWrkChainStateStorageResponseSDKType;
                isAmino(o: any): o is _15.MsgPurchaseWrkChainStateStorageResponseAmino;
                encode(message: _15.MsgPurchaseWrkChainStateStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.MsgPurchaseWrkChainStateStorageResponse;
                fromPartial(object: Partial<_15.MsgPurchaseWrkChainStateStorageResponse>): _15.MsgPurchaseWrkChainStateStorageResponse;
                fromAmino(object: _15.MsgPurchaseWrkChainStateStorageResponseAmino): _15.MsgPurchaseWrkChainStateStorageResponse;
                toAmino(message: _15.MsgPurchaseWrkChainStateStorageResponse): _15.MsgPurchaseWrkChainStateStorageResponseAmino;
                fromAminoMsg(object: _15.MsgPurchaseWrkChainStateStorageResponseAminoMsg): _15.MsgPurchaseWrkChainStateStorageResponse;
                fromProtoMsg(message: _15.MsgPurchaseWrkChainStateStorageResponseProtoMsg): _15.MsgPurchaseWrkChainStateStorageResponse;
                toProto(message: _15.MsgPurchaseWrkChainStateStorageResponse): Uint8Array;
                toProtoMsg(message: _15.MsgPurchaseWrkChainStateStorageResponse): _15.MsgPurchaseWrkChainStateStorageResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _15.MsgUpdateParams;
                isSDK(o: any): o is _15.MsgUpdateParamsSDKType;
                isAmino(o: any): o is _15.MsgUpdateParamsAmino;
                encode(message: _15.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.MsgUpdateParams;
                fromPartial(object: Partial<_15.MsgUpdateParams>): _15.MsgUpdateParams;
                fromAmino(object: _15.MsgUpdateParamsAmino): _15.MsgUpdateParams;
                toAmino(message: _15.MsgUpdateParams): _15.MsgUpdateParamsAmino;
                fromAminoMsg(object: _15.MsgUpdateParamsAminoMsg): _15.MsgUpdateParams;
                toAminoMsg(message: _15.MsgUpdateParams): _15.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _15.MsgUpdateParamsProtoMsg): _15.MsgUpdateParams;
                toProto(message: _15.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _15.MsgUpdateParams): _15.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                is(o: any): o is _15.MsgUpdateParamsResponse;
                isSDK(o: any): o is _15.MsgUpdateParamsResponseSDKType;
                isAmino(o: any): o is _15.MsgUpdateParamsResponseAmino;
                encode(_: _15.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_15.MsgUpdateParamsResponse>): _15.MsgUpdateParamsResponse;
                fromAmino(_: _15.MsgUpdateParamsResponseAmino): _15.MsgUpdateParamsResponse;
                toAmino(_: _15.MsgUpdateParamsResponse): _15.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _15.MsgUpdateParamsResponseAminoMsg): _15.MsgUpdateParamsResponse;
                fromProtoMsg(message: _15.MsgUpdateParamsResponseProtoMsg): _15.MsgUpdateParamsResponse;
                toProto(message: _15.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _15.MsgUpdateParamsResponse): _15.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                is(o: any): o is _14.QueryParamsRequest;
                isSDK(o: any): o is _14.QueryParamsRequestSDKType;
                isAmino(o: any): o is _14.QueryParamsRequestAmino;
                encode(_: _14.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.QueryParamsRequest;
                fromPartial(_: Partial<_14.QueryParamsRequest>): _14.QueryParamsRequest;
                fromAmino(_: _14.QueryParamsRequestAmino): _14.QueryParamsRequest;
                toAmino(_: _14.QueryParamsRequest): _14.QueryParamsRequestAmino;
                fromAminoMsg(object: _14.QueryParamsRequestAminoMsg): _14.QueryParamsRequest;
                fromProtoMsg(message: _14.QueryParamsRequestProtoMsg): _14.QueryParamsRequest;
                toProto(message: _14.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryParamsRequest): _14.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                is(o: any): o is _14.QueryParamsResponse;
                isSDK(o: any): o is _14.QueryParamsResponseSDKType;
                isAmino(o: any): o is _14.QueryParamsResponseAmino;
                encode(message: _14.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.QueryParamsResponse;
                fromPartial(object: Partial<_14.QueryParamsResponse>): _14.QueryParamsResponse;
                fromAmino(object: _14.QueryParamsResponseAmino): _14.QueryParamsResponse;
                toAmino(message: _14.QueryParamsResponse): _14.QueryParamsResponseAmino;
                fromAminoMsg(object: _14.QueryParamsResponseAminoMsg): _14.QueryParamsResponse;
                fromProtoMsg(message: _14.QueryParamsResponseProtoMsg): _14.QueryParamsResponse;
                toProto(message: _14.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryParamsResponse): _14.QueryParamsResponseProtoMsg;
            };
            QueryWrkChainRequest: {
                typeUrl: string;
                is(o: any): o is _14.QueryWrkChainRequest;
                isSDK(o: any): o is _14.QueryWrkChainRequestSDKType;
                isAmino(o: any): o is _14.QueryWrkChainRequestAmino;
                encode(message: _14.QueryWrkChainRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.QueryWrkChainRequest;
                fromPartial(object: Partial<_14.QueryWrkChainRequest>): _14.QueryWrkChainRequest;
                fromAmino(object: _14.QueryWrkChainRequestAmino): _14.QueryWrkChainRequest;
                toAmino(message: _14.QueryWrkChainRequest): _14.QueryWrkChainRequestAmino;
                fromAminoMsg(object: _14.QueryWrkChainRequestAminoMsg): _14.QueryWrkChainRequest;
                fromProtoMsg(message: _14.QueryWrkChainRequestProtoMsg): _14.QueryWrkChainRequest;
                toProto(message: _14.QueryWrkChainRequest): Uint8Array;
                toProtoMsg(message: _14.QueryWrkChainRequest): _14.QueryWrkChainRequestProtoMsg;
            };
            QueryWrkChainResponse: {
                typeUrl: string;
                is(o: any): o is _14.QueryWrkChainResponse;
                isSDK(o: any): o is _14.QueryWrkChainResponseSDKType;
                isAmino(o: any): o is _14.QueryWrkChainResponseAmino;
                encode(message: _14.QueryWrkChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.QueryWrkChainResponse;
                fromPartial(object: Partial<_14.QueryWrkChainResponse>): _14.QueryWrkChainResponse;
                fromAmino(object: _14.QueryWrkChainResponseAmino): _14.QueryWrkChainResponse;
                toAmino(message: _14.QueryWrkChainResponse): _14.QueryWrkChainResponseAmino;
                fromAminoMsg(object: _14.QueryWrkChainResponseAminoMsg): _14.QueryWrkChainResponse;
                fromProtoMsg(message: _14.QueryWrkChainResponseProtoMsg): _14.QueryWrkChainResponse;
                toProto(message: _14.QueryWrkChainResponse): Uint8Array;
                toProtoMsg(message: _14.QueryWrkChainResponse): _14.QueryWrkChainResponseProtoMsg;
            };
            QueryWrkChainBlockRequest: {
                typeUrl: string;
                is(o: any): o is _14.QueryWrkChainBlockRequest;
                isSDK(o: any): o is _14.QueryWrkChainBlockRequestSDKType;
                isAmino(o: any): o is _14.QueryWrkChainBlockRequestAmino;
                encode(message: _14.QueryWrkChainBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.QueryWrkChainBlockRequest;
                fromPartial(object: Partial<_14.QueryWrkChainBlockRequest>): _14.QueryWrkChainBlockRequest;
                fromAmino(object: _14.QueryWrkChainBlockRequestAmino): _14.QueryWrkChainBlockRequest;
                toAmino(message: _14.QueryWrkChainBlockRequest): _14.QueryWrkChainBlockRequestAmino;
                fromAminoMsg(object: _14.QueryWrkChainBlockRequestAminoMsg): _14.QueryWrkChainBlockRequest;
                fromProtoMsg(message: _14.QueryWrkChainBlockRequestProtoMsg): _14.QueryWrkChainBlockRequest;
                toProto(message: _14.QueryWrkChainBlockRequest): Uint8Array;
                toProtoMsg(message: _14.QueryWrkChainBlockRequest): _14.QueryWrkChainBlockRequestProtoMsg;
            };
            QueryWrkChainBlockResponse: {
                typeUrl: string;
                is(o: any): o is _14.QueryWrkChainBlockResponse;
                isSDK(o: any): o is _14.QueryWrkChainBlockResponseSDKType;
                isAmino(o: any): o is _14.QueryWrkChainBlockResponseAmino;
                encode(message: _14.QueryWrkChainBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.QueryWrkChainBlockResponse;
                fromPartial(object: Partial<_14.QueryWrkChainBlockResponse>): _14.QueryWrkChainBlockResponse;
                fromAmino(object: _14.QueryWrkChainBlockResponseAmino): _14.QueryWrkChainBlockResponse;
                toAmino(message: _14.QueryWrkChainBlockResponse): _14.QueryWrkChainBlockResponseAmino;
                fromAminoMsg(object: _14.QueryWrkChainBlockResponseAminoMsg): _14.QueryWrkChainBlockResponse;
                fromProtoMsg(message: _14.QueryWrkChainBlockResponseProtoMsg): _14.QueryWrkChainBlockResponse;
                toProto(message: _14.QueryWrkChainBlockResponse): Uint8Array;
                toProtoMsg(message: _14.QueryWrkChainBlockResponse): _14.QueryWrkChainBlockResponseProtoMsg;
            };
            QueryWrkChainsFilteredRequest: {
                typeUrl: string;
                is(o: any): o is _14.QueryWrkChainsFilteredRequest;
                isSDK(o: any): o is _14.QueryWrkChainsFilteredRequestSDKType;
                isAmino(o: any): o is _14.QueryWrkChainsFilteredRequestAmino;
                encode(message: _14.QueryWrkChainsFilteredRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.QueryWrkChainsFilteredRequest;
                fromPartial(object: Partial<_14.QueryWrkChainsFilteredRequest>): _14.QueryWrkChainsFilteredRequest;
                fromAmino(object: _14.QueryWrkChainsFilteredRequestAmino): _14.QueryWrkChainsFilteredRequest;
                toAmino(message: _14.QueryWrkChainsFilteredRequest): _14.QueryWrkChainsFilteredRequestAmino;
                fromAminoMsg(object: _14.QueryWrkChainsFilteredRequestAminoMsg): _14.QueryWrkChainsFilteredRequest;
                fromProtoMsg(message: _14.QueryWrkChainsFilteredRequestProtoMsg): _14.QueryWrkChainsFilteredRequest;
                toProto(message: _14.QueryWrkChainsFilteredRequest): Uint8Array;
                toProtoMsg(message: _14.QueryWrkChainsFilteredRequest): _14.QueryWrkChainsFilteredRequestProtoMsg;
            };
            QueryWrkChainsFilteredResponse: {
                typeUrl: string;
                is(o: any): o is _14.QueryWrkChainsFilteredResponse;
                isSDK(o: any): o is _14.QueryWrkChainsFilteredResponseSDKType;
                isAmino(o: any): o is _14.QueryWrkChainsFilteredResponseAmino;
                encode(message: _14.QueryWrkChainsFilteredResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.QueryWrkChainsFilteredResponse;
                fromPartial(object: Partial<_14.QueryWrkChainsFilteredResponse>): _14.QueryWrkChainsFilteredResponse;
                fromAmino(object: _14.QueryWrkChainsFilteredResponseAmino): _14.QueryWrkChainsFilteredResponse;
                toAmino(message: _14.QueryWrkChainsFilteredResponse): _14.QueryWrkChainsFilteredResponseAmino;
                fromAminoMsg(object: _14.QueryWrkChainsFilteredResponseAminoMsg): _14.QueryWrkChainsFilteredResponse;
                fromProtoMsg(message: _14.QueryWrkChainsFilteredResponseProtoMsg): _14.QueryWrkChainsFilteredResponse;
                toProto(message: _14.QueryWrkChainsFilteredResponse): Uint8Array;
                toProtoMsg(message: _14.QueryWrkChainsFilteredResponse): _14.QueryWrkChainsFilteredResponseProtoMsg;
            };
            QueryWrkChainStorageRequest: {
                typeUrl: string;
                is(o: any): o is _14.QueryWrkChainStorageRequest;
                isSDK(o: any): o is _14.QueryWrkChainStorageRequestSDKType;
                isAmino(o: any): o is _14.QueryWrkChainStorageRequestAmino;
                encode(message: _14.QueryWrkChainStorageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.QueryWrkChainStorageRequest;
                fromPartial(object: Partial<_14.QueryWrkChainStorageRequest>): _14.QueryWrkChainStorageRequest;
                fromAmino(object: _14.QueryWrkChainStorageRequestAmino): _14.QueryWrkChainStorageRequest;
                toAmino(message: _14.QueryWrkChainStorageRequest): _14.QueryWrkChainStorageRequestAmino;
                fromAminoMsg(object: _14.QueryWrkChainStorageRequestAminoMsg): _14.QueryWrkChainStorageRequest;
                fromProtoMsg(message: _14.QueryWrkChainStorageRequestProtoMsg): _14.QueryWrkChainStorageRequest;
                toProto(message: _14.QueryWrkChainStorageRequest): Uint8Array;
                toProtoMsg(message: _14.QueryWrkChainStorageRequest): _14.QueryWrkChainStorageRequestProtoMsg;
            };
            QueryWrkChainStorageResponse: {
                typeUrl: string;
                is(o: any): o is _14.QueryWrkChainStorageResponse;
                isSDK(o: any): o is _14.QueryWrkChainStorageResponseSDKType;
                isAmino(o: any): o is _14.QueryWrkChainStorageResponseAmino;
                encode(message: _14.QueryWrkChainStorageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.QueryWrkChainStorageResponse;
                fromPartial(object: Partial<_14.QueryWrkChainStorageResponse>): _14.QueryWrkChainStorageResponse;
                fromAmino(object: _14.QueryWrkChainStorageResponseAmino): _14.QueryWrkChainStorageResponse;
                toAmino(message: _14.QueryWrkChainStorageResponse): _14.QueryWrkChainStorageResponseAmino;
                fromAminoMsg(object: _14.QueryWrkChainStorageResponseAminoMsg): _14.QueryWrkChainStorageResponse;
                fromProtoMsg(message: _14.QueryWrkChainStorageResponseProtoMsg): _14.QueryWrkChainStorageResponse;
                toProto(message: _14.QueryWrkChainStorageResponse): Uint8Array;
                toProtoMsg(message: _14.QueryWrkChainStorageResponse): _14.QueryWrkChainStorageResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                is(o: any): o is _13.GenesisState;
                isSDK(o: any): o is _13.GenesisStateSDKType;
                isAmino(o: any): o is _13.GenesisStateAmino;
                encode(message: _13.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.GenesisState;
                fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
                fromAmino(object: _13.GenesisStateAmino): _13.GenesisState;
                toAmino(message: _13.GenesisState): _13.GenesisStateAmino;
                fromAminoMsg(object: _13.GenesisStateAminoMsg): _13.GenesisState;
                fromProtoMsg(message: _13.GenesisStateProtoMsg): _13.GenesisState;
                toProto(message: _13.GenesisState): Uint8Array;
                toProtoMsg(message: _13.GenesisState): _13.GenesisStateProtoMsg;
            };
            WrkChainBlockGenesisExport: {
                typeUrl: string;
                is(o: any): o is _13.WrkChainBlockGenesisExport;
                isSDK(o: any): o is _13.WrkChainBlockGenesisExportSDKType;
                isAmino(o: any): o is _13.WrkChainBlockGenesisExportAmino;
                encode(message: _13.WrkChainBlockGenesisExport, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.WrkChainBlockGenesisExport;
                fromPartial(object: Partial<_13.WrkChainBlockGenesisExport>): _13.WrkChainBlockGenesisExport;
                fromAmino(object: _13.WrkChainBlockGenesisExportAmino): _13.WrkChainBlockGenesisExport;
                toAmino(message: _13.WrkChainBlockGenesisExport): _13.WrkChainBlockGenesisExportAmino;
                fromAminoMsg(object: _13.WrkChainBlockGenesisExportAminoMsg): _13.WrkChainBlockGenesisExport;
                fromProtoMsg(message: _13.WrkChainBlockGenesisExportProtoMsg): _13.WrkChainBlockGenesisExport;
                toProto(message: _13.WrkChainBlockGenesisExport): Uint8Array;
                toProtoMsg(message: _13.WrkChainBlockGenesisExport): _13.WrkChainBlockGenesisExportProtoMsg;
            };
            WrkChainExport: {
                typeUrl: string;
                is(o: any): o is _13.WrkChainExport;
                isSDK(o: any): o is _13.WrkChainExportSDKType;
                isAmino(o: any): o is _13.WrkChainExportAmino;
                encode(message: _13.WrkChainExport, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.WrkChainExport;
                fromPartial(object: Partial<_13.WrkChainExport>): _13.WrkChainExport;
                fromAmino(object: _13.WrkChainExportAmino): _13.WrkChainExport;
                toAmino(message: _13.WrkChainExport): _13.WrkChainExportAmino;
                fromAminoMsg(object: _13.WrkChainExportAminoMsg): _13.WrkChainExport;
                fromProtoMsg(message: _13.WrkChainExportProtoMsg): _13.WrkChainExport;
                toProto(message: _13.WrkChainExport): Uint8Array;
                toProtoMsg(message: _13.WrkChainExport): _13.WrkChainExportProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            mainchain: {
                beacon: {
                    v1: _141.MsgClientImpl;
                };
                enterprise: {
                    v1: _142.MsgClientImpl;
                };
                stream: {
                    v1: _143.MsgClientImpl;
                };
                wrkchain: {
                    v1: _144.MsgClientImpl;
                };
            };
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
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            mainchain: {
                beacon: {
                    v1: {
                        params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                        beacon(request: _2.QueryBeaconRequest): Promise<_2.QueryBeaconResponse>;
                        beaconTimestamp(request: _2.QueryBeaconTimestampRequest): Promise<_2.QueryBeaconTimestampResponse>;
                        beaconsFiltered(request: _2.QueryBeaconsFilteredRequest): Promise<_2.QueryBeaconsFilteredResponse>;
                        beaconStorage(request: _2.QueryBeaconStorageRequest): Promise<_2.QueryBeaconStorageResponse>;
                    };
                };
                enterprise: {
                    v1: {
                        params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                        enterpriseUndPurchaseOrder(request: _6.QueryEnterpriseUndPurchaseOrderRequest): Promise<_6.QueryEnterpriseUndPurchaseOrderResponse>;
                        enterpriseUndPurchaseOrders(request: _6.QueryEnterpriseUndPurchaseOrdersRequest): Promise<_6.QueryEnterpriseUndPurchaseOrdersResponse>;
                        lockedUndByAddress(request: _6.QueryLockedUndByAddressRequest): Promise<_6.QueryLockedUndByAddressResponse>;
                        totalLocked(request?: _6.QueryTotalLockedRequest): Promise<_6.QueryTotalLockedResponse>;
                        totalUnlocked(request?: _6.QueryTotalUnlockedRequest): Promise<_6.QueryTotalUnlockedResponse>;
                        enterpriseSupply(request?: _6.QueryEnterpriseSupplyRequest): Promise<_6.QueryEnterpriseSupplyResponse>;
                        totalSupply(request?: _6.QueryTotalSupplyRequest): Promise<_6.QueryTotalSupplyResponse>;
                        supplyOf(request: _6.QuerySupplyOfRequest): Promise<_6.QuerySupplyOfResponse>;
                        totalSupplyOverwrite(request?: _6.QueryTotalSupplyRequest): Promise<_6.QueryTotalSupplyResponse>;
                        supplyOfOverwrite(request: _6.QuerySupplyOfRequest): Promise<_6.QuerySupplyOfResponse>;
                        whitelist(request?: _6.QueryWhitelistRequest): Promise<_6.QueryWhitelistResponse>;
                        whitelisted(request: _6.QueryWhitelistedRequest): Promise<_6.QueryWhitelistedResponse>;
                        enterpriseAccount(request: _6.QueryEnterpriseAccountRequest): Promise<_6.QueryEnterpriseAccountResponse>;
                        totalSpentEFUND(request?: _6.QueryTotalSpentEFUNDRequest): Promise<_6.QueryTotalSpentEFUNDResponse>;
                        spentEFUNDByAddress(request: _6.QuerySpentEFUNDByAddressRequest): Promise<_6.QuerySpentEFUNDByAddressResponse>;
                    };
                };
                stream: {
                    v1: {
                        params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                        calculateFlowRate(request: _10.QueryCalculateFlowRateRequest): Promise<_10.QueryCalculateFlowRateResponse>;
                        streams(request?: _10.QueryStreamsRequest): Promise<_10.QueryStreamsResponse>;
                        allStreamsForReceiver(request: _10.QueryAllStreamsForReceiverRequest): Promise<_10.QueryAllStreamsForReceiverResponse>;
                        streamByReceiverSender(request: _10.QueryStreamByReceiverSenderRequest): Promise<_10.QueryStreamByReceiverSenderResponse>;
                        streamReceiverSenderCurrentFlow(request: _10.QueryStreamReceiverSenderCurrentFlowRequest): Promise<_10.QueryStreamReceiverSenderCurrentFlowResponse>;
                        allStreamsForSender(request: _10.QueryAllStreamsForSenderRequest): Promise<_10.QueryAllStreamsForSenderResponse>;
                    };
                };
                wrkchain: {
                    v1: {
                        params(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
                        wrkChain(request: _14.QueryWrkChainRequest): Promise<_14.QueryWrkChainResponse>;
                        wrkChainBlock(request: _14.QueryWrkChainBlockRequest): Promise<_14.QueryWrkChainBlockResponse>;
                        wrkChainsFiltered(request: _14.QueryWrkChainsFilteredRequest): Promise<_14.QueryWrkChainsFilteredResponse>;
                        wrkChainStorage(request: _14.QueryWrkChainStorageRequest): Promise<_14.QueryWrkChainStorageResponse>;
                    };
                };
            };
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
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            mainchain: {
                beacon: {
                    v1: _133.LCDQueryClient;
                };
                enterprise: {
                    v1: _134.LCDQueryClient;
                };
                stream: {
                    v1: _135.LCDQueryClient;
                };
                wrkchain: {
                    v1: _136.LCDQueryClient;
                };
            };
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
        }>;
    };
}
