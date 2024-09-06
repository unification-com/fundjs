"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.WhitelistAddresses = exports.UndSupply = exports.EnterpriseUserAccount = exports.SpentEFUND = exports.LockedUnd = exports.PurchaseOrders = exports.EnterpriseUndPurchaseOrder = exports.PurchaseOrderDecision = exports.WhitelistActionAmino = exports.WhitelistActionSDKType = exports.WhitelistAction = exports.PurchaseOrderStatusAmino = exports.PurchaseOrderStatusSDKType = exports.PurchaseOrderStatus = void 0;
exports.purchaseOrderStatusFromJSON = purchaseOrderStatusFromJSON;
exports.purchaseOrderStatusToJSON = purchaseOrderStatusToJSON;
exports.whitelistActionFromJSON = whitelistActionFromJSON;
exports.whitelistActionToJSON = whitelistActionToJSON;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const helpers_1 = require("../../../helpers");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
/** PurchaseOrderStatus enumerates the valid statuses for a given purchase order. */
var PurchaseOrderStatus;
(function (PurchaseOrderStatus) {
    /** STATUS_NIL - STATUS_NIL defines a no-op status. */
    PurchaseOrderStatus[PurchaseOrderStatus["STATUS_NIL"] = 0] = "STATUS_NIL";
    /** STATUS_RAISED - STATUS_RAISED defines a raised status. */
    PurchaseOrderStatus[PurchaseOrderStatus["STATUS_RAISED"] = 1] = "STATUS_RAISED";
    /** STATUS_ACCEPTED - STATUS_ACCEPTED defines an accepted status. */
    PurchaseOrderStatus[PurchaseOrderStatus["STATUS_ACCEPTED"] = 2] = "STATUS_ACCEPTED";
    /** STATUS_REJECTED - STATUS_REJECTED defines a rejected status. */
    PurchaseOrderStatus[PurchaseOrderStatus["STATUS_REJECTED"] = 3] = "STATUS_REJECTED";
    /** STATUS_COMPLETED - STATUS_COMPLETED defines a completed status. */
    PurchaseOrderStatus[PurchaseOrderStatus["STATUS_COMPLETED"] = 4] = "STATUS_COMPLETED";
    PurchaseOrderStatus[PurchaseOrderStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PurchaseOrderStatus || (exports.PurchaseOrderStatus = PurchaseOrderStatus = {}));
exports.PurchaseOrderStatusSDKType = PurchaseOrderStatus;
exports.PurchaseOrderStatusAmino = PurchaseOrderStatus;
function purchaseOrderStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_NIL":
            return PurchaseOrderStatus.STATUS_NIL;
        case 1:
        case "STATUS_RAISED":
            return PurchaseOrderStatus.STATUS_RAISED;
        case 2:
        case "STATUS_ACCEPTED":
            return PurchaseOrderStatus.STATUS_ACCEPTED;
        case 3:
        case "STATUS_REJECTED":
            return PurchaseOrderStatus.STATUS_REJECTED;
        case 4:
        case "STATUS_COMPLETED":
            return PurchaseOrderStatus.STATUS_COMPLETED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PurchaseOrderStatus.UNRECOGNIZED;
    }
}
function purchaseOrderStatusToJSON(object) {
    switch (object) {
        case PurchaseOrderStatus.STATUS_NIL:
            return "STATUS_NIL";
        case PurchaseOrderStatus.STATUS_RAISED:
            return "STATUS_RAISED";
        case PurchaseOrderStatus.STATUS_ACCEPTED:
            return "STATUS_ACCEPTED";
        case PurchaseOrderStatus.STATUS_REJECTED:
            return "STATUS_REJECTED";
        case PurchaseOrderStatus.STATUS_COMPLETED:
            return "STATUS_COMPLETED";
        case PurchaseOrderStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** WhitelistAction enumerates the valid actions for whitelisting addresses. */
var WhitelistAction;
(function (WhitelistAction) {
    /** WHITELIST_ACTION_NIL - WHITELIST_ACTION_NIL defines a no-op action. */
    WhitelistAction[WhitelistAction["WHITELIST_ACTION_NIL"] = 0] = "WHITELIST_ACTION_NIL";
    /** WHITELIST_ACTION_ADD - WHITELIST_ACTION_ADD defines an add action. */
    WhitelistAction[WhitelistAction["WHITELIST_ACTION_ADD"] = 1] = "WHITELIST_ACTION_ADD";
    /** WHITELIST_ACTION_REMOVE - WHITELIST_ACTION_REMOVE defines a remove action. */
    WhitelistAction[WhitelistAction["WHITELIST_ACTION_REMOVE"] = 2] = "WHITELIST_ACTION_REMOVE";
    WhitelistAction[WhitelistAction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(WhitelistAction || (exports.WhitelistAction = WhitelistAction = {}));
exports.WhitelistActionSDKType = WhitelistAction;
exports.WhitelistActionAmino = WhitelistAction;
function whitelistActionFromJSON(object) {
    switch (object) {
        case 0:
        case "WHITELIST_ACTION_NIL":
            return WhitelistAction.WHITELIST_ACTION_NIL;
        case 1:
        case "WHITELIST_ACTION_ADD":
            return WhitelistAction.WHITELIST_ACTION_ADD;
        case 2:
        case "WHITELIST_ACTION_REMOVE":
            return WhitelistAction.WHITELIST_ACTION_REMOVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return WhitelistAction.UNRECOGNIZED;
    }
}
function whitelistActionToJSON(object) {
    switch (object) {
        case WhitelistAction.WHITELIST_ACTION_NIL:
            return "WHITELIST_ACTION_NIL";
        case WhitelistAction.WHITELIST_ACTION_ADD:
            return "WHITELIST_ACTION_ADD";
        case WhitelistAction.WHITELIST_ACTION_REMOVE:
            return "WHITELIST_ACTION_REMOVE";
        case WhitelistAction.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBasePurchaseOrderDecision() {
    return {
        signer: "",
        decision: 0,
        decisionTime: BigInt(0)
    };
}
exports.PurchaseOrderDecision = {
    typeUrl: "/mainchain.enterprise.v1.PurchaseOrderDecision",
    is(o) {
        return o && (o.$typeUrl === exports.PurchaseOrderDecision.typeUrl || typeof o.signer === "string" && (0, helpers_1.isSet)(o.decision) && typeof o.decisionTime === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.PurchaseOrderDecision.typeUrl || typeof o.signer === "string" && (0, helpers_1.isSet)(o.decision) && typeof o.decision_time === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PurchaseOrderDecision.typeUrl || typeof o.signer === "string" && (0, helpers_1.isSet)(o.decision) && typeof o.decision_time === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.decision !== 0) {
            writer.uint32(16).int32(message.decision);
        }
        if (message.decisionTime !== BigInt(0)) {
            writer.uint32(24).uint64(message.decisionTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePurchaseOrderDecision();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
                    message.decision = reader.int32();
                    break;
                case 3:
                    message.decisionTime = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePurchaseOrderDecision();
        message.signer = object.signer ?? "";
        message.decision = object.decision ?? 0;
        message.decisionTime = object.decisionTime !== undefined && object.decisionTime !== null ? BigInt(object.decisionTime.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePurchaseOrderDecision();
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        if (object.decision !== undefined && object.decision !== null) {
            message.decision = object.decision;
        }
        if (object.decision_time !== undefined && object.decision_time !== null) {
            message.decisionTime = BigInt(object.decision_time);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        obj.decision = message.decision === 0 ? undefined : message.decision;
        obj.decision_time = message.decisionTime !== BigInt(0) ? message.decisionTime.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PurchaseOrderDecision.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PurchaseOrderDecision.decode(message.value);
    },
    toProto(message) {
        return exports.PurchaseOrderDecision.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.PurchaseOrderDecision",
            value: exports.PurchaseOrderDecision.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PurchaseOrderDecision.typeUrl, exports.PurchaseOrderDecision);
function createBaseEnterpriseUndPurchaseOrder() {
    return {
        id: BigInt(0),
        purchaser: "",
        amount: coin_1.Coin.fromPartial({}),
        status: 0,
        raiseTime: BigInt(0),
        completionTime: BigInt(0),
        decisions: []
    };
}
exports.EnterpriseUndPurchaseOrder = {
    typeUrl: "/mainchain.enterprise.v1.EnterpriseUndPurchaseOrder",
    is(o) {
        return o && (o.$typeUrl === exports.EnterpriseUndPurchaseOrder.typeUrl || typeof o.id === "bigint" && typeof o.purchaser === "string" && coin_1.Coin.is(o.amount) && (0, helpers_1.isSet)(o.status) && typeof o.raiseTime === "bigint" && typeof o.completionTime === "bigint" && Array.isArray(o.decisions) && (!o.decisions.length || exports.PurchaseOrderDecision.is(o.decisions[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EnterpriseUndPurchaseOrder.typeUrl || typeof o.id === "bigint" && typeof o.purchaser === "string" && coin_1.Coin.isSDK(o.amount) && (0, helpers_1.isSet)(o.status) && typeof o.raise_time === "bigint" && typeof o.completion_time === "bigint" && Array.isArray(o.decisions) && (!o.decisions.length || exports.PurchaseOrderDecision.isSDK(o.decisions[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EnterpriseUndPurchaseOrder.typeUrl || typeof o.id === "bigint" && typeof o.purchaser === "string" && coin_1.Coin.isAmino(o.amount) && (0, helpers_1.isSet)(o.status) && typeof o.raise_time === "bigint" && typeof o.completion_time === "bigint" && Array.isArray(o.decisions) && (!o.decisions.length || exports.PurchaseOrderDecision.isAmino(o.decisions[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.purchaser !== "") {
            writer.uint32(18).string(message.purchaser);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.raiseTime !== BigInt(0)) {
            writer.uint32(40).uint64(message.raiseTime);
        }
        if (message.completionTime !== BigInt(0)) {
            writer.uint32(48).uint64(message.completionTime);
        }
        for (const v of message.decisions) {
            exports.PurchaseOrderDecision.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnterpriseUndPurchaseOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.purchaser = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.raiseTime = reader.uint64();
                    break;
                case 6:
                    message.completionTime = reader.uint64();
                    break;
                case 7:
                    message.decisions.push(exports.PurchaseOrderDecision.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEnterpriseUndPurchaseOrder();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.purchaser = object.purchaser ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.status = object.status ?? 0;
        message.raiseTime = object.raiseTime !== undefined && object.raiseTime !== null ? BigInt(object.raiseTime.toString()) : BigInt(0);
        message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? BigInt(object.completionTime.toString()) : BigInt(0);
        message.decisions = object.decisions?.map(e => exports.PurchaseOrderDecision.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEnterpriseUndPurchaseOrder();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.purchaser !== undefined && object.purchaser !== null) {
            message.purchaser = object.purchaser;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.raise_time !== undefined && object.raise_time !== null) {
            message.raiseTime = BigInt(object.raise_time);
        }
        if (object.completion_time !== undefined && object.completion_time !== null) {
            message.completionTime = BigInt(object.completion_time);
        }
        message.decisions = object.decisions?.map(e => exports.PurchaseOrderDecision.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
        obj.purchaser = message.purchaser === "" ? undefined : message.purchaser;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        obj.status = message.status === 0 ? undefined : message.status;
        obj.raise_time = message.raiseTime !== BigInt(0) ? message.raiseTime.toString() : undefined;
        obj.completion_time = message.completionTime !== BigInt(0) ? message.completionTime.toString() : undefined;
        if (message.decisions) {
            obj.decisions = message.decisions.map(e => e ? exports.PurchaseOrderDecision.toAmino(e) : undefined);
        }
        else {
            obj.decisions = message.decisions;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EnterpriseUndPurchaseOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EnterpriseUndPurchaseOrder.decode(message.value);
    },
    toProto(message) {
        return exports.EnterpriseUndPurchaseOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.EnterpriseUndPurchaseOrder",
            value: exports.EnterpriseUndPurchaseOrder.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EnterpriseUndPurchaseOrder.typeUrl, exports.EnterpriseUndPurchaseOrder);
function createBasePurchaseOrders() {
    return {
        purchaseOrders: []
    };
}
exports.PurchaseOrders = {
    typeUrl: "/mainchain.enterprise.v1.PurchaseOrders",
    is(o) {
        return o && (o.$typeUrl === exports.PurchaseOrders.typeUrl || Array.isArray(o.purchaseOrders) && (!o.purchaseOrders.length || exports.EnterpriseUndPurchaseOrder.is(o.purchaseOrders[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.PurchaseOrders.typeUrl || Array.isArray(o.purchase_orders) && (!o.purchase_orders.length || exports.EnterpriseUndPurchaseOrder.isSDK(o.purchase_orders[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PurchaseOrders.typeUrl || Array.isArray(o.purchase_orders) && (!o.purchase_orders.length || exports.EnterpriseUndPurchaseOrder.isAmino(o.purchase_orders[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.purchaseOrders) {
            exports.EnterpriseUndPurchaseOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePurchaseOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaseOrders.push(exports.EnterpriseUndPurchaseOrder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePurchaseOrders();
        message.purchaseOrders = object.purchaseOrders?.map(e => exports.EnterpriseUndPurchaseOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePurchaseOrders();
        message.purchaseOrders = object.purchase_orders?.map(e => exports.EnterpriseUndPurchaseOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.purchaseOrders) {
            obj.purchase_orders = message.purchaseOrders.map(e => e ? exports.EnterpriseUndPurchaseOrder.toAmino(e) : undefined);
        }
        else {
            obj.purchase_orders = message.purchaseOrders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PurchaseOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PurchaseOrders.decode(message.value);
    },
    toProto(message) {
        return exports.PurchaseOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.PurchaseOrders",
            value: exports.PurchaseOrders.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PurchaseOrders.typeUrl, exports.PurchaseOrders);
function createBaseLockedUnd() {
    return {
        owner: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.LockedUnd = {
    typeUrl: "/mainchain.enterprise.v1.LockedUnd",
    is(o) {
        return o && (o.$typeUrl === exports.LockedUnd.typeUrl || typeof o.owner === "string" && coin_1.Coin.is(o.amount));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.LockedUnd.typeUrl || typeof o.owner === "string" && coin_1.Coin.isSDK(o.amount));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.LockedUnd.typeUrl || typeof o.owner === "string" && coin_1.Coin.isAmino(o.amount));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedUnd();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
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
        const message = createBaseLockedUnd();
        message.owner = object.owner ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseLockedUnd();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LockedUnd.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.LockedUnd.decode(message.value);
    },
    toProto(message) {
        return exports.LockedUnd.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.LockedUnd",
            value: exports.LockedUnd.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.LockedUnd.typeUrl, exports.LockedUnd);
function createBaseSpentEFUND() {
    return {
        owner: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.SpentEFUND = {
    typeUrl: "/mainchain.enterprise.v1.SpentEFUND",
    is(o) {
        return o && (o.$typeUrl === exports.SpentEFUND.typeUrl || typeof o.owner === "string" && coin_1.Coin.is(o.amount));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SpentEFUND.typeUrl || typeof o.owner === "string" && coin_1.Coin.isSDK(o.amount));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SpentEFUND.typeUrl || typeof o.owner === "string" && coin_1.Coin.isAmino(o.amount));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpentEFUND();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
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
        const message = createBaseSpentEFUND();
        message.owner = object.owner ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSpentEFUND();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SpentEFUND.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SpentEFUND.decode(message.value);
    },
    toProto(message) {
        return exports.SpentEFUND.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.SpentEFUND",
            value: exports.SpentEFUND.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SpentEFUND.typeUrl, exports.SpentEFUND);
function createBaseEnterpriseUserAccount() {
    return {
        owner: "",
        lockedEfund: coin_1.Coin.fromPartial({}),
        generalSupply: coin_1.Coin.fromPartial({}),
        spentEfund: coin_1.Coin.fromPartial({}),
        spendable: coin_1.Coin.fromPartial({})
    };
}
exports.EnterpriseUserAccount = {
    typeUrl: "/mainchain.enterprise.v1.EnterpriseUserAccount",
    is(o) {
        return o && (o.$typeUrl === exports.EnterpriseUserAccount.typeUrl || typeof o.owner === "string" && coin_1.Coin.is(o.lockedEfund) && coin_1.Coin.is(o.generalSupply) && coin_1.Coin.is(o.spentEfund) && coin_1.Coin.is(o.spendable));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EnterpriseUserAccount.typeUrl || typeof o.owner === "string" && coin_1.Coin.isSDK(o.locked_efund) && coin_1.Coin.isSDK(o.general_supply) && coin_1.Coin.isSDK(o.spent_efund) && coin_1.Coin.isSDK(o.spendable));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EnterpriseUserAccount.typeUrl || typeof o.owner === "string" && coin_1.Coin.isAmino(o.locked_efund) && coin_1.Coin.isAmino(o.general_supply) && coin_1.Coin.isAmino(o.spent_efund) && coin_1.Coin.isAmino(o.spendable));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.lockedEfund !== undefined) {
            coin_1.Coin.encode(message.lockedEfund, writer.uint32(18).fork()).ldelim();
        }
        if (message.generalSupply !== undefined) {
            coin_1.Coin.encode(message.generalSupply, writer.uint32(26).fork()).ldelim();
        }
        if (message.spentEfund !== undefined) {
            coin_1.Coin.encode(message.spentEfund, writer.uint32(34).fork()).ldelim();
        }
        if (message.spendable !== undefined) {
            coin_1.Coin.encode(message.spendable, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnterpriseUserAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.lockedEfund = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.generalSupply = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.spentEfund = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.spendable = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEnterpriseUserAccount();
        message.owner = object.owner ?? "";
        message.lockedEfund = object.lockedEfund !== undefined && object.lockedEfund !== null ? coin_1.Coin.fromPartial(object.lockedEfund) : undefined;
        message.generalSupply = object.generalSupply !== undefined && object.generalSupply !== null ? coin_1.Coin.fromPartial(object.generalSupply) : undefined;
        message.spentEfund = object.spentEfund !== undefined && object.spentEfund !== null ? coin_1.Coin.fromPartial(object.spentEfund) : undefined;
        message.spendable = object.spendable !== undefined && object.spendable !== null ? coin_1.Coin.fromPartial(object.spendable) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEnterpriseUserAccount();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.locked_efund !== undefined && object.locked_efund !== null) {
            message.lockedEfund = coin_1.Coin.fromAmino(object.locked_efund);
        }
        if (object.general_supply !== undefined && object.general_supply !== null) {
            message.generalSupply = coin_1.Coin.fromAmino(object.general_supply);
        }
        if (object.spent_efund !== undefined && object.spent_efund !== null) {
            message.spentEfund = coin_1.Coin.fromAmino(object.spent_efund);
        }
        if (object.spendable !== undefined && object.spendable !== null) {
            message.spendable = coin_1.Coin.fromAmino(object.spendable);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.locked_efund = message.lockedEfund ? coin_1.Coin.toAmino(message.lockedEfund) : undefined;
        obj.general_supply = message.generalSupply ? coin_1.Coin.toAmino(message.generalSupply) : undefined;
        obj.spent_efund = message.spentEfund ? coin_1.Coin.toAmino(message.spentEfund) : undefined;
        obj.spendable = message.spendable ? coin_1.Coin.toAmino(message.spendable) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EnterpriseUserAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EnterpriseUserAccount.decode(message.value);
    },
    toProto(message) {
        return exports.EnterpriseUserAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.EnterpriseUserAccount",
            value: exports.EnterpriseUserAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EnterpriseUserAccount.typeUrl, exports.EnterpriseUserAccount);
function createBaseUndSupply() {
    return {
        denom: "",
        amount: BigInt(0),
        locked: BigInt(0),
        total: BigInt(0)
    };
}
exports.UndSupply = {
    typeUrl: "/mainchain.enterprise.v1.UndSupply",
    is(o) {
        return o && (o.$typeUrl === exports.UndSupply.typeUrl || typeof o.denom === "string" && typeof o.amount === "bigint" && typeof o.locked === "bigint" && typeof o.total === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.UndSupply.typeUrl || typeof o.denom === "string" && typeof o.amount === "bigint" && typeof o.locked === "bigint" && typeof o.total === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.UndSupply.typeUrl || typeof o.denom === "string" && typeof o.amount === "bigint" && typeof o.locked === "bigint" && typeof o.total === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== BigInt(0)) {
            writer.uint32(16).uint64(message.amount);
        }
        if (message.locked !== BigInt(0)) {
            writer.uint32(24).uint64(message.locked);
        }
        if (message.total !== BigInt(0)) {
            writer.uint32(32).uint64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUndSupply();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.uint64();
                    break;
                case 3:
                    message.locked = reader.uint64();
                    break;
                case 4:
                    message.total = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUndSupply();
        message.denom = object.denom ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
        message.locked = object.locked !== undefined && object.locked !== null ? BigInt(object.locked.toString()) : BigInt(0);
        message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseUndSupply();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = BigInt(object.amount);
        }
        if (object.locked !== undefined && object.locked !== null) {
            message.locked = BigInt(object.locked);
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = BigInt(object.total);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.amount = message.amount !== BigInt(0) ? message.amount.toString() : undefined;
        obj.locked = message.locked !== BigInt(0) ? message.locked.toString() : undefined;
        obj.total = message.total !== BigInt(0) ? message.total.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UndSupply.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.UndSupply.decode(message.value);
    },
    toProto(message) {
        return exports.UndSupply.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.UndSupply",
            value: exports.UndSupply.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.UndSupply.typeUrl, exports.UndSupply);
function createBaseWhitelistAddresses() {
    return {
        addresses: []
    };
}
exports.WhitelistAddresses = {
    typeUrl: "/mainchain.enterprise.v1.WhitelistAddresses",
    is(o) {
        return o && (o.$typeUrl === exports.WhitelistAddresses.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.WhitelistAddresses.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.WhitelistAddresses.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
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
        const message = createBaseWhitelistAddresses();
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
        const message = createBaseWhitelistAddresses();
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseWhitelistAddresses();
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
        return exports.WhitelistAddresses.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.WhitelistAddresses.decode(message.value);
    },
    toProto(message) {
        return exports.WhitelistAddresses.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.enterprise.v1.WhitelistAddresses",
            value: exports.WhitelistAddresses.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.WhitelistAddresses.typeUrl, exports.WhitelistAddresses);
function createBaseParams() {
    return {
        entSigners: "",
        denom: "",
        minAccepts: BigInt(0),
        decisionTimeLimit: BigInt(0)
    };
}
exports.Params = {
    typeUrl: "/mainchain.enterprise.v1.Params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.entSigners === "string" && typeof o.denom === "string" && typeof o.minAccepts === "bigint" && typeof o.decisionTimeLimit === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.ent_signers === "string" && typeof o.denom === "string" && typeof o.min_accepts === "bigint" && typeof o.decision_time_limit === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.ent_signers === "string" && typeof o.denom === "string" && typeof o.min_accepts === "bigint" && typeof o.decision_time_limit === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.entSigners !== "") {
            writer.uint32(10).string(message.entSigners);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.minAccepts !== BigInt(0)) {
            writer.uint32(24).uint64(message.minAccepts);
        }
        if (message.decisionTimeLimit !== BigInt(0)) {
            writer.uint32(32).uint64(message.decisionTimeLimit);
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
                    message.entSigners = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.minAccepts = reader.uint64();
                    break;
                case 4:
                    message.decisionTimeLimit = reader.uint64();
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
        message.entSigners = object.entSigners ?? "";
        message.denom = object.denom ?? "";
        message.minAccepts = object.minAccepts !== undefined && object.minAccepts !== null ? BigInt(object.minAccepts.toString()) : BigInt(0);
        message.decisionTimeLimit = object.decisionTimeLimit !== undefined && object.decisionTimeLimit !== null ? BigInt(object.decisionTimeLimit.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.ent_signers !== undefined && object.ent_signers !== null) {
            message.entSigners = object.ent_signers;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.min_accepts !== undefined && object.min_accepts !== null) {
            message.minAccepts = BigInt(object.min_accepts);
        }
        if (object.decision_time_limit !== undefined && object.decision_time_limit !== null) {
            message.decisionTimeLimit = BigInt(object.decision_time_limit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ent_signers = message.entSigners === "" ? undefined : message.entSigners;
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.min_accepts = message.minAccepts !== BigInt(0) ? message.minAccepts.toString() : undefined;
        obj.decision_time_limit = message.decisionTimeLimit !== BigInt(0) ? message.decisionTimeLimit.toString() : undefined;
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
            typeUrl: "/mainchain.enterprise.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
