import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PurchaseOrderStatus, WhitelistAction, Params, ParamsAmino, ParamsSDKType } from "./enterprise";
import { BinaryReader, BinaryWriter } from "../../../binary";
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
    type: "/mainchain.enterprise.v1.MsgUndPurchaseOrder";
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
    type: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder";
    value: MsgProcessUndPurchaseOrderAmino;
}
/** MsgProcessUndPurchaseOrder represents a message to processed a raised purchase order */
export interface MsgProcessUndPurchaseOrderSDKType {
    purchase_order_id: bigint;
    decision: PurchaseOrderStatus;
    signer: string;
}
/** MsgProcessUndPurchaseOrderResponse defines the Msg/ProcessUndPurchaseOrder response type. */
export interface MsgProcessUndPurchaseOrderResponse {
}
export interface MsgProcessUndPurchaseOrderResponseProtoMsg {
    typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrderResponse";
    value: Uint8Array;
}
/** MsgProcessUndPurchaseOrderResponse defines the Msg/ProcessUndPurchaseOrder response type. */
export interface MsgProcessUndPurchaseOrderResponseAmino {
}
export interface MsgProcessUndPurchaseOrderResponseAminoMsg {
    type: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrderResponse";
    value: MsgProcessUndPurchaseOrderResponseAmino;
}
/** MsgProcessUndPurchaseOrderResponse defines the Msg/ProcessUndPurchaseOrder response type. */
export interface MsgProcessUndPurchaseOrderResponseSDKType {
}
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
    type: "/mainchain.enterprise.v1.MsgWhitelistAddress";
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
export interface MsgWhitelistAddressResponse {
}
export interface MsgWhitelistAddressResponseProtoMsg {
    typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddressResponse";
    value: Uint8Array;
}
/** MsgWhitelistAddressResponse defines the Msg/WhitelistAddress response type. */
export interface MsgWhitelistAddressResponseAmino {
}
export interface MsgWhitelistAddressResponseAminoMsg {
    type: "/mainchain.enterprise.v1.MsgWhitelistAddressResponse";
    value: MsgWhitelistAddressResponseAmino;
}
/** MsgWhitelistAddressResponse defines the Msg/WhitelistAddress response type. */
export interface MsgWhitelistAddressResponseSDKType {
}
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
export interface MsgUpdateParamsResponse {
}
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
export interface MsgUpdateParamsResponseAmino {
}
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
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgUndPurchaseOrder: {
    typeUrl: string;
    is(o: any): o is MsgUndPurchaseOrder;
    isSDK(o: any): o is MsgUndPurchaseOrderSDKType;
    isAmino(o: any): o is MsgUndPurchaseOrderAmino;
    encode(message: MsgUndPurchaseOrder, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUndPurchaseOrder;
    fromPartial(object: Partial<MsgUndPurchaseOrder>): MsgUndPurchaseOrder;
    fromAmino(object: MsgUndPurchaseOrderAmino): MsgUndPurchaseOrder;
    toAmino(message: MsgUndPurchaseOrder): MsgUndPurchaseOrderAmino;
    fromAminoMsg(object: MsgUndPurchaseOrderAminoMsg): MsgUndPurchaseOrder;
    fromProtoMsg(message: MsgUndPurchaseOrderProtoMsg): MsgUndPurchaseOrder;
    toProto(message: MsgUndPurchaseOrder): Uint8Array;
    toProtoMsg(message: MsgUndPurchaseOrder): MsgUndPurchaseOrderProtoMsg;
};
export declare const MsgUndPurchaseOrderResponse: {
    typeUrl: string;
    is(o: any): o is MsgUndPurchaseOrderResponse;
    isSDK(o: any): o is MsgUndPurchaseOrderResponseSDKType;
    isAmino(o: any): o is MsgUndPurchaseOrderResponseAmino;
    encode(message: MsgUndPurchaseOrderResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUndPurchaseOrderResponse;
    fromPartial(object: Partial<MsgUndPurchaseOrderResponse>): MsgUndPurchaseOrderResponse;
    fromAmino(object: MsgUndPurchaseOrderResponseAmino): MsgUndPurchaseOrderResponse;
    toAmino(message: MsgUndPurchaseOrderResponse): MsgUndPurchaseOrderResponseAmino;
    fromAminoMsg(object: MsgUndPurchaseOrderResponseAminoMsg): MsgUndPurchaseOrderResponse;
    fromProtoMsg(message: MsgUndPurchaseOrderResponseProtoMsg): MsgUndPurchaseOrderResponse;
    toProto(message: MsgUndPurchaseOrderResponse): Uint8Array;
    toProtoMsg(message: MsgUndPurchaseOrderResponse): MsgUndPurchaseOrderResponseProtoMsg;
};
export declare const MsgProcessUndPurchaseOrder: {
    typeUrl: string;
    is(o: any): o is MsgProcessUndPurchaseOrder;
    isSDK(o: any): o is MsgProcessUndPurchaseOrderSDKType;
    isAmino(o: any): o is MsgProcessUndPurchaseOrderAmino;
    encode(message: MsgProcessUndPurchaseOrder, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgProcessUndPurchaseOrder;
    fromPartial(object: Partial<MsgProcessUndPurchaseOrder>): MsgProcessUndPurchaseOrder;
    fromAmino(object: MsgProcessUndPurchaseOrderAmino): MsgProcessUndPurchaseOrder;
    toAmino(message: MsgProcessUndPurchaseOrder): MsgProcessUndPurchaseOrderAmino;
    fromAminoMsg(object: MsgProcessUndPurchaseOrderAminoMsg): MsgProcessUndPurchaseOrder;
    fromProtoMsg(message: MsgProcessUndPurchaseOrderProtoMsg): MsgProcessUndPurchaseOrder;
    toProto(message: MsgProcessUndPurchaseOrder): Uint8Array;
    toProtoMsg(message: MsgProcessUndPurchaseOrder): MsgProcessUndPurchaseOrderProtoMsg;
};
export declare const MsgProcessUndPurchaseOrderResponse: {
    typeUrl: string;
    is(o: any): o is MsgProcessUndPurchaseOrderResponse;
    isSDK(o: any): o is MsgProcessUndPurchaseOrderResponseSDKType;
    isAmino(o: any): o is MsgProcessUndPurchaseOrderResponseAmino;
    encode(_: MsgProcessUndPurchaseOrderResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgProcessUndPurchaseOrderResponse;
    fromPartial(_: Partial<MsgProcessUndPurchaseOrderResponse>): MsgProcessUndPurchaseOrderResponse;
    fromAmino(_: MsgProcessUndPurchaseOrderResponseAmino): MsgProcessUndPurchaseOrderResponse;
    toAmino(_: MsgProcessUndPurchaseOrderResponse): MsgProcessUndPurchaseOrderResponseAmino;
    fromAminoMsg(object: MsgProcessUndPurchaseOrderResponseAminoMsg): MsgProcessUndPurchaseOrderResponse;
    fromProtoMsg(message: MsgProcessUndPurchaseOrderResponseProtoMsg): MsgProcessUndPurchaseOrderResponse;
    toProto(message: MsgProcessUndPurchaseOrderResponse): Uint8Array;
    toProtoMsg(message: MsgProcessUndPurchaseOrderResponse): MsgProcessUndPurchaseOrderResponseProtoMsg;
};
export declare const MsgWhitelistAddress: {
    typeUrl: string;
    is(o: any): o is MsgWhitelistAddress;
    isSDK(o: any): o is MsgWhitelistAddressSDKType;
    isAmino(o: any): o is MsgWhitelistAddressAmino;
    encode(message: MsgWhitelistAddress, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWhitelistAddress;
    fromPartial(object: Partial<MsgWhitelistAddress>): MsgWhitelistAddress;
    fromAmino(object: MsgWhitelistAddressAmino): MsgWhitelistAddress;
    toAmino(message: MsgWhitelistAddress): MsgWhitelistAddressAmino;
    fromAminoMsg(object: MsgWhitelistAddressAminoMsg): MsgWhitelistAddress;
    fromProtoMsg(message: MsgWhitelistAddressProtoMsg): MsgWhitelistAddress;
    toProto(message: MsgWhitelistAddress): Uint8Array;
    toProtoMsg(message: MsgWhitelistAddress): MsgWhitelistAddressProtoMsg;
};
export declare const MsgWhitelistAddressResponse: {
    typeUrl: string;
    is(o: any): o is MsgWhitelistAddressResponse;
    isSDK(o: any): o is MsgWhitelistAddressResponseSDKType;
    isAmino(o: any): o is MsgWhitelistAddressResponseAmino;
    encode(_: MsgWhitelistAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWhitelistAddressResponse;
    fromPartial(_: Partial<MsgWhitelistAddressResponse>): MsgWhitelistAddressResponse;
    fromAmino(_: MsgWhitelistAddressResponseAmino): MsgWhitelistAddressResponse;
    toAmino(_: MsgWhitelistAddressResponse): MsgWhitelistAddressResponseAmino;
    fromAminoMsg(object: MsgWhitelistAddressResponseAminoMsg): MsgWhitelistAddressResponse;
    fromProtoMsg(message: MsgWhitelistAddressResponseProtoMsg): MsgWhitelistAddressResponse;
    toProto(message: MsgWhitelistAddressResponse): Uint8Array;
    toProtoMsg(message: MsgWhitelistAddressResponse): MsgWhitelistAddressResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateParams;
    isSDK(o: any): o is MsgUpdateParamsSDKType;
    isAmino(o: any): o is MsgUpdateParamsAmino;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    is(o: any): o is MsgUpdateParamsResponse;
    isSDK(o: any): o is MsgUpdateParamsResponseSDKType;
    isAmino(o: any): o is MsgUpdateParamsResponseAmino;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
