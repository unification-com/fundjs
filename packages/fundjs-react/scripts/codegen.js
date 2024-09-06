"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telescope_1 = __importDefault(require("@cosmology/telescope"));
const path_1 = require("path");
const rimraf_1 = require("rimraf");
const protoDirs = [
    (0, path_1.join)(__dirname, '/../../fundjs/mainchain/proto'),
    (0, path_1.join)(__dirname, '/../../fundjs/proto')
];
const outPath = (0, path_1.join)(__dirname, '../src');
(0, rimraf_1.rimrafSync)(outPath);
(0, telescope_1.default)({
    protoDirs,
    outPath,
    options: {
        includeExternalHelpers: true,
        removeUnusedImports: true,
        tsDisable: {
            disableAll: true
        },
        interfaces: {
            enabled: true,
            useUnionTypes: true,
            useGlobalDecoderRegistry: true
        },
        prototypes: {
            enabled: true,
            addTypeUrlToDecoders: true,
            addTypeUrlToObjects: true,
            excluded: {
                packages: [
                    'cosmos.app.v1alpha1',
                    'cosmos.app.v1beta1',
                    'cosmos.autocli.v1',
                    'cosmos.base.kv.v1beta1',
                    'cosmos.base.reflection.v1beta1',
                    'cosmos.base.snapshots.v1beta1',
                    'cosmos.base.store.v1beta1',
                    'cosmos.capability.v1beta1',
                    'cosmos.genutil.v1beta1',
                    'cosmos.mint.v1beta1',
                    'cosmos.msg.v1',
                    'cosmos.nft.v1beta1',
                    'cosmos.orm.v1',
                    'cosmos.orm.v1alpha1',
                    'cosmos.params.v1beta1',
                    'cosmos.vesting.v1beta1',
                    'google.api',
                    'ibc.core.port.v1',
                    'ibc.core.types.v1',
                ]
            },
            methods: {
                fromJSON: false,
                toJSON: false,
                encode: true,
                decode: true,
                fromPartial: true,
                // toSDK: true,
                // fromSDK: true,
                toAmino: true,
                fromAmino: true,
                fromProto: true,
                toProto: true
            },
            parser: {
                keepCase: false
            },
            typingsFormat: {
                duration: 'duration',
                timestamp: 'date',
                useExact: false,
                useDeepPartial: false,
                num64: 'bigint',
                customTypes: {
                    useCosmosSDKDec: true
                }
            }
        },
        aminoEncoding: {
            enabled: true,
        },
        lcdClients: {
            enabled: true,
            bundle: true,
        },
        rpcClients: {
            enabled: true,
            bundle: true,
            camelCase: true,
            useConnectComet: true,
        },
        reactQuery: {
            enabled: true
        }
    }
})
    .then(() => {
    console.log('✨ all done!');
})
    .catch((e) => {
    console.error(e);
    process.exit(1);
});
