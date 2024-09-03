//@ts-nocheck
import { MsgCreateStream, MsgClaimStream, MsgTopUpDeposit, MsgUpdateFlowRate, MsgCancelStream, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/mainchain.stream.v1.MsgCreateStream": {
    aminoType: "/mainchain.stream.v1.MsgCreateStream",
    toAmino: MsgCreateStream.toAmino,
    fromAmino: MsgCreateStream.fromAmino
  },
  "/mainchain.stream.v1.MsgClaimStream": {
    aminoType: "/mainchain.stream.v1.MsgClaimStream",
    toAmino: MsgClaimStream.toAmino,
    fromAmino: MsgClaimStream.fromAmino
  },
  "/mainchain.stream.v1.MsgTopUpDeposit": {
    aminoType: "/mainchain.stream.v1.MsgTopUpDeposit",
    toAmino: MsgTopUpDeposit.toAmino,
    fromAmino: MsgTopUpDeposit.fromAmino
  },
  "/mainchain.stream.v1.MsgUpdateFlowRate": {
    aminoType: "/mainchain.stream.v1.MsgUpdateFlowRate",
    toAmino: MsgUpdateFlowRate.toAmino,
    fromAmino: MsgUpdateFlowRate.fromAmino
  },
  "/mainchain.stream.v1.MsgCancelStream": {
    aminoType: "/mainchain.stream.v1.MsgCancelStream",
    toAmino: MsgCancelStream.toAmino,
    fromAmino: MsgCancelStream.fromAmino
  },
  "/mainchain.stream.v1.MsgUpdateParams": {
    aminoType: "mainchain/x/stream/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};