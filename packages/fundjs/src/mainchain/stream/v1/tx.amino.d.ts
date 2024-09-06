import { MsgCreateStream, MsgClaimStream, MsgTopUpDeposit, MsgUpdateFlowRate, MsgCancelStream, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/mainchain.stream.v1.MsgCreateStream": {
        aminoType: string;
        toAmino: (message: MsgCreateStream) => import("./tx").MsgCreateStreamAmino;
        fromAmino: (object: import("./tx").MsgCreateStreamAmino) => MsgCreateStream;
    };
    "/mainchain.stream.v1.MsgClaimStream": {
        aminoType: string;
        toAmino: (message: MsgClaimStream) => import("./tx").MsgClaimStreamAmino;
        fromAmino: (object: import("./tx").MsgClaimStreamAmino) => MsgClaimStream;
    };
    "/mainchain.stream.v1.MsgTopUpDeposit": {
        aminoType: string;
        toAmino: (message: MsgTopUpDeposit) => import("./tx").MsgTopUpDepositAmino;
        fromAmino: (object: import("./tx").MsgTopUpDepositAmino) => MsgTopUpDeposit;
    };
    "/mainchain.stream.v1.MsgUpdateFlowRate": {
        aminoType: string;
        toAmino: (message: MsgUpdateFlowRate) => import("./tx").MsgUpdateFlowRateAmino;
        fromAmino: (object: import("./tx").MsgUpdateFlowRateAmino) => MsgUpdateFlowRate;
    };
    "/mainchain.stream.v1.MsgCancelStream": {
        aminoType: string;
        toAmino: (message: MsgCancelStream) => import("./tx").MsgCancelStreamAmino;
        fromAmino: (object: import("./tx").MsgCancelStreamAmino) => MsgCancelStream;
    };
    "/mainchain.stream.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
