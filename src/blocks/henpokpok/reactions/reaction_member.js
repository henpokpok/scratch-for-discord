import * as Blockly from "blockly";


const blockName = "react_member";

const blockData = {
    "message0": "Reacting member",
    "colour": "#3CDA44",
    "tooltip":"react,remove reaction",
    "output": "Member"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["reaction.message.guild.members.cache.get(user.id)", Blockly.JavaScript.ORDER_NONE];
    return code;
};

