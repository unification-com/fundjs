import { Params, ParamsAmino, ParamsSDKType, EnterpriseUndPurchaseOrder, EnterpriseUndPurchaseOrderAmino, EnterpriseUndPurchaseOrderSDKType, LockedUnd, LockedUndAmino, LockedUndSDKType, SpentEFUND, SpentEFUNDAmino, SpentEFUNDSDKType } from "./enterprise";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
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
    typeUrl: "/mainchain.enterprise.v1.GenesisState";
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
    type: "/mainchain.enterprise.v1.GenesisState";
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
export declare const GenesisState: {
    typeUrl: string;
    is(o: any): o is GenesisState;
    isSDK(o: any): o is GenesisStateSDKType;
    isAmino(o: any): o is GenesisStateAmino;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
