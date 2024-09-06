"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.WrkChainBlock = exports.WrkChainStorageLimit = exports.WrkChain = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseWrkChain() {
    return {
        wrkchainId: BigInt(0),
        moniker: "",
        name: "",
        genesis: "",
        type: "",
        lastblock: BigInt(0),
        numBlocks: BigInt(0),
        lowestHeight: BigInt(0),
        regTime: BigInt(0),
        owner: ""
    };
}
exports.WrkChain = {
    typeUrl: "/mainchain.wrkchain.v1.WrkChain",
    is(o) {
        return o && (o.$typeUrl === exports.WrkChain.typeUrl || typeof o.wrkchainId === "bigint" && typeof o.moniker === "string" && typeof o.name === "string" && typeof o.genesis === "string" && typeof o.type === "string" && typeof o.lastblock === "bigint" && typeof o.numBlocks === "bigint" && typeof o.lowestHeight === "bigint" && typeof o.regTime === "bigint" && typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.WrkChain.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.moniker === "string" && typeof o.name === "string" && typeof o.genesis === "string" && typeof o.type === "string" && typeof o.lastblock === "bigint" && typeof o.num_blocks === "bigint" && typeof o.lowest_height === "bigint" && typeof o.reg_time === "bigint" && typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.WrkChain.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.moniker === "string" && typeof o.name === "string" && typeof o.genesis === "string" && typeof o.type === "string" && typeof o.lastblock === "bigint" && typeof o.num_blocks === "bigint" && typeof o.lowest_height === "bigint" && typeof o.reg_time === "bigint" && typeof o.owner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.wrkchainId !== BigInt(0)) {
            writer.uint32(8).uint64(message.wrkchainId);
        }
        if (message.moniker !== "") {
            writer.uint32(18).string(message.moniker);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.genesis !== "") {
            writer.uint32(34).string(message.genesis);
        }
        if (message.type !== "") {
            writer.uint32(42).string(message.type);
        }
        if (message.lastblock !== BigInt(0)) {
            writer.uint32(48).uint64(message.lastblock);
        }
        if (message.numBlocks !== BigInt(0)) {
            writer.uint32(56).uint64(message.numBlocks);
        }
        if (message.lowestHeight !== BigInt(0)) {
            writer.uint32(64).uint64(message.lowestHeight);
        }
        if (message.regTime !== BigInt(0)) {
            writer.uint32(72).uint64(message.regTime);
        }
        if (message.owner !== "") {
            writer.uint32(82).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWrkChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wrkchainId = reader.uint64();
                    break;
                case 2:
                    message.moniker = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.genesis = reader.string();
                    break;
                case 5:
                    message.type = reader.string();
                    break;
                case 6:
                    message.lastblock = reader.uint64();
                    break;
                case 7:
                    message.numBlocks = reader.uint64();
                    break;
                case 8:
                    message.lowestHeight = reader.uint64();
                    break;
                case 9:
                    message.regTime = reader.uint64();
                    break;
                case 10:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseWrkChain();
        message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
        message.moniker = object.moniker ?? "";
        message.name = object.name ?? "";
        message.genesis = object.genesis ?? "";
        message.type = object.type ?? "";
        message.lastblock = object.lastblock !== undefined && object.lastblock !== null ? BigInt(object.lastblock.toString()) : BigInt(0);
        message.numBlocks = object.numBlocks !== undefined && object.numBlocks !== null ? BigInt(object.numBlocks.toString()) : BigInt(0);
        message.lowestHeight = object.lowestHeight !== undefined && object.lowestHeight !== null ? BigInt(object.lowestHeight.toString()) : BigInt(0);
        message.regTime = object.regTime !== undefined && object.regTime !== null ? BigInt(object.regTime.toString()) : BigInt(0);
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseWrkChain();
        if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
            message.wrkchainId = BigInt(object.wrkchain_id);
        }
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.genesis !== undefined && object.genesis !== null) {
            message.genesis = object.genesis;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.lastblock !== undefined && object.lastblock !== null) {
            message.lastblock = BigInt(object.lastblock);
        }
        if (object.num_blocks !== undefined && object.num_blocks !== null) {
            message.numBlocks = BigInt(object.num_blocks);
        }
        if (object.lowest_height !== undefined && object.lowest_height !== null) {
            message.lowestHeight = BigInt(object.lowest_height);
        }
        if (object.reg_time !== undefined && object.reg_time !== null) {
            message.regTime = BigInt(object.reg_time);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
        obj.moniker = message.moniker === "" ? undefined : message.moniker;
        obj.name = message.name === "" ? undefined : message.name;
        obj.genesis = message.genesis === "" ? undefined : message.genesis;
        obj.type = message.type === "" ? undefined : message.type;
        obj.lastblock = message.lastblock !== BigInt(0) ? message.lastblock.toString() : undefined;
        obj.num_blocks = message.numBlocks !== BigInt(0) ? message.numBlocks.toString() : undefined;
        obj.lowest_height = message.lowestHeight !== BigInt(0) ? message.lowestHeight.toString() : undefined;
        obj.reg_time = message.regTime !== BigInt(0) ? message.regTime.toString() : undefined;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.WrkChain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.WrkChain.decode(message.value);
    },
    toProto(message) {
        return exports.WrkChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.WrkChain",
            value: exports.WrkChain.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.WrkChain.typeUrl, exports.WrkChain);
function createBaseWrkChainStorageLimit() {
    return {
        wrkchainId: BigInt(0),
        inStateLimit: BigInt(0)
    };
}
exports.WrkChainStorageLimit = {
    typeUrl: "/mainchain.wrkchain.v1.WrkChainStorageLimit",
    is(o) {
        return o && (o.$typeUrl === exports.WrkChainStorageLimit.typeUrl || typeof o.wrkchainId === "bigint" && typeof o.inStateLimit === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.WrkChainStorageLimit.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.in_state_limit === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.WrkChainStorageLimit.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.in_state_limit === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.wrkchainId !== BigInt(0)) {
            writer.uint32(8).uint64(message.wrkchainId);
        }
        if (message.inStateLimit !== BigInt(0)) {
            writer.uint32(16).uint64(message.inStateLimit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWrkChainStorageLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wrkchainId = reader.uint64();
                    break;
                case 2:
                    message.inStateLimit = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseWrkChainStorageLimit();
        message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
        message.inStateLimit = object.inStateLimit !== undefined && object.inStateLimit !== null ? BigInt(object.inStateLimit.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseWrkChainStorageLimit();
        if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
            message.wrkchainId = BigInt(object.wrkchain_id);
        }
        if (object.in_state_limit !== undefined && object.in_state_limit !== null) {
            message.inStateLimit = BigInt(object.in_state_limit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
        obj.in_state_limit = message.inStateLimit !== BigInt(0) ? message.inStateLimit.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.WrkChainStorageLimit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.WrkChainStorageLimit.decode(message.value);
    },
    toProto(message) {
        return exports.WrkChainStorageLimit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.WrkChainStorageLimit",
            value: exports.WrkChainStorageLimit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.WrkChainStorageLimit.typeUrl, exports.WrkChainStorageLimit);
function createBaseWrkChainBlock() {
    return {
        height: BigInt(0),
        blockhash: "",
        parenthash: "",
        hash1: "",
        hash2: "",
        hash3: "",
        subTime: BigInt(0)
    };
}
exports.WrkChainBlock = {
    typeUrl: "/mainchain.wrkchain.v1.WrkChainBlock",
    is(o) {
        return o && (o.$typeUrl === exports.WrkChainBlock.typeUrl || typeof o.height === "bigint" && typeof o.blockhash === "string" && typeof o.parenthash === "string" && typeof o.hash1 === "string" && typeof o.hash2 === "string" && typeof o.hash3 === "string" && typeof o.subTime === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.WrkChainBlock.typeUrl || typeof o.height === "bigint" && typeof o.blockhash === "string" && typeof o.parenthash === "string" && typeof o.hash1 === "string" && typeof o.hash2 === "string" && typeof o.hash3 === "string" && typeof o.sub_time === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.WrkChainBlock.typeUrl || typeof o.height === "bigint" && typeof o.blockhash === "string" && typeof o.parenthash === "string" && typeof o.hash1 === "string" && typeof o.hash2 === "string" && typeof o.hash3 === "string" && typeof o.sub_time === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.blockhash !== "") {
            writer.uint32(18).string(message.blockhash);
        }
        if (message.parenthash !== "") {
            writer.uint32(26).string(message.parenthash);
        }
        if (message.hash1 !== "") {
            writer.uint32(34).string(message.hash1);
        }
        if (message.hash2 !== "") {
            writer.uint32(42).string(message.hash2);
        }
        if (message.hash3 !== "") {
            writer.uint32(50).string(message.hash3);
        }
        if (message.subTime !== BigInt(0)) {
            writer.uint32(56).uint64(message.subTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWrkChainBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.blockhash = reader.string();
                    break;
                case 3:
                    message.parenthash = reader.string();
                    break;
                case 4:
                    message.hash1 = reader.string();
                    break;
                case 5:
                    message.hash2 = reader.string();
                    break;
                case 6:
                    message.hash3 = reader.string();
                    break;
                case 7:
                    message.subTime = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseWrkChainBlock();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.blockhash = object.blockhash ?? "";
        message.parenthash = object.parenthash ?? "";
        message.hash1 = object.hash1 ?? "";
        message.hash2 = object.hash2 ?? "";
        message.hash3 = object.hash3 ?? "";
        message.subTime = object.subTime !== undefined && object.subTime !== null ? BigInt(object.subTime.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseWrkChainBlock();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.blockhash !== undefined && object.blockhash !== null) {
            message.blockhash = object.blockhash;
        }
        if (object.parenthash !== undefined && object.parenthash !== null) {
            message.parenthash = object.parenthash;
        }
        if (object.hash1 !== undefined && object.hash1 !== null) {
            message.hash1 = object.hash1;
        }
        if (object.hash2 !== undefined && object.hash2 !== null) {
            message.hash2 = object.hash2;
        }
        if (object.hash3 !== undefined && object.hash3 !== null) {
            message.hash3 = object.hash3;
        }
        if (object.sub_time !== undefined && object.sub_time !== null) {
            message.subTime = BigInt(object.sub_time);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        obj.blockhash = message.blockhash === "" ? undefined : message.blockhash;
        obj.parenthash = message.parenthash === "" ? undefined : message.parenthash;
        obj.hash1 = message.hash1 === "" ? undefined : message.hash1;
        obj.hash2 = message.hash2 === "" ? undefined : message.hash2;
        obj.hash3 = message.hash3 === "" ? undefined : message.hash3;
        obj.sub_time = message.subTime !== BigInt(0) ? message.subTime.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.WrkChainBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.WrkChainBlock.decode(message.value);
    },
    toProto(message) {
        return exports.WrkChainBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.WrkChainBlock",
            value: exports.WrkChainBlock.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.WrkChainBlock.typeUrl, exports.WrkChainBlock);
function createBaseParams() {
    return {
        feeRegister: BigInt(0),
        feeRecord: BigInt(0),
        feePurchaseStorage: BigInt(0),
        denom: "",
        defaultStorageLimit: BigInt(0),
        maxStorageLimit: BigInt(0)
    };
}
exports.Params = {
    typeUrl: "/mainchain.wrkchain.v1.Params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.feeRegister === "bigint" && typeof o.feeRecord === "bigint" && typeof o.feePurchaseStorage === "bigint" && typeof o.denom === "string" && typeof o.defaultStorageLimit === "bigint" && typeof o.maxStorageLimit === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.fee_register === "bigint" && typeof o.fee_record === "bigint" && typeof o.fee_purchase_storage === "bigint" && typeof o.denom === "string" && typeof o.default_storage_limit === "bigint" && typeof o.max_storage_limit === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.fee_register === "bigint" && typeof o.fee_record === "bigint" && typeof o.fee_purchase_storage === "bigint" && typeof o.denom === "string" && typeof o.default_storage_limit === "bigint" && typeof o.max_storage_limit === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.feeRegister !== BigInt(0)) {
            writer.uint32(8).uint64(message.feeRegister);
        }
        if (message.feeRecord !== BigInt(0)) {
            writer.uint32(16).uint64(message.feeRecord);
        }
        if (message.feePurchaseStorage !== BigInt(0)) {
            writer.uint32(24).uint64(message.feePurchaseStorage);
        }
        if (message.denom !== "") {
            writer.uint32(34).string(message.denom);
        }
        if (message.defaultStorageLimit !== BigInt(0)) {
            writer.uint32(40).uint64(message.defaultStorageLimit);
        }
        if (message.maxStorageLimit !== BigInt(0)) {
            writer.uint32(48).uint64(message.maxStorageLimit);
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
                    message.feeRegister = reader.uint64();
                    break;
                case 2:
                    message.feeRecord = reader.uint64();
                    break;
                case 3:
                    message.feePurchaseStorage = reader.uint64();
                    break;
                case 4:
                    message.denom = reader.string();
                    break;
                case 5:
                    message.defaultStorageLimit = reader.uint64();
                    break;
                case 6:
                    message.maxStorageLimit = reader.uint64();
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
        message.feeRegister = object.feeRegister !== undefined && object.feeRegister !== null ? BigInt(object.feeRegister.toString()) : BigInt(0);
        message.feeRecord = object.feeRecord !== undefined && object.feeRecord !== null ? BigInt(object.feeRecord.toString()) : BigInt(0);
        message.feePurchaseStorage = object.feePurchaseStorage !== undefined && object.feePurchaseStorage !== null ? BigInt(object.feePurchaseStorage.toString()) : BigInt(0);
        message.denom = object.denom ?? "";
        message.defaultStorageLimit = object.defaultStorageLimit !== undefined && object.defaultStorageLimit !== null ? BigInt(object.defaultStorageLimit.toString()) : BigInt(0);
        message.maxStorageLimit = object.maxStorageLimit !== undefined && object.maxStorageLimit !== null ? BigInt(object.maxStorageLimit.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.fee_register !== undefined && object.fee_register !== null) {
            message.feeRegister = BigInt(object.fee_register);
        }
        if (object.fee_record !== undefined && object.fee_record !== null) {
            message.feeRecord = BigInt(object.fee_record);
        }
        if (object.fee_purchase_storage !== undefined && object.fee_purchase_storage !== null) {
            message.feePurchaseStorage = BigInt(object.fee_purchase_storage);
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.default_storage_limit !== undefined && object.default_storage_limit !== null) {
            message.defaultStorageLimit = BigInt(object.default_storage_limit);
        }
        if (object.max_storage_limit !== undefined && object.max_storage_limit !== null) {
            message.maxStorageLimit = BigInt(object.max_storage_limit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fee_register = message.feeRegister !== BigInt(0) ? message.feeRegister.toString() : undefined;
        obj.fee_record = message.feeRecord !== BigInt(0) ? message.feeRecord.toString() : undefined;
        obj.fee_purchase_storage = message.feePurchaseStorage !== BigInt(0) ? message.feePurchaseStorage.toString() : undefined;
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.default_storage_limit = message.defaultStorageLimit !== BigInt(0) ? message.defaultStorageLimit.toString() : undefined;
        obj.max_storage_limit = message.maxStorageLimit !== BigInt(0) ? message.maxStorageLimit.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
