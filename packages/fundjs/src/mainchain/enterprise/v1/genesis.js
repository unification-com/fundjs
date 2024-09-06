"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const enterprise_1 = require("./enterprise");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        params: enterprise_1.Params.fromPartial({}),
        startingPurchaseOrderId: BigInt(0),
        purchaseOrders: [],
        lockedUnd: [],
        totalLocked: coin_1.Coin.fromPartial({}),
        whitelist: [],
        spentEfund: [],
        totalSpent: coin_1.Coin.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/mainchain.enterprise.v1.GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || enterprise_1.Params.is(o.params) && typeof o.startingPurchaseOrderId === "bigint" && Array.isArray(o.purchaseOrders) && (!o.purchaseOrders.length || enterprise_1.EnterpriseUndPurchaseOrder.is(o.purchaseOrders[0])) && Array.isArray(o.lockedUnd) && (!o.lockedUnd.length || enterprise_1.LockedUnd.is(o.lockedUnd[0])) && coin_1.Coin.is(o.totalLocked) && Array.isArray(o.whitelist) && (!o.whitelist.length || typeof o.whitelist[0] === "string") && Array.isArray(o.spentEfund) && (!o.spentEfund.length || enterprise_1.SpentEFUND.is(o.spentEfund[0])) && coin_1.Coin.is(o.totalSpent));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || enterprise_1.Params.isSDK(o.params) && typeof o.starting_purchase_order_id === "bigint" && Array.isArray(o.purchase_orders) && (!o.purchase_orders.length || enterprise_1.EnterpriseUndPurchaseOrder.isSDK(o.purchase_orders[0])) && Array.isArray(o.locked_und) && (!o.locked_und.length || enterprise_1.LockedUnd.isSDK(o.locked_und[0])) && coin_1.Coin.isSDK(o.total_locked) && Array.isArray(o.whitelist) && (!o.whitelist.length || typeof o.whitelist[0] === "string") && Array.isArray(o.spent_efund) && (!o.spent_efund.length || enterprise_1.SpentEFUND.isSDK(o.spent_efund[0])) && coin_1.Coin.isSDK(o.total_spent));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || enterprise_1.Params.isAmino(o.params) && typeof o.starting_purchase_order_id === "bigint" && Array.isArray(o.purchase_orders) && (!o.purchase_orders.length || enterprise_1.EnterpriseUndPurchaseOrder.isAmino(o.purchase_orders[0])) && Array.isArray(o.locked_und) && (!o.locked_und.length || enterprise_1.LockedUnd.isAmino(o.locked_und[0])) && coin_1.Coin.isAmino(o.total_locked) && Array.isArray(o.whitelist) && (!o.whitelist.length || typeof o.whitelist[0] === "string") && Array.isArray(o.spent_efund) && (!o.spent_efund.length || enterprise_1.SpentEFUND.isAmino(o.spent_efund[0])) && coin_1.Coin.isAmino(o.total_spent));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            enterprise_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.startingPurchaseOrderId !== BigInt(0)) {
            writer.uint32(16).uint64(message.startingPurchaseOrderId);
        }
        for (const v of message.purchaseOrders) {
            enterprise_1.EnterpriseUndPurchaseOrder.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.lockedUnd) {
            enterprise_1.LockedUnd.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.totalLocked !== undefined) {
            coin_1.Coin.encode(message.totalLocked, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.whitelist) {
            writer.uint32(50).string(v);
        }
        for (const v of message.spentEfund) {
            enterprise_1.SpentEFUND.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.totalSpent !== undefined) {
            coin_1.Coin.encode(message.totalSpent, writer.uint32(66).fork()).ldelim();
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
                    message.params = enterprise_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.startingPurchaseOrderId = reader.uint64();
                    break;
                case 3:
                    message.purchaseOrders.push(enterprise_1.EnterpriseUndPurchaseOrder.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.lockedUnd.push(enterprise_1.LockedUnd.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.totalLocked = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.whitelist.push(reader.string());
                    break;
                case 7:
                    message.spentEfund.push(enterprise_1.SpentEFUND.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.totalSpent = coin_1.Coin.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? enterprise_1.Params.fromPartial(object.params) : undefined;
        message.startingPurchaseOrderId = object.startingPurchaseOrderId !== undefined && object.startingPurchaseOrderId !== null ? BigInt(object.startingPurchaseOrderId.toString()) : BigInt(0);
        message.purchaseOrders = object.purchaseOrders?.map(e => enterprise_1.EnterpriseUndPurchaseOrder.fromPartial(e)) || [];
        message.lockedUnd = object.lockedUnd?.map(e => enterprise_1.LockedUnd.fromPartial(e)) || [];
        message.totalLocked = object.totalLocked !== undefined && object.totalLocked !== null ? coin_1.Coin.fromPartial(object.totalLocked) : undefined;
        message.whitelist = object.whitelist?.map(e => e) || [];
        message.spentEfund = object.spentEfund?.map(e => enterprise_1.SpentEFUND.fromPartial(e)) || [];
        message.totalSpent = object.totalSpent !== undefined && object.totalSpent !== null ? coin_1.Coin.fromPartial(object.totalSpent) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = enterprise_1.Params.fromAmino(object.params);
        }
        if (object.starting_purchase_order_id !== undefined && object.starting_purchase_order_id !== null) {
            message.startingPurchaseOrderId = BigInt(object.starting_purchase_order_id);
        }
        message.purchaseOrders = object.purchase_orders?.map(e => enterprise_1.EnterpriseUndPurchaseOrder.fromAmino(e)) || [];
        message.lockedUnd = object.locked_und?.map(e => enterprise_1.LockedUnd.fromAmino(e)) || [];
        if (object.total_locked !== undefined && object.total_locked !== null) {
            message.totalLocked = coin_1.Coin.fromAmino(object.total_locked);
        }
        message.whitelist = object.whitelist?.map(e => e) || [];
        message.spentEfund = object.spent_efund?.map(e => enterprise_1.SpentEFUND.fromAmino(e)) || [];
        if (object.total_spent !== undefined && object.total_spent !== null) {
            message.totalSpent = coin_1.Coin.fromAmino(object.total_spent);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? enterprise_1.Params.toAmino(message.params) : undefined;
        obj.starting_purchase_order_id = message.startingPurchaseOrderId !== BigInt(0) ? message.startingPurchaseOrderId.toString() : undefined;
        if (message.purchaseOrders) {
            obj.purchase_orders = message.purchaseOrders.map(e => e ? enterprise_1.EnterpriseUndPurchaseOrder.toAmino(e) : undefined);
        }
        else {
            obj.purchase_orders = message.purchaseOrders;
        }
        if (message.lockedUnd) {
            obj.locked_und = message.lockedUnd.map(e => e ? enterprise_1.LockedUnd.toAmino(e) : undefined);
        }
        else {
            obj.locked_und = message.lockedUnd;
        }
        obj.total_locked = message.totalLocked ? coin_1.Coin.toAmino(message.totalLocked) : undefined;
        if (message.whitelist) {
            obj.whitelist = message.whitelist.map(e => e);
        }
        else {
            obj.whitelist = message.whitelist;
        }
        if (message.spentEfund) {
            obj.spent_efund = message.spentEfund.map(e => e ? enterprise_1.SpentEFUND.toAmino(e) : undefined);
        }
        else {
            obj.spent_efund = message.spentEfund;
        }
        obj.total_spent = message.totalSpent ? coin_1.Coin.toAmino(message.totalSpent) : undefined;
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
            typeUrl: "/mainchain.enterprise.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
