var relocation_info = function relocation_info()
{
	this.r_address = 0;
	this.r_symbolnum = 0; //24 bits, but js doesn't need bitfields
	this.r_pcrel = 0;
	this.r_length = 0;
	this.r_extern = 0;
	this.r_type = 0;
};

let R_ABS = 0;
let R_SCATTERED = 0x80000000;

var scattered_relocation_info = function scattered_relocation_info(ENDIANNESS_IS_BIG)
{
	if(ENDIANNESS_IS_BIG == true)
	{
		this.r_scattered = 0;
		this.r_pcrel = 0;
		this.r_length = 0;
		this.type = 0;
		this.r_address = 0;
		this.r_value = 0;
	} else {
		this.r_address = 0;
		this.r_type = 0;
		this.r_length = 0;
		this.r_pcrel = 0;
		this.r_scattered = 0;
		this.r_value = 0;
	}
};

var reloc_type_generic = {
	"GENERIC_RELOC_VANILLA" : 0,
	"GENERIC_RELOC_PAIR" : 1,
	"GENERIC_RELOC_SECTDIFF" : 2,
	"GENERIC_RELOC_PB_LA_PTR" : 3
};