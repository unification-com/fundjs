//@ts-nocheck
import { Rpc } from '../helpers';
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  mainchain: {
    beacon: {
      v1: new (await import('./beacon/v1/tx.rpc.msg')).MsgClientImpl(rpc)
    },
    enterprise: {
      v1: new (await import('./enterprise/v1/tx.rpc.msg')).MsgClientImpl(rpc)
    },
    stream: {
      v1: new (await import('./stream/v1/tx.rpc.msg')).MsgClientImpl(rpc)
    },
    wrkchain: {
      v1: new (await import('./wrkchain/v1/tx.rpc.msg')).MsgClientImpl(rpc)
    }
  },
  cosmos: {
    authz: {
      v1beta1: new (await import('../cosmos/authz/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import('../cosmos/bank/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import('../cosmos/distribution/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import('../cosmos/feegrant/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
    },
    gov: {
      v1: new (await import('../cosmos/gov/v1/tx.rpc.msg')).MsgClientImpl(rpc),
      v1beta1: new (await import('../cosmos/gov/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
    },
    group: {
      v1: new (await import('../cosmos/group/v1/tx.rpc.msg')).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import('../cosmos/staking/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import('../cosmos/upgrade/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import('../cosmos/vesting/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
    }
  }
});