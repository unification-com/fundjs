//@ts-nocheck
import { MsgCreateStream, MsgClaimStream, MsgTopUpDeposit, MsgUpdateFlowRate, MsgCancelStream, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/mainchain.stream.v1.MsgCreateStream": {
    aminoType: "stream/MsgCreateStream",
    toAmino: MsgCreateStream.toAmino,
    fromAmino: MsgCreateStream.fromAmino
  },
  "/mainchain.stream.v1.MsgClaimStream": {
    aminoType: "stream/MsgClaimStream",
    toAmino: MsgClaimStream.toAmino,
    fromAmino: MsgClaimStream.fromAmino
  },
  "/mainchain.stream.v1.MsgTopUpDeposit": {
    aminoType: "stream/MsgTopUpDeposit",
    toAmino: MsgTopUpDeposit.toAmino,
    fromAmino: MsgTopUpDeposit.fromAmino
  },
  "/mainchain.stream.v1.MsgUpdateFlowRate": {
    aminoType: "stream/MsgUpdateFlowRate",
    toAmino: MsgUpdateFlowRate.toAmino,
    fromAmino: MsgUpdateFlowRate.fromAmino
  },
  "/mainchain.stream.v1.MsgCancelStream": {
    aminoType: "stream/MsgCancelStream",
    toAmino: MsgCancelStream.toAmino,
    fromAmino: MsgCancelStream.fromAmino
  },
  "/mainchain.stream.v1.MsgUpdateParams": {
    aminoType: "stream/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};