import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateStream, MsgClaimStream, MsgTopUpDeposit, MsgUpdateFlowRate, MsgCancelStream, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createStream(value: MsgCreateStream): {
            typeUrl: string;
            value: Uint8Array;
        };
        claimStream(value: MsgClaimStream): {
            typeUrl: string;
            value: Uint8Array;
        };
        topUpDeposit(value: MsgTopUpDeposit): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateFlowRate(value: MsgUpdateFlowRate): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelStream(value: MsgCancelStream): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createStream(value: MsgCreateStream): {
            typeUrl: string;
            value: MsgCreateStream;
        };
        claimStream(value: MsgClaimStream): {
            typeUrl: string;
            value: MsgClaimStream;
        };
        topUpDeposit(value: MsgTopUpDeposit): {
            typeUrl: string;
            value: MsgTopUpDeposit;
        };
        updateFlowRate(value: MsgUpdateFlowRate): {
            typeUrl: string;
            value: MsgUpdateFlowRate;
        };
        cancelStream(value: MsgCancelStream): {
            typeUrl: string;
            value: MsgCancelStream;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        createStream(value: MsgCreateStream): {
            typeUrl: string;
            value: MsgCreateStream;
        };
        claimStream(value: MsgClaimStream): {
            typeUrl: string;
            value: MsgClaimStream;
        };
        topUpDeposit(value: MsgTopUpDeposit): {
            typeUrl: string;
            value: MsgTopUpDeposit;
        };
        updateFlowRate(value: MsgUpdateFlowRate): {
            typeUrl: string;
            value: MsgUpdateFlowRate;
        };
        cancelStream(value: MsgCancelStream): {
            typeUrl: string;
            value: MsgCancelStream;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
