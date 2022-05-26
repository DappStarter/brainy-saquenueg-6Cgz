require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name rifle magic concert grace inhale flock sock'; 
let testAccounts = [
"0x095ac308d0667b33163c888c0c5a6a5264110a12c8823776a242f3e667ebffad",
"0xfaec7f78f6847565057fc324a827ff4e5474f761d5c1639e5a5c653174cc0a19",
"0x60023ca91ccad7478d4bd067b08977284642863bdcd343bf1a6b331c4a6fb96f",
"0x1f5f7c2e0fd865d2832289a125fd81d4bcc9bb57074731e4948d0fcb8c1a4608",
"0xe26c9d2e9a8b62583188de8ffbfa655b5d1311fe20133dbbc65de4ca620d1f24",
"0xf1136a0c47310e35db1b23917ca2f40814afa7c27376787869feea3297f70690",
"0x304dcf7198a67e4e66689327efc90ab73e4e24b1ff7a95f4620eea13afa0270c",
"0x33268e7e4121cbc072091b68374fc6d3caf7eb8e4a640230a2752399337ccfa5",
"0xfdd60d5c4139b1124db74cdac148a4177473dae0b1e643571507fcc199479cf7",
"0xc14872892e5c6d26c196daa2bb3a7c4fc7fc95ec92b1220c47e63ab6ebdcbd20"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


