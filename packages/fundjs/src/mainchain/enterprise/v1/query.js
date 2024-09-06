"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuerySpentEFUNDByAddressResponse = exports.QuerySpentEFUNDByAddressRequest = exports.QueryTotalSpentEFUNDResponse = exports.QueryTotalSpentEFUNDRequest = exports.QueryEnterpriseAccountResponse = exports.QueryEnterpriseAccountRequest = exports.QueryWhitelistedResponse = exports.QueryWhitelistedRequest = exports.QueryWhitelistResponse = exports.QueryWhitelistRequest = exports.QuerySupplyOfResponse = exports.QuerySupplyOfRequest = exports.QueryTotalSupplyResponse = exports.QueryTotalSupplyRequest = exports.QueryEnterpriseSupplyResponse = exports.QueryEnterpriseSupplyRequest = exports.QueryTotalUnlockedResponse = exports.QueryTotalUnlockedRequest = exports.QueryTotalLockedResponse = exports.QueryTotalLockedRequest = exports.QueryLockedUndByAddressResponse = exports.QueryLockedUndByAddressRequest = exports.QueryEnterpriseUndPurchaseOrdersResponse = exports.QueryEnterpriseUndPurchaseOrdersRequest = exports.QueryEnterpriseUndPurchaseOrderResponse = exports.QueryEnterpriseUndPurchaseOrderRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const enterprise_1 = require("./enterprise");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
const helpers_1 = require("../../../helpers");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/mainchain.enterprise.v1.QueryParamsRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
function createBaseQueryParamsResponse() {
    return {
        params: enterprise_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/mainchain.enterprise.v1.QueryParamsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || enterprise_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || enterprise_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || enterprise_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            enterprise_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? enterprise_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = enterprise_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? enterprise_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
function createBaseQueryEnterpriseUndPurchaseOrderRequest() {
    return {
        purchaseOrderId: BigInt(0)
    };
}
exports.QueryEnterpriseUndPurchaseOrderRequest = {
    typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrderRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseUndPurchaseOrderRequest.typeUrl || typeof o.purchaseOrderId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseUndPurchaseOrderRequest.typeUrl || typeof o.purchase_order_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseUndPurchaseOrderRequest.typeUrl || typeof o.purchase_order_id === "bigint");
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
        const message = createBaseQueryEnterpriseUndPurchaseOrderRequest();
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
        const message = createBaseQueryEnterpriseUndPurchaseOrderRequest();
        message.purchaseOrderId = object.purchaseOrderId !== undefined && object.purchaseOrderId !== null ? BigInt(object.purchaseOrderId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEnterpriseUndPurchaseOrderRequest();
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
        return exports.QueryEnterpriseUndPurchaseOrderRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryEnterpriseUndPurchaseOrderRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEnterpriseUndPurchaseOrderRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrderRequest",
            value: exports.QueryEnterpriseUndPurchaseOrderRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryEnterpriseUndPurchaseOrderRequest.typeUrl, exports.QueryEnterpriseUndPurchaseOrderRequest);
function createBaseQueryEnterpriseUndPurchaseOrderResponse() {
    return {
        purchaseOrder: enterprise_1.EnterpriseUndPurchaseOrder.fromPartial({})
    };
}
exports.QueryEnterpriseUndPurchaseOrderResponse = {
    typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrderResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseUndPurchaseOrderResponse.typeUrl || enterprise_1.EnterpriseUndPurchaseOrder.is(o.purchaseOrder));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseUndPurchaseOrderResponse.typeUrl || enterprise_1.EnterpriseUndPurchaseOrder.isSDK(o.purchase_order));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseUndPurchaseOrderResponse.typeUrl || enterprise_1.EnterpriseUndPurchaseOrder.isAmino(o.purchase_order));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.purchaseOrder !== undefined) {
            enterprise_1.EnterpriseUndPurchaseOrder.encode(message.purchaseOrder, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEnterpriseUndPurchaseOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaseOrder = enterprise_1.EnterpriseUndPurchaseOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryEnterpriseUndPurchaseOrderResponse();
        message.purchaseOrder = object.purchaseOrder !== undefined && object.purchaseOrder !== null ? enterprise_1.EnterpriseUndPurchaseOrder.fromPartial(object.purchaseOrder) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEnterpriseUndPurchaseOrderResponse();
        if (object.purchase_order !== undefined && object.purchase_order !== null) {
            message.purchaseOrder = enterprise_1.EnterpriseUndPurchaseOrder.fromAmino(object.purchase_order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.purchase_order = message.purchaseOrder ? enterprise_1.EnterpriseUndPurchaseOrder.toAmino(message.purchaseOrder) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEnterpriseUndPurchaseOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryEnterpriseUndPurchaseOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEnterpriseUndPurchaseOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrderResponse",
            value: exports.QueryEnterpriseUndPurchaseOrderResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryEnterpriseUndPurchaseOrderResponse.typeUrl, exports.QueryEnterpriseUndPurchaseOrderResponse);
function createBaseQueryEnterpriseUndPurchaseOrdersRequest() {
    return {
        pagination: undefined,
        purchaser: "",
        status: 0
    };
}
exports.QueryEnterpriseUndPurchaseOrdersRequest = {
    typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrdersRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseUndPurchaseOrdersRequest.typeUrl || typeof o.purchaser === "string" && (0, helpers_1.isSet)(o.status));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseUndPurchaseOrdersRequest.typeUrl || typeof o.purchaser === "string" && (0, helpers_1.isSet)(o.status));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseUndPurchaseOrdersRequest.typeUrl || typeof o.purchaser === "string" && (0, helpers_1.isSet)(o.status));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.purchaser !== "") {
            writer.uint32(18).string(message.purchaser);
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEnterpriseUndPurchaseOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.purchaser = reader.string();
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryEnterpriseUndPurchaseOrdersRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        message.purchaser = object.purchaser ?? "";
        message.status = object.status ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEnterpriseUndPurchaseOrdersRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        if (object.purchaser !== undefined && object.purchaser !== null) {
            message.purchaser = object.purchaser;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        obj.purchaser = message.purchaser === "" ? undefined : message.purchaser;
        obj.status = message.status === 0 ? undefined : message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEnterpriseUndPurchaseOrdersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryEnterpriseUndPurchaseOrdersRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEnterpriseUndPurchaseOrdersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrdersRequest",
            value: exports.QueryEnterpriseUndPurchaseOrdersRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryEnterpriseUndPurchaseOrdersRequest.typeUrl, exports.QueryEnterpriseUndPurchaseOrdersRequest);
function createBaseQueryEnterpriseUndPurchaseOrdersResponse() {
    return {
        purchaseOrders: [],
        pagination: undefined
    };
}
exports.QueryEnterpriseUndPurchaseOrdersResponse = {
    typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrdersResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseUndPurchaseOrdersResponse.typeUrl || Array.isArray(o.purchaseOrders) && (!o.purchaseOrders.length || enterprise_1.EnterpriseUndPurchaseOrder.is(o.purchaseOrders[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseUndPurchaseOrdersResponse.typeUrl || Array.isArray(o.purchase_orders) && (!o.purchase_orders.length || enterprise_1.EnterpriseUndPurchaseOrder.isSDK(o.purchase_orders[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseUndPurchaseOrdersResponse.typeUrl || Array.isArray(o.purchase_orders) && (!o.purchase_orders.length || enterprise_1.EnterpriseUndPurchaseOrder.isAmino(o.purchase_orders[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.purchaseOrders) {
            enterprise_1.EnterpriseUndPurchaseOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEnterpriseUndPurchaseOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaseOrders.push(enterprise_1.EnterpriseUndPurchaseOrder.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryEnterpriseUndPurchaseOrdersResponse();
        message.purchaseOrders = object.purchaseOrders?.map(e => enterprise_1.EnterpriseUndPurchaseOrder.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEnterpriseUndPurchaseOrdersResponse();
        message.purchaseOrders = object.purchase_orders?.map(e => enterprise_1.EnterpriseUndPurchaseOrder.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.purchaseOrders) {
            obj.purchase_orders = message.purchaseOrders.map(e => e ? enterprise_1.EnterpriseUndPurchaseOrder.toAmino(e) : undefined);
        }
        else {
            obj.purchase_orders = message.purchaseOrders;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEnterpriseUndPurchaseOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryEnterpriseUndPurchaseOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEnterpriseUndPurchaseOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrdersResponse",
            value: exports.QueryEnterpriseUndPurchaseOrdersResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryEnterpriseUndPurchaseOrdersResponse.typeUrl, exports.QueryEnterpriseUndPurchaseOrdersResponse);
function createBaseQueryLockedUndByAddressRequest() {
    return {
        owner: ""
    };
}
exports.QueryLockedUndByAddressRequest = {
    typeUrl: "/mainchain.enterprise.v1.QueryLockedUndByAddressRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryLockedUndByAddressRequest.typeUrl || typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryLockedUndByAddressRequest.typeUrl || typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryLockedUndByAddressRequest.typeUrl || typeof o.owner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockedUndByAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryLockedUndByAddressRequest();
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLockedUndByAddressRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLockedUndByAddressRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLockedUndByAddressRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLockedUndByAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryLockedUndByAddressRequest",
            value: exports.QueryLockedUndByAddressRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryLockedUndByAddressRequest.typeUrl, exports.QueryLockedUndByAddressRequest);
function createBaseQueryLockedUndByAddressResponse() {
    return {
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.QueryLockedUndByAddressResponse = {
    typeUrl: "/mainchain.enterprise.v1.QueryLockedUndByAddressResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryLockedUndByAddressResponse.typeUrl || coin_1.Coin.is(o.amount));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryLockedUndByAddressResponse.typeUrl || coin_1.Coin.isSDK(o.amount));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryLockedUndByAddressResponse.typeUrl || coin_1.Coin.isAmino(o.amount));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockedUndByAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryLockedUndByAddressResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLockedUndByAddressResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLockedUndByAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLockedUndByAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLockedUndByAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryLockedUndByAddressResponse",
            value: exports.QueryLockedUndByAddressResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryLockedUndByAddressResponse.typeUrl, exports.QueryLockedUndByAddressResponse);
function createBaseQueryTotalLockedRequest() {
    return {};
}
exports.QueryTotalLockedRequest = {
    typeUrl: "/mainchain.enterprise.v1.QueryTotalLockedRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryTotalLockedRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryTotalLockedRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryTotalLockedRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalLockedRequest();
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
        const message = createBaseQueryTotalLockedRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryTotalLockedRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalLockedRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTotalLockedRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalLockedRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryTotalLockedRequest",
            value: exports.QueryTotalLockedRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalLockedRequest.typeUrl, exports.QueryTotalLockedRequest);
function createBaseQueryTotalLockedResponse() {
    return {
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.QueryTotalLockedResponse = {
    typeUrl: "/mainchain.enterprise.v1.QueryTotalLockedResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryTotalLockedResponse.typeUrl || coin_1.Coin.is(o.amount));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryTotalLockedResponse.typeUrl || coin_1.Coin.isSDK(o.amount));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryTotalLockedResponse.typeUrl || coin_1.Coin.isAmino(o.amount));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalLockedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryTotalLockedResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalLockedResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalLockedResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTotalLockedResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalLockedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryTotalLockedResponse",
            value: exports.QueryTotalLockedResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalLockedResponse.typeUrl, exports.QueryTotalLockedResponse);
function createBaseQueryTotalUnlockedRequest() {
    return {};
}
exports.QueryTotalUnlockedRequest = {
    typeUrl: "/mainchain.enterprise.v1.QueryTotalUnlockedRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryTotalUnlockedRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryTotalUnlockedRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryTotalUnlockedRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalUnlockedRequest();
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
        const message = createBaseQueryTotalUnlockedRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryTotalUnlockedRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalUnlockedRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTotalUnlockedRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalUnlockedRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryTotalUnlockedRequest",
            value: exports.QueryTotalUnlockedRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalUnlockedRequest.typeUrl, exports.QueryTotalUnlockedRequest);
function createBaseQueryTotalUnlockedResponse() {
    return {
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.QueryTotalUnlockedResponse = {
    typeUrl: "/mainchain.enterprise.v1.QueryTotalUnlockedResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryTotalUnlockedResponse.typeUrl || coin_1.Coin.is(o.amount));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryTotalUnlockedResponse.typeUrl || coin_1.Coin.isSDK(o.amount));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryTotalUnlockedResponse.typeUrl || coin_1.Coin.isAmino(o.amount));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalUnlockedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryTotalUnlockedResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalUnlockedResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalUnlockedResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTotalUnlockedResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalUnlockedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryTotalUnlockedResponse",
            value: exports.QueryTotalUnlockedResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalUnlockedResponse.typeUrl, exports.QueryTotalUnlockedResponse);
function createBaseQueryEnterpriseSupplyRequest() {
    return {};
}
exports.QueryEnterpriseSupplyRequest = {
    typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseSupplyRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryEnterpriseSupplyRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryEnterpriseSupplyRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryEnterpriseSupplyRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEnterpriseSupplyRequest();
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
        const message = createBaseQueryEnterpriseSupplyRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryEnterpriseSupplyRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEnterpriseSupplyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryEnterpriseSupplyRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEnterpriseSupplyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseSupplyRequest",
            value: exports.QueryEnterpriseSupplyRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryEnterpriseSupplyRequest.typeUrl, exports.QueryEnterpriseSupplyRequest);
function createBaseQueryEnterpriseSupplyResponse() {
    return {
        supply: enterprise_1.UndSupply.fromPartial({})
    };
}
exports.QueryEnterpriseSupplyResponse = {
    typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseSupplyResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseSupplyResponse.typeUrl || enterprise_1.UndSupply.is(o.supply));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseSupplyResponse.typeUrl || enterprise_1.UndSupply.isSDK(o.supply));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseSupplyResponse.typeUrl || enterprise_1.UndSupply.isAmino(o.supply));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.supply !== undefined) {
            enterprise_1.UndSupply.encode(message.supply, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEnterpriseSupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supply = enterprise_1.UndSupply.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryEnterpriseSupplyResponse();
        message.supply = object.supply !== undefined && object.supply !== null ? enterprise_1.UndSupply.fromPartial(object.supply) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEnterpriseSupplyResponse();
        if (object.supply !== undefined && object.supply !== null) {
            message.supply = enterprise_1.UndSupply.fromAmino(object.supply);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.supply = message.supply ? enterprise_1.UndSupply.toAmino(message.supply) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEnterpriseSupplyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryEnterpriseSupplyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEnterpriseSupplyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseSupplyResponse",
            value: exports.QueryEnterpriseSupplyResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryEnterpriseSupplyResponse.typeUrl, exports.QueryEnterpriseSupplyResponse);
function createBaseQueryTotalSupplyRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryTotalSupplyRequest = {
    typeUrl: "/mainchain.enterprise.v1.QueryTotalSupplyRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryTotalSupplyRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryTotalSupplyRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryTotalSupplyRequest.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSupplyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalSupplyRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalSupplyRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalSupplyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTotalSupplyRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalSupplyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryTotalSupplyRequest",
            value: exports.QueryTotalSupplyRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalSupplyRequest.typeUrl, exports.QueryTotalSupplyRequest);
function createBaseQueryTotalSupplyResponse() {
    return {
        supply: [],
        pagination: undefined
    };
}
exports.QueryTotalSupplyResponse = {
    typeUrl: "/mainchain.enterprise.v1.QueryTotalSupplyResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryTotalSupplyResponse.typeUrl || Array.isArray(o.supply) && (!o.supply.length || coin_1.Coin.is(o.supply[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryTotalSupplyResponse.typeUrl || Array.isArray(o.supply) && (!o.supply.length || coin_1.Coin.isSDK(o.supply[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryTotalSupplyResponse.typeUrl || Array.isArray(o.supply) && (!o.supply.length || coin_1.Coin.isAmino(o.supply[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.supply) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supply.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalSupplyResponse();
        message.supply = object.supply?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalSupplyResponse();
        message.supply = object.supply?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.supply) {
            obj.supply = message.supply.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.supply = message.supply;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalSupplyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTotalSupplyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalSupplyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryTotalSupplyResponse",
            value: exports.QueryTotalSupplyResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalSupplyResponse.typeUrl, exports.QueryTotalSupplyResponse);
function createBaseQuerySupplyOfRequest() {
    return {
        denom: ""
    };
}
exports.QuerySupplyOfRequest = {
    typeUrl: "/mainchain.enterprise.v1.QuerySupplyOfRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QuerySupplyOfRequest.typeUrl || typeof o.denom === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QuerySupplyOfRequest.typeUrl || typeof o.denom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QuerySupplyOfRequest.typeUrl || typeof o.denom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyOfRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyOfRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySupplyOfRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySupplyOfRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySupplyOfRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySupplyOfRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QuerySupplyOfRequest",
            value: exports.QuerySupplyOfRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySupplyOfRequest.typeUrl, exports.QuerySupplyOfRequest);
function createBaseQuerySupplyOfResponse() {
    return {
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.QuerySupplyOfResponse = {
    typeUrl: "/mainchain.enterprise.v1.QuerySupplyOfResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QuerySupplyOfResponse.typeUrl || coin_1.Coin.is(o.amount));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QuerySupplyOfResponse.typeUrl || coin_1.Coin.isSDK(o.amount));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QuerySupplyOfResponse.typeUrl || coin_1.Coin.isAmino(o.amount));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyOfResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQuerySupplyOfResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySupplyOfResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySupplyOfResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySupplyOfResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySupplyOfResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QuerySupplyOfResponse",
            value: exports.QuerySupplyOfResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySupplyOfResponse.typeUrl, exports.QuerySupplyOfResponse);
function createBaseQueryWhitelistRequest() {
    return {};
}
exports.QueryWhitelistRequest = {
    typeUrl: "/mainchain.enterprise.v1.QueryWhitelistRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryWhitelistRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryWhitelistRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryWhitelistRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhitelistRequest();
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
        const message = createBaseQueryWhitelistRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryWhitelistRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWhitelistRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWhitelistRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWhitelistRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryWhitelistRequest",
            value: exports.QueryWhitelistRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryWhitelistRequest.typeUrl, exports.QueryWhitelistRequest);
function createBaseQueryWhitelistResponse() {
    return {
        addresses: []
    };
}
exports.QueryWhitelistResponse = {
    typeUrl: "/mainchain.enterprise.v1.QueryWhitelistResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryWhitelistResponse.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryWhitelistResponse.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryWhitelistResponse.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.addresses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhitelistResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryWhitelistResponse();
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryWhitelistResponse();
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map(e => e);
        }
        else {
            obj.addresses = message.addresses;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWhitelistResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWhitelistResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWhitelistResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryWhitelistResponse",
            value: exports.QueryWhitelistResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryWhitelistResponse.typeUrl, exports.QueryWhitelistResponse);
function createBaseQueryWhitelistedRequest() {
    return {
        address: ""
    };
}
exports.QueryWhitelistedRequest = {
    typeUrl: "/mainchain.enterprise.v1.QueryWhitelistedRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryWhitelistedRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryWhitelistedRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryWhitelistedRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhitelistedRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryWhitelistedRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryWhitelistedRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWhitelistedRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWhitelistedRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWhitelistedRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryWhitelistedRequest",
            value: exports.QueryWhitelistedRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryWhitelistedRequest.typeUrl, exports.QueryWhitelistedRequest);
function createBaseQueryWhitelistedResponse() {
    return {
        address: "",
        whitelisted: false
    };
}
exports.QueryWhitelistedResponse = {
    typeUrl: "/mainchain.enterprise.v1.QueryWhitelistedResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryWhitelistedResponse.typeUrl || typeof o.address === "string" && typeof o.whitelisted === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryWhitelistedResponse.typeUrl || typeof o.address === "string" && typeof o.whitelisted === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryWhitelistedResponse.typeUrl || typeof o.address === "string" && typeof o.whitelisted === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.whitelisted === true) {
            writer.uint32(16).bool(message.whitelisted);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhitelistedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.whitelisted = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryWhitelistedResponse();
        message.address = object.address ?? "";
        message.whitelisted = object.whitelisted ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryWhitelistedResponse();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.whitelisted !== undefined && object.whitelisted !== null) {
            message.whitelisted = object.whitelisted;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.whitelisted = message.whitelisted === false ? undefined : message.whitelisted;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWhitelistedResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWhitelistedResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWhitelistedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryWhitelistedResponse",
            value: exports.QueryWhitelistedResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryWhitelistedResponse.typeUrl, exports.QueryWhitelistedResponse);
function createBaseQueryEnterpriseAccountRequest() {
    return {
        address: ""
    };
}
exports.QueryEnterpriseAccountRequest = {
    typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseAccountRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseAccountRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseAccountRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseAccountRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEnterpriseAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryEnterpriseAccountRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEnterpriseAccountRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEnterpriseAccountRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryEnterpriseAccountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEnterpriseAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseAccountRequest",
            value: exports.QueryEnterpriseAccountRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryEnterpriseAccountRequest.typeUrl, exports.QueryEnterpriseAccountRequest);
function createBaseQueryEnterpriseAccountResponse() {
    return {
        account: enterprise_1.EnterpriseUserAccount.fromPartial({})
    };
}
exports.QueryEnterpriseAccountResponse = {
    typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseAccountResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseAccountResponse.typeUrl || enterprise_1.EnterpriseUserAccount.is(o.account));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseAccountResponse.typeUrl || enterprise_1.EnterpriseUserAccount.isSDK(o.account));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryEnterpriseAccountResponse.typeUrl || enterprise_1.EnterpriseUserAccount.isAmino(o.account));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.account !== undefined) {
            enterprise_1.EnterpriseUserAccount.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEnterpriseAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = enterprise_1.EnterpriseUserAccount.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryEnterpriseAccountResponse();
        message.account = object.account !== undefined && object.account !== null ? enterprise_1.EnterpriseUserAccount.fromPartial(object.account) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEnterpriseAccountResponse();
        if (object.account !== undefined && object.account !== null) {
            message.account = enterprise_1.EnterpriseUserAccount.fromAmino(object.account);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account ? enterprise_1.EnterpriseUserAccount.toAmino(message.account) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEnterpriseAccountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryEnterpriseAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEnterpriseAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseAccountResponse",
            value: exports.QueryEnterpriseAccountResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryEnterpriseAccountResponse.typeUrl, exports.QueryEnterpriseAccountResponse);
function createBaseQueryTotalSpentEFUNDRequest() {
    return {};
}
exports.QueryTotalSpentEFUNDRequest = {
    typeUrl: "/mainchain.enterprise.v1.QueryTotalSpentEFUNDRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryTotalSpentEFUNDRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryTotalSpentEFUNDRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryTotalSpentEFUNDRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSpentEFUNDRequest();
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
        const message = createBaseQueryTotalSpentEFUNDRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryTotalSpentEFUNDRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalSpentEFUNDRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTotalSpentEFUNDRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalSpentEFUNDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryTotalSpentEFUNDRequest",
            value: exports.QueryTotalSpentEFUNDRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalSpentEFUNDRequest.typeUrl, exports.QueryTotalSpentEFUNDRequest);
function createBaseQueryTotalSpentEFUNDResponse() {
    return {
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.QueryTotalSpentEFUNDResponse = {
    typeUrl: "/mainchain.enterprise.v1.QueryTotalSpentEFUNDResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryTotalSpentEFUNDResponse.typeUrl || coin_1.Coin.is(o.amount));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryTotalSpentEFUNDResponse.typeUrl || coin_1.Coin.isSDK(o.amount));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryTotalSpentEFUNDResponse.typeUrl || coin_1.Coin.isAmino(o.amount));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSpentEFUNDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryTotalSpentEFUNDResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalSpentEFUNDResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalSpentEFUNDResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTotalSpentEFUNDResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalSpentEFUNDResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QueryTotalSpentEFUNDResponse",
            value: exports.QueryTotalSpentEFUNDResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalSpentEFUNDResponse.typeUrl, exports.QueryTotalSpentEFUNDResponse);
function createBaseQuerySpentEFUNDByAddressRequest() {
    return {
        address: ""
    };
}
exports.QuerySpentEFUNDByAddressRequest = {
    typeUrl: "/mainchain.enterprise.v1.QuerySpentEFUNDByAddressRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QuerySpentEFUNDByAddressRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QuerySpentEFUNDByAddressRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QuerySpentEFUNDByAddressRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpentEFUNDByAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySpentEFUNDByAddressRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpentEFUNDByAddressRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpentEFUNDByAddressRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySpentEFUNDByAddressRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpentEFUNDByAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QuerySpentEFUNDByAddressRequest",
            value: exports.QuerySpentEFUNDByAddressRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySpentEFUNDByAddressRequest.typeUrl, exports.QuerySpentEFUNDByAddressRequest);
function createBaseQuerySpentEFUNDByAddressResponse() {
    return {
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.QuerySpentEFUNDByAddressResponse = {
    typeUrl: "/mainchain.enterprise.v1.QuerySpentEFUNDByAddressResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QuerySpentEFUNDByAddressResponse.typeUrl || coin_1.Coin.is(o.amount));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QuerySpentEFUNDByAddressResponse.typeUrl || coin_1.Coin.isSDK(o.amount));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QuerySpentEFUNDByAddressResponse.typeUrl || coin_1.Coin.isAmino(o.amount));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpentEFUNDByAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQuerySpentEFUNDByAddressResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpentEFUNDByAddressResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpentEFUNDByAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySpentEFUNDByAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpentEFUNDByAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.QuerySpentEFUNDByAddressResponse",
            value: exports.QuerySpentEFUNDByAddressResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySpentEFUNDByAddressResponse.typeUrl, exports.QuerySpentEFUNDByAddressResponse);
