//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { Coin, CoinAmino, CoinSDKType } from '../../../cosmos/base/v1beta1/coin';
import { GlobalDecoderRegistry } from '../../../registry';
import { EnterpriseUndPurchaseOrder, EnterpriseUndPurchaseOrderAmino, EnterpriseUndPurchaseOrderSDKType, LockedUnd, LockedUndAmino, LockedUndSDKType, Params, ParamsAmino, ParamsSDKType, SpentEFUND, SpentEFUNDAmino, SpentEFUNDSDKType } from './enterprise';
/** GenesisState defines the enterprise module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  startingPurchaseOrderId: bigint;
  purchaseOrders: EnterpriseUndPurchaseOrder[];
  lockedUnd: LockedUnd[];
  totalLocked: Coin;
  whitelist: string[];
  spentEfund: SpentEFUND[];
  totalSpent: Coin;
}
export interface GenesisStateProtoMsg {
  typeUrl: '/mainchain.enterprise.v1.GenesisState';
  value: Uint8Array;
}
/** GenesisState defines the enterprise module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the paramaters of the module. */
  params?: ParamsAmino;
  starting_purchase_order_id?: string;
  purchase_orders?: EnterpriseUndPurchaseOrderAmino[];
  locked_und?: LockedUndAmino[];
  total_locked?: CoinAmino;
  whitelist?: string[];
  spent_efund?: SpentEFUNDAmino[];
  total_spent?: CoinAmino;
}
export interface GenesisStateAminoMsg {
  type: '/mainchain.enterprise.v1.GenesisState';
  value: GenesisStateAmino;
}
/** GenesisState defines the enterprise module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  starting_purchase_order_id: bigint;
  purchase_orders: EnterpriseUndPurchaseOrderSDKType[];
  locked_und: LockedUndSDKType[];
  total_locked: CoinSDKType;
  whitelist: string[];
  spent_efund: SpentEFUNDSDKType[];
  total_spent: CoinSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    startingPurchaseOrderId: BigInt(0),
    purchaseOrders: [],
    lockedUnd: [],
    totalLocked: Coin.fromPartial({}),
    whitelist: [],
    spentEfund: [],
    totalSpent: Coin.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: '/mainchain.enterprise.v1.GenesisState',
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && typeof o.startingPurchaseOrderId === 'bigint' && Array.isArray(o.purchaseOrders) && (!o.purchaseOrders.length || EnterpriseUndPurchaseOrder.is(o.purchaseOrders[0])) && Array.isArray(o.lockedUnd) && (!o.lockedUnd.length || LockedUnd.is(o.lockedUnd[0])) && Coin.is(o.totalLocked) && Array.isArray(o.whitelist) && (!o.whitelist.length || typeof o.whitelist[0] === 'string') && Array.isArray(o.spentEfund) && (!o.spentEfund.length || SpentEFUND.is(o.spentEfund[0])) && Coin.is(o.totalSpent));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && typeof o.starting_purchase_order_id === 'bigint' && Array.isArray(o.purchase_orders) && (!o.purchase_orders.length || EnterpriseUndPurchaseOrder.isSDK(o.purchase_orders[0])) && Array.isArray(o.locked_und) && (!o.locked_und.length || LockedUnd.isSDK(o.locked_und[0])) && Coin.isSDK(o.total_locked) && Array.isArray(o.whitelist) && (!o.whitelist.length || typeof o.whitelist[0] === 'string') && Array.isArray(o.spent_efund) && (!o.spent_efund.length || SpentEFUND.isSDK(o.spent_efund[0])) && Coin.isSDK(o.total_spent));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && typeof o.starting_purchase_order_id === 'bigint' && Array.isArray(o.purchase_orders) && (!o.purchase_orders.length || EnterpriseUndPurchaseOrder.isAmino(o.purchase_orders[0])) && Array.isArray(o.locked_und) && (!o.locked_und.length || LockedUnd.isAmino(o.locked_und[0])) && Coin.isAmino(o.total_locked) && Array.isArray(o.whitelist) && (!o.whitelist.length || typeof o.whitelist[0] === 'string') && Array.isArray(o.spent_efund) && (!o.spent_efund.length || SpentEFUND.isAmino(o.spent_efund[0])) && Coin.isAmino(o.total_spent));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.startingPurchaseOrderId !== BigInt(0)) {
      writer.uint32(16).uint64(message.startingPurchaseOrderId);
    }
    for (const v of message.purchaseOrders) {
      EnterpriseUndPurchaseOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.lockedUnd) {
      LockedUnd.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.totalLocked !== undefined) {
      Coin.encode(message.totalLocked, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.whitelist) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.spentEfund) {
      SpentEFUND.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.totalSpent !== undefined) {
      Coin.encode(message.totalSpent, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.params = Params.decode(reader, reader.uint32());
        break;
      case 2:
        message.startingPurchaseOrderId = reader.uint64();
        break;
      case 3:
        message.purchaseOrders.push(EnterpriseUndPurchaseOrder.decode(reader, reader.uint32()));
        break;
      case 4:
        message.lockedUnd.push(LockedUnd.decode(reader, reader.uint32()));
        break;
      case 5:
        message.totalLocked = Coin.decode(reader, reader.uint32());
        break;
      case 6:
        message.whitelist.push(reader.string());
        break;
      case 7:
        message.spentEfund.push(SpentEFUND.decode(reader, reader.uint32()));
        break;
      case 8:
        message.totalSpent = Coin.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.startingPurchaseOrderId = object.startingPurchaseOrderId !== undefined && object.startingPurchaseOrderId !== null ? BigInt(object.startingPurchaseOrderId.toString()) : BigInt(0);
    message.purchaseOrders = object.purchaseOrders?.map(e => EnterpriseUndPurchaseOrder.fromPartial(e)) || [];
    message.lockedUnd = object.lockedUnd?.map(e => LockedUnd.fromPartial(e)) || [];
    message.totalLocked = object.totalLocked !== undefined && object.totalLocked !== null ? Coin.fromPartial(object.totalLocked) : undefined;
    message.whitelist = object.whitelist?.map(e => e) || [];
    message.spentEfund = object.spentEfund?.map(e => SpentEFUND.fromPartial(e)) || [];
    message.totalSpent = object.totalSpent !== undefined && object.totalSpent !== null ? Coin.fromPartial(object.totalSpent) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.starting_purchase_order_id !== undefined && object.starting_purchase_order_id !== null) {
      message.startingPurchaseOrderId = BigInt(object.starting_purchase_order_id);
    }
    message.purchaseOrders = object.purchase_orders?.map(e => EnterpriseUndPurchaseOrder.fromAmino(e)) || [];
    message.lockedUnd = object.locked_und?.map(e => LockedUnd.fromAmino(e)) || [];
    if (object.total_locked !== undefined && object.total_locked !== null) {
      message.totalLocked = Coin.fromAmino(object.total_locked);
    }
    message.whitelist = object.whitelist?.map(e => e) || [];
    message.spentEfund = object.spent_efund?.map(e => SpentEFUND.fromAmino(e)) || [];
    if (object.total_spent !== undefined && object.total_spent !== null) {
      message.totalSpent = Coin.fromAmino(object.total_spent);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.starting_purchase_order_id = message.startingPurchaseOrderId !== BigInt(0) ? message.startingPurchaseOrderId.toString() : undefined;
    if (message.purchaseOrders) {
      obj.purchase_orders = message.purchaseOrders.map(e => e ? EnterpriseUndPurchaseOrder.toAmino(e) : undefined);
    } else {
      obj.purchase_orders = message.purchaseOrders;
    }
    if (message.lockedUnd) {
      obj.locked_und = message.lockedUnd.map(e => e ? LockedUnd.toAmino(e) : undefined);
    } else {
      obj.locked_und = message.lockedUnd;
    }
    obj.total_locked = message.totalLocked ? Coin.toAmino(message.totalLocked) : undefined;
    if (message.whitelist) {
      obj.whitelist = message.whitelist.map(e => e);
    } else {
      obj.whitelist = message.whitelist;
    }
    if (message.spentEfund) {
      obj.spent_efund = message.spentEfund.map(e => e ? SpentEFUND.toAmino(e) : undefined);
    } else {
      obj.spent_efund = message.spentEfund;
    }
    obj.total_spent = message.totalSpent ? Coin.toAmino(message.totalSpent) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: '/mainchain.enterprise.v1.GenesisState',
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);