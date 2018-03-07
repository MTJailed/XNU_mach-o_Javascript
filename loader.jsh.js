if(typeof EndianReader === "undefined")
{
	throw new Error("Please include endianreader.jsh.js.");
}

var mach_header = function mach_header()
{
	this.magic = 0;
	this.cputype = 0;
	this.cpusubtype = 0;
	this.filetype = 0;
	this.ncmds = 0;
	this.sizeofcmds = 0;
	this.flags = 0;
};

let MH_MAGIC = 0xfeedface;
let MH_CIGAM = EndianReader.swap32(MH_MAGIC);
let MH_OBJECT = 0x1;		/* relocatable object file */
let MH_EXECUTE	= 0x2;		/* demand paged executable file */
let MH_FVMLIB = 0x3;	/* fixed VM shared library file */
let MH_CORE = 0x4; /* core file */
let MH_PRELOAD = 0x5; /* preloaded executable file */
let MH_DYLIB = 0x6; /* dynamicly bound shared library file*/
let MH_DYLINKER = 0x7; /* dynamic link editor */
let MH_BUNDLE = 0x8; /* dynamicly bound bundle file */
let MH_NOUNDEFS	= 0x1;	/* the object file has no undefined references, can be executed */
let MH_INCRLINK	= 0x2; /* the object file is the output of an incremental link against a base file and can't be link edited again */
let MH_DYLDLINK	= 0x4; /* the object file is input for the dynamic linker and can't be staticly link edited again */
let MH_BINDATLOAD = 0x8; /* the object file's undefined references are bound by the dynamic linker when loaded. */
let MH_PREBOUND = 0x10; /* the file has it's dynamic undefined references prebound. */
let LC_SEGMENT = 0x1;
let LC_SYMTAB = 0x2;
let LC_SYMSEG = 0x3;
let LC_THREAD = 0x4;
let LC_UNIXTHREAD = 0x5;
let LC_LOADFVMLIB= 0x6;	/* load a specified fixed VM shared library */
let LC_IDFVMLIB	= 0x7;	/* fixed VM shared library identification */
let LC_IDENT = 0x8;	/* object identification info (obsolete) */
let LC_FVMFILE = 0x9;	/* fixed VM file inclusion (internal use) */
let LC_PREPAGE = 0xa;    /* prepage command (internal use) */
let LC_DYSYMTAB = 0xb;	/* dynamic link-edit symbol table info */
let LC_LOAD_DYLIB = 0xc;	/* load a dynamicly linked shared library */
let LC_ID_DYLIB	= 0xd;	/* dynamicly linked shared lib identification */
let LC_LOAD_DYLINKER = 0xe;	/* load a dynamic linker */
let LC_ID_DYLINKER = 0xf;
let LC_PREBOUND_DYLIB = 0x10;	/* modules prebound for a dynamicly */

var lc_str = function lc_str()
{
	this.magic = offset;
	this.ptr = new Array();
};

var segment_command = function segment_command()
{
	this.cmd = 0;
	this.cmdsize = 0;
	this.segname = new Uint8Array(16);
	this.vmaddr = 0;
	this.vmsize = 0;
	this.fileoff = 0;
	this.filesize = 0;
	this.maxprot = 0;
	this.initprot = 0;
	this.nsects = 0;
	this.flags = 0;
};

let SG_HIGHVM = 0x1;
let SG_FVMLIB = 0x2;
let SG_NORELOC = 0x4;

var section = function section()
{
	this.sectname = new Uint8Array(16);
	this.segname = new Uint8Array(16);
	this.addr = 0;
	this.size = 0;
	this.offset = 0;
	this.align = 0;
	this.reloff = 0;
	this.nreloc = 0;
	this.flags = 0;
	this.reserved1 = 0;
	this.reserved2 = 0;
};

