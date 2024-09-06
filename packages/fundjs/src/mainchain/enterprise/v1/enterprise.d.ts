import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** PurchaseOrderStatus enumerates the valid statuses for a given purchase order. */
export declare enum PurchaseOrderStatus {
    /** STATUS_NIL - STATUS_NIL defines a no-op status. */
    STATUS_NIL = 0,
    /** STATUS_RAISED - STATUS_RAISED defines a raised status. */
    STATUS_RAISED = 1,
    /** STATUS_ACCEPTED - STATUS_ACCEPTED defines an accepted status. */
    STATUS_ACCEPTED = 2,
    /** STATUS_REJECTED - STATUS_REJECTED defines a rejected status. */
    STATUS_REJECTED = 3,
    /** STATUS_COMPLETED - STATUS_COMPLETED defines a completed status. */
    STATUS_COMPLETED = 4,
    UNRECOGNIZED = -1
}
export declare const PurchaseOrderStatusSDKType: typeof PurchaseOrderStatus;
export declare const PurchaseOrderStatusAmino: typeof PurchaseOrderStatus;
export declare function purchaseOrderStatusFromJSON(object: any): PurchaseOrderStatus;
export declare function purchaseOrderStatusToJSON(object: PurchaseOrderStatus): string;
/** WhitelistAction enumerates the valid actions for whitelisting addresses. */
export declare enum WhitelistAction {
    /** WHITELIST_ACTION_NIL - WHITELIST_ACTION_NIL defines a no-op action. */
    WHITELIST_ACTION_NIL = 0,
    /** WHITELIST_ACTION_ADD - WHITELIST_ACTION_ADD defines an add action. */
    WHITELIST_ACTION_ADD = 1,
    /** WHITELIST_ACTION_REMOVE - WHITELIST_ACTION_REMOVE defines a remove action. */
    WHITELIST_ACTION_REMOVE = 2,
    UNRECOGNIZED = -1
}
export declare const WhitelistActionSDKType: typeof WhitelistAction;
export declare const WhitelistActionAmino: typeof WhitelistAction;
export declare function whitelistActionFromJSON(object: any): WhitelistAction;
export declare function whitelistActionToJSON(object: WhitelistAction): string;
/**
 * PurchaseOrderDecision defines a decision made for a given purchase order, ie,
 * whether to accept or reject
 */
export interface PurchaseOrderDecision {
    /** signer is an authorised address for making decisions */
    signer: string;
    /** decision is the decision made, i.e. accept/reject */
    decision: PurchaseOrderStatus;
    /** decision_time is a unix epoch value of the decision submission time */
    decisionTime: bigint;
}
export interface PurchaseOrderDecisionProtoMsg {
    typeUrl: "/mainchain.enterprise.v1.PurchaseOrderDecision";
    value: Uint8Array;
}
/**
 * PurchaseOrderDecision defines a decision made for a given purchase order, ie,
 * whether to accept or reject
 */
export interface PurchaseOrderDecisionAmino {
    /** signer is an authorised address for making decisions */
    signer?: string;
    /** decision is the decision made, i.e. accept/reject */
    decision?: PurchaseOrderStatus;
    /** decision_time is a unix epoch value of the decision submission time */
    decision_time?: string;
}
export interface PurchaseOrderDecisionAminoMsg {
    type: "/mainchain.enterprise.v1.PurchaseOrderDecision";
    value: PurchaseOrderDecisionAmino;
}
/**
 * PurchaseOrderDecision defines a decision made for a given purchase order, ie,
 * whether to accept or reject
 */
