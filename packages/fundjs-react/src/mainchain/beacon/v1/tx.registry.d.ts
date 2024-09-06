import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterBeacon, MsgRecordBeaconTimestamp, MsgPurchaseBeaconStateStorage, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerBeacon(value: MsgRegisterBeacon): {
            typeUrl: string;
            value: Uint8Array;
        };
        recordBeaconTimestamp(value: MsgRecordBeaconTimestamp): {
            typeUrl: string;
            value: Uint8Array;
        };
        purchaseBeaconStateStorage(value: MsgPurchaseBeaconStateStorage): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerBeacon(value: MsgRegisterBeacon): {
            typeUrl: string;
            value: MsgRegisterBeacon;
        };
        recordBeaconTimestamp(value: MsgRecordBeaconTimestamp): {
            typeUrl: string;
            value: MsgRecordBeaconTimestamp;
        };
        purchaseBeaconStateStorage(value: MsgPurchaseBeaconStateStorage): {
            typeUrl: string;
            value: MsgPurchaseBeaconStateStorage;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        registerBeacon(value: MsgRegisterBeacon): {
            typeUrl: string;
            value: MsgRegisterBeacon;
        };
        recordBeaconTimestamp(value: MsgRecordBeaconTimestamp): {
            typeUrl: string;
            value: MsgRecordBeaconTimestamp;
        };
        purchaseBeaconStateStorage(value: MsgPurchaseBeaconStateStorage): {
            typeUrl: string;
            value: MsgPurchaseBeaconStateStorage;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
