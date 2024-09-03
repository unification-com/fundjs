//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterBeacon, MsgRecordBeaconTimestamp, MsgPurchaseBeaconStateStorage, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/mainchain.beacon.v1.MsgRegisterBeacon", MsgRegisterBeacon], ["/mainchain.beacon.v1.MsgRecordBeaconTimestamp", MsgRecordBeaconTimestamp], ["/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage", MsgPurchaseBeaconStateStorage], ["/mainchain.beacon.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerBeacon(value: MsgRegisterBeacon) {
      return {
        typeUrl: "/mainchain.beacon.v1.MsgRegisterBeacon",
        value: MsgRegisterBeacon.encode(value).finish()
      };
    },
    recordBeaconTimestamp(value: MsgRecordBeaconTimestamp) {
      return {
        typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestamp",
        value: MsgRecordBeaconTimestamp.encode(value).finish()
      };
    },
    purchaseBeaconStateStorage(value: MsgPurchaseBeaconStateStorage) {
      return {
        typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage",
        value: MsgPurchaseBeaconStateStorage.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/mainchain.beacon.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerBeacon(value: MsgRegisterBeacon) {
      return {
        typeUrl: "/mainchain.beacon.v1.MsgRegisterBeacon",
        value
      };
    },
    recordBeaconTimestamp(value: MsgRecordBeaconTimestamp) {
      return {
        typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestamp",
        value
      };
    },
    purchaseBeaconStateStorage(value: MsgPurchaseBeaconStateStorage) {
      return {
        typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/mainchain.beacon.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    registerBeacon(value: MsgRegisterBeacon) {
      return {
        typeUrl: "/mainchain.beacon.v1.MsgRegisterBeacon",
        value: MsgRegisterBeacon.fromPartial(value)
      };
    },
    recordBeaconTimestamp(value: MsgRecordBeaconTimestamp) {
      return {
        typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestamp",
        value: MsgRecordBeaconTimestamp.fromPartial(value)
      };
    },
    purchaseBeaconStateStorage(value: MsgPurchaseBeaconStateStorage) {
      return {
        typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage",
        value: MsgPurchaseBeaconStateStorage.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/mainchain.beacon.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};