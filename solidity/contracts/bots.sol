//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.9;

import "./dependencies/ERC721A.sol";

contract OwnableDelegateProxy {}

contract ProxyRegistry {
    mapping(address => OwnableDelegateProxy) public proxies;
}

contract bots is ERC721A, Ownable {

    uint public maxSupply = 100;
    uint public price = 3 * 1e17;

    address payable payout;
    address proxyRegistryAddress;
    constructor() ERC721A("BOTS", "BOTS") 
    {
        proxyRegistryAddress = 0xa5409ec958C83C3f309868babACA7c86DCB077c1;
        Payout payout_ = new Payout();
        payout_.addRecipient(
            payable(0xa5c8622C6569383c318F750F343a5e40E3Ea26EB),
            6000
        );
        payout_.addRecipient(
            payable(0x134cA981eC91fAb7481c7ea8933A917BE86Db64b),
            1000
        );
        payout_.addRecipient(
            payable(0xaa51F1d1080C03959a075943a00f8C84B5c5B1C6),
            1000
        );
        payout_.addRecipient(
            payable(0x7886802747d02ce929C631B25eEd6D5d04F41E75),
            1000
        );                
        payout_.addRecipient(
            payable(0x5926502f96f05c6b28Bb9DFFCf4f4Cf86A5Edae8),
            500
        );
        payout_.addRecipient(
            payable(0x188a9e36a0e559F36E0cc132d7eC3e89cB2397b3),
            500
        );
        payout = payable(address(payout_));        
    }

    function mint() external payable {
        require(msg.value / price > 0, "Zero-mint");
        uint256 quantity = msg.value / price;
        require(
            _totalMinted() + quantity <= maxSupply,
            "Not enough supply"
        );
        _mint(msg.sender, quantity);
        (bool success, ) = payout.call{value: msg.value}("");
        require(success, "Payout failed");
    }

    function isApprovedForAll(address _owner, address _operator)
        public
        view
        override
        returns (bool isOperator)
    {
        ProxyRegistry proxyRegistry = ProxyRegistry(proxyRegistryAddress);
        if (address(proxyRegistry.proxies(_owner)) == _operator) return true;

        return super.isApprovedForAll(_owner, _operator);
    }

    function setProxyRegistry(address proxyRegistryAddress_)
        external
        onlyOwner
    {
        proxyRegistryAddress = proxyRegistryAddress_;
    }

    function _baseURI() internal pure override returns (string memory) {
        return 'https://botsnft.io/json/';
    }    
    
    function contractURI() pure external returns(string memory) {
        return string(abi.encodePacked(_baseURI(), 'opensea.json'));
    }  

    function _startTokenId() internal pure override returns (uint256) {
        return 1;
    }
}