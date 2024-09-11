//@ts-nocheck
import { MsgCreateStream, MsgClaimStream, MsgTopUpDeposit, MsgUpdateFlowRate, MsgCancelStream, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/mainchain.stream.v1.MsgCreateStream": {
    aminoType: "mainchain/x/stream/MsgCreateStream",
    toAmino: MsgCreateStream.toAmino,
    fromAmino: MsgCreateStream.fromAmino
  },
  "/mainchain.stream.v1.MsgClaimStream": {
    aminoType: "mainchain/x/stream/MsgClaimStream",
    toAmino: MsgClaimStream.toAmino,
    fromAmino: MsgClaimStream.fromAmino
  },
  "/mainchain.stream.v1.MsgTopUpDeposit": {
    aminoType: "mainchain/x/stream/MsgTopUpDeposit",
    toAmino: MsgTopUpDeposit.toAmino,
    fromAmino: MsgTopUpDeposit.fromAmino
  },
  "/mainchain.stream.v1.MsgUpdateFlowRate": {
    aminoType: "mainchain/x/stream/MsgUpdateFlowRate",
    toAmino: MsgUpdateFlowRate.toAmino,
    fromAmino: MsgUpdateFlowRate.fromAmino
  },
  "/mainchain.stream.v1.MsgCancelStream": {
    aminoType: "mainchain/x/stream/MsgCancelStream",
    toAmino: MsgCancelStream.toAmino,
    fromAmino: MsgCancelStream.fromAmino
  },
  "/mainchain.stream.v1.MsgUpdateParams": {
    aminoType: "mainchain/x/stream/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};