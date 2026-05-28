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
import * as _390 from "./beacon/v1/tx.amino";
import * as _391 from "./enterprise/v1/tx.amino";
import * as _392 from "./stream/v1/tx.amino";
import * as _393 from "./wrkchain/v1/tx.amino";
import * as _394 from "./beacon/v1/tx.registry";
import * as _395 from "./enterprise/v1/tx.registry";
import * as _396 from "./stream/v1/tx.registry";
import * as _397 from "./wrkchain/v1/tx.registry";
import * as _398 from "./beacon/v1/query.lcd";
import * as _399 from "./enterprise/v1/query.lcd";
import * as _400 from "./stream/v1/query.lcd";
import * as _401 from "./wrkchain/v1/query.lcd";
import * as _402 from "./beacon/v1/query.rpc.func";
import * as _403 from "./enterprise/v1/query.rpc.func";
import * as _404 from "./stream/v1/query.rpc.func";
import * as _405 from "./wrkchain/v1/query.rpc.func";
import * as _406 from "./beacon/v1/query.rpc.Query";
import * as _407 from "./enterprise/v1/query.rpc.Query";
import * as _408 from "./stream/v1/query.rpc.Query";
import * as _409 from "./wrkchain/v1/query.rpc.Query";
import * as _410 from "./beacon/v1/tx.rpc.func";
import * as _411 from "./enterprise/v1/tx.rpc.func";
import * as _412 from "./stream/v1/tx.rpc.func";
import * as _413 from "./wrkchain/v1/tx.rpc.func";
import * as _414 from "./beacon/v1/tx.rpc.msg";
import * as _415 from "./enterprise/v1/tx.rpc.msg";
import * as _416 from "./stream/v1/tx.rpc.msg";
import * as _417 from "./wrkchain/v1/tx.rpc.msg";
import * as _424 from "./lcd";
import * as _425 from "./rpc.query";
import * as _426 from "./rpc.tx";
export namespace mainchain {
  export namespace beacon {
    export const v1 = {
      ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._390,
      ..._394,
      ..._398,
      ..._402,
      ..._406,
      ..._410,
      ..._414
    };
  }
  export namespace enterprise {
    export const v1 = {
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._391,
      ..._395,
      ..._399,
      ..._403,
      ..._407,
      ..._411,
      ..._415
    };
  }
  export namespace stream {
    export const v1 = {
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._184,
      ..._392,
      ..._396,
      ..._400,
      ..._404,
      ..._408,
      ..._412,
      ..._416
    };
  }
  export namespace wrkchain {
    export const v1 = {
      ..._185,
      ..._186,
      ..._187,
      ..._188,
      ..._393,
      ..._397,
      ..._401,
      ..._405,
      ..._409,
      ..._413,
      ..._417
    };
  }
  export const ClientFactory = {
    ..._424,
    ..._425,
    ..._426
  };
}