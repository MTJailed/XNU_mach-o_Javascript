var EndianReader = function EndianReader()
{
	this.swap32 = function(val) {
		var string = val.toString(16);
		var result = [];
		let len = string.length - 2;
		while(len >= 0) {
			result.push(string.substr(len, 2));
			len -= 2;
		}
		return parseInt('0x'+result.join(''));
	}
};
EndianReader.swap32 = function swap32(val)
{
	var string = val.toString(16);
		var result = [];
		let len = string.length - 2;
		while(len >= 0) {
			result.push(string.substr(len, 2));
			len -= 2;
		}
		return parseInt('0x'+result.join(''));
};