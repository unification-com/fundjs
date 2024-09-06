"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
const registry_1 = require("../../../registry");
function createBaseParams() {
    return {
        validatorFee: ""
    };
}
exports.Params = {
    typeUrl: "/mainchain.stream.v1.Params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.validatorFee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.validator_fee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.validator_fee === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorFee !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.validatorFee, 18).atomics);
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
                    message.validatorFee = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        message.validatorFee = object.validatorFee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.validator_fee !== undefined && object.validator_fee !== null) {
            message.validatorFee = object.validator_fee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_fee = message.validatorFee === "" ? undefined : message.validatorFee;
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
            typeUrl: "/mainchain.stream.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
