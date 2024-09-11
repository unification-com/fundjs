//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PurchaseOrderStatus, WhitelistAction, Params, ParamsAmino, ParamsSDKType } from "./enterprise";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
/** MsgUndPurchaseOrder represents a message to raise a new purchase order */
export interface MsgUndPurchaseOrder {
  /** purchaser is the address of the account raising the purchase order */
  purchaser: string;
  /** amount is the amount of eFUND in nund */
  amount: Coin;
}
export interface MsgUndPurchaseOrderProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrder";
  value: Uint8Array;
}
/** MsgUndPurchaseOrder represents a message to raise a new purchase order */
export interface MsgUndPurchaseOrderAmino {
  /** purchaser is the address of the account raising the purchase order */
  purchaser?: string;
  /** amount is the amount of eFUND in nund */
  amount?: CoinAmino;
}
export interface MsgUndPurchaseOrderAminoMsg {
  type: "enterprise/PurchaseUnd";
  value: MsgUndPurchaseOrderAmino;
}
/** MsgUndPurchaseOrder represents a message to raise a new purchase order */
export interface MsgUndPurchaseOrderSDKType {
  purchaser: string;
  amount: CoinSDKType;
}
/** MsgUndPurchaseOrderResponse defines the Msg/UndPurchaseOrder response type. */
export interface MsgUndPurchaseOrderResponse {
  purchaseOrderId: bigint;
}
export interface MsgUndPurchaseOrderResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrderResponse";
  value: Uint8Array;
}
/** MsgUndPurchaseOrderResponse defines the Msg/UndPurchaseOrder response type. */
export interface MsgUndPurchaseOrderResponseAmino {
  purchase_order_id?: string;
}
export interface MsgUndPurchaseOrderResponseAminoMsg {
  type: "/mainchain.enterprise.v1.MsgUndPurchaseOrderResponse";
  value: MsgUndPurchaseOrderResponseAmino;
}
/** MsgUndPurchaseOrderResponse defines the Msg/UndPurchaseOrder response type. */
export interface MsgUndPurchaseOrderResponseSDKType {
  purchase_order_id: bigint;
}
/** MsgProcessUndPurchaseOrder represents a message to processed a raised purchase order */
export interface MsgProcessUndPurchaseOrder {
  /** purchase_order_id is the ID of the purchase order being raised */
  purchaseOrderId: bigint;
  /** decision is an enumerated PurchaseOrderStatus representing, for example accepted/rejected */
  decision: PurchaseOrderStatus;
  /** signer is the address of the authorised decision maker */
  signer: string;
}
export interface MsgProcessUndPurchaseOrderProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder";
  value: Uint8Array;
}
/** MsgProcessUndPurchaseOrder represents a message to processed a raised purchase order */
export interface MsgProcessUndPurchaseOrderAmino {
  /** purchase_order_id is the ID of the purchase order being raised */
  purchase_order_id: string;
  /** decision is an enumerated PurchaseOrderStatus representing, for example accepted/rejected */
  decision?: PurchaseOrderStatus;
  /** signer is the address of the authorised decision maker */
  signer?: string;
}
export interface MsgProcessUndPurchaseOrderAminoMsg {
  type: "enterprise/ProcessUndPurchaseOrder";
  value: MsgProcessUndPurchaseOrderAmino;
}
/** MsgProcessUndPurchaseOrder represents a message to processed a raised purchase order */
export interface MsgProcessUndPurchaseOrderSDKType {
  purchase_order_id: bigint;
  decision: PurchaseOrderStatus;
  signer: string;
}
/** MsgProcessUndPurchaseOrderResponse defines the Msg/ProcessUndPurchaseOrder response type. */
export interface MsgProcessUndPurchaseOrderResponse {}
export interface MsgProcessUndPurchaseOrderResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrderResponse";
  value: Uint8Array;
}
/** MsgProcessUndPurchaseOrderResponse defines the Msg/ProcessUndPurchaseOrder response type. */
export interface MsgProcessUndPurchaseOrderResponseAmino {}
export interface MsgProcessUndPurchaseOrderResponseAminoMsg {
  type: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrderResponse";
  value: MsgProcessUndPurchaseOrderResponseAmino;
}
/** MsgProcessUndPurchaseOrderResponse defines the Msg/ProcessUndPurchaseOrder response type. */
export interface MsgProcessUndPurchaseOrderResponseSDKType {}
/**
 * MsgWhitelistAddress represents a message to processed an address whitelist action.
 * only addresses whitelisted by an authorised decision maker can raise new purchase orders
 */
