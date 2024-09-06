import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryBeaconRequest, QueryBeaconResponseSDKType, QueryBeaconTimestampRequest, QueryBeaconTimestampResponseSDKType, QueryBeaconsFilteredRequest, QueryBeaconsFilteredResponseSDKType, QueryBeaconStorageRequest, QueryBeaconStorageResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    beacon(params: QueryBeaconRequest): Promise<QueryBeaconResponseSDKType>;
    beaconTimestamp(params: QueryBeaconTimestampRequest): Promise<QueryBeaconTimestampResponseSDKType>;
    beaconsFiltered(params: QueryBeaconsFilteredRequest): Promise<QueryBeaconsFilteredResponseSDKType>;
    beaconStorage(params: QueryBeaconStorageRequest): Promise<QueryBeaconStorageResponseSDKType>;
}
