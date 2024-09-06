"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.Version = exports.ConnectionPaths = exports.ClientPaths = exports.Counterparty = exports.IdentifiedConnection = exports.ConnectionEnd = exports.StateAmino = exports.StateSDKType = exports.State = void 0;
exports.stateFromJSON = stateFromJSON;
exports.stateToJSON = stateToJSON;
//@ts-nocheck
const commitment_1 = require("../../commitment/v1/commitment");
const helpers_1 = require("../../../../helpers");
const binary_1 = require("../../../../binary");
const registry_1 = require("../../../../registry");
/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
var State;
(function (State) {
    /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
    State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
    /** STATE_INIT - A connection end has just started the opening handshake. */
    State[State["STATE_INIT"] = 1] = "STATE_INIT";
    /**
     * STATE_TRYOPEN - A connection end has acknowledged the handshake step on the counterparty
     * chain.
     */
    State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
    /** STATE_OPEN - A connection end has completed the handshake. */
    State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
    State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State || (exports.State = State = {}));
exports.StateSDKType = State;
exports.StateAmino = State;
function stateFromJSON(object) {
    switch (object) {
        case 0:
        case "STATE_UNINITIALIZED_UNSPECIFIED":
            return State.STATE_UNINITIALIZED_UNSPECIFIED;
        case 1:
        case "STATE_INIT":
            return State.STATE_INIT;
        case 2:
        case "STATE_TRYOPEN":
            return State.STATE_TRYOPEN;
        case 3:
        case "STATE_OPEN":
            return State.STATE_OPEN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return State.UNRECOGNIZED;
    }
}
function stateToJSON(object) {
    switch (object) {
        case State.STATE_UNINITIALIZED_UNSPECIFIED:
            return "STATE_UNINITIALIZED_UNSPECIFIED";
        case State.STATE_INIT:
            return "STATE_INIT";
        case State.STATE_TRYOPEN:
            return "STATE_TRYOPEN";
        case State.STATE_OPEN:
            return "STATE_OPEN";
        case State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseConnectionEnd() {
    return {
        clientId: "",
        versions: [],
        state: 0,
        counterparty: exports.Counterparty.fromPartial({}),
        delayPeriod: BigInt(0)
    };
}
exports.ConnectionEnd = {
    typeUrl: "/ibc.core.connection.v1.ConnectionEnd",
    aminoType: "cosmos-sdk/ConnectionEnd",
    is(o) {
        return o && (o.$typeUrl === exports.ConnectionEnd.typeUrl || typeof o.clientId === "string" && Array.isArray(o.versions) && (!o.versions.length || exports.Version.is(o.versions[0])) && (0, helpers_1.isSet)(o.state) && exports.Counterparty.is(o.counterparty) && typeof o.delayPeriod === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ConnectionEnd.typeUrl || typeof o.client_id === "string" && Array.isArray(o.versions) && (!o.versions.length || exports.Version.isSDK(o.versions[0])) && (0, helpers_1.isSet)(o.state) && exports.Counterparty.isSDK(o.counterparty) && typeof o.delay_period === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ConnectionEnd.typeUrl || typeof o.client_id === "string" && Array.isArray(o.versions) && (!o.versions.length || exports.Version.isAmino(o.versions[0])) && (0, helpers_1.isSet)(o.state) && exports.Counterparty.isAmino(o.counterparty) && typeof o.delay_period === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        for (const v of message.versions) {
            exports.Version.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.counterparty !== undefined) {
            exports.Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (message.delayPeriod !== BigInt(0)) {
            writer.uint32(40).uint64(message.delayPeriod);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectionEnd();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.versions.push(exports.Version.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.counterparty = exports.Counterparty.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.delayPeriod = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConnectionEnd();
        message.clientId = object.clientId ?? "";
        message.versions = object.versions?.map(e => exports.Version.fromPartial(e)) || [];
        message.state = object.state ?? 0;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? exports.Counterparty.fromPartial(object.counterparty) : undefined;
        message.delayPeriod = object.delayPeriod !== undefined && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseConnectionEnd();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        message.versions = object.versions?.map(e => exports.Version.fromAmino(e)) || [];
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = exports.Counterparty.fromAmino(object.counterparty);
        }
        if (object.delay_period !== undefined && object.delay_period !== null) {
            message.delayPeriod = BigInt(object.delay_period);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId === "" ? undefined : message.clientId;
        if (message.versions) {
            obj.versions = message.versions.map(e => e ? exports.Version.toAmino(e) : undefined);
        }
        else {
            obj.versions = message.versions;
        }
        obj.state = message.state === 0 ? undefined : message.state;
        obj.counterparty = message.counterparty ? exports.Counterparty.toAmino(message.counterparty) : undefined;
        obj.delay_period = message.delayPeriod !== BigInt(0) ? message.delayPeriod.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConnectionEnd.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConnectionEnd",
            value: exports.ConnectionEnd.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConnectionEnd.decode(message.value);
    },
    toProto(message) {
        return exports.ConnectionEnd.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.ConnectionEnd",
            value: exports.ConnectionEnd.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ConnectionEnd.typeUrl, exports.ConnectionEnd);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ConnectionEnd.aminoType, exports.ConnectionEnd.typeUrl);
function createBaseIdentifiedConnection() {
    return {
        id: "",
        clientId: "",
        versions: [],
        state: 0,
        counterparty: exports.Counterparty.fromPartial({}),
        delayPeriod: BigInt(0)
    };
}
exports.IdentifiedConnection = {
    typeUrl: "/ibc.core.connection.v1.IdentifiedConnection",
    aminoType: "cosmos-sdk/IdentifiedConnection",
    is(o) {
        return o && (o.$typeUrl === exports.IdentifiedConnection.typeUrl || typeof o.id === "string" && typeof o.clientId === "string" && Array.isArray(o.versions) && (!o.versions.length || exports.Version.is(o.versions[0])) && (0, helpers_1.isSet)(o.state) && exports.Counterparty.is(o.counterparty) && typeof o.delayPeriod === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.IdentifiedConnection.typeUrl || typeof o.id === "string" && typeof o.client_id === "string" && Array.isArray(o.versions) && (!o.versions.length || exports.Version.isSDK(o.versions[0])) && (0, helpers_1.isSet)(o.state) && exports.Counterparty.isSDK(o.counterparty) && typeof o.delay_period === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.IdentifiedConnection.typeUrl || typeof o.id === "string" && typeof o.client_id === "string" && Array.isArray(o.versions) && (!o.versions.length || exports.Version.isAmino(o.versions[0])) && (0, helpers_1.isSet)(o.state) && exports.Counterparty.isAmino(o.counterparty) && typeof o.delay_period === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.clientId !== "") {
            writer.uint32(18).string(message.clientId);
        }
        for (const v of message.versions) {
            exports.Version.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.counterparty !== undefined) {
            exports.Counterparty.encode(message.counterparty, writer.uint32(42).fork()).ldelim();
        }
        if (message.delayPeriod !== BigInt(0)) {
            writer.uint32(48).uint64(message.delayPeriod);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedConnection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.clientId = reader.string();
                    break;
                case 3:
                    message.versions.push(exports.Version.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.state = reader.int32();
                    break;
                case 5:
                    message.counterparty = exports.Counterparty.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.delayPeriod = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIdentifiedConnection();
        message.id = object.id ?? "";
        message.clientId = object.clientId ?? "";
        message.versions = object.versions?.map(e => exports.Version.fromPartial(e)) || [];
        message.state = object.state ?? 0;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? exports.Counterparty.fromPartial(object.counterparty) : undefined;
        message.delayPeriod = object.delayPeriod !== undefined && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseIdentifiedConnection();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        message.versions = object.versions?.map(e => exports.Version.fromAmino(e)) || [];
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = exports.Counterparty.fromAmino(object.counterparty);
        }
        if (object.delay_period !== undefined && object.delay_period !== null) {
            message.delayPeriod = BigInt(object.delay_period);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.client_id = message.clientId === "" ? undefined : message.clientId;
        if (message.versions) {
            obj.versions = message.versions.map(e => e ? exports.Version.toAmino(e) : undefined);
        }
        else {
            obj.versions = message.versions;
        }
        obj.state = message.state === 0 ? undefined : message.state;
        obj.counterparty = message.counterparty ? exports.Counterparty.toAmino(message.counterparty) : undefined;
        obj.delay_period = message.delayPeriod !== BigInt(0) ? message.delayPeriod.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IdentifiedConnection.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IdentifiedConnection",
            value: exports.IdentifiedConnection.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.IdentifiedConnection.decode(message.value);
    },
    toProto(message) {
        return exports.IdentifiedConnection.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.IdentifiedConnection",
            value: exports.IdentifiedConnection.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.IdentifiedConnection.typeUrl, exports.IdentifiedConnection);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.IdentifiedConnection.aminoType, exports.IdentifiedConnection.typeUrl);
function createBaseCounterparty() {
    return {
        clientId: "",
        connectionId: "",
        prefix: commitment_1.MerklePrefix.fromPartial({})
    };
}
exports.Counterparty = {
    typeUrl: "/ibc.core.connection.v1.Counterparty",
    aminoType: "cosmos-sdk/Counterparty",
    is(o) {
        return o && (o.$typeUrl === exports.Counterparty.typeUrl || typeof o.clientId === "string" && typeof o.connectionId === "string" && commitment_1.MerklePrefix.is(o.prefix));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Counterparty.typeUrl || typeof o.client_id === "string" && typeof o.connection_id === "string" && commitment_1.MerklePrefix.isSDK(o.prefix));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Counterparty.typeUrl || typeof o.client_id === "string" && typeof o.connection_id === "string" && commitment_1.MerklePrefix.isAmino(o.prefix));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.prefix !== undefined) {
            commitment_1.MerklePrefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCounterparty();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.prefix = commitment_1.MerklePrefix.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCounterparty();
        message.clientId = object.clientId ?? "";
        message.connectionId = object.connectionId ?? "";
        message.prefix = object.prefix !== undefined && object.prefix !== null ? commitment_1.MerklePrefix.fromPartial(object.prefix) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCounterparty();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connectionId = object.connection_id;
        }
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = commitment_1.MerklePrefix.fromAmino(object.prefix);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId === "" ? undefined : message.clientId;
        obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
        obj.prefix = message.prefix ? commitment_1.MerklePrefix.toAmino(message.prefix) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Counterparty.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Counterparty",
            value: exports.Counterparty.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Counterparty.decode(message.value);
    },
    toProto(message) {
        return exports.Counterparty.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.Counterparty",
            value: exports.Counterparty.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Counterparty.typeUrl, exports.Counterparty);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Counterparty.aminoType, exports.Counterparty.typeUrl);
function createBaseClientPaths() {
    return {
        paths: []
    };
}
exports.ClientPaths = {
    typeUrl: "/ibc.core.connection.v1.ClientPaths",
    aminoType: "cosmos-sdk/ClientPaths",
    is(o) {
        return o && (o.$typeUrl === exports.ClientPaths.typeUrl || Array.isArray(o.paths) && (!o.paths.length || typeof o.paths[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ClientPaths.typeUrl || Array.isArray(o.paths) && (!o.paths.length || typeof o.paths[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ClientPaths.typeUrl || Array.isArray(o.paths) && (!o.paths.length || typeof o.paths[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.paths) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientPaths();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paths.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClientPaths();
        message.paths = object.paths?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseClientPaths();
        message.paths = object.paths?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.paths) {
            obj.paths = message.paths.map(e => e);
        }
        else {
            obj.paths = message.paths;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClientPaths.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientPaths",
            value: exports.ClientPaths.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClientPaths.decode(message.value);
    },
    toProto(message) {
        return exports.ClientPaths.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.ClientPaths",
            value: exports.ClientPaths.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ClientPaths.typeUrl, exports.ClientPaths);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ClientPaths.aminoType, exports.ClientPaths.typeUrl);
function createBaseConnectionPaths() {
    return {
        clientId: "",
        paths: []
    };
}
exports.ConnectionPaths = {
    typeUrl: "/ibc.core.connection.v1.ConnectionPaths",
    aminoType: "cosmos-sdk/ConnectionPaths",
    is(o) {
        return o && (o.$typeUrl === exports.ConnectionPaths.typeUrl || typeof o.clientId === "string" && Array.isArray(o.paths) && (!o.paths.length || typeof o.paths[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ConnectionPaths.typeUrl || typeof o.client_id === "string" && Array.isArray(o.paths) && (!o.paths.length || typeof o.paths[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ConnectionPaths.typeUrl || typeof o.client_id === "string" && Array.isArray(o.paths) && (!o.paths.length || typeof o.paths[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        for (const v of message.paths) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectionPaths();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.paths.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConnectionPaths();
        message.clientId = object.clientId ?? "";
        message.paths = object.paths?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseConnectionPaths();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        message.paths = object.paths?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId === "" ? undefined : message.clientId;
        if (message.paths) {
            obj.paths = message.paths.map(e => e);
        }
        else {
            obj.paths = message.paths;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConnectionPaths.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConnectionPaths",
            value: exports.ConnectionPaths.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConnectionPaths.decode(message.value);
    },
    toProto(message) {
        return exports.ConnectionPaths.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.ConnectionPaths",
            value: exports.ConnectionPaths.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ConnectionPaths.typeUrl, exports.ConnectionPaths);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ConnectionPaths.aminoType, exports.ConnectionPaths.typeUrl);
function createBaseVersion() {
    return {
        identifier: "",
        features: []
    };
}
exports.Version = {
    typeUrl: "/ibc.core.connection.v1.Version",
    aminoType: "cosmos-sdk/Version",
    is(o) {
        return o && (o.$typeUrl === exports.Version.typeUrl || typeof o.identifier === "string" && Array.isArray(o.features) && (!o.features.length || typeof o.features[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Version.typeUrl || typeof o.identifier === "string" && Array.isArray(o.features) && (!o.features.length || typeof o.features[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Version.typeUrl || typeof o.identifier === "string" && Array.isArray(o.features) && (!o.features.length || typeof o.features[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.identifier !== "") {
            writer.uint32(10).string(message.identifier);
        }
        for (const v of message.features) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifier = reader.string();
                    break;
                case 2:
                    message.features.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVersion();
        message.identifier = object.identifier ?? "";
        message.features = object.features?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseVersion();
        if (object.identifier !== undefined && object.identifier !== null) {
            message.identifier = object.identifier;
        }
        message.features = object.features?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.identifier = message.identifier === "" ? undefined : message.identifier;
        if (message.features) {
            obj.features = message.features.map(e => e);
        }
        else {
            obj.features = message.features;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Version.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Version",
            value: exports.Version.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Version.decode(message.value);
    },
    toProto(message) {
        return exports.Version.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.Version",
            value: exports.Version.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Version.typeUrl, exports.Version);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Version.aminoType, exports.Version.typeUrl);
function createBaseParams() {
    return {
        maxExpectedTimePerBlock: BigInt(0)
    };
}
exports.Params = {
    typeUrl: "/ibc.core.connection.v1.Params",
    aminoType: "cosmos-sdk/Params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.maxExpectedTimePerBlock === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.max_expected_time_per_block === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.max_expected_time_per_block === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maxExpectedTimePerBlock !== BigInt(0)) {
            writer.uint32(8).uint64(message.maxExpectedTimePerBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxExpectedTimePerBlock = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.maxExpectedTimePerBlock = object.maxExpectedTimePerBlock !== undefined && object.maxExpectedTimePerBlock !== null ? BigInt(object.maxExpectedTimePerBlock.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.max_expected_time_per_block !== undefined && object.max_expected_time_per_block !== null) {
            message.maxExpectedTimePerBlock = BigInt(object.max_expected_time_per_block);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_expected_time_per_block = message.maxExpectedTimePerBlock !== BigInt(0) ? message.maxExpectedTimePerBlock.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
