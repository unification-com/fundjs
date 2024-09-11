//@ts-nocheck
import * as _97 from "./beacon/v1/beacon";
import * as _98 from "./beacon/v1/genesis";
import * as _99 from "./beacon/v1/query";
import * as _100 from "./beacon/v1/tx";
import * as _101 from "./enterprise/v1/enterprise";
import * as _102 from "./enterprise/v1/genesis";
import * as _103 from "./enterprise/v1/query";
import * as _104 from "./enterprise/v1/tx";
import * as _105 from "./stream/v1/genesis";
import * as _106 from "./stream/v1/params";
import * as _107 from "./stream/v1/query";
import * as _108 from "./stream/v1/stream";
import * as _109 from "./stream/v1/tx";
import * as _110 from "./wrkchain/v1/genesis";
import * as _111 from "./wrkchain/v1/query";
import * as _112 from "./wrkchain/v1/tx";
import * as _113 from "./wrkchain/v1/wrkchain";
import * as _209 from "./beacon/v1/tx.amino";
import * as _210 from "./enterprise/v1/tx.amino";
import * as _211 from "./stream/v1/tx.amino";
import * as _212 from "./wrkchain/v1/tx.amino";
import * as _213 from "./beacon/v1/tx.registry";
import * as _214 from "./enterprise/v1/tx.registry";
import * as _215 from "./stream/v1/tx.registry";
import * as _216 from "./wrkchain/v1/tx.registry";
import * as _217 from "./beacon/v1/query.lcd";
import * as _218 from "./enterprise/v1/query.lcd";
import * as _219 from "./stream/v1/query.lcd";
import * as _220 from "./wrkchain/v1/query.lcd";
import * as _221 from "./beacon/v1/query.rpc.Query";
import * as _222 from "./enterprise/v1/query.rpc.Query";
import * as _223 from "./stream/v1/query.rpc.Query";
import * as _224 from "./wrkchain/v1/query.rpc.Query";
import * as _225 from "./beacon/v1/tx.rpc.msg";
import * as _226 from "./enterprise/v1/tx.rpc.msg";
import * as _227 from "./stream/v1/tx.rpc.msg";
import * as _228 from "./wrkchain/v1/tx.rpc.msg";
import * as _235 from "./lcd";
import * as _236 from "./rpc.query";
import * as _237 from "./rpc.tx";
export namespace mainchain {
  export namespace beacon {
    export const v1 = {
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._209,
      ..._213,
      ..._217,
      ..._221,
      ..._225
    };
  }
  export namespace enterprise {
    export const v1 = {
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._210,
      ..._214,
      ..._218,
      ..._222,
      ..._226
    };
  }
  export namespace stream {
    export const v1 = {
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._211,
      ..._215,
      ..._219,
      ..._223,
      ..._227
    };
  }
  export namespace wrkchain {
    export const v1 = {
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._212,
      ..._216,
      ..._220,
      ..._224,
      ..._228
    };
  }
  export const ClientFactory = {
    ..._235,
    ..._236,
    ..._237
  };
}