let SECTION_TYPE = 0x000000ff;
let SECTION_ATTRIBUTES = 0xffffff00;
let S_REGULAR = 0x0;
let S_ZEROFILL = 0x1;
let S_CSTRING_LITERALS = 0x2;
let S_4BYTE_LITERALS = 0x3;
let S8BYTE_LITERALS = 0x4;
let S_LITERAL_POINTERS = 0x5;
let S_NON_LAZY_SYMBOL_POINTERS = 0x6;
let S_LAZY_SYMBOL_POINTERS = 0x7;
let S_SYMBOL_STUBS = 0x8;
let S_MOD_INIT_FUNC_POINTERS = 0x9;
let SECTION_ATTRIBUTES_USR = 0xff000000;
let S_ATTR_PURE_INSTRUCTIONS = 0x80000000;
let SECTION_ATTRIBUTES_SYS = 0x00ffff00;
let S_ATTR_SOME_INSTRUCTIONS = 0x0000400;
let S_ATTR_EXT_RELOC = 0x00000200;
let S_ATTR_LOC_RELOC = 0x00000100;
let SEG_PAGEZERO = "__PAGEZERO";
let SEG_TEXT = "__TEXT";
let SECT_TEXT = "__text";
let SECT_FVMLIB_INIT0 = "__fvmlib_init0";
let SECT_FVMLIB_INIT1 = "__fvmlib_init1";
let SEG_DATA = "__DATA";
let SECT_DATA = "__data";
let SECT_BSS = "__bss";
let SECT_COMMON = "__common";
let SEG_OBJC = "__OBJC";
let SECT_OBJC_SYMBOLS = "__symbol_table";
let SECT_OBJC_MODULES = "__module_info";
let SECT_OBJC_STRINGS = "__selector_strs";
let SECT_OBJC_REFS = "__selector_refs";
let SEG_ICON = "__ICON";
let SECT_ICON_HEADER = "__header";
let SECT_ICON_TIFF = "__tiff";
let SEG_LINKEDIT = "__LINKEDIT";
let SEG_UNIXSTACK = "__UNIXSTACK";

var fvmlib = function fvmlib()
{
	this.name = new lc_str(); //lc_str union
	this.minor_version = 0;
	this.header_addr = 0;
};

var fvmlib_command = function fvmlib_command()
{
	this.cmd = 0;
	this.cmdsize = 0;
	this.fvmlib = new fvmlib();
};

var dylib = function dylib()
{
	this.name = new lc_str();
	this.timestamp = 0;
	this.current_version = 0;
	this.compatibility_version = 0;
};

var dylib_command = function dylib_command()
{
	this.cmd = 0;
	this.cmdsize = 0;
	this.dylib = new dylib();
};

var prebound_dylib_command = function prebound_dylib_command()
{
	this.cmd = 0;
	this.cmdsize = 0;
	this.name = new lc_str();
	this.nmodules = 0;
	this.linked_modules = new lc_str();
};

var dylinker_command = function dylinker_command()
{
	this.cmd = 0;
	this.cmdsize = 0;
	this.name = new lc_str();
};


var thread_command = function thread_command()
{
	this.cmd = 0;
	this.cmdsize = 0;
};

var symtab_command = function symtab_command()
{
	this.cmd = 0;
	this.cmdsize = 0;
	this.symoff = 0;
	this.nsyms = 0;
	this.stroff = 0;
	this.strsize = 0;
};

var dysymtab_command = function dysymtab_command()
{
	this.cmd = 0;
	this.cmdsize = 0;
	this.ilocalsym = 0;
	this.nlocalsym = 0;
	this.iextdefsym = 0;
	this.nextdefsym = 0;
	this.iundefsym = 0;
	this.nundefsym = 0;
	this.tocoff = 0;
	this.ntoc = 0;
	this.modtaboff = 0;
	this.nmodtab = 0;
	this.extrefsymoff = 0;
	this.nextrefsyms = 0;
	this.indirectsymoff = 0;
	this.nindirectsyms = 0;
	this.extreloff = 0;
	this.nextrel = 0;
	this.locreloff = 0;
	this.nlocrel = 0;;
};

var INDIRECT_SYMBOL_LOCAL = 0x80000000;
var INDIRECT_SYMBOL_ABS = 0x40000000;

var dylib_table_of_contents = function dylib_table_of_contents()
{
	this.symbol_index = 0;
	this.module_index = 0;
};

var dylib_module = function dylib_module()
{
	this.module_name = 0;
	this.iextdefsym = 0;
	this.nextdefsym = 0;
	this.irefsym = 0;
	this.nrefsym = 0;
	this.ilocalsym = 0;
	this.nlocalsym = 0;
	this.iextrel = 0;
	this.nextrel = 0;
	this.iinit = 0;
	this.ninit = 0;
	this.objc_module_info_addr = 0;
	this.objc_module_info_size = 0;
};

var dylib_reference = function dylib_reference()
{
	this.isym = 0; //24 bits, but js doesn't need bitfields
	this.flags = 8; // 8 bits, but js doesn't need bitfields
};

var symseg_command = function symseg_command()
{
	this.cmd = 0;
	this.cmdsize = 0;
	this.offset = 0;
	this.size = 0;
};

var ident_command = function ident_command()
{
	this.cmd = 0;
	this.cmdsize = 0;
};

var fvmfile_command = function fvmfile_command()
{
	this.cmd = 0;
	this.cmdsize = 0;
	this.name = new lc_str();
	this.header_addr = 0;
};
