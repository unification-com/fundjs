"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FungibleTokenPacketData = void 0;
//@ts-nocheck
const binary_1 = require("../../../../binary");
const registry_1 = require("../../../../registry");
function createBaseFungibleTokenPacketData() {
    return {
        denom: "",
        amount: "",
        sender: "",
        receiver: ""
    };
}
exports.FungibleTokenPacketData = {
    typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketData",
    aminoType: "cosmos-sdk/FungibleTokenPacketData",
    is(o) {
        return o && (o.$typeUrl === exports.FungibleTokenPacketData.typeUrl || typeof o.denom === "string" && typeof o.amount === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.FungibleTokenPacketData.typeUrl || typeof o.denom === "string" && typeof o.amount === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.FungibleTokenPacketData.typeUrl || typeof o.denom === "string" && typeof o.amount === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(34).string(message.receiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFungibleTokenPacketData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                case 4:
                    message.receiver = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFungibleTokenPacketData();
        message.denom = object.denom ?? "";
        message.amount = object.amount ?? "";
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseFungibleTokenPacketData();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.amount = message.amount === "" ? undefined : message.amount;
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.receiver = message.receiver === "" ? undefined : message.receiver;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FungibleTokenPacketData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/FungibleTokenPacketData",
            value: exports.FungibleTokenPacketData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.FungibleTokenPacketData.decode(message.value);
    },
    toProto(message) {
        return exports.FungibleTokenPacketData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketData",
            value: exports.FungibleTokenPacketData.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.FungibleTokenPacketData.typeUrl, exports.FungibleTokenPacketData);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.FungibleTokenPacketData.aminoType, exports.FungibleTokenPacketData.typeUrl);
