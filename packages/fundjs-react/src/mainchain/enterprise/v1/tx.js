"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgWhitelistAddressResponse = exports.MsgWhitelistAddress = exports.MsgProcessUndPurchaseOrderResponse = exports.MsgProcessUndPurchaseOrder = exports.MsgUndPurchaseOrderResponse = exports.MsgUndPurchaseOrder = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const enterprise_1 = require("./enterprise");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
const helpers_1 = require("../../../helpers");
function createBaseMsgUndPurchaseOrder() {
    return {
        purchaser: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgUndPurchaseOrder = {
    typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrder",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUndPurchaseOrder.typeUrl || typeof o.purchaser === "string" && coin_1.Coin.is(o.amount));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgUndPurchaseOrder.typeUrl || typeof o.purchaser === "string" && coin_1.Coin.isSDK(o.amount));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUndPurchaseOrder.typeUrl || typeof o.purchaser === "string" && coin_1.Coin.isAmino(o.amount));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.purchaser !== "") {
            writer.uint32(10).string(message.purchaser);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndPurchaseOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaser = reader.string();
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUndPurchaseOrder();
        message.purchaser = object.purchaser ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUndPurchaseOrder();
        if (object.purchaser !== undefined && object.purchaser !== null) {
            message.purchaser = object.purchaser;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.purchaser = message.purchaser === "" ? undefined : message.purchaser;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUndPurchaseOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUndPurchaseOrder.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUndPurchaseOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrder",
            value: exports.MsgUndPurchaseOrder.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUndPurchaseOrder.typeUrl, exports.MsgUndPurchaseOrder);
function createBaseMsgUndPurchaseOrderResponse() {
    return {
        purchaseOrderId: BigInt(0)
    };
}
exports.MsgUndPurchaseOrderResponse = {
    typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrderResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUndPurchaseOrderResponse.typeUrl || typeof o.purchaseOrderId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgUndPurchaseOrderResponse.typeUrl || typeof o.purchase_order_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUndPurchaseOrderResponse.typeUrl || typeof o.purchase_order_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.purchaseOrderId !== BigInt(0)) {
            writer.uint32(8).uint64(message.purchaseOrderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndPurchaseOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaseOrderId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUndPurchaseOrderResponse();
        message.purchaseOrderId = object.purchaseOrderId !== undefined && object.purchaseOrderId !== null ? BigInt(object.purchaseOrderId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUndPurchaseOrderResponse();
        if (object.purchase_order_id !== undefined && object.purchase_order_id !== null) {
            message.purchaseOrderId = BigInt(object.purchase_order_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.purchase_order_id = message.purchaseOrderId !== BigInt(0) ? message.purchaseOrderId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUndPurchaseOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUndPurchaseOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUndPurchaseOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrderResponse",
            value: exports.MsgUndPurchaseOrderResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUndPurchaseOrderResponse.typeUrl, exports.MsgUndPurchaseOrderResponse);
function createBaseMsgProcessUndPurchaseOrder() {
    return {
        purchaseOrderId: BigInt(0),
        decision: 0,
        signer: ""
    };
}
exports.MsgProcessUndPurchaseOrder = {
    typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder",
    is(o) {
        return o && (o.$typeUrl === exports.MsgProcessUndPurchaseOrder.typeUrl || typeof o.purchaseOrderId === "bigint" && (0, helpers_1.isSet)(o.decision) && typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgProcessUndPurchaseOrder.typeUrl || typeof o.purchase_order_id === "bigint" && (0, helpers_1.isSet)(o.decision) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgProcessUndPurchaseOrder.typeUrl || typeof o.purchase_order_id === "bigint" && (0, helpers_1.isSet)(o.decision) && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.purchaseOrderId !== BigInt(0)) {
            writer.uint32(8).uint64(message.purchaseOrderId);
        }
        if (message.decision !== 0) {
            writer.uint32(16).int32(message.decision);
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgProcessUndPurchaseOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaseOrderId = reader.uint64();
                    break;
                case 2:
                    message.decision = reader.int32();
                    break;
                case 3:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgProcessUndPurchaseOrder();
        message.purchaseOrderId = object.purchaseOrderId !== undefined && object.purchaseOrderId !== null ? BigInt(object.purchaseOrderId.toString()) : BigInt(0);
        message.decision = object.decision ?? 0;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgProcessUndPurchaseOrder();
        if (object.purchase_order_id !== undefined && object.purchase_order_id !== null) {
            message.purchaseOrderId = BigInt(object.purchase_order_id);
        }
        if (object.decision !== undefined && object.decision !== null) {
            message.decision = object.decision;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.purchase_order_id = message.purchaseOrderId ? message.purchaseOrderId.toString() : "0";
        obj.decision = message.decision === 0 ? undefined : message.decision;
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgProcessUndPurchaseOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgProcessUndPurchaseOrder.decode(message.value);
    },
    toProto(message) {
        return exports.MsgProcessUndPurchaseOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder",
            value: exports.MsgProcessUndPurchaseOrder.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgProcessUndPurchaseOrder.typeUrl, exports.MsgProcessUndPurchaseOrder);
function createBaseMsgProcessUndPurchaseOrderResponse() {
    return {};
}
exports.MsgProcessUndPurchaseOrderResponse = {
    typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrderResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgProcessUndPurchaseOrderResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgProcessUndPurchaseOrderResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgProcessUndPurchaseOrderResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgProcessUndPurchaseOrderResponse();
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
        const message = createBaseMsgProcessUndPurchaseOrderResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgProcessUndPurchaseOrderResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgProcessUndPurchaseOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgProcessUndPurchaseOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgProcessUndPurchaseOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrderResponse",
            value: exports.MsgProcessUndPurchaseOrderResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgProcessUndPurchaseOrderResponse.typeUrl, exports.MsgProcessUndPurchaseOrderResponse);
function createBaseMsgWhitelistAddress() {
    return {
        address: "",
        signer: "",
        whitelistAction: 0
    };
}
exports.MsgWhitelistAddress = {
    typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddress",
    is(o) {
        return o && (o.$typeUrl === exports.MsgWhitelistAddress.typeUrl || typeof o.address === "string" && typeof o.signer === "string" && (0, helpers_1.isSet)(o.whitelistAction));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgWhitelistAddress.typeUrl || typeof o.address === "string" && typeof o.signer === "string" && (0, helpers_1.isSet)(o.whitelist_action));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgWhitelistAddress.typeUrl || typeof o.address === "string" && typeof o.signer === "string" && (0, helpers_1.isSet)(o.whitelist_action));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.signer !== "") {
            writer.uint32(18).string(message.signer);
        }
        if (message.whitelistAction !== 0) {
            writer.uint32(24).int32(message.whitelistAction);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWhitelistAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.signer = reader.string();
                    break;
                case 3:
                    message.whitelistAction = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgWhitelistAddress();
        message.address = object.address ?? "";
        message.signer = object.signer ?? "";
        message.whitelistAction = object.whitelistAction ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWhitelistAddress();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        if (object.whitelist_action !== undefined && object.whitelist_action !== null) {
            message.whitelistAction = object.whitelist_action;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.signer = message.signer === "" ? undefined : message.signer;
        obj.whitelist_action = message.whitelistAction ?? 0;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWhitelistAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgWhitelistAddress.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWhitelistAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddress",
            value: exports.MsgWhitelistAddress.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgWhitelistAddress.typeUrl, exports.MsgWhitelistAddress);
function createBaseMsgWhitelistAddressResponse() {
    return {};
}
exports.MsgWhitelistAddressResponse = {
    typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddressResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgWhitelistAddressResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgWhitelistAddressResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgWhitelistAddressResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWhitelistAddressResponse();
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
        const message = createBaseMsgWhitelistAddressResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgWhitelistAddressResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWhitelistAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgWhitelistAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWhitelistAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddressResponse",
            value: exports.MsgWhitelistAddressResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgWhitelistAddressResponse.typeUrl, exports.MsgWhitelistAddressResponse);
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: enterprise_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/mainchain.enterprise.v1.MsgUpdateParams",
    aminoType: "mainchain/x/enterprise/MsgUpdateParams",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && enterprise_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && enterprise_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && enterprise_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            enterprise_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.params = enterprise_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? enterprise_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = enterprise_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? enterprise_1.Params.toAmino(message.params) : enterprise_1.Params.toAmino(enterprise_1.Params.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "mainchain/x/enterprise/MsgUpdateParams",
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
            typeUrl: "/mainchain.enterprise.v1.MsgUpdateParams",
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
    typeUrl: "/mainchain.enterprise.v1.MsgUpdateParamsResponse",
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
            typeUrl: "/mainchain.enterprise.v1.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParamsResponse.typeUrl, exports.MsgUpdateParamsResponse);
