require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note remain collect hidden knock forward theory'; 
let testAccounts = [
"0x713974a94180900a4bd840dee68fea728eb6df0ef197a07f162384f64e882936",
"0x65f8154e7b209e30f717d9b28beffef75f2dc2f5eb7db46ad2bdfeecbdc3ba94",
"0x83a9c70f74a823ed935b1d0f178da0ba92e6d70dce08afd9b1be33e2fcfc5433",
"0xe3654e51d460d50d599e1c61057c4e17ab6e89596dfff27568941dcfdfacbcfe",
"0x6b74b94b1e95206edbdd7a0945d8fee31f61783468bdee8735550d4a44fe51a1",
"0xd6e47c10eab8963ae611b17f325f48788f67c46356d025d1754d86b1c087bbc4",
"0x682615345bc8618b560f83396a473506f43d78497e8090db9045c7656b1df9a3",
"0x839ceab2dfa1f1238d5a5602ee5e8c748bbb4f070c7cfd915671959c3d9b2561",
"0xabd2c93fe28e6685139630555a93e0d155627ba1da36f0c8998fc6aab94a092d",
"0x74ecde60490de2b5942f9f1259892915d8cf3bda8744760e30e81d92ee09c50a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
