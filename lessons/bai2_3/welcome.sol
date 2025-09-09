// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract welcome{
    string public greeting;
    address public owner;

    constructor(string memory _greeting){
        greeting = _greeting;
        owner = msg.sender;
    }
    
    function getGreeting() public view returns ( string memory){
        return greeting;
    }
}