export interface MsgWhitelistAddress {
  /** address is the address for which the action is being executed */
  address: string;
  /** signer is the address of the authorised decision maker */
  signer: string;
  /** whitelist_action is the action being executed, and is either add or remove. */
  whitelistAction: WhitelistAction;
}
export interface MsgWhitelistAddressProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddress";
  value: Uint8Array;
}
/**
 * MsgWhitelistAddress represents a message to processed an address whitelist action.
 * only addresses whitelisted by an authorised decision maker can raise new purchase orders
 */
export interface MsgWhitelistAddressAmino {
  /** address is the address for which the action is being executed */
  address?: string;
  /** signer is the address of the authorised decision maker */
  signer?: string;
  /** whitelist_action is the action being executed, and is either add or remove. */
  whitelist_action: WhitelistAction;
}
export interface MsgWhitelistAddressAminoMsg {
  type: "enterprise/WhitelistAddress";
  value: MsgWhitelistAddressAmino;
}
/**
 * MsgWhitelistAddress represents a message to processed an address whitelist action.
 * only addresses whitelisted by an authorised decision maker can raise new purchase orders
 */
export interface MsgWhitelistAddressSDKType {
  address: string;
  signer: string;
  whitelist_action: WhitelistAction;
}
/** MsgWhitelistAddressResponse defines the Msg/WhitelistAddress response type. */
export interface MsgWhitelistAddressResponse {}
export interface MsgWhitelistAddressResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddressResponse";
  value: Uint8Array;
}
/** MsgWhitelistAddressResponse defines the Msg/WhitelistAddress response type. */
export interface MsgWhitelistAddressResponseAmino {}
export interface MsgWhitelistAddressResponseAminoMsg {
  type: "/mainchain.enterprise.v1.MsgWhitelistAddressResponse";
  value: MsgWhitelistAddressResponseAmino;
}
/** MsgWhitelistAddressResponse defines the Msg/WhitelistAddress response type. */
export interface MsgWhitelistAddressResponseSDKType {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/staking parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /**
   * params defines the x/staking parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "mainchain/x/enterprise/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/mainchain.enterprise.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/mainchain.enterprise.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgUndPurchaseOrder(): MsgUndPurchaseOrder {
  return {
    purchaser: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgUndPurchaseOrder = {
  typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrder",
  aminoType: "enterprise/PurchaseUnd",
  is(o: any): o is MsgUndPurchaseOrder {
    return o && (o.$typeUrl === MsgUndPurchaseOrder.typeUrl || typeof o.purchaser === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgUndPurchaseOrderSDKType {
    return o && (o.$typeUrl === MsgUndPurchaseOrder.typeUrl || typeof o.purchaser === "string" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgUndPurchaseOrderAmino {
    return o && (o.$typeUrl === MsgUndPurchaseOrder.typeUrl || typeof o.purchaser === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgUndPurchaseOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.purchaser !== "") {
      writer.uint32(10).string(message.purchaser);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndPurchaseOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndPurchaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaser = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUndPurchaseOrder>): MsgUndPurchaseOrder {
    const message = createBaseMsgUndPurchaseOrder();
    message.purchaser = object.purchaser ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgUndPurchaseOrderAmino): MsgUndPurchaseOrder {
    const message = createBaseMsgUndPurchaseOrder();
    if (object.purchaser !== undefined && object.purchaser !== null) {
      message.purchaser = object.purchaser;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgUndPurchaseOrder): MsgUndPurchaseOrderAmino {
    const obj: any = {};
    obj.purchaser = message.purchaser === "" ? undefined : message.purchaser;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUndPurchaseOrderAminoMsg): MsgUndPurchaseOrder {
    return MsgUndPurchaseOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndPurchaseOrder): MsgUndPurchaseOrderAminoMsg {
    return {
      type: "enterprise/PurchaseUnd",
      value: MsgUndPurchaseOrder.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndPurchaseOrderProtoMsg): MsgUndPurchaseOrder {
    return MsgUndPurchaseOrder.decode(message.value);
  },
  toProto(message: MsgUndPurchaseOrder): Uint8Array {
    return MsgUndPurchaseOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgUndPurchaseOrder): MsgUndPurchaseOrderProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrder",
      value: MsgUndPurchaseOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUndPurchaseOrder.typeUrl, MsgUndPurchaseOrder);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUndPurchaseOrder.aminoType, MsgUndPurchaseOrder.typeUrl);
function createBaseMsgUndPurchaseOrderResponse(): MsgUndPurchaseOrderResponse {
  return {
    purchaseOrderId: BigInt(0)
  };
}
export const MsgUndPurchaseOrderResponse = {
  typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrderResponse",
  is(o: any): o is MsgUndPurchaseOrderResponse {
    return o && (o.$typeUrl === MsgUndPurchaseOrderResponse.typeUrl || typeof o.purchaseOrderId === "bigint");
  },
  isSDK(o: any): o is MsgUndPurchaseOrderResponseSDKType {
    return o && (o.$typeUrl === MsgUndPurchaseOrderResponse.typeUrl || typeof o.purchase_order_id === "bigint");
  },
  isAmino(o: any): o is MsgUndPurchaseOrderResponseAmino {
    return o && (o.$typeUrl === MsgUndPurchaseOrderResponse.typeUrl || typeof o.purchase_order_id === "bigint");
  },
  encode(message: MsgUndPurchaseOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.purchaseOrderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.purchaseOrderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndPurchaseOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgUndPurchaseOrderResponse>): MsgUndPurchaseOrderResponse {
    const message = createBaseMsgUndPurchaseOrderResponse();
    message.purchaseOrderId = object.purchaseOrderId !== undefined && object.purchaseOrderId !== null ? BigInt(object.purchaseOrderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUndPurchaseOrderResponseAmino): MsgUndPurchaseOrderResponse {
    const message = createBaseMsgUndPurchaseOrderResponse();
    if (object.purchase_order_id !== undefined && object.purchase_order_id !== null) {
      message.purchaseOrderId = BigInt(object.purchase_order_id);
    }
    return message;
  },
  toAmino(message: MsgUndPurchaseOrderResponse): MsgUndPurchaseOrderResponseAmino {
    const obj: any = {};
    obj.purchase_order_id = message.purchaseOrderId !== BigInt(0) ? message.purchaseOrderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUndPurchaseOrderResponseAminoMsg): MsgUndPurchaseOrderResponse {
    return MsgUndPurchaseOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUndPurchaseOrderResponseProtoMsg): MsgUndPurchaseOrderResponse {
    return MsgUndPurchaseOrderResponse.decode(message.value);
  },
  toProto(message: MsgUndPurchaseOrderResponse): Uint8Array {
    return MsgUndPurchaseOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUndPurchaseOrderResponse): MsgUndPurchaseOrderResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrderResponse",
      value: MsgUndPurchaseOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUndPurchaseOrderResponse.typeUrl, MsgUndPurchaseOrderResponse);
function createBaseMsgProcessUndPurchaseOrder(): MsgProcessUndPurchaseOrder {
  return {
    purchaseOrderId: BigInt(0),
    decision: 0,
    signer: ""
  };
}
export const MsgProcessUndPurchaseOrder = {
  typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder",
  aminoType: "enterprise/ProcessUndPurchaseOrder",
  is(o: any): o is MsgProcessUndPurchaseOrder {
    return o && (o.$typeUrl === MsgProcessUndPurchaseOrder.typeUrl || typeof o.purchaseOrderId === "bigint" && isSet(o.decision) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgProcessUndPurchaseOrderSDKType {
    return o && (o.$typeUrl === MsgProcessUndPurchaseOrder.typeUrl || typeof o.purchase_order_id === "bigint" && isSet(o.decision) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgProcessUndPurchaseOrderAmino {
    return o && (o.$typeUrl === MsgProcessUndPurchaseOrder.typeUrl || typeof o.purchase_order_id === "bigint" && isSet(o.decision) && typeof o.signer === "string");
  },
  encode(message: MsgProcessUndPurchaseOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProcessUndPurchaseOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProcessUndPurchaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaseOrderId = reader.uint64();
          break;
        case 2:
          message.decision = reader.int32() as any;
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
  fromPartial(object: Partial<MsgProcessUndPurchaseOrder>): MsgProcessUndPurchaseOrder {
    const message = createBaseMsgProcessUndPurchaseOrder();
    message.purchaseOrderId = object.purchaseOrderId !== undefined && object.purchaseOrderId !== null ? BigInt(object.purchaseOrderId.toString()) : BigInt(0);
    message.decision = object.decision ?? 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgProcessUndPurchaseOrderAmino): MsgProcessUndPurchaseOrder {
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
  toAmino(message: MsgProcessUndPurchaseOrder): MsgProcessUndPurchaseOrderAmino {
    const obj: any = {};
    obj.purchase_order_id = message.purchaseOrderId ? message.purchaseOrderId.toString() : "0";
    obj.decision = message.decision === 0 ? undefined : message.decision;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgProcessUndPurchaseOrderAminoMsg): MsgProcessUndPurchaseOrder {
    return MsgProcessUndPurchaseOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgProcessUndPurchaseOrder): MsgProcessUndPurchaseOrderAminoMsg {
    return {
      type: "enterprise/ProcessUndPurchaseOrder",
      value: MsgProcessUndPurchaseOrder.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgProcessUndPurchaseOrderProtoMsg): MsgProcessUndPurchaseOrder {
    return MsgProcessUndPurchaseOrder.decode(message.value);
  },
  toProto(message: MsgProcessUndPurchaseOrder): Uint8Array {
    return MsgProcessUndPurchaseOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgProcessUndPurchaseOrder): MsgProcessUndPurchaseOrderProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder",
      value: MsgProcessUndPurchaseOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgProcessUndPurchaseOrder.typeUrl, MsgProcessUndPurchaseOrder);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgProcessUndPurchaseOrder.aminoType, MsgProcessUndPurchaseOrder.typeUrl);
function createBaseMsgProcessUndPurchaseOrderResponse(): MsgProcessUndPurchaseOrderResponse {
  return {};
}
export const MsgProcessUndPurchaseOrderResponse = {
  typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrderResponse",
  is(o: any): o is MsgProcessUndPurchaseOrderResponse {
    return o && o.$typeUrl === MsgProcessUndPurchaseOrderResponse.typeUrl;
  },
  isSDK(o: any): o is MsgProcessUndPurchaseOrderResponseSDKType {
    return o && o.$typeUrl === MsgProcessUndPurchaseOrderResponse.typeUrl;
  },
  isAmino(o: any): o is MsgProcessUndPurchaseOrderResponseAmino {
    return o && o.$typeUrl === MsgProcessUndPurchaseOrderResponse.typeUrl;
  },
  encode(_: MsgProcessUndPurchaseOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProcessUndPurchaseOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgProcessUndPurchaseOrderResponse>): MsgProcessUndPurchaseOrderResponse {
    const message = createBaseMsgProcessUndPurchaseOrderResponse();
    return message;
  },
  fromAmino(_: MsgProcessUndPurchaseOrderResponseAmino): MsgProcessUndPurchaseOrderResponse {
    const message = createBaseMsgProcessUndPurchaseOrderResponse();
    return message;
  },
  toAmino(_: MsgProcessUndPurchaseOrderResponse): MsgProcessUndPurchaseOrderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgProcessUndPurchaseOrderResponseAminoMsg): MsgProcessUndPurchaseOrderResponse {
    return MsgProcessUndPurchaseOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProcessUndPurchaseOrderResponseProtoMsg): MsgProcessUndPurchaseOrderResponse {
    return MsgProcessUndPurchaseOrderResponse.decode(message.value);
  },
  toProto(message: MsgProcessUndPurchaseOrderResponse): Uint8Array {
    return MsgProcessUndPurchaseOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProcessUndPurchaseOrderResponse): MsgProcessUndPurchaseOrderResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrderResponse",
      value: MsgProcessUndPurchaseOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgProcessUndPurchaseOrderResponse.typeUrl, MsgProcessUndPurchaseOrderResponse);
function createBaseMsgWhitelistAddress(): MsgWhitelistAddress {
  return {
    address: "",
    signer: "",
    whitelistAction: 0
  };
}
export const MsgWhitelistAddress = {
  typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddress",
  aminoType: "enterprise/WhitelistAddress",
  is(o: any): o is MsgWhitelistAddress {
    return o && (o.$typeUrl === MsgWhitelistAddress.typeUrl || typeof o.address === "string" && typeof o.signer === "string" && isSet(o.whitelistAction));
  },
  isSDK(o: any): o is MsgWhitelistAddressSDKType {
    return o && (o.$typeUrl === MsgWhitelistAddress.typeUrl || typeof o.address === "string" && typeof o.signer === "string" && isSet(o.whitelist_action));
  },
  isAmino(o: any): o is MsgWhitelistAddressAmino {
    return o && (o.$typeUrl === MsgWhitelistAddress.typeUrl || typeof o.address === "string" && typeof o.signer === "string" && isSet(o.whitelist_action));
  },
  encode(message: MsgWhitelistAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWhitelistAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.whitelistAction = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWhitelistAddress>): MsgWhitelistAddress {
    const message = createBaseMsgWhitelistAddress();
    message.address = object.address ?? "";
    message.signer = object.signer ?? "";
    message.whitelistAction = object.whitelistAction ?? 0;
    return message;
  },
  fromAmino(object: MsgWhitelistAddressAmino): MsgWhitelistAddress {
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
  toAmino(message: MsgWhitelistAddress): MsgWhitelistAddressAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.whitelist_action = message.whitelistAction ?? 0;
    return obj;
  },
  fromAminoMsg(object: MsgWhitelistAddressAminoMsg): MsgWhitelistAddress {
    return MsgWhitelistAddress.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWhitelistAddress): MsgWhitelistAddressAminoMsg {
    return {
      type: "enterprise/WhitelistAddress",
      value: MsgWhitelistAddress.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWhitelistAddressProtoMsg): MsgWhitelistAddress {
    return MsgWhitelistAddress.decode(message.value);
  },
  toProto(message: MsgWhitelistAddress): Uint8Array {
    return MsgWhitelistAddress.encode(message).finish();
  },
  toProtoMsg(message: MsgWhitelistAddress): MsgWhitelistAddressProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddress",
      value: MsgWhitelistAddress.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWhitelistAddress.typeUrl, MsgWhitelistAddress);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgWhitelistAddress.aminoType, MsgWhitelistAddress.typeUrl);
function createBaseMsgWhitelistAddressResponse(): MsgWhitelistAddressResponse {
  return {};
}
export const MsgWhitelistAddressResponse = {
  typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddressResponse",
  is(o: any): o is MsgWhitelistAddressResponse {
    return o && o.$typeUrl === MsgWhitelistAddressResponse.typeUrl;
  },
  isSDK(o: any): o is MsgWhitelistAddressResponseSDKType {
    return o && o.$typeUrl === MsgWhitelistAddressResponse.typeUrl;
  },
  isAmino(o: any): o is MsgWhitelistAddressResponseAmino {
    return o && o.$typeUrl === MsgWhitelistAddressResponse.typeUrl;
  },
  encode(_: MsgWhitelistAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWhitelistAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgWhitelistAddressResponse>): MsgWhitelistAddressResponse {
    const message = createBaseMsgWhitelistAddressResponse();
    return message;
  },
  fromAmino(_: MsgWhitelistAddressResponseAmino): MsgWhitelistAddressResponse {
    const message = createBaseMsgWhitelistAddressResponse();
    return message;
  },
  toAmino(_: MsgWhitelistAddressResponse): MsgWhitelistAddressResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWhitelistAddressResponseAminoMsg): MsgWhitelistAddressResponse {
    return MsgWhitelistAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWhitelistAddressResponseProtoMsg): MsgWhitelistAddressResponse {
    return MsgWhitelistAddressResponse.decode(message.value);
  },
  toProto(message: MsgWhitelistAddressResponse): Uint8Array {
    return MsgWhitelistAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWhitelistAddressResponse): MsgWhitelistAddressResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddressResponse",
      value: MsgWhitelistAddressResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWhitelistAddressResponse.typeUrl, MsgWhitelistAddressResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/mainchain.enterprise.v1.MsgUpdateParams",
  aminoType: "mainchain/x/enterprise/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "mainchain/x/enterprise/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/mainchain.enterprise.v1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/mainchain.enterprise.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);