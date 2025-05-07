//@ts-nocheck
import * as _2 from "./app/runtime/v1alpha1/module";
import * as _3 from "./auth/module/v1/module";
import * as _4 from "./auth/v1beta1/auth";
import * as _5 from "./auth/v1beta1/genesis";
import * as _6 from "./auth/v1beta1/query";
import * as _7 from "./auth/v1beta1/tx";
import * as _8 from "./authz/module/v1/module";
import * as _9 from "./authz/v1beta1/authz";
import * as _10 from "./authz/v1beta1/event";
import * as _11 from "./authz/v1beta1/genesis";
import * as _12 from "./authz/v1beta1/query";
import * as _13 from "./authz/v1beta1/tx";
import * as _14 from "./bank/module/v1/module";
import * as _15 from "./bank/v1beta1/authz";
import * as _16 from "./bank/v1beta1/bank";
import * as _17 from "./bank/v1beta1/genesis";
import * as _18 from "./bank/v1beta1/query";
import * as _19 from "./bank/v1beta1/tx";
import * as _20 from "./base/abci/v1beta1/abci";
import * as _21 from "./base/node/v1beta1/query";
import * as _22 from "./base/query/v1beta1/pagination";
import * as _23 from "./base/reflection/v2alpha1/reflection";
import * as _24 from "./base/tendermint/v1beta1/query";
import * as _25 from "./base/tendermint/v1beta1/types";
import * as _26 from "./base/v1beta1/coin";
import * as _27 from "./benchmark/module/v1/module";
import * as _28 from "./benchmark/v1/benchmark";
import * as _29 from "./benchmark/v1/tx";
import * as _30 from "./circuit/module/v1/module";
import * as _31 from "./circuit/v1/query";
import * as _32 from "./circuit/v1/tx";
import * as _33 from "./circuit/v1/types";
import * as _34 from "./consensus/module/v1/module";
import * as _35 from "./consensus/v1/query";
import * as _36 from "./consensus/v1/tx";
import * as _37 from "./counter/module/v1/module";
import * as _38 from "./counter/v1/query";
import * as _39 from "./counter/v1/tx";
import * as _40 from "./crisis/module/v1/module";
import * as _41 from "./crisis/v1beta1/genesis";
import * as _42 from "./crisis/v1beta1/tx";
import * as _43 from "./crypto/ed25519/keys";
import * as _44 from "./crypto/hd/v1/hd";
import * as _45 from "./crypto/keyring/v1/record";
import * as _46 from "./crypto/multisig/keys";
import * as _47 from "./crypto/secp256k1/keys";
import * as _48 from "./crypto/secp256r1/keys";
import * as _49 from "./distribution/module/v1/module";
import * as _50 from "./distribution/v1beta1/distribution";
import * as _51 from "./distribution/v1beta1/genesis";
import * as _52 from "./distribution/v1beta1/query";
import * as _53 from "./distribution/v1beta1/tx";
import * as _54 from "./epochs/module/v1/module";
import * as _55 from "./epochs/v1beta1/events";
import * as _56 from "./epochs/v1beta1/genesis";
import * as _57 from "./epochs/v1beta1/query";
import * as _58 from "./evidence/module/v1/module";
import * as _59 from "./evidence/v1beta1/evidence";
import * as _60 from "./evidence/v1beta1/genesis";
import * as _61 from "./evidence/v1beta1/query";
import * as _62 from "./evidence/v1beta1/tx";
import * as _63 from "./feegrant/module/v1/module";
import * as _64 from "./feegrant/v1beta1/feegrant";
import * as _65 from "./feegrant/v1beta1/genesis";
import * as _66 from "./feegrant/v1beta1/query";
import * as _67 from "./feegrant/v1beta1/tx";
import * as _68 from "./genutil/module/v1/module";
import * as _69 from "./gov/module/v1/module";
import * as _70 from "./gov/v1/genesis";
import * as _71 from "./gov/v1/gov";
import * as _72 from "./gov/v1/query";
import * as _73 from "./gov/v1/tx";
import * as _74 from "./gov/v1beta1/genesis";
import * as _75 from "./gov/v1beta1/gov";
import * as _76 from "./gov/v1beta1/query";
import * as _77 from "./gov/v1beta1/tx";
import * as _78 from "./group/module/v1/module";
import * as _79 from "./group/v1/events";
import * as _80 from "./group/v1/genesis";
import * as _81 from "./group/v1/query";
import * as _82 from "./group/v1/tx";
import * as _83 from "./group/v1/types";
import * as _84 from "./ics23/v1/proofs";
import * as _85 from "./mint/module/v1/module";
import * as _86 from "./msg/textual/v1/textual";
import * as _87 from "./nft/module/v1/module";
import * as _88 from "./orm/module/v1alpha1/module";
import * as _89 from "./orm/query/v1alpha1/query";
import * as _90 from "./params/module/v1/module";
import * as _91 from "./protocolpool/module/v1/module";
import * as _92 from "./protocolpool/v1/genesis";
import * as _93 from "./protocolpool/v1/query";
import * as _94 from "./protocolpool/v1/tx";
import * as _95 from "./protocolpool/v1/types";
import * as _96 from "./query/v1/query";
import * as _97 from "./reflection/v1/reflection";
import * as _98 from "./slashing/module/v1/module";
import * as _99 from "./slashing/v1beta1/genesis";
import * as _100 from "./slashing/v1beta1/query";
import * as _101 from "./slashing/v1beta1/slashing";
import * as _102 from "./slashing/v1beta1/tx";
import * as _103 from "./staking/module/v1/module";
import * as _104 from "./staking/v1beta1/authz";
import * as _105 from "./staking/v1beta1/genesis";
import * as _106 from "./staking/v1beta1/query";
import * as _107 from "./staking/v1beta1/staking";
import * as _108 from "./staking/v1beta1/tx";
import * as _109 from "./store/internal/kv/v1beta1/kv";
import * as _110 from "./store/snapshots/v1/snapshot";
import * as _111 from "./store/streaming/abci/grpc";
import * as _112 from "./store/v1beta1/commit_info";
import * as _113 from "./store/v1beta1/listening";
import * as _114 from "./tx/config/v1/config";
import * as _115 from "./tx/signing/v1beta1/signing";
import * as _116 from "./tx/v1beta1/service";
import * as _117 from "./tx/v1beta1/tx";
import * as _118 from "./upgrade/module/v1/module";
import * as _119 from "./upgrade/v1beta1/query";
import * as _120 from "./upgrade/v1beta1/tx";
import * as _121 from "./upgrade/v1beta1/upgrade";
import * as _122 from "./vesting/module/v1/module";
import * as _199 from "./auth/v1beta1/tx.amino";
import * as _200 from "./authz/v1beta1/tx.amino";
import * as _201 from "./bank/v1beta1/tx.amino";
import * as _202 from "./benchmark/v1/tx.amino";
import * as _203 from "./circuit/v1/tx.amino";
import * as _204 from "./consensus/v1/tx.amino";
import * as _205 from "./counter/v1/tx.amino";
import * as _206 from "./crisis/v1beta1/tx.amino";
import * as _207 from "./distribution/v1beta1/tx.amino";
import * as _208 from "./evidence/v1beta1/tx.amino";
import * as _209 from "./feegrant/v1beta1/tx.amino";
import * as _210 from "./gov/v1/tx.amino";
import * as _211 from "./gov/v1beta1/tx.amino";
import * as _212 from "./group/v1/tx.amino";
import * as _213 from "./protocolpool/v1/tx.amino";
import * as _214 from "./slashing/v1beta1/tx.amino";
import * as _215 from "./staking/v1beta1/tx.amino";
import * as _216 from "./upgrade/v1beta1/tx.amino";
import * as _217 from "./auth/v1beta1/tx.registry";
import * as _218 from "./authz/v1beta1/tx.registry";
import * as _219 from "./bank/v1beta1/tx.registry";
import * as _220 from "./benchmark/v1/tx.registry";
import * as _221 from "./circuit/v1/tx.registry";
import * as _222 from "./consensus/v1/tx.registry";
import * as _223 from "./counter/v1/tx.registry";
import * as _224 from "./crisis/v1beta1/tx.registry";
import * as _225 from "./distribution/v1beta1/tx.registry";
import * as _226 from "./evidence/v1beta1/tx.registry";
import * as _227 from "./feegrant/v1beta1/tx.registry";
import * as _228 from "./gov/v1/tx.registry";
import * as _229 from "./gov/v1beta1/tx.registry";
import * as _230 from "./group/v1/tx.registry";
import * as _231 from "./protocolpool/v1/tx.registry";
import * as _232 from "./slashing/v1beta1/tx.registry";
import * as _233 from "./staking/v1beta1/tx.registry";
import * as _234 from "./upgrade/v1beta1/tx.registry";
import * as _235 from "./auth/v1beta1/query.lcd";
import * as _236 from "./authz/v1beta1/query.lcd";
import * as _237 from "./bank/v1beta1/query.lcd";
import * as _238 from "./base/node/v1beta1/query.lcd";
import * as _239 from "./base/tendermint/v1beta1/query.lcd";
import * as _240 from "./circuit/v1/query.lcd";
import * as _241 from "./consensus/v1/query.lcd";
import * as _242 from "./distribution/v1beta1/query.lcd";
import * as _243 from "./epochs/v1beta1/query.lcd";
import * as _244 from "./evidence/v1beta1/query.lcd";
import * as _245 from "./feegrant/v1beta1/query.lcd";
import * as _246 from "./gov/v1/query.lcd";
import * as _247 from "./gov/v1beta1/query.lcd";
import * as _248 from "./group/v1/query.lcd";
import * as _249 from "./protocolpool/v1/query.lcd";
import * as _250 from "./slashing/v1beta1/query.lcd";
import * as _251 from "./staking/v1beta1/query.lcd";
import * as _252 from "./tx/v1beta1/service.lcd";
import * as _253 from "./upgrade/v1beta1/query.lcd";
import * as _254 from "./auth/v1beta1/query.rpc.Query";
import * as _255 from "./authz/v1beta1/query.rpc.Query";
import * as _256 from "./bank/v1beta1/query.rpc.Query";
import * as _257 from "./base/node/v1beta1/query.rpc.Service";
import * as _258 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _259 from "./circuit/v1/query.rpc.Query";
import * as _260 from "./consensus/v1/query.rpc.Query";
import * as _261 from "./counter/v1/query.rpc.Query";
import * as _262 from "./distribution/v1beta1/query.rpc.Query";
import * as _263 from "./epochs/v1beta1/query.rpc.Query";
import * as _264 from "./evidence/v1beta1/query.rpc.Query";
import * as _265 from "./feegrant/v1beta1/query.rpc.Query";
import * as _266 from "./gov/v1/query.rpc.Query";
import * as _267 from "./gov/v1beta1/query.rpc.Query";
import * as _268 from "./group/v1/query.rpc.Query";
import * as _269 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _270 from "./protocolpool/v1/query.rpc.Query";
import * as _271 from "./slashing/v1beta1/query.rpc.Query";
import * as _272 from "./staking/v1beta1/query.rpc.Query";
import * as _273 from "./tx/v1beta1/service.rpc.Service";
import * as _274 from "./upgrade/v1beta1/query.rpc.Query";
import * as _275 from "./auth/v1beta1/tx.rpc.msg";
import * as _276 from "./authz/v1beta1/tx.rpc.msg";
import * as _277 from "./bank/v1beta1/tx.rpc.msg";
import * as _278 from "./benchmark/v1/tx.rpc.msg";
import * as _279 from "./circuit/v1/tx.rpc.msg";
import * as _280 from "./consensus/v1/tx.rpc.msg";
import * as _281 from "./counter/v1/tx.rpc.msg";
import * as _282 from "./crisis/v1beta1/tx.rpc.msg";
import * as _283 from "./distribution/v1beta1/tx.rpc.msg";
import * as _284 from "./evidence/v1beta1/tx.rpc.msg";
import * as _285 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _286 from "./gov/v1/tx.rpc.msg";
import * as _287 from "./gov/v1beta1/tx.rpc.msg";
import * as _288 from "./group/v1/tx.rpc.msg";
import * as _289 from "./protocolpool/v1/tx.rpc.msg";
import * as _290 from "./slashing/v1beta1/tx.rpc.msg";
import * as _291 from "./staking/v1beta1/tx.rpc.msg";
import * as _292 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _353 from "./lcd";
import * as _354 from "./rpc.query";
import * as _355 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._2
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._3
      };
    }
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._199,
      ..._217,
      ..._235,
      ..._254,
      ..._275
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._8
      };
    }
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._200,
      ..._218,
      ..._236,
      ..._255,
      ..._276
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._14
      };
    }
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._201,
      ..._219,
      ..._237,
      ..._256,
      ..._277
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._20
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._21,
        ..._238,
        ..._257
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._22
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._23
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._24,
        ..._25,
        ..._239,
        ..._258
      };
    }
    export const v1beta1 = {
      ..._26
    };
  }
  export namespace benchmark {
    export namespace module {
      export const v1 = {
        ..._27
      };
    }
    export const v1 = {
      ..._28,
      ..._29,
      ..._202,
      ..._220,
      ..._278
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._30
      };
    }
    export const v1 = {
      ..._31,
      ..._32,
      ..._33,
      ..._203,
      ..._221,
      ..._240,
      ..._259,
      ..._279
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._34
      };
    }
    export const v1 = {
      ..._35,
      ..._36,
      ..._204,
      ..._222,
      ..._241,
      ..._260,
      ..._280
    };
  }
  export namespace counter {
    export namespace module {
      export const v1 = {
        ..._37
      };
    }
    export const v1 = {
      ..._38,
      ..._39,
      ..._205,
      ..._223,
      ..._261,
      ..._281
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._40
      };
    }
    export const v1beta1 = {
      ..._41,
      ..._42,
      ..._206,
      ..._224,
      ..._282
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._43
    };
    export namespace hd {
      export const v1 = {
        ..._44
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._45
      };
    }
    export const multisig = {
      ..._46
    };
    export const secp256k1 = {
      ..._47
    };
    export const secp256r1 = {
      ..._48
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._49
      };
    }
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._207,
      ..._225,
      ..._242,
      ..._262,
      ..._283
    };
  }
  export namespace epochs {
    export namespace module {
      export const v1 = {
        ..._54
      };
    }
    export const v1beta1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._243,
      ..._263
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._58
      };
    }
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._208,
      ..._226,
      ..._244,
      ..._264,
      ..._284
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._63
      };
    }
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._209,
      ..._227,
      ..._245,
      ..._265,
      ..._285
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._68
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._69
      };
    }
    export const v1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._210,
      ..._228,
      ..._246,
      ..._266,
      ..._286
    };
    export const v1beta1 = {
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._211,
      ..._229,
      ..._247,
      ..._267,
      ..._287
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._78
      };
    }
    export const v1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._212,
      ..._230,
      ..._248,
      ..._268,
      ..._288
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._84
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._85
      };
    }
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._86
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._87
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._88
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._89,
        ..._269
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._90
      };
    }
  }
  export namespace protocolpool {
    export namespace module {
      export const v1 = {
        ..._91
      };
    }
    export const v1 = {
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._213,
      ..._231,
      ..._249,
      ..._270,
      ..._289
    };
  }
  export namespace query {
    export const v1 = {
      ..._96
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._97
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._98
      };
    }
    export const v1beta1 = {
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._214,
      ..._232,
      ..._250,
      ..._271,
      ..._290
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._103
      };
    }
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._215,
      ..._233,
      ..._251,
      ..._272,
      ..._291
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._109
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._110
      };
    }
    export namespace streaming {
      export const abci = {
        ..._111
      };
    }
    export const v1beta1 = {
      ..._112,
      ..._113
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._114
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._115
      };
    }
    export const v1beta1 = {
      ..._116,
      ..._117,
      ..._252,
      ..._273
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._118
      };
    }
    export const v1beta1 = {
      ..._119,
      ..._120,
      ..._121,
      ..._216,
      ..._234,
      ..._253,
      ..._274,
      ..._292
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._122
      };
    }
  }
  export const ClientFactory = {
    ..._353,
    ..._354,
    ..._355
  };
}