//@ts-nocheck
import * as _0 from "./beacon/v1/beacon";
import * as _1 from "./beacon/v1/genesis";
import * as _2 from "./beacon/v1/query";
import * as _3 from "./beacon/v1/tx";
import * as _4 from "./enterprise/v1/enterprise";
import * as _5 from "./enterprise/v1/genesis";
import * as _6 from "./enterprise/v1/query";
import * as _7 from "./enterprise/v1/tx";
import * as _8 from "./stream/v1/genesis";
import * as _9 from "./stream/v1/params";
import * as _10 from "./stream/v1/query";
import * as _11 from "./stream/v1/stream";
import * as _12 from "./stream/v1/tx";
import * as _13 from "./wrkchain/v1/genesis";
import * as _14 from "./wrkchain/v1/query";
import * as _15 from "./wrkchain/v1/tx";
import * as _16 from "./wrkchain/v1/wrkchain";
import * as _125 from "./beacon/v1/tx.amino";
import * as _126 from "./enterprise/v1/tx.amino";
import * as _127 from "./stream/v1/tx.amino";
import * as _128 from "./wrkchain/v1/tx.amino";
import * as _129 from "./beacon/v1/tx.registry";
import * as _130 from "./enterprise/v1/tx.registry";
import * as _131 from "./stream/v1/tx.registry";
import * as _132 from "./wrkchain/v1/tx.registry";
import * as _133 from "./beacon/v1/query.lcd";
import * as _134 from "./enterprise/v1/query.lcd";
import * as _135 from "./stream/v1/query.lcd";
import * as _136 from "./wrkchain/v1/query.lcd";
import * as _137 from "./beacon/v1/query.rpc.Query";
import * as _138 from "./enterprise/v1/query.rpc.Query";
import * as _139 from "./stream/v1/query.rpc.Query";
import * as _140 from "./wrkchain/v1/query.rpc.Query";
import * as _141 from "./beacon/v1/tx.rpc.msg";
import * as _142 from "./enterprise/v1/tx.rpc.msg";
import * as _143 from "./stream/v1/tx.rpc.msg";
import * as _144 from "./wrkchain/v1/tx.rpc.msg";
import * as _229 from "./mainchain-lcd-client";
import * as _230 from "./mainchain-rpc-client.query";
import * as _231 from "./mainchain-rpc-client.tx";
export namespace mainchain {
  export namespace beacon {
    export const v1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._125,
      ..._129,
      ..._133,
      ..._137,
      ..._141
    };
  }
  export namespace enterprise {
    export const v1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._126,
      ..._130,
      ..._134,
      ..._138,
      ..._142
    };
  }
  export namespace stream {
    export const v1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._127,
      ..._131,
      ..._135,
      ..._139,
      ..._143
    };
  }
  export namespace wrkchain {
    export const v1 = {
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._128,
      ..._132,
      ..._136,
      ..._140,
      ..._144
    };
  }
  export const ClientFactory = {
    ..._229,
    ..._230,
    ..._231
  };
}