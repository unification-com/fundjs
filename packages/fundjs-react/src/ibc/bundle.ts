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
import * as _334 from "./applications/fee/v1/tx.amino";
import * as _335 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _336 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _337 from "./applications/transfer/v1/tx.amino";
import * as _338 from "./core/channel/v1/tx.amino";
import * as _339 from "./core/client/v1/tx.amino";
import * as _340 from "./core/connection/v1/tx.amino";
import * as _341 from "./lightclients/wasm/v1/tx.amino";
import * as _342 from "./applications/fee/v1/tx.registry";
import * as _343 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _344 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _345 from "./applications/transfer/v1/tx.registry";
import * as _346 from "./core/channel/v1/tx.registry";
import * as _347 from "./core/client/v1/tx.registry";
import * as _348 from "./core/connection/v1/tx.registry";
import * as _349 from "./lightclients/wasm/v1/tx.registry";
import * as _350 from "./applications/fee/v1/query.lcd";
import * as _351 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _352 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _353 from "./applications/transfer/v1/query.lcd";
import * as _354 from "./core/channel/v1/query.lcd";
import * as _355 from "./core/client/v1/query.lcd";
import * as _356 from "./core/connection/v1/query.lcd";
import * as _357 from "./lightclients/wasm/v1/query.lcd";
import * as _358 from "./applications/fee/v1/query.rpc.func";
import * as _359 from "./applications/interchain_accounts/controller/v1/query.rpc.func";
import * as _360 from "./applications/interchain_accounts/host/v1/query.rpc.func";
import * as _361 from "./applications/transfer/v1/query.rpc.func";
import * as _362 from "./core/channel/v1/query.rpc.func";
import * as _363 from "./core/client/v1/query.rpc.func";
import * as _364 from "./core/connection/v1/query.rpc.func";
import * as _365 from "./lightclients/wasm/v1/query.rpc.func";
import * as _366 from "./applications/fee/v1/query.rpc.Query";
import * as _367 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _368 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _369 from "./applications/transfer/v1/query.rpc.Query";
import * as _370 from "./core/channel/v1/query.rpc.Query";
import * as _371 from "./core/client/v1/query.rpc.Query";
import * as _372 from "./core/connection/v1/query.rpc.Query";
import * as _373 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _374 from "./applications/fee/v1/tx.rpc.func";
import * as _375 from "./applications/interchain_accounts/controller/v1/tx.rpc.func";
import * as _376 from "./applications/interchain_accounts/host/v1/tx.rpc.func";
import * as _377 from "./applications/transfer/v1/tx.rpc.func";
import * as _378 from "./core/channel/v1/tx.rpc.func";
import * as _379 from "./core/client/v1/tx.rpc.func";
import * as _380 from "./core/connection/v1/tx.rpc.func";
import * as _381 from "./lightclients/wasm/v1/tx.rpc.func";
import * as _382 from "./applications/fee/v1/tx.rpc.msg";
import * as _383 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _384 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _385 from "./applications/transfer/v1/tx.rpc.msg";
import * as _386 from "./core/channel/v1/tx.rpc.msg";
import * as _387 from "./core/client/v1/tx.rpc.msg";
import * as _388 from "./core/connection/v1/tx.rpc.msg";
import * as _389 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _421 from "./lcd";
import * as _422 from "./rpc.query";
import * as _423 from "./rpc.tx";
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
        ..._334,
        ..._342,
        ..._350,
        ..._358,
        ..._366,
        ..._374,
        ..._382
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._134,
          ..._135,
          ..._136,
          ..._335,
          ..._343,
          ..._351,
          ..._359,
          ..._367,
          ..._375,
          ..._383
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
          ..._336,
          ..._344,
          ..._352,
          ..._360,
          ..._368,
          ..._376,
          ..._384
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
        ..._337,
        ..._345,
        ..._353,
        ..._361,
        ..._369,
        ..._377,
        ..._385
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
        ..._338,
        ..._346,
        ..._354,
        ..._362,
        ..._370,
        ..._378,
        ..._386
      };
    }
    export namespace client {
      export const v1 = {
        ..._155,
        ..._156,
        ..._157,
        ..._158,
        ..._339,
        ..._347,
        ..._355,
        ..._363,
        ..._371,
        ..._379,
        ..._387
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
        ..._340,
        ..._348,
        ..._356,
        ..._364,
        ..._372,
        ..._380,
        ..._388
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
        ..._341,
        ..._349,
        ..._357,
        ..._365,
        ..._373,
        ..._381,
        ..._389
      };
    }
  }
  export const ClientFactory = {
    ..._421,
    ..._422,
    ..._423
  };
}