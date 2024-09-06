import { Rpc } from "../../../helpers";
import { MsgUndPurchaseOrder, MsgUndPurchaseOrderResponse, MsgProcessUndPurchaseOrder, MsgProcessUndPurchaseOrderResponse, MsgWhitelistAddress, MsgWhitelistAddressResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the enterprise Msg service. */
export interface Msg {
    /** UndPurchaseOrder defines a method to create new purchase order. */
    undPurchaseOrder(request: MsgUndPurchaseOrder): Promise<MsgUndPurchaseOrderResponse>;
    /** ProcessUndPurchaseOrder defines a method to process a decision on a purchase order. */
    processUndPurchaseOrder(request: MsgProcessUndPurchaseOrder): Promise<MsgProcessUndPurchaseOrderResponse>;
    /** WhitelistAddress defines a method to execute a whitelist action. */
    whitelistAddress(request: MsgWhitelistAddress): Promise<MsgWhitelistAddressResponse>;
    /**
     * UpdateParams defines an operation for updating the x/enterprise module
     * parameters.
     * Since: cosmos-sdk 0.47
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    undPurchaseOrder(request: MsgUndPurchaseOrder): Promise<MsgUndPurchaseOrderResponse>;
    processUndPurchaseOrder(request: MsgProcessUndPurchaseOrder): Promise<MsgProcessUndPurchaseOrderResponse>;
    whitelistAddress(request: MsgWhitelistAddress): Promise<MsgWhitelistAddressResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
