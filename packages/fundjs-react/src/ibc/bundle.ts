//@ts-nocheck
import * as _128 from "./applications/fee/v1/ack";
import * as _129 from "./applications/fee/v1/fee";
import * as _130 from "./applications/fee/v1/genesis";
import * as _131 from "./applications/fee/v1/metadata";
import * as _132 from "./applications/fee/v1/query";
import * as _133 from "./applications/fee/v1/tx";
import * as _134 from "./applications/interchain_accounts/controller/v1/controller";
import * as _135 from "./applications/interchain_accounts/controller/v1/query";
import * as _136 from "./applications/interchain_accounts/controller/v1/tx";
import * as _137 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _138 from "./applications/interchain_accounts/host/v1/host";
import * as _139 from "./applications/interchain_accounts/host/v1/query";
import * as _140 from "./applications/interchain_accounts/host/v1/tx";
import * as _141 from "./applications/interchain_accounts/v1/account";
import * as _142 from "./applications/interchain_accounts/v1/metadata";
import * as _143 from "./applications/interchain_accounts/v1/packet";
import * as _144 from "./applications/transfer/v1/authz";
import * as _145 from "./applications/transfer/v1/genesis";
import * as _146 from "./applications/transfer/v1/query";
import * as _147 from "./applications/transfer/v1/transfer";
import * as _148 from "./applications/transfer/v1/tx";
import * as _149 from "./applications/transfer/v2/packet";
import * as _150 from "./core/channel/v1/channel";
import * as _151 from "./core/channel/v1/genesis";
import * as _152 from "./core/channel/v1/query";
import * as _153 from "./core/channel/v1/tx";
import * as _154 from "./core/channel/v1/upgrade";
import * as _155 from "./core/client/v1/client";
import * as _156 from "./core/client/v1/genesis";
import * as _157 from "./core/client/v1/query";
import * as _158 from "./core/client/v1/tx";
import * as _159 from "./core/commitment/v1/commitment";
import * as _160 from "./core/connection/v1/connection";
import * as _161 from "./core/connection/v1/genesis";
import * as _162 from "./core/connection/v1/query";
import * as _163 from "./core/connection/v1/tx";
import * as _164 from "./lightclients/localhost/v2/localhost";
import * as _165 from "./lightclients/solomachine/v2/solomachine";
import * as _166 from "./lightclients/solomachine/v3/solomachine";
import * as _167 from "./lightclients/tendermint/v1/tendermint";
import * as _168 from "./lightclients/wasm/v1/genesis";
import * as _169 from "./lightclients/wasm/v1/query";
import * as _170 from "./lightclients/wasm/v1/tx";
import * as _171 from "./lightclients/wasm/v1/wasm";
import * as _293 from "./applications/fee/v1/tx.amino";
import * as _294 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _295 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _296 from "./applications/transfer/v1/tx.amino";
import * as _297 from "./core/channel/v1/tx.amino";
import * as _298 from "./core/client/v1/tx.amino";
import * as _299 from "./core/connection/v1/tx.amino";
import * as _300 from "./lightclients/wasm/v1/tx.amino";
import * as _301 from "./applications/fee/v1/tx.registry";
import * as _302 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _303 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _304 from "./applications/transfer/v1/tx.registry";
import * as _305 from "./core/channel/v1/tx.registry";
import * as _306 from "./core/client/v1/tx.registry";
import * as _307 from "./core/connection/v1/tx.registry";
import * as _308 from "./lightclients/wasm/v1/tx.registry";
import * as _309 from "./applications/fee/v1/query.lcd";
import * as _310 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _311 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _312 from "./applications/transfer/v1/query.lcd";
import * as _313 from "./core/channel/v1/query.lcd";
import * as _314 from "./core/client/v1/query.lcd";
import * as _315 from "./core/connection/v1/query.lcd";
import * as _316 from "./lightclients/wasm/v1/query.lcd";
import * as _317 from "./applications/fee/v1/query.rpc.Query";
import * as _318 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _319 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _320 from "./applications/transfer/v1/query.rpc.Query";
import * as _321 from "./core/channel/v1/query.rpc.Query";
import * as _322 from "./core/client/v1/query.rpc.Query";
import * as _323 from "./core/connection/v1/query.rpc.Query";
import * as _324 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _325 from "./applications/fee/v1/tx.rpc.msg";
import * as _326 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _327 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _328 from "./applications/transfer/v1/tx.rpc.msg";
import * as _329 from "./core/channel/v1/tx.rpc.msg";
import * as _330 from "./core/client/v1/tx.rpc.msg";
import * as _331 from "./core/connection/v1/tx.rpc.msg";
import * as _332 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _356 from "./lcd";
import * as _357 from "./rpc.query";
import * as _358 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._128,
        ..._129,
        ..._130,
        ..._131,
        ..._132,
        ..._133,
        ..._293,
        ..._301,
        ..._309,
        ..._317,
        ..._325
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._134,
          ..._135,
          ..._136,
          ..._294,
          ..._302,
          ..._310,
          ..._318,
          ..._326
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._137
        };
      }
      export namespace host {
        export const v1 = {
          ..._138,
          ..._139,
          ..._140,
          ..._295,
          ..._303,
          ..._311,
          ..._319,
          ..._327
        };
      }
      export const v1 = {
        ..._141,
        ..._142,
        ..._143
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._144,
        ..._145,
        ..._146,
        ..._147,
        ..._148,
        ..._296,
        ..._304,
        ..._312,
        ..._320,
        ..._328
      };
      export const v2 = {
        ..._149
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._150,
        ..._151,
        ..._152,
        ..._153,
        ..._154,
        ..._297,
        ..._305,
        ..._313,
        ..._321,
        ..._329
      };
    }
    export namespace client {
      export const v1 = {
        ..._155,
        ..._156,
        ..._157,
        ..._158,
        ..._298,
        ..._306,
        ..._314,
        ..._322,
        ..._330
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._159
      };
    }
    export namespace connection {
      export const v1 = {
        ..._160,
        ..._161,
        ..._162,
        ..._163,
        ..._299,
        ..._307,
        ..._315,
        ..._323,
        ..._331
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._164
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._165
      };
      export const v3 = {
        ..._166
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._167
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._168,
        ..._169,
        ..._170,
        ..._171,
        ..._300,
        ..._308,
        ..._316,
        ..._324,
        ..._332
      };
    }
  }
  export const ClientFactory = {
    ..._356,
    ..._357,
    ..._358
  };
}