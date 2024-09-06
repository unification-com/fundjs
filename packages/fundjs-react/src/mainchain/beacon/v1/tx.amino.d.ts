import { MsgRegisterBeacon, MsgRecordBeaconTimestamp, MsgPurchaseBeaconStateStorage, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/mainchain.beacon.v1.MsgRegisterBeacon": {
        aminoType: string;
        toAmino: (message: MsgRegisterBeacon) => import("./tx").MsgRegisterBeaconAmino;
        fromAmino: (object: import("./tx").MsgRegisterBeaconAmino) => MsgRegisterBeacon;
    };
    "/mainchain.beacon.v1.MsgRecordBeaconTimestamp": {
        aminoType: string;
        toAmino: (message: MsgRecordBeaconTimestamp) => import("./tx").MsgRecordBeaconTimestampAmino;
        fromAmino: (object: import("./tx").MsgRecordBeaconTimestampAmino) => MsgRecordBeaconTimestamp;
    };
    "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage": {
        aminoType: string;
        toAmino: (message: MsgPurchaseBeaconStateStorage) => import("./tx").MsgPurchaseBeaconStateStorageAmino;
        fromAmino: (object: import("./tx").MsgPurchaseBeaconStateStorageAmino) => MsgPurchaseBeaconStateStorage;
    };
    "/mainchain.beacon.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
