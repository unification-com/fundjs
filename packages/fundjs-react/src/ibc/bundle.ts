//@ts-nocheck
import * as _75 from "./applications/transfer/v1/genesis";
import * as _76 from "./applications/transfer/v1/query";
import * as _77 from "./applications/transfer/v1/transfer";
import * as _78 from "./applications/transfer/v1/tx";
import * as _79 from "./applications/transfer/v2/packet";
import * as _80 from "./core/channel/v1/channel";
import * as _81 from "./core/channel/v1/genesis";
import * as _82 from "./core/channel/v1/query";
import * as _83 from "./core/channel/v1/tx";
import * as _84 from "./core/client/v1/client";
import * as _85 from "./core/client/v1/genesis";
import * as _86 from "./core/client/v1/query";
import * as _87 from "./core/client/v1/tx";
import * as _88 from "./core/commitment/v1/commitment";
import * as _89 from "./core/connection/v1/connection";
import * as _90 from "./core/connection/v1/genesis";
import * as _91 from "./core/connection/v1/query";
import * as _92 from "./core/connection/v1/tx";
import * as _93 from "./lightclients/localhost/v1/localhost";
import * as _94 from "./lightclients/solomachine/v1/solomachine";
import * as _95 from "./lightclients/solomachine/v2/solomachine";
import * as _96 from "./lightclients/tendermint/v1/tendermint";
import * as _189 from "./applications/transfer/v1/tx.amino";
import * as _190 from "./core/channel/v1/tx.amino";
import * as _191 from "./core/client/v1/tx.amino";
import * as _192 from "./core/connection/v1/tx.amino";
import * as _193 from "./applications/transfer/v1/tx.registry";
import * as _194 from "./core/channel/v1/tx.registry";
import * as _195 from "./core/client/v1/tx.registry";
import * as _196 from "./core/connection/v1/tx.registry";
import * as _197 from "./applications/transfer/v1/query.lcd";
import * as _198 from "./core/channel/v1/query.lcd";
import * as _199 from "./core/client/v1/query.lcd";
import * as _200 from "./core/connection/v1/query.lcd";
import * as _201 from "./applications/transfer/v1/query.rpc.Query";
import * as _202 from "./core/channel/v1/query.rpc.Query";
import * as _203 from "./core/client/v1/query.rpc.Query";
import * as _204 from "./core/connection/v1/query.rpc.Query";
import * as _205 from "./applications/transfer/v1/tx.rpc.msg";
import * as _206 from "./core/channel/v1/tx.rpc.msg";
import * as _207 from "./core/client/v1/tx.rpc.msg";
import * as _208 from "./core/connection/v1/tx.rpc.msg";
import * as _232 from "./lcd";
import * as _233 from "./rpc.query";
import * as _234 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._75,
        ..._76,
        ..._77,
        ..._78,
        ..._189,
        ..._193,
        ..._197,
        ..._201,
        ..._205
      };
      export const v2 = {
        ..._79
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._80,
        ..._81,
        ..._82,
        ..._83,
        ..._190,
        ..._194,
        ..._198,
        ..._202,
        ..._206
      };
    }
    export namespace client {
      export const v1 = {
        ..._84,
        ..._85,
        ..._86,
        ..._87,
        ..._191,
        ..._195,
        ..._199,
        ..._203,
        ..._207
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._88
      };
    }
    export namespace connection {
      export const v1 = {
        ..._89,
        ..._90,
        ..._91,
        ..._92,
        ..._192,
        ..._196,
        ..._200,
        ..._204,
        ..._208
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._93
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._94
      };
      export const v2 = {
        ..._95
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._96
      };
    }
  }
  export const ClientFactory = {
    ..._232,
    ..._233,
    ..._234
  };
}