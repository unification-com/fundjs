//@ts-nocheck
import * as _92 from "./applications/transfer/v1/genesis";
import * as _93 from "./applications/transfer/v1/query";
import * as _94 from "./applications/transfer/v1/transfer";
import * as _95 from "./applications/transfer/v1/tx";
import * as _96 from "./applications/transfer/v2/packet";
import * as _97 from "./core/channel/v1/channel";
import * as _98 from "./core/channel/v1/genesis";
import * as _99 from "./core/channel/v1/query";
import * as _100 from "./core/channel/v1/tx";
import * as _101 from "./core/client/v1/client";
import * as _102 from "./core/client/v1/genesis";
import * as _103 from "./core/client/v1/query";
import * as _104 from "./core/client/v1/tx";
import * as _105 from "./core/commitment/v1/commitment";
import * as _106 from "./core/connection/v1/connection";
import * as _107 from "./core/connection/v1/genesis";
import * as _108 from "./core/connection/v1/query";
import * as _109 from "./core/connection/v1/tx";
import * as _110 from "./lightclients/localhost/v1/localhost";
import * as _111 from "./lightclients/solomachine/v1/solomachine";
import * as _112 from "./lightclients/solomachine/v2/solomachine";
import * as _113 from "./lightclients/tendermint/v1/tendermint";
import * as _209 from "./applications/transfer/v1/tx.amino";
import * as _210 from "./core/channel/v1/tx.amino";
import * as _211 from "./core/client/v1/tx.amino";
import * as _212 from "./core/connection/v1/tx.amino";
import * as _213 from "./applications/transfer/v1/tx.registry";
import * as _214 from "./core/channel/v1/tx.registry";
import * as _215 from "./core/client/v1/tx.registry";
import * as _216 from "./core/connection/v1/tx.registry";
import * as _217 from "./applications/transfer/v1/query.lcd";
import * as _218 from "./core/channel/v1/query.lcd";
import * as _219 from "./core/client/v1/query.lcd";
import * as _220 from "./core/connection/v1/query.lcd";
import * as _221 from "./applications/transfer/v1/query.rpc.Query";
import * as _222 from "./core/channel/v1/query.rpc.Query";
import * as _223 from "./core/client/v1/query.rpc.Query";
import * as _224 from "./core/connection/v1/query.rpc.Query";
import * as _225 from "./applications/transfer/v1/tx.rpc.msg";
import * as _226 from "./core/channel/v1/tx.rpc.msg";
import * as _227 from "./core/client/v1/tx.rpc.msg";
import * as _228 from "./core/connection/v1/tx.rpc.msg";
import * as _235 from "./lcd";
import * as _236 from "./rpc.query";
import * as _237 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._92,
        ..._93,
        ..._94,
        ..._95,
        ..._209,
        ..._213,
        ..._217,
        ..._221,
        ..._225
      };
      export const v2 = {
        ..._96
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._97,
        ..._98,
        ..._99,
        ..._100,
        ..._210,
        ..._214,
        ..._218,
        ..._222,
        ..._226
      };
    }
    export namespace client {
      export const v1 = {
        ..._101,
        ..._102,
        ..._103,
        ..._104,
        ..._211,
        ..._215,
        ..._219,
        ..._223,
        ..._227
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._105
      };
    }
    export namespace connection {
      export const v1 = {
        ..._106,
        ..._107,
        ..._108,
        ..._109,
        ..._212,
        ..._216,
        ..._220,
        ..._224,
        ..._228
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._110
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._111
      };
      export const v2 = {
        ..._112
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._113
      };
    }
  }
  export const ClientFactory = {
    ..._235,
    ..._236,
    ..._237
  };
}