if(typeof EndianReader === "undefined")
{
	throw new Error("Please include endianreader.jsh.js.");
}
let FAT_MAGIC = 0xcafebabe;
let FAT_CIGAM = EndianReader.swap32(FAT_MAGIC);

var fat_header = function fat_header()
{
	this.magic = 0;
	this.nfat_arch = 0;
};

var fat_arch = function fat_arch()
{
	this.cputype = 0;
	this.cpusubtype = 0;
	this.offset = 0;
	this.size = 0;
	this.align = 0;
};
