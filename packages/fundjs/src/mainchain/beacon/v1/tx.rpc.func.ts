//@ts-nocheck
import { buildTx } from "../../../helper-func-types";
import { MsgRegisterBeacon, MsgRecordBeaconTimestamp, MsgPurchaseBeaconStateStorage, MsgUpdateParams } from "./tx";
/**
 * RegisterBeacon defines a method to register a new beacon
 * @name registerBeacon
 * @package mainchain.beacon.v1
 * @see proto service: mainchain.beacon.v1.RegisterBeacon
 */
export const registerBeacon = buildTx<MsgRegisterBeacon>({
  msg: MsgRegisterBeacon
});
/**
 * RecordBeaconTimestamp defines a method to record a timestamp for a
 * registered beacon
 * @name recordBeaconTimestamp
 * @package mainchain.beacon.v1
 * @see proto service: mainchain.beacon.v1.RecordBeaconTimestamp
 */
export const recordBeaconTimestamp = buildTx<MsgRecordBeaconTimestamp>({
  msg: MsgRecordBeaconTimestamp
});
/**
 * PurchaseBeaconStateStorage defines the method to purchase more state
 * storage
 * @name purchaseBeaconStateStorage
 * @package mainchain.beacon.v1
 * @see proto service: mainchain.beacon.v1.PurchaseBeaconStateStorage
 */
export const purchaseBeaconStateStorage = buildTx<MsgPurchaseBeaconStateStorage>({
  msg: MsgPurchaseBeaconStateStorage
});
/**
 * UpdateParams defines an operation for updating the x/beacon module
 * parameters.
 * Since: cosmos-sdk 0.47
 * @name updateParams
 * @package mainchain.beacon.v1
 * @see proto service: mainchain.beacon.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});