"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamExport = exports.GenesisState = void 0;
//@ts-nocheck
const params_1 = require("./params");
const stream_1 = require("./stream");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        streams: []
    };
}
exports.GenesisState = {
    typeUrl: "/mainchain.stream.v1.GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || params_1.Params.is(o.params) && Array.isArray(o.streams) && (!o.streams.length || exports.StreamExport.is(o.streams[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || params_1.Params.isSDK(o.params) && Array.isArray(o.streams) && (!o.streams.length || exports.StreamExport.isSDK(o.streams[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || params_1.Params.isAmino(o.params) && Array.isArray(o.streams) && (!o.streams.length || exports.StreamExport.isAmino(o.streams[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.streams) {
            exports.StreamExport.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.streams.push(exports.StreamExport.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.streams = object.streams?.map(e => exports.StreamExport.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        message.streams = object.streams?.map(e => exports.StreamExport.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.streams) {
            obj.streams = message.streams.map(e => e ? exports.StreamExport.toAmino(e) : undefined);
        }
        else {
            obj.streams = message.streams;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
function createBaseStreamExport() {
    return {
        receiver: "",
        sender: "",
        stream: stream_1.Stream.fromPartial({})
    };
}
exports.StreamExport = {
    typeUrl: "/mainchain.stream.v1.StreamExport",
    is(o) {
        return o && (o.$typeUrl === exports.StreamExport.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && stream_1.Stream.is(o.stream));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.StreamExport.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && stream_1.Stream.isSDK(o.stream));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.StreamExport.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && stream_1.Stream.isAmino(o.stream));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.receiver !== "") {
            writer.uint32(10).string(message.receiver);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.stream !== undefined) {
            stream_1.Stream.encode(message.stream, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamExport();
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
                    message.stream = stream_1.Stream.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStreamExport();
        message.receiver = object.receiver ?? "";
        message.sender = object.sender ?? "";
        message.stream = object.stream !== undefined && object.stream !== null ? stream_1.Stream.fromPartial(object.stream) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseStreamExport();
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.stream !== undefined && object.stream !== null) {
            message.stream = stream_1.Stream.fromAmino(object.stream);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.receiver = message.receiver === "" ? undefined : message.receiver;
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.stream = message.stream ? stream_1.Stream.toAmino(message.stream) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StreamExport.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.StreamExport.decode(message.value);
    },
    toProto(message) {
        return exports.StreamExport.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.StreamExport",
            value: exports.StreamExport.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.StreamExport.typeUrl, exports.StreamExport);
