"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrkChainExport = exports.WrkChainBlockGenesisExport = exports.GenesisState = void 0;
//@ts-nocheck
const wrkchain_1 = require("./wrkchain");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        params: wrkchain_1.Params.fromPartial({}),
        startingWrkchainId: BigInt(0),
        registeredWrkchains: []
    };
}
exports.GenesisState = {
    typeUrl: "/mainchain.wrkchain.v1.GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || wrkchain_1.Params.is(o.params) && typeof o.startingWrkchainId === "bigint" && Array.isArray(o.registeredWrkchains) && (!o.registeredWrkchains.length || exports.WrkChainExport.is(o.registeredWrkchains[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || wrkchain_1.Params.isSDK(o.params) && typeof o.starting_wrkchain_id === "bigint" && Array.isArray(o.registered_wrkchains) && (!o.registered_wrkchains.length || exports.WrkChainExport.isSDK(o.registered_wrkchains[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || wrkchain_1.Params.isAmino(o.params) && typeof o.starting_wrkchain_id === "bigint" && Array.isArray(o.registered_wrkchains) && (!o.registered_wrkchains.length || exports.WrkChainExport.isAmino(o.registered_wrkchains[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            wrkchain_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.startingWrkchainId !== BigInt(0)) {
            writer.uint32(16).uint64(message.startingWrkchainId);
        }
        for (const v of message.registeredWrkchains) {
            exports.WrkChainExport.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.params = wrkchain_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.startingWrkchainId = reader.uint64();
                    break;
                case 3:
                    message.registeredWrkchains.push(exports.WrkChainExport.decode(reader, reader.uint32()));
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
        message.params = object.params !== undefined && object.params !== null ? wrkchain_1.Params.fromPartial(object.params) : undefined;
        message.startingWrkchainId = object.startingWrkchainId !== undefined && object.startingWrkchainId !== null ? BigInt(object.startingWrkchainId.toString()) : BigInt(0);
        message.registeredWrkchains = object.registeredWrkchains?.map(e => exports.WrkChainExport.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = wrkchain_1.Params.fromAmino(object.params);
        }
        if (object.starting_wrkchain_id !== undefined && object.starting_wrkchain_id !== null) {
            message.startingWrkchainId = BigInt(object.starting_wrkchain_id);
        }
        message.registeredWrkchains = object.registered_wrkchains?.map(e => exports.WrkChainExport.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? wrkchain_1.Params.toAmino(message.params) : undefined;
        obj.starting_wrkchain_id = message.startingWrkchainId !== BigInt(0) ? message.startingWrkchainId.toString() : undefined;
        if (message.registeredWrkchains) {
            obj.registered_wrkchains = message.registeredWrkchains.map(e => e ? exports.WrkChainExport.toAmino(e) : undefined);
        }
        else {
            obj.registered_wrkchains = message.registeredWrkchains;
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
            typeUrl: "/mainchain.wrkchain.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
function createBaseWrkChainBlockGenesisExport() {
    return {
        he: BigInt(0),
        bh: "",
        ph: "",
        h1: "",
        h2: "",
        h3: "",
        st: BigInt(0)
    };
}
exports.WrkChainBlockGenesisExport = {
    typeUrl: "/mainchain.wrkchain.v1.WrkChainBlockGenesisExport",
    is(o) {
        return o && (o.$typeUrl === exports.WrkChainBlockGenesisExport.typeUrl || typeof o.he === "bigint" && typeof o.bh === "string" && typeof o.ph === "string" && typeof o.h1 === "string" && typeof o.h2 === "string" && typeof o.h3 === "string" && typeof o.st === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.WrkChainBlockGenesisExport.typeUrl || typeof o.he === "bigint" && typeof o.bh === "string" && typeof o.ph === "string" && typeof o.h1 === "string" && typeof o.h2 === "string" && typeof o.h3 === "string" && typeof o.st === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.WrkChainBlockGenesisExport.typeUrl || typeof o.he === "bigint" && typeof o.bh === "string" && typeof o.ph === "string" && typeof o.h1 === "string" && typeof o.h2 === "string" && typeof o.h3 === "string" && typeof o.st === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.he !== BigInt(0)) {
            writer.uint32(8).uint64(message.he);
        }
        if (message.bh !== "") {
            writer.uint32(18).string(message.bh);
        }
        if (message.ph !== "") {
            writer.uint32(26).string(message.ph);
        }
        if (message.h1 !== "") {
            writer.uint32(34).string(message.h1);
        }
        if (message.h2 !== "") {
            writer.uint32(42).string(message.h2);
        }
        if (message.h3 !== "") {
            writer.uint32(50).string(message.h3);
        }
        if (message.st !== BigInt(0)) {
            writer.uint32(56).uint64(message.st);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWrkChainBlockGenesisExport();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.he = reader.uint64();
                    break;
                case 2:
                    message.bh = reader.string();
                    break;
                case 3:
                    message.ph = reader.string();
                    break;
                case 4:
                    message.h1 = reader.string();
                    break;
                case 5:
                    message.h2 = reader.string();
                    break;
                case 6:
                    message.h3 = reader.string();
                    break;
                case 7:
                    message.st = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseWrkChainBlockGenesisExport();
        message.he = object.he !== undefined && object.he !== null ? BigInt(object.he.toString()) : BigInt(0);
        message.bh = object.bh ?? "";
        message.ph = object.ph ?? "";
        message.h1 = object.h1 ?? "";
        message.h2 = object.h2 ?? "";
        message.h3 = object.h3 ?? "";
        message.st = object.st !== undefined && object.st !== null ? BigInt(object.st.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseWrkChainBlockGenesisExport();
        if (object.he !== undefined && object.he !== null) {
            message.he = BigInt(object.he);
        }
        if (object.bh !== undefined && object.bh !== null) {
            message.bh = object.bh;
        }
        if (object.ph !== undefined && object.ph !== null) {
            message.ph = object.ph;
        }
        if (object.h1 !== undefined && object.h1 !== null) {
            message.h1 = object.h1;
        }
        if (object.h2 !== undefined && object.h2 !== null) {
            message.h2 = object.h2;
        }
        if (object.h3 !== undefined && object.h3 !== null) {
            message.h3 = object.h3;
        }
        if (object.st !== undefined && object.st !== null) {
            message.st = BigInt(object.st);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.he = message.he !== BigInt(0) ? message.he.toString() : undefined;
        obj.bh = message.bh === "" ? undefined : message.bh;
        obj.ph = message.ph === "" ? undefined : message.ph;
        obj.h1 = message.h1 === "" ? undefined : message.h1;
        obj.h2 = message.h2 === "" ? undefined : message.h2;
        obj.h3 = message.h3 === "" ? undefined : message.h3;
        obj.st = message.st !== BigInt(0) ? message.st.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.WrkChainBlockGenesisExport.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.WrkChainBlockGenesisExport.decode(message.value);
    },
    toProto(message) {
        return exports.WrkChainBlockGenesisExport.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.WrkChainBlockGenesisExport",
            value: exports.WrkChainBlockGenesisExport.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.WrkChainBlockGenesisExport.typeUrl, exports.WrkChainBlockGenesisExport);
function createBaseWrkChainExport() {
    return {
        wrkchain: wrkchain_1.WrkChain.fromPartial({}),
        inStateLimit: BigInt(0),
        blocks: []
    };
}
exports.WrkChainExport = {
    typeUrl: "/mainchain.wrkchain.v1.WrkChainExport",
    is(o) {
        return o && (o.$typeUrl === exports.WrkChainExport.typeUrl || wrkchain_1.WrkChain.is(o.wrkchain) && typeof o.inStateLimit === "bigint" && Array.isArray(o.blocks) && (!o.blocks.length || exports.WrkChainBlockGenesisExport.is(o.blocks[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.WrkChainExport.typeUrl || wrkchain_1.WrkChain.isSDK(o.wrkchain) && typeof o.in_state_limit === "bigint" && Array.isArray(o.blocks) && (!o.blocks.length || exports.WrkChainBlockGenesisExport.isSDK(o.blocks[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.WrkChainExport.typeUrl || wrkchain_1.WrkChain.isAmino(o.wrkchain) && typeof o.in_state_limit === "bigint" && Array.isArray(o.blocks) && (!o.blocks.length || exports.WrkChainBlockGenesisExport.isAmino(o.blocks[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.wrkchain !== undefined) {
            wrkchain_1.WrkChain.encode(message.wrkchain, writer.uint32(10).fork()).ldelim();
        }
        if (message.inStateLimit !== BigInt(0)) {
            writer.uint32(16).uint64(message.inStateLimit);
        }
        for (const v of message.blocks) {
            exports.WrkChainBlockGenesisExport.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWrkChainExport();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wrkchain = wrkchain_1.WrkChain.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.inStateLimit = reader.uint64();
                    break;
                case 3:
                    message.blocks.push(exports.WrkChainBlockGenesisExport.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseWrkChainExport();
        message.wrkchain = object.wrkchain !== undefined && object.wrkchain !== null ? wrkchain_1.WrkChain.fromPartial(object.wrkchain) : undefined;
        message.inStateLimit = object.inStateLimit !== undefined && object.inStateLimit !== null ? BigInt(object.inStateLimit.toString()) : BigInt(0);
        message.blocks = object.blocks?.map(e => exports.WrkChainBlockGenesisExport.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseWrkChainExport();
        if (object.wrkchain !== undefined && object.wrkchain !== null) {
            message.wrkchain = wrkchain_1.WrkChain.fromAmino(object.wrkchain);
        }
        if (object.in_state_limit !== undefined && object.in_state_limit !== null) {
            message.inStateLimit = BigInt(object.in_state_limit);
        }
        message.blocks = object.blocks?.map(e => exports.WrkChainBlockGenesisExport.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.wrkchain = message.wrkchain ? wrkchain_1.WrkChain.toAmino(message.wrkchain) : undefined;
        obj.in_state_limit = message.inStateLimit !== BigInt(0) ? message.inStateLimit.toString() : undefined;
        if (message.blocks) {
            obj.blocks = message.blocks.map(e => e ? exports.WrkChainBlockGenesisExport.toAmino(e) : undefined);
        }
        else {
            obj.blocks = message.blocks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.WrkChainExport.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.WrkChainExport.decode(message.value);
    },
    toProto(message) {
        return exports.WrkChainExport.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.WrkChainExport",
            value: exports.WrkChainExport.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.WrkChainExport.typeUrl, exports.WrkChainExport);
