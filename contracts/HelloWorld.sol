// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract HelloWorld {
    string hello = "Hello";

    function helloWorld() public returns (string memory) {
        return hello;
    }
}

// Verified https://goerli.etherscan.io/address/0x433F998442BfBfb82A8742492daA4D368CEc1693#code
// deployed at Contract eployed to 0x433F998442BfBfb82A8742492daA4D368CEc1693