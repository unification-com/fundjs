//@ts-nocheck
import { MsgRegisterBeacon, MsgRecordBeaconTimestamp, MsgPurchaseBeaconStateStorage, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/mainchain.beacon.v1.MsgRegisterBeacon": {
    aminoType: "beacon/RegisterBeacon",
    toAmino: MsgRegisterBeacon.toAmino,
    fromAmino: MsgRegisterBeacon.fromAmino
  },
  "/mainchain.beacon.v1.MsgRecordBeaconTimestamp": {
    aminoType: "beacon/RecordBeaconTimestamp",
    toAmino: MsgRecordBeaconTimestamp.toAmino,
    fromAmino: MsgRecordBeaconTimestamp.fromAmino
  },
  "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage": {
    aminoType: "beacon/PurchaseBeaconStateStorage",
    toAmino: MsgPurchaseBeaconStateStorage.toAmino,
    fromAmino: MsgPurchaseBeaconStateStorage.fromAmino
  },
  "/mainchain.beacon.v1.MsgUpdateParams": {
    aminoType: "mainchain/x/beacon/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};