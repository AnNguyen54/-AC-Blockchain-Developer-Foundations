// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRegistryV2 {
    // Struct Student
    struct Student {
        string name;
        uint age;
        bool isRegistered;
    }

    // mapping địa chỉ → Student
    mapping(address => Student) private students;

    // địa chỉ owner (người deploy)
    address public owner;

    // event khi thêm student
    event StudentRegistered(address indexed studentAddress, string name, uint age);

    // khởi tạo owner là người deploy
    constructor() {
        owner = msg.sender;
    }

    // modifier giới hạn quyền owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Chi owner moi duoc phep goi");
        _;
    }

    // chỉ owner mới được thêm sinh viên cho 1 địa chỉ
    function registerStudent(address _studentAddr, string memory _name, uint _age) public onlyOwner {
        students[_studentAddr] = Student(_name, _age, true);
        emit StudentRegistered(_studentAddr, _name, _age); // ghi log
    }

    // đọc thông tin student
    function getStudent(address _user) public view returns (string memory, uint, bool) {
        Student memory s = students[_user];
        return (s.name, s.age, s.isRegistered);
    }

    // kiểm tra student đã đăng ký chưa
    function isStudentRegistered(address _user) public view returns (bool) {
        return students[_user].isRegistered;
    }
}
