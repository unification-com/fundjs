//@ts-nocheck
import * as _85 from './applications/transfer/v1/genesis';
import * as _86 from './applications/transfer/v1/query';
import * as _200 from './applications/transfer/v1/query.lcd';
import * as _204 from './applications/transfer/v1/query.rpc.Query';
import * as _87 from './applications/transfer/v1/transfer';
import * as _88 from './applications/transfer/v1/tx';
import * as _192 from './applications/transfer/v1/tx.amino';
import * as _196 from './applications/transfer/v1/tx.registry';
import * as _208 from './applications/transfer/v1/tx.rpc.msg';
import * as _89 from './applications/transfer/v2/packet';
import * as _90 from './core/channel/v1/channel';
import * as _91 from './core/channel/v1/genesis';
import * as _92 from './core/channel/v1/query';
import * as _201 from './core/channel/v1/query.lcd';
import * as _205 from './core/channel/v1/query.rpc.Query';
import * as _93 from './core/channel/v1/tx';
import * as _193 from './core/channel/v1/tx.amino';
import * as _197 from './core/channel/v1/tx.registry';
import * as _209 from './core/channel/v1/tx.rpc.msg';
import * as _94 from './core/client/v1/client';
import * as _95 from './core/client/v1/genesis';
import * as _96 from './core/client/v1/query';
import * as _202 from './core/client/v1/query.lcd';
import * as _206 from './core/client/v1/query.rpc.Query';
import * as _97 from './core/client/v1/tx';
import * as _194 from './core/client/v1/tx.amino';
import * as _198 from './core/client/v1/tx.registry';
import * as _210 from './core/client/v1/tx.rpc.msg';
import * as _98 from './core/commitment/v1/commitment';
import * as _99 from './core/connection/v1/connection';
import * as _100 from './core/connection/v1/genesis';
import * as _101 from './core/connection/v1/query';
import * as _203 from './core/connection/v1/query.lcd';
import * as _207 from './core/connection/v1/query.rpc.Query';
import * as _102 from './core/connection/v1/tx';
import * as _195 from './core/connection/v1/tx.amino';
import * as _199 from './core/connection/v1/tx.registry';
import * as _211 from './core/connection/v1/tx.rpc.msg';
import * as _218 from './lcd';
import * as _103 from './lightclients/localhost/v1/localhost';
import * as _104 from './lightclients/solomachine/v1/solomachine';
import * as _105 from './lightclients/solomachine/v2/solomachine';
import * as _106 from './lightclients/tendermint/v1/tendermint';
import * as _219 from './rpc.query';
import * as _220 from './rpc.tx';
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._85,
        ..._86,
        ..._87,
        ..._88,
        ..._192,
        ..._196,
        ..._200,
        ..._204,
        ..._208
      };
      export const v2 = {
        ..._89
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._90,
        ..._91,
        ..._92,
        ..._93,
        ..._193,
        ..._197,
        ..._201,
        ..._205,
        ..._209
      };
    }
    export namespace client {
      export const v1 = {
        ..._94,
        ..._95,
        ..._96,
        ..._97,
        ..._194,
        ..._198,
        ..._202,
        ..._206,
        ..._210
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._98
      };
    }
    export namespace connection {
      export const v1 = {
        ..._99,
        ..._100,
        ..._101,
        ..._102,
        ..._195,
        ..._199,
        ..._203,
        ..._207,
        ..._211
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._103
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._104
      };
      export const v2 = {
        ..._105
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._106
      };
    }
  }
  export const ClientFactory = {
    ..._218,
    ..._219,
    ..._220
  };
}