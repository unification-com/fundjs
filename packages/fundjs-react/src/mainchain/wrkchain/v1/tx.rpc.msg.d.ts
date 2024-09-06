import { Rpc } from "../../../helpers";
import { MsgRegisterWrkChain, MsgRegisterWrkChainResponse, MsgRecordWrkChainBlock, MsgRecordWrkChainBlockResponse, MsgPurchaseWrkChainStateStorage, MsgPurchaseWrkChainStateStorageResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the wrkchain Msg service. */
export interface Msg {
    /** RegisterWrkChain defines a method to register a new wrkchain */
    registerWrkChain(request: MsgRegisterWrkChain): Promise<MsgRegisterWrkChainResponse>;
    /** RecordWrkChainBlock defines a method to record a block hash set for a registered wrkchain */
    recordWrkChainBlock(request: MsgRecordWrkChainBlock): Promise<MsgRecordWrkChainBlockResponse>;
    /** PurchaseWrkChainStateStorage defines the method to purchase more state storage */
    purchaseWrkChainStateStorage(request: MsgPurchaseWrkChainStateStorage): Promise<MsgPurchaseWrkChainStateStorageResponse>;
    /**
     * UpdateParams defines an operation for updating the x/wrkchain module
     * parameters.
     * Since: cosmos-sdk 0.47
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    registerWrkChain(request: MsgRegisterWrkChain): Promise<MsgRegisterWrkChainResponse>;
    recordWrkChainBlock(request: MsgRecordWrkChainBlock): Promise<MsgRecordWrkChainBlockResponse>;
    purchaseWrkChainStateStorage(request: MsgPurchaseWrkChainStateStorage): Promise<MsgPurchaseWrkChainStateStorageResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
