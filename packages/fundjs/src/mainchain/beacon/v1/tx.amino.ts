//@ts-nocheck
import { MsgPurchaseBeaconStateStorage, MsgRecordBeaconTimestamp, MsgRegisterBeacon, MsgUpdateParams } from './tx';
export const AminoConverter = {
  '/mainchain.beacon.v1.MsgRegisterBeacon': {
    aminoType: '/mainchain.beacon.v1.MsgRegisterBeacon',
    toAmino: MsgRegisterBeacon.toAmino,
    fromAmino: MsgRegisterBeacon.fromAmino
  },
  '/mainchain.beacon.v1.MsgRecordBeaconTimestamp': {
    aminoType: '/mainchain.beacon.v1.MsgRecordBeaconTimestamp',
    toAmino: MsgRecordBeaconTimestamp.toAmino,
    fromAmino: MsgRecordBeaconTimestamp.fromAmino
  },
  '/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage': {
    aminoType: '/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage',
    toAmino: MsgPurchaseBeaconStateStorage.toAmino,
    fromAmino: MsgPurchaseBeaconStateStorage.fromAmino
  },
  '/mainchain.beacon.v1.MsgUpdateParams': {
    aminoType: 'mainchain/x/beacon/MsgUpdateParams',
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};