// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting{
    struct Candidate{
        string namel;
        uint voteCount;
    }
    mapping(uint=>Candidate) Candidates;
    uint public candidatesCount; // đếm số ứng viên
    mapping(address=>bool) hasVoted;

    address public owner;
    constructor(){
        owner=msg.sender;
    }
    modifier onlyOwner()
    {
        require(msg.sender==owner,"Only owner can call this function");
        _;
    }
    event Vote(address voter, uint CandidateId);

    function addCandidate(string memory _name) public onlyOwner {
        Candidates[candidatesCount] = Candidate(_name, 0);
        candidatesCount++;
    }
    function vote(uint _id) public {
        require(!hasVoted[msg.sender], "You have already voted");
        require(_id<candidatesCount,"Invalid Candidate Id");
        hasVoted[msg.sender]=true;
        Candidates[_id].voteCount++;
        emit Vote(msg.sender,_id);
    }
    function totalVotes() public view returns(uint){
        return candidatesCount;
    }
}
