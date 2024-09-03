//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { Coin, CoinAmino, CoinSDKType } from '../../../cosmos/base/v1beta1/coin';
import { isSet } from '../../../helpers';
import { GlobalDecoderRegistry } from '../../../registry';
/** PurchaseOrderStatus enumerates the valid statuses for a given purchase order. */
export enum PurchaseOrderStatus {
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
  UNRECOGNIZED = -1,
}
export const PurchaseOrderStatusSDKType = PurchaseOrderStatus;
export const PurchaseOrderStatusAmino = PurchaseOrderStatus;
export function purchaseOrderStatusFromJSON(object: any): PurchaseOrderStatus {
  switch (object) {
  case 0:
  case 'STATUS_NIL':
    return PurchaseOrderStatus.STATUS_NIL;
  case 1:
  case 'STATUS_RAISED':
    return PurchaseOrderStatus.STATUS_RAISED;
  case 2:
  case 'STATUS_ACCEPTED':
    return PurchaseOrderStatus.STATUS_ACCEPTED;
  case 3:
  case 'STATUS_REJECTED':
    return PurchaseOrderStatus.STATUS_REJECTED;
  case 4:
  case 'STATUS_COMPLETED':
    return PurchaseOrderStatus.STATUS_COMPLETED;
  case -1:
  case 'UNRECOGNIZED':
  default:
    return PurchaseOrderStatus.UNRECOGNIZED;
  }
}
export function purchaseOrderStatusToJSON(object: PurchaseOrderStatus): string {
  switch (object) {
  case PurchaseOrderStatus.STATUS_NIL:
    return 'STATUS_NIL';
  case PurchaseOrderStatus.STATUS_RAISED:
    return 'STATUS_RAISED';
  case PurchaseOrderStatus.STATUS_ACCEPTED:
    return 'STATUS_ACCEPTED';
  case PurchaseOrderStatus.STATUS_REJECTED:
    return 'STATUS_REJECTED';
  case PurchaseOrderStatus.STATUS_COMPLETED:
    return 'STATUS_COMPLETED';
  case PurchaseOrderStatus.UNRECOGNIZED:
  default:
    return 'UNRECOGNIZED';
  }
}
/** WhitelistAction enumerates the valid actions for whitelisting addresses. */
export enum WhitelistAction {
  /** WHITELIST_ACTION_NIL - WHITELIST_ACTION_NIL defines a no-op action. */
  WHITELIST_ACTION_NIL = 0,
  /** WHITELIST_ACTION_ADD - WHITELIST_ACTION_ADD defines an add action. */
  WHITELIST_ACTION_ADD = 1,
  /** WHITELIST_ACTION_REMOVE - WHITELIST_ACTION_REMOVE defines a remove action. */
  WHITELIST_ACTION_REMOVE = 2,
  UNRECOGNIZED = -1,
}
export const WhitelistActionSDKType = WhitelistAction;
export const WhitelistActionAmino = WhitelistAction;
export function whitelistActionFromJSON(object: any): WhitelistAction {
  switch (object) {
  case 0:
  case 'WHITELIST_ACTION_NIL':
    return WhitelistAction.WHITELIST_ACTION_NIL;
  case 1:
  case 'WHITELIST_ACTION_ADD':
    return WhitelistAction.WHITELIST_ACTION_ADD;
  case 2:
  case 'WHITELIST_ACTION_REMOVE':
    return WhitelistAction.WHITELIST_ACTION_REMOVE;
  case -1:
  case 'UNRECOGNIZED':
  default:
    return WhitelistAction.UNRECOGNIZED;
  }
}
export function whitelistActionToJSON(object: WhitelistAction): string {
  switch (object) {
  case WhitelistAction.WHITELIST_ACTION_NIL:
    return 'WHITELIST_ACTION_NIL';
  case WhitelistAction.WHITELIST_ACTION_ADD:
    return 'WHITELIST_ACTION_ADD';
  case WhitelistAction.WHITELIST_ACTION_REMOVE:
    return 'WHITELIST_ACTION_REMOVE';
  case WhitelistAction.UNRECOGNIZED:
  default:
    return 'UNRECOGNIZED';
  }
}
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
  typeUrl: '/mainchain.enterprise.v1.PurchaseOrderDecision';
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
  type: '/mainchain.enterprise.v1.PurchaseOrderDecision';
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
  typeUrl: '/mainchain.enterprise.v1.EnterpriseUndPurchaseOrder';
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
  type: '/mainchain.enterprise.v1.EnterpriseUndPurchaseOrder';
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
  typeUrl: '/mainchain.enterprise.v1.PurchaseOrders';
  value: Uint8Array;
}
/** PurchaseOrders defines a list of purchase orders */
export interface PurchaseOrdersAmino {
  purchase_orders?: EnterpriseUndPurchaseOrderAmino[];
}
export interface PurchaseOrdersAminoMsg {
  type: '/mainchain.enterprise.v1.PurchaseOrders';
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
  typeUrl: '/mainchain.enterprise.v1.LockedUnd';
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
  type: '/mainchain.enterprise.v1.LockedUnd';
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
  typeUrl: '/mainchain.enterprise.v1.SpentEFUND';
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
  type: '/mainchain.enterprise.v1.SpentEFUND';
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
  typeUrl: '/mainchain.enterprise.v1.EnterpriseUserAccount';
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
  type: '/mainchain.enterprise.v1.EnterpriseUserAccount';
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
  typeUrl: '/mainchain.enterprise.v1.UndSupply';
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
  type: '/mainchain.enterprise.v1.UndSupply';
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
  typeUrl: '/mainchain.enterprise.v1.WhitelistAddresses';
  value: Uint8Array;
}
/** WhitelistAddresses defines a list of whitelisted addresses authorised to raise enterprise purchase orders */
export interface WhitelistAddressesAmino {
  addresses?: string[];
}
export interface WhitelistAddressesAminoMsg {
  type: '/mainchain.enterprise.v1.WhitelistAddresses';
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
  typeUrl: '/mainchain.enterprise.v1.Params';
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
  type: '/mainchain.enterprise.v1.Params';
  value: ParamsAmino;
}
/** Params defines the parameters for the enterprise module. */
export interface ParamsSDKType {
  ent_signers: string;
  denom: string;
  min_accepts: bigint;
  decision_time_limit: bigint;
}
function createBasePurchaseOrderDecision(): PurchaseOrderDecision {
  return {
    signer: '',
    decision: 0,
    decisionTime: BigInt(0)
  };
}
export const PurchaseOrderDecision = {
  typeUrl: '/mainchain.enterprise.v1.PurchaseOrderDecision',
  is(o: any): o is PurchaseOrderDecision {
    return o && (o.$typeUrl === PurchaseOrderDecision.typeUrl || typeof o.signer === 'string' && isSet(o.decision) && typeof o.decisionTime === 'bigint');
  },
  isSDK(o: any): o is PurchaseOrderDecisionSDKType {
    return o && (o.$typeUrl === PurchaseOrderDecision.typeUrl || typeof o.signer === 'string' && isSet(o.decision) && typeof o.decision_time === 'bigint');
  },
  isAmino(o: any): o is PurchaseOrderDecisionAmino {
    return o && (o.$typeUrl === PurchaseOrderDecision.typeUrl || typeof o.signer === 'string' && isSet(o.decision) && typeof o.decision_time === 'bigint');
  },
  encode(message: PurchaseOrderDecision, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== '') {
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
  decode(input: BinaryReader | Uint8Array, length?: number): PurchaseOrderDecision {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePurchaseOrderDecision();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.signer = reader.string();
        break;
      case 2:
        message.decision = reader.int32() as any;
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
  fromPartial(object: Partial<PurchaseOrderDecision>): PurchaseOrderDecision {
    const message = createBasePurchaseOrderDecision();
    message.signer = object.signer ?? '';
    message.decision = object.decision ?? 0;
    message.decisionTime = object.decisionTime !== undefined && object.decisionTime !== null ? BigInt(object.decisionTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PurchaseOrderDecisionAmino): PurchaseOrderDecision {
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
  toAmino(message: PurchaseOrderDecision): PurchaseOrderDecisionAmino {
    const obj: any = {};
    obj.signer = message.signer === '' ? undefined : message.signer;
    obj.decision = message.decision === 0 ? undefined : message.decision;
    obj.decision_time = message.decisionTime !== BigInt(0) ? message.decisionTime.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PurchaseOrderDecisionAminoMsg): PurchaseOrderDecision {
    return PurchaseOrderDecision.fromAmino(object.value);
  },
  fromProtoMsg(message: PurchaseOrderDecisionProtoMsg): PurchaseOrderDecision {
    return PurchaseOrderDecision.decode(message.value);
  },
  toProto(message: PurchaseOrderDecision): Uint8Array {
    return PurchaseOrderDecision.encode(message).finish();
  },
  toProtoMsg(message: PurchaseOrderDecision): PurchaseOrderDecisionProtoMsg {
    return {
      typeUrl: '/mainchain.enterprise.v1.PurchaseOrderDecision',
      value: PurchaseOrderDecision.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PurchaseOrderDecision.typeUrl, PurchaseOrderDecision);
function createBaseEnterpriseUndPurchaseOrder(): EnterpriseUndPurchaseOrder {
  return {
    id: BigInt(0),
    purchaser: '',
    amount: Coin.fromPartial({}),
    status: 0,
    raiseTime: BigInt(0),
    completionTime: BigInt(0),
    decisions: []
  };
}
export const EnterpriseUndPurchaseOrder = {
  typeUrl: '/mainchain.enterprise.v1.EnterpriseUndPurchaseOrder',
  is(o: any): o is EnterpriseUndPurchaseOrder {
    return o && (o.$typeUrl === EnterpriseUndPurchaseOrder.typeUrl || typeof o.id === 'bigint' && typeof o.purchaser === 'string' && Coin.is(o.amount) && isSet(o.status) && typeof o.raiseTime === 'bigint' && typeof o.completionTime === 'bigint' && Array.isArray(o.decisions) && (!o.decisions.length || PurchaseOrderDecision.is(o.decisions[0])));
  },
  isSDK(o: any): o is EnterpriseUndPurchaseOrderSDKType {
    return o && (o.$typeUrl === EnterpriseUndPurchaseOrder.typeUrl || typeof o.id === 'bigint' && typeof o.purchaser === 'string' && Coin.isSDK(o.amount) && isSet(o.status) && typeof o.raise_time === 'bigint' && typeof o.completion_time === 'bigint' && Array.isArray(o.decisions) && (!o.decisions.length || PurchaseOrderDecision.isSDK(o.decisions[0])));
  },
  isAmino(o: any): o is EnterpriseUndPurchaseOrderAmino {
    return o && (o.$typeUrl === EnterpriseUndPurchaseOrder.typeUrl || typeof o.id === 'bigint' && typeof o.purchaser === 'string' && Coin.isAmino(o.amount) && isSet(o.status) && typeof o.raise_time === 'bigint' && typeof o.completion_time === 'bigint' && Array.isArray(o.decisions) && (!o.decisions.length || PurchaseOrderDecision.isAmino(o.decisions[0])));
  },
  encode(message: EnterpriseUndPurchaseOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.purchaser !== '') {
      writer.uint32(18).string(message.purchaser);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
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
      PurchaseOrderDecision.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnterpriseUndPurchaseOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        message.amount = Coin.decode(reader, reader.uint32());
        break;
      case 4:
        message.status = reader.int32() as any;
        break;
      case 5:
        message.raiseTime = reader.uint64();
        break;
      case 6:
        message.completionTime = reader.uint64();
        break;
      case 7:
        message.decisions.push(PurchaseOrderDecision.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EnterpriseUndPurchaseOrder>): EnterpriseUndPurchaseOrder {
    const message = createBaseEnterpriseUndPurchaseOrder();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.purchaser = object.purchaser ?? '';
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.status = object.status ?? 0;
    message.raiseTime = object.raiseTime !== undefined && object.raiseTime !== null ? BigInt(object.raiseTime.toString()) : BigInt(0);
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? BigInt(object.completionTime.toString()) : BigInt(0);
    message.decisions = object.decisions?.map(e => PurchaseOrderDecision.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EnterpriseUndPurchaseOrderAmino): EnterpriseUndPurchaseOrder {
    const message = createBaseEnterpriseUndPurchaseOrder();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.purchaser !== undefined && object.purchaser !== null) {
      message.purchaser = object.purchaser;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
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
    message.decisions = object.decisions?.map(e => PurchaseOrderDecision.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EnterpriseUndPurchaseOrder): EnterpriseUndPurchaseOrderAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.purchaser = message.purchaser === '' ? undefined : message.purchaser;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.raise_time = message.raiseTime !== BigInt(0) ? message.raiseTime.toString() : undefined;
    obj.completion_time = message.completionTime !== BigInt(0) ? message.completionTime.toString() : undefined;
    if (message.decisions) {
      obj.decisions = message.decisions.map(e => e ? PurchaseOrderDecision.toAmino(e) : undefined);
    } else {
      obj.decisions = message.decisions;
    }
    return obj;
  },
  fromAminoMsg(object: EnterpriseUndPurchaseOrderAminoMsg): EnterpriseUndPurchaseOrder {
    return EnterpriseUndPurchaseOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EnterpriseUndPurchaseOrderProtoMsg): EnterpriseUndPurchaseOrder {
    return EnterpriseUndPurchaseOrder.decode(message.value);
  },
  toProto(message: EnterpriseUndPurchaseOrder): Uint8Array {
    return EnterpriseUndPurchaseOrder.encode(message).finish();
  },
  toProtoMsg(message: EnterpriseUndPurchaseOrder): EnterpriseUndPurchaseOrderProtoMsg {
    return {
      typeUrl: '/mainchain.enterprise.v1.EnterpriseUndPurchaseOrder',
      value: EnterpriseUndPurchaseOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EnterpriseUndPurchaseOrder.typeUrl, EnterpriseUndPurchaseOrder);
function createBasePurchaseOrders(): PurchaseOrders {
  return {
    purchaseOrders: []
  };
}
export const PurchaseOrders = {
  typeUrl: '/mainchain.enterprise.v1.PurchaseOrders',
  is(o: any): o is PurchaseOrders {
    return o && (o.$typeUrl === PurchaseOrders.typeUrl || Array.isArray(o.purchaseOrders) && (!o.purchaseOrders.length || EnterpriseUndPurchaseOrder.is(o.purchaseOrders[0])));
  },
  isSDK(o: any): o is PurchaseOrdersSDKType {
    return o && (o.$typeUrl === PurchaseOrders.typeUrl || Array.isArray(o.purchase_orders) && (!o.purchase_orders.length || EnterpriseUndPurchaseOrder.isSDK(o.purchase_orders[0])));
  },
  isAmino(o: any): o is PurchaseOrdersAmino {
    return o && (o.$typeUrl === PurchaseOrders.typeUrl || Array.isArray(o.purchase_orders) && (!o.purchase_orders.length || EnterpriseUndPurchaseOrder.isAmino(o.purchase_orders[0])));
  },
  encode(message: PurchaseOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.purchaseOrders) {
      EnterpriseUndPurchaseOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PurchaseOrders {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePurchaseOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.purchaseOrders.push(EnterpriseUndPurchaseOrder.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PurchaseOrders>): PurchaseOrders {
    const message = createBasePurchaseOrders();
    message.purchaseOrders = object.purchaseOrders?.map(e => EnterpriseUndPurchaseOrder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PurchaseOrdersAmino): PurchaseOrders {
    const message = createBasePurchaseOrders();
    message.purchaseOrders = object.purchase_orders?.map(e => EnterpriseUndPurchaseOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PurchaseOrders): PurchaseOrdersAmino {
    const obj: any = {};
    if (message.purchaseOrders) {
      obj.purchase_orders = message.purchaseOrders.map(e => e ? EnterpriseUndPurchaseOrder.toAmino(e) : undefined);
    } else {
      obj.purchase_orders = message.purchaseOrders;
    }
    return obj;
  },
  fromAminoMsg(object: PurchaseOrdersAminoMsg): PurchaseOrders {
    return PurchaseOrders.fromAmino(object.value);
  },
  fromProtoMsg(message: PurchaseOrdersProtoMsg): PurchaseOrders {
    return PurchaseOrders.decode(message.value);
  },
  toProto(message: PurchaseOrders): Uint8Array {
    return PurchaseOrders.encode(message).finish();
  },
  toProtoMsg(message: PurchaseOrders): PurchaseOrdersProtoMsg {
    return {
      typeUrl: '/mainchain.enterprise.v1.PurchaseOrders',
      value: PurchaseOrders.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PurchaseOrders.typeUrl, PurchaseOrders);
function createBaseLockedUnd(): LockedUnd {
  return {
    owner: '',
    amount: Coin.fromPartial({})
  };
}
export const LockedUnd = {
  typeUrl: '/mainchain.enterprise.v1.LockedUnd',
  is(o: any): o is LockedUnd {
    return o && (o.$typeUrl === LockedUnd.typeUrl || typeof o.owner === 'string' && Coin.is(o.amount));
  },
  isSDK(o: any): o is LockedUndSDKType {
    return o && (o.$typeUrl === LockedUnd.typeUrl || typeof o.owner === 'string' && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is LockedUndAmino {
    return o && (o.$typeUrl === LockedUnd.typeUrl || typeof o.owner === 'string' && Coin.isAmino(o.amount));
  },
  encode(message: LockedUnd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LockedUnd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedUnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.owner = reader.string();
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
  fromPartial(object: Partial<LockedUnd>): LockedUnd {
    const message = createBaseLockedUnd();
    message.owner = object.owner ?? '';
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: LockedUndAmino): LockedUnd {
    const message = createBaseLockedUnd();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: LockedUnd): LockedUndAmino {
    const obj: any = {};
    obj.owner = message.owner === '' ? undefined : message.owner;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: LockedUndAminoMsg): LockedUnd {
    return LockedUnd.fromAmino(object.value);
  },
  fromProtoMsg(message: LockedUndProtoMsg): LockedUnd {
    return LockedUnd.decode(message.value);
  },
  toProto(message: LockedUnd): Uint8Array {
    return LockedUnd.encode(message).finish();
  },
  toProtoMsg(message: LockedUnd): LockedUndProtoMsg {
    return {
      typeUrl: '/mainchain.enterprise.v1.LockedUnd',
      value: LockedUnd.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LockedUnd.typeUrl, LockedUnd);
function createBaseSpentEFUND(): SpentEFUND {
  return {
    owner: '',
    amount: Coin.fromPartial({})
  };
}
export const SpentEFUND = {
  typeUrl: '/mainchain.enterprise.v1.SpentEFUND',
  is(o: any): o is SpentEFUND {
    return o && (o.$typeUrl === SpentEFUND.typeUrl || typeof o.owner === 'string' && Coin.is(o.amount));
  },
  isSDK(o: any): o is SpentEFUNDSDKType {
    return o && (o.$typeUrl === SpentEFUND.typeUrl || typeof o.owner === 'string' && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is SpentEFUNDAmino {
    return o && (o.$typeUrl === SpentEFUND.typeUrl || typeof o.owner === 'string' && Coin.isAmino(o.amount));
  },
  encode(message: SpentEFUND, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpentEFUND {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpentEFUND();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.owner = reader.string();
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
  fromPartial(object: Partial<SpentEFUND>): SpentEFUND {
    const message = createBaseSpentEFUND();
    message.owner = object.owner ?? '';
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: SpentEFUNDAmino): SpentEFUND {
    const message = createBaseSpentEFUND();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: SpentEFUND): SpentEFUNDAmino {
    const obj: any = {};
    obj.owner = message.owner === '' ? undefined : message.owner;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: SpentEFUNDAminoMsg): SpentEFUND {
    return SpentEFUND.fromAmino(object.value);
  },
  fromProtoMsg(message: SpentEFUNDProtoMsg): SpentEFUND {
    return SpentEFUND.decode(message.value);
  },
  toProto(message: SpentEFUND): Uint8Array {
    return SpentEFUND.encode(message).finish();
  },
  toProtoMsg(message: SpentEFUND): SpentEFUNDProtoMsg {
    return {
      typeUrl: '/mainchain.enterprise.v1.SpentEFUND',
      value: SpentEFUND.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SpentEFUND.typeUrl, SpentEFUND);
function createBaseEnterpriseUserAccount(): EnterpriseUserAccount {
  return {
    owner: '',
    lockedEfund: Coin.fromPartial({}),
    generalSupply: Coin.fromPartial({}),
    spentEfund: Coin.fromPartial({}),
    spendable: Coin.fromPartial({})
  };
}
export const EnterpriseUserAccount = {
  typeUrl: '/mainchain.enterprise.v1.EnterpriseUserAccount',
  is(o: any): o is EnterpriseUserAccount {
    return o && (o.$typeUrl === EnterpriseUserAccount.typeUrl || typeof o.owner === 'string' && Coin.is(o.lockedEfund) && Coin.is(o.generalSupply) && Coin.is(o.spentEfund) && Coin.is(o.spendable));
  },
  isSDK(o: any): o is EnterpriseUserAccountSDKType {
    return o && (o.$typeUrl === EnterpriseUserAccount.typeUrl || typeof o.owner === 'string' && Coin.isSDK(o.locked_efund) && Coin.isSDK(o.general_supply) && Coin.isSDK(o.spent_efund) && Coin.isSDK(o.spendable));
  },
  isAmino(o: any): o is EnterpriseUserAccountAmino {
    return o && (o.$typeUrl === EnterpriseUserAccount.typeUrl || typeof o.owner === 'string' && Coin.isAmino(o.locked_efund) && Coin.isAmino(o.general_supply) && Coin.isAmino(o.spent_efund) && Coin.isAmino(o.spendable));
  },
  encode(message: EnterpriseUserAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner);
    }
    if (message.lockedEfund !== undefined) {
      Coin.encode(message.lockedEfund, writer.uint32(18).fork()).ldelim();
    }
    if (message.generalSupply !== undefined) {
      Coin.encode(message.generalSupply, writer.uint32(26).fork()).ldelim();
    }
    if (message.spentEfund !== undefined) {
      Coin.encode(message.spentEfund, writer.uint32(34).fork()).ldelim();
    }
    if (message.spendable !== undefined) {
      Coin.encode(message.spendable, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnterpriseUserAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnterpriseUserAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.owner = reader.string();
        break;
      case 2:
        message.lockedEfund = Coin.decode(reader, reader.uint32());
        break;
      case 3:
        message.generalSupply = Coin.decode(reader, reader.uint32());
        break;
      case 4:
        message.spentEfund = Coin.decode(reader, reader.uint32());
        break;
      case 5:
        message.spendable = Coin.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EnterpriseUserAccount>): EnterpriseUserAccount {
    const message = createBaseEnterpriseUserAccount();
    message.owner = object.owner ?? '';
    message.lockedEfund = object.lockedEfund !== undefined && object.lockedEfund !== null ? Coin.fromPartial(object.lockedEfund) : undefined;
    message.generalSupply = object.generalSupply !== undefined && object.generalSupply !== null ? Coin.fromPartial(object.generalSupply) : undefined;
    message.spentEfund = object.spentEfund !== undefined && object.spentEfund !== null ? Coin.fromPartial(object.spentEfund) : undefined;
    message.spendable = object.spendable !== undefined && object.spendable !== null ? Coin.fromPartial(object.spendable) : undefined;
    return message;
  },
  fromAmino(object: EnterpriseUserAccountAmino): EnterpriseUserAccount {
    const message = createBaseEnterpriseUserAccount();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.locked_efund !== undefined && object.locked_efund !== null) {
      message.lockedEfund = Coin.fromAmino(object.locked_efund);
    }
    if (object.general_supply !== undefined && object.general_supply !== null) {
      message.generalSupply = Coin.fromAmino(object.general_supply);
    }
    if (object.spent_efund !== undefined && object.spent_efund !== null) {
      message.spentEfund = Coin.fromAmino(object.spent_efund);
    }
    if (object.spendable !== undefined && object.spendable !== null) {
      message.spendable = Coin.fromAmino(object.spendable);
    }
    return message;
  },
  toAmino(message: EnterpriseUserAccount): EnterpriseUserAccountAmino {
    const obj: any = {};
    obj.owner = message.owner === '' ? undefined : message.owner;
    obj.locked_efund = message.lockedEfund ? Coin.toAmino(message.lockedEfund) : undefined;
    obj.general_supply = message.generalSupply ? Coin.toAmino(message.generalSupply) : undefined;
    obj.spent_efund = message.spentEfund ? Coin.toAmino(message.spentEfund) : undefined;
    obj.spendable = message.spendable ? Coin.toAmino(message.spendable) : undefined;
    return obj;
  },
  fromAminoMsg(object: EnterpriseUserAccountAminoMsg): EnterpriseUserAccount {
    return EnterpriseUserAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: EnterpriseUserAccountProtoMsg): EnterpriseUserAccount {
    return EnterpriseUserAccount.decode(message.value);
  },
  toProto(message: EnterpriseUserAccount): Uint8Array {
    return EnterpriseUserAccount.encode(message).finish();
  },
  toProtoMsg(message: EnterpriseUserAccount): EnterpriseUserAccountProtoMsg {
    return {
      typeUrl: '/mainchain.enterprise.v1.EnterpriseUserAccount',
      value: EnterpriseUserAccount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EnterpriseUserAccount.typeUrl, EnterpriseUserAccount);
function createBaseUndSupply(): UndSupply {
  return {
    denom: '',
    amount: BigInt(0),
    locked: BigInt(0),
    total: BigInt(0)
  };
}
export const UndSupply = {
  typeUrl: '/mainchain.enterprise.v1.UndSupply',
  is(o: any): o is UndSupply {
    return o && (o.$typeUrl === UndSupply.typeUrl || typeof o.denom === 'string' && typeof o.amount === 'bigint' && typeof o.locked === 'bigint' && typeof o.total === 'bigint');
  },
  isSDK(o: any): o is UndSupplySDKType {
    return o && (o.$typeUrl === UndSupply.typeUrl || typeof o.denom === 'string' && typeof o.amount === 'bigint' && typeof o.locked === 'bigint' && typeof o.total === 'bigint');
  },
  isAmino(o: any): o is UndSupplyAmino {
    return o && (o.$typeUrl === UndSupply.typeUrl || typeof o.denom === 'string' && typeof o.amount === 'bigint' && typeof o.locked === 'bigint' && typeof o.total === 'bigint');
  },
  encode(message: UndSupply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== '') {
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
  decode(input: BinaryReader | Uint8Array, length?: number): UndSupply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<UndSupply>): UndSupply {
    const message = createBaseUndSupply();
    message.denom = object.denom ?? '';
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.locked = object.locked !== undefined && object.locked !== null ? BigInt(object.locked.toString()) : BigInt(0);
    message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UndSupplyAmino): UndSupply {
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
  toAmino(message: UndSupply): UndSupplyAmino {
    const obj: any = {};
    obj.denom = message.denom === '' ? undefined : message.denom;
    obj.amount = message.amount !== BigInt(0) ? message.amount.toString() : undefined;
    obj.locked = message.locked !== BigInt(0) ? message.locked.toString() : undefined;
    obj.total = message.total !== BigInt(0) ? message.total.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UndSupplyAminoMsg): UndSupply {
    return UndSupply.fromAmino(object.value);
  },
  fromProtoMsg(message: UndSupplyProtoMsg): UndSupply {
    return UndSupply.decode(message.value);
  },
  toProto(message: UndSupply): Uint8Array {
    return UndSupply.encode(message).finish();
  },
  toProtoMsg(message: UndSupply): UndSupplyProtoMsg {
    return {
      typeUrl: '/mainchain.enterprise.v1.UndSupply',
      value: UndSupply.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UndSupply.typeUrl, UndSupply);
function createBaseWhitelistAddresses(): WhitelistAddresses {
  return {
    addresses: []
  };
}
export const WhitelistAddresses = {
  typeUrl: '/mainchain.enterprise.v1.WhitelistAddresses',
  is(o: any): o is WhitelistAddresses {
    return o && (o.$typeUrl === WhitelistAddresses.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === 'string'));
  },
  isSDK(o: any): o is WhitelistAddressesSDKType {
    return o && (o.$typeUrl === WhitelistAddresses.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === 'string'));
  },
  isAmino(o: any): o is WhitelistAddressesAmino {
    return o && (o.$typeUrl === WhitelistAddresses.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === 'string'));
  },
  encode(message: WhitelistAddresses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WhitelistAddresses {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<WhitelistAddresses>): WhitelistAddresses {
    const message = createBaseWhitelistAddresses();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: WhitelistAddressesAmino): WhitelistAddresses {
    const message = createBaseWhitelistAddresses();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: WhitelistAddresses): WhitelistAddressesAmino {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object: WhitelistAddressesAminoMsg): WhitelistAddresses {
    return WhitelistAddresses.fromAmino(object.value);
  },
  fromProtoMsg(message: WhitelistAddressesProtoMsg): WhitelistAddresses {
    return WhitelistAddresses.decode(message.value);
  },
  toProto(message: WhitelistAddresses): Uint8Array {
    return WhitelistAddresses.encode(message).finish();
  },
  toProtoMsg(message: WhitelistAddresses): WhitelistAddressesProtoMsg {
    return {
      typeUrl: '/mainchain.enterprise.v1.WhitelistAddresses',
      value: WhitelistAddresses.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(WhitelistAddresses.typeUrl, WhitelistAddresses);
function createBaseParams(): Params {
  return {
    entSigners: '',
    denom: '',
    minAccepts: BigInt(0),
    decisionTimeLimit: BigInt(0)
  };
}
export const Params = {
  typeUrl: '/mainchain.enterprise.v1.Params',
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.entSigners === 'string' && typeof o.denom === 'string' && typeof o.minAccepts === 'bigint' && typeof o.decisionTimeLimit === 'bigint');
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.ent_signers === 'string' && typeof o.denom === 'string' && typeof o.min_accepts === 'bigint' && typeof o.decision_time_limit === 'bigint');
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.ent_signers === 'string' && typeof o.denom === 'string' && typeof o.min_accepts === 'bigint' && typeof o.decision_time_limit === 'bigint');
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.entSigners !== '') {
      writer.uint32(10).string(message.entSigners);
    }
    if (message.denom !== '') {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.entSigners = object.entSigners ?? '';
    message.denom = object.denom ?? '';
    message.minAccepts = object.minAccepts !== undefined && object.minAccepts !== null ? BigInt(object.minAccepts.toString()) : BigInt(0);
    message.decisionTimeLimit = object.decisionTimeLimit !== undefined && object.decisionTimeLimit !== null ? BigInt(object.decisionTimeLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
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
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.ent_signers = message.entSigners === '' ? undefined : message.entSigners;
    obj.denom = message.denom === '' ? undefined : message.denom;
    obj.min_accepts = message.minAccepts !== BigInt(0) ? message.minAccepts.toString() : undefined;
    obj.decision_time_limit = message.decisionTimeLimit !== BigInt(0) ? message.decisionTimeLimit.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: '/mainchain.enterprise.v1.Params',
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);