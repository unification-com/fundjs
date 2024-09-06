import { MsgRegisterWrkChain, MsgRecordWrkChainBlock, MsgPurchaseWrkChainStateStorage, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/mainchain.wrkchain.v1.MsgRegisterWrkChain": {
        aminoType: string;
        toAmino: (message: MsgRegisterWrkChain) => import("./tx").MsgRegisterWrkChainAmino;
        fromAmino: (object: import("./tx").MsgRegisterWrkChainAmino) => MsgRegisterWrkChain;
    };
    "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock": {
        aminoType: string;
        toAmino: (message: MsgRecordWrkChainBlock) => import("./tx").MsgRecordWrkChainBlockAmino;
        fromAmino: (object: import("./tx").MsgRecordWrkChainBlockAmino) => MsgRecordWrkChainBlock;
    };
    "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage": {
        aminoType: string;
        toAmino: (message: MsgPurchaseWrkChainStateStorage) => import("./tx").MsgPurchaseWrkChainStateStorageAmino;
        fromAmino: (object: import("./tx").MsgPurchaseWrkChainStateStorageAmino) => MsgPurchaseWrkChainStateStorage;
    };
    "/mainchain.wrkchain.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
