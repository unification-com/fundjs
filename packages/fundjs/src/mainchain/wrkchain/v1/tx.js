"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgPurchaseWrkChainStateStorageResponse = exports.MsgPurchaseWrkChainStateStorage = exports.MsgRecordWrkChainBlockResponse = exports.MsgRecordWrkChainBlock = exports.MsgRegisterWrkChainResponse = exports.MsgRegisterWrkChain = void 0;
//@ts-nocheck
const wrkchain_1 = require("./wrkchain");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseMsgRegisterWrkChain() {
    return {
        moniker: "",
        name: "",
        genesisHash: "",
        baseType: "",
        owner: ""
    };
}
exports.MsgRegisterWrkChain = {
    typeUrl: "/mainchain.wrkchain.v1.MsgRegisterWrkChain",
    is(o) {
        return o && (o.$typeUrl === exports.MsgRegisterWrkChain.typeUrl || typeof o.moniker === "string" && typeof o.name === "string" && typeof o.genesisHash === "string" && typeof o.baseType === "string" && typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgRegisterWrkChain.typeUrl || typeof o.moniker === "string" && typeof o.name === "string" && typeof o.genesis_hash === "string" && typeof o.base_type === "string" && typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgRegisterWrkChain.typeUrl || typeof o.moniker === "string" && typeof o.name === "string" && typeof o.genesis_hash === "string" && typeof o.base_type === "string" && typeof o.owner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.moniker !== "") {
            writer.uint32(18).string(message.moniker);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.genesisHash !== "") {
            writer.uint32(34).string(message.genesisHash);
        }
        if (message.baseType !== "") {
            writer.uint32(42).string(message.baseType);
        }
        if (message.owner !== "") {
            writer.uint32(50).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterWrkChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.moniker = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.genesisHash = reader.string();
                    break;
                case 5:
                    message.baseType = reader.string();
                    break;
                case 6:
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
        const message = createBaseMsgRegisterWrkChain();
        message.moniker = object.moniker ?? "";
        message.name = object.name ?? "";
        message.genesisHash = object.genesisHash ?? "";
        message.baseType = object.baseType ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRegisterWrkChain();
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.genesis_hash !== undefined && object.genesis_hash !== null) {
            message.genesisHash = object.genesis_hash;
        }
        if (object.base_type !== undefined && object.base_type !== null) {
            message.baseType = object.base_type;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.moniker = message.moniker === "" ? undefined : message.moniker;
        obj.name = message.name === "" ? undefined : message.name;
        obj.genesis_hash = message.genesisHash ?? "";
        obj.base_type = message.baseType ?? "";
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRegisterWrkChain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRegisterWrkChain.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRegisterWrkChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.MsgRegisterWrkChain",
            value: exports.MsgRegisterWrkChain.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRegisterWrkChain.typeUrl, exports.MsgRegisterWrkChain);
function createBaseMsgRegisterWrkChainResponse() {
    return {
        wrkchainId: BigInt(0)
    };
}
exports.MsgRegisterWrkChainResponse = {
    typeUrl: "/mainchain.wrkchain.v1.MsgRegisterWrkChainResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgRegisterWrkChainResponse.typeUrl || typeof o.wrkchainId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgRegisterWrkChainResponse.typeUrl || typeof o.wrkchain_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgRegisterWrkChainResponse.typeUrl || typeof o.wrkchain_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.wrkchainId !== BigInt(0)) {
            writer.uint32(8).uint64(message.wrkchainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterWrkChainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wrkchainId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterWrkChainResponse();
        message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRegisterWrkChainResponse();
        if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
            message.wrkchainId = BigInt(object.wrkchain_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRegisterWrkChainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRegisterWrkChainResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRegisterWrkChainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.MsgRegisterWrkChainResponse",
            value: exports.MsgRegisterWrkChainResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRegisterWrkChainResponse.typeUrl, exports.MsgRegisterWrkChainResponse);
function createBaseMsgRecordWrkChainBlock() {
    return {
        wrkchainId: BigInt(0),
        height: BigInt(0),
        blockHash: "",
        parentHash: "",
        hash1: "",
        hash2: "",
        hash3: "",
        owner: ""
    };
}
exports.MsgRecordWrkChainBlock = {
    typeUrl: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock",
    is(o) {
        return o && (o.$typeUrl === exports.MsgRecordWrkChainBlock.typeUrl || typeof o.wrkchainId === "bigint" && typeof o.height === "bigint" && typeof o.blockHash === "string" && typeof o.parentHash === "string" && typeof o.hash1 === "string" && typeof o.hash2 === "string" && typeof o.hash3 === "string" && typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgRecordWrkChainBlock.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.height === "bigint" && typeof o.block_hash === "string" && typeof o.parent_hash === "string" && typeof o.hash1 === "string" && typeof o.hash2 === "string" && typeof o.hash3 === "string" && typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgRecordWrkChainBlock.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.height === "bigint" && typeof o.block_hash === "string" && typeof o.parent_hash === "string" && typeof o.hash1 === "string" && typeof o.hash2 === "string" && typeof o.hash3 === "string" && typeof o.owner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.wrkchainId !== BigInt(0)) {
            writer.uint32(8).uint64(message.wrkchainId);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).uint64(message.height);
        }
        if (message.blockHash !== "") {
            writer.uint32(26).string(message.blockHash);
        }
        if (message.parentHash !== "") {
            writer.uint32(34).string(message.parentHash);
        }
        if (message.hash1 !== "") {
            writer.uint32(42).string(message.hash1);
        }
        if (message.hash2 !== "") {
            writer.uint32(50).string(message.hash2);
        }
        if (message.hash3 !== "") {
            writer.uint32(58).string(message.hash3);
        }
        if (message.owner !== "") {
            writer.uint32(66).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecordWrkChainBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wrkchainId = reader.uint64();
                    break;
                case 2:
                    message.height = reader.uint64();
                    break;
                case 3:
                    message.blockHash = reader.string();
                    break;
                case 4:
                    message.parentHash = reader.string();
                    break;
                case 5:
                    message.hash1 = reader.string();
                    break;
                case 6:
                    message.hash2 = reader.string();
                    break;
                case 7:
                    message.hash3 = reader.string();
                    break;
                case 8:
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
        const message = createBaseMsgRecordWrkChainBlock();
        message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.blockHash = object.blockHash ?? "";
        message.parentHash = object.parentHash ?? "";
        message.hash1 = object.hash1 ?? "";
        message.hash2 = object.hash2 ?? "";
        message.hash3 = object.hash3 ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRecordWrkChainBlock();
        if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
            message.wrkchainId = BigInt(object.wrkchain_id);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.block_hash !== undefined && object.block_hash !== null) {
            message.blockHash = object.block_hash;
        }
        if (object.parent_hash !== undefined && object.parent_hash !== null) {
            message.parentHash = object.parent_hash;
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
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        obj.block_hash = message.blockHash ?? "";
        obj.parent_hash = message.parentHash ?? "";
        obj.hash1 = message.hash1 === "" ? undefined : message.hash1;
        obj.hash2 = message.hash2 === "" ? undefined : message.hash2;
        obj.hash3 = message.hash3 === "" ? undefined : message.hash3;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRecordWrkChainBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRecordWrkChainBlock.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRecordWrkChainBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock",
            value: exports.MsgRecordWrkChainBlock.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRecordWrkChainBlock.typeUrl, exports.MsgRecordWrkChainBlock);
function createBaseMsgRecordWrkChainBlockResponse() {
    return {
        wrkchainId: BigInt(0),
        height: BigInt(0)
    };
}
exports.MsgRecordWrkChainBlockResponse = {
    typeUrl: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlockResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgRecordWrkChainBlockResponse.typeUrl || typeof o.wrkchainId === "bigint" && typeof o.height === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgRecordWrkChainBlockResponse.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgRecordWrkChainBlockResponse.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.height === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.wrkchainId !== BigInt(0)) {
            writer.uint32(8).uint64(message.wrkchainId);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).uint64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecordWrkChainBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wrkchainId = reader.uint64();
                    break;
                case 2:
                    message.height = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRecordWrkChainBlockResponse();
        message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRecordWrkChainBlockResponse();
        if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
            message.wrkchainId = BigInt(object.wrkchain_id);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRecordWrkChainBlockResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRecordWrkChainBlockResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRecordWrkChainBlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlockResponse",
            value: exports.MsgRecordWrkChainBlockResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRecordWrkChainBlockResponse.typeUrl, exports.MsgRecordWrkChainBlockResponse);
function createBaseMsgPurchaseWrkChainStateStorage() {
    return {
        wrkchainId: BigInt(0),
        number: BigInt(0),
        owner: ""
    };
}
exports.MsgPurchaseWrkChainStateStorage = {
    typeUrl: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage",
    is(o) {
        return o && (o.$typeUrl === exports.MsgPurchaseWrkChainStateStorage.typeUrl || typeof o.wrkchainId === "bigint" && typeof o.number === "bigint" && typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgPurchaseWrkChainStateStorage.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.number === "bigint" && typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgPurchaseWrkChainStateStorage.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.number === "bigint" && typeof o.owner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.wrkchainId !== BigInt(0)) {
            writer.uint32(8).uint64(message.wrkchainId);
        }
        if (message.number !== BigInt(0)) {
            writer.uint32(16).uint64(message.number);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPurchaseWrkChainStateStorage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wrkchainId = reader.uint64();
                    break;
                case 2:
                    message.number = reader.uint64();
                    break;
                case 3:
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
        const message = createBaseMsgPurchaseWrkChainStateStorage();
        message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
        message.number = object.number !== undefined && object.number !== null ? BigInt(object.number.toString()) : BigInt(0);
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgPurchaseWrkChainStateStorage();
        if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
            message.wrkchainId = BigInt(object.wrkchain_id);
        }
        if (object.number !== undefined && object.number !== null) {
            message.number = BigInt(object.number);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
        obj.number = message.number !== BigInt(0) ? message.number.toString() : undefined;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgPurchaseWrkChainStateStorage.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgPurchaseWrkChainStateStorage.decode(message.value);
    },
    toProto(message) {
        return exports.MsgPurchaseWrkChainStateStorage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage",
            value: exports.MsgPurchaseWrkChainStateStorage.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgPurchaseWrkChainStateStorage.typeUrl, exports.MsgPurchaseWrkChainStateStorage);
function createBaseMsgPurchaseWrkChainStateStorageResponse() {
    return {
        wrkchainId: BigInt(0),
        numberPurchased: BigInt(0),
        numCanPurchase: BigInt(0)
    };
}
exports.MsgPurchaseWrkChainStateStorageResponse = {
    typeUrl: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorageResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgPurchaseWrkChainStateStorageResponse.typeUrl || typeof o.wrkchainId === "bigint" && typeof o.numberPurchased === "bigint" && typeof o.numCanPurchase === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgPurchaseWrkChainStateStorageResponse.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.number_purchased === "bigint" && typeof o.num_can_purchase === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgPurchaseWrkChainStateStorageResponse.typeUrl || typeof o.wrkchain_id === "bigint" && typeof o.number_purchased === "bigint" && typeof o.num_can_purchase === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.wrkchainId !== BigInt(0)) {
            writer.uint32(8).uint64(message.wrkchainId);
        }
        if (message.numberPurchased !== BigInt(0)) {
            writer.uint32(16).uint64(message.numberPurchased);
        }
        if (message.numCanPurchase !== BigInt(0)) {
            writer.uint32(24).uint64(message.numCanPurchase);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPurchaseWrkChainStateStorageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wrkchainId = reader.uint64();
                    break;
                case 2:
                    message.numberPurchased = reader.uint64();
                    break;
                case 3:
                    message.numCanPurchase = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgPurchaseWrkChainStateStorageResponse();
        message.wrkchainId = object.wrkchainId !== undefined && object.wrkchainId !== null ? BigInt(object.wrkchainId.toString()) : BigInt(0);
        message.numberPurchased = object.numberPurchased !== undefined && object.numberPurchased !== null ? BigInt(object.numberPurchased.toString()) : BigInt(0);
        message.numCanPurchase = object.numCanPurchase !== undefined && object.numCanPurchase !== null ? BigInt(object.numCanPurchase.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgPurchaseWrkChainStateStorageResponse();
        if (object.wrkchain_id !== undefined && object.wrkchain_id !== null) {
            message.wrkchainId = BigInt(object.wrkchain_id);
        }
        if (object.number_purchased !== undefined && object.number_purchased !== null) {
            message.numberPurchased = BigInt(object.number_purchased);
        }
        if (object.num_can_purchase !== undefined && object.num_can_purchase !== null) {
            message.numCanPurchase = BigInt(object.num_can_purchase);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.wrkchain_id = message.wrkchainId !== BigInt(0) ? message.wrkchainId.toString() : undefined;
        obj.number_purchased = message.numberPurchased !== BigInt(0) ? message.numberPurchased.toString() : undefined;
        obj.num_can_purchase = message.numCanPurchase !== BigInt(0) ? message.numCanPurchase.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgPurchaseWrkChainStateStorageResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgPurchaseWrkChainStateStorageResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgPurchaseWrkChainStateStorageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorageResponse",
            value: exports.MsgPurchaseWrkChainStateStorageResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgPurchaseWrkChainStateStorageResponse.typeUrl, exports.MsgPurchaseWrkChainStateStorageResponse);
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: wrkchain_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/mainchain.wrkchain.v1.MsgUpdateParams",
    aminoType: "mainchain/x/wrkchain/MsgUpdateParams",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && wrkchain_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && wrkchain_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && wrkchain_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            wrkchain_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = wrkchain_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = object.params !== undefined && object.params !== null ? wrkchain_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = wrkchain_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? wrkchain_1.Params.toAmino(message.params) : wrkchain_1.Params.toAmino(wrkchain_1.Params.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "mainchain/x/wrkchain/MsgUpdateParams",
            value: exports.MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.MsgUpdateParams",
            value: exports.MsgUpdateParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParams.typeUrl, exports.MsgUpdateParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateParams.aminoType, exports.MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/mainchain.wrkchain.v1.MsgUpdateParamsResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.wrkchain.v1.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParamsResponse.typeUrl, exports.MsgUpdateParamsResponse);
