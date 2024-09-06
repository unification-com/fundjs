import { Rpc } from "../../../helpers";
import { MsgRegisterBeacon, MsgRegisterBeaconResponse, MsgRecordBeaconTimestamp, MsgRecordBeaconTimestampResponse, MsgPurchaseBeaconStateStorage, MsgPurchaseBeaconStateStorageResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the beacon Msg service. */
export interface Msg {
    /** RegisterBeacon defines a method to register a new beacon */
    registerBeacon(request: MsgRegisterBeacon): Promise<MsgRegisterBeaconResponse>;
    /** RecordBeaconTimestamp defines a method to record a timestamp for a registered beacon */
    recordBeaconTimestamp(request: MsgRecordBeaconTimestamp): Promise<MsgRecordBeaconTimestampResponse>;
    /** PurchaseBeaconStateStorage defines the method to purchase more state storage */
    purchaseBeaconStateStorage(request: MsgPurchaseBeaconStateStorage): Promise<MsgPurchaseBeaconStateStorageResponse>;
    /**
     * UpdateParams defines an operation for updating the x/beacon module
     * parameters.
     * Since: cosmos-sdk 0.47
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    registerBeacon(request: MsgRegisterBeacon): Promise<MsgRegisterBeaconResponse>;
    recordBeaconTimestamp(request: MsgRecordBeaconTimestamp): Promise<MsgRecordBeaconTimestampResponse>;
    purchaseBeaconStateStorage(request: MsgPurchaseBeaconStateStorage): Promise<MsgPurchaseBeaconStateStorageResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
