//@ts-nocheck
import { MsgRegisterBeacon, MsgRecordBeaconTimestamp, MsgPurchaseBeaconStateStorage, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/mainchain.beacon.v1.MsgRegisterBeacon": {
    aminoType: "beacon/MsgRegisterBeacon",
    toAmino: MsgRegisterBeacon.toAmino,
    fromAmino: MsgRegisterBeacon.fromAmino
  },
  "/mainchain.beacon.v1.MsgRecordBeaconTimestamp": {
    aminoType: "beacon/MsgRecordBeaconTimestamp",
    toAmino: MsgRecordBeaconTimestamp.toAmino,
    fromAmino: MsgRecordBeaconTimestamp.fromAmino
  },
  "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage": {
    aminoType: "beacon/MsgPurchaseBeaconStateStorage",
    toAmino: MsgPurchaseBeaconStateStorage.toAmino,
    fromAmino: MsgPurchaseBeaconStateStorage.fromAmino
  },
  "/mainchain.beacon.v1.MsgUpdateParams": {
    aminoType: "beacon/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};