export interface PurchaseOrderDecisionSDKType {
    signer: string;
    decision: PurchaseOrderStatus;
    decision_time: bigint;
}
/** EnterpriseUndPurchaseOrder defines a purchase order raised by a whitelisted address */
export interface EnterpriseUndPurchaseOrder {
    /** id is the purchase order ID */
    id: bigint;
    /** purchaser is the address of the user who raised the order */
    purchaser: string;
    /** amount is the amount being raised for */
    amount: Coin;
    /** status is the current PurchaseOrderStatus */
    status: PurchaseOrderStatus;
    /** raise_time is a unix epoch value of the order submission time */
    raiseTime: bigint;
    /** completion_time is a unix epoch value of the time the order was completed */
    completionTime: bigint;
    /** decisions is an array of decisions made by authorised addresses */
    decisions: PurchaseOrderDecision[];
}
export interface EnterpriseUndPurchaseOrderProtoMsg {
    typeUrl: "/mainchain.enterprise.v1.EnterpriseUndPurchaseOrder";
    value: Uint8Array;
}
/** EnterpriseUndPurchaseOrder defines a purchase order raised by a whitelisted address */
export interface EnterpriseUndPurchaseOrderAmino {
    /** id is the purchase order ID */
    id?: string;
    /** purchaser is the address of the user who raised the order */
    purchaser?: string;
    /** amount is the amount being raised for */
    amount?: CoinAmino;
    /** status is the current PurchaseOrderStatus */
    status?: PurchaseOrderStatus;
    /** raise_time is a unix epoch value of the order submission time */
    raise_time?: string;
    /** completion_time is a unix epoch value of the time the order was completed */
    completion_time?: string;
    /** decisions is an array of decisions made by authorised addresses */
    decisions?: PurchaseOrderDecisionAmino[];
}
export interface EnterpriseUndPurchaseOrderAminoMsg {
    type: "/mainchain.enterprise.v1.EnterpriseUndPurchaseOrder";
    value: EnterpriseUndPurchaseOrderAmino;
}
/** EnterpriseUndPurchaseOrder defines a purchase order raised by a whitelisted address */
export interface EnterpriseUndPurchaseOrderSDKType {
    id: bigint;
    purchaser: string;
    amount: CoinSDKType;
    status: PurchaseOrderStatus;
    raise_time: bigint;
    completion_time: bigint;
    decisions: PurchaseOrderDecisionSDKType[];
}
/** PurchaseOrders defines a list of purchase orders */
export interface PurchaseOrders {
    purchaseOrders: EnterpriseUndPurchaseOrder[];
}
export interface PurchaseOrdersProtoMsg {
    typeUrl: "/mainchain.enterprise.v1.PurchaseOrders";
    value: Uint8Array;
}
/** PurchaseOrders defines a list of purchase orders */
export interface PurchaseOrdersAmino {
    purchase_orders?: EnterpriseUndPurchaseOrderAmino[];
}
export interface PurchaseOrdersAminoMsg {
    type: "/mainchain.enterprise.v1.PurchaseOrders";
    value: PurchaseOrdersAmino;
}
/** PurchaseOrders defines a list of purchase orders */
export interface PurchaseOrdersSDKType {
    purchase_orders: EnterpriseUndPurchaseOrderSDKType[];
}
/** LockedUnd defines the amount of locked FUND for an account */
export interface LockedUnd {
    /** owner is the address of the locked FUND owner */
    owner: string;
    /** amount is the amount currently locked and available to pay for beacon/wrkchain fees */
    amount: Coin;
}
export interface LockedUndProtoMsg {
    typeUrl: "/mainchain.enterprise.v1.LockedUnd";
    value: Uint8Array;
}
/** LockedUnd defines the amount of locked FUND for an account */
export interface LockedUndAmino {
    /** owner is the address of the locked FUND owner */
    owner?: string;
    /** amount is the amount currently locked and available to pay for beacon/wrkchain fees */
    amount?: CoinAmino;
}
export interface LockedUndAminoMsg {
    type: "/mainchain.enterprise.v1.LockedUnd";
    value: LockedUndAmino;
}
/** LockedUnd defines the amount of locked FUND for an account */
export interface LockedUndSDKType {
    owner: string;
    amount: CoinSDKType;
}
/** SpentEFUND defines the amount of spent eFUND for an account */
export interface SpentEFUND {
    /** owner is the address of the eFUND owner */
    owner: string;
    /** amount is the amount currently locked and available to pay for beacon/wrkchain fees */
    amount: Coin;
}
export interface SpentEFUNDProtoMsg {
    typeUrl: "/mainchain.enterprise.v1.SpentEFUND";
    value: Uint8Array;
}
/** SpentEFUND defines the amount of spent eFUND for an account */
export interface SpentEFUNDAmino {
    /** owner is the address of the eFUND owner */
    owner?: string;
    /** amount is the amount currently locked and available to pay for beacon/wrkchain fees */
    amount?: CoinAmino;
}
export interface SpentEFUNDAminoMsg {
    type: "/mainchain.enterprise.v1.SpentEFUND";
    value: SpentEFUNDAmino;
}
/** SpentEFUND defines the amount of spent eFUND for an account */
export interface SpentEFUNDSDKType {
    owner: string;
    amount: CoinSDKType;
}
/** EnterpriseUserAccount defines data about an enterprise user */
export interface EnterpriseUserAccount {
    /** owner is the address of the account */
    owner: string;
    /**
     * locked_efund is the amount of eFUND the account currently has locked and only available to pay for
     * beacon/wrkchain fees
     */
    lockedEfund: Coin;
    /**
     * general_supply is the amount currently held in the bank module's supply - i.e. standard FUND in general supply
     * usable for anything (transfers, staking, standard tx fees etc.)
     */
    generalSupply: Coin;
    /** spent_efund is a running tally of how much eFUND the account has used so far to pay for beacon/wrkchain fees */
    spentEfund: Coin;
    /**
     * spendable is the sum of locked eFUND and general bank module FUND - i.e. how much can be used to pay
     * BEACON/Wrkchain fees all together
     */
    spendable: Coin;
}
export interface EnterpriseUserAccountProtoMsg {
    typeUrl: "/mainchain.enterprise.v1.EnterpriseUserAccount";
    value: Uint8Array;
}
/** EnterpriseUserAccount defines data about an enterprise user */
export interface EnterpriseUserAccountAmino {
    /** owner is the address of the account */
    owner?: string;
    /**
     * locked_efund is the amount of eFUND the account currently has locked and only available to pay for
     * beacon/wrkchain fees
     */
    locked_efund?: CoinAmino;
    /**
     * general_supply is the amount currently held in the bank module's supply - i.e. standard FUND in general supply
     * usable for anything (transfers, staking, standard tx fees etc.)
     */
    general_supply?: CoinAmino;
    /** spent_efund is a running tally of how much eFUND the account has used so far to pay for beacon/wrkchain fees */
    spent_efund?: CoinAmino;
    /**
     * spendable is the sum of locked eFUND and general bank module FUND - i.e. how much can be used to pay
     * BEACON/Wrkchain fees all together
     */
    spendable?: CoinAmino;
}
export interface EnterpriseUserAccountAminoMsg {
    type: "/mainchain.enterprise.v1.EnterpriseUserAccount";
    value: EnterpriseUserAccountAmino;
}
/** EnterpriseUserAccount defines data about an enterprise user */
export interface EnterpriseUserAccountSDKType {
    owner: string;
    locked_efund: CoinSDKType;
    general_supply: CoinSDKType;
    spent_efund: CoinSDKType;
    spendable: CoinSDKType;
}
/** UndSupply defines the current FUND supply, including locked */
export interface UndSupply {
    /** denom is the denomination, e.g. nund */
    denom: string;
    /** amount is the amount of unlocked FUND in general supply */
    amount: bigint;
    /** locked is the amount of locked FUND */
    locked: bigint;
    /** amount is the sum of locked and unlocked FUND */
    total: bigint;
}
export interface UndSupplyProtoMsg {
    typeUrl: "/mainchain.enterprise.v1.UndSupply";
    value: Uint8Array;
}
/** UndSupply defines the current FUND supply, including locked */
export interface UndSupplyAmino {
    /** denom is the denomination, e.g. nund */
    denom?: string;
    /** amount is the amount of unlocked FUND in general supply */
    amount?: string;
    /** locked is the amount of locked FUND */
    locked?: string;
    /** amount is the sum of locked and unlocked FUND */
    total?: string;
}
export interface UndSupplyAminoMsg {
    type: "/mainchain.enterprise.v1.UndSupply";
    value: UndSupplyAmino;
}
/** UndSupply defines the current FUND supply, including locked */
export interface UndSupplySDKType {
    denom: string;
    amount: bigint;
    locked: bigint;
    total: bigint;
}
/** WhitelistAddresses defines a list of whitelisted addresses authorised to raise enterprise purchase orders */
export interface WhitelistAddresses {
    addresses: string[];
}
export interface WhitelistAddressesProtoMsg {
    typeUrl: "/mainchain.enterprise.v1.WhitelistAddresses";
    value: Uint8Array;
}
/** WhitelistAddresses defines a list of whitelisted addresses authorised to raise enterprise purchase orders */
export interface WhitelistAddressesAmino {
    addresses?: string[];
}
export interface WhitelistAddressesAminoMsg {
    type: "/mainchain.enterprise.v1.WhitelistAddresses";
    value: WhitelistAddressesAmino;
}
/** WhitelistAddresses defines a list of whitelisted addresses authorised to raise enterprise purchase orders */
export interface WhitelistAddressesSDKType {
    addresses: string[];
}
/** Params defines the parameters for the enterprise module. */
export interface Params {
    /** ent_signers is a list of addresses authorised to make decisions on raised purchase orders */
    entSigners: string;
    /** denom is the denomination of eFUND, e.g. nund */
    denom: string;
    /** min_accepts is the minumum number of ent_signers required to accept a PO before it is processed and efUND minted */
    minAccepts: bigint;
    /** decision_time_limit is the time limit within which all decisions must be made for a raised purchase order. */
    decisionTimeLimit: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/mainchain.enterprise.v1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the enterprise module. */
export interface ParamsAmino {
    /** ent_signers is a list of addresses authorised to make decisions on raised purchase orders */
    ent_signers?: string;
    /** denom is the denomination of eFUND, e.g. nund */
    denom?: string;
    /** min_accepts is the minumum number of ent_signers required to accept a PO before it is processed and efUND minted */
    min_accepts?: string;
    /** decision_time_limit is the time limit within which all decisions must be made for a raised purchase order. */
    decision_time_limit?: string;
}
export interface ParamsAminoMsg {
    type: "/mainchain.enterprise.v1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the enterprise module. */
export interface ParamsSDKType {
    ent_signers: string;
    denom: string;
    min_accepts: bigint;
    decision_time_limit: bigint;
}
export declare const PurchaseOrderDecision: {
    typeUrl: string;
    is(o: any): o is PurchaseOrderDecision;
    isSDK(o: any): o is PurchaseOrderDecisionSDKType;
    isAmino(o: any): o is PurchaseOrderDecisionAmino;
    encode(message: PurchaseOrderDecision, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PurchaseOrderDecision;
    fromPartial(object: Partial<PurchaseOrderDecision>): PurchaseOrderDecision;
    fromAmino(object: PurchaseOrderDecisionAmino): PurchaseOrderDecision;
    toAmino(message: PurchaseOrderDecision): PurchaseOrderDecisionAmino;
    fromAminoMsg(object: PurchaseOrderDecisionAminoMsg): PurchaseOrderDecision;
    fromProtoMsg(message: PurchaseOrderDecisionProtoMsg): PurchaseOrderDecision;
    toProto(message: PurchaseOrderDecision): Uint8Array;
    toProtoMsg(message: PurchaseOrderDecision): PurchaseOrderDecisionProtoMsg;
};
export declare const EnterpriseUndPurchaseOrder: {
    typeUrl: string;
    is(o: any): o is EnterpriseUndPurchaseOrder;
    isSDK(o: any): o is EnterpriseUndPurchaseOrderSDKType;
    isAmino(o: any): o is EnterpriseUndPurchaseOrderAmino;
    encode(message: EnterpriseUndPurchaseOrder, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EnterpriseUndPurchaseOrder;
    fromPartial(object: Partial<EnterpriseUndPurchaseOrder>): EnterpriseUndPurchaseOrder;
    fromAmino(object: EnterpriseUndPurchaseOrderAmino): EnterpriseUndPurchaseOrder;
    toAmino(message: EnterpriseUndPurchaseOrder): EnterpriseUndPurchaseOrderAmino;
    fromAminoMsg(object: EnterpriseUndPurchaseOrderAminoMsg): EnterpriseUndPurchaseOrder;
    fromProtoMsg(message: EnterpriseUndPurchaseOrderProtoMsg): EnterpriseUndPurchaseOrder;
    toProto(message: EnterpriseUndPurchaseOrder): Uint8Array;
    toProtoMsg(message: EnterpriseUndPurchaseOrder): EnterpriseUndPurchaseOrderProtoMsg;
};
export declare const PurchaseOrders: {
    typeUrl: string;
    is(o: any): o is PurchaseOrders;
    isSDK(o: any): o is PurchaseOrdersSDKType;
    isAmino(o: any): o is PurchaseOrdersAmino;
    encode(message: PurchaseOrders, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PurchaseOrders;
    fromPartial(object: Partial<PurchaseOrders>): PurchaseOrders;
    fromAmino(object: PurchaseOrdersAmino): PurchaseOrders;
    toAmino(message: PurchaseOrders): PurchaseOrdersAmino;
    fromAminoMsg(object: PurchaseOrdersAminoMsg): PurchaseOrders;
    fromProtoMsg(message: PurchaseOrdersProtoMsg): PurchaseOrders;
    toProto(message: PurchaseOrders): Uint8Array;
    toProtoMsg(message: PurchaseOrders): PurchaseOrdersProtoMsg;
};
export declare const LockedUnd: {
    typeUrl: string;
    is(o: any): o is LockedUnd;
    isSDK(o: any): o is LockedUndSDKType;
    isAmino(o: any): o is LockedUndAmino;
    encode(message: LockedUnd, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LockedUnd;
    fromPartial(object: Partial<LockedUnd>): LockedUnd;
    fromAmino(object: LockedUndAmino): LockedUnd;
    toAmino(message: LockedUnd): LockedUndAmino;
    fromAminoMsg(object: LockedUndAminoMsg): LockedUnd;
    fromProtoMsg(message: LockedUndProtoMsg): LockedUnd;
    toProto(message: LockedUnd): Uint8Array;
    toProtoMsg(message: LockedUnd): LockedUndProtoMsg;
};
export declare const SpentEFUND: {
    typeUrl: string;
    is(o: any): o is SpentEFUND;
    isSDK(o: any): o is SpentEFUNDSDKType;
    isAmino(o: any): o is SpentEFUNDAmino;
    encode(message: SpentEFUND, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SpentEFUND;
    fromPartial(object: Partial<SpentEFUND>): SpentEFUND;
    fromAmino(object: SpentEFUNDAmino): SpentEFUND;
    toAmino(message: SpentEFUND): SpentEFUNDAmino;
    fromAminoMsg(object: SpentEFUNDAminoMsg): SpentEFUND;
    fromProtoMsg(message: SpentEFUNDProtoMsg): SpentEFUND;
    toProto(message: SpentEFUND): Uint8Array;
    toProtoMsg(message: SpentEFUND): SpentEFUNDProtoMsg;
};
export declare const EnterpriseUserAccount: {
    typeUrl: string;
    is(o: any): o is EnterpriseUserAccount;
    isSDK(o: any): o is EnterpriseUserAccountSDKType;
    isAmino(o: any): o is EnterpriseUserAccountAmino;
    encode(message: EnterpriseUserAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EnterpriseUserAccount;
    fromPartial(object: Partial<EnterpriseUserAccount>): EnterpriseUserAccount;
    fromAmino(object: EnterpriseUserAccountAmino): EnterpriseUserAccount;
    toAmino(message: EnterpriseUserAccount): EnterpriseUserAccountAmino;
    fromAminoMsg(object: EnterpriseUserAccountAminoMsg): EnterpriseUserAccount;
    fromProtoMsg(message: EnterpriseUserAccountProtoMsg): EnterpriseUserAccount;
    toProto(message: EnterpriseUserAccount): Uint8Array;
    toProtoMsg(message: EnterpriseUserAccount): EnterpriseUserAccountProtoMsg;
};
export declare const UndSupply: {
    typeUrl: string;
    is(o: any): o is UndSupply;
    isSDK(o: any): o is UndSupplySDKType;
    isAmino(o: any): o is UndSupplyAmino;
    encode(message: UndSupply, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UndSupply;
    fromPartial(object: Partial<UndSupply>): UndSupply;
    fromAmino(object: UndSupplyAmino): UndSupply;
    toAmino(message: UndSupply): UndSupplyAmino;
    fromAminoMsg(object: UndSupplyAminoMsg): UndSupply;
    fromProtoMsg(message: UndSupplyProtoMsg): UndSupply;
    toProto(message: UndSupply): Uint8Array;
    toProtoMsg(message: UndSupply): UndSupplyProtoMsg;
};
export declare const WhitelistAddresses: {
    typeUrl: string;
    is(o: any): o is WhitelistAddresses;
    isSDK(o: any): o is WhitelistAddressesSDKType;
    isAmino(o: any): o is WhitelistAddressesAmino;
    encode(message: WhitelistAddresses, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): WhitelistAddresses;
    fromPartial(object: Partial<WhitelistAddresses>): WhitelistAddresses;
    fromAmino(object: WhitelistAddressesAmino): WhitelistAddresses;
    toAmino(message: WhitelistAddresses): WhitelistAddressesAmino;
    fromAminoMsg(object: WhitelistAddressesAminoMsg): WhitelistAddresses;
    fromProtoMsg(message: WhitelistAddressesProtoMsg): WhitelistAddresses;
    toProto(message: WhitelistAddresses): Uint8Array;
    toProtoMsg(message: WhitelistAddresses): WhitelistAddressesProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    is(o: any): o is Params;
    isSDK(o: any): o is ParamsSDKType;
    isAmino(o: any): o is ParamsAmino;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
