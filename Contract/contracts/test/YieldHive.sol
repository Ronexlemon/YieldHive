// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
// forge create  --rpc-url  https://rpc-mumbai.maticvigil.com    --private-key 952369c437b7813b1bfb94ab753a75ed458880e05fe9e753f34ceba7147c1460  src/YieldHive.sol:LendingV2
// [⠘] Compiling...
// No files changed, compilation skipped
// Deployer: 0x65E28C9C4Ef1a756d8df1c507b7A84eFcF606fd4
// Deployed to: 0x8269021BDaCd931eE1A453330f9Fbc2a57b9Df43
// Transaction hash: 0xbbb72b5ec7488e700219e0351549ff80b50d508565a548aafe775a97d91a22ca

import "forge-std/Test.sol";
import "../src/Counter.sol";

contract CounterTest is Test {
    Counter public counter;

    function setUp() public {
        counter = new Counter();
        counter.setNumber(0);
    }

    function testIncrement() public {
        counter.increment();
        assertEq(counter.number(), 1);
    }

    function testSetNumber(uint256 x) public {
        counter.setNumber(x);
        assertEq(counter.number(), x);
    }
}
