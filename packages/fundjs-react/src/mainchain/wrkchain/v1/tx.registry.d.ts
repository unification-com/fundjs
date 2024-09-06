import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterWrkChain, MsgRecordWrkChainBlock, MsgPurchaseWrkChainStateStorage, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerWrkChain(value: MsgRegisterWrkChain): {
            typeUrl: string;
            value: Uint8Array;
        };
        recordWrkChainBlock(value: MsgRecordWrkChainBlock): {
            typeUrl: string;
            value: Uint8Array;
        };
        purchaseWrkChainStateStorage(value: MsgPurchaseWrkChainStateStorage): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerWrkChain(value: MsgRegisterWrkChain): {
            typeUrl: string;
            value: MsgRegisterWrkChain;
        };
        recordWrkChainBlock(value: MsgRecordWrkChainBlock): {
            typeUrl: string;
            value: MsgRecordWrkChainBlock;
        };
        purchaseWrkChainStateStorage(value: MsgPurchaseWrkChainStateStorage): {
            typeUrl: string;
            value: MsgPurchaseWrkChainStateStorage;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        registerWrkChain(value: MsgRegisterWrkChain): {
            typeUrl: string;
            value: MsgRegisterWrkChain;
        };
        recordWrkChainBlock(value: MsgRecordWrkChainBlock): {
            typeUrl: string;
            value: MsgRecordWrkChainBlock;
        };
        purchaseWrkChainStateStorage(value: MsgPurchaseWrkChainStateStorage): {
            typeUrl: string;
            value: MsgPurchaseWrkChainStateStorage;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
