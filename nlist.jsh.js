var nlist = function nlist()
{
	this.n_un = {
		n_name : new Array(),
		n_strx : 0
	};
	this.n_type = 0;
	this.n_sect = 0;
	this.n_desc = 0;
	this.n_value = 0;
};

let N_STAB = 0xe0;
let N_PEXT = 0x10;
let N_TYPE = 0x0e;
let N_EXT = 0x01;
let N_UNDF = 0x0;
let N_ABS = 0x2;
let N_SECT = 0xe;
let N_PBUD = 0xc;
let N_INDR = 0xa;
let NO_SECT = 0;
let MAX_SECT = 255;
let REFERENCE_TYPE = 0xf;
let REFERENCE_FLAG_UNDEFINED_NON_LAZY = 0;
let REFERENCE_FLAG_UNDEFINED_LAZY = 1;
let REFERENCE_FLAG_DEFINED = 2;
let REFERENCE_FLAG_PRIVATE_DEFINED = 3;
let REFERENCE_FLAG_PRIVATE_UNDEFINED_NON_LAZY = 4;
let REFERENCE_FLAG_PRIVATE_UNDEFINED_LAZY = 5;
let REFERENCED_DYNAMICALLY = 0x0010;
let N_DESC_DISCARDED = 0x8000;
