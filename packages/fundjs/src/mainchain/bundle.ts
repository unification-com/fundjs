//@ts-nocheck
import * as _172 from "./beacon/v1/beacon";
import * as _173 from "./beacon/v1/genesis";
import * as _174 from "./beacon/v1/query";
import * as _175 from "./beacon/v1/tx";
import * as _176 from "./enterprise/v1/enterprise";
import * as _177 from "./enterprise/v1/genesis";
import * as _178 from "./enterprise/v1/query";
import * as _179 from "./enterprise/v1/tx";
import * as _180 from "./stream/v1/genesis";
import * as _181 from "./stream/v1/params";
import * as _182 from "./stream/v1/query";
import * as _183 from "./stream/v1/stream";
import * as _184 from "./stream/v1/tx";
import * as _185 from "./wrkchain/v1/genesis";
import * as _186 from "./wrkchain/v1/query";
import * as _187 from "./wrkchain/v1/tx";
import * as _188 from "./wrkchain/v1/wrkchain";
import * as _333 from "./beacon/v1/tx.amino";
import * as _334 from "./enterprise/v1/tx.amino";
import * as _335 from "./stream/v1/tx.amino";
import * as _336 from "./wrkchain/v1/tx.amino";
import * as _337 from "./beacon/v1/tx.registry";
import * as _338 from "./enterprise/v1/tx.registry";
import * as _339 from "./stream/v1/tx.registry";
import * as _340 from "./wrkchain/v1/tx.registry";
import * as _341 from "./beacon/v1/query.lcd";
import * as _342 from "./enterprise/v1/query.lcd";
import * as _343 from "./stream/v1/query.lcd";
import * as _344 from "./wrkchain/v1/query.lcd";
import * as _345 from "./beacon/v1/query.rpc.Query";
import * as _346 from "./enterprise/v1/query.rpc.Query";
import * as _347 from "./stream/v1/query.rpc.Query";
import * as _348 from "./wrkchain/v1/query.rpc.Query";
import * as _349 from "./beacon/v1/tx.rpc.msg";
import * as _350 from "./enterprise/v1/tx.rpc.msg";
import * as _351 from "./stream/v1/tx.rpc.msg";
import * as _352 from "./wrkchain/v1/tx.rpc.msg";
import * as _359 from "./lcd";
import * as _360 from "./rpc.query";
import * as _361 from "./rpc.tx";
export namespace mainchain {
  export namespace beacon {
    export const v1 = {
      ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._333,
      ..._337,
      ..._341,
      ..._345,
      ..._349
    };
  }
  export namespace enterprise {
    export const v1 = {
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._334,
      ..._338,
      ..._342,
      ..._346,
      ..._350
    };
  }
  export namespace stream {
    export const v1 = {
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._184,
      ..._335,
      ..._339,
      ..._343,
      ..._347,
      ..._351
    };
  }
  export namespace wrkchain {
    export const v1 = {
      ..._185,
      ..._186,
      ..._187,
      ..._188,
      ..._336,
      ..._340,
      ..._344,
      ..._348,
      ..._352
    };
  }
  export const ClientFactory = {
    ..._359,
    ..._360,
    ..._361
  };
}