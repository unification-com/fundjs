//@ts-nocheck
import { GeneratedType, Registry } from '@cosmjs/proto-signing';

import { MsgCancelStream, MsgClaimStream, MsgCreateStream, MsgTopUpDeposit, MsgUpdateFlowRate, MsgUpdateParams } from './tx';
export const registry: ReadonlyArray<[string, GeneratedType]> = [['/mainchain.stream.v1.MsgCreateStream', MsgCreateStream], ['/mainchain.stream.v1.MsgClaimStream', MsgClaimStream], ['/mainchain.stream.v1.MsgTopUpDeposit', MsgTopUpDeposit], ['/mainchain.stream.v1.MsgUpdateFlowRate', MsgUpdateFlowRate], ['/mainchain.stream.v1.MsgCancelStream', MsgCancelStream], ['/mainchain.stream.v1.MsgUpdateParams', MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createStream(value: MsgCreateStream) {
      return {
        typeUrl: '/mainchain.stream.v1.MsgCreateStream',
        value: MsgCreateStream.encode(value).finish()
      };
    },
    claimStream(value: MsgClaimStream) {
      return {
        typeUrl: '/mainchain.stream.v1.MsgClaimStream',
        value: MsgClaimStream.encode(value).finish()
      };
    },
    topUpDeposit(value: MsgTopUpDeposit) {
      return {
        typeUrl: '/mainchain.stream.v1.MsgTopUpDeposit',
        value: MsgTopUpDeposit.encode(value).finish()
      };
    },
    updateFlowRate(value: MsgUpdateFlowRate) {
      return {
        typeUrl: '/mainchain.stream.v1.MsgUpdateFlowRate',
        value: MsgUpdateFlowRate.encode(value).finish()
      };
    },
    cancelStream(value: MsgCancelStream) {
      return {
        typeUrl: '/mainchain.stream.v1.MsgCancelStream',
        value: MsgCancelStream.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: '/mainchain.stream.v1.MsgUpdateParams',
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createStream(value: MsgCreateStream) {
      return {
        typeUrl: '/mainchain.stream.v1.MsgCreateStream',
        value
      };
    },
    claimStream(value: MsgClaimStream) {
      return {
        typeUrl: '/mainchain.stream.v1.MsgClaimStream',
        value
      };
    },
    topUpDeposit(value: MsgTopUpDeposit) {
      return {
        typeUrl: '/mainchain.stream.v1.MsgTopUpDeposit',
        value
      };
    },
    updateFlowRate(value: MsgUpdateFlowRate) {
      return {
        typeUrl: '/mainchain.stream.v1.MsgUpdateFlowRate',
        value
      };
    },
    cancelStream(value: MsgCancelStream) {
      return {
        typeUrl: '/mainchain.stream.v1.MsgCancelStream',
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: '/mainchain.stream.v1.MsgUpdateParams',
        value
      };
    }
  },
  fromPartial: {
    createStream(value: MsgCreateStream) {
      return {
        typeUrl: '/mainchain.stream.v1.MsgCreateStream',
        value: MsgCreateStream.fromPartial(value)
      };
    },
    claimStream(value: MsgClaimStream) {
      return {
        typeUrl: '/mainchain.stream.v1.MsgClaimStream',
        value: MsgClaimStream.fromPartial(value)
      };
    },
    topUpDeposit(value: MsgTopUpDeposit) {
      return {
        typeUrl: '/mainchain.stream.v1.MsgTopUpDeposit',
        value: MsgTopUpDeposit.fromPartial(value)
      };
    },
    updateFlowRate(value: MsgUpdateFlowRate) {
      return {
        typeUrl: '/mainchain.stream.v1.MsgUpdateFlowRate',
        value: MsgUpdateFlowRate.fromPartial(value)
      };
    },
    cancelStream(value: MsgCancelStream) {
      return {
        typeUrl: '/mainchain.stream.v1.MsgCancelStream',
        value: MsgCancelStream.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: '/mainchain.stream.v1.MsgUpdateParams',
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};