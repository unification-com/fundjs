import { TelescopeInput } from '@cosmology/telescope';
import telescope from '@cosmology/telescope';
import { join } from 'path';
import { rimrafSync as rimraf } from 'rimraf';

import { AMINO_MAP } from './aminos';

const protoDirs: string[] = [
  join(__dirname, '/../mainchain/proto'),
  join(__dirname, '/../proto')
];
const outPath: string = join(__dirname, '../src');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    includeExternalHelpers: true,
    tsDisable: {
      disableAll: true
    },
    interfaces: {
      enabled: true,
      useUnionTypes: true,
      useGlobalDecoderRegistry: true
    },
    prototypes: {
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
      exceptions: {
        // BUG in telescope? why no workie?
        // maybe because it assumes that SDK annotations are the truth!
        '/cosmos.gov.v1beta1.MsgVote': {
          aminoType: 'cosmos-sdk/MsgVote'
        }
      }
    },
    lcdClients: {
      enabled: true,
      bundle: true,
      scoped: [
        {
          dir: 'mainchain',
          filename: 'mainchain-lcd-client.ts',
          packages: [
            'cosmos.auth.v1beta1',
            'cosmos.authz.v1beta1',
            'cosmos.bank.v1beta1',
            'cosmos.base.tendermint.v1beta1',
            'cosmos.distribution.v1beta1',
            'cosmos.evidence.v1beta1',
            'cosmos.feegrant.v1beta1',
            'cosmos.gov.v1',
            'cosmos.gov.v1beta1',
            'cosmos.group.v1',
            'cosmos.params.v1beta1',
            'cosmos.slashing.v1beta1',
            'cosmos.staking.v1beta1',
            'cosmos.tx.v1beta1',
            'cosmos.upgrade.v1beta1',
            'ibc.core.channel.v1',
            'ibc.core.client.v1',
            'ibc.core.connection.v1',
            'ibc.apps.transfer.v1',
            'mainchain.beacon.v1',
            'mainchain.enterprise.v1',
            'mainchain.stream.v1',
            'mainchain.wrkchain.v1',
          ],
          addToBundle: true,
          methodName: 'createLCDClient'
        },
      ],
    },
    rpcClients: {
      enabled: true,
      bundle: true,
      camelCase: true,
      useConnectComet: true,
      scoped: [
        {
          dir: 'mainchain',
          filename: 'mainchain-rpc-client.ts',
          packages: [
            'cosmos.auth.v1beta1',
            'cosmos.authz.v1beta1',
            'cosmos.bank.v1beta1',
            'cosmos.base.tendermint.v1beta1',
            'cosmos.distribution.v1beta1',
            'cosmos.evidence.v1beta1',
            'cosmos.feegrant.v1beta1',
            'cosmos.gov.v1',
            'cosmos.gov.v1beta1',
            'cosmos.group.v1',
            'cosmos.params.v1beta1',
            'cosmos.slashing.v1beta1',
            'cosmos.staking.v1beta1',
            'cosmos.tx.v1beta1',
            'cosmos.upgrade.v1beta1',
            'ibc.core.channel.v1',
            'ibc.core.client.v1',
            'ibc.core.connection.v1',
            'ibc.apps.transfer.v1',
            'mainchain.beacon.v1',
            'mainchain.enterprise.v1',
            'mainchain.stream.v1',
            'mainchain.wrkchain.v1',
          ],
          addToBundle: true,
          methodNameQuery: 'createRPCQueryClient',
          methodNameTx: 'createRPCTxClient'
        }
      ]
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
