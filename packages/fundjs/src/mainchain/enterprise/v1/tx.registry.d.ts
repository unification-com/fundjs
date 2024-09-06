import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUndPurchaseOrder, MsgProcessUndPurchaseOrder, MsgWhitelistAddress, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        undPurchaseOrder(value: MsgUndPurchaseOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        processUndPurchaseOrder(value: MsgProcessUndPurchaseOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        whitelistAddress(value: MsgWhitelistAddress): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        undPurchaseOrder(value: MsgUndPurchaseOrder): {
            typeUrl: string;
            value: MsgUndPurchaseOrder;
        };
        processUndPurchaseOrder(value: MsgProcessUndPurchaseOrder): {
            typeUrl: string;
            value: MsgProcessUndPurchaseOrder;
        };
        whitelistAddress(value: MsgWhitelistAddress): {
            typeUrl: string;
            value: MsgWhitelistAddress;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        undPurchaseOrder(value: MsgUndPurchaseOrder): {
            typeUrl: string;
            value: MsgUndPurchaseOrder;
        };
        processUndPurchaseOrder(value: MsgProcessUndPurchaseOrder): {
            typeUrl: string;
            value: MsgProcessUndPurchaseOrder;
        };
        whitelistAddress(value: MsgWhitelistAddress): {
            typeUrl: string;
            value: MsgWhitelistAddress;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
