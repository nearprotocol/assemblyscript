(module
 (type $FUNCSIG$iii (func (param i32 i32) (result i32)))
 (type $FUNCSIG$vi (func (param i32)))
 (type $FUNCSIG$ii (func (param i32) (result i32)))
 (type $FUNCSIG$v (func))
 (type $FUNCSIG$vj (func (param i64)))
 (type $FUNCSIG$jj (func (param i64) (result i64)))
 (type $FUNCSIG$iiii (func (param i32 i32 i32) (result i32)))
 (type $FUNCSIG$viiii (func (param i32 i32 i32 i32)))
 (type $FUNCSIG$viii (func (param i32 i32 i32)))
 (type $FUNCSIG$vjj (func (param i64 i64)))
 (type $FUNCSIG$iiiiii (func (param i32 i32 i32 i32 i32) (result i32)))
 (type $FUNCSIG$iiiii (func (param i32 i32 i32 i32) (result i32)))
 (type $FUNCSIG$vii (func (param i32 i32)))
 (type $FUNCSIG$viij (func (param i32 i32 i64)))
 (type $FUNCSIG$ij (func (param i64) (result i32)))
 (type $FUNCSIG$viji (func (param i32 i64 i32)))
 (type $FUNCSIG$jjjjjj (func (param i64 i64 i64 i64 i64) (result i64)))
 (type $FUNCSIG$jjjj (func (param i64 i64 i64) (result i64)))
 (type $FUNCSIG$i (func (result i32)))
 (type $FUNCSIG$jjj (func (param i64 i64) (result i64)))
 (type $FUNCSIG$iiji (func (param i32 i64 i32) (result i32)))
 (type $FUNCSIG$jii (func (param i32 i32) (result i64)))
 (type $FUNCSIG$ji (func (param i32) (result i64)))
 (type $FUNCSIG$j (func (result i64)))
 (type $FUNCSIG$vij (func (param i32 i64)))
 (type $FUNCSIG$iijj (func (param i32 i64 i64) (result i32)))
 (type $FUNCSIG$iiiiji (func (param i32 i32 i32 i64 i32) (result i32)))
 (type $FUNCSIG$jjjjjjjjj (func (param i64 i64 i64 i64 i64 i64 i64 i64) (result i64)))
 (type $FUNCSIG$iij (func (param i32 i64) (result i32)))
 (type $FUNCSIG$iiiiiji (func (param i32 i32 i32 i32 i64 i32) (result i32)))
 (type $FUNCSIG$jjjjjjjjjj (func (param i64 i64 i64 i64 i64 i64 i64 i64 i64) (result i64)))
 (import "env" "input" (func $~lib/nearEntry/input (param i64)))
 (import "env" "register_len" (func $~lib/nearEntry/register_len (param i64) (result i64)))
 (import "env" "panic" (func $~lib/nearEntry/panic))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (import "env" "read_register" (func $~lib/nearEntry/read_register (param i64 i64)))
 (import "env" "value_return" (func $~lib/nearEntry/value_return (param i64 i64)))
 (import "env" "storage_write" (func $~lib/near-runtime-ts/runtime_api/runtime_api.storage_write (param i64 i64 i64 i64 i64) (result i64)))
 (import "env" "storage_read" (func $~lib/near-runtime-ts/runtime_api/runtime_api.storage_read (param i64 i64 i64) (result i64)))
 (import "env" "register_len" (func $~lib/near-runtime-ts/runtime_api/runtime_api.register_len (param i64) (result i64)))
 (import "env" "read_register" (func $~lib/near-runtime-ts/runtime_api/runtime_api.read_register (param i64 i64)))
 (import "env" "storage_iter_prefix" (func $~lib/near-runtime-ts/runtime_api/runtime_api.storage_iter_prefix (param i64 i64) (result i64)))
 (import "env" "storage_iter_next" (func $~lib/near-runtime-ts/runtime_api/runtime_api.storage_iter_next (param i64 i64 i64) (result i64)))
 (import "env" "storage_usage" (func $~lib/near-runtime-ts/runtime_api/runtime_api.storage_usage (result i64)))
 (import "env" "storage_remove" (func $~lib/near-runtime-ts/runtime_api/runtime_api.storage_remove (param i64 i64 i64) (result i64)))
 (import "env" "log_utf8" (func $~lib/near-runtime-ts/runtime_api/runtime_api.log_utf8 (param i64 i64)))
 (import "env" "promise_create" (func $~lib/near-runtime-ts/runtime_api/runtime_api.promise_create (param i64 i64 i64 i64 i64 i64 i64 i64) (result i64)))
 (import "env" "current_account_id" (func $~lib/near-runtime-ts/runtime_api/runtime_api.current_account_id (param i64)))
 (import "env" "promise_then" (func $~lib/near-runtime-ts/runtime_api/runtime_api.promise_then (param i64 i64 i64 i64 i64 i64 i64 i64 i64) (result i64)))
 (import "env" "promise_return" (func $~lib/near-runtime-ts/runtime_api/runtime_api.promise_return (param i64)))
 (import "env" "promise_results_count" (func $~lib/near-runtime-ts/runtime_api/runtime_api.promise_results_count (result i64)))
 (import "env" "promise_result" (func $~lib/near-runtime-ts/runtime_api/runtime_api.promise_result (param i64 i64) (result i64)))
 (memory $0 1)
 (data (i32.const 8) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00:\00l\00e\00n\00")
 (data (i32.const 32) "\0c\00\00\00\01\00\00\00\01\00\00\00\0c\00\00\00:\00f\00r\00o\00n\00t\00")
 (data (i32.const 64) "\n\00\00\00\01\00\00\00\01\00\00\00\n\00\00\00:\00b\00a\00c\00k\00")
 (data (i32.const 96) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00:\00:\00")
 (data (i32.const 120) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00:\00r\00")
 (data (i32.const 144) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00t\00r\00u\00e\00")
 (data (i32.const 168) "\n\00\00\00\01\00\00\00\01\00\00\00\n\00\00\00f\00a\00l\00s\00e\00")
 (data (i32.const 200) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00n\00u\00l\00l\00")
 (data (i32.const 224) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\000\00")
 (data (i32.const 248) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\009\00")
 (data (i32.const 272) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00A\00")
 (data (i32.const 296) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00a\00")
 (data (i32.const 320) " \00\00\00\01\00\00\00\01\00\00\00 \00\00\000\001\002\003\004\005\006\007\008\009\00a\00b\00c\00d\00e\00f\00")
 (data (i32.const 368) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00=\00")
 (data (i32.const 392) "\80\00\00\00\01\00\00\00\01\00\00\00\80\00\00\00A\00B\00C\00D\00E\00F\00G\00H\00I\00J\00K\00L\00M\00N\00O\00P\00Q\00R\00S\00T\00U\00V\00W\00X\00Y\00Z\00a\00b\00c\00d\00e\00f\00g\00h\00i\00j\00k\00l\00m\00n\00o\00p\00q\00r\00s\00t\00u\00v\00w\00x\00y\00z\000\001\002\003\004\005\006\007\008\009\00+\00/\00")
 (data (i32.const 536) "\1c\00\00\00\01\00\00\00\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h\00")
 (data (i32.const 584) "&\00\00\00\01\00\00\00\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s\00")
 (data (i32.const 640) "\00\00\00\00\01\00\00\00\01\00\00\00\00\00\00\00")
 (data (i32.const 656) "$\00\00\00\01\00\00\00\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e\00")
 (data (i32.const 712) "$\00\00\00\01\00\00\00\01\00\00\00$\00\00\00~\00l\00i\00b\00/\00t\00y\00p\00e\00d\00a\00r\00r\00a\00y\00.\00t\00s\00")
 (data (i32.const 768) "(\00\00\00\01\00\00\00\01\00\00\00(\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00i\00n\00p\00u\00t\00 \00e\00n\00d\00")
 (data (i32.const 824) "F\00\00\00\01\00\00\00\01\00\00\00F\00\00\00~\00l\00i\00b\00/\00a\00s\00s\00e\00m\00b\00l\00y\00s\00c\00r\00i\00p\00t\00-\00j\00s\00o\00n\00/\00d\00e\00c\00o\00d\00e\00r\00.\00t\00s\00")
 (data (i32.const 912) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00{\00")
 (data (i32.const 936) ",\00\00\00\01\00\00\00\01\00\00\00,\00\00\00a\00s\00s\00e\00m\00b\00l\00y\00/\00h\00e\00l\00l\00o\00/\00m\00a\00i\00n\00.\00t\00s\00")
 (data (i32.const 1000) "0\00\00\00\01\00\00\00\01\00\00\000\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00o\00b\00j\00e\00c\00t\00 \00f\00i\00e\00l\00d\00 \00")
 (data (i32.const 1064) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00}\00")
 (data (i32.const 1088) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00,\00")
 (data (i32.const 1112) "\18\00\00\00\01\00\00\00\01\00\00\00\18\00\00\00E\00x\00p\00e\00c\00t\00e\00d\00 \00\'\00,\00\'\00")
 (data (i32.const 1152) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00\"\00")
 (data (i32.const 1176) ":\00\00\00\01\00\00\00\01\00\00\00:\00\00\00E\00x\00p\00e\00c\00t\00e\00d\00 \00d\00o\00u\00b\00l\00e\00-\00q\00u\00o\00t\00e\00d\00 \00s\00t\00r\00i\00n\00g\00")
 (data (i32.const 1256) "^\00\00\00\01\00\00\00\01\00\00\00^\00\00\00E\00l\00e\00m\00e\00n\00t\00 \00t\00y\00p\00e\00 \00m\00u\00s\00t\00 \00b\00e\00 \00n\00u\00l\00l\00a\00b\00l\00e\00 \00i\00f\00 \00a\00r\00r\00a\00y\00 \00i\00s\00 \00h\00o\00l\00e\00y\00")
 (data (i32.const 1368) "\1a\00\00\00\01\00\00\00\01\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s\00")
 (data (i32.const 1416) "8\00\00\00\01\00\00\00\01\00\00\008\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00c\00o\00n\00t\00r\00o\00l\00 \00c\00h\00a\00r\00a\00c\00t\00e\00r\00")
 (data (i32.const 1488) "\1c\00\00\00\01\00\00\00\01\00\00\00\1c\00\00\00~\00l\00i\00b\00/\00s\00t\00r\00i\00n\00g\00.\00t\00s\00")
 (data (i32.const 1536) "\1e\00\00\00\01\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00s\00t\00u\00b\00.\00t\00s\00")
 (data (i32.const 1584) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00\\\00")
 (data (i32.const 1608) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00/\00")
 (data (i32.const 1632) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00b\00")
 (data (i32.const 1656) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00\08\00")
 (data (i32.const 1680) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00n\00")
 (data (i32.const 1704) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00\n\00")
 (data (i32.const 1728) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00r\00")
 (data (i32.const 1752) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00\0d\00")
 (data (i32.const 1776) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00t\00")
 (data (i32.const 1800) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00\t\00")
 (data (i32.const 1824) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00u\00")
 (data (i32.const 1848) "&\00\00\00\01\00\00\00\01\00\00\00&\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00\\\00u\00 \00d\00i\00g\00i\00t\00")
 (data (i32.const 1904) "<\00\00\00\01\00\00\00\01\00\00\00<\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00e\00s\00c\00a\00p\00e\00d\00 \00c\00h\00a\00r\00a\00c\00t\00e\00r\00:\00 \00")
 (data (i32.const 1984) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00:\00")
 (data (i32.const 2008) "\18\00\00\00\01\00\00\00\01\00\00\00\18\00\00\00E\00x\00p\00e\00c\00t\00e\00d\00 \00\'\00:\00\'\00")
 (data (i32.const 2048) "0\00\00\00\01\00\00\00\01\00\00\000\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00e\00n\00d\00 \00o\00f\00 \00o\00b\00j\00e\00c\00t\00")
 (data (i32.const 2112) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00[\00")
 (data (i32.const 2136) ".\00\00\00\01\00\00\00\01\00\00\00.\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00a\00r\00r\00a\00y\00 \00f\00i\00e\00l\00d\00 \00")
 (data (i32.const 2200) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00]\00")
 (data (i32.const 2224) ".\00\00\00\01\00\00\00\01\00\00\00.\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00e\00n\00d\00 \00o\00f\00 \00a\00r\00r\00a\00y\00")
 (data (i32.const 2288) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00n\00a\00m\00e\00")
 (data (i32.const 2312) "0\00\00\00\01\00\00\00\01\00\00\000\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00s\00t\00r\00i\00n\00g\00 \00f\00i\00e\00l\00d\00 \00")
 (data (i32.const 2376) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00 \00:\00 \00\"\00")
 (data (i32.const 2400) "\14\00\00\00\01\00\00\00\01\00\00\00\14\00\00\00E\00x\00p\00e\00c\00t\00e\00d\00 \00\'\00")
 (data (i32.const 2440) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00\'\00")
 (data (i32.const 2464) ",\00\00\00\01\00\00\00\01\00\00\00,\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00b\00o\00o\00l\00 \00f\00i\00e\00l\00d\00 \00")
 (data (i32.const 2528) "\06\00\00\00\01\00\00\00\01\00\00\00\06\00\00\00 \00:\00 \00")
 (data (i32.const 2552) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00-\00")
 (data (i32.const 2576) "2\00\00\00\01\00\00\00\01\00\00\002\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00i\00n\00t\00e\00g\00e\00r\00 \00f\00i\00e\00l\00d\00 \00")
 (data (i32.const 2648) "\90\01\00\00\01\00\00\00\00\00\00\00\90\01\00\000\000\000\001\000\002\000\003\000\004\000\005\000\006\000\007\000\008\000\009\001\000\001\001\001\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\002\000\002\001\002\002\002\003\002\004\002\005\002\006\002\007\002\008\002\009\003\000\003\001\003\002\003\003\003\004\003\005\003\006\003\007\003\008\003\009\004\000\004\001\004\002\004\003\004\004\004\005\004\006\004\007\004\008\004\009\005\000\005\001\005\002\005\003\005\004\005\005\005\006\005\007\005\008\005\009\006\000\006\001\006\002\006\003\006\004\006\005\006\006\006\007\006\008\006\009\007\000\007\001\007\002\007\003\007\004\007\005\007\006\007\007\007\008\007\009\008\000\008\001\008\002\008\003\008\004\008\005\008\006\008\007\008\008\008\009\009\000\009\001\009\002\009\003\009\004\009\005\009\006\009\007\009\008\009\009\00")
 (data (i32.const 3064) "\10\00\00\00\01\00\00\00\0e\00\00\00\10\00\00\00h\n\00\00h\n\00\00\90\01\00\00d\00\00\00")
 (data (i32.const 3096) ",\00\00\00\01\00\00\00\01\00\00\00,\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00n\00u\00l\00l\00 \00f\00i\00e\00l\00d\00 \00")
 (data (i32.const 3160) "\"\00\00\00\01\00\00\00\01\00\00\00\"\00\00\00C\00a\00n\00n\00o\00t\00 \00p\00a\00r\00s\00e\00 \00J\00S\00O\00N\00")
 (data (i32.const 3216) "\0c\00\00\00\01\00\00\00\01\00\00\00\0c\00\00\00h\00e\00l\00l\00o\00 \00")
 (data (i32.const 3248) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00\\\00\"\00")
 (data (i32.const 3272) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00\\\00\\\00")
 (data (i32.const 3296) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00\\\00b\00")
 (data (i32.const 3320) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00\\\00n\00")
 (data (i32.const 3344) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00\\\00r\00")
 (data (i32.const 3368) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00\\\00t\00")
 (data (i32.const 3392) "H\00\00\00\01\00\00\00\01\00\00\00H\00\00\00U\00n\00s\00u\00p\00p\00o\00r\00t\00e\00d\00 \00c\00o\00n\00t\00r\00o\00l\00 \00c\00h\00a\00r\00a\00c\00t\00e\00r\00 \00c\00o\00d\00e\00:\00 \00")
 (data (i32.const 3480) "F\00\00\00\01\00\00\00\01\00\00\00F\00\00\00~\00l\00i\00b\00/\00a\00s\00s\00e\00m\00b\00l\00y\00s\00c\00r\00i\00p\00t\00-\00j\00s\00o\00n\00/\00e\00n\00c\00o\00d\00e\00r\00.\00t\00s\00")
 (data (i32.const 3568) "\06\00\00\00\01\00\00\00\01\00\00\00\06\00\00\00k\00e\00y\00")
 (data (i32.const 3592) "\n\00\00\00\01\00\00\00\01\00\00\00\n\00\00\00v\00a\00l\00u\00e\00")
 (data (i32.const 3624) "\1c\00\00\00\01\00\00\00\01\00\00\00\1c\00\00\00A\00r\00r\00a\00y\00 \00i\00s\00 \00e\00m\00p\00t\00y\00")
 (data (i32.const 3672) "\0c\00\00\00\01\00\00\00\01\00\00\00\0c\00\00\001\002\003\001\002\003\00")
 (data (i32.const 3704) "\16\00\00\00\01\00\00\00\01\00\00\00\16\00\00\00m\00a\00x\00_\00s\00t\00o\00r\00a\00g\00e\00")
 (data (i32.const 3744) "\0e\00\00\00\01\00\00\00\01\00\00\00\0e\00\00\00l\00o\00o\00o\00o\00g\001\00")
 (data (i32.const 3776) "\0e\00\00\00\01\00\00\00\01\00\00\00\0e\00\00\00l\00o\00o\00o\00o\00g\002\00")
 (data (i32.const 3808) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00H\00i\00")
 (data (i32.const 3832) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00t\00e\00s\00t\00")
 (data (i32.const 3856) "$\00\00\00\01\00\00\00\01\00\00\00$\00\00\00I\00t\00e\00m\00 \00m\00u\00s\00t\00 \00b\00e\00 \00e\00m\00p\00t\00y\00")
 (data (i32.const 3912) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00f\00r\00o\00m\00")
 (data (i32.const 3936) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00t\00o\00")
 (data (i32.const 3960) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00x\00")
 (data (i32.const 3984) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00a\00r\00g\00s\00")
 (data (i32.const 4008) ".\00\00\00\01\00\00\00\01\00\00\00.\00\00\00a\00s\00s\00e\00m\00b\00l\00y\00/\00h\00e\00l\00l\00o\00/\00m\00o\00d\00e\00l\00.\00t\00s\00")
 (data (i32.const 4072) "\18\00\00\00\01\00\00\00\01\00\00\00\18\00\00\00c\00a\00l\00l\00b\00a\00c\00k\00A\00r\00g\00s\00")
 (data (i32.const 4112) "\10\00\00\00\01\00\00\00\01\00\00\00\10\00\00\00r\00e\00c\00e\00i\00v\00e\00r\00")
 (data (i32.const 4144) "\14\00\00\00\01\00\00\00\01\00\00\00\14\00\00\00m\00e\00t\00h\00o\00d\00N\00a\00m\00e\00")
 (data (i32.const 4184) "\10\00\00\00\01\00\00\00\01\00\00\00\10\00\00\00c\00a\00l\00l\00b\00a\00c\00k\00")
 (data (i32.const 4216) "\06\00\00\00\01\00\00\00\01\00\00\00\06\00\00\00g\00a\00s\00")
 (data (i32.const 4240) "\0e\00\00\00\01\00\00\00\01\00\00\00\0e\00\00\00b\00a\00l\00a\00n\00c\00e\00")
 (data (i32.const 4272) "\1e\00\00\00\01\00\00\00\01\00\00\00\1e\00\00\00c\00a\00l\00l\00b\00a\00c\00k\00B\00a\00l\00a\00n\00c\00e\00")
 (data (i32.const 4320) "\16\00\00\00\01\00\00\00\01\00\00\00\16\00\00\00c\00a\00l\00l\00b\00a\00c\00k\00G\00a\00s\00")
 (data (i32.const 4360) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00r\00s\00")
 (data (i32.const 4384) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00o\00k\00")
 (data (i32.const 4408) "(\00\00\00\01\00\00\00\01\00\00\00(\00\00\00n\00a\00m\00e\00 \00s\00h\00o\00u\00l\00d\00 \00b\00e\00 \00n\00u\00l\00l\00.\00")
 (data (i32.const 4464) "\"\00\00\00\01\00\00\00\01\00\00\00\"\00\00\00~\00l\00i\00b\00/\00n\00e\00a\00r\00E\00n\00t\00r\00y\00.\00t\00s\00")
 (data (i32.const 4520) "\14\00\00\00\01\00\00\00\01\00\00\00\14\00\00\00l\00a\00s\00t\00R\00e\00s\00u\00l\00t\00")
 (data (i32.const 4560) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00i\00t\00e\00m\00")
 (data (i32.const 4584) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00l\00o\00g\001\00")
 (data (i32.const 4608) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00l\00o\00g\002\00")
 (data (i32.const 4632) "\"\00\00\00\01\00\00\00\01\00\00\00\"\00\00\00l\00o\00g\00 \00b\00e\00f\00o\00r\00e\00 \00a\00s\00s\00e\00r\00t\00")
 (data (i32.const 4688) " \00\00\00\01\00\00\00\01\00\00\00 \00\00\00e\00x\00p\00e\00c\00t\00e\00d\00 \00t\00o\00 \00f\00a\00i\00l\00")
 (data (i32.const 4736) "D\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\00\00\00\001\00\00\00\02\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\07\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00\93 \00\00\02\00\00\00\93\04\00\00\02\00\00\00\93\00\00\00\02\00\00\00\10\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\83 \00\00\02\00\00\00\10\00\00\00\00\00\00\00\93 \00\00\02\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\10\00\00\00\08\00\00\00\10\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00")
 (table $0 1 funcref)
 (elem (i32.const 0) $null)
 (global $~lib/rt/stub/startOffset (mut i32) (i32.const 0))
 (global $~lib/rt/stub/offset (mut i32) (i32.const 0))
 (global $~lib/near-runtime-ts/storage/storage (mut i32) (i32.const 0))
 (global $~lib/near-runtime-ts/collections/index/collections._KEY_LENGTH_SUFFIX i32 (i32.const 24))
 (global $~lib/near-runtime-ts/collections/index/collections._KEY_FRONT_INDEX_SUFFIX i32 (i32.const 48))
 (global $~lib/near-runtime-ts/collections/index/collections._KEY_BACK_INDEX_SUFFIX i32 (i32.const 80))
 (global $~lib/near-runtime-ts/collections/index/collections._KEY_ELEMENT_SUFFIX i32 (i32.const 112))
 (global $~lib/near-runtime-ts/collections/index/collections._KEY_RATING_SUFFIX i32 (i32.const 136))
 (global $~lib/near-runtime-ts/collections/index/collections._RATING_OFFSET i64 (i64.const 2147483648))
 (global $~lib/assemblyscript-json/decoder/TRUE_STR i32 (i32.const 160))
 (global $~lib/assemblyscript-json/decoder/FALSE_STR i32 (i32.const 184))
 (global $~lib/assemblyscript-json/decoder/NULL_STR i32 (i32.const 216))
 (global $~lib/assemblyscript-json/decoder/CHAR_0 (mut i32) (i32.const 0))
 (global $~lib/assemblyscript-json/decoder/CHAR_9 (mut i32) (i32.const 0))
 (global $~lib/assemblyscript-json/decoder/CHAR_A (mut i32) (i32.const 0))
 (global $~lib/assemblyscript-json/decoder/CHAR_A_LOWER (mut i32) (i32.const 0))
 (global $~lib/bignum/utils/HEX_CHARS i32 (i32.const 336))
 (global $~lib/bignum/globals/__divmod_quot_lo (mut i64) (i64.const 0))
 (global $~lib/bignum/globals/__divmod_quot_hi (mut i64) (i64.const 0))
 (global $~lib/bignum/globals/__divmod_rem (mut i64) (i64.const 0))
 (global $~lib/bignum/globals/__res128_lo (mut i64) (i64.const 0))
 (global $~lib/bignum/globals/__res128_hi (mut i64) (i64.const 0))
 (global $~lib/bignum/globals/__float_u128_lo (mut i64) (i64.const 0))
 (global $~lib/bignum/globals/__float_u128_hi (mut i64) (i64.const 0))
 (global $~lib/near-runtime-ts/contract/context (mut i32) (i32.const 0))
 (global $~lib/near-runtime-ts/base64/base64.PADCHAR i32 (i32.const 384))
 (global $~lib/near-runtime-ts/base64/base64.ALPHA i32 (i32.const 408))
 (global $~lib/builtins/u32.MAX_VALUE i32 (i32.const -1))
 (global $~lib/number/U32.MAX_VALUE i32 (i32.const -1))
 (global $~lib/ASC_SHRINK_LEVEL i32 (i32.const 0))
 (global $~lib/argc (mut i32) (i32.const 0))
 (global $~lib/nearEntry/PrimitiveHandler.String (mut i32) (i32.const 0))
 (global $~lib/nearEntry/PrimitiveHandler.Boolean (mut i32) (i32.const 0))
 (global $~lib/nearEntry/PrimitiveHandler.U64 (mut i32) (i32.const 0))
 (global $~lib/nearEntry/PrimitiveHandler.I64 (mut i32) (i32.const 0))
 (global $~lib/nearEntry/PrimitiveHandler.U32 (mut i32) (i32.const 0))
 (global $~lib/nearEntry/PrimitiveHandler.I32 (mut i32) (i32.const 0))
 (global $~lib/builtins/i32.MAX_VALUE i32 (i32.const 2147483647))
 (global $~lib/rt/__rtti_base i32 (i32.const 4736))
 (global $~lib/heap/__heap_base i32 (i32.const 5284))
 (export "memory" (memory $0))
 (export "__alloc" (func $~lib/rt/stub/__alloc))
 (export "__retain" (func $~lib/rt/stub/__retain))
 (export "__release" (func $~lib/rt/stub/__release))
 (export "__collect" (func $~lib/rt/stub/__collect))
 (export "__rtti_base" (global $~lib/rt/__rtti_base))
 (export "hello" (func $assembly/hello/main/__wrapper_hello))
 (export "setKeyValue" (func $assembly/hello/main/__wrapper_setKeyValue))
 (export "getValueByKey" (func $assembly/hello/main/__wrapper_getValueByKey))
 (export "setValue" (func $assembly/hello/main/__wrapper_setValue))
 (export "getValue" (func $assembly/hello/main/__wrapper_getValue))
 (export "getAllKeys" (func $assembly/hello/main/__wrapper_getAllKeys))
 (export "benchmark" (func $assembly/hello/main/__wrapper_benchmark))
 (export "benchmark_storage" (func $assembly/hello/main/__wrapper_benchmark_storage))
 (export "limited_storage" (func $assembly/hello/main/__wrapper_limited_storage))
 (export "benchmark_sum_n" (func $assembly/hello/main/__wrapper_benchmark_sum_n))
 (export "returnHiWithLogs" (func $assembly/hello/main/__wrapper_returnHiWithLogs))
 (export "testSetRemove" (func $assembly/hello/main/__wrapper_testSetRemove))
 (export "insertStrings" (func $assembly/hello/main/__wrapper_insertStrings))
 (export "deleteStrings" (func $assembly/hello/main/__wrapper_deleteStrings))
 (export "recurse" (func $assembly/hello/main/__wrapper_recurse))
 (export "callPromise" (func $assembly/hello/main/__wrapper_callPromise))
 (export "callbackWithName" (func $assembly/hello/main/__wrapper_callbackWithName))
 (export "getLastResult" (func $assembly/hello/main/__wrapper_getLastResult))
 (export "generateLogs" (func $assembly/hello/main/generateLogs))
 (export "triggerAssert" (func $assembly/hello/main/triggerAssert))
 (start $start)
 (func $~lib/rt/stub/maybeGrowMemory (; 21 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  memory.size
  local.set $1
  local.get $1
  i32.const 16
  i32.shl
  local.set $2
  local.get $0
  local.get $2
  i32.gt_u
  if
   local.get $0
   local.get $2
   i32.sub
   i32.const 65535
   i32.add
   i32.const 65535
   i32.const -1
   i32.xor
   i32.and
   i32.const 16
   i32.shr_u
   local.set $3
   local.get $1
   local.tee $4
   local.get $3
   local.tee $5
   local.get $4
   local.get $5
   i32.gt_s
   select
   local.set $4
   local.get $4
   memory.grow
   i32.const 0
   i32.lt_s
   if
    local.get $3
    memory.grow
    i32.const 0
    i32.lt_s
    if
     unreachable
    end
   end
  end
  local.get $0
  global.set $~lib/rt/stub/offset
 )
 (func $~lib/rt/stub/__alloc (; 22 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  i32.const 1073741808
  i32.gt_u
  if
   unreachable
  end
  global.get $~lib/rt/stub/offset
  i32.const 16
  i32.add
  local.set $2
  local.get $0
  i32.const 15
  i32.add
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  local.tee $3
  i32.const 16
  local.tee $4
  local.get $3
  local.get $4
  i32.gt_u
  select
  local.set $5
  local.get $2
  local.get $5
  i32.add
  call $~lib/rt/stub/maybeGrowMemory
  local.get $2
  i32.const 16
  i32.sub
  local.set $6
  local.get $6
  local.get $5
  i32.store
  local.get $6
  i32.const -1
  i32.store offset=4
  local.get $6
  local.get $1
  i32.store offset=8
  local.get $6
  local.get $0
  i32.store offset=12
  local.get $2
 )
 (func $~lib/rt/stub/__retain (; 23 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
 )
 (func $~lib/near-runtime-ts/storage/Storage#constructor (; 24 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 3
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
 )
 (func $start:~lib/near-runtime-ts/storage (; 25 ;) (type $FUNCSIG$v)
  global.get $~lib/heap/__heap_base
  i32.const 15
  i32.add
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  global.set $~lib/rt/stub/startOffset
  global.get $~lib/rt/stub/startOffset
  global.set $~lib/rt/stub/offset
  i32.const 0
  call $~lib/near-runtime-ts/storage/Storage#constructor
  global.set $~lib/near-runtime-ts/storage/storage
 )
 (func $~lib/string/String#get:length (; 26 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.const 16
  i32.sub
  i32.load offset=12
  i32.const 1
  i32.shr_u
 )
 (func $~lib/string/String#charCodeAt (; 27 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  call $~lib/string/String#get:length
  i32.ge_u
  if
   i32.const -1
   return
  end
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  i32.load16_u
 )
 (func $start:~lib/assemblyscript-json/decoder (; 28 ;) (type $FUNCSIG$v)
  i32.const 240
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $~lib/assemblyscript-json/decoder/CHAR_0
  i32.const 264
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $~lib/assemblyscript-json/decoder/CHAR_9
  i32.const 288
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $~lib/assemblyscript-json/decoder/CHAR_A
  i32.const 312
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
 )
 (func $start:~lib/assemblyscript-json/index (; 29 ;) (type $FUNCSIG$v)
  call $start:~lib/assemblyscript-json/decoder
 )
 (func $start:~lib/bignum/integer/u128 (; 30 ;) (type $FUNCSIG$v)
  call $start:~lib/assemblyscript-json/index
 )
 (func $start:~lib/bignum/integer/index (; 31 ;) (type $FUNCSIG$v)
  call $start:~lib/bignum/integer/u128
 )
 (func $start:~lib/bignum/index (; 32 ;) (type $FUNCSIG$v)
  call $start:~lib/bignum/integer/index
 )
 (func $~lib/near-runtime-ts/contract/Context#constructor (; 33 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 4
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
 )
 (func $start:~lib/near-runtime-ts/contract (; 34 ;) (type $FUNCSIG$v)
  call $start:~lib/bignum/index
  i32.const 0
  call $~lib/near-runtime-ts/contract/Context#constructor
  global.set $~lib/near-runtime-ts/contract/context
 )
 (func $start:~lib/near-runtime-ts/index (; 35 ;) (type $FUNCSIG$v)
  call $start:~lib/near-runtime-ts/storage
  call $start:~lib/near-runtime-ts/contract
 )
 (func $start:~lib/rt/index-stub (; 36 ;) (type $FUNCSIG$v)
  call $start:~lib/near-runtime-ts/index
 )
 (func $~lib/rt/stub/__release (; 37 ;) (type $FUNCSIG$vi) (param $0 i32)
  nop
 )
 (func $~lib/rt/stub/__collect (; 38 ;) (type $FUNCSIG$v)
  nop
 )
 (func $~lib/memory/memory.fill (; 39 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i64)
  block $~lib/util/memory/memset|inlined.0
   local.get $0
   local.set $5
   local.get $1
   local.set $4
   local.get $2
   local.set $3
   local.get $3
   i32.eqz
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   local.get $4
   i32.store8
   local.get $5
   local.get $3
   i32.add
   i32.const 1
   i32.sub
   local.get $4
   i32.store8
   local.get $3
   i32.const 2
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   i32.const 1
   i32.add
   local.get $4
   i32.store8
   local.get $5
   i32.const 2
   i32.add
   local.get $4
   i32.store8
   local.get $5
   local.get $3
   i32.add
   i32.const 2
   i32.sub
   local.get $4
   i32.store8
   local.get $5
   local.get $3
   i32.add
   i32.const 3
   i32.sub
   local.get $4
   i32.store8
   local.get $3
   i32.const 6
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   i32.const 3
   i32.add
   local.get $4
   i32.store8
   local.get $5
   local.get $3
   i32.add
   i32.const 4
   i32.sub
   local.get $4
   i32.store8
   local.get $3
   i32.const 8
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   i32.const 0
   local.get $5
   i32.sub
   i32.const 3
   i32.and
   local.set $6
   local.get $5
   local.get $6
   i32.add
   local.set $5
   local.get $3
   local.get $6
   i32.sub
   local.set $3
   local.get $3
   i32.const -4
   i32.and
   local.set $3
   i32.const -1
   i32.const 255
   i32.div_u
   local.get $4
   i32.const 255
   i32.and
   i32.mul
   local.set $7
   local.get $5
   local.get $7
   i32.store
   local.get $5
   local.get $3
   i32.add
   i32.const 4
   i32.sub
   local.get $7
   i32.store
   local.get $3
   i32.const 8
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   i32.const 4
   i32.add
   local.get $7
   i32.store
   local.get $5
   i32.const 8
   i32.add
   local.get $7
   i32.store
   local.get $5
   local.get $3
   i32.add
   i32.const 12
   i32.sub
   local.get $7
   i32.store
   local.get $5
   local.get $3
   i32.add
   i32.const 8
   i32.sub
   local.get $7
   i32.store
   local.get $3
   i32.const 24
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   i32.const 12
   i32.add
   local.get $7
   i32.store
   local.get $5
   i32.const 16
   i32.add
   local.get $7
   i32.store
   local.get $5
   i32.const 20
   i32.add
   local.get $7
   i32.store
   local.get $5
   i32.const 24
   i32.add
   local.get $7
   i32.store
   local.get $5
   local.get $3
   i32.add
   i32.const 28
   i32.sub
   local.get $7
   i32.store
   local.get $5
   local.get $3
   i32.add
   i32.const 24
   i32.sub
   local.get $7
   i32.store
   local.get $5
   local.get $3
   i32.add
   i32.const 20
   i32.sub
   local.get $7
   i32.store
   local.get $5
   local.get $3
   i32.add
   i32.const 16
   i32.sub
   local.get $7
   i32.store
   i32.const 24
   local.get $5
   i32.const 4
   i32.and
   i32.add
   local.set $6
   local.get $5
   local.get $6
   i32.add
   local.set $5
   local.get $3
   local.get $6
   i32.sub
   local.set $3
   local.get $7
   i64.extend_i32_u
   local.get $7
   i64.extend_i32_u
   i64.const 32
   i64.shl
   i64.or
   local.set $8
   block $break|0
    loop $continue|0
     local.get $3
     i32.const 32
     i32.ge_u
     i32.eqz
     br_if $break|0
     local.get $5
     local.get $8
     i64.store
     local.get $5
     i32.const 8
     i32.add
     local.get $8
     i64.store
     local.get $5
     i32.const 16
     i32.add
     local.get $8
     i64.store
     local.get $5
     i32.const 24
     i32.add
     local.get $8
     i64.store
     local.get $3
     i32.const 32
     i32.sub
     local.set $3
     local.get $5
     i32.const 32
     i32.add
     local.set $5
     br $continue|0
    end
    unreachable
   end
  end
 )
 (func $~lib/arraybuffer/ArrayBufferView#constructor (; 40 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.const 1073741808
  local.get $2
  i32.shr_u
  i32.gt_u
  if
   i32.const 552
   i32.const 600
   i32.const 14
   i32.const 56
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $2
  i32.shl
  local.tee $1
  i32.const 0
  call $~lib/rt/stub/__alloc
  local.set $3
  local.get $3
  i32.const 0
  local.get $1
  call $~lib/memory/memory.fill
  local.get $0
  i32.eqz
  if
   i32.const 12
   i32.const 2
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store offset=8
  local.get $0
  local.tee $4
  local.get $3
  local.tee $5
  local.get $4
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $5
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $5
  i32.store
  local.get $0
  local.get $3
  i32.store offset=4
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
 )
 (func $~lib/typedarray/Uint8Array#constructor (; 41 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 12
   i32.const 6
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  local.get $1
  i32.const 0
  call $~lib/arraybuffer/ArrayBufferView#constructor
  local.set $0
  local.get $0
 )
 (func $~lib/typedarray/Uint8Array#get:buffer (; 42 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load
  call $~lib/rt/stub/__retain
 )
 (func $~lib/assemblyscript-json/decoder/JSONHandler#constructor (; 43 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 7
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor (; 44 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 8
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONHandler#constructor
  local.set $0
  local.get $0
 )
 (func $assembly/hello/main/__near_ArgsParser_hello#constructor (; 45 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 16
   i32.const 9
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store8 offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#constructor (; 46 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 10
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/DecoderState#constructor (; 47 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 12
   i32.const 11
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 656
  call $~lib/rt/stub/__retain
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.get $1
  call $~lib/rt/stub/__retain
  i32.store offset=8
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/arraybuffer/ArrayBufferView#get:byteLength (; 48 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $~lib/typedarray/Uint8Array#get:length (; 49 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
 )
 (func $~lib/typedarray/Uint8Array#__get (; 50 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.load offset=8
  i32.ge_u
  if
   i32.const 672
   i32.const 728
   i32.const 135
   i32.const 44
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.add
  i32.load8_u
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#peekChar (; 51 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.ge_s
  if
   i32.const -1
   return
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  i32.load offset=4
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#isWhitespace (; 52 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 9
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 10
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 13
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 32
   i32.eq
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readChar (; 53 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.lt_s
  i32.eqz
  if
   i32.const 784
   i32.const 840
   i32.const 112
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.tee $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $1
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#skipWhitespace (; 54 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#peekChar
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#isWhitespace
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readChar
    drop
    br $continue|0
   end
   unreachable
  end
 )
 (func $~lib/util/string/compareImpl (; 55 ;) (type $FUNCSIG$iiiiii) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  local.set $5
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  local.set $6
  local.get $2
  local.get $3
  i32.const 1
  i32.shl
  i32.add
  local.set $7
  block $break|0
   loop $continue|0
    local.get $4
    if (result i32)
     local.get $6
     i32.load16_u
     local.get $7
     i32.load16_u
     i32.sub
     local.tee $5
     i32.eqz
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $4
    i32.const 1
    i32.sub
    local.set $4
    local.get $6
    i32.const 2
    i32.add
    local.set $6
    local.get $7
    i32.const 2
    i32.add
    local.set $7
    br $continue|0
   end
   unreachable
  end
  local.get $5
  local.set $8
  local.get $0
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $8
 )
 (func $~lib/string/String.__eq (; 56 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  i32.eq
  if
   i32.const 1
   local.set $2
   local.get $0
   call $~lib/rt/stub/__release
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  end
  local.get $0
  i32.const 0
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 0
   i32.eq
  end
  if
   i32.const 0
   local.set $2
   local.get $0
   call $~lib/rt/stub/__release
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  end
  local.get $0
  call $~lib/string/String#get:length
  local.set $3
  local.get $3
  local.get $1
  call $~lib/string/String#get:length
  i32.ne
  if
   i32.const 0
   local.set $2
   local.get $0
   call $~lib/rt/stub/__release
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  end
  local.get $0
  i32.const 0
  local.get $1
  i32.const 0
  local.get $3
  call $~lib/util/string/compareImpl
  i32.eqz
  local.set $2
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/string/String.__ne (; 57 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/string/String.__eq
  i32.eqz
  local.set $2
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/util/memory/memcpy (; 58 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  block $break|0
   loop $continue|0
    local.get $2
    if (result i32)
     local.get $1
     i32.const 3
     i32.and
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    local.tee $5
    i32.const 1
    i32.add
    local.set $0
    local.get $5
    local.get $1
    local.tee $5
    i32.const 1
    i32.add
    local.set $1
    local.get $5
    i32.load8_u
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $continue|0
   end
   unreachable
  end
  local.get $0
  i32.const 3
  i32.and
  i32.const 0
  i32.eq
  if
   block $break|1
    loop $continue|1
     local.get $2
     i32.const 16
     i32.ge_u
     i32.eqz
     br_if $break|1
     local.get $0
     local.get $1
     i32.load
     i32.store
     local.get $0
     i32.const 4
     i32.add
     local.get $1
     i32.const 4
     i32.add
     i32.load
     i32.store
     local.get $0
     i32.const 8
     i32.add
     local.get $1
     i32.const 8
     i32.add
     i32.load
     i32.store
     local.get $0
     i32.const 12
     i32.add
     local.get $1
     i32.const 12
     i32.add
     i32.load
     i32.store
     local.get $1
     i32.const 16
     i32.add
     local.set $1
     local.get $0
     i32.const 16
     i32.add
     local.set $0
     local.get $2
     i32.const 16
     i32.sub
     local.set $2
     br $continue|1
    end
    unreachable
   end
   local.get $2
   i32.const 8
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $0
    i32.const 4
    i32.add
    local.get $1
    i32.const 4
    i32.add
    i32.load
    i32.store
    local.get $0
    i32.const 8
    i32.add
    local.set $0
    local.get $1
    i32.const 8
    i32.add
    local.set $1
   end
   local.get $2
   i32.const 4
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $0
    i32.const 4
    i32.add
    local.set $0
    local.get $1
    i32.const 4
    i32.add
    local.set $1
   end
   local.get $2
   i32.const 2
   i32.and
   if
    local.get $0
    local.get $1
    i32.load16_u
    i32.store16
    local.get $0
    i32.const 2
    i32.add
    local.set $0
    local.get $1
    i32.const 2
    i32.add
    local.set $1
   end
   local.get $2
   i32.const 1
   i32.and
   if
    local.get $0
    local.tee $5
    i32.const 1
    i32.add
    local.set $0
    local.get $5
    local.get $1
    local.tee $5
    i32.const 1
    i32.add
    local.set $1
    local.get $5
    i32.load8_u
    i32.store8
   end
   return
  end
  local.get $2
  i32.const 32
  i32.ge_u
  if
   block $break|2
    block $case2|2
     block $case1|2
      block $case0|2
       local.get $0
       i32.const 3
       i32.and
       local.set $5
       local.get $5
       i32.const 1
       i32.eq
       br_if $case0|2
       local.get $5
       i32.const 2
       i32.eq
       br_if $case1|2
       local.get $5
       i32.const 3
       i32.eq
       br_if $case2|2
       br $break|2
      end
      local.get $1
      i32.load
      local.set $3
      local.get $0
      local.tee $5
      i32.const 1
      i32.add
      local.set $0
      local.get $5
      local.get $1
      local.tee $5
      i32.const 1
      i32.add
      local.set $1
      local.get $5
      i32.load8_u
      i32.store8
      local.get $0
      local.tee $5
      i32.const 1
      i32.add
      local.set $0
      local.get $5
      local.get $1
      local.tee $5
      i32.const 1
      i32.add
      local.set $1
      local.get $5
      i32.load8_u
      i32.store8
      local.get $0
      local.tee $5
      i32.const 1
      i32.add
      local.set $0
      local.get $5
      local.get $1
      local.tee $5
      i32.const 1
      i32.add
      local.set $1
      local.get $5
      i32.load8_u
      i32.store8
      local.get $2
      i32.const 3
      i32.sub
      local.set $2
      block $break|3
       loop $continue|3
        local.get $2
        i32.const 17
        i32.ge_u
        i32.eqz
        br_if $break|3
        local.get $1
        i32.const 1
        i32.add
        i32.load
        local.set $4
        local.get $0
        local.get $3
        i32.const 24
        i32.shr_u
        local.get $4
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 5
        i32.add
        i32.load
        local.set $3
        local.get $0
        i32.const 4
        i32.add
        local.get $4
        i32.const 24
        i32.shr_u
        local.get $3
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 9
        i32.add
        i32.load
        local.set $4
        local.get $0
        i32.const 8
        i32.add
        local.get $3
        i32.const 24
        i32.shr_u
        local.get $4
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 13
        i32.add
        i32.load
        local.set $3
        local.get $0
        i32.const 12
        i32.add
        local.get $4
        i32.const 24
        i32.shr_u
        local.get $3
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 16
        i32.add
        local.set $1
        local.get $0
        i32.const 16
        i32.add
        local.set $0
        local.get $2
        i32.const 16
        i32.sub
        local.set $2
        br $continue|3
       end
       unreachable
      end
      br $break|2
     end
     local.get $1
     i32.load
     local.set $3
     local.get $0
     local.tee $5
     i32.const 1
     i32.add
     local.set $0
     local.get $5
     local.get $1
     local.tee $5
     i32.const 1
     i32.add
     local.set $1
     local.get $5
     i32.load8_u
     i32.store8
     local.get $0
     local.tee $5
     i32.const 1
     i32.add
     local.set $0
     local.get $5
     local.get $1
     local.tee $5
     i32.const 1
     i32.add
     local.set $1
     local.get $5
     i32.load8_u
     i32.store8
     local.get $2
     i32.const 2
     i32.sub
     local.set $2
     block $break|4
      loop $continue|4
       local.get $2
       i32.const 18
       i32.ge_u
       i32.eqz
       br_if $break|4
       local.get $1
       i32.const 2
       i32.add
       i32.load
       local.set $4
       local.get $0
       local.get $3
       i32.const 16
       i32.shr_u
       local.get $4
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 6
       i32.add
       i32.load
       local.set $3
       local.get $0
       i32.const 4
       i32.add
       local.get $4
       i32.const 16
       i32.shr_u
       local.get $3
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 10
       i32.add
       i32.load
       local.set $4
       local.get $0
       i32.const 8
       i32.add
       local.get $3
       i32.const 16
       i32.shr_u
       local.get $4
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 14
       i32.add
       i32.load
       local.set $3
       local.get $0
       i32.const 12
       i32.add
       local.get $4
       i32.const 16
       i32.shr_u
       local.get $3
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 16
       i32.add
       local.set $1
       local.get $0
       i32.const 16
       i32.add
       local.set $0
       local.get $2
       i32.const 16
       i32.sub
       local.set $2
       br $continue|4
      end
      unreachable
     end
     br $break|2
    end
    local.get $1
    i32.load
    local.set $3
    local.get $0
    local.tee $5
    i32.const 1
    i32.add
    local.set $0
    local.get $5
    local.get $1
    local.tee $5
    i32.const 1
    i32.add
    local.set $1
    local.get $5
    i32.load8_u
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    block $break|5
     loop $continue|5
      local.get $2
      i32.const 19
      i32.ge_u
      i32.eqz
      br_if $break|5
      local.get $1
      i32.const 3
      i32.add
      i32.load
      local.set $4
      local.get $0
      local.get $3
      i32.const 8
      i32.shr_u
      local.get $4
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 7
      i32.add
      i32.load
      local.set $3
      local.get $0
      i32.const 4
      i32.add
      local.get $4
      i32.const 8
      i32.shr_u
      local.get $3
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 11
      i32.add
      i32.load
      local.set $4
      local.get $0
      i32.const 8
      i32.add
      local.get $3
      i32.const 8
      i32.shr_u
      local.get $4
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 15
      i32.add
      i32.load
      local.set $3
      local.get $0
      i32.const 12
      i32.add
      local.get $4
      i32.const 8
      i32.shr_u
      local.get $3
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 16
      i32.add
      local.set $1
      local.get $0
      i32.const 16
      i32.add
      local.set $0
      local.get $2
      i32.const 16
      i32.sub
      local.set $2
      br $continue|5
     end
     unreachable
    end
    br $break|2
   end
  end
  local.get $2
  i32.const 16
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 8
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 4
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 2
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 1
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
 )
 (func $~lib/memory/memory.copy (; 59 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  block $~lib/util/memory/memmove|inlined.0
   local.get $0
   local.set $5
   local.get $1
   local.set $4
   local.get $2
   local.set $3
   local.get $5
   local.get $4
   i32.eq
   if
    br $~lib/util/memory/memmove|inlined.0
   end
   local.get $4
   local.get $3
   i32.add
   local.get $5
   i32.le_u
   if (result i32)
    i32.const 1
   else    
    local.get $5
    local.get $3
    i32.add
    local.get $4
    i32.le_u
   end
   if
    local.get $5
    local.get $4
    local.get $3
    call $~lib/util/memory/memcpy
    br $~lib/util/memory/memmove|inlined.0
   end
   local.get $5
   local.get $4
   i32.lt_u
   if
    local.get $4
    i32.const 7
    i32.and
    local.get $5
    i32.const 7
    i32.and
    i32.eq
    if
     block $break|0
      loop $continue|0
       local.get $5
       i32.const 7
       i32.and
       i32.eqz
       br_if $break|0
       local.get $3
       i32.eqz
       if
        br $~lib/util/memory/memmove|inlined.0
       end
       local.get $3
       i32.const 1
       i32.sub
       local.set $3
       local.get $5
       local.tee $6
       i32.const 1
       i32.add
       local.set $5
       local.get $6
       local.get $4
       local.tee $6
       i32.const 1
       i32.add
       local.set $4
       local.get $6
       i32.load8_u
       i32.store8
       br $continue|0
      end
      unreachable
     end
     block $break|1
      loop $continue|1
       local.get $3
       i32.const 8
       i32.ge_u
       i32.eqz
       br_if $break|1
       local.get $5
       local.get $4
       i64.load
       i64.store
       local.get $3
       i32.const 8
       i32.sub
       local.set $3
       local.get $5
       i32.const 8
       i32.add
       local.set $5
       local.get $4
       i32.const 8
       i32.add
       local.set $4
       br $continue|1
      end
      unreachable
     end
    end
    block $break|2
     loop $continue|2
      local.get $3
      i32.eqz
      br_if $break|2
      local.get $5
      local.tee $6
      i32.const 1
      i32.add
      local.set $5
      local.get $6
      local.get $4
      local.tee $6
      i32.const 1
      i32.add
      local.set $4
      local.get $6
      i32.load8_u
      i32.store8
      local.get $3
      i32.const 1
      i32.sub
      local.set $3
      br $continue|2
     end
     unreachable
    end
   else    
    local.get $4
    i32.const 7
    i32.and
    local.get $5
    i32.const 7
    i32.and
    i32.eq
    if
     block $break|3
      loop $continue|3
       local.get $5
       local.get $3
       i32.add
       i32.const 7
       i32.and
       i32.eqz
       br_if $break|3
       local.get $3
       i32.eqz
       if
        br $~lib/util/memory/memmove|inlined.0
       end
       local.get $5
       local.get $3
       i32.const 1
       i32.sub
       local.tee $3
       i32.add
       local.get $4
       local.get $3
       i32.add
       i32.load8_u
       i32.store8
       br $continue|3
      end
      unreachable
     end
     block $break|4
      loop $continue|4
       local.get $3
       i32.const 8
       i32.ge_u
       i32.eqz
       br_if $break|4
       local.get $3
       i32.const 8
       i32.sub
       local.set $3
       local.get $5
       local.get $3
       i32.add
       local.get $4
       local.get $3
       i32.add
       i64.load
       i64.store
       br $continue|4
      end
      unreachable
     end
    end
    block $break|5
     loop $continue|5
      local.get $3
      i32.eqz
      br_if $break|5
      local.get $5
      local.get $3
      i32.const 1
      i32.sub
      local.tee $3
      i32.add
      local.get $4
      local.get $3
      i32.add
      i32.load8_u
      i32.store8
      br $continue|5
     end
     unreachable
    end
   end
  end
 )
 (func $~lib/string/String#concat (; 60 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.eq
  if
   i32.const 216
   local.tee $2
   local.get $1
   local.tee $3
   i32.ne
   if
    local.get $2
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $2
   local.set $1
  end
  local.get $0
  call $~lib/string/String#get:length
  i32.const 1
  i32.shl
  local.set $4
  local.get $1
  call $~lib/string/String#get:length
  i32.const 1
  i32.shl
  local.set $5
  local.get $4
  local.get $5
  i32.add
  local.set $6
  local.get $6
  i32.const 0
  i32.eq
  if
   i32.const 656
   call $~lib/rt/stub/__retain
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  end
  local.get $6
  i32.const 1
  call $~lib/rt/stub/__alloc
  call $~lib/rt/stub/__retain
  local.set $7
  local.get $7
  local.get $0
  local.get $4
  call $~lib/memory/memory.copy
  local.get $7
  local.get $4
  i32.add
  local.get $1
  local.get $5
  call $~lib/memory/memory.copy
  local.get $7
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/string/String.__concat (; 61 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.const 216
  local.get $0
  i32.const 0
  i32.ne
  select
  local.get $1
  call $~lib/string/String#concat
  local.set $2
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushObject (; 62 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  i32.eqz
  if
   i32.const 1016
   local.get $1
   call $~lib/string/String.__concat
   local.tee $2
   i32.const 840
   i32.const 58
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 1
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__near_ArgsParser_hello#pushObject (; 63 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load8_u offset=8
  i32.const 0
  i32.ne
  i32.eqz
  if
   local.get $1
   i32.const 0
   call $~lib/string/String.__eq
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.eq
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 29
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.const 1
   i32.store8 offset=8
   i32.const 1
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  else   
   local.get $1
   i32.const 0
   call $~lib/string/String.__ne
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.ne
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 33
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushObject
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/array/Array<~lib/string/String>#constructor (; 64 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 16
   i32.const 12
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  local.get $1
  i32.const 2
  call $~lib/arraybuffer/ArrayBufferView#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $1
  if
   i32.const 1272
   i32.const 1384
   i32.const 56
   i32.const 20
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.store offset=12
  local.get $0
 )
 (func $~lib/assemblyscript-json/util/index/Buffer.getPtr (; 65 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=4
  local.set $1
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
 )
 (func $~lib/rt/stub/__realloc (; 66 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  i32.const 0
  i32.ne
  if (result i32)
   local.get $0
   i32.const 15
   i32.and
   i32.eqz
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 1552
   i32.const 43
   i32.const 2
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 16
  i32.sub
  local.set $2
  local.get $2
  i32.load
  local.set $3
  local.get $2
  i32.load offset=4
  i32.const -1
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 1552
   i32.const 46
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $3
  i32.gt_u
  if
   local.get $0
   local.get $3
   i32.add
   global.get $~lib/rt/stub/offset
   i32.eq
   if
    local.get $1
    i32.const 1073741808
    i32.gt_u
    if
     unreachable
    end
    local.get $1
    i32.const 15
    i32.add
    i32.const 15
    i32.const -1
    i32.xor
    i32.and
    local.set $3
    local.get $0
    local.get $3
    i32.add
    call $~lib/rt/stub/maybeGrowMemory
    local.get $2
    local.get $3
    i32.store
   else    
    local.get $1
    i32.const 15
    i32.add
    i32.const 15
    i32.const -1
    i32.xor
    i32.and
    local.tee $4
    local.get $3
    i32.const 1
    i32.shl
    local.tee $5
    local.get $4
    local.get $5
    i32.gt_u
    select
    local.set $3
    local.get $3
    local.get $2
    i32.load offset=8
    call $~lib/rt/stub/__alloc
    local.set $4
    local.get $4
    local.get $0
    local.get $2
    i32.load offset=12
    call $~lib/memory/memory.copy
    local.get $4
    local.tee $0
    i32.const 16
    i32.sub
    local.set $2
   end
  else   
   local.get $0
   local.get $3
   i32.add
   global.get $~lib/rt/stub/offset
   i32.eq
   if
    local.get $1
    i32.const 15
    i32.add
    i32.const 15
    i32.const -1
    i32.xor
    i32.and
    local.set $3
    local.get $0
    local.get $3
    i32.add
    global.set $~lib/rt/stub/offset
    local.get $2
    local.get $3
    i32.store
   end
  end
  local.get $2
  local.get $1
  i32.store offset=12
  local.get $0
 )
 (func $~lib/string/String.UTF8.decodeUnsafe (; 67 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $0
  local.set $3
  local.get $0
  local.get $1
  i32.add
  local.set $4
  local.get $4
  local.get $3
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 1504
   i32.const 585
   i32.const 6
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 1
  i32.shl
  i32.const 1
  call $~lib/rt/stub/__alloc
  local.set $5
  local.get $5
  local.set $6
  block $break|0
   loop $continue|0
    local.get $3
    local.get $4
    i32.lt_u
    i32.eqz
    br_if $break|0
    local.get $3
    local.tee $7
    i32.const 1
    i32.add
    local.set $3
    local.get $7
    i32.load8_u
    local.set $7
    local.get $7
    i32.const 128
    i32.lt_u
    if
     local.get $2
     if (result i32)
      local.get $7
      i32.eqz
     else      
      i32.const 0
     end
     if
      br $break|0
     end
     local.get $6
     local.get $7
     i32.store16
     local.get $6
     i32.const 2
     i32.add
     local.set $6
    else     
     local.get $7
     i32.const 191
     i32.gt_u
     if (result i32)
      local.get $7
      i32.const 224
      i32.lt_u
     else      
      i32.const 0
     end
     if
      local.get $4
      local.get $3
      i32.sub
      i32.const 1
      i32.lt_u
      if
       br $break|0
      end
      local.get $6
      local.get $7
      i32.const 31
      i32.and
      i32.const 6
      i32.shl
      local.get $3
      local.tee $8
      i32.const 1
      i32.add
      local.set $3
      local.get $8
      i32.load8_u
      i32.const 63
      i32.and
      i32.or
      i32.store16
      local.get $6
      i32.const 2
      i32.add
      local.set $6
     else      
      local.get $7
      i32.const 239
      i32.gt_u
      if (result i32)
       local.get $7
       i32.const 365
       i32.lt_u
      else       
       i32.const 0
      end
      if
       local.get $4
       local.get $3
       i32.sub
       i32.const 3
       i32.lt_u
       if
        br $break|0
       end
       local.get $7
       i32.const 7
       i32.and
       i32.const 18
       i32.shl
       local.get $3
       i32.load8_u
       i32.const 63
       i32.and
       i32.const 12
       i32.shl
       i32.or
       local.get $3
       i32.load8_u offset=1
       i32.const 63
       i32.and
       i32.const 6
       i32.shl
       i32.or
       local.get $3
       i32.load8_u offset=2
       i32.const 63
       i32.and
       i32.or
       i32.const 65536
       i32.sub
       local.set $7
       local.get $3
       i32.const 3
       i32.add
       local.set $3
       local.get $6
       i32.const 55296
       local.get $7
       i32.const 10
       i32.shr_u
       i32.add
       i32.store16
       local.get $6
       i32.const 56320
       local.get $7
       i32.const 1023
       i32.and
       i32.add
       i32.store16 offset=2
       local.get $6
       i32.const 4
       i32.add
       local.set $6
      else       
       local.get $4
       local.get $3
       i32.sub
       i32.const 2
       i32.lt_u
       if
        br $break|0
       end
       local.get $6
       local.get $7
       i32.const 15
       i32.and
       i32.const 12
       i32.shl
       local.get $3
       i32.load8_u
       i32.const 63
       i32.and
       i32.const 6
       i32.shl
       i32.or
       local.get $3
       i32.load8_u offset=1
       i32.const 63
       i32.and
       i32.or
       i32.store16
       local.get $3
       i32.const 2
       i32.add
       local.set $3
       local.get $6
       i32.const 2
       i32.add
       local.set $6
      end
     end
    end
    br $continue|0
   end
   unreachable
  end
  local.get $5
  local.get $6
  local.get $5
  i32.sub
  call $~lib/rt/stub/__realloc
  call $~lib/rt/stub/__retain
 )
 (func $~lib/assemblyscript-json/util/index/Buffer.readString (; 68 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/assemblyscript-json/util/index/Buffer.getPtr
  local.get $1
  i32.add
  local.get $2
  local.get $1
  i32.sub
  i32.const 0
  call $~lib/string/String.UTF8.decodeUnsafe
  local.set $3
  local.get $0
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/DecoderState#readString (; 69 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  local.get $0
  i32.load offset=8
  local.get $1
  local.get $2
  i32.const 1
  i32.sub
  call $~lib/assemblyscript-json/util/index/Buffer.readString
 )
 (func $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline (; 70 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  block $1of1
   block $0of1
    block $outOfRange
     global.get $~lib/argc
     i32.const 1
     i32.sub
     br_table $0of1 $1of1 $outOfRange
    end
    unreachable
   end
   local.get $0
   i32.load offset=4
   local.set $2
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/DecoderState#readString
 )
 (func $~lib/array/Array<~lib/string/String>#get:length (; 71 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/ensureSize (; 72 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  i32.load offset=8
  local.set $3
  local.get $1
  local.get $3
  local.get $2
  i32.shr_u
  i32.gt_u
  if
   local.get $1
   i32.const 1073741808
   local.get $2
   i32.shr_u
   i32.gt_u
   if
    i32.const 552
    i32.const 1384
    i32.const 14
    i32.const 47
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.load
   local.set $4
   local.get $1
   local.get $2
   i32.shl
   local.set $5
   local.get $4
   local.get $5
   call $~lib/rt/stub/__realloc
   local.set $6
   local.get $6
   local.get $3
   i32.add
   i32.const 0
   local.get $5
   local.get $3
   i32.sub
   call $~lib/memory/memory.fill
   local.get $6
   local.get $4
   i32.ne
   if
    local.get $0
    local.get $6
    call $~lib/rt/stub/__retain
    i32.store
    local.get $0
    local.get $6
    i32.store offset=4
   end
   local.get $0
   local.get $5
   i32.store offset=8
  end
 )
 (func $~lib/array/Array<~lib/string/String>#push (; 73 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 2
  call $~lib/array/ensureSize
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  call $~lib/rt/stub/__retain
  i32.store
  local.get $0
  local.get $3
  i32.store offset=12
  local.get $3
  local.set $4
  local.get $1
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/array/Array<~lib/string/String>#join_str (; 74 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $2
  local.get $2
  i32.const 0
  i32.lt_s
  if
   i32.const 656
   call $~lib/rt/stub/__retain
   local.set $3
   local.get $1
   call $~lib/rt/stub/__release
   local.get $3
   return
  end
  local.get $0
  i32.load offset=4
  local.set $4
  local.get $2
  i32.eqz
  if
   local.get $4
   i32.load
   call $~lib/rt/stub/__retain
   local.set $3
   local.get $1
   call $~lib/rt/stub/__release
   local.get $3
   return
  end
  local.get $1
  call $~lib/string/String#get:length
  local.set $5
  i32.const 0
  local.set $6
  i32.const 0
  local.set $7
  block $break|0
   i32.const 0
   local.set $3
   local.get $2
   i32.const 1
   i32.add
   local.set $8
   loop $loop|0
    local.get $3
    local.get $8
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $4
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $9
    local.get $7
    local.tee $10
    i32.ne
    if
     local.get $9
     call $~lib/rt/stub/__retain
     drop
     local.get $10
     call $~lib/rt/stub/__release
    end
    local.get $9
    local.set $7
    local.get $7
    i32.const 0
    i32.ne
    if
     local.get $6
     local.get $7
     call $~lib/string/String#get:length
     i32.add
     local.set $6
    end
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $loop|0
   end
   unreachable
  end
  i32.const 0
  local.set $11
  local.get $6
  local.get $5
  local.get $2
  i32.mul
  i32.add
  i32.const 1
  i32.shl
  i32.const 1
  call $~lib/rt/stub/__alloc
  call $~lib/rt/stub/__retain
  local.set $12
  block $break|1
   i32.const 0
   local.set $8
   loop $loop|1
    local.get $8
    local.get $2
    i32.lt_s
    i32.eqz
    br_if $break|1
    local.get $4
    local.get $8
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $10
    local.get $7
    local.tee $3
    i32.ne
    if
     local.get $10
     call $~lib/rt/stub/__retain
     drop
     local.get $3
     call $~lib/rt/stub/__release
    end
    local.get $10
    local.set $7
    local.get $7
    i32.const 0
    i32.ne
    if
     local.get $7
     call $~lib/string/String#get:length
     local.set $10
     local.get $12
     local.get $11
     i32.const 1
     i32.shl
     i32.add
     local.get $7
     local.get $10
     i32.const 1
     i32.shl
     call $~lib/memory/memory.copy
     local.get $11
     local.get $10
     i32.add
     local.set $11
    end
    local.get $5
    if
     local.get $12
     local.get $11
     i32.const 1
     i32.shl
     i32.add
     local.get $1
     local.get $5
     i32.const 1
     i32.shl
     call $~lib/memory/memory.copy
     local.get $11
     local.get $5
     i32.add
     local.set $11
    end
    local.get $8
    i32.const 1
    i32.add
    local.set $8
    br $loop|1
   end
   unreachable
  end
  local.get $4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $9
  local.get $7
  local.tee $8
  i32.ne
  if
   local.get $9
   call $~lib/rt/stub/__retain
   drop
   local.get $8
   call $~lib/rt/stub/__release
  end
  local.get $9
  local.set $7
  local.get $7
  i32.const 0
  i32.ne
  if
   local.get $12
   local.get $11
   i32.const 1
   i32.shl
   i32.add
   local.get $7
   local.get $7
   call $~lib/string/String#get:length
   i32.const 1
   i32.shl
   call $~lib/memory/memory.copy
  end
  local.get $12
  local.set $9
  local.get $1
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $9
 )
 (func $~lib/array/Array<~lib/string/String>#join (; 75 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/array/Array<~lib/string/String>#join_str
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  return
 )
 (func $~lib/rt/__allocArray (; 76 ;) (type $FUNCSIG$iiiii) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  i32.const 16
  local.get $2
  call $~lib/rt/stub/__alloc
  local.set $4
  local.get $0
  local.get $1
  i32.shl
  local.set $5
  local.get $5
  i32.const 0
  call $~lib/rt/stub/__alloc
  local.set $6
  local.get $4
  local.get $6
  call $~lib/rt/stub/__retain
  i32.store
  local.get $4
  local.get $6
  i32.store offset=4
  local.get $4
  local.get $5
  i32.store offset=8
  local.get $4
  local.get $0
  i32.store offset=12
  local.get $3
  if
   local.get $6
   local.get $3
   local.get $5
   call $~lib/memory/memory.copy
  end
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readHexDigit (; 77 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readChar
  local.set $1
  local.get $1
  global.get $~lib/assemblyscript-json/decoder/CHAR_0
  i32.sub
  local.set $2
  local.get $2
  i32.const 9
  i32.gt_s
  if
   local.get $1
   global.get $~lib/assemblyscript-json/decoder/CHAR_A
   i32.sub
   i32.const 10
   i32.add
   local.set $2
   local.get $2
   i32.const 10
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $2
    i32.const 15
    i32.gt_s
   end
   if
    local.get $1
    global.get $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
    i32.sub
    i32.const 10
    i32.add
    local.set $2
   end
  end
  i32.const 2
  i32.const 2
  i32.const 13
  i32.const 0
  call $~lib/rt/__allocArray
  local.set $3
  local.get $3
  i32.load offset=4
  local.set $4
  local.get $4
  local.get $1
  i32.store
  local.get $4
  local.get $2
  i32.store offset=4
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $2
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $2
   i32.const 16
   i32.lt_s
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1864
   i32.const 840
   i32.const 269
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/string/String.fromCodePoint (; 78 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  i32.const 1114111
  i32.le_u
  i32.eqz
  if
   i32.const 0
   i32.const 1504
   i32.const 22
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 65535
  i32.gt_s
  local.set $1
  i32.const 2
  local.get $1
  i32.shl
  i32.const 1
  call $~lib/rt/stub/__alloc
  local.set $2
  local.get $1
  i32.eqz
  if
   local.get $2
   local.get $0
   i32.store16
  else   
   local.get $0
   i32.const 65536
   i32.sub
   local.set $0
   local.get $0
   i32.const 10
   i32.shr_u
   i32.const 55296
   i32.add
   local.set $3
   local.get $0
   i32.const 1023
   i32.and
   i32.const 56320
   i32.add
   local.set $4
   local.get $2
   local.get $3
   i32.const 16
   i32.shl
   local.get $4
   i32.or
   i32.store
  end
  local.get $2
  call $~lib/rt/stub/__retain
 )
 (func $~lib/string/String.fromCharCode (; 79 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  i32.const 0
  i32.gt_s
  local.set $2
  i32.const 2
  local.get $2
  i32.shl
  i32.const 1
  call $~lib/rt/stub/__alloc
  local.set $3
  local.get $3
  local.get $0
  i32.store16
  local.get $2
  if
   local.get $3
   local.get $1
   i32.store16 offset=2
  end
  local.get $3
  call $~lib/rt/stub/__retain
 )
 (func $~lib/string/String.fromCharCode|trampoline (; 80 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  block $1of1
   block $0of1
    block $outOfRange
     global.get $~lib/argc
     i32.const 1
     i32.sub
     br_table $0of1 $1of1 $outOfRange
    end
    unreachable
   end
   i32.const -1
   local.set $1
  end
  local.get $0
  local.get $1
  call $~lib/string/String.fromCharCode
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readEscapedChar (; 81 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readChar
  local.set $1
  local.get $1
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1168
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1600
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1600
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1624
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1624
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1648
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1672
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1696
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1720
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1744
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1768
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1792
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1840
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readHexDigit
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readHexDigit
   local.set $3
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readHexDigit
   local.set $4
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readHexDigit
   local.set $5
   local.get $2
   i32.const 4096
   i32.mul
   local.get $3
   i32.const 256
   i32.mul
   i32.add
   local.get $4
   i32.const 16
   i32.mul
   i32.add
   local.get $5
   i32.add
   local.set $6
   local.get $6
   call $~lib/string/String.fromCodePoint
   return
  end
  i32.const 0
  i32.eqz
  if
   i32.const 1920
   i32.const 1
   global.set $~lib/argc
   local.get $1
   i32.const 0
   call $~lib/string/String.fromCharCode|trampoline
   local.tee $6
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 840
   i32.const 255
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 656
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $6
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readString (; 82 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1192
   i32.const 840
   i32.const 197
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.set $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $2
  loop $loop|0
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readChar
   local.set $3
   local.get $3
   i32.const 32
   i32.ge_s
   i32.eqz
   if
    i32.const 1432
    i32.const 840
    i32.const 203
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 1168
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   if
    i32.const 1
    global.set $~lib/argc
    local.get $0
    i32.load offset=4
    local.get $1
    i32.const 0
    call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
    local.set $4
    local.get $2
    call $~lib/array/Array<~lib/string/String>#get:length
    i32.const 0
    i32.eq
    if
     local.get $4
     local.set $5
     local.get $2
     call $~lib/rt/stub/__release
     local.get $5
     return
    end
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#push
    drop
    local.get $2
    i32.const 656
    call $~lib/array/Array<~lib/string/String>#join
    local.set $5
    local.get $4
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $5
    return
   else    
    local.get $3
    i32.const 1600
    i32.const 0
    call $~lib/string/String#charCodeAt
    i32.eq
    if
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.get $1
     i32.const 1
     i32.add
     i32.gt_s
     if
      local.get $2
      i32.const 1
      global.set $~lib/argc
      local.get $0
      i32.load offset=4
      local.get $1
      i32.const 0
      call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
      local.tee $4
      call $~lib/array/Array<~lib/string/String>#push
      drop
      local.get $4
      call $~lib/rt/stub/__release
     end
     local.get $2
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readEscapedChar
     local.tee $4
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
   end
   br $loop|0
  end
  unreachable
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#parseKey (; 83 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#skipWhitespace
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readString
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readChar
  i32.const 2000
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 2024
   i32.const 840
   i32.const 159
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONHandler#popObject (; 84 ;) (type $FUNCSIG$vi) (param $0 i32)
  nop
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#parseObject (; 85 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#peekChar
  i32.const 928
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_hello#pushObject
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#peekChar
     i32.const 1080
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 142
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#parseKey
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readChar
   i32.const 1080
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2064
    i32.const 840
    i32.const 149
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popObject
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushArray (; 86 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  i32.eqz
  if
   i32.const 2152
   local.get $1
   call $~lib/string/String.__concat
   local.tee $2
   i32.const 840
   i32.const 53
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 1
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__near_ArgsParser_hello#pushArray (; 87 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushArray
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONHandler#popArray (; 88 ;) (type $FUNCSIG$vi) (param $0 i32)
  nop
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#parseArray (; 89 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#peekChar
  i32.const 2128
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_hello#pushArray
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#peekChar
     i32.const 2216
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 176
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readChar
   i32.const 2216
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2240
    i32.const 840
    i32.const 182
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popArray
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setString (; 90 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  i32.eqz
  if
   i32.const 2328
   local.get $1
   call $~lib/string/String.__concat
   local.tee $3
   i32.const 2392
   call $~lib/string/String.__concat
   local.tee $4
   local.get $2
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 1168
   call $~lib/string/String.__concat
   local.tee $6
   i32.const 840
   i32.const 36
   i32.const 7
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__near_ArgsParser_hello#setString (; 91 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 2304
  call $~lib/string/String.__eq
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=12
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=12
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setString
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#parseString (; 92 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#peekChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.load
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readString
  local.tee $1
  call $assembly/hello/main/__near_ArgsParser_hello#setString
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readAndAssert (; 93 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $2
    call $~lib/string/String#charCodeAt
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readChar
    i32.eq
    i32.eqz
    if
     i32.const 2416
     local.get $1
     call $~lib/string/String.__concat
     local.tee $3
     i32.const 2456
     call $~lib/string/String.__concat
     local.tee $4
     i32.const 840
     i32.const 321
     i32.const 6
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean (; 94 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  i32.eqz
  if
   i32.const 2480
   local.get $1
   call $~lib/string/String.__concat
   local.tee $3
   i32.const 2544
   call $~lib/string/String.__concat
   local.tee $4
   local.get $2
   if (result i32)
    i32.const 160
    call $~lib/rt/stub/__retain
    local.tee $5
   else    
    i32.const 184
    call $~lib/rt/stub/__retain
    local.tee $6
   end
   call $~lib/string/String.__concat
   local.tee $7
   i32.const 840
   i32.const 40
   i32.const 7
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#parseBoolean (; 95 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#peekChar
  i32.const 184
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/FALSE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 0
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#peekChar
  i32.const 160
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/TRUE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 1
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/util/number/decimalCount32 (; 96 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 100000
  i32.lt_u
  if
   local.get $0
   i32.const 100
   i32.lt_u
   if
    i32.const 1
    i32.const 2
    local.get $0
    i32.const 10
    i32.lt_u
    select
    return
   else    
    i32.const 4
    i32.const 5
    local.get $0
    i32.const 10000
    i32.lt_u
    select
    local.set $1
    i32.const 3
    local.get $1
    local.get $0
    i32.const 1000
    i32.lt_u
    select
    return
   end
   unreachable
  else   
   local.get $0
   i32.const 10000000
   i32.lt_u
   if
    i32.const 6
    i32.const 7
    local.get $0
    i32.const 1000000
    i32.lt_u
    select
    return
   else    
    i32.const 9
    i32.const 10
    local.get $0
    i32.const 1000000000
    i32.lt_u
    select
    local.set $1
    i32.const 8
    local.get $1
    local.get $0
    i32.const 100000000
    i32.lt_u
    select
    return
   end
   unreachable
  end
  unreachable
 )
 (func $~lib/util/number/utoa32_lut (; 97 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i64)
  (local $9 i64)
  i32.const 3080
  i32.load offset=4
  local.set $3
  block $break|0
   loop $continue|0
    local.get $1
    i32.const 10000
    i32.ge_u
    i32.eqz
    br_if $break|0
    local.get $1
    i32.const 10000
    i32.div_u
    local.set $4
    local.get $1
    i32.const 10000
    i32.rem_u
    local.set $5
    local.get $4
    local.set $1
    local.get $5
    i32.const 100
    i32.div_u
    local.set $6
    local.get $5
    i32.const 100
    i32.rem_u
    local.set $7
    local.get $3
    local.get $6
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $8
    local.get $3
    local.get $7
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $9
    local.get $2
    i32.const 4
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    local.get $8
    local.get $9
    i64.const 32
    i64.shl
    i64.or
    i64.store
    br $continue|0
   end
   unreachable
  end
  local.get $1
  i32.const 100
  i32.ge_u
  if
   local.get $1
   i32.const 100
   i32.div_u
   local.set $7
   local.get $1
   i32.const 100
   i32.rem_u
   local.set $6
   local.get $7
   local.set $1
   local.get $2
   i32.const 2
   i32.sub
   local.set $2
   local.get $3
   local.get $6
   i32.const 2
   i32.shl
   i32.add
   i32.load
   local.set $5
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $5
   i32.store
  end
  local.get $1
  i32.const 10
  i32.ge_u
  if
   local.get $2
   i32.const 2
   i32.sub
   local.set $2
   local.get $3
   local.get $1
   i32.const 2
   i32.shl
   i32.add
   i32.load
   local.set $5
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $5
   i32.store
  else   
   local.get $2
   i32.const 1
   i32.sub
   local.set $2
   i32.const 48
   local.get $1
   i32.add
   local.set $5
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $5
   i32.store16
  end
 )
 (func $~lib/util/number/decimalCount64 (; 98 ;) (type $FUNCSIG$ij) (param $0 i64) (result i32)
  (local $1 i32)
  local.get $0
  i64.const 1000000000000000
  i64.lt_u
  if
   local.get $0
   i64.const 1000000000000
   i64.lt_u
   if
    i32.const 11
    i32.const 12
    local.get $0
    i64.const 100000000000
    i64.lt_u
    select
    local.set $1
    i32.const 10
    local.get $1
    local.get $0
    i64.const 10000000000
    i64.lt_u
    select
    return
   else    
    i32.const 14
    i32.const 15
    local.get $0
    i64.const 100000000000000
    i64.lt_u
    select
    local.set $1
    i32.const 13
    local.get $1
    local.get $0
    i64.const 10000000000000
    i64.lt_u
    select
    return
   end
   unreachable
  else   
   local.get $0
   i64.const 100000000000000000
   i64.lt_u
   if
    i32.const 16
    i32.const 17
    local.get $0
    i64.const 10000000000000000
    i64.lt_u
    select
    return
   else    
    i32.const 19
    i32.const 20
    local.get $0
    i64.const -8446744073709551616
    i64.lt_u
    select
    local.set $1
    i32.const 18
    local.get $1
    local.get $0
    i64.const 1000000000000000000
    i64.lt_u
    select
    return
   end
   unreachable
  end
  unreachable
 )
 (func $~lib/util/number/utoa64_lut (; 99 ;) (type $FUNCSIG$viji) (param $0 i32) (param $1 i64) (param $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i64)
  (local $13 i64)
  i32.const 3080
  i32.load offset=4
  local.set $3
  block $break|0
   loop $continue|0
    local.get $1
    i64.const 100000000
    i64.ge_u
    i32.eqz
    br_if $break|0
    local.get $1
    i64.const 100000000
    i64.div_u
    local.set $4
    local.get $1
    local.get $4
    i64.const 100000000
    i64.mul
    i64.sub
    i32.wrap_i64
    local.set $5
    local.get $4
    local.set $1
    local.get $5
    i32.const 10000
    i32.div_u
    local.set $6
    local.get $5
    i32.const 10000
    i32.rem_u
    local.set $7
    local.get $6
    i32.const 100
    i32.div_u
    local.set $8
    local.get $6
    i32.const 100
    i32.rem_u
    local.set $9
    local.get $7
    i32.const 100
    i32.div_u
    local.set $10
    local.get $7
    i32.const 100
    i32.rem_u
    local.set $11
    local.get $3
    local.get $10
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $12
    local.get $3
    local.get $11
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $13
    local.get $2
    i32.const 4
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    local.get $12
    local.get $13
    i64.const 32
    i64.shl
    i64.or
    i64.store
    local.get $3
    local.get $8
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $12
    local.get $3
    local.get $9
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $13
    local.get $2
    i32.const 4
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    local.get $12
    local.get $13
    i64.const 32
    i64.shl
    i64.or
    i64.store
    br $continue|0
   end
   unreachable
  end
  local.get $0
  local.get $1
  i32.wrap_i64
  local.get $2
  call $~lib/util/number/utoa32_lut
 )
 (func $~lib/util/number/itoa64 (; 100 ;) (type $FUNCSIG$ij) (param $0 i64) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i64)
  local.get $0
  i64.eqz
  if
   i32.const 240
   call $~lib/rt/stub/__retain
   return
  end
  local.get $0
  i64.const 0
  i64.lt_s
  local.set $1
  local.get $1
  if
   i64.const 0
   local.get $0
   i64.sub
   local.set $0
  end
  local.get $0
  i64.const 4294967295
  i64.le_u
  if
   local.get $0
   i32.wrap_i64
   local.set $3
   local.get $3
   call $~lib/util/number/decimalCount32
   local.get $1
   i32.add
   local.set $4
   local.get $4
   i32.const 1
   i32.shl
   i32.const 1
   call $~lib/rt/stub/__alloc
   local.set $2
   local.get $2
   local.set $7
   local.get $3
   local.set $6
   local.get $4
   local.set $5
   local.get $7
   local.get $6
   local.get $5
   call $~lib/util/number/utoa32_lut
  else   
   local.get $0
   call $~lib/util/number/decimalCount64
   local.get $1
   i32.add
   local.set $4
   local.get $4
   i32.const 1
   i32.shl
   i32.const 1
   call $~lib/rt/stub/__alloc
   local.set $2
   local.get $2
   local.set $6
   local.get $0
   local.set $8
   local.get $4
   local.set $5
   local.get $6
   local.get $8
   local.get $5
   call $~lib/util/number/utoa64_lut
  end
  local.get $1
  if
   local.get $2
   i32.const 45
   i32.store16
  end
  local.get $2
  call $~lib/rt/stub/__retain
 )
 (func $~lib/util/number/itoa<i64> (; 101 ;) (type $FUNCSIG$ij) (param $0 i64) (result i32)
  local.get $0
  call $~lib/util/number/itoa64
  return
 )
 (func $~lib/number/I64#toString (; 102 ;) (type $FUNCSIG$ij) (param $0 i64) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/util/number/itoa<i64>
  local.tee $1
  call $~lib/rt/stub/__retain
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setInteger (; 103 ;) (type $FUNCSIG$viij) (param $0 i32) (param $1 i32) (param $2 i64)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  i32.eqz
  if
   i32.const 2592
   local.get $1
   call $~lib/string/String.__concat
   local.tee $3
   i32.const 2544
   call $~lib/string/String.__concat
   local.tee $4
   local.get $2
   call $~lib/number/I64#toString
   local.tee $5
   call $~lib/string/String.__concat
   local.tee $6
   i32.const 840
   i32.const 49
   i32.const 7
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#parseNumber (; 104 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  local.set $1
  i64.const 1
  local.set $2
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#peekChar
  i32.const 2568
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i64.const -1
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readChar
   drop
  end
  i32.const 0
  local.set $3
  block $break|0
   loop $continue|0
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#peekChar
    i32.le_s
    if (result i32)
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#peekChar
     global.get $~lib/assemblyscript-json/decoder/CHAR_9
     i32.le_s
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readChar
    local.set $4
    local.get $1
    i64.const 10
    i64.mul
    local.set $1
    local.get $1
    local.get $4
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    i32.sub
    i64.extend_i32_s
    i64.add
    local.set $1
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $continue|0
   end
   unreachable
  end
  local.get $3
  i32.const 0
  i32.gt_s
  if
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   local.get $1
   local.get $2
   i64.mul
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setInteger
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setNull (; 105 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  i32.eqz
  if
   i32.const 3112
   local.get $1
   call $~lib/string/String.__concat
   local.tee $2
   i32.const 840
   i32.const 44
   i32.const 7
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__near_ArgsParser_hello#setNull (; 106 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 2304
  call $~lib/string/String.__eq
  if
   local.get $0
   local.tee $2
   i32.const 0
   local.tee $3
   local.get $2
   i32.load offset=12
   local.tee $2
   i32.ne
   if
    local.get $3
    call $~lib/rt/stub/__retain
    drop
    local.get $2
    call $~lib/rt/stub/__release
   end
   local.get $3
   i32.store offset=12
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setNull
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#parseNull (; 107 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#peekChar
  i32.const 216
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/NULL_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   call $assembly/hello/main/__near_ArgsParser_hello#setNull
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#parseValue (; 108 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#parseObject
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#parseArray
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#parseString
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#parseBoolean
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#parseNumber
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#parseNull
  end
  local.set $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#skipWhitespace
  local.get $1
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#deserialize (; 109 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  i32.const 0
  i32.ne
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
  else   
   local.get $0
   local.tee $4
   i32.const 0
   local.get $1
   call $~lib/assemblyscript-json/decoder/DecoderState#constructor
   local.set $3
   local.get $4
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#parseValue
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3176
   i32.const 840
   i32.const 100
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/hello (; 110 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  i32.const 3232
  local.get $0
  call $~lib/string/String.__concat
  local.tee $1
  call $~lib/rt/stub/__retain
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/array/Array<i32>#constructor (; 111 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 16
   i32.const 13
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  local.get $1
  i32.const 2
  call $~lib/arraybuffer/ArrayBufferView#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
  local.get $1
  i32.store offset=12
  local.get $0
 )
 (func $~lib/array/Array<i32>#push (; 112 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 2
  call $~lib/array/ensureSize
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store
  local.get $0
  local.get $3
  i32.store offset=12
  local.get $3
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#constructor (; 113 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 15
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $1
  i32.const 0
  i32.const 10
  call $~lib/array/Array<i32>#constructor
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  local.tee $2
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $1
  local.get $2
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $1
  i32.store offset=4
  local.get $0
  i32.load
  i32.const 1
  call $~lib/array/Array<i32>#push
  drop
  local.get $0
 )
 (func $~lib/array/Array<i32>#get:length (; 114 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<i32>#__unchecked_get (; 115 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
 )
 (func $~lib/array/Array<i32>#__get (; 116 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.load offset=8
  i32.const 2
  i32.shr_u
  i32.ge_u
  if
   i32.const 672
   i32.const 1384
   i32.const 109
   i32.const 61
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/array/Array<i32>#__unchecked_get
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#get:isFirstKey (; 117 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load
  local.get $0
  i32.load
  call $~lib/array/Array<i32>#get:length
  i32.const 1
  i32.sub
  call $~lib/array/Array<i32>#__get
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#write (; 118 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=4
  local.get $1
  call $~lib/array/Array<~lib/string/String>#push
  drop
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/array/Array<i32>#__unchecked_set (; 119 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
 )
 (func $~lib/array/Array<i32>#__set (; 120 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=12
  local.set $3
  local.get $0
  local.get $1
  i32.const 1
  i32.add
  i32.const 2
  call $~lib/array/ensureSize
  local.get $0
  local.get $1
  local.get $2
  call $~lib/array/Array<i32>#__unchecked_set
  local.get $1
  local.get $3
  i32.ge_s
  if
   local.get $0
   local.get $1
   i32.const 1
   i32.add
   i32.store offset=12
  end
 )
 (func $~lib/string/String#substring (; 121 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  local.get $0
  call $~lib/string/String#get:length
  local.set $3
  local.get $1
  local.tee $4
  i32.const 0
  local.tee $5
  local.get $4
  local.get $5
  i32.gt_s
  select
  local.tee $4
  local.get $3
  local.tee $5
  local.get $4
  local.get $5
  i32.lt_s
  select
  local.set $6
  local.get $2
  local.tee $4
  i32.const 0
  local.tee $5
  local.get $4
  local.get $5
  i32.gt_s
  select
  local.tee $4
  local.get $3
  local.tee $5
  local.get $4
  local.get $5
  i32.lt_s
  select
  local.set $7
  local.get $6
  local.tee $4
  local.get $7
  local.tee $5
  local.get $4
  local.get $5
  i32.lt_s
  select
  i32.const 1
  i32.shl
  local.set $8
  local.get $6
  local.tee $4
  local.get $7
  local.tee $5
  local.get $4
  local.get $5
  i32.gt_s
  select
  i32.const 1
  i32.shl
  local.set $9
  local.get $9
  local.get $8
  i32.sub
  local.set $3
  local.get $3
  i32.eqz
  if
   i32.const 656
   call $~lib/rt/stub/__retain
   return
  end
  local.get $8
  i32.eqz
  if (result i32)
   local.get $9
   local.get $0
   call $~lib/string/String#get:length
   i32.const 1
   i32.shl
   i32.eq
  else   
   i32.const 0
  end
  if
   local.get $0
   call $~lib/rt/stub/__retain
   return
  end
  local.get $3
  i32.const 1
  call $~lib/rt/stub/__alloc
  local.set $10
  local.get $10
  local.get $0
  local.get $8
  i32.add
  local.get $3
  call $~lib/memory/memory.copy
  local.get $10
  call $~lib/rt/stub/__retain
 )
 (func $~lib/util/number/itoa32 (; 122 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  i32.eqz
  if
   i32.const 240
   call $~lib/rt/stub/__retain
   return
  end
  local.get $0
  i32.const 0
  i32.lt_s
  local.set $1
  local.get $1
  if
   i32.const 0
   local.get $0
   i32.sub
   local.set $0
  end
  local.get $0
  call $~lib/util/number/decimalCount32
  local.get $1
  i32.add
  local.set $2
  local.get $2
  i32.const 1
  i32.shl
  i32.const 1
  call $~lib/rt/stub/__alloc
  local.set $3
  local.get $3
  local.set $6
  local.get $0
  local.set $5
  local.get $2
  local.set $4
  local.get $6
  local.get $5
  local.get $4
  call $~lib/util/number/utoa32_lut
  local.get $1
  if
   local.get $3
   i32.const 45
   i32.store16
  end
  local.get $3
  call $~lib/rt/stub/__retain
 )
 (func $~lib/util/number/itoa<i32> (; 123 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/util/number/itoa32
  return
 )
 (func $~lib/number/I32#toString (; 124 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/util/number/itoa<i32>
  local.tee $1
  call $~lib/rt/stub/__retain
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#writeString (; 125 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.const 1168
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  i32.const 0
  local.set $2
  block $break|0
   i32.const 0
   local.set $3
   loop $loop|0
    local.get $3
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $3
    call $~lib/string/String#charCodeAt
    local.set $4
    local.get $4
    i32.const 32
    i32.lt_s
    local.tee $5
    if (result i32)
     local.get $5
    else     
     local.get $4
     i32.const 1168
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.eq
    end
    local.tee $5
    if (result i32)
     local.get $5
    else     
     local.get $4
     i32.const 1600
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.eq
    end
    local.set $5
    local.get $5
    if
     local.get $0
     local.get $1
     local.get $2
     local.get $3
     call $~lib/string/String#substring
     local.tee $6
     call $~lib/assemblyscript-json/encoder/JSONEncoder#write
     local.get $3
     i32.const 1
     i32.add
     local.set $2
     local.get $4
     i32.const 1168
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.eq
     if
      local.get $0
      i32.const 3264
      call $~lib/assemblyscript-json/encoder/JSONEncoder#write
     else      
      local.get $4
      i32.const 1600
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      if
       local.get $0
       i32.const 3288
       call $~lib/assemblyscript-json/encoder/JSONEncoder#write
      else       
       local.get $4
       i32.const 1672
       i32.const 0
       call $~lib/string/String#charCodeAt
       i32.eq
       if
        local.get $0
        i32.const 3312
        call $~lib/assemblyscript-json/encoder/JSONEncoder#write
       else        
        local.get $4
        i32.const 1720
        i32.const 0
        call $~lib/string/String#charCodeAt
        i32.eq
        if
         local.get $0
         i32.const 3336
         call $~lib/assemblyscript-json/encoder/JSONEncoder#write
        else         
         local.get $4
         i32.const 1768
         i32.const 0
         call $~lib/string/String#charCodeAt
         i32.eq
         if
          local.get $0
          i32.const 3360
          call $~lib/assemblyscript-json/encoder/JSONEncoder#write
         else          
          local.get $4
          i32.const 1816
          i32.const 0
          call $~lib/string/String#charCodeAt
          i32.eq
          if
           local.get $0
           i32.const 3384
           call $~lib/assemblyscript-json/encoder/JSONEncoder#write
          else           
           i32.const 0
           i32.eqz
           if
            i32.const 3408
            local.get $4
            call $~lib/number/I32#toString
            local.tee $7
            call $~lib/string/String.__concat
            local.tee $8
            i32.const 3496
            i32.const 108
            i32.const 20
            call $~lib/builtins/abort
            unreachable
           end
           local.get $7
           call $~lib/rt/stub/__release
           local.get $8
           call $~lib/rt/stub/__release
          end
         end
        end
       end
      end
     end
     local.get $6
     call $~lib/rt/stub/__release
    end
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $loop|0
   end
   unreachable
  end
  local.get $0
  local.get $1
  local.get $2
  local.get $1
  call $~lib/string/String#get:length
  call $~lib/string/String#substring
  local.tee $5
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  local.get $0
  i32.const 1168
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  local.get $5
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#writeKey (; 126 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#get:isFirstKey
  i32.const 0
  i32.ne
  i32.eqz
  if
   local.get $0
   i32.const 1104
   call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  else   
   local.get $0
   i32.load
   local.get $0
   i32.load
   call $~lib/array/Array<i32>#get:length
   i32.const 1
   i32.sub
   i32.const 0
   call $~lib/array/Array<i32>#__set
  end
  local.get $1
  i32.const 0
  call $~lib/string/String.__ne
  if (result i32)
   local.get $1
   call $~lib/string/String#get:length
   i32.const 0
   i32.gt_s
  else   
   i32.const 0
  end
  if
   local.get $0
   local.get $1
   local.tee $2
   if (result i32)
    local.get $2
   else    
    unreachable
   end
   call $~lib/assemblyscript-json/encoder/JSONEncoder#writeString
   local.get $0
   i32.const 2000
   call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#setNull (; 127 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#writeKey
  local.get $0
  i32.const 216
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/PrimitiveHandler<~lib/string/String>>#constructor (; 128 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 17
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/nearEntry/PrimitiveHandler<~lib/string/String>#constructor (; 129 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 8
   i32.const 16
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $1
  i32.const 0
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/PrimitiveHandler<~lib/string/String>>#constructor
  local.set $2
  local.get $1
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $2
  i32.store offset=4
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/PrimitiveHandler<bool>>#constructor (; 130 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 19
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/nearEntry/PrimitiveHandler<bool>#constructor (; 131 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 8
   i32.const 18
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store8
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $1
  i32.const 0
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/PrimitiveHandler<bool>>#constructor
  local.set $2
  local.get $1
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $2
  i32.store offset=4
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/PrimitiveHandler<u64>>#constructor (; 132 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 21
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/nearEntry/PrimitiveHandler<u64>#constructor (; 133 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 12
   i32.const 20
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i64.const 0
  i64.store
  local.get $0
  i32.const 0
  i32.store offset=8
  local.get $0
  local.tee $1
  i32.const 0
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/PrimitiveHandler<u64>>#constructor
  local.set $2
  local.get $1
  i32.load offset=8
  call $~lib/rt/stub/__release
  local.get $2
  i32.store offset=8
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/PrimitiveHandler<i64>>#constructor (; 134 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 23
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/nearEntry/PrimitiveHandler<i64>#constructor (; 135 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 12
   i32.const 22
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i64.const 0
  i64.store
  local.get $0
  i32.const 0
  i32.store offset=8
  local.get $0
  local.tee $1
  i32.const 0
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/PrimitiveHandler<i64>>#constructor
  local.set $2
  local.get $1
  i32.load offset=8
  call $~lib/rt/stub/__release
  local.get $2
  i32.store offset=8
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/PrimitiveHandler<u32>>#constructor (; 136 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 25
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/nearEntry/PrimitiveHandler<u32>#constructor (; 137 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 8
   i32.const 24
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $1
  i32.const 0
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/PrimitiveHandler<u32>>#constructor
  local.set $2
  local.get $1
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $2
  i32.store offset=4
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/PrimitiveHandler<i32>>#constructor (; 138 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 27
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/nearEntry/PrimitiveHandler<i32>#constructor (; 139 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 8
   i32.const 26
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $1
  i32.const 0
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/PrimitiveHandler<i32>>#constructor
  local.set $2
  local.get $1
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $2
  i32.store offset=4
  local.get $0
 )
 (func $start:~lib/nearEntry (; 140 ;) (type $FUNCSIG$v)
  i32.const 0
  call $~lib/nearEntry/PrimitiveHandler<~lib/string/String>#constructor
  global.set $~lib/nearEntry/PrimitiveHandler.String
  i32.const 0
  call $~lib/nearEntry/PrimitiveHandler<bool>#constructor
  global.set $~lib/nearEntry/PrimitiveHandler.Boolean
  i32.const 0
  call $~lib/nearEntry/PrimitiveHandler<u64>#constructor
  global.set $~lib/nearEntry/PrimitiveHandler.U64
  i32.const 0
  call $~lib/nearEntry/PrimitiveHandler<i64>#constructor
  global.set $~lib/nearEntry/PrimitiveHandler.I64
  i32.const 0
  call $~lib/nearEntry/PrimitiveHandler<u32>#constructor
  global.set $~lib/nearEntry/PrimitiveHandler.U32
  i32.const 0
  call $~lib/nearEntry/PrimitiveHandler<i32>#constructor
  global.set $~lib/nearEntry/PrimitiveHandler.I32
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#setString (; 141 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#writeKey
  local.get $0
  local.get $2
  call $~lib/assemblyscript-json/encoder/JSONEncoder#writeString
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/nearEntry/encode<~lib/string/String> (; 142 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  call $~lib/string/String.__eq
  if
   local.get $0
   local.get $2
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $0
   local.get $2
   local.get $1
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setString
  end
  local.get $0
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#toString (; 143 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.const 656
  call $~lib/array/Array<~lib/string/String>#join
 )
 (func $~lib/string/String.UTF8.byteLength (; 144 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.set $2
  local.get $2
  local.get $0
  i32.const 16
  i32.sub
  i32.load offset=12
  i32.add
  local.set $3
  local.get $1
  if (result i32)
   i32.const 1
  else   
   i32.const 0
  end
  local.set $4
  block $break|0
   loop $continue|0
    local.get $2
    local.get $3
    i32.lt_u
    i32.eqz
    br_if $break|0
    local.get $2
    i32.load16_u
    local.set $5
    local.get $5
    i32.const 128
    i32.lt_u
    if
     local.get $1
     if (result i32)
      local.get $5
      i32.eqz
     else      
      i32.const 0
     end
     if
      br $break|0
     end
     local.get $4
     i32.const 1
     i32.add
     local.set $4
     local.get $2
     i32.const 2
     i32.add
     local.set $2
    else     
     local.get $5
     i32.const 2048
     i32.lt_u
     if
      local.get $4
      i32.const 2
      i32.add
      local.set $4
      local.get $2
      i32.const 2
      i32.add
      local.set $2
     else      
      local.get $5
      i32.const 64512
      i32.and
      i32.const 55296
      i32.eq
      if (result i32)
       local.get $2
       i32.const 2
       i32.add
       local.get $3
       i32.lt_u
      else       
       i32.const 0
      end
      if
       local.get $2
       i32.load16_u offset=2
       i32.const 64512
       i32.and
       i32.const 56320
       i32.eq
       if
        local.get $2
        i32.const 4
        i32.add
        local.set $2
        local.get $4
        i32.const 4
        i32.add
        local.set $4
        br $continue|0
       end
      end
      local.get $2
      i32.const 2
      i32.add
      local.set $2
      local.get $4
      i32.const 3
      i32.add
      local.set $4
     end
    end
    br $continue|0
   end
   unreachable
  end
  local.get $4
  local.set $5
  local.get $0
  call $~lib/rt/stub/__release
  local.get $5
 )
 (func $~lib/string/String.UTF8.encode (; 145 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.set $2
  local.get $0
  local.get $0
  i32.const 16
  i32.sub
  i32.load offset=12
  i32.add
  local.set $3
  local.get $0
  local.get $1
  call $~lib/string/String.UTF8.byteLength
  i32.const 0
  call $~lib/rt/stub/__alloc
  local.set $4
  local.get $4
  local.set $5
  block $break|0
   loop $continue|0
    local.get $2
    local.get $3
    i32.lt_u
    i32.eqz
    br_if $break|0
    local.get $2
    i32.load16_u
    local.set $6
    local.get $6
    i32.const 128
    i32.lt_u
    if
     local.get $1
     if (result i32)
      local.get $6
      i32.eqz
     else      
      i32.const 0
     end
     if
      br $break|0
     end
     local.get $5
     local.get $6
     i32.store8
     local.get $5
     i32.const 1
     i32.add
     local.set $5
     local.get $2
     i32.const 2
     i32.add
     local.set $2
    else     
     local.get $6
     i32.const 2048
     i32.lt_u
     if
      local.get $5
      local.get $6
      i32.const 6
      i32.shr_u
      i32.const 192
      i32.or
      i32.store8
      local.get $5
      local.get $6
      i32.const 63
      i32.and
      i32.const 128
      i32.or
      i32.store8 offset=1
      local.get $5
      i32.const 2
      i32.add
      local.set $5
      local.get $2
      i32.const 2
      i32.add
      local.set $2
     else      
      local.get $6
      i32.const 64512
      i32.and
      i32.const 55296
      i32.eq
      if (result i32)
       local.get $2
       i32.const 2
       i32.add
       local.get $3
       i32.lt_u
      else       
       i32.const 0
      end
      if
       local.get $2
       i32.load16_u offset=2
       local.set $7
       local.get $7
       i32.const 64512
       i32.and
       i32.const 56320
       i32.eq
       if
        i32.const 65536
        local.get $6
        i32.const 1023
        i32.and
        i32.const 10
        i32.shl
        i32.add
        local.get $7
        i32.const 1023
        i32.and
        i32.add
        local.set $6
        local.get $5
        local.get $6
        i32.const 18
        i32.shr_u
        i32.const 240
        i32.or
        i32.store8
        local.get $5
        local.get $6
        i32.const 12
        i32.shr_u
        i32.const 63
        i32.and
        i32.const 128
        i32.or
        i32.store8 offset=1
        local.get $5
        local.get $6
        i32.const 6
        i32.shr_u
        i32.const 63
        i32.and
        i32.const 128
        i32.or
        i32.store8 offset=2
        local.get $5
        local.get $6
        i32.const 63
        i32.and
        i32.const 128
        i32.or
        i32.store8 offset=3
        local.get $2
        i32.const 4
        i32.add
        local.set $2
        local.get $5
        i32.const 4
        i32.add
        local.set $5
        br $continue|0
       end
      end
      local.get $5
      local.get $6
      i32.const 12
      i32.shr_u
      i32.const 224
      i32.or
      i32.store8
      local.get $5
      local.get $6
      i32.const 6
      i32.shr_u
      i32.const 63
      i32.and
      i32.const 128
      i32.or
      i32.store8 offset=1
      local.get $5
      local.get $6
      i32.const 63
      i32.and
      i32.const 128
      i32.or
      i32.store8 offset=2
      local.get $2
      i32.const 2
      i32.add
      local.set $2
      local.get $5
      i32.const 3
      i32.add
      local.set $5
     end
    end
    br $continue|0
   end
   unreachable
  end
  local.get $1
  if
   local.get $2
   local.get $3
   i32.le_u
   i32.eqz
   if
    i32.const 0
    i32.const 1504
    i32.const 567
    i32.const 8
    call $~lib/builtins/abort
    unreachable
   end
   local.get $4
   local.get $5
   local.get $4
   i32.sub
   i32.const 1
   i32.add
   call $~lib/rt/stub/__realloc
   local.set $4
   local.get $5
   i32.const 0
   i32.store8
  else   
   local.get $2
   local.get $3
   i32.eq
   i32.eqz
   if
    i32.const 0
    i32.const 1504
    i32.const 571
    i32.const 8
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $4
  call $~lib/rt/stub/__retain
  local.set $6
  local.get $0
  call $~lib/rt/stub/__release
  local.get $6
 )
 (func $~lib/assemblyscript-json/util/index/Buffer.fromString (; 146 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  local.get $0
  i32.const 0
  call $~lib/string/String.UTF8.byteLength
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  local.get $0
  i32.const 0
  call $~lib/string/String.UTF8.encode
  local.tee $2
  local.set $3
  local.get $1
  call $~lib/assemblyscript-json/util/index/Buffer.getPtr
  local.get $3
  local.get $0
  i32.const 0
  call $~lib/string/String.UTF8.byteLength
  call $~lib/memory/memory.copy
  local.get $1
  local.set $4
  local.get $2
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#serialize (; 147 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#toString
  local.tee $1
  call $~lib/assemblyscript-json/util/index/Buffer.fromString
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $assembly/hello/main/__wrapper_hello (; 148 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  i32.const 0
  call $assembly/hello/main/__near_ArgsParser_hello#constructor
  local.set $3
  local.get $3
  local.tee $4
  local.get $1
  local.tee $5
  local.get $4
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $5
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $5
  i32.store
  local.get $3
  local.tee $5
  i32.const 0
  local.get $3
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#constructor
  local.set $4
  local.get $5
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $4
  i32.store offset=4
  local.get $3
  i32.load offset=4
  local.get $1
  i32.const 0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_hello>#deserialize
  local.get $3
  i32.load offset=12
  call $assembly/hello/main/hello
  local.set $4
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $5
  local.get $4
  i32.const 0
  call $~lib/string/String.__eq
  if
   local.get $5
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $5
   local.get $4
   i32.const 0
   call $~lib/nearEntry/encode<~lib/string/String>
   call $~lib/rt/stub/__release
  end
  local.get $5
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $6
  local.get $6
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $6
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $7
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__near_ArgsParser_setKeyValue#constructor (; 149 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 20
   i32.const 28
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store8 offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
  i32.const 0
  i32.store offset=16
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#constructor (; 150 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 29
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#peekChar (; 151 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.ge_s
  if
   i32.const -1
   return
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  i32.load offset=4
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#isWhitespace (; 152 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 9
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 10
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 13
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 32
   i32.eq
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readChar (; 153 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.lt_s
  i32.eqz
  if
   i32.const 784
   i32.const 840
   i32.const 112
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.tee $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $1
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#skipWhitespace (; 154 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#peekChar
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#isWhitespace
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readChar
    drop
    br $continue|0
   end
   unreachable
  end
 )
 (func $assembly/hello/main/__near_ArgsParser_setKeyValue#pushObject (; 155 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load8_u offset=8
  i32.const 0
  i32.ne
  i32.eqz
  if
   local.get $1
   i32.const 0
   call $~lib/string/String.__eq
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.eq
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 106
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.const 1
   i32.store8 offset=8
   i32.const 1
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  else   
   local.get $1
   i32.const 0
   call $~lib/string/String.__ne
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.ne
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 110
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushObject
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readHexDigit (; 156 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readChar
  local.set $1
  local.get $1
  global.get $~lib/assemblyscript-json/decoder/CHAR_0
  i32.sub
  local.set $2
  local.get $2
  i32.const 9
  i32.gt_s
  if
   local.get $1
   global.get $~lib/assemblyscript-json/decoder/CHAR_A
   i32.sub
   i32.const 10
   i32.add
   local.set $2
   local.get $2
   i32.const 10
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $2
    i32.const 15
    i32.gt_s
   end
   if
    local.get $1
    global.get $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
    i32.sub
    i32.const 10
    i32.add
    local.set $2
   end
  end
  i32.const 2
  i32.const 2
  i32.const 13
  i32.const 0
  call $~lib/rt/__allocArray
  local.set $3
  local.get $3
  i32.load offset=4
  local.set $4
  local.get $4
  local.get $1
  i32.store
  local.get $4
  local.get $2
  i32.store offset=4
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $2
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $2
   i32.const 16
   i32.lt_s
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1864
   i32.const 840
   i32.const 269
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readEscapedChar (; 157 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readChar
  local.set $1
  local.get $1
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1168
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1600
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1600
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1624
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1624
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1648
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1672
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1696
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1720
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1744
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1768
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1792
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1840
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readHexDigit
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readHexDigit
   local.set $3
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readHexDigit
   local.set $4
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readHexDigit
   local.set $5
   local.get $2
   i32.const 4096
   i32.mul
   local.get $3
   i32.const 256
   i32.mul
   i32.add
   local.get $4
   i32.const 16
   i32.mul
   i32.add
   local.get $5
   i32.add
   local.set $6
   local.get $6
   call $~lib/string/String.fromCodePoint
   return
  end
  i32.const 0
  i32.eqz
  if
   i32.const 1920
   i32.const 1
   global.set $~lib/argc
   local.get $1
   i32.const 0
   call $~lib/string/String.fromCharCode|trampoline
   local.tee $6
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 840
   i32.const 255
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 656
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $6
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readString (; 158 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1192
   i32.const 840
   i32.const 197
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.set $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $2
  loop $loop|0
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readChar
   local.set $3
   local.get $3
   i32.const 32
   i32.ge_s
   i32.eqz
   if
    i32.const 1432
    i32.const 840
    i32.const 203
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 1168
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   if
    i32.const 1
    global.set $~lib/argc
    local.get $0
    i32.load offset=4
    local.get $1
    i32.const 0
    call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
    local.set $4
    local.get $2
    call $~lib/array/Array<~lib/string/String>#get:length
    i32.const 0
    i32.eq
    if
     local.get $4
     local.set $5
     local.get $2
     call $~lib/rt/stub/__release
     local.get $5
     return
    end
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#push
    drop
    local.get $2
    i32.const 656
    call $~lib/array/Array<~lib/string/String>#join
    local.set $5
    local.get $4
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $5
    return
   else    
    local.get $3
    i32.const 1600
    i32.const 0
    call $~lib/string/String#charCodeAt
    i32.eq
    if
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.get $1
     i32.const 1
     i32.add
     i32.gt_s
     if
      local.get $2
      i32.const 1
      global.set $~lib/argc
      local.get $0
      i32.load offset=4
      local.get $1
      i32.const 0
      call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
      local.tee $4
      call $~lib/array/Array<~lib/string/String>#push
      drop
      local.get $4
      call $~lib/rt/stub/__release
     end
     local.get $2
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readEscapedChar
     local.tee $4
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
   end
   br $loop|0
  end
  unreachable
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#parseKey (; 159 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#skipWhitespace
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readString
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readChar
  i32.const 2000
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 2024
   i32.const 840
   i32.const 159
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#parseObject (; 160 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#peekChar
  i32.const 928
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_setKeyValue#pushObject
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#peekChar
     i32.const 1080
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 142
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#parseKey
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readChar
   i32.const 1080
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2064
    i32.const 840
    i32.const 149
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popObject
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__near_ArgsParser_setKeyValue#pushArray (; 161 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushArray
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#parseArray (; 162 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#peekChar
  i32.const 2128
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_setKeyValue#pushArray
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#peekChar
     i32.const 2216
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 176
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readChar
   i32.const 2216
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2240
    i32.const 840
    i32.const 182
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popArray
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__near_ArgsParser_setKeyValue#setString (; 163 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 3584
  call $~lib/string/String.__eq
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=12
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=12
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   return
  end
  local.get $1
  i32.const 3608
  call $~lib/string/String.__eq
  if
   local.get $0
   local.tee $4
   local.get $2
   local.tee $3
   local.get $4
   i32.load offset=16
   local.tee $4
   i32.ne
   if
    local.get $3
    call $~lib/rt/stub/__retain
    drop
    local.get $4
    call $~lib/rt/stub/__release
   end
   local.get $3
   i32.store offset=16
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setString
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#parseString (; 164 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#peekChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.load
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readString
  local.tee $1
  call $assembly/hello/main/__near_ArgsParser_setKeyValue#setString
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readAndAssert (; 165 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $2
    call $~lib/string/String#charCodeAt
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readChar
    i32.eq
    i32.eqz
    if
     i32.const 2416
     local.get $1
     call $~lib/string/String.__concat
     local.tee $3
     i32.const 2456
     call $~lib/string/String.__concat
     local.tee $4
     i32.const 840
     i32.const 321
     i32.const 6
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#parseBoolean (; 166 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#peekChar
  i32.const 184
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/FALSE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 0
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#peekChar
  i32.const 160
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/TRUE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 1
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#parseNumber (; 167 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  local.set $1
  i64.const 1
  local.set $2
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#peekChar
  i32.const 2568
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i64.const -1
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readChar
   drop
  end
  i32.const 0
  local.set $3
  block $break|0
   loop $continue|0
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#peekChar
    i32.le_s
    if (result i32)
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#peekChar
     global.get $~lib/assemblyscript-json/decoder/CHAR_9
     i32.le_s
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readChar
    local.set $4
    local.get $1
    i64.const 10
    i64.mul
    local.set $1
    local.get $1
    local.get $4
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    i32.sub
    i64.extend_i32_s
    i64.add
    local.set $1
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $continue|0
   end
   unreachable
  end
  local.get $3
  i32.const 0
  i32.gt_s
  if
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   local.get $1
   local.get $2
   i64.mul
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setInteger
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/main/__near_ArgsParser_setKeyValue#setNull (; 168 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 3584
  call $~lib/string/String.__eq
  if
   local.get $0
   local.tee $2
   i32.const 0
   local.tee $3
   local.get $2
   i32.load offset=12
   local.tee $2
   i32.ne
   if
    local.get $3
    call $~lib/rt/stub/__retain
    drop
    local.get $2
    call $~lib/rt/stub/__release
   end
   local.get $3
   i32.store offset=12
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $1
  i32.const 3608
  call $~lib/string/String.__eq
  if
   local.get $0
   local.tee $3
   i32.const 0
   local.tee $2
   local.get $3
   i32.load offset=16
   local.tee $3
   i32.ne
   if
    local.get $2
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $2
   i32.store offset=16
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setNull
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#parseNull (; 169 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#peekChar
  i32.const 216
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/NULL_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   call $assembly/hello/main/__near_ArgsParser_setKeyValue#setNull
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#parseValue (; 170 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#parseObject
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#parseArray
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#parseString
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#parseBoolean
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#parseNumber
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#parseNull
  end
  local.set $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#skipWhitespace
  local.get $1
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#deserialize (; 171 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  i32.const 0
  i32.ne
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
  else   
   local.get $0
   local.tee $4
   i32.const 0
   local.get $1
   call $~lib/assemblyscript-json/decoder/DecoderState#constructor
   local.set $3
   local.get $4
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#parseValue
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3176
   i32.const 840
   i32.const 100
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/near-runtime-ts/util/util.toUTF8 (; 172 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/string/String.UTF8.encode
  local.tee $2
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/near-runtime-ts/util/util.stringToBytes (; 173 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.const 1
  call $~lib/string/String.UTF8.byteLength
  i32.const 1
  i32.sub
  local.set $1
  i32.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#constructor
  local.set $2
  local.get $2
  i32.load offset=4
  local.get $0
  i32.const 0
  call $~lib/near-runtime-ts/util/util.toUTF8
  local.get $1
  call $~lib/memory/memory.copy
  local.get $2
  local.set $3
  local.get $0
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/near-runtime-ts/storage/Storage#setString (; 174 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $3
  local.get $2
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $4
  local.get $3
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $3
  i32.load offset=4
  i64.extend_i32_u
  local.get $4
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $4
  i32.load offset=4
  i64.extend_i32_u
  i64.const 0
  call $~lib/near-runtime-ts/runtime_api/runtime_api.storage_write
  local.set $5
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/setKeyValue (; 175 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  global.get $~lib/near-runtime-ts/storage/storage
  local.get $0
  local.get $1
  call $~lib/near-runtime-ts/storage/Storage#setString
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__wrapper_setKeyValue (; 176 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  i32.const 0
  call $assembly/hello/main/__near_ArgsParser_setKeyValue#constructor
  local.set $3
  local.get $3
  local.tee $4
  local.get $1
  local.tee $5
  local.get $4
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $5
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $5
  i32.store
  local.get $3
  local.tee $5
  i32.const 0
  local.get $3
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#constructor
  local.set $4
  local.get $5
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $4
  i32.store offset=4
  local.get $3
  i32.load offset=4
  local.get $1
  i32.const 0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setKeyValue>#deserialize
  local.get $3
  i32.load offset=12
  local.get $3
  i32.load offset=16
  call $assembly/hello/main/setKeyValue
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__near_ArgsParser_getValueByKey#constructor (; 177 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 16
   i32.const 30
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store8 offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#constructor (; 178 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 31
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#peekChar (; 179 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.ge_s
  if
   i32.const -1
   return
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  i32.load offset=4
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#isWhitespace (; 180 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 9
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 10
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 13
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 32
   i32.eq
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readChar (; 181 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.lt_s
  i32.eqz
  if
   i32.const 784
   i32.const 840
   i32.const 112
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.tee $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $1
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#skipWhitespace (; 182 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#peekChar
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#isWhitespace
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readChar
    drop
    br $continue|0
   end
   unreachable
  end
 )
 (func $assembly/hello/main/__near_ArgsParser_getValueByKey#pushObject (; 183 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load8_u offset=8
  i32.const 0
  i32.ne
  i32.eqz
  if
   local.get $1
   i32.const 0
   call $~lib/string/String.__eq
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.eq
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 165
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.const 1
   i32.store8 offset=8
   i32.const 1
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  else   
   local.get $1
   i32.const 0
   call $~lib/string/String.__ne
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.ne
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 169
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushObject
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readHexDigit (; 184 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readChar
  local.set $1
  local.get $1
  global.get $~lib/assemblyscript-json/decoder/CHAR_0
  i32.sub
  local.set $2
  local.get $2
  i32.const 9
  i32.gt_s
  if
   local.get $1
   global.get $~lib/assemblyscript-json/decoder/CHAR_A
   i32.sub
   i32.const 10
   i32.add
   local.set $2
   local.get $2
   i32.const 10
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $2
    i32.const 15
    i32.gt_s
   end
   if
    local.get $1
    global.get $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
    i32.sub
    i32.const 10
    i32.add
    local.set $2
   end
  end
  i32.const 2
  i32.const 2
  i32.const 13
  i32.const 0
  call $~lib/rt/__allocArray
  local.set $3
  local.get $3
  i32.load offset=4
  local.set $4
  local.get $4
  local.get $1
  i32.store
  local.get $4
  local.get $2
  i32.store offset=4
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $2
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $2
   i32.const 16
   i32.lt_s
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1864
   i32.const 840
   i32.const 269
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readEscapedChar (; 185 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readChar
  local.set $1
  local.get $1
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1168
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1600
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1600
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1624
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1624
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1648
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1672
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1696
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1720
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1744
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1768
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1792
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1840
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readHexDigit
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readHexDigit
   local.set $3
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readHexDigit
   local.set $4
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readHexDigit
   local.set $5
   local.get $2
   i32.const 4096
   i32.mul
   local.get $3
   i32.const 256
   i32.mul
   i32.add
   local.get $4
   i32.const 16
   i32.mul
   i32.add
   local.get $5
   i32.add
   local.set $6
   local.get $6
   call $~lib/string/String.fromCodePoint
   return
  end
  i32.const 0
  i32.eqz
  if
   i32.const 1920
   i32.const 1
   global.set $~lib/argc
   local.get $1
   i32.const 0
   call $~lib/string/String.fromCharCode|trampoline
   local.tee $6
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 840
   i32.const 255
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 656
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $6
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readString (; 186 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1192
   i32.const 840
   i32.const 197
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.set $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $2
  loop $loop|0
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readChar
   local.set $3
   local.get $3
   i32.const 32
   i32.ge_s
   i32.eqz
   if
    i32.const 1432
    i32.const 840
    i32.const 203
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 1168
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   if
    i32.const 1
    global.set $~lib/argc
    local.get $0
    i32.load offset=4
    local.get $1
    i32.const 0
    call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
    local.set $4
    local.get $2
    call $~lib/array/Array<~lib/string/String>#get:length
    i32.const 0
    i32.eq
    if
     local.get $4
     local.set $5
     local.get $2
     call $~lib/rt/stub/__release
     local.get $5
     return
    end
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#push
    drop
    local.get $2
    i32.const 656
    call $~lib/array/Array<~lib/string/String>#join
    local.set $5
    local.get $4
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $5
    return
   else    
    local.get $3
    i32.const 1600
    i32.const 0
    call $~lib/string/String#charCodeAt
    i32.eq
    if
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.get $1
     i32.const 1
     i32.add
     i32.gt_s
     if
      local.get $2
      i32.const 1
      global.set $~lib/argc
      local.get $0
      i32.load offset=4
      local.get $1
      i32.const 0
      call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
      local.tee $4
      call $~lib/array/Array<~lib/string/String>#push
      drop
      local.get $4
      call $~lib/rt/stub/__release
     end
     local.get $2
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readEscapedChar
     local.tee $4
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
   end
   br $loop|0
  end
  unreachable
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#parseKey (; 187 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#skipWhitespace
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readString
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readChar
  i32.const 2000
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 2024
   i32.const 840
   i32.const 159
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#parseObject (; 188 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#peekChar
  i32.const 928
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_getValueByKey#pushObject
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#peekChar
     i32.const 1080
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 142
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#parseKey
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readChar
   i32.const 1080
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2064
    i32.const 840
    i32.const 149
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popObject
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__near_ArgsParser_getValueByKey#pushArray (; 189 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushArray
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#parseArray (; 190 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#peekChar
  i32.const 2128
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_getValueByKey#pushArray
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#peekChar
     i32.const 2216
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 176
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readChar
   i32.const 2216
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2240
    i32.const 840
    i32.const 182
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popArray
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__near_ArgsParser_getValueByKey#setString (; 191 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 3584
  call $~lib/string/String.__eq
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=12
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=12
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setString
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#parseString (; 192 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#peekChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.load
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readString
  local.tee $1
  call $assembly/hello/main/__near_ArgsParser_getValueByKey#setString
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readAndAssert (; 193 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $2
    call $~lib/string/String#charCodeAt
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readChar
    i32.eq
    i32.eqz
    if
     i32.const 2416
     local.get $1
     call $~lib/string/String.__concat
     local.tee $3
     i32.const 2456
     call $~lib/string/String.__concat
     local.tee $4
     i32.const 840
     i32.const 321
     i32.const 6
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#parseBoolean (; 194 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#peekChar
  i32.const 184
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/FALSE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 0
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#peekChar
  i32.const 160
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/TRUE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 1
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#parseNumber (; 195 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  local.set $1
  i64.const 1
  local.set $2
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#peekChar
  i32.const 2568
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i64.const -1
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readChar
   drop
  end
  i32.const 0
  local.set $3
  block $break|0
   loop $continue|0
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#peekChar
    i32.le_s
    if (result i32)
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#peekChar
     global.get $~lib/assemblyscript-json/decoder/CHAR_9
     i32.le_s
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readChar
    local.set $4
    local.get $1
    i64.const 10
    i64.mul
    local.set $1
    local.get $1
    local.get $4
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    i32.sub
    i64.extend_i32_s
    i64.add
    local.set $1
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $continue|0
   end
   unreachable
  end
  local.get $3
  i32.const 0
  i32.gt_s
  if
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   local.get $1
   local.get $2
   i64.mul
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setInteger
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/main/__near_ArgsParser_getValueByKey#setNull (; 196 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 3584
  call $~lib/string/String.__eq
  if
   local.get $0
   local.tee $2
   i32.const 0
   local.tee $3
   local.get $2
   i32.load offset=12
   local.tee $2
   i32.ne
   if
    local.get $3
    call $~lib/rt/stub/__retain
    drop
    local.get $2
    call $~lib/rt/stub/__release
   end
   local.get $3
   i32.store offset=12
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setNull
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#parseNull (; 197 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#peekChar
  i32.const 216
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/NULL_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   call $assembly/hello/main/__near_ArgsParser_getValueByKey#setNull
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#parseValue (; 198 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#parseObject
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#parseArray
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#parseString
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#parseBoolean
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#parseNumber
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#parseNull
  end
  local.set $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#skipWhitespace
  local.get $1
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#deserialize (; 199 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  i32.const 0
  i32.ne
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
  else   
   local.get $0
   local.tee $4
   i32.const 0
   local.get $1
   call $~lib/assemblyscript-json/decoder/DecoderState#constructor
   local.set $3
   local.get $4
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#parseValue
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3176
   i32.const 840
   i32.const 100
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/near-runtime-ts/storage/Storage#_internalReadBytes (; 200 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i64)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $2
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $2
  i32.load offset=4
  i64.extend_i32_u
  i64.const 0
  call $~lib/near-runtime-ts/runtime_api/runtime_api.storage_read
  local.set $3
  local.get $3
  i64.const 1
  i64.eq
  if
   i64.const 0
   call $~lib/near-runtime-ts/runtime_api/runtime_api.register_len
   local.set $4
   i32.const 0
   local.get $4
   i32.wrap_i64
   call $~lib/typedarray/Uint8Array#constructor
   local.set $5
   i64.const 0
   local.get $5
   i32.load offset=4
   i64.extend_i32_u
   call $~lib/near-runtime-ts/runtime_api/runtime_api.read_register
   local.get $5
   local.set $6
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   local.get $6
   return
  else   
   i32.const 0
   call $~lib/rt/stub/__retain
   local.set $5
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   local.get $5
   return
  end
  unreachable
 )
 (func $~lib/arraybuffer/ArrayBufferView#get:byteOffset (; 201 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load
  i32.sub
 )
 (func $~lib/arraybuffer/ArrayBuffer#get:byteLength (; 202 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.const 16
  i32.sub
  i32.load offset=12
 )
 (func $~lib/arraybuffer/ArrayBuffer#slice (; 203 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  call $~lib/arraybuffer/ArrayBuffer#get:byteLength
  local.set $3
  local.get $1
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $3
   local.get $1
   i32.add
   local.tee $4
   i32.const 0
   local.tee $5
   local.get $4
   local.get $5
   i32.gt_s
   select
  else   
   local.get $1
   local.tee $4
   local.get $3
   local.tee $5
   local.get $4
   local.get $5
   i32.lt_s
   select
  end
  local.set $1
  local.get $2
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $3
   local.get $2
   i32.add
   local.tee $4
   i32.const 0
   local.tee $5
   local.get $4
   local.get $5
   i32.gt_s
   select
  else   
   local.get $2
   local.tee $4
   local.get $3
   local.tee $5
   local.get $4
   local.get $5
   i32.lt_s
   select
  end
  local.set $2
  local.get $2
  local.get $1
  i32.sub
  local.tee $4
  i32.const 0
  local.tee $5
  local.get $4
  local.get $5
  i32.gt_s
  select
  local.set $6
  local.get $6
  i32.const 0
  call $~lib/rt/stub/__alloc
  local.set $7
  local.get $7
  local.get $0
  local.get $1
  i32.add
  local.get $6
  call $~lib/memory/memory.copy
  local.get $7
  call $~lib/rt/stub/__retain
 )
 (func $~lib/near-runtime-ts/util/util.uint8ArrayToBuffer (; 204 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $1
  local.get $0
  call $~lib/arraybuffer/ArrayBufferView#get:byteOffset
  local.get $0
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  local.get $0
  call $~lib/arraybuffer/ArrayBufferView#get:byteOffset
  i32.add
  call $~lib/arraybuffer/ArrayBuffer#slice
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/string/String.UTF8.decode (; 205 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $0
  call $~lib/arraybuffer/ArrayBuffer#get:byteLength
  local.get $1
  call $~lib/string/String.UTF8.decodeUnsafe
  local.set $2
  local.get $0
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/near-runtime-ts/util/util.bytesToString (; 206 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.const 0
  i32.eq
  if
   i32.const 0
   call $~lib/rt/stub/__retain
   local.set $1
   local.get $0
   call $~lib/rt/stub/__release
   local.get $1
   return
  end
  local.get $0
  call $~lib/near-runtime-ts/util/util.uint8ArrayToBuffer
  local.tee $1
  i32.const 1
  call $~lib/string/String.UTF8.decode
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/near-runtime-ts/storage/Storage#getString (; 207 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/near-runtime-ts/storage/Storage#_internalReadBytes
  local.tee $2
  call $~lib/near-runtime-ts/util/util.bytesToString
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/getValueByKey (; 208 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  global.get $~lib/near-runtime-ts/storage/storage
  local.get $0
  call $~lib/near-runtime-ts/storage/Storage#getString
  local.tee $1
  if (result i32)
   local.get $1
  else   
   unreachable
  end
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
 )
 (func $assembly/hello/main/__wrapper_getValueByKey (; 209 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  i32.const 0
  call $assembly/hello/main/__near_ArgsParser_getValueByKey#constructor
  local.set $3
  local.get $3
  local.tee $4
  local.get $1
  local.tee $5
  local.get $4
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $5
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $5
  i32.store
  local.get $3
  local.tee $5
  i32.const 0
  local.get $3
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#constructor
  local.set $4
  local.get $5
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $4
  i32.store offset=4
  local.get $3
  i32.load offset=4
  local.get $1
  i32.const 0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_getValueByKey>#deserialize
  local.get $3
  i32.load offset=12
  call $assembly/hello/main/getValueByKey
  local.set $4
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $5
  local.get $4
  i32.const 0
  call $~lib/string/String.__eq
  if
   local.get $5
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $5
   local.get $4
   i32.const 0
   call $~lib/nearEntry/encode<~lib/string/String>
   call $~lib/rt/stub/__release
  end
  local.get $5
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $6
  local.get $6
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $6
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $7
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__near_ArgsParser_setValue#constructor (; 210 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 16
   i32.const 32
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store8 offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#constructor (; 211 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 33
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#peekChar (; 212 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.ge_s
  if
   i32.const -1
   return
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  i32.load offset=4
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#isWhitespace (; 213 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 9
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 10
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 13
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 32
   i32.eq
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readChar (; 214 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.lt_s
  i32.eqz
  if
   i32.const 784
   i32.const 840
   i32.const 112
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.tee $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $1
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#skipWhitespace (; 215 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#peekChar
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#isWhitespace
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readChar
    drop
    br $continue|0
   end
   unreachable
  end
 )
 (func $assembly/hello/main/__near_ArgsParser_setValue#pushObject (; 216 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load8_u offset=8
  i32.const 0
  i32.ne
  i32.eqz
  if
   local.get $1
   i32.const 0
   call $~lib/string/String.__eq
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.eq
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 233
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.const 1
   i32.store8 offset=8
   i32.const 1
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  else   
   local.get $1
   i32.const 0
   call $~lib/string/String.__ne
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.ne
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 237
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushObject
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readHexDigit (; 217 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readChar
  local.set $1
  local.get $1
  global.get $~lib/assemblyscript-json/decoder/CHAR_0
  i32.sub
  local.set $2
  local.get $2
  i32.const 9
  i32.gt_s
  if
   local.get $1
   global.get $~lib/assemblyscript-json/decoder/CHAR_A
   i32.sub
   i32.const 10
   i32.add
   local.set $2
   local.get $2
   i32.const 10
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $2
    i32.const 15
    i32.gt_s
   end
   if
    local.get $1
    global.get $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
    i32.sub
    i32.const 10
    i32.add
    local.set $2
   end
  end
  i32.const 2
  i32.const 2
  i32.const 13
  i32.const 0
  call $~lib/rt/__allocArray
  local.set $3
  local.get $3
  i32.load offset=4
  local.set $4
  local.get $4
  local.get $1
  i32.store
  local.get $4
  local.get $2
  i32.store offset=4
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $2
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $2
   i32.const 16
   i32.lt_s
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1864
   i32.const 840
   i32.const 269
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readEscapedChar (; 218 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readChar
  local.set $1
  local.get $1
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1168
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1600
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1600
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1624
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1624
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1648
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1672
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1696
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1720
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1744
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1768
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1792
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1840
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readHexDigit
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readHexDigit
   local.set $3
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readHexDigit
   local.set $4
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readHexDigit
   local.set $5
   local.get $2
   i32.const 4096
   i32.mul
   local.get $3
   i32.const 256
   i32.mul
   i32.add
   local.get $4
   i32.const 16
   i32.mul
   i32.add
   local.get $5
   i32.add
   local.set $6
   local.get $6
   call $~lib/string/String.fromCodePoint
   return
  end
  i32.const 0
  i32.eqz
  if
   i32.const 1920
   i32.const 1
   global.set $~lib/argc
   local.get $1
   i32.const 0
   call $~lib/string/String.fromCharCode|trampoline
   local.tee $6
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 840
   i32.const 255
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 656
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $6
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readString (; 219 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1192
   i32.const 840
   i32.const 197
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.set $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $2
  loop $loop|0
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readChar
   local.set $3
   local.get $3
   i32.const 32
   i32.ge_s
   i32.eqz
   if
    i32.const 1432
    i32.const 840
    i32.const 203
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 1168
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   if
    i32.const 1
    global.set $~lib/argc
    local.get $0
    i32.load offset=4
    local.get $1
    i32.const 0
    call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
    local.set $4
    local.get $2
    call $~lib/array/Array<~lib/string/String>#get:length
    i32.const 0
    i32.eq
    if
     local.get $4
     local.set $5
     local.get $2
     call $~lib/rt/stub/__release
     local.get $5
     return
    end
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#push
    drop
    local.get $2
    i32.const 656
    call $~lib/array/Array<~lib/string/String>#join
    local.set $5
    local.get $4
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $5
    return
   else    
    local.get $3
    i32.const 1600
    i32.const 0
    call $~lib/string/String#charCodeAt
    i32.eq
    if
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.get $1
     i32.const 1
     i32.add
     i32.gt_s
     if
      local.get $2
      i32.const 1
      global.set $~lib/argc
      local.get $0
      i32.load offset=4
      local.get $1
      i32.const 0
      call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
      local.tee $4
      call $~lib/array/Array<~lib/string/String>#push
      drop
      local.get $4
      call $~lib/rt/stub/__release
     end
     local.get $2
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readEscapedChar
     local.tee $4
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
   end
   br $loop|0
  end
  unreachable
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#parseKey (; 220 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#skipWhitespace
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readString
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readChar
  i32.const 2000
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 2024
   i32.const 840
   i32.const 159
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#parseObject (; 221 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#peekChar
  i32.const 928
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_setValue#pushObject
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#peekChar
     i32.const 1080
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 142
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#parseKey
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readChar
   i32.const 1080
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2064
    i32.const 840
    i32.const 149
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popObject
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__near_ArgsParser_setValue#pushArray (; 222 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushArray
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#parseArray (; 223 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#peekChar
  i32.const 2128
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_setValue#pushArray
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#peekChar
     i32.const 2216
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 176
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readChar
   i32.const 2216
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2240
    i32.const 840
    i32.const 182
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popArray
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__near_ArgsParser_setValue#setString (; 224 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 3608
  call $~lib/string/String.__eq
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=12
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=12
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setString
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#parseString (; 225 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#peekChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.load
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readString
  local.tee $1
  call $assembly/hello/main/__near_ArgsParser_setValue#setString
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readAndAssert (; 226 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $2
    call $~lib/string/String#charCodeAt
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readChar
    i32.eq
    i32.eqz
    if
     i32.const 2416
     local.get $1
     call $~lib/string/String.__concat
     local.tee $3
     i32.const 2456
     call $~lib/string/String.__concat
     local.tee $4
     i32.const 840
     i32.const 321
     i32.const 6
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#parseBoolean (; 227 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#peekChar
  i32.const 184
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/FALSE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 0
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#peekChar
  i32.const 160
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/TRUE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 1
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#parseNumber (; 228 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  local.set $1
  i64.const 1
  local.set $2
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#peekChar
  i32.const 2568
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i64.const -1
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readChar
   drop
  end
  i32.const 0
  local.set $3
  block $break|0
   loop $continue|0
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#peekChar
    i32.le_s
    if (result i32)
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#peekChar
     global.get $~lib/assemblyscript-json/decoder/CHAR_9
     i32.le_s
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readChar
    local.set $4
    local.get $1
    i64.const 10
    i64.mul
    local.set $1
    local.get $1
    local.get $4
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    i32.sub
    i64.extend_i32_s
    i64.add
    local.set $1
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $continue|0
   end
   unreachable
  end
  local.get $3
  i32.const 0
  i32.gt_s
  if
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   local.get $1
   local.get $2
   i64.mul
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setInteger
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/main/__near_ArgsParser_setValue#setNull (; 229 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 3608
  call $~lib/string/String.__eq
  if
   local.get $0
   local.tee $2
   i32.const 0
   local.tee $3
   local.get $2
   i32.load offset=12
   local.tee $2
   i32.ne
   if
    local.get $3
    call $~lib/rt/stub/__retain
    drop
    local.get $2
    call $~lib/rt/stub/__release
   end
   local.get $3
   i32.store offset=12
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setNull
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#parseNull (; 230 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#peekChar
  i32.const 216
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/NULL_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   call $assembly/hello/main/__near_ArgsParser_setValue#setNull
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#parseValue (; 231 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#parseObject
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#parseArray
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#parseString
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#parseBoolean
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#parseNumber
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#parseNull
  end
  local.set $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#skipWhitespace
  local.get $1
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#deserialize (; 232 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  i32.const 0
  i32.ne
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
  else   
   local.get $0
   local.tee $4
   i32.const 0
   local.get $1
   call $~lib/assemblyscript-json/decoder/DecoderState#constructor
   local.set $3
   local.get $4
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#parseValue
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3176
   i32.const 840
   i32.const 100
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/setValue (; 233 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 2304
  local.get $0
  call $~lib/near-runtime-ts/storage/Storage#setString
  local.get $0
 )
 (func $assembly/hello/main/__wrapper_setValue (; 234 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  i32.const 0
  call $assembly/hello/main/__near_ArgsParser_setValue#constructor
  local.set $3
  local.get $3
  local.tee $4
  local.get $1
  local.tee $5
  local.get $4
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $5
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $5
  i32.store
  local.get $3
  local.tee $5
  i32.const 0
  local.get $3
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#constructor
  local.set $4
  local.get $5
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $4
  i32.store offset=4
  local.get $3
  i32.load offset=4
  local.get $1
  i32.const 0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_setValue>#deserialize
  local.get $3
  i32.load offset=12
  call $assembly/hello/main/setValue
  local.set $4
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $5
  local.get $4
  i32.const 0
  call $~lib/string/String.__eq
  if
   local.get $5
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $5
   local.get $4
   i32.const 0
   call $~lib/nearEntry/encode<~lib/string/String>
   call $~lib/rt/stub/__release
  end
  local.get $5
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $6
  local.get $6
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $6
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $7
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/getValue (; 235 ;) (type $FUNCSIG$i) (result i32)
  (local $0 i32)
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 2304
  call $~lib/near-runtime-ts/storage/Storage#getString
  local.tee $0
  if (result i32)
   local.get $0
  else   
   unreachable
  end
  call $~lib/rt/stub/__retain
 )
 (func $assembly/hello/main/__wrapper_getValue (; 236 ;) (type $FUNCSIG$v)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  call $assembly/hello/main/getValue
  local.set $0
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $1
  local.get $0
  i32.const 0
  call $~lib/string/String.__eq
  if
   local.get $1
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $1
   local.get $0
   i32.const 0
   call $~lib/nearEntry/encode<~lib/string/String>
   call $~lib/rt/stub/__release
  end
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $2
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $2
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $3
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
 )
 (func $~lib/near-runtime-ts/storage/Storage#_fetchIter (; 237 ;) (type $FUNCSIG$iiji) (param $0 i32) (param $1 i64) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  (local $6 i32)
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $3
  block $break|0
   loop $continue|0
    local.get $2
    local.tee $4
    i32.const 1
    i32.sub
    local.set $2
    local.get $4
    i32.const 0
    i32.ne
    if (result i32)
     local.get $1
     i64.const 0
     i64.const 1
     call $~lib/near-runtime-ts/runtime_api/runtime_api.storage_iter_next
     i64.const 1
     i64.eq
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    i64.const 0
    call $~lib/near-runtime-ts/runtime_api/runtime_api.register_len
    local.set $5
    i32.const 0
    local.get $5
    i32.wrap_i64
    call $~lib/typedarray/Uint8Array#constructor
    local.set $4
    i64.const 0
    local.get $4
    i32.load offset=4
    i64.extend_i32_u
    call $~lib/near-runtime-ts/runtime_api/runtime_api.read_register
    local.get $4
    i32.const 0
    i32.ne
    if
     local.get $3
     local.get $4
     call $~lib/near-runtime-ts/util/util.bytesToString
     local.tee $6
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $6
     call $~lib/rt/stub/__release
    end
    local.get $4
    call $~lib/rt/stub/__release
    br $continue|0
   end
   unreachable
  end
  local.get $3
 )
 (func $~lib/near-runtime-ts/storage/Storage#keys (; 238 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $3
  local.get $3
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $3
  i32.load offset=4
  i64.extend_i32_u
  call $~lib/near-runtime-ts/runtime_api/runtime_api.storage_iter_prefix
  local.set $4
  local.get $0
  local.get $4
  local.get $2
  call $~lib/near-runtime-ts/storage/Storage#_fetchIter
  local.set $5
  local.get $3
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $5
 )
 (func $~lib/near-runtime-ts/storage/Storage#keys|trampoline (; 239 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  block $1of1
   block $0of1
    block $outOfRange
     global.get $~lib/argc
     i32.const 1
     i32.sub
     br_table $0of1 $1of1 $outOfRange
    end
    unreachable
   end
   i32.const -1
   local.set $2
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/near-runtime-ts/storage/Storage#keys
 )
 (func $~lib/array/Array<~lib/string/String>#__unchecked_get (; 240 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  call $~lib/rt/stub/__retain
 )
 (func $~lib/array/Array<~lib/string/String>#__get (; 241 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 1272
   i32.const 1384
   i32.const 106
   i32.const 45
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $0
  i32.load offset=8
  i32.const 2
  i32.shr_u
  i32.ge_u
  if
   i32.const 672
   i32.const 1384
   i32.const 109
   i32.const 61
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/array/Array<~lib/string/String>#__unchecked_get
 )
 (func $assembly/hello/main/getAllKeys (; 242 ;) (type $FUNCSIG$i) (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  i32.const 1
  global.set $~lib/argc
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 1696
  i32.const 0
  call $~lib/near-runtime-ts/storage/Storage#keys|trampoline
  local.set $0
  local.get $0
  call $~lib/array/Array<~lib/string/String>#get:length
  i32.const 1
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 952
   i32.const 952
   i32.const 2
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#__get
  local.tee $1
  i32.const 2304
  call $~lib/string/String.__eq
  i32.eqz
  if
   i32.const 0
   i32.const 952
   i32.const 953
   i32.const 2
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#pushArray (; 243 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#writeKey
  local.get $0
  i32.const 2128
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  local.get $0
  i32.load
  i32.const 1
  call $~lib/array/Array<i32>#push
  drop
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/array/Array<i32>#pop (; 244 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.load offset=12
  local.set $1
  local.get $1
  i32.const 1
  i32.lt_s
  if
   i32.const 3640
   i32.const 1384
   i32.const 287
   i32.const 20
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 1
  i32.sub
  local.tee $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $2
  local.get $0
  local.get $1
  i32.store offset=12
  local.get $2
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#popArray (; 245 ;) (type $FUNCSIG$vi) (param $0 i32)
  local.get $0
  i32.const 2216
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  local.get $0
  i32.load
  call $~lib/array/Array<i32>#pop
  drop
 )
 (func $~lib/nearEntry/encode<~lib/array/Array<~lib/string/String>> (; 246 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.eq
  if
   local.get $0
   local.get $2
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $0
   local.get $2
   call $~lib/assemblyscript-json/encoder/JSONEncoder#pushArray
   drop
   block $break|0
    i32.const 0
    local.set $3
    loop $loop|0
     local.get $3
     local.get $1
     call $~lib/array/Array<~lib/string/String>#get:length
     i32.lt_s
     i32.eqz
     br_if $break|0
     local.get $0
     local.get $1
     local.get $3
     call $~lib/array/Array<~lib/string/String>#__get
     local.tee $4
     i32.const 0
     call $~lib/nearEntry/encode<~lib/string/String>
     call $~lib/rt/stub/__release
     local.get $3
     i32.const 1
     i32.add
     local.set $3
     local.get $4
     call $~lib/rt/stub/__release
     br $loop|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#popArray
  end
  local.get $0
  local.set $4
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $assembly/hello/main/__wrapper_getAllKeys (; 247 ;) (type $FUNCSIG$v)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  call $assembly/hello/main/getAllKeys
  local.set $0
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $1
  local.get $1
  local.get $0
  i32.const 0
  call $~lib/nearEntry/encode<~lib/array/Array<~lib/string/String>>
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $2
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $2
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $3
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/benchmark (; 248 ;) (type $FUNCSIG$i) (result i32)
  (local $0 i32)
  (local $1 i32)
  i32.const 0
  local.set $0
  block $break|0
   loop $continue|0
    local.get $0
    i32.const 10
    i32.lt_s
    i32.eqz
    br_if $break|0
    global.get $~lib/near-runtime-ts/storage/storage
    local.get $0
    call $~lib/number/I32#toString
    local.tee $1
    i32.const 3688
    call $~lib/near-runtime-ts/storage/Storage#setString
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    local.get $1
    call $~lib/rt/stub/__release
    br $continue|0
   end
   unreachable
  end
  i32.const 1
  global.set $~lib/argc
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 656
  i32.const 0
  call $~lib/near-runtime-ts/storage/Storage#keys|trampoline
 )
 (func $assembly/hello/main/__wrapper_benchmark (; 249 ;) (type $FUNCSIG$v)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  call $assembly/hello/main/benchmark
  local.set $0
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $1
  local.get $1
  local.get $0
  i32.const 0
  call $~lib/nearEntry/encode<~lib/array/Array<~lib/string/String>>
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $2
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $2
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $3
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__near_ArgsParser_benchmark_storage#constructor (; 250 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 16
   i32.const 34
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store8 offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#constructor (; 251 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 35
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#peekChar (; 252 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.ge_s
  if
   i32.const -1
   return
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  i32.load offset=4
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#isWhitespace (; 253 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 9
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 10
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 13
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 32
   i32.eq
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readChar (; 254 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.lt_s
  i32.eqz
  if
   i32.const 784
   i32.const 840
   i32.const 112
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.tee $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $1
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#skipWhitespace (; 255 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#peekChar
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#isWhitespace
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readChar
    drop
    br $continue|0
   end
   unreachable
  end
 )
 (func $assembly/hello/main/__near_ArgsParser_benchmark_storage#pushObject (; 256 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load8_u offset=8
  i32.const 0
  i32.ne
  i32.eqz
  if
   local.get $1
   i32.const 0
   call $~lib/string/String.__eq
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.eq
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 348
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.const 1
   i32.store8 offset=8
   i32.const 1
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  else   
   local.get $1
   i32.const 0
   call $~lib/string/String.__ne
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.ne
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 352
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushObject
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readHexDigit (; 257 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readChar
  local.set $1
  local.get $1
  global.get $~lib/assemblyscript-json/decoder/CHAR_0
  i32.sub
  local.set $2
  local.get $2
  i32.const 9
  i32.gt_s
  if
   local.get $1
   global.get $~lib/assemblyscript-json/decoder/CHAR_A
   i32.sub
   i32.const 10
   i32.add
   local.set $2
   local.get $2
   i32.const 10
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $2
    i32.const 15
    i32.gt_s
   end
   if
    local.get $1
    global.get $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
    i32.sub
    i32.const 10
    i32.add
    local.set $2
   end
  end
  i32.const 2
  i32.const 2
  i32.const 13
  i32.const 0
  call $~lib/rt/__allocArray
  local.set $3
  local.get $3
  i32.load offset=4
  local.set $4
  local.get $4
  local.get $1
  i32.store
  local.get $4
  local.get $2
  i32.store offset=4
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $2
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $2
   i32.const 16
   i32.lt_s
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1864
   i32.const 840
   i32.const 269
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readEscapedChar (; 258 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readChar
  local.set $1
  local.get $1
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1168
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1600
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1600
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1624
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1624
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1648
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1672
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1696
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1720
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1744
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1768
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1792
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1840
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readHexDigit
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readHexDigit
   local.set $3
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readHexDigit
   local.set $4
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readHexDigit
   local.set $5
   local.get $2
   i32.const 4096
   i32.mul
   local.get $3
   i32.const 256
   i32.mul
   i32.add
   local.get $4
   i32.const 16
   i32.mul
   i32.add
   local.get $5
   i32.add
   local.set $6
   local.get $6
   call $~lib/string/String.fromCodePoint
   return
  end
  i32.const 0
  i32.eqz
  if
   i32.const 1920
   i32.const 1
   global.set $~lib/argc
   local.get $1
   i32.const 0
   call $~lib/string/String.fromCharCode|trampoline
   local.tee $6
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 840
   i32.const 255
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 656
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $6
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readString (; 259 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1192
   i32.const 840
   i32.const 197
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.set $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $2
  loop $loop|0
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readChar
   local.set $3
   local.get $3
   i32.const 32
   i32.ge_s
   i32.eqz
   if
    i32.const 1432
    i32.const 840
    i32.const 203
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 1168
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   if
    i32.const 1
    global.set $~lib/argc
    local.get $0
    i32.load offset=4
    local.get $1
    i32.const 0
    call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
    local.set $4
    local.get $2
    call $~lib/array/Array<~lib/string/String>#get:length
    i32.const 0
    i32.eq
    if
     local.get $4
     local.set $5
     local.get $2
     call $~lib/rt/stub/__release
     local.get $5
     return
    end
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#push
    drop
    local.get $2
    i32.const 656
    call $~lib/array/Array<~lib/string/String>#join
    local.set $5
    local.get $4
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $5
    return
   else    
    local.get $3
    i32.const 1600
    i32.const 0
    call $~lib/string/String#charCodeAt
    i32.eq
    if
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.get $1
     i32.const 1
     i32.add
     i32.gt_s
     if
      local.get $2
      i32.const 1
      global.set $~lib/argc
      local.get $0
      i32.load offset=4
      local.get $1
      i32.const 0
      call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
      local.tee $4
      call $~lib/array/Array<~lib/string/String>#push
      drop
      local.get $4
      call $~lib/rt/stub/__release
     end
     local.get $2
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readEscapedChar
     local.tee $4
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
   end
   br $loop|0
  end
  unreachable
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#parseKey (; 260 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#skipWhitespace
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readString
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readChar
  i32.const 2000
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 2024
   i32.const 840
   i32.const 159
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#parseObject (; 261 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#peekChar
  i32.const 928
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_benchmark_storage#pushObject
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#peekChar
     i32.const 1080
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 142
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#parseKey
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readChar
   i32.const 1080
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2064
    i32.const 840
    i32.const 149
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popObject
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__near_ArgsParser_benchmark_storage#pushArray (; 262 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushArray
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#parseArray (; 263 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#peekChar
  i32.const 2128
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_benchmark_storage#pushArray
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#peekChar
     i32.const 2216
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 176
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readChar
   i32.const 2216
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2240
    i32.const 840
    i32.const 182
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popArray
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#parseString (; 264 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#peekChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.load
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readString
  local.tee $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setString
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readAndAssert (; 265 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $2
    call $~lib/string/String#charCodeAt
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readChar
    i32.eq
    i32.eqz
    if
     i32.const 2416
     local.get $1
     call $~lib/string/String.__concat
     local.tee $3
     i32.const 2456
     call $~lib/string/String.__concat
     local.tee $4
     i32.const 840
     i32.const 321
     i32.const 6
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#parseBoolean (; 266 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#peekChar
  i32.const 184
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/FALSE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 0
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#peekChar
  i32.const 160
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/TRUE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 1
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/main/__near_ArgsParser_benchmark_storage#setInteger (; 267 ;) (type $FUNCSIG$viij) (param $0 i32) (param $1 i32) (param $2 i64)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 1696
  call $~lib/string/String.__eq
  if
   local.get $0
   local.get $2
   i32.wrap_i64
   i32.store offset=12
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setInteger
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#parseNumber (; 268 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  local.set $1
  i64.const 1
  local.set $2
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#peekChar
  i32.const 2568
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i64.const -1
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readChar
   drop
  end
  i32.const 0
  local.set $3
  block $break|0
   loop $continue|0
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#peekChar
    i32.le_s
    if (result i32)
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#peekChar
     global.get $~lib/assemblyscript-json/decoder/CHAR_9
     i32.le_s
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readChar
    local.set $4
    local.get $1
    i64.const 10
    i64.mul
    local.set $1
    local.get $1
    local.get $4
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    i32.sub
    i64.extend_i32_s
    i64.add
    local.set $1
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $continue|0
   end
   unreachable
  end
  local.get $3
  i32.const 0
  i32.gt_s
  if
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   local.get $1
   local.get $2
   i64.mul
   call $assembly/hello/main/__near_ArgsParser_benchmark_storage#setInteger
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/main/__near_ArgsParser_benchmark_storage#setNull (; 269 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setNull
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#parseNull (; 270 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#peekChar
  i32.const 216
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/NULL_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   call $assembly/hello/main/__near_ArgsParser_benchmark_storage#setNull
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#parseValue (; 271 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#parseObject
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#parseArray
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#parseString
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#parseBoolean
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#parseNumber
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#parseNull
  end
  local.set $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#skipWhitespace
  local.get $1
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#deserialize (; 272 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  i32.const 0
  i32.ne
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
  else   
   local.get $0
   local.tee $4
   i32.const 0
   local.get $1
   call $~lib/assemblyscript-json/decoder/DecoderState#constructor
   local.set $3
   local.get $4
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#parseValue
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3176
   i32.const 840
   i32.const 100
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/util/string/isSpace (; 273 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 255
  i32.le_s
  if
   block $break|0
    block $case6|0
     block $case5|0
      block $case4|0
       block $case3|0
        block $case2|0
         block $case1|0
          block $case0|0
           local.get $0
           local.set $1
           local.get $1
           i32.const 9
           i32.eq
           br_if $case0|0
           local.get $1
           i32.const 10
           i32.eq
           br_if $case1|0
           local.get $1
           i32.const 11
           i32.eq
           br_if $case2|0
           local.get $1
           i32.const 12
           i32.eq
           br_if $case3|0
           local.get $1
           i32.const 13
           i32.eq
           br_if $case4|0
           local.get $1
           i32.const 32
           i32.eq
           br_if $case5|0
           local.get $1
           i32.const 160
           i32.eq
           br_if $case6|0
           br $break|0
          end
         end
        end
       end
      end
     end
    end
    i32.const 1
    return
   end
   i32.const 0
   return
  end
  local.get $0
  i32.const 8192
  i32.ge_s
  if (result i32)
   local.get $0
   i32.const 8202
   i32.le_s
  else   
   i32.const 0
  end
  if
   i32.const 1
   return
  end
  block $break|1
   block $case6|1
    block $case5|1
     block $case4|1
      block $case3|1
       block $case2|1
        block $case1|1
         block $case0|1
          local.get $0
          local.set $1
          local.get $1
          i32.const 5760
          i32.eq
          br_if $case0|1
          local.get $1
          i32.const 8232
          i32.eq
          br_if $case1|1
          local.get $1
          i32.const 8233
          i32.eq
          br_if $case2|1
          local.get $1
          i32.const 8239
          i32.eq
          br_if $case3|1
          local.get $1
          i32.const 8287
          i32.eq
          br_if $case4|1
          local.get $1
          i32.const 12288
          i32.eq
          br_if $case5|1
          local.get $1
          i32.const 65279
          i32.eq
          br_if $case6|1
          br $break|1
         end
        end
       end
      end
     end
    end
   end
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/util/string/strtol<i32> (; 274 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/string/String#get:length
  local.set $2
  local.get $2
  i32.eqz
  if
   i32.const 0
   local.set $3
   local.get $0
   call $~lib/rt/stub/__release
   local.get $3
   return
  end
  local.get $0
  local.set $4
  local.get $4
  i32.load16_u
  local.set $5
  i32.const 1
  local.set $6
  block $break|0
   loop $continue|0
    local.get $5
    call $~lib/util/string/isSpace
    i32.eqz
    br_if $break|0
    local.get $4
    i32.const 2
    i32.add
    local.tee $4
    i32.load16_u
    local.set $5
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $continue|0
   end
   unreachable
  end
  local.get $5
  i32.const 45
  i32.eq
  if
   local.get $2
   i32.const 1
   i32.sub
   local.tee $2
   i32.eqz
   if
    i32.const 0
    local.set $3
    local.get $0
    call $~lib/rt/stub/__release
    local.get $3
    return
   end
   local.get $4
   i32.const 2
   i32.add
   local.tee $4
   i32.load16_u
   local.set $5
   i32.const -1
   local.set $6
  else   
   local.get $5
   i32.const 43
   i32.eq
   if
    local.get $2
    i32.const 1
    i32.sub
    local.tee $2
    i32.eqz
    if
     i32.const 0
     local.set $3
     local.get $0
     call $~lib/rt/stub/__release
     local.get $3
     return
    end
    local.get $4
    i32.const 2
    i32.add
    local.tee $4
    i32.load16_u
    local.set $5
   end
  end
  local.get $1
  i32.eqz
  if
   local.get $5
   i32.const 48
   i32.eq
   if (result i32)
    local.get $2
    i32.const 2
    i32.gt_s
   else    
    i32.const 0
   end
   if
    block $break|1
     block $case6|1
      block $case5|1
       block $case4|1
        block $case3|1
         block $case2|1
          block $case1|1
           block $case0|1
            local.get $4
            i32.const 2
            i32.add
            i32.load16_u
            local.set $3
            local.get $3
            i32.const 66
            i32.eq
            br_if $case0|1
            local.get $3
            i32.const 98
            i32.eq
            br_if $case1|1
            local.get $3
            i32.const 79
            i32.eq
            br_if $case2|1
            local.get $3
            i32.const 111
            i32.eq
            br_if $case3|1
            local.get $3
            i32.const 88
            i32.eq
            br_if $case4|1
            local.get $3
            i32.const 120
            i32.eq
            br_if $case5|1
            br $case6|1
           end
          end
          local.get $4
          i32.const 4
          i32.add
          local.set $4
          local.get $2
          i32.const 2
          i32.sub
          local.set $2
          i32.const 2
          local.set $1
          br $break|1
         end
        end
        local.get $4
        i32.const 4
        i32.add
        local.set $4
        local.get $2
        i32.const 2
        i32.sub
        local.set $2
        i32.const 8
        local.set $1
        br $break|1
       end
      end
      local.get $4
      i32.const 4
      i32.add
      local.set $4
      local.get $2
      i32.const 2
      i32.sub
      local.set $2
      i32.const 16
      local.set $1
      br $break|1
     end
     i32.const 10
     local.set $1
    end
   else    
    i32.const 10
    local.set $1
   end
  else   
   local.get $1
   i32.const 2
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $1
    i32.const 36
    i32.gt_s
   end
   if
    i32.const 0
    local.set $3
    local.get $0
    call $~lib/rt/stub/__release
    local.get $3
    return
   end
  end
  i32.const 0
  local.set $7
  block $break|2
   loop $continue|2
    local.get $2
    local.tee $3
    i32.const 1
    i32.sub
    local.set $2
    local.get $3
    i32.eqz
    br_if $break|2
    local.get $4
    i32.load16_u
    local.set $5
    local.get $5
    i32.const 48
    i32.ge_s
    if (result i32)
     local.get $5
     i32.const 57
     i32.le_s
    else     
     i32.const 0
    end
    if
     local.get $5
     i32.const 48
     i32.sub
     local.set $5
    else     
     local.get $5
     i32.const 65
     i32.ge_s
     if (result i32)
      local.get $5
      i32.const 90
      i32.le_s
     else      
      i32.const 0
     end
     if
      local.get $5
      i32.const 65
      i32.const 10
      i32.sub
      i32.sub
      local.set $5
     else      
      local.get $5
      i32.const 97
      i32.ge_s
      if (result i32)
       local.get $5
       i32.const 122
       i32.le_s
      else       
       i32.const 0
      end
      if
       local.get $5
       i32.const 97
       i32.const 10
       i32.sub
       i32.sub
       local.set $5
      else       
       br $break|2
      end
     end
    end
    local.get $5
    local.get $1
    i32.ge_s
    if
     br $break|2
    end
    local.get $7
    local.get $1
    i32.mul
    local.get $5
    i32.add
    local.set $7
    local.get $4
    i32.const 2
    i32.add
    local.set $4
    br $continue|2
   end
   unreachable
  end
  local.get $6
  local.get $7
  i32.mul
  local.set $3
  local.get $0
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/number/I32.parseInt (; 275 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/util/string/strtol<i32>
  local.set $2
  local.get $0
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/util/number/utoa64 (; 276 ;) (type $FUNCSIG$ij) (param $0 i64) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i64)
  local.get $0
  i64.eqz
  if
   i32.const 240
   call $~lib/rt/stub/__retain
   return
  end
  local.get $0
  i64.const 4294967295
  i64.le_u
  if
   local.get $0
   i32.wrap_i64
   local.set $2
   local.get $2
   call $~lib/util/number/decimalCount32
   local.set $3
   local.get $3
   i32.const 1
   i32.shl
   i32.const 1
   call $~lib/rt/stub/__alloc
   local.set $1
   local.get $1
   local.set $6
   local.get $2
   local.set $5
   local.get $3
   local.set $4
   local.get $6
   local.get $5
   local.get $4
   call $~lib/util/number/utoa32_lut
  else   
   local.get $0
   call $~lib/util/number/decimalCount64
   local.set $3
   local.get $3
   i32.const 1
   i32.shl
   i32.const 1
   call $~lib/rt/stub/__alloc
   local.set $1
   local.get $1
   local.set $5
   local.get $0
   local.set $7
   local.get $3
   local.set $4
   local.get $5
   local.get $7
   local.get $4
   call $~lib/util/number/utoa64_lut
  end
  local.get $1
  call $~lib/rt/stub/__retain
 )
 (func $~lib/util/number/itoa<u64> (; 277 ;) (type $FUNCSIG$ij) (param $0 i64) (result i32)
  local.get $0
  call $~lib/util/number/utoa64
  return
 )
 (func $~lib/number/U64#toString (; 278 ;) (type $FUNCSIG$ij) (param $0 i64) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/util/number/itoa<u64>
  local.tee $1
  call $~lib/rt/stub/__retain
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $assembly/hello/main/benchmark_storage (; 279 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  i32.const 0
  local.set $1
  block $break|0
   loop $continue|0
    local.get $1
    local.get $0
    i32.lt_s
    i32.eqz
    br_if $break|0
    global.get $~lib/near-runtime-ts/storage/storage
    local.get $1
    call $~lib/number/I32#toString
    local.tee $2
    local.get $1
    call $~lib/number/I32#toString
    local.tee $3
    call $~lib/near-runtime-ts/storage/Storage#setString
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    local.get $2
    call $~lib/rt/stub/__release
    local.get $3
    call $~lib/rt/stub/__release
    br $continue|0
   end
   unreachable
  end
  i32.const 0
  local.set $1
  i64.const 0
  local.set $4
  block $break|1
   loop $continue|1
    local.get $1
    local.get $0
    i32.lt_s
    i32.eqz
    br_if $break|1
    global.get $~lib/near-runtime-ts/storage/storage
    local.get $1
    call $~lib/number/I32#toString
    local.tee $3
    call $~lib/near-runtime-ts/storage/Storage#getString
    local.tee $2
    i32.const 0
    call $~lib/number/I32.parseInt
    local.set $5
    local.get $4
    local.get $5
    i64.extend_i32_s
    i64.add
    local.set $4
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    br $continue|1
   end
   unreachable
  end
  local.get $4
  call $~lib/number/U64#toString
 )
 (func $assembly/hello/main/__wrapper_benchmark_storage (; 280 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  i32.const 0
  call $assembly/hello/main/__near_ArgsParser_benchmark_storage#constructor
  local.set $3
  local.get $3
  local.tee $4
  local.get $1
  local.tee $5
  local.get $4
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $5
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $5
  i32.store
  local.get $3
  local.tee $5
  i32.const 0
  local.get $3
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#constructor
  local.set $4
  local.get $5
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $4
  i32.store offset=4
  local.get $3
  i32.load offset=4
  local.get $1
  i32.const 0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_storage>#deserialize
  local.get $3
  i32.load offset=12
  call $assembly/hello/main/benchmark_storage
  local.set $4
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $5
  local.get $4
  i32.const 0
  call $~lib/string/String.__eq
  if
   local.get $5
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $5
   local.get $4
   i32.const 0
   call $~lib/nearEntry/encode<~lib/string/String>
   call $~lib/rt/stub/__release
  end
  local.get $5
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $6
  local.get $6
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $6
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $7
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__near_ArgsParser_limited_storage#constructor (; 281 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 24
   i32.const 36
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store8 offset=8
  local.get $0
  i64.const 0
  i64.store offset=16
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#constructor (; 282 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 37
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#peekChar (; 283 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.ge_s
  if
   i32.const -1
   return
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  i32.load offset=4
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#isWhitespace (; 284 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 9
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 10
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 13
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 32
   i32.eq
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readChar (; 285 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.lt_s
  i32.eqz
  if
   i32.const 784
   i32.const 840
   i32.const 112
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.tee $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $1
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#skipWhitespace (; 286 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#peekChar
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#isWhitespace
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readChar
    drop
    br $continue|0
   end
   unreachable
  end
 )
 (func $assembly/hello/main/__near_ArgsParser_limited_storage#pushObject (; 287 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load8_u offset=8
  i32.const 0
  i32.ne
  i32.eqz
  if
   local.get $1
   i32.const 0
   call $~lib/string/String.__eq
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.eq
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 412
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.const 1
   i32.store8 offset=8
   i32.const 1
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  else   
   local.get $1
   i32.const 0
   call $~lib/string/String.__ne
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.ne
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 416
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushObject
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readHexDigit (; 288 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readChar
  local.set $1
  local.get $1
  global.get $~lib/assemblyscript-json/decoder/CHAR_0
  i32.sub
  local.set $2
  local.get $2
  i32.const 9
  i32.gt_s
  if
   local.get $1
   global.get $~lib/assemblyscript-json/decoder/CHAR_A
   i32.sub
   i32.const 10
   i32.add
   local.set $2
   local.get $2
   i32.const 10
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $2
    i32.const 15
    i32.gt_s
   end
   if
    local.get $1
    global.get $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
    i32.sub
    i32.const 10
    i32.add
    local.set $2
   end
  end
  i32.const 2
  i32.const 2
  i32.const 13
  i32.const 0
  call $~lib/rt/__allocArray
  local.set $3
  local.get $3
  i32.load offset=4
  local.set $4
  local.get $4
  local.get $1
  i32.store
  local.get $4
  local.get $2
  i32.store offset=4
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $2
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $2
   i32.const 16
   i32.lt_s
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1864
   i32.const 840
   i32.const 269
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readEscapedChar (; 289 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readChar
  local.set $1
  local.get $1
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1168
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1600
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1600
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1624
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1624
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1648
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1672
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1696
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1720
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1744
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1768
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1792
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1840
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readHexDigit
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readHexDigit
   local.set $3
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readHexDigit
   local.set $4
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readHexDigit
   local.set $5
   local.get $2
   i32.const 4096
   i32.mul
   local.get $3
   i32.const 256
   i32.mul
   i32.add
   local.get $4
   i32.const 16
   i32.mul
   i32.add
   local.get $5
   i32.add
   local.set $6
   local.get $6
   call $~lib/string/String.fromCodePoint
   return
  end
  i32.const 0
  i32.eqz
  if
   i32.const 1920
   i32.const 1
   global.set $~lib/argc
   local.get $1
   i32.const 0
   call $~lib/string/String.fromCharCode|trampoline
   local.tee $6
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 840
   i32.const 255
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 656
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $6
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readString (; 290 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1192
   i32.const 840
   i32.const 197
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.set $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $2
  loop $loop|0
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readChar
   local.set $3
   local.get $3
   i32.const 32
   i32.ge_s
   i32.eqz
   if
    i32.const 1432
    i32.const 840
    i32.const 203
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 1168
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   if
    i32.const 1
    global.set $~lib/argc
    local.get $0
    i32.load offset=4
    local.get $1
    i32.const 0
    call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
    local.set $4
    local.get $2
    call $~lib/array/Array<~lib/string/String>#get:length
    i32.const 0
    i32.eq
    if
     local.get $4
     local.set $5
     local.get $2
     call $~lib/rt/stub/__release
     local.get $5
     return
    end
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#push
    drop
    local.get $2
    i32.const 656
    call $~lib/array/Array<~lib/string/String>#join
    local.set $5
    local.get $4
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $5
    return
   else    
    local.get $3
    i32.const 1600
    i32.const 0
    call $~lib/string/String#charCodeAt
    i32.eq
    if
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.get $1
     i32.const 1
     i32.add
     i32.gt_s
     if
      local.get $2
      i32.const 1
      global.set $~lib/argc
      local.get $0
      i32.load offset=4
      local.get $1
      i32.const 0
      call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
      local.tee $4
      call $~lib/array/Array<~lib/string/String>#push
      drop
      local.get $4
      call $~lib/rt/stub/__release
     end
     local.get $2
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readEscapedChar
     local.tee $4
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
   end
   br $loop|0
  end
  unreachable
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#parseKey (; 291 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#skipWhitespace
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readString
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readChar
  i32.const 2000
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 2024
   i32.const 840
   i32.const 159
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#parseObject (; 292 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#peekChar
  i32.const 928
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_limited_storage#pushObject
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#peekChar
     i32.const 1080
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 142
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#parseKey
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readChar
   i32.const 1080
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2064
    i32.const 840
    i32.const 149
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popObject
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__near_ArgsParser_limited_storage#pushArray (; 293 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushArray
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#parseArray (; 294 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#peekChar
  i32.const 2128
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_limited_storage#pushArray
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#peekChar
     i32.const 2216
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 176
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readChar
   i32.const 2216
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2240
    i32.const 840
    i32.const 182
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popArray
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/util/string/strtol<i64> (; 295 ;) (type $FUNCSIG$jii) (param $0 i32) (param $1 i32) (result i64)
  (local $2 i32)
  (local $3 i64)
  (local $4 i32)
  (local $5 i32)
  (local $6 i64)
  (local $7 i32)
  (local $8 i64)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/string/String#get:length
  local.set $2
  local.get $2
  i32.eqz
  if
   i64.const 0
   local.set $3
   local.get $0
   call $~lib/rt/stub/__release
   local.get $3
   return
  end
  local.get $0
  local.set $4
  local.get $4
  i32.load16_u
  local.set $5
  i64.const 1
  local.set $6
  block $break|0
   loop $continue|0
    local.get $5
    call $~lib/util/string/isSpace
    i32.eqz
    br_if $break|0
    local.get $4
    i32.const 2
    i32.add
    local.tee $4
    i32.load16_u
    local.set $5
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $continue|0
   end
   unreachable
  end
  local.get $5
  i32.const 45
  i32.eq
  if
   local.get $2
   i32.const 1
   i32.sub
   local.tee $2
   i32.eqz
   if
    i64.const 0
    local.set $3
    local.get $0
    call $~lib/rt/stub/__release
    local.get $3
    return
   end
   local.get $4
   i32.const 2
   i32.add
   local.tee $4
   i32.load16_u
   local.set $5
   i64.const -1
   local.set $6
  else   
   local.get $5
   i32.const 43
   i32.eq
   if
    local.get $2
    i32.const 1
    i32.sub
    local.tee $2
    i32.eqz
    if
     i64.const 0
     local.set $3
     local.get $0
     call $~lib/rt/stub/__release
     local.get $3
     return
    end
    local.get $4
    i32.const 2
    i32.add
    local.tee $4
    i32.load16_u
    local.set $5
   end
  end
  local.get $1
  i32.eqz
  if
   local.get $5
   i32.const 48
   i32.eq
   if (result i32)
    local.get $2
    i32.const 2
    i32.gt_s
   else    
    i32.const 0
   end
   if
    block $break|1
     block $case6|1
      block $case5|1
       block $case4|1
        block $case3|1
         block $case2|1
          block $case1|1
           block $case0|1
            local.get $4
            i32.const 2
            i32.add
            i32.load16_u
            local.set $7
            local.get $7
            i32.const 66
            i32.eq
            br_if $case0|1
            local.get $7
            i32.const 98
            i32.eq
            br_if $case1|1
            local.get $7
            i32.const 79
            i32.eq
            br_if $case2|1
            local.get $7
            i32.const 111
            i32.eq
            br_if $case3|1
            local.get $7
            i32.const 88
            i32.eq
            br_if $case4|1
            local.get $7
            i32.const 120
            i32.eq
            br_if $case5|1
            br $case6|1
           end
          end
          local.get $4
          i32.const 4
          i32.add
          local.set $4
          local.get $2
          i32.const 2
          i32.sub
          local.set $2
          i32.const 2
          local.set $1
          br $break|1
         end
        end
        local.get $4
        i32.const 4
        i32.add
        local.set $4
        local.get $2
        i32.const 2
        i32.sub
        local.set $2
        i32.const 8
        local.set $1
        br $break|1
       end
      end
      local.get $4
      i32.const 4
      i32.add
      local.set $4
      local.get $2
      i32.const 2
      i32.sub
      local.set $2
      i32.const 16
      local.set $1
      br $break|1
     end
     i32.const 10
     local.set $1
    end
   else    
    i32.const 10
    local.set $1
   end
  else   
   local.get $1
   i32.const 2
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $1
    i32.const 36
    i32.gt_s
   end
   if
    i64.const 0
    local.set $3
    local.get $0
    call $~lib/rt/stub/__release
    local.get $3
    return
   end
  end
  i64.const 0
  local.set $8
  block $break|2
   loop $continue|2
    local.get $2
    local.tee $7
    i32.const 1
    i32.sub
    local.set $2
    local.get $7
    i32.eqz
    br_if $break|2
    local.get $4
    i32.load16_u
    local.set $5
    local.get $5
    i32.const 48
    i32.ge_s
    if (result i32)
     local.get $5
     i32.const 57
     i32.le_s
    else     
     i32.const 0
    end
    if
     local.get $5
     i32.const 48
     i32.sub
     local.set $5
    else     
     local.get $5
     i32.const 65
     i32.ge_s
     if (result i32)
      local.get $5
      i32.const 90
      i32.le_s
     else      
      i32.const 0
     end
     if
      local.get $5
      i32.const 65
      i32.const 10
      i32.sub
      i32.sub
      local.set $5
     else      
      local.get $5
      i32.const 97
      i32.ge_s
      if (result i32)
       local.get $5
       i32.const 122
       i32.le_s
      else       
       i32.const 0
      end
      if
       local.get $5
       i32.const 97
       i32.const 10
       i32.sub
       i32.sub
       local.set $5
      else       
       br $break|2
      end
     end
    end
    local.get $5
    local.get $1
    i32.ge_s
    if
     br $break|2
    end
    local.get $8
    local.get $1
    i64.extend_i32_s
    i64.mul
    local.get $5
    i64.extend_i32_s
    i64.add
    local.set $8
    local.get $4
    i32.const 2
    i32.add
    local.set $4
    br $continue|2
   end
   unreachable
  end
  local.get $6
  local.get $8
  i64.mul
  local.set $3
  local.get $0
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/number/U64.parseInt (; 296 ;) (type $FUNCSIG$jii) (param $0 i32) (param $1 i32) (result i64)
  (local $2 i64)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/util/string/strtol<i64>
  local.set $2
  local.get $0
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $assembly/hello/main/__near_ArgsParser_limited_storage#setString (; 297 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 3720
  call $~lib/string/String.__eq
  if
   local.get $0
   local.get $2
   i32.const 0
   call $~lib/number/U64.parseInt
   i64.store offset=16
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setString
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#parseString (; 298 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#peekChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.load
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readString
  local.tee $1
  call $assembly/hello/main/__near_ArgsParser_limited_storage#setString
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readAndAssert (; 299 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $2
    call $~lib/string/String#charCodeAt
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readChar
    i32.eq
    i32.eqz
    if
     i32.const 2416
     local.get $1
     call $~lib/string/String.__concat
     local.tee $3
     i32.const 2456
     call $~lib/string/String.__concat
     local.tee $4
     i32.const 840
     i32.const 321
     i32.const 6
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#parseBoolean (; 300 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#peekChar
  i32.const 184
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/FALSE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 0
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#peekChar
  i32.const 160
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/TRUE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 1
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#parseNumber (; 301 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  local.set $1
  i64.const 1
  local.set $2
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#peekChar
  i32.const 2568
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i64.const -1
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readChar
   drop
  end
  i32.const 0
  local.set $3
  block $break|0
   loop $continue|0
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#peekChar
    i32.le_s
    if (result i32)
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#peekChar
     global.get $~lib/assemblyscript-json/decoder/CHAR_9
     i32.le_s
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readChar
    local.set $4
    local.get $1
    i64.const 10
    i64.mul
    local.set $1
    local.get $1
    local.get $4
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    i32.sub
    i64.extend_i32_s
    i64.add
    local.set $1
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $continue|0
   end
   unreachable
  end
  local.get $3
  i32.const 0
  i32.gt_s
  if
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   local.get $1
   local.get $2
   i64.mul
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setInteger
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/main/__near_ArgsParser_limited_storage#setNull (; 302 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setNull
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#parseNull (; 303 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#peekChar
  i32.const 216
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/NULL_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   call $assembly/hello/main/__near_ArgsParser_limited_storage#setNull
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#parseValue (; 304 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#parseObject
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#parseArray
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#parseString
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#parseBoolean
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#parseNumber
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#parseNull
  end
  local.set $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#skipWhitespace
  local.get $1
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#deserialize (; 305 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  i32.const 0
  i32.ne
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
  else   
   local.get $0
   local.tee $4
   i32.const 0
   local.get $1
   call $~lib/assemblyscript-json/decoder/DecoderState#constructor
   local.set $3
   local.get $4
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#parseValue
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3176
   i32.const 840
   i32.const 100
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/near-runtime-ts/contract/Context#get:storageUsage (; 306 ;) (type $FUNCSIG$ji) (param $0 i32) (result i64)
  call $~lib/near-runtime-ts/runtime_api/runtime_api.storage_usage
 )
 (func $~lib/near-runtime-ts/storage/Storage#delete (; 307 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $2
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $2
  i32.load offset=4
  i64.extend_i32_u
  i64.const 0
  call $~lib/near-runtime-ts/runtime_api/runtime_api.storage_remove
  drop
  local.get $2
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/limited_storage (; 308 ;) (type $FUNCSIG$ij) (param $0 i64) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 0
  local.set $1
  block $break|0
   loop $continue|0
    global.get $~lib/near-runtime-ts/contract/context
    call $~lib/near-runtime-ts/contract/Context#get:storageUsage
    local.get $0
    i64.le_u
    i32.eqz
    br_if $break|0
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    global.get $~lib/near-runtime-ts/storage/storage
    local.get $1
    call $~lib/number/I32#toString
    local.tee $2
    local.get $1
    call $~lib/number/I32#toString
    local.tee $3
    call $~lib/near-runtime-ts/storage/Storage#setString
    local.get $2
    call $~lib/rt/stub/__release
    local.get $3
    call $~lib/rt/stub/__release
    br $continue|0
   end
   unreachable
  end
  global.get $~lib/near-runtime-ts/contract/context
  call $~lib/near-runtime-ts/contract/Context#get:storageUsage
  local.get $0
  i64.gt_u
  if
   global.get $~lib/near-runtime-ts/storage/storage
   local.get $1
   call $~lib/number/I32#toString
   local.tee $3
   call $~lib/near-runtime-ts/storage/Storage#delete
   local.get $3
   call $~lib/rt/stub/__release
  end
  local.get $1
  call $~lib/number/I32#toString
 )
 (func $assembly/hello/main/__wrapper_limited_storage (; 309 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  i32.const 0
  call $assembly/hello/main/__near_ArgsParser_limited_storage#constructor
  local.set $3
  local.get $3
  local.tee $4
  local.get $1
  local.tee $5
  local.get $4
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $5
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $5
  i32.store
  local.get $3
  local.tee $5
  i32.const 0
  local.get $3
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#constructor
  local.set $4
  local.get $5
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $4
  i32.store offset=4
  local.get $3
  i32.load offset=4
  local.get $1
  i32.const 0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_limited_storage>#deserialize
  local.get $3
  i64.load offset=16
  call $assembly/hello/main/limited_storage
  local.set $4
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $5
  local.get $4
  i32.const 0
  call $~lib/string/String.__eq
  if
   local.get $5
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $5
   local.get $4
   i32.const 0
   call $~lib/nearEntry/encode<~lib/string/String>
   call $~lib/rt/stub/__release
  end
  local.get $5
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $6
  local.get $6
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $6
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $7
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__near_ArgsParser_benchmark_sum_n#constructor (; 310 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 16
   i32.const 38
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store8 offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#constructor (; 311 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 39
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#peekChar (; 312 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.ge_s
  if
   i32.const -1
   return
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  i32.load offset=4
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#isWhitespace (; 313 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 9
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 10
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 13
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 32
   i32.eq
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readChar (; 314 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.lt_s
  i32.eqz
  if
   i32.const 784
   i32.const 840
   i32.const 112
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.tee $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $1
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#skipWhitespace (; 315 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#peekChar
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#isWhitespace
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readChar
    drop
    br $continue|0
   end
   unreachable
  end
 )
 (func $assembly/hello/main/__near_ArgsParser_benchmark_sum_n#pushObject (; 316 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load8_u offset=8
  i32.const 0
  i32.ne
  i32.eqz
  if
   local.get $1
   i32.const 0
   call $~lib/string/String.__eq
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.eq
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 476
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.const 1
   i32.store8 offset=8
   i32.const 1
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  else   
   local.get $1
   i32.const 0
   call $~lib/string/String.__ne
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.ne
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 480
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushObject
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readHexDigit (; 317 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readChar
  local.set $1
  local.get $1
  global.get $~lib/assemblyscript-json/decoder/CHAR_0
  i32.sub
  local.set $2
  local.get $2
  i32.const 9
  i32.gt_s
  if
   local.get $1
   global.get $~lib/assemblyscript-json/decoder/CHAR_A
   i32.sub
   i32.const 10
   i32.add
   local.set $2
   local.get $2
   i32.const 10
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $2
    i32.const 15
    i32.gt_s
   end
   if
    local.get $1
    global.get $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
    i32.sub
    i32.const 10
    i32.add
    local.set $2
   end
  end
  i32.const 2
  i32.const 2
  i32.const 13
  i32.const 0
  call $~lib/rt/__allocArray
  local.set $3
  local.get $3
  i32.load offset=4
  local.set $4
  local.get $4
  local.get $1
  i32.store
  local.get $4
  local.get $2
  i32.store offset=4
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $2
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $2
   i32.const 16
   i32.lt_s
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1864
   i32.const 840
   i32.const 269
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readEscapedChar (; 318 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readChar
  local.set $1
  local.get $1
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1168
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1600
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1600
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1624
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1624
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1648
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1672
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1696
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1720
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1744
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1768
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1792
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1840
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readHexDigit
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readHexDigit
   local.set $3
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readHexDigit
   local.set $4
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readHexDigit
   local.set $5
   local.get $2
   i32.const 4096
   i32.mul
   local.get $3
   i32.const 256
   i32.mul
   i32.add
   local.get $4
   i32.const 16
   i32.mul
   i32.add
   local.get $5
   i32.add
   local.set $6
   local.get $6
   call $~lib/string/String.fromCodePoint
   return
  end
  i32.const 0
  i32.eqz
  if
   i32.const 1920
   i32.const 1
   global.set $~lib/argc
   local.get $1
   i32.const 0
   call $~lib/string/String.fromCharCode|trampoline
   local.tee $6
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 840
   i32.const 255
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 656
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $6
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readString (; 319 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1192
   i32.const 840
   i32.const 197
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.set $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $2
  loop $loop|0
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readChar
   local.set $3
   local.get $3
   i32.const 32
   i32.ge_s
   i32.eqz
   if
    i32.const 1432
    i32.const 840
    i32.const 203
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 1168
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   if
    i32.const 1
    global.set $~lib/argc
    local.get $0
    i32.load offset=4
    local.get $1
    i32.const 0
    call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
    local.set $4
    local.get $2
    call $~lib/array/Array<~lib/string/String>#get:length
    i32.const 0
    i32.eq
    if
     local.get $4
     local.set $5
     local.get $2
     call $~lib/rt/stub/__release
     local.get $5
     return
    end
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#push
    drop
    local.get $2
    i32.const 656
    call $~lib/array/Array<~lib/string/String>#join
    local.set $5
    local.get $4
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $5
    return
   else    
    local.get $3
    i32.const 1600
    i32.const 0
    call $~lib/string/String#charCodeAt
    i32.eq
    if
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.get $1
     i32.const 1
     i32.add
     i32.gt_s
     if
      local.get $2
      i32.const 1
      global.set $~lib/argc
      local.get $0
      i32.load offset=4
      local.get $1
      i32.const 0
      call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
      local.tee $4
      call $~lib/array/Array<~lib/string/String>#push
      drop
      local.get $4
      call $~lib/rt/stub/__release
     end
     local.get $2
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readEscapedChar
     local.tee $4
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
   end
   br $loop|0
  end
  unreachable
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#parseKey (; 320 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#skipWhitespace
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readString
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readChar
  i32.const 2000
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 2024
   i32.const 840
   i32.const 159
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#parseObject (; 321 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#peekChar
  i32.const 928
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_benchmark_sum_n#pushObject
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#peekChar
     i32.const 1080
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 142
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#parseKey
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readChar
   i32.const 1080
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2064
    i32.const 840
    i32.const 149
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popObject
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__near_ArgsParser_benchmark_sum_n#pushArray (; 322 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushArray
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#parseArray (; 323 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#peekChar
  i32.const 2128
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_benchmark_sum_n#pushArray
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#peekChar
     i32.const 2216
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 176
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readChar
   i32.const 2216
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2240
    i32.const 840
    i32.const 182
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popArray
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#parseString (; 324 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#peekChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.load
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readString
  local.tee $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setString
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readAndAssert (; 325 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $2
    call $~lib/string/String#charCodeAt
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readChar
    i32.eq
    i32.eqz
    if
     i32.const 2416
     local.get $1
     call $~lib/string/String.__concat
     local.tee $3
     i32.const 2456
     call $~lib/string/String.__concat
     local.tee $4
     i32.const 840
     i32.const 321
     i32.const 6
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#parseBoolean (; 326 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#peekChar
  i32.const 184
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/FALSE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 0
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#peekChar
  i32.const 160
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/TRUE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 1
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/main/__near_ArgsParser_benchmark_sum_n#setInteger (; 327 ;) (type $FUNCSIG$viij) (param $0 i32) (param $1 i32) (param $2 i64)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 1696
  call $~lib/string/String.__eq
  if
   local.get $0
   local.get $2
   i32.wrap_i64
   i32.store offset=12
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setInteger
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#parseNumber (; 328 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  local.set $1
  i64.const 1
  local.set $2
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#peekChar
  i32.const 2568
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i64.const -1
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readChar
   drop
  end
  i32.const 0
  local.set $3
  block $break|0
   loop $continue|0
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#peekChar
    i32.le_s
    if (result i32)
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#peekChar
     global.get $~lib/assemblyscript-json/decoder/CHAR_9
     i32.le_s
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readChar
    local.set $4
    local.get $1
    i64.const 10
    i64.mul
    local.set $1
    local.get $1
    local.get $4
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    i32.sub
    i64.extend_i32_s
    i64.add
    local.set $1
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $continue|0
   end
   unreachable
  end
  local.get $3
  i32.const 0
  i32.gt_s
  if
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   local.get $1
   local.get $2
   i64.mul
   call $assembly/hello/main/__near_ArgsParser_benchmark_sum_n#setInteger
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/main/__near_ArgsParser_benchmark_sum_n#setNull (; 329 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setNull
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#parseNull (; 330 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#peekChar
  i32.const 216
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/NULL_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   call $assembly/hello/main/__near_ArgsParser_benchmark_sum_n#setNull
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#parseValue (; 331 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#parseObject
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#parseArray
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#parseString
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#parseBoolean
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#parseNumber
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#parseNull
  end
  local.set $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#skipWhitespace
  local.get $1
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#deserialize (; 332 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  i32.const 0
  i32.ne
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
  else   
   local.get $0
   local.tee $4
   i32.const 0
   local.get $1
   call $~lib/assemblyscript-json/decoder/DecoderState#constructor
   local.set $3
   local.get $4
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#parseValue
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3176
   i32.const 840
   i32.const 100
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/benchmark_sum_n (; 333 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i64)
  i32.const 0
  local.set $1
  i64.const 0
  local.set $2
  block $break|0
   loop $continue|0
    local.get $1
    local.get $0
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $2
    local.get $1
    i64.extend_i32_s
    i64.add
    local.set $2
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $continue|0
   end
   unreachable
  end
  local.get $2
  call $~lib/number/U64#toString
 )
 (func $assembly/hello/main/__wrapper_benchmark_sum_n (; 334 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  i32.const 0
  call $assembly/hello/main/__near_ArgsParser_benchmark_sum_n#constructor
  local.set $3
  local.get $3
  local.tee $4
  local.get $1
  local.tee $5
  local.get $4
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $5
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $5
  i32.store
  local.get $3
  local.tee $5
  i32.const 0
  local.get $3
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#constructor
  local.set $4
  local.get $5
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $4
  i32.store offset=4
  local.get $3
  i32.load offset=4
  local.get $1
  i32.const 0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_benchmark_sum_n>#deserialize
  local.get $3
  i32.load offset=12
  call $assembly/hello/main/benchmark_sum_n
  local.set $4
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $5
  local.get $4
  i32.const 0
  call $~lib/string/String.__eq
  if
   local.get $5
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $5
   local.get $4
   i32.const 0
   call $~lib/nearEntry/encode<~lib/string/String>
   call $~lib/rt/stub/__release
  end
  local.get $5
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $6
  local.get $6
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $6
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $7
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
 )
 (func $~lib/near-runtime-ts/logging/logging.log (; 335 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $1
  local.get $1
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $1
  i32.load offset=4
  i64.extend_i32_u
  call $~lib/near-runtime-ts/runtime_api/runtime_api.log_utf8
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/returnHiWithLogs (; 336 ;) (type $FUNCSIG$i) (result i32)
  i32.const 3760
  call $~lib/near-runtime-ts/logging/logging.log
  i32.const 3792
  call $~lib/near-runtime-ts/logging/logging.log
  i32.const 3824
  call $~lib/rt/stub/__retain
 )
 (func $assembly/hello/main/__wrapper_returnHiWithLogs (; 337 ;) (type $FUNCSIG$v)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  call $assembly/hello/main/returnHiWithLogs
  local.set $0
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $1
  local.get $0
  i32.const 0
  call $~lib/string/String.__eq
  if
   local.get $1
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $1
   local.get $0
   i32.const 0
   call $~lib/nearEntry/encode<~lib/string/String>
   call $~lib/rt/stub/__release
  end
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $2
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $2
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $3
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__near_ArgsParser_testSetRemove#constructor (; 338 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 16
   i32.const 40
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store8 offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#constructor (; 339 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 41
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#peekChar (; 340 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.ge_s
  if
   i32.const -1
   return
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  i32.load offset=4
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#isWhitespace (; 341 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 9
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 10
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 13
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 32
   i32.eq
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readChar (; 342 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.lt_s
  i32.eqz
  if
   i32.const 784
   i32.const 840
   i32.const 112
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.tee $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $1
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#skipWhitespace (; 343 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#peekChar
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#isWhitespace
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readChar
    drop
    br $continue|0
   end
   unreachable
  end
 )
 (func $assembly/hello/main/__near_ArgsParser_testSetRemove#pushObject (; 344 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load8_u offset=8
  i32.const 0
  i32.ne
  i32.eqz
  if
   local.get $1
   i32.const 0
   call $~lib/string/String.__eq
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.eq
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 561
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.const 1
   i32.store8 offset=8
   i32.const 1
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  else   
   local.get $1
   i32.const 0
   call $~lib/string/String.__ne
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.ne
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 565
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushObject
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readHexDigit (; 345 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readChar
  local.set $1
  local.get $1
  global.get $~lib/assemblyscript-json/decoder/CHAR_0
  i32.sub
  local.set $2
  local.get $2
  i32.const 9
  i32.gt_s
  if
   local.get $1
   global.get $~lib/assemblyscript-json/decoder/CHAR_A
   i32.sub
   i32.const 10
   i32.add
   local.set $2
   local.get $2
   i32.const 10
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $2
    i32.const 15
    i32.gt_s
   end
   if
    local.get $1
    global.get $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
    i32.sub
    i32.const 10
    i32.add
    local.set $2
   end
  end
  i32.const 2
  i32.const 2
  i32.const 13
  i32.const 0
  call $~lib/rt/__allocArray
  local.set $3
  local.get $3
  i32.load offset=4
  local.set $4
  local.get $4
  local.get $1
  i32.store
  local.get $4
  local.get $2
  i32.store offset=4
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $2
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $2
   i32.const 16
   i32.lt_s
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1864
   i32.const 840
   i32.const 269
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readEscapedChar (; 346 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readChar
  local.set $1
  local.get $1
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1168
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1600
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1600
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1624
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1624
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1648
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1672
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1696
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1720
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1744
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1768
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1792
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1840
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readHexDigit
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readHexDigit
   local.set $3
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readHexDigit
   local.set $4
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readHexDigit
   local.set $5
   local.get $2
   i32.const 4096
   i32.mul
   local.get $3
   i32.const 256
   i32.mul
   i32.add
   local.get $4
   i32.const 16
   i32.mul
   i32.add
   local.get $5
   i32.add
   local.set $6
   local.get $6
   call $~lib/string/String.fromCodePoint
   return
  end
  i32.const 0
  i32.eqz
  if
   i32.const 1920
   i32.const 1
   global.set $~lib/argc
   local.get $1
   i32.const 0
   call $~lib/string/String.fromCharCode|trampoline
   local.tee $6
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 840
   i32.const 255
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 656
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $6
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readString (; 347 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1192
   i32.const 840
   i32.const 197
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.set $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $2
  loop $loop|0
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readChar
   local.set $3
   local.get $3
   i32.const 32
   i32.ge_s
   i32.eqz
   if
    i32.const 1432
    i32.const 840
    i32.const 203
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 1168
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   if
    i32.const 1
    global.set $~lib/argc
    local.get $0
    i32.load offset=4
    local.get $1
    i32.const 0
    call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
    local.set $4
    local.get $2
    call $~lib/array/Array<~lib/string/String>#get:length
    i32.const 0
    i32.eq
    if
     local.get $4
     local.set $5
     local.get $2
     call $~lib/rt/stub/__release
     local.get $5
     return
    end
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#push
    drop
    local.get $2
    i32.const 656
    call $~lib/array/Array<~lib/string/String>#join
    local.set $5
    local.get $4
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $5
    return
   else    
    local.get $3
    i32.const 1600
    i32.const 0
    call $~lib/string/String#charCodeAt
    i32.eq
    if
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.get $1
     i32.const 1
     i32.add
     i32.gt_s
     if
      local.get $2
      i32.const 1
      global.set $~lib/argc
      local.get $0
      i32.load offset=4
      local.get $1
      i32.const 0
      call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
      local.tee $4
      call $~lib/array/Array<~lib/string/String>#push
      drop
      local.get $4
      call $~lib/rt/stub/__release
     end
     local.get $2
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readEscapedChar
     local.tee $4
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
   end
   br $loop|0
  end
  unreachable
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#parseKey (; 348 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#skipWhitespace
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readString
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readChar
  i32.const 2000
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 2024
   i32.const 840
   i32.const 159
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#parseObject (; 349 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#peekChar
  i32.const 928
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_testSetRemove#pushObject
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#peekChar
     i32.const 1080
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 142
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#parseKey
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readChar
   i32.const 1080
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2064
    i32.const 840
    i32.const 149
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popObject
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__near_ArgsParser_testSetRemove#pushArray (; 350 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushArray
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#parseArray (; 351 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#peekChar
  i32.const 2128
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_testSetRemove#pushArray
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#peekChar
     i32.const 2216
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 176
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readChar
   i32.const 2216
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2240
    i32.const 840
    i32.const 182
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popArray
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__near_ArgsParser_testSetRemove#setString (; 352 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 3608
  call $~lib/string/String.__eq
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=12
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=12
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setString
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#parseString (; 353 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#peekChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.load
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readString
  local.tee $1
  call $assembly/hello/main/__near_ArgsParser_testSetRemove#setString
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readAndAssert (; 354 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $2
    call $~lib/string/String#charCodeAt
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readChar
    i32.eq
    i32.eqz
    if
     i32.const 2416
     local.get $1
     call $~lib/string/String.__concat
     local.tee $3
     i32.const 2456
     call $~lib/string/String.__concat
     local.tee $4
     i32.const 840
     i32.const 321
     i32.const 6
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#parseBoolean (; 355 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#peekChar
  i32.const 184
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/FALSE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 0
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#peekChar
  i32.const 160
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/TRUE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 1
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#parseNumber (; 356 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  local.set $1
  i64.const 1
  local.set $2
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#peekChar
  i32.const 2568
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i64.const -1
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readChar
   drop
  end
  i32.const 0
  local.set $3
  block $break|0
   loop $continue|0
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#peekChar
    i32.le_s
    if (result i32)
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#peekChar
     global.get $~lib/assemblyscript-json/decoder/CHAR_9
     i32.le_s
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readChar
    local.set $4
    local.get $1
    i64.const 10
    i64.mul
    local.set $1
    local.get $1
    local.get $4
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    i32.sub
    i64.extend_i32_s
    i64.add
    local.set $1
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $continue|0
   end
   unreachable
  end
  local.get $3
  i32.const 0
  i32.gt_s
  if
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   local.get $1
   local.get $2
   i64.mul
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setInteger
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/main/__near_ArgsParser_testSetRemove#setNull (; 357 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 3608
  call $~lib/string/String.__eq
  if
   local.get $0
   local.tee $2
   i32.const 0
   local.tee $3
   local.get $2
   i32.load offset=12
   local.tee $2
   i32.ne
   if
    local.get $3
    call $~lib/rt/stub/__retain
    drop
    local.get $2
    call $~lib/rt/stub/__release
   end
   local.get $3
   i32.store offset=12
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setNull
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#parseNull (; 358 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#peekChar
  i32.const 216
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/NULL_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   call $assembly/hello/main/__near_ArgsParser_testSetRemove#setNull
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#parseValue (; 359 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#parseObject
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#parseArray
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#parseString
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#parseBoolean
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#parseNumber
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#parseNull
  end
  local.set $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#skipWhitespace
  local.get $1
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#deserialize (; 360 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  i32.const 0
  i32.ne
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
  else   
   local.get $0
   local.tee $4
   i32.const 0
   local.get $1
   call $~lib/assemblyscript-json/decoder/DecoderState#constructor
   local.set $3
   local.get $4
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#parseValue
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3176
   i32.const 840
   i32.const 100
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/testSetRemove (; 361 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 3848
  local.get $0
  call $~lib/near-runtime-ts/storage/Storage#setString
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 3848
  call $~lib/near-runtime-ts/storage/Storage#delete
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 3848
  call $~lib/near-runtime-ts/storage/Storage#getString
  local.tee $1
  i32.const 0
  call $~lib/string/String.__eq
  i32.eqz
  if
   i32.const 3872
   i32.const 952
   i32.const 1016
   i32.const 2
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__wrapper_testSetRemove (; 362 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  i32.const 0
  call $assembly/hello/main/__near_ArgsParser_testSetRemove#constructor
  local.set $3
  local.get $3
  local.tee $4
  local.get $1
  local.tee $5
  local.get $4
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $5
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $5
  i32.store
  local.get $3
  local.tee $5
  i32.const 0
  local.get $3
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#constructor
  local.set $4
  local.get $5
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $4
  i32.store offset=4
  local.get $3
  i32.load offset=4
  local.get $1
  i32.const 0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_testSetRemove>#deserialize
  local.get $3
  i32.load offset=12
  call $assembly/hello/main/testSetRemove
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__near_ArgsParser_insertStrings#constructor (; 363 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 20
   i32.const 42
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store8 offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
  i32.const 0
  i32.store offset=16
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#constructor (; 364 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 43
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#peekChar (; 365 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.ge_s
  if
   i32.const -1
   return
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  i32.load offset=4
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#isWhitespace (; 366 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 9
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 10
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 13
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 32
   i32.eq
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readChar (; 367 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.lt_s
  i32.eqz
  if
   i32.const 784
   i32.const 840
   i32.const 112
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.tee $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $1
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#skipWhitespace (; 368 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#peekChar
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#isWhitespace
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readChar
    drop
    br $continue|0
   end
   unreachable
  end
 )
 (func $assembly/hello/main/__near_ArgsParser_insertStrings#pushObject (; 369 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load8_u offset=8
  i32.const 0
  i32.ne
  i32.eqz
  if
   local.get $1
   i32.const 0
   call $~lib/string/String.__eq
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.eq
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 621
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.const 1
   i32.store8 offset=8
   i32.const 1
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  else   
   local.get $1
   i32.const 0
   call $~lib/string/String.__ne
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.ne
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 625
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushObject
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readHexDigit (; 370 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readChar
  local.set $1
  local.get $1
  global.get $~lib/assemblyscript-json/decoder/CHAR_0
  i32.sub
  local.set $2
  local.get $2
  i32.const 9
  i32.gt_s
  if
   local.get $1
   global.get $~lib/assemblyscript-json/decoder/CHAR_A
   i32.sub
   i32.const 10
   i32.add
   local.set $2
   local.get $2
   i32.const 10
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $2
    i32.const 15
    i32.gt_s
   end
   if
    local.get $1
    global.get $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
    i32.sub
    i32.const 10
    i32.add
    local.set $2
   end
  end
  i32.const 2
  i32.const 2
  i32.const 13
  i32.const 0
  call $~lib/rt/__allocArray
  local.set $3
  local.get $3
  i32.load offset=4
  local.set $4
  local.get $4
  local.get $1
  i32.store
  local.get $4
  local.get $2
  i32.store offset=4
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $2
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $2
   i32.const 16
   i32.lt_s
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1864
   i32.const 840
   i32.const 269
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readEscapedChar (; 371 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readChar
  local.set $1
  local.get $1
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1168
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1600
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1600
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1624
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1624
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1648
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1672
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1696
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1720
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1744
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1768
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1792
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1840
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readHexDigit
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readHexDigit
   local.set $3
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readHexDigit
   local.set $4
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readHexDigit
   local.set $5
   local.get $2
   i32.const 4096
   i32.mul
   local.get $3
   i32.const 256
   i32.mul
   i32.add
   local.get $4
   i32.const 16
   i32.mul
   i32.add
   local.get $5
   i32.add
   local.set $6
   local.get $6
   call $~lib/string/String.fromCodePoint
   return
  end
  i32.const 0
  i32.eqz
  if
   i32.const 1920
   i32.const 1
   global.set $~lib/argc
   local.get $1
   i32.const 0
   call $~lib/string/String.fromCharCode|trampoline
   local.tee $6
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 840
   i32.const 255
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 656
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $6
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readString (; 372 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1192
   i32.const 840
   i32.const 197
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.set $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $2
  loop $loop|0
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readChar
   local.set $3
   local.get $3
   i32.const 32
   i32.ge_s
   i32.eqz
   if
    i32.const 1432
    i32.const 840
    i32.const 203
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 1168
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   if
    i32.const 1
    global.set $~lib/argc
    local.get $0
    i32.load offset=4
    local.get $1
    i32.const 0
    call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
    local.set $4
    local.get $2
    call $~lib/array/Array<~lib/string/String>#get:length
    i32.const 0
    i32.eq
    if
     local.get $4
     local.set $5
     local.get $2
     call $~lib/rt/stub/__release
     local.get $5
     return
    end
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#push
    drop
    local.get $2
    i32.const 656
    call $~lib/array/Array<~lib/string/String>#join
    local.set $5
    local.get $4
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $5
    return
   else    
    local.get $3
    i32.const 1600
    i32.const 0
    call $~lib/string/String#charCodeAt
    i32.eq
    if
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.get $1
     i32.const 1
     i32.add
     i32.gt_s
     if
      local.get $2
      i32.const 1
      global.set $~lib/argc
      local.get $0
      i32.load offset=4
      local.get $1
      i32.const 0
      call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
      local.tee $4
      call $~lib/array/Array<~lib/string/String>#push
      drop
      local.get $4
      call $~lib/rt/stub/__release
     end
     local.get $2
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readEscapedChar
     local.tee $4
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
   end
   br $loop|0
  end
  unreachable
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#parseKey (; 373 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#skipWhitespace
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readString
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readChar
  i32.const 2000
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 2024
   i32.const 840
   i32.const 159
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#parseObject (; 374 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#peekChar
  i32.const 928
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_insertStrings#pushObject
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#peekChar
     i32.const 1080
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 142
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#parseKey
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readChar
   i32.const 1080
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2064
    i32.const 840
    i32.const 149
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popObject
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__near_ArgsParser_insertStrings#pushArray (; 375 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushArray
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#parseArray (; 376 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#peekChar
  i32.const 2128
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_insertStrings#pushArray
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#peekChar
     i32.const 2216
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 176
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readChar
   i32.const 2216
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2240
    i32.const 840
    i32.const 182
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popArray
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#parseString (; 377 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#peekChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.load
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readString
  local.tee $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setString
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readAndAssert (; 378 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $2
    call $~lib/string/String#charCodeAt
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readChar
    i32.eq
    i32.eqz
    if
     i32.const 2416
     local.get $1
     call $~lib/string/String.__concat
     local.tee $3
     i32.const 2456
     call $~lib/string/String.__concat
     local.tee $4
     i32.const 840
     i32.const 321
     i32.const 6
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#parseBoolean (; 379 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#peekChar
  i32.const 184
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/FALSE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 0
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#peekChar
  i32.const 160
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/TRUE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 1
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/main/__near_ArgsParser_insertStrings#setInteger (; 380 ;) (type $FUNCSIG$viij) (param $0 i32) (param $1 i32) (param $2 i64)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 3928
  call $~lib/string/String.__eq
  if
   local.get $0
   local.get $2
   i32.wrap_i64
   i32.store offset=12
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $1
  i32.const 3952
  call $~lib/string/String.__eq
  if
   local.get $0
   local.get $2
   i32.wrap_i64
   i32.store offset=16
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setInteger
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#parseNumber (; 381 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  local.set $1
  i64.const 1
  local.set $2
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#peekChar
  i32.const 2568
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i64.const -1
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readChar
   drop
  end
  i32.const 0
  local.set $3
  block $break|0
   loop $continue|0
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#peekChar
    i32.le_s
    if (result i32)
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#peekChar
     global.get $~lib/assemblyscript-json/decoder/CHAR_9
     i32.le_s
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readChar
    local.set $4
    local.get $1
    i64.const 10
    i64.mul
    local.set $1
    local.get $1
    local.get $4
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    i32.sub
    i64.extend_i32_s
    i64.add
    local.set $1
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $continue|0
   end
   unreachable
  end
  local.get $3
  i32.const 0
  i32.gt_s
  if
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   local.get $1
   local.get $2
   i64.mul
   call $assembly/hello/main/__near_ArgsParser_insertStrings#setInteger
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/main/__near_ArgsParser_insertStrings#setNull (; 382 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setNull
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#parseNull (; 383 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#peekChar
  i32.const 216
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/NULL_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   call $assembly/hello/main/__near_ArgsParser_insertStrings#setNull
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#parseValue (; 384 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#parseObject
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#parseArray
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#parseString
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#parseBoolean
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#parseNumber
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#parseNull
  end
  local.set $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#skipWhitespace
  local.get $1
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#deserialize (; 385 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  i32.const 0
  i32.ne
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
  else   
   local.get $0
   local.tee $4
   i32.const 0
   local.get $1
   call $~lib/assemblyscript-json/decoder/DecoderState#constructor
   local.set $3
   local.get $4
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#parseValue
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3176
   i32.const 840
   i32.const 100
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/buildString (; 386 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  i32.const 0
  i32.ge_s
  i32.eqz
  if
   i32.const 0
   i32.const 952
   i32.const 1019
   i32.const 2
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 656
  call $~lib/rt/stub/__retain
  local.set $1
  block $break|0
   i32.const 20
   local.set $2
   loop $loop|0
    local.get $2
    i32.const 0
    i32.ge_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $1
    call $~lib/string/String.__concat
    local.tee $3
    local.tee $4
    local.get $1
    local.tee $5
    i32.ne
    if
     local.get $4
     call $~lib/rt/stub/__retain
     drop
     local.get $5
     call $~lib/rt/stub/__release
    end
    local.get $4
    local.set $1
    local.get $0
    local.get $2
    i32.shr_s
    i32.const 1
    i32.and
    if
     local.get $1
     i32.const 312
     call $~lib/string/String.__concat
     local.tee $4
     local.tee $5
     local.get $1
     local.tee $6
     i32.ne
     if
      local.get $5
      call $~lib/rt/stub/__retain
      drop
      local.get $6
      call $~lib/rt/stub/__release
     end
     local.get $5
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
 )
 (func $~lib/string/String#substr (; 387 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  local.get $1
  local.set $3
  local.get $2
  local.set $4
  local.get $0
  call $~lib/string/String#get:length
  local.set $5
  local.get $3
  i32.const 0
  i32.lt_s
  if
   local.get $5
   local.get $3
   i32.add
   local.tee $6
   i32.const 0
   local.tee $7
   local.get $6
   local.get $7
   i32.gt_s
   select
   local.set $3
  end
  local.get $4
  local.tee $6
  i32.const 0
  local.tee $7
  local.get $6
  local.get $7
  i32.gt_s
  select
  local.tee $6
  local.get $5
  local.get $3
  i32.sub
  local.tee $7
  local.get $6
  local.get $7
  i32.lt_s
  select
  local.set $8
  local.get $8
  i32.const 0
  i32.le_s
  if
   i32.const 656
   call $~lib/rt/stub/__retain
   return
  end
  local.get $8
  i32.const 1
  i32.shl
  i32.const 1
  call $~lib/rt/stub/__alloc
  local.set $9
  local.get $9
  local.get $0
  local.get $3
  i32.add
  local.get $8
  call $~lib/memory/memory.copy
  local.get $9
  call $~lib/rt/stub/__retain
 )
 (func $assembly/hello/main/insertStrings (; 388 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  call $assembly/hello/main/buildString
  local.set $2
  block $break|0
   local.get $0
   local.set $3
   loop $loop|0
    local.get $3
    local.get $1
    i32.lt_s
    i32.eqz
    br_if $break|0
    global.get $~lib/near-runtime-ts/storage/storage
    local.get $2
    local.get $1
    local.get $3
    i32.sub
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/string/String#substr
    local.tee $4
    i32.const 1648
    call $~lib/string/String.__concat
    local.tee $5
    i32.const 3976
    call $~lib/near-runtime-ts/storage/Storage#setString
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    local.get $4
    call $~lib/rt/stub/__release
    local.get $5
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__wrapper_insertStrings (; 389 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  i32.const 0
  call $assembly/hello/main/__near_ArgsParser_insertStrings#constructor
  local.set $3
  local.get $3
  local.tee $4
  local.get $1
  local.tee $5
  local.get $4
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $5
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $5
  i32.store
  local.get $3
  local.tee $5
  i32.const 0
  local.get $3
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#constructor
  local.set $4
  local.get $5
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $4
  i32.store offset=4
  local.get $3
  i32.load offset=4
  local.get $1
  i32.const 0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_insertStrings>#deserialize
  local.get $3
  i32.load offset=12
  local.get $3
  i32.load offset=16
  call $assembly/hello/main/insertStrings
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__near_ArgsParser_deleteStrings#constructor (; 390 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 20
   i32.const 44
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store8 offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
  i32.const 0
  i32.store offset=16
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#constructor (; 391 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 45
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#peekChar (; 392 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.ge_s
  if
   i32.const -1
   return
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  i32.load offset=4
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#isWhitespace (; 393 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 9
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 10
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 13
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 32
   i32.eq
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readChar (; 394 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.lt_s
  i32.eqz
  if
   i32.const 784
   i32.const 840
   i32.const 112
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.tee $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $1
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#skipWhitespace (; 395 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#peekChar
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#isWhitespace
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readChar
    drop
    br $continue|0
   end
   unreachable
  end
 )
 (func $assembly/hello/main/__near_ArgsParser_deleteStrings#pushObject (; 396 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load8_u offset=8
  i32.const 0
  i32.ne
  i32.eqz
  if
   local.get $1
   i32.const 0
   call $~lib/string/String.__eq
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.eq
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 681
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.const 1
   i32.store8 offset=8
   i32.const 1
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  else   
   local.get $1
   i32.const 0
   call $~lib/string/String.__ne
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.ne
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 685
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushObject
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readHexDigit (; 397 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readChar
  local.set $1
  local.get $1
  global.get $~lib/assemblyscript-json/decoder/CHAR_0
  i32.sub
  local.set $2
  local.get $2
  i32.const 9
  i32.gt_s
  if
   local.get $1
   global.get $~lib/assemblyscript-json/decoder/CHAR_A
   i32.sub
   i32.const 10
   i32.add
   local.set $2
   local.get $2
   i32.const 10
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $2
    i32.const 15
    i32.gt_s
   end
   if
    local.get $1
    global.get $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
    i32.sub
    i32.const 10
    i32.add
    local.set $2
   end
  end
  i32.const 2
  i32.const 2
  i32.const 13
  i32.const 0
  call $~lib/rt/__allocArray
  local.set $3
  local.get $3
  i32.load offset=4
  local.set $4
  local.get $4
  local.get $1
  i32.store
  local.get $4
  local.get $2
  i32.store offset=4
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $2
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $2
   i32.const 16
   i32.lt_s
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1864
   i32.const 840
   i32.const 269
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readEscapedChar (; 398 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readChar
  local.set $1
  local.get $1
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1168
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1600
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1600
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1624
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1624
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1648
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1672
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1696
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1720
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1744
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1768
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1792
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1840
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readHexDigit
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readHexDigit
   local.set $3
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readHexDigit
   local.set $4
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readHexDigit
   local.set $5
   local.get $2
   i32.const 4096
   i32.mul
   local.get $3
   i32.const 256
   i32.mul
   i32.add
   local.get $4
   i32.const 16
   i32.mul
   i32.add
   local.get $5
   i32.add
   local.set $6
   local.get $6
   call $~lib/string/String.fromCodePoint
   return
  end
  i32.const 0
  i32.eqz
  if
   i32.const 1920
   i32.const 1
   global.set $~lib/argc
   local.get $1
   i32.const 0
   call $~lib/string/String.fromCharCode|trampoline
   local.tee $6
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 840
   i32.const 255
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 656
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $6
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readString (; 399 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1192
   i32.const 840
   i32.const 197
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.set $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $2
  loop $loop|0
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readChar
   local.set $3
   local.get $3
   i32.const 32
   i32.ge_s
   i32.eqz
   if
    i32.const 1432
    i32.const 840
    i32.const 203
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 1168
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   if
    i32.const 1
    global.set $~lib/argc
    local.get $0
    i32.load offset=4
    local.get $1
    i32.const 0
    call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
    local.set $4
    local.get $2
    call $~lib/array/Array<~lib/string/String>#get:length
    i32.const 0
    i32.eq
    if
     local.get $4
     local.set $5
     local.get $2
     call $~lib/rt/stub/__release
     local.get $5
     return
    end
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#push
    drop
    local.get $2
    i32.const 656
    call $~lib/array/Array<~lib/string/String>#join
    local.set $5
    local.get $4
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $5
    return
   else    
    local.get $3
    i32.const 1600
    i32.const 0
    call $~lib/string/String#charCodeAt
    i32.eq
    if
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.get $1
     i32.const 1
     i32.add
     i32.gt_s
     if
      local.get $2
      i32.const 1
      global.set $~lib/argc
      local.get $0
      i32.load offset=4
      local.get $1
      i32.const 0
      call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
      local.tee $4
      call $~lib/array/Array<~lib/string/String>#push
      drop
      local.get $4
      call $~lib/rt/stub/__release
     end
     local.get $2
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readEscapedChar
     local.tee $4
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
   end
   br $loop|0
  end
  unreachable
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#parseKey (; 400 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#skipWhitespace
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readString
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readChar
  i32.const 2000
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 2024
   i32.const 840
   i32.const 159
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#parseObject (; 401 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#peekChar
  i32.const 928
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_deleteStrings#pushObject
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#peekChar
     i32.const 1080
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 142
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#parseKey
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readChar
   i32.const 1080
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2064
    i32.const 840
    i32.const 149
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popObject
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__near_ArgsParser_deleteStrings#pushArray (; 402 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushArray
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#parseArray (; 403 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#peekChar
  i32.const 2128
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_deleteStrings#pushArray
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#peekChar
     i32.const 2216
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 176
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readChar
   i32.const 2216
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2240
    i32.const 840
    i32.const 182
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popArray
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#parseString (; 404 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#peekChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.load
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readString
  local.tee $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setString
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readAndAssert (; 405 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $2
    call $~lib/string/String#charCodeAt
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readChar
    i32.eq
    i32.eqz
    if
     i32.const 2416
     local.get $1
     call $~lib/string/String.__concat
     local.tee $3
     i32.const 2456
     call $~lib/string/String.__concat
     local.tee $4
     i32.const 840
     i32.const 321
     i32.const 6
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#parseBoolean (; 406 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#peekChar
  i32.const 184
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/FALSE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 0
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#peekChar
  i32.const 160
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/TRUE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 1
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/main/__near_ArgsParser_deleteStrings#setInteger (; 407 ;) (type $FUNCSIG$viij) (param $0 i32) (param $1 i32) (param $2 i64)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 3928
  call $~lib/string/String.__eq
  if
   local.get $0
   local.get $2
   i32.wrap_i64
   i32.store offset=12
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $1
  i32.const 3952
  call $~lib/string/String.__eq
  if
   local.get $0
   local.get $2
   i32.wrap_i64
   i32.store offset=16
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setInteger
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#parseNumber (; 408 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  local.set $1
  i64.const 1
  local.set $2
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#peekChar
  i32.const 2568
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i64.const -1
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readChar
   drop
  end
  i32.const 0
  local.set $3
  block $break|0
   loop $continue|0
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#peekChar
    i32.le_s
    if (result i32)
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#peekChar
     global.get $~lib/assemblyscript-json/decoder/CHAR_9
     i32.le_s
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readChar
    local.set $4
    local.get $1
    i64.const 10
    i64.mul
    local.set $1
    local.get $1
    local.get $4
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    i32.sub
    i64.extend_i32_s
    i64.add
    local.set $1
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $continue|0
   end
   unreachable
  end
  local.get $3
  i32.const 0
  i32.gt_s
  if
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   local.get $1
   local.get $2
   i64.mul
   call $assembly/hello/main/__near_ArgsParser_deleteStrings#setInteger
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/main/__near_ArgsParser_deleteStrings#setNull (; 409 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setNull
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#parseNull (; 410 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#peekChar
  i32.const 216
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/NULL_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   call $assembly/hello/main/__near_ArgsParser_deleteStrings#setNull
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#parseValue (; 411 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#parseObject
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#parseArray
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#parseString
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#parseBoolean
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#parseNumber
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#parseNull
  end
  local.set $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#skipWhitespace
  local.get $1
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#deserialize (; 412 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  i32.const 0
  i32.ne
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
  else   
   local.get $0
   local.tee $4
   i32.const 0
   local.get $1
   call $~lib/assemblyscript-json/decoder/DecoderState#constructor
   local.set $3
   local.get $4
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#parseValue
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3176
   i32.const 840
   i32.const 100
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/deleteStrings (; 413 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  call $assembly/hello/main/buildString
  local.set $2
  block $break|0
   local.get $1
   i32.const 1
   i32.sub
   local.set $3
   loop $loop|0
    local.get $3
    local.get $0
    i32.ge_s
    i32.eqz
    br_if $break|0
    global.get $~lib/near-runtime-ts/storage/storage
    local.get $2
    local.get $1
    local.get $3
    i32.sub
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/string/String#substr
    local.tee $4
    i32.const 1648
    call $~lib/string/String.__concat
    local.tee $5
    call $~lib/near-runtime-ts/storage/Storage#delete
    local.get $3
    i32.const 1
    i32.sub
    local.set $3
    local.get $4
    call $~lib/rt/stub/__release
    local.get $5
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__wrapper_deleteStrings (; 414 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  i32.const 0
  call $assembly/hello/main/__near_ArgsParser_deleteStrings#constructor
  local.set $3
  local.get $3
  local.tee $4
  local.get $1
  local.tee $5
  local.get $4
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $5
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $5
  i32.store
  local.get $3
  local.tee $5
  i32.const 0
  local.get $3
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#constructor
  local.set $4
  local.get $5
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $4
  i32.store offset=4
  local.get $3
  i32.load offset=4
  local.get $1
  i32.const 0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_deleteStrings>#deserialize
  local.get $3
  i32.load offset=12
  local.get $3
  i32.load offset=16
  call $assembly/hello/main/deleteStrings
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__near_ArgsParser_recurse#constructor (; 415 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 16
   i32.const 46
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store8 offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#constructor (; 416 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 47
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#peekChar (; 417 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.ge_s
  if
   i32.const -1
   return
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  i32.load offset=4
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#isWhitespace (; 418 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 9
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 10
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 13
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 32
   i32.eq
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readChar (; 419 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.lt_s
  i32.eqz
  if
   i32.const 784
   i32.const 840
   i32.const 112
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.tee $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $1
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#skipWhitespace (; 420 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#peekChar
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#isWhitespace
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readChar
    drop
    br $continue|0
   end
   unreachable
  end
 )
 (func $assembly/hello/main/__near_ArgsParser_recurse#pushObject (; 421 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load8_u offset=8
  i32.const 0
  i32.ne
  i32.eqz
  if
   local.get $1
   i32.const 0
   call $~lib/string/String.__eq
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.eq
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 736
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.const 1
   i32.store8 offset=8
   i32.const 1
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  else   
   local.get $1
   i32.const 0
   call $~lib/string/String.__ne
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.ne
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 740
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushObject
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readHexDigit (; 422 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readChar
  local.set $1
  local.get $1
  global.get $~lib/assemblyscript-json/decoder/CHAR_0
  i32.sub
  local.set $2
  local.get $2
  i32.const 9
  i32.gt_s
  if
   local.get $1
   global.get $~lib/assemblyscript-json/decoder/CHAR_A
   i32.sub
   i32.const 10
   i32.add
   local.set $2
   local.get $2
   i32.const 10
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $2
    i32.const 15
    i32.gt_s
   end
   if
    local.get $1
    global.get $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
    i32.sub
    i32.const 10
    i32.add
    local.set $2
   end
  end
  i32.const 2
  i32.const 2
  i32.const 13
  i32.const 0
  call $~lib/rt/__allocArray
  local.set $3
  local.get $3
  i32.load offset=4
  local.set $4
  local.get $4
  local.get $1
  i32.store
  local.get $4
  local.get $2
  i32.store offset=4
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $2
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $2
   i32.const 16
   i32.lt_s
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1864
   i32.const 840
   i32.const 269
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readEscapedChar (; 423 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readChar
  local.set $1
  local.get $1
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1168
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1600
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1600
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1624
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1624
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1648
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1672
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1696
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1720
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1744
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1768
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1792
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1840
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readHexDigit
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readHexDigit
   local.set $3
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readHexDigit
   local.set $4
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readHexDigit
   local.set $5
   local.get $2
   i32.const 4096
   i32.mul
   local.get $3
   i32.const 256
   i32.mul
   i32.add
   local.get $4
   i32.const 16
   i32.mul
   i32.add
   local.get $5
   i32.add
   local.set $6
   local.get $6
   call $~lib/string/String.fromCodePoint
   return
  end
  i32.const 0
  i32.eqz
  if
   i32.const 1920
   i32.const 1
   global.set $~lib/argc
   local.get $1
   i32.const 0
   call $~lib/string/String.fromCharCode|trampoline
   local.tee $6
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 840
   i32.const 255
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 656
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $6
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readString (; 424 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1192
   i32.const 840
   i32.const 197
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.set $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $2
  loop $loop|0
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readChar
   local.set $3
   local.get $3
   i32.const 32
   i32.ge_s
   i32.eqz
   if
    i32.const 1432
    i32.const 840
    i32.const 203
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 1168
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   if
    i32.const 1
    global.set $~lib/argc
    local.get $0
    i32.load offset=4
    local.get $1
    i32.const 0
    call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
    local.set $4
    local.get $2
    call $~lib/array/Array<~lib/string/String>#get:length
    i32.const 0
    i32.eq
    if
     local.get $4
     local.set $5
     local.get $2
     call $~lib/rt/stub/__release
     local.get $5
     return
    end
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#push
    drop
    local.get $2
    i32.const 656
    call $~lib/array/Array<~lib/string/String>#join
    local.set $5
    local.get $4
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $5
    return
   else    
    local.get $3
    i32.const 1600
    i32.const 0
    call $~lib/string/String#charCodeAt
    i32.eq
    if
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.get $1
     i32.const 1
     i32.add
     i32.gt_s
     if
      local.get $2
      i32.const 1
      global.set $~lib/argc
      local.get $0
      i32.load offset=4
      local.get $1
      i32.const 0
      call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
      local.tee $4
      call $~lib/array/Array<~lib/string/String>#push
      drop
      local.get $4
      call $~lib/rt/stub/__release
     end
     local.get $2
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readEscapedChar
     local.tee $4
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
   end
   br $loop|0
  end
  unreachable
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#parseKey (; 425 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#skipWhitespace
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readString
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readChar
  i32.const 2000
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 2024
   i32.const 840
   i32.const 159
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#parseObject (; 426 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#peekChar
  i32.const 928
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_recurse#pushObject
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#peekChar
     i32.const 1080
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 142
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#parseKey
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readChar
   i32.const 1080
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2064
    i32.const 840
    i32.const 149
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popObject
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__near_ArgsParser_recurse#pushArray (; 427 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushArray
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#parseArray (; 428 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#peekChar
  i32.const 2128
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_recurse#pushArray
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#peekChar
     i32.const 2216
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 176
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readChar
   i32.const 2216
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2240
    i32.const 840
    i32.const 182
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popArray
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#parseString (; 429 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#peekChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.load
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readString
  local.tee $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setString
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readAndAssert (; 430 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $2
    call $~lib/string/String#charCodeAt
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readChar
    i32.eq
    i32.eqz
    if
     i32.const 2416
     local.get $1
     call $~lib/string/String.__concat
     local.tee $3
     i32.const 2456
     call $~lib/string/String.__concat
     local.tee $4
     i32.const 840
     i32.const 321
     i32.const 6
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#parseBoolean (; 431 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#peekChar
  i32.const 184
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/FALSE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 0
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#peekChar
  i32.const 160
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/TRUE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 1
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/main/__near_ArgsParser_recurse#setInteger (; 432 ;) (type $FUNCSIG$viij) (param $0 i32) (param $1 i32) (param $2 i64)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 1696
  call $~lib/string/String.__eq
  if
   local.get $0
   local.get $2
   i32.wrap_i64
   i32.store offset=12
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setInteger
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#parseNumber (; 433 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  local.set $1
  i64.const 1
  local.set $2
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#peekChar
  i32.const 2568
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i64.const -1
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readChar
   drop
  end
  i32.const 0
  local.set $3
  block $break|0
   loop $continue|0
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#peekChar
    i32.le_s
    if (result i32)
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#peekChar
     global.get $~lib/assemblyscript-json/decoder/CHAR_9
     i32.le_s
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readChar
    local.set $4
    local.get $1
    i64.const 10
    i64.mul
    local.set $1
    local.get $1
    local.get $4
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    i32.sub
    i64.extend_i32_s
    i64.add
    local.set $1
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $continue|0
   end
   unreachable
  end
  local.get $3
  i32.const 0
  i32.gt_s
  if
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   local.get $1
   local.get $2
   i64.mul
   call $assembly/hello/main/__near_ArgsParser_recurse#setInteger
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/main/__near_ArgsParser_recurse#setNull (; 434 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setNull
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#parseNull (; 435 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#peekChar
  i32.const 216
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/NULL_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   call $assembly/hello/main/__near_ArgsParser_recurse#setNull
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#parseValue (; 436 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#parseObject
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#parseArray
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#parseString
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#parseBoolean
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#parseNumber
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#parseNull
  end
  local.set $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#skipWhitespace
  local.get $1
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#deserialize (; 437 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  i32.const 0
  i32.ne
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
  else   
   local.get $0
   local.tee $4
   i32.const 0
   local.get $1
   call $~lib/assemblyscript-json/decoder/DecoderState#constructor
   local.set $3
   local.get $4
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#parseValue
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3176
   i32.const 840
   i32.const 100
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/recurse (; 438 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.const 0
  i32.le_s
  if
   local.get $0
   return
  end
  local.get $0
  i32.const 1
  i32.sub
  call $assembly/hello/main/recurse
  i32.const 1
  i32.add
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#writeInteger (; 439 ;) (type $FUNCSIG$vij) (param $0 i32) (param $1 i64)
  (local $2 i32)
  local.get $0
  local.get $1
  call $~lib/number/I64#toString
  local.tee $2
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#setInteger (; 440 ;) (type $FUNCSIG$viij) (param $0 i32) (param $1 i32) (param $2 i64)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#writeKey
  local.get $0
  local.get $2
  call $~lib/assemblyscript-json/encoder/JSONEncoder#writeInteger
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/nearEntry/encode<i32> (; 441 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $2
  local.get $1
  i64.extend_i32_s
  call $~lib/assemblyscript-json/encoder/JSONEncoder#setInteger
  local.get $0
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__wrapper_recurse (; 442 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  i32.const 0
  call $assembly/hello/main/__near_ArgsParser_recurse#constructor
  local.set $3
  local.get $3
  local.tee $4
  local.get $1
  local.tee $5
  local.get $4
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $5
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $5
  i32.store
  local.get $3
  local.tee $5
  i32.const 0
  local.get $3
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#constructor
  local.set $4
  local.get $5
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $4
  i32.store offset=4
  local.get $3
  i32.load offset=4
  local.get $1
  i32.const 0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_recurse>#deserialize
  local.get $3
  i32.load offset=12
  call $assembly/hello/main/recurse
  local.set $4
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $5
  local.get $5
  local.get $4
  i32.const 0
  call $~lib/nearEntry/encode<i32>
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $6
  local.get $6
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $6
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $7
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__near_ArgsParser_callPromise#constructor (; 443 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 16
   i32.const 48
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store8 offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#constructor (; 444 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 49
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#peekChar (; 445 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.ge_s
  if
   i32.const -1
   return
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  i32.load offset=4
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#isWhitespace (; 446 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 9
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 10
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 13
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 32
   i32.eq
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readChar (; 447 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.lt_s
  i32.eqz
  if
   i32.const 784
   i32.const 840
   i32.const 112
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.tee $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $1
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#skipWhitespace (; 448 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#peekChar
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#isWhitespace
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readChar
    drop
    br $continue|0
   end
   unreachable
  end
 )
 (func $assembly/hello/model/PromiseArgs#constructor (; 449 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 36
   i32.const 50
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
  i32.const 0
  i32.store offset=16
  local.get $0
  i32.const 0
  i32.store offset=20
  local.get $0
  i32.const 0
  i32.store offset=24
  local.get $0
  i32.const 0
  i32.store offset=28
  local.get $0
  i32.const 0
  i32.store offset=32
  local.get $0
 )
 (func $assembly/hello/model/__near_JSONHandler_PromiseArgs#constructor (; 450 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 16
   i32.const 51
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store8 offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load offset=12
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store offset=12
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#constructor (; 451 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 52
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#peekChar (; 452 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.ge_s
  if
   i32.const -1
   return
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  i32.load offset=4
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#isWhitespace (; 453 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 9
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 10
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 13
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 32
   i32.eq
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readChar (; 454 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.lt_s
  i32.eqz
  if
   i32.const 784
   i32.const 840
   i32.const 112
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.tee $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $1
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#skipWhitespace (; 455 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#peekChar
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#isWhitespace
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readChar
    drop
    br $continue|0
   end
   unreachable
  end
 )
 (func $assembly/hello/model/__near_JSONHandler_PromiseArgs#pushObject (; 456 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load8_u offset=8
  i32.const 0
  i32.ne
  i32.eqz
  if
   local.get $1
   i32.const 0
   call $~lib/string/String.__eq
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.eq
   end
   i32.eqz
   if
    i32.const 0
    i32.const 4024
    i32.const 77
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.const 1
   i32.store8 offset=8
   i32.const 1
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  else   
   local.get $1
   i32.const 0
   call $~lib/string/String.__ne
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.ne
   end
   i32.eqz
   if
    i32.const 0
    i32.const 4024
    i32.const 81
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $1
  i32.const 4000
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.tee $2
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load offset=4
   call $~lib/nearEntry/decode<assembly/hello/model/PromiseArgs>
   local.set $3
   local.get $2
   i32.load offset=8
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=8
   i32.const 0
   local.set $3
   local.get $1
   call $~lib/rt/stub/__release
   local.get $3
   return
  end
  local.get $1
  i32.const 4088
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.tee $3
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load offset=4
   call $~lib/nearEntry/decode<assembly/hello/model/PromiseArgs>
   local.set $2
   local.get $3
   i32.load offset=24
   call $~lib/rt/stub/__release
   local.get $2
   i32.store offset=24
   i32.const 0
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushObject
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readHexDigit (; 457 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readChar
  local.set $1
  local.get $1
  global.get $~lib/assemblyscript-json/decoder/CHAR_0
  i32.sub
  local.set $2
  local.get $2
  i32.const 9
  i32.gt_s
  if
   local.get $1
   global.get $~lib/assemblyscript-json/decoder/CHAR_A
   i32.sub
   i32.const 10
   i32.add
   local.set $2
   local.get $2
   i32.const 10
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $2
    i32.const 15
    i32.gt_s
   end
   if
    local.get $1
    global.get $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
    i32.sub
    i32.const 10
    i32.add
    local.set $2
   end
  end
  i32.const 2
  i32.const 2
  i32.const 13
  i32.const 0
  call $~lib/rt/__allocArray
  local.set $3
  local.get $3
  i32.load offset=4
  local.set $4
  local.get $4
  local.get $1
  i32.store
  local.get $4
  local.get $2
  i32.store offset=4
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $2
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $2
   i32.const 16
   i32.lt_s
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1864
   i32.const 840
   i32.const 269
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readEscapedChar (; 458 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readChar
  local.set $1
  local.get $1
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1168
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1600
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1600
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1624
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1624
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1648
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1672
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1696
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1720
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1744
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1768
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1792
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1840
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readHexDigit
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readHexDigit
   local.set $3
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readHexDigit
   local.set $4
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readHexDigit
   local.set $5
   local.get $2
   i32.const 4096
   i32.mul
   local.get $3
   i32.const 256
   i32.mul
   i32.add
   local.get $4
   i32.const 16
   i32.mul
   i32.add
   local.get $5
   i32.add
   local.set $6
   local.get $6
   call $~lib/string/String.fromCodePoint
   return
  end
  i32.const 0
  i32.eqz
  if
   i32.const 1920
   i32.const 1
   global.set $~lib/argc
   local.get $1
   i32.const 0
   call $~lib/string/String.fromCharCode|trampoline
   local.tee $6
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 840
   i32.const 255
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 656
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $6
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readString (; 459 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1192
   i32.const 840
   i32.const 197
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.set $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $2
  loop $loop|0
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readChar
   local.set $3
   local.get $3
   i32.const 32
   i32.ge_s
   i32.eqz
   if
    i32.const 1432
    i32.const 840
    i32.const 203
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 1168
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   if
    i32.const 1
    global.set $~lib/argc
    local.get $0
    i32.load offset=4
    local.get $1
    i32.const 0
    call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
    local.set $4
    local.get $2
    call $~lib/array/Array<~lib/string/String>#get:length
    i32.const 0
    i32.eq
    if
     local.get $4
     local.set $5
     local.get $2
     call $~lib/rt/stub/__release
     local.get $5
     return
    end
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#push
    drop
    local.get $2
    i32.const 656
    call $~lib/array/Array<~lib/string/String>#join
    local.set $5
    local.get $4
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $5
    return
   else    
    local.get $3
    i32.const 1600
    i32.const 0
    call $~lib/string/String#charCodeAt
    i32.eq
    if
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.get $1
     i32.const 1
     i32.add
     i32.gt_s
     if
      local.get $2
      i32.const 1
      global.set $~lib/argc
      local.get $0
      i32.load offset=4
      local.get $1
      i32.const 0
      call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
      local.tee $4
      call $~lib/array/Array<~lib/string/String>#push
      drop
      local.get $4
      call $~lib/rt/stub/__release
     end
     local.get $2
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readEscapedChar
     local.tee $4
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
   end
   br $loop|0
  end
  unreachable
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#parseKey (; 460 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#skipWhitespace
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readString
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readChar
  i32.const 2000
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 2024
   i32.const 840
   i32.const 159
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#parseObject (; 461 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#peekChar
  i32.const 928
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/model/__near_JSONHandler_PromiseArgs#pushObject
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#peekChar
     i32.const 1080
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 142
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#parseKey
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readChar
   i32.const 1080
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2064
    i32.const 840
    i32.const 149
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popObject
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/model/__near_JSONHandler_PromiseArgs#pushArray (; 462 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushArray
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#parseArray (; 463 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#peekChar
  i32.const 2128
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/model/__near_JSONHandler_PromiseArgs#pushArray
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#peekChar
     i32.const 2216
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 176
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readChar
   i32.const 2216
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2240
    i32.const 840
    i32.const 182
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popArray
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/model/__near_JSONHandler_PromiseArgs#setString (; 464 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 4128
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   return
  end
  local.get $1
  i32.const 4160
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.tee $4
   local.get $2
   local.tee $3
   local.get $4
   i32.load offset=4
   local.tee $4
   i32.ne
   if
    local.get $3
    call $~lib/rt/stub/__retain
    drop
    local.get $4
    call $~lib/rt/stub/__release
   end
   local.get $3
   i32.store offset=4
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   return
  end
  local.get $1
  i32.const 4200
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=20
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=20
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setString
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#parseString (; 465 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#peekChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.load
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readString
  local.tee $1
  call $assembly/hello/model/__near_JSONHandler_PromiseArgs#setString
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readAndAssert (; 466 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $2
    call $~lib/string/String#charCodeAt
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readChar
    i32.eq
    i32.eqz
    if
     i32.const 2416
     local.get $1
     call $~lib/string/String.__concat
     local.tee $3
     i32.const 2456
     call $~lib/string/String.__concat
     local.tee $4
     i32.const 840
     i32.const 321
     i32.const 6
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#parseBoolean (; 467 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#peekChar
  i32.const 184
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/FALSE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 0
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#peekChar
  i32.const 160
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/TRUE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 1
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/model/__near_JSONHandler_PromiseArgs#setInteger (; 468 ;) (type $FUNCSIG$viij) (param $0 i32) (param $1 i32) (param $2 i64)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 4232
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.get $2
   i32.wrap_i64
   i32.store offset=12
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $1
  i32.const 4256
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.get $2
   i32.wrap_i64
   i32.store offset=16
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $1
  i32.const 4288
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.get $2
   i32.wrap_i64
   i32.store offset=28
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $1
  i32.const 4336
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.get $2
   i32.wrap_i64
   i32.store offset=32
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setInteger
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#parseNumber (; 469 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  local.set $1
  i64.const 1
  local.set $2
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#peekChar
  i32.const 2568
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i64.const -1
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readChar
   drop
  end
  i32.const 0
  local.set $3
  block $break|0
   loop $continue|0
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#peekChar
    i32.le_s
    if (result i32)
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#peekChar
     global.get $~lib/assemblyscript-json/decoder/CHAR_9
     i32.le_s
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readChar
    local.set $4
    local.get $1
    i64.const 10
    i64.mul
    local.set $1
    local.get $1
    local.get $4
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    i32.sub
    i64.extend_i32_s
    i64.add
    local.set $1
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $continue|0
   end
   unreachable
  end
  local.get $3
  i32.const 0
  i32.gt_s
  if
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   local.get $1
   local.get $2
   i64.mul
   call $assembly/hello/model/__near_JSONHandler_PromiseArgs#setInteger
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/model/__near_JSONHandler_PromiseArgs#setNull (; 470 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 4128
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.tee $2
   i32.const 0
   local.tee $3
   local.get $2
   i32.load
   local.tee $2
   i32.ne
   if
    local.get $3
    call $~lib/rt/stub/__retain
    drop
    local.get $2
    call $~lib/rt/stub/__release
   end
   local.get $3
   i32.store
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $1
  i32.const 4160
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.tee $3
   i32.const 0
   local.tee $2
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $2
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $2
   i32.store offset=4
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $1
  i32.const 4000
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.tee $2
   i32.const 0
   local.tee $3
   local.get $2
   i32.load offset=8
   local.tee $2
   i32.ne
   if
    local.get $3
    call $~lib/rt/stub/__retain
    drop
    local.get $2
    call $~lib/rt/stub/__release
   end
   local.get $3
   i32.store offset=8
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $1
  i32.const 4200
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.tee $3
   i32.const 0
   local.tee $2
   local.get $3
   i32.load offset=20
   local.tee $3
   i32.ne
   if
    local.get $2
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $2
   i32.store offset=20
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $1
  i32.const 4088
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.tee $2
   i32.const 0
   local.tee $3
   local.get $2
   i32.load offset=24
   local.tee $2
   i32.ne
   if
    local.get $3
    call $~lib/rt/stub/__retain
    drop
    local.get $2
    call $~lib/rt/stub/__release
   end
   local.get $3
   i32.store offset=24
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setNull
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#parseNull (; 471 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#peekChar
  i32.const 216
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/NULL_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   call $assembly/hello/model/__near_JSONHandler_PromiseArgs#setNull
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#parseValue (; 472 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#parseObject
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#parseArray
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#parseString
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#parseBoolean
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#parseNumber
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#parseNull
  end
  local.set $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#skipWhitespace
  local.get $1
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#deserialize (; 473 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  i32.const 0
  i32.ne
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
  else   
   local.get $0
   local.tee $4
   i32.const 0
   local.get $1
   call $~lib/assemblyscript-json/decoder/DecoderState#constructor
   local.set $3
   local.get $4
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#parseValue
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3176
   i32.const 840
   i32.const 100
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/model/PromiseArgs#decode (; 474 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  local.get $0
  call $assembly/hello/model/__near_JSONHandler_PromiseArgs#constructor
  local.set $3
  local.get $3
  local.tee $4
  local.get $1
  local.tee $5
  local.get $4
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $5
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $5
  i32.store
  i32.const 0
  local.get $3
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#constructor
  local.set $5
  local.get $3
  local.tee $4
  local.get $5
  local.tee $6
  local.get $4
  i32.load offset=4
  local.tee $4
  i32.ne
  if
   local.get $6
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $6
  i32.store offset=4
  local.get $5
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_PromiseArgs>#deserialize
  local.get $0
  call $~lib/rt/stub/__retain
  local.set $6
  local.get $3
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $6
 )
 (func $~lib/nearEntry/decode<assembly/hello/model/PromiseArgs> (; 475 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  local.set $2
  i32.const 0
  call $assembly/hello/model/PromiseArgs#constructor
  local.tee $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $4
  local.get $0
  local.get $1
  call $assembly/hello/model/PromiseArgs#decode
  local.set $5
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $5
  return
 )
 (func $assembly/hello/main/__near_ArgsParser_callPromise#pushObject (; 476 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load8_u offset=8
  i32.const 0
  i32.ne
  i32.eqz
  if
   local.get $1
   i32.const 0
   call $~lib/string/String.__eq
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.eq
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 797
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.const 1
   i32.store8 offset=8
   i32.const 1
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  else   
   local.get $1
   i32.const 0
   call $~lib/string/String.__ne
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.ne
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 801
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $1
  i32.const 4000
  call $~lib/string/String.__eq
  if
   local.get $0
   local.tee $2
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load offset=4
   call $~lib/nearEntry/decode<assembly/hello/model/PromiseArgs>
   local.set $3
   local.get $2
   i32.load offset=12
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=12
   i32.const 0
   local.set $3
   local.get $1
   call $~lib/rt/stub/__release
   local.get $3
   return
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushObject
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readHexDigit (; 477 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readChar
  local.set $1
  local.get $1
  global.get $~lib/assemblyscript-json/decoder/CHAR_0
  i32.sub
  local.set $2
  local.get $2
  i32.const 9
  i32.gt_s
  if
   local.get $1
   global.get $~lib/assemblyscript-json/decoder/CHAR_A
   i32.sub
   i32.const 10
   i32.add
   local.set $2
   local.get $2
   i32.const 10
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $2
    i32.const 15
    i32.gt_s
   end
   if
    local.get $1
    global.get $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
    i32.sub
    i32.const 10
    i32.add
    local.set $2
   end
  end
  i32.const 2
  i32.const 2
  i32.const 13
  i32.const 0
  call $~lib/rt/__allocArray
  local.set $3
  local.get $3
  i32.load offset=4
  local.set $4
  local.get $4
  local.get $1
  i32.store
  local.get $4
  local.get $2
  i32.store offset=4
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $2
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $2
   i32.const 16
   i32.lt_s
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1864
   i32.const 840
   i32.const 269
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readEscapedChar (; 478 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readChar
  local.set $1
  local.get $1
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1168
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1600
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1600
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1624
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1624
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1648
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1672
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1696
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1720
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1744
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1768
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1792
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1840
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readHexDigit
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readHexDigit
   local.set $3
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readHexDigit
   local.set $4
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readHexDigit
   local.set $5
   local.get $2
   i32.const 4096
   i32.mul
   local.get $3
   i32.const 256
   i32.mul
   i32.add
   local.get $4
   i32.const 16
   i32.mul
   i32.add
   local.get $5
   i32.add
   local.set $6
   local.get $6
   call $~lib/string/String.fromCodePoint
   return
  end
  i32.const 0
  i32.eqz
  if
   i32.const 1920
   i32.const 1
   global.set $~lib/argc
   local.get $1
   i32.const 0
   call $~lib/string/String.fromCharCode|trampoline
   local.tee $6
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 840
   i32.const 255
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 656
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $6
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readString (; 479 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1192
   i32.const 840
   i32.const 197
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.set $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $2
  loop $loop|0
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readChar
   local.set $3
   local.get $3
   i32.const 32
   i32.ge_s
   i32.eqz
   if
    i32.const 1432
    i32.const 840
    i32.const 203
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 1168
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   if
    i32.const 1
    global.set $~lib/argc
    local.get $0
    i32.load offset=4
    local.get $1
    i32.const 0
    call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
    local.set $4
    local.get $2
    call $~lib/array/Array<~lib/string/String>#get:length
    i32.const 0
    i32.eq
    if
     local.get $4
     local.set $5
     local.get $2
     call $~lib/rt/stub/__release
     local.get $5
     return
    end
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#push
    drop
    local.get $2
    i32.const 656
    call $~lib/array/Array<~lib/string/String>#join
    local.set $5
    local.get $4
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $5
    return
   else    
    local.get $3
    i32.const 1600
    i32.const 0
    call $~lib/string/String#charCodeAt
    i32.eq
    if
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.get $1
     i32.const 1
     i32.add
     i32.gt_s
     if
      local.get $2
      i32.const 1
      global.set $~lib/argc
      local.get $0
      i32.load offset=4
      local.get $1
      i32.const 0
      call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
      local.tee $4
      call $~lib/array/Array<~lib/string/String>#push
      drop
      local.get $4
      call $~lib/rt/stub/__release
     end
     local.get $2
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readEscapedChar
     local.tee $4
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
   end
   br $loop|0
  end
  unreachable
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#parseKey (; 480 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#skipWhitespace
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readString
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readChar
  i32.const 2000
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 2024
   i32.const 840
   i32.const 159
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#parseObject (; 481 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#peekChar
  i32.const 928
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_callPromise#pushObject
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#peekChar
     i32.const 1080
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 142
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#parseKey
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readChar
   i32.const 1080
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2064
    i32.const 840
    i32.const 149
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popObject
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__near_ArgsParser_callPromise#pushArray (; 482 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushArray
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#parseArray (; 483 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#peekChar
  i32.const 2128
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_callPromise#pushArray
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#peekChar
     i32.const 2216
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 176
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readChar
   i32.const 2216
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2240
    i32.const 840
    i32.const 182
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popArray
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#parseString (; 484 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#peekChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.load
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readString
  local.tee $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setString
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readAndAssert (; 485 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $2
    call $~lib/string/String#charCodeAt
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readChar
    i32.eq
    i32.eqz
    if
     i32.const 2416
     local.get $1
     call $~lib/string/String.__concat
     local.tee $3
     i32.const 2456
     call $~lib/string/String.__concat
     local.tee $4
     i32.const 840
     i32.const 321
     i32.const 6
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#parseBoolean (; 486 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#peekChar
  i32.const 184
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/FALSE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 0
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#peekChar
  i32.const 160
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/TRUE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 1
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#parseNumber (; 487 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  local.set $1
  i64.const 1
  local.set $2
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#peekChar
  i32.const 2568
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i64.const -1
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readChar
   drop
  end
  i32.const 0
  local.set $3
  block $break|0
   loop $continue|0
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#peekChar
    i32.le_s
    if (result i32)
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#peekChar
     global.get $~lib/assemblyscript-json/decoder/CHAR_9
     i32.le_s
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readChar
    local.set $4
    local.get $1
    i64.const 10
    i64.mul
    local.set $1
    local.get $1
    local.get $4
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    i32.sub
    i64.extend_i32_s
    i64.add
    local.set $1
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $continue|0
   end
   unreachable
  end
  local.get $3
  i32.const 0
  i32.gt_s
  if
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   local.get $1
   local.get $2
   i64.mul
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setInteger
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/main/__near_ArgsParser_callPromise#setNull (; 488 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 4000
  call $~lib/string/String.__eq
  if
   local.get $0
   local.tee $2
   i32.const 0
   local.tee $3
   local.get $2
   i32.load offset=12
   local.tee $2
   i32.ne
   if
    local.get $3
    call $~lib/rt/stub/__retain
    drop
    local.get $2
    call $~lib/rt/stub/__release
   end
   local.get $3
   i32.store offset=12
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setNull
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#parseNull (; 489 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#peekChar
  i32.const 216
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/NULL_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   call $assembly/hello/main/__near_ArgsParser_callPromise#setNull
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#parseValue (; 490 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#parseObject
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#parseArray
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#parseString
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#parseBoolean
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#parseNumber
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#parseNull
  end
  local.set $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#skipWhitespace
  local.get $1
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#deserialize (; 491 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  i32.const 0
  i32.ne
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
  else   
   local.get $0
   local.tee $4
   i32.const 0
   local.get $1
   call $~lib/assemblyscript-json/decoder/DecoderState#constructor
   local.set $3
   local.get $4
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#parseValue
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3176
   i32.const 840
   i32.const 100
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#pushObject (; 492 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#writeKey
  local.get $0
  i32.const 928
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  local.get $0
  i32.load
  i32.const 1
  call $~lib/array/Array<i32>#push
  drop
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#popObject (; 493 ;) (type $FUNCSIG$vi) (param $0 i32)
  local.get $0
  i32.const 1080
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  local.get $0
  i32.load
  call $~lib/array/Array<i32>#pop
  drop
 )
 (func $assembly/hello/model/PromiseArgs#encode (; 494 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.ne
  if (result i32)
   local.get $1
   call $~lib/rt/stub/__retain
  else   
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  end
  local.tee $3
  if (result i32)
   local.get $3
  else   
   unreachable
  end
  call $~lib/rt/stub/__retain
  local.set $3
  local.get $3
  local.get $2
  call $~lib/assemblyscript-json/encoder/JSONEncoder#pushObject
  drop
  local.get $3
  local.get $0
  i32.load
  i32.const 4128
  call $~lib/nearEntry/encode<~lib/string/String>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=4
  i32.const 4160
  call $~lib/nearEntry/encode<~lib/string/String>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=8
  i32.const 4000
  call $~lib/nearEntry/encode<assembly/hello/model/PromiseArgs>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=12
  i32.const 4232
  call $~lib/nearEntry/encode<i32>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=16
  i32.const 4256
  call $~lib/nearEntry/encode<i32>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=20
  i32.const 4200
  call $~lib/nearEntry/encode<~lib/string/String>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=24
  i32.const 4088
  call $~lib/nearEntry/encode<assembly/hello/model/PromiseArgs>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=28
  i32.const 4288
  call $~lib/nearEntry/encode<i32>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=32
  i32.const 4336
  call $~lib/nearEntry/encode<i32>
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/assemblyscript-json/encoder/JSONEncoder#popObject
  local.get $3
  local.set $4
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/nearEntry/encode<assembly/hello/model/PromiseArgs> (; 495 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.eq
  if
   local.get $0
   local.get $2
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $1
   local.get $0
   local.get $2
   call $assembly/hello/model/PromiseArgs#encode
   call $~lib/rt/stub/__release
  end
  local.get $0
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/model/InputPromiseArgs#encode (; 496 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.ne
  if (result i32)
   local.get $1
   call $~lib/rt/stub/__retain
  else   
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  end
  local.tee $3
  if (result i32)
   local.get $3
  else   
   unreachable
  end
  call $~lib/rt/stub/__retain
  local.set $3
  local.get $3
  local.get $2
  call $~lib/assemblyscript-json/encoder/JSONEncoder#pushObject
  drop
  local.get $3
  local.get $0
  i32.load
  i32.const 4000
  call $~lib/nearEntry/encode<assembly/hello/model/PromiseArgs>
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/assemblyscript-json/encoder/JSONEncoder#popObject
  local.get $3
  local.set $4
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/bignum/integer/u128/u128#constructor (; 497 ;) (type $FUNCSIG$iijj) (param $0 i32) (param $1 i64) (param $2 i64) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 16
   i32.const 5
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  local.get $1
  i64.store
  local.get $0
  local.get $2
  i64.store offset=8
  local.get $0
 )
 (func $~lib/polyfills/bswap<u64> (; 498 ;) (type $FUNCSIG$jj) (param $0 i64) (result i64)
  (local $1 i64)
  (local $2 i64)
  (local $3 i64)
  local.get $0
  i64.const 8
  i64.shr_u
  i64.const 71777214294589695
  i64.and
  local.set $1
  local.get $0
  i64.const 71777214294589695
  i64.and
  i64.const 8
  i64.shl
  local.set $2
  local.get $1
  local.get $2
  i64.or
  local.set $3
  local.get $3
  i64.const 16
  i64.shr_u
  i64.const 281470681808895
  i64.and
  local.set $1
  local.get $3
  i64.const 281470681808895
  i64.and
  i64.const 16
  i64.shl
  local.set $2
  local.get $1
  local.get $2
  i64.or
  i64.const 32
  i64.rotr
  return
 )
 (func $~lib/bignum/integer/u128/u128#toArrayBufferBE (; 499 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $1
  local.get $0
  i64.load offset=8
  call $~lib/polyfills/bswap<u64>
  i64.store
  local.get $1
  local.get $0
  i64.load
  call $~lib/polyfills/bswap<u64>
  i64.store offset=8
 )
 (func $~lib/bignum/integer/u128/u128#toArrayBufferLE (; 500 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $1
  local.get $0
  i64.load
  i64.store
  local.get $1
  local.get $0
  i64.load offset=8
  i64.store offset=8
 )
 (func $~lib/bignum/integer/u128/u128#toArrayBuffer (; 501 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $2
  if
   local.get $0
   local.get $1
   call $~lib/bignum/integer/u128/u128#toArrayBufferBE
  else   
   local.get $0
   local.get $1
   call $~lib/bignum/integer/u128/u128#toArrayBufferLE
  end
 )
 (func $~lib/near-runtime-ts/contract/ContractPromise.create (; 502 ;) (type $FUNCSIG$iiiiji) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i64) (param $4 i32) (result i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i64)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $4
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $5
  local.get $1
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $6
  local.get $4
  local.set $7
  i32.const 0
  local.set $8
  i32.const 0
  i32.const 16
  call $~lib/typedarray/Uint8Array#constructor
  local.set $9
  local.get $9
  i32.load offset=4
  local.set $10
  local.get $7
  local.get $10
  local.get $8
  call $~lib/bignum/integer/u128/u128#toArrayBuffer
  local.get $9
  local.set $10
  local.get $5
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $5
  i32.load offset=4
  i64.extend_i32_u
  local.get $6
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $6
  i32.load offset=4
  i64.extend_i32_u
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $2
  i32.load offset=4
  i64.extend_i32_u
  local.get $10
  i32.load offset=4
  i64.extend_i32_u
  local.get $3
  call $~lib/near-runtime-ts/runtime_api/runtime_api.promise_create
  local.set $11
  i32.const 8
  i32.const 54
  call $~lib/rt/stub/__alloc
  call $~lib/rt/stub/__retain
  local.set $9
  local.get $9
  local.get $11
  i64.store
  local.get $9
  call $~lib/rt/stub/__retain
  local.set $8
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $10
  call $~lib/rt/stub/__release
  local.get $9
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $8
 )
 (func $~lib/near-runtime-ts/contract/Context#_readRegisterContentsAsString (; 503 ;) (type $FUNCSIG$iij) (param $0 i32) (param $1 i64) (result i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 0
  local.get $1
  call $~lib/near-runtime-ts/runtime_api/runtime_api.register_len
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $2
  local.get $1
  local.get $2
  i32.load offset=4
  i64.extend_i32_u
  call $~lib/near-runtime-ts/runtime_api/runtime_api.read_register
  local.get $2
  call $~lib/near-runtime-ts/util/util.bytesToString
  local.tee $3
  if (result i32)
   local.get $3
  else   
   unreachable
  end
  call $~lib/rt/stub/__retain
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/near-runtime-ts/contract/Context#get:contractName (; 504 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  i64.const 0
  call $~lib/near-runtime-ts/runtime_api/runtime_api.current_account_id
  local.get $0
  i64.const 0
  call $~lib/near-runtime-ts/contract/Context#_readRegisterContentsAsString
 )
 (func $~lib/near-runtime-ts/contract/ContractPromise#then (; 505 ;) (type $FUNCSIG$iiiiiji) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i64) (param $5 i32) (result i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i64)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $3
  call $~lib/rt/stub/__retain
  drop
  local.get $5
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $6
  local.get $2
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $7
  local.get $5
  local.set $8
  i32.const 0
  local.set $9
  i32.const 0
  i32.const 16
  call $~lib/typedarray/Uint8Array#constructor
  local.set $10
  local.get $10
  i32.load offset=4
  local.set $11
  local.get $8
  local.get $11
  local.get $9
  call $~lib/bignum/integer/u128/u128#toArrayBuffer
  local.get $10
  local.set $11
  local.get $0
  i64.load
  local.get $6
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $6
  i32.load offset=4
  i64.extend_i32_u
  local.get $7
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $7
  i32.load offset=4
  i64.extend_i32_u
  local.get $3
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $3
  i32.load offset=4
  i64.extend_i32_u
  local.get $11
  i32.load offset=4
  i64.extend_i32_u
  local.get $4
  call $~lib/near-runtime-ts/runtime_api/runtime_api.promise_then
  local.set $12
  i32.const 8
  i32.const 54
  call $~lib/rt/stub/__alloc
  call $~lib/rt/stub/__retain
  local.set $10
  local.get $10
  local.get $12
  i64.store
  local.get $10
  call $~lib/rt/stub/__retain
  local.set $9
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $11
  call $~lib/rt/stub/__release
  local.get $10
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $9
 )
 (func $~lib/near-runtime-ts/contract/ContractPromise#returnAsResult (; 506 ;) (type $FUNCSIG$vi) (param $0 i32)
  local.get $0
  i64.load
  call $~lib/near-runtime-ts/runtime_api/runtime_api.promise_return
 )
 (func $assembly/hello/main/callPromise (; 507 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i64)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i64)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  i32.const 4
  i32.const 53
  call $~lib/rt/stub/__alloc
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $1
  local.get $0
  i32.load offset=8
  i32.store
  local.get $1
  call $~lib/rt/stub/__retain
  local.set $2
  local.get $0
  i32.load offset=16
  i64.extend_i32_s
  local.set $3
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 0
  i32.const 656
  call $assembly/hello/model/InputPromiseArgs#encode
  local.tee $4
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.tee $5
  local.get $0
  i32.load offset=12
  i64.extend_i32_s
  i32.const 0
  local.get $0
  i32.load offset=16
  i64.extend_i32_s
  i64.const 0
  call $~lib/bignum/integer/u128/u128#constructor
  local.tee $6
  call $~lib/near-runtime-ts/contract/ContractPromise.create
  local.set $7
  local.get $0
  i32.load offset=20
  if
   local.get $2
   local.tee $8
   local.get $0
   i32.load offset=24
   local.tee $9
   local.get $8
   i32.load
   local.tee $8
   i32.ne
   if
    local.get $9
    call $~lib/rt/stub/__retain
    drop
    local.get $8
    call $~lib/rt/stub/__release
   end
   local.get $9
   i32.store
   local.get $0
   i32.load offset=28
   i64.extend_i32_s
   local.set $10
   local.get $7
   global.get $~lib/near-runtime-ts/contract/context
   call $~lib/near-runtime-ts/contract/Context#get:contractName
   local.tee $9
   local.get $0
   i32.load offset=20
   local.get $2
   i32.const 0
   i32.const 656
   call $assembly/hello/model/InputPromiseArgs#encode
   local.tee $8
   call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
   local.tee $11
   local.get $0
   i32.load offset=32
   i64.extend_i32_s
   i32.const 0
   local.get $10
   i64.const 0
   call $~lib/bignum/integer/u128/u128#constructor
   local.tee $12
   call $~lib/near-runtime-ts/contract/ContractPromise#then
   local.set $13
   local.get $7
   call $~lib/rt/stub/__release
   local.get $13
   local.set $7
   local.get $9
   call $~lib/rt/stub/__release
   local.get $8
   call $~lib/rt/stub/__release
   local.get $11
   call $~lib/rt/stub/__release
   local.get $12
   call $~lib/rt/stub/__release
  end
  local.get $7
  call $~lib/near-runtime-ts/contract/ContractPromise#returnAsResult
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__wrapper_callPromise (; 508 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  i32.const 0
  call $assembly/hello/main/__near_ArgsParser_callPromise#constructor
  local.set $3
  local.get $3
  local.tee $4
  local.get $1
  local.tee $5
  local.get $4
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $5
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $5
  i32.store
  local.get $3
  local.tee $5
  i32.const 0
  local.get $3
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#constructor
  local.set $4
  local.get $5
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $4
  i32.store offset=4
  local.get $3
  i32.load offset=4
  local.get $1
  i32.const 0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callPromise>#deserialize
  local.get $3
  i32.load offset=12
  call $assembly/hello/main/callPromise
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__near_ArgsParser_callbackWithName#constructor (; 509 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 16
   i32.const 55
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store8 offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#constructor (; 510 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 56
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#peekChar (; 511 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.ge_s
  if
   i32.const -1
   return
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  i32.load offset=4
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#isWhitespace (; 512 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 9
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 10
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 13
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 32
   i32.eq
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readChar (; 513 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.lt_s
  i32.eqz
  if
   i32.const 784
   i32.const 840
   i32.const 112
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.tee $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $1
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#skipWhitespace (; 514 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#peekChar
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#isWhitespace
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readChar
    drop
    br $continue|0
   end
   unreachable
  end
 )
 (func $assembly/hello/main/__near_ArgsParser_callbackWithName#pushObject (; 515 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load8_u offset=8
  i32.const 0
  i32.ne
  i32.eqz
  if
   local.get $1
   i32.const 0
   call $~lib/string/String.__eq
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.eq
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 853
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.const 1
   i32.store8 offset=8
   i32.const 1
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  else   
   local.get $1
   i32.const 0
   call $~lib/string/String.__ne
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.ne
   end
   i32.eqz
   if
    i32.const 0
    i32.const 952
    i32.const 857
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $1
  i32.const 4000
  call $~lib/string/String.__eq
  if
   local.get $0
   local.tee $2
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load offset=4
   call $~lib/nearEntry/decode<assembly/hello/model/PromiseArgs>
   local.set $3
   local.get $2
   i32.load offset=12
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=12
   i32.const 0
   local.set $3
   local.get $1
   call $~lib/rt/stub/__release
   local.get $3
   return
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushObject
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readHexDigit (; 516 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readChar
  local.set $1
  local.get $1
  global.get $~lib/assemblyscript-json/decoder/CHAR_0
  i32.sub
  local.set $2
  local.get $2
  i32.const 9
  i32.gt_s
  if
   local.get $1
   global.get $~lib/assemblyscript-json/decoder/CHAR_A
   i32.sub
   i32.const 10
   i32.add
   local.set $2
   local.get $2
   i32.const 10
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $2
    i32.const 15
    i32.gt_s
   end
   if
    local.get $1
    global.get $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
    i32.sub
    i32.const 10
    i32.add
    local.set $2
   end
  end
  i32.const 2
  i32.const 2
  i32.const 13
  i32.const 0
  call $~lib/rt/__allocArray
  local.set $3
  local.get $3
  i32.load offset=4
  local.set $4
  local.get $4
  local.get $1
  i32.store
  local.get $4
  local.get $2
  i32.store offset=4
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $2
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $2
   i32.const 16
   i32.lt_s
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1864
   i32.const 840
   i32.const 269
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readEscapedChar (; 517 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readChar
  local.set $1
  local.get $1
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1168
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1600
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1600
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1624
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1624
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1648
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1672
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1696
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1720
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1744
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1768
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1792
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1840
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readHexDigit
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readHexDigit
   local.set $3
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readHexDigit
   local.set $4
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readHexDigit
   local.set $5
   local.get $2
   i32.const 4096
   i32.mul
   local.get $3
   i32.const 256
   i32.mul
   i32.add
   local.get $4
   i32.const 16
   i32.mul
   i32.add
   local.get $5
   i32.add
   local.set $6
   local.get $6
   call $~lib/string/String.fromCodePoint
   return
  end
  i32.const 0
  i32.eqz
  if
   i32.const 1920
   i32.const 1
   global.set $~lib/argc
   local.get $1
   i32.const 0
   call $~lib/string/String.fromCharCode|trampoline
   local.tee $6
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 840
   i32.const 255
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 656
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $6
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readString (; 518 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1192
   i32.const 840
   i32.const 197
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.set $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $2
  loop $loop|0
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readChar
   local.set $3
   local.get $3
   i32.const 32
   i32.ge_s
   i32.eqz
   if
    i32.const 1432
    i32.const 840
    i32.const 203
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 1168
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   if
    i32.const 1
    global.set $~lib/argc
    local.get $0
    i32.load offset=4
    local.get $1
    i32.const 0
    call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
    local.set $4
    local.get $2
    call $~lib/array/Array<~lib/string/String>#get:length
    i32.const 0
    i32.eq
    if
     local.get $4
     local.set $5
     local.get $2
     call $~lib/rt/stub/__release
     local.get $5
     return
    end
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#push
    drop
    local.get $2
    i32.const 656
    call $~lib/array/Array<~lib/string/String>#join
    local.set $5
    local.get $4
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $5
    return
   else    
    local.get $3
    i32.const 1600
    i32.const 0
    call $~lib/string/String#charCodeAt
    i32.eq
    if
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.get $1
     i32.const 1
     i32.add
     i32.gt_s
     if
      local.get $2
      i32.const 1
      global.set $~lib/argc
      local.get $0
      i32.load offset=4
      local.get $1
      i32.const 0
      call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
      local.tee $4
      call $~lib/array/Array<~lib/string/String>#push
      drop
      local.get $4
      call $~lib/rt/stub/__release
     end
     local.get $2
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readEscapedChar
     local.tee $4
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
   end
   br $loop|0
  end
  unreachable
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#parseKey (; 519 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#skipWhitespace
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readString
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readChar
  i32.const 2000
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 2024
   i32.const 840
   i32.const 159
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#parseObject (; 520 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#peekChar
  i32.const 928
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_callbackWithName#pushObject
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#peekChar
     i32.const 1080
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 142
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#parseKey
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readChar
   i32.const 1080
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2064
    i32.const 840
    i32.const 149
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popObject
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__near_ArgsParser_callbackWithName#pushArray (; 521 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushArray
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#parseArray (; 522 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#peekChar
  i32.const 2128
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/main/__near_ArgsParser_callbackWithName#pushArray
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#peekChar
     i32.const 2216
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 176
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readChar
   i32.const 2216
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2240
    i32.const 840
    i32.const 182
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popArray
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#parseString (; 523 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#peekChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.load
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readString
  local.tee $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setString
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readAndAssert (; 524 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $2
    call $~lib/string/String#charCodeAt
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readChar
    i32.eq
    i32.eqz
    if
     i32.const 2416
     local.get $1
     call $~lib/string/String.__concat
     local.tee $3
     i32.const 2456
     call $~lib/string/String.__concat
     local.tee $4
     i32.const 840
     i32.const 321
     i32.const 6
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#parseBoolean (; 525 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#peekChar
  i32.const 184
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/FALSE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 0
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#peekChar
  i32.const 160
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/TRUE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 1
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#parseNumber (; 526 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  local.set $1
  i64.const 1
  local.set $2
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#peekChar
  i32.const 2568
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i64.const -1
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readChar
   drop
  end
  i32.const 0
  local.set $3
  block $break|0
   loop $continue|0
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#peekChar
    i32.le_s
    if (result i32)
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#peekChar
     global.get $~lib/assemblyscript-json/decoder/CHAR_9
     i32.le_s
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readChar
    local.set $4
    local.get $1
    i64.const 10
    i64.mul
    local.set $1
    local.get $1
    local.get $4
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    i32.sub
    i64.extend_i32_s
    i64.add
    local.set $1
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $continue|0
   end
   unreachable
  end
  local.get $3
  i32.const 0
  i32.gt_s
  if
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   local.get $1
   local.get $2
   i64.mul
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setInteger
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/main/__near_ArgsParser_callbackWithName#setNull (; 527 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 4000
  call $~lib/string/String.__eq
  if
   local.get $0
   local.tee $2
   i32.const 0
   local.tee $3
   local.get $2
   i32.load offset=12
   local.tee $2
   i32.ne
   if
    local.get $3
    call $~lib/rt/stub/__retain
    drop
    local.get $2
    call $~lib/rt/stub/__release
   end
   local.get $3
   i32.store offset=12
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setNull
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#parseNull (; 528 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#peekChar
  i32.const 216
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/NULL_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   call $assembly/hello/main/__near_ArgsParser_callbackWithName#setNull
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#parseValue (; 529 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#parseObject
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#parseArray
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#parseString
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#parseBoolean
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#parseNumber
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#parseNull
  end
  local.set $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#skipWhitespace
  local.get $1
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#deserialize (; 530 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  i32.const 0
  i32.ne
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
  else   
   local.get $0
   local.tee $4
   i32.const 0
   local.get $1
   call $~lib/assemblyscript-json/decoder/DecoderState#constructor
   local.set $3
   local.get $4
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#parseValue
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3176
   i32.const 840
   i32.const 100
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/array/Array.create<~lib/near-runtime-ts/contract/ContractPromiseResult> (; 531 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 268435452
  i32.gt_u
  if
   i32.const 552
   i32.const 1384
   i32.const 45
   i32.const 61
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 2
  i32.const 61
  i32.const 0
  call $~lib/rt/__allocArray
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $1
  i32.const 0
  i32.store offset=12
  local.get $1
  i32.load offset=4
  i32.const 0
  local.get $1
  i32.load offset=8
  call $~lib/memory/memory.fill
  local.get $1
 )
 (func $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__unchecked_set (; 532 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.set $3
  local.get $3
  i32.load
  local.set $4
  local.get $2
  local.get $4
  i32.ne
  if
   local.get $3
   local.get $2
   call $~lib/rt/stub/__retain
   i32.store
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__set (; 533 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=12
  local.set $3
  local.get $1
  local.get $3
  i32.gt_u
  if
   local.get $2
   call $~lib/rt/stub/__release
   i32.const 1272
   i32.const 1384
   i32.const 121
   i32.const 38
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.const 1
  i32.add
  i32.const 2
  call $~lib/array/ensureSize
  local.get $0
  local.get $1
  local.get $2
  call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__unchecked_set
  local.get $1
  local.get $3
  i32.ge_s
  if
   local.get $0
   local.get $1
   i32.const 1
   i32.add
   i32.store offset=12
  end
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/near-runtime-ts/contract/ContractPromise.getResults (; 534 ;) (type $FUNCSIG$i) (result i32)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  call $~lib/near-runtime-ts/runtime_api/runtime_api.promise_results_count
  local.set $0
  local.get $0
  i32.wrap_i64
  call $~lib/array/Array.create<~lib/near-runtime-ts/contract/ContractPromiseResult>
  local.set $1
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    i64.extend_i32_s
    local.get $0
    i64.lt_s
    i32.eqz
    br_if $break|0
    block $continue|0
     local.get $2
     i64.extend_i32_s
     i64.const 0
     call $~lib/near-runtime-ts/runtime_api/runtime_api.promise_result
     i32.wrap_i64
     local.set $3
     local.get $3
     i32.const 1
     i32.eq
     local.set $4
     local.get $4
     i32.eqz
     if
      local.get $1
      local.get $2
      i32.const 8
      i32.const 60
      call $~lib/rt/stub/__alloc
      call $~lib/rt/stub/__retain
      local.set $5
      local.get $5
      local.get $3
      i32.store
      local.get $5
      call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__set
      local.get $5
      call $~lib/rt/stub/__release
      br $continue|0
     end
     i32.const 0
     i64.const 0
     call $~lib/near-runtime-ts/runtime_api/runtime_api.register_len
     i32.wrap_i64
     call $~lib/typedarray/Uint8Array#constructor
     local.set $5
     i64.const 0
     local.get $5
     i32.load offset=4
     i64.extend_i32_u
     call $~lib/near-runtime-ts/runtime_api/runtime_api.read_register
     local.get $1
     local.get $2
     i32.const 8
     i32.const 60
     call $~lib/rt/stub/__alloc
     call $~lib/rt/stub/__retain
     local.set $6
     local.get $6
     local.get $3
     i32.store
     local.get $6
     local.get $5
     i32.store offset=4
     local.get $6
     call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__set
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $5
    call $~lib/rt/stub/__release
    local.get $6
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
 )
 (func $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#get:length (; 535 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array.create<assembly/hello/model/MyContractPromiseResult> (; 536 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 268435452
  i32.gt_u
  if
   i32.const 552
   i32.const 1384
   i32.const 45
   i32.const 61
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 2
  i32.const 59
  i32.const 0
  call $~lib/rt/__allocArray
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $1
  i32.const 0
  i32.store offset=12
  local.get $1
  i32.load offset=4
  i32.const 0
  local.get $1
  i32.load offset=8
  call $~lib/memory/memory.fill
  local.get $1
 )
 (func $assembly/hello/model/MyContractPromiseResult#constructor (; 537 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 58
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store8
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
 )
 (func $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__unchecked_set (; 538 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.set $3
  local.get $3
  i32.load
  local.set $4
  local.get $2
  local.get $4
  i32.ne
  if
   local.get $3
   local.get $2
   call $~lib/rt/stub/__retain
   i32.store
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__set (; 539 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=12
  local.set $3
  local.get $1
  local.get $3
  i32.gt_u
  if
   local.get $2
   call $~lib/rt/stub/__release
   i32.const 1272
   i32.const 1384
   i32.const 121
   i32.const 38
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.const 1
  i32.add
  i32.const 2
  call $~lib/array/ensureSize
  local.get $0
  local.get $1
  local.get $2
  call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__unchecked_set
  local.get $1
  local.get $3
  i32.ge_s
  if
   local.get $0
   local.get $1
   i32.const 1
   i32.add
   i32.store offset=12
  end
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__unchecked_get (; 540 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  call $~lib/rt/stub/__retain
 )
 (func $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__get (; 541 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 1272
   i32.const 1384
   i32.const 106
   i32.const 45
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $0
  i32.load offset=8
  i32.const 2
  i32.shr_u
  i32.ge_u
  if
   i32.const 672
   i32.const 1384
   i32.const 109
   i32.const 61
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__unchecked_get
 )
 (func $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__unchecked_get (; 542 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  call $~lib/rt/stub/__retain
 )
 (func $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__get (; 543 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 1272
   i32.const 1384
   i32.const 106
   i32.const 45
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $0
  i32.load offset=8
  i32.const 2
  i32.shr_u
  i32.ge_u
  if
   i32.const 672
   i32.const 1384
   i32.const 109
   i32.const 61
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__unchecked_get
 )
 (func $assembly/hello/model/MyCallbackResult#constructor (; 544 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 57
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
 )
 (func $assembly/hello/model/__near_JSONHandler_MyCallbackResult#constructor (; 545 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 16
   i32.const 62
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store8 offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load offset=12
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store offset=12
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#constructor (; 546 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 63
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#peekChar (; 547 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.ge_s
  if
   i32.const -1
   return
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  i32.load offset=4
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#isWhitespace (; 548 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 9
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 10
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 13
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 32
   i32.eq
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readChar (; 549 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.lt_s
  i32.eqz
  if
   i32.const 784
   i32.const 840
   i32.const 112
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.tee $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $1
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#skipWhitespace (; 550 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#peekChar
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#isWhitespace
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readChar
    drop
    br $continue|0
   end
   unreachable
  end
 )
 (func $assembly/hello/model/__near_JSONHandler_MyCallbackResult#pushObject (; 551 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load8_u offset=8
  i32.const 0
  i32.ne
  i32.eqz
  if
   local.get $1
   i32.const 0
   call $~lib/string/String.__eq
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.eq
   end
   i32.eqz
   if
    i32.const 0
    i32.const 4024
    i32.const 225
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.const 1
   i32.store8 offset=8
   i32.const 1
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  else   
   local.get $1
   i32.const 0
   call $~lib/string/String.__ne
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.ne
   end
   i32.eqz
   if
    i32.const 0
    i32.const 4024
    i32.const 229
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushObject
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readHexDigit (; 552 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readChar
  local.set $1
  local.get $1
  global.get $~lib/assemblyscript-json/decoder/CHAR_0
  i32.sub
  local.set $2
  local.get $2
  i32.const 9
  i32.gt_s
  if
   local.get $1
   global.get $~lib/assemblyscript-json/decoder/CHAR_A
   i32.sub
   i32.const 10
   i32.add
   local.set $2
   local.get $2
   i32.const 10
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $2
    i32.const 15
    i32.gt_s
   end
   if
    local.get $1
    global.get $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
    i32.sub
    i32.const 10
    i32.add
    local.set $2
   end
  end
  i32.const 2
  i32.const 2
  i32.const 13
  i32.const 0
  call $~lib/rt/__allocArray
  local.set $3
  local.get $3
  i32.load offset=4
  local.set $4
  local.get $4
  local.get $1
  i32.store
  local.get $4
  local.get $2
  i32.store offset=4
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $2
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $2
   i32.const 16
   i32.lt_s
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1864
   i32.const 840
   i32.const 269
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readEscapedChar (; 553 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readChar
  local.set $1
  local.get $1
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1168
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1600
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1600
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1624
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1624
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1648
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1672
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1696
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1720
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1744
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1768
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1792
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1840
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readHexDigit
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readHexDigit
   local.set $3
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readHexDigit
   local.set $4
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readHexDigit
   local.set $5
   local.get $2
   i32.const 4096
   i32.mul
   local.get $3
   i32.const 256
   i32.mul
   i32.add
   local.get $4
   i32.const 16
   i32.mul
   i32.add
   local.get $5
   i32.add
   local.set $6
   local.get $6
   call $~lib/string/String.fromCodePoint
   return
  end
  i32.const 0
  i32.eqz
  if
   i32.const 1920
   i32.const 1
   global.set $~lib/argc
   local.get $1
   i32.const 0
   call $~lib/string/String.fromCharCode|trampoline
   local.tee $6
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 840
   i32.const 255
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 656
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $6
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readString (; 554 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1192
   i32.const 840
   i32.const 197
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.set $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $2
  loop $loop|0
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readChar
   local.set $3
   local.get $3
   i32.const 32
   i32.ge_s
   i32.eqz
   if
    i32.const 1432
    i32.const 840
    i32.const 203
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 1168
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   if
    i32.const 1
    global.set $~lib/argc
    local.get $0
    i32.load offset=4
    local.get $1
    i32.const 0
    call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
    local.set $4
    local.get $2
    call $~lib/array/Array<~lib/string/String>#get:length
    i32.const 0
    i32.eq
    if
     local.get $4
     local.set $5
     local.get $2
     call $~lib/rt/stub/__release
     local.get $5
     return
    end
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#push
    drop
    local.get $2
    i32.const 656
    call $~lib/array/Array<~lib/string/String>#join
    local.set $5
    local.get $4
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $5
    return
   else    
    local.get $3
    i32.const 1600
    i32.const 0
    call $~lib/string/String#charCodeAt
    i32.eq
    if
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.get $1
     i32.const 1
     i32.add
     i32.gt_s
     if
      local.get $2
      i32.const 1
      global.set $~lib/argc
      local.get $0
      i32.load offset=4
      local.get $1
      i32.const 0
      call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
      local.tee $4
      call $~lib/array/Array<~lib/string/String>#push
      drop
      local.get $4
      call $~lib/rt/stub/__release
     end
     local.get $2
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readEscapedChar
     local.tee $4
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
   end
   br $loop|0
  end
  unreachable
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#parseKey (; 555 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#skipWhitespace
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readString
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readChar
  i32.const 2000
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 2024
   i32.const 840
   i32.const 159
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#parseObject (; 556 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#peekChar
  i32.const 928
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/model/__near_JSONHandler_MyCallbackResult#pushObject
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#peekChar
     i32.const 1080
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 142
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#parseKey
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readChar
   i32.const 1080
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2064
    i32.const 840
    i32.const 149
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popObject
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#constructor (; 557 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 16
   i32.const 59
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  local.get $1
  i32.const 2
  call $~lib/arraybuffer/ArrayBufferView#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $1
  if
   i32.const 1272
   i32.const 1384
   i32.const 56
   i32.const 20
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.store offset=12
  local.get $0
 )
 (func $~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>#constructor (; 558 ;) (type $FUNCSIG$iiiii) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $3
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 16
   i32.const 64
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 1
  i32.store8
  local.get $0
  i32.const 0
  i32.store8 offset=1
  local.get $0
  local.get $1
  call $~lib/rt/stub/__retain
  i32.store offset=4
  local.get $0
  local.get $2
  call $~lib/rt/stub/__retain
  i32.store offset=8
  local.get $0
  local.get $3
  call $~lib/rt/stub/__retain
  i32.store offset=12
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#constructor (; 559 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 65
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#peekChar (; 560 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.ge_s
  if
   i32.const -1
   return
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  i32.load offset=4
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#isWhitespace (; 561 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 9
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 10
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 13
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 32
   i32.eq
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readChar (; 562 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.lt_s
  i32.eqz
  if
   i32.const 784
   i32.const 840
   i32.const 112
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.tee $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $1
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#skipWhitespace (; 563 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#peekChar
    call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#isWhitespace
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readChar
    drop
    br $continue|0
   end
   unreachable
  end
 )
 (func $assembly/hello/model/__near_JSONHandler_MyContractPromiseResult#constructor (; 564 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 16
   i32.const 66
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store8 offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load offset=12
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store offset=12
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#constructor (; 565 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 67
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#peekChar (; 566 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.ge_s
  if
   i32.const -1
   return
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  i32.load offset=4
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#isWhitespace (; 567 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 9
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 10
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 13
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 32
   i32.eq
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readChar (; 568 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.lt_s
  i32.eqz
  if
   i32.const 784
   i32.const 840
   i32.const 112
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.tee $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $1
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#skipWhitespace (; 569 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#peekChar
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#isWhitespace
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readChar
    drop
    br $continue|0
   end
   unreachable
  end
 )
 (func $~lib/nearEntry/decode<assembly/hello/model/MyCallbackResult> (; 570 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  local.set $2
  i32.const 0
  call $assembly/hello/model/MyCallbackResult#constructor
  local.tee $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $4
  local.get $0
  local.get $1
  call $assembly/hello/model/MyCallbackResult#decode
  local.set $5
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $5
  return
 )
 (func $assembly/hello/model/__near_JSONHandler_MyContractPromiseResult#pushObject (; 571 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load8_u offset=8
  i32.const 0
  i32.ne
  i32.eqz
  if
   local.get $1
   i32.const 0
   call $~lib/string/String.__eq
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.eq
   end
   i32.eqz
   if
    i32.const 0
    i32.const 4024
    i32.const 172
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.const 1
   i32.store8 offset=8
   i32.const 1
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  else   
   local.get $1
   i32.const 0
   call $~lib/string/String.__ne
   if (result i32)
    i32.const 1
   else    
    local.get $1
    call $~lib/string/String#get:length
    i32.const 0
    i32.ne
   end
   i32.eqz
   if
    i32.const 0
    i32.const 4024
    i32.const 176
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $1
  i32.const 1744
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.tee $2
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load offset=4
   call $~lib/nearEntry/decode<assembly/hello/model/MyCallbackResult>
   local.set $3
   local.get $2
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
   i32.const 0
   local.set $3
   local.get $1
   call $~lib/rt/stub/__release
   local.get $3
   return
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushObject
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readHexDigit (; 572 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readChar
  local.set $1
  local.get $1
  global.get $~lib/assemblyscript-json/decoder/CHAR_0
  i32.sub
  local.set $2
  local.get $2
  i32.const 9
  i32.gt_s
  if
   local.get $1
   global.get $~lib/assemblyscript-json/decoder/CHAR_A
   i32.sub
   i32.const 10
   i32.add
   local.set $2
   local.get $2
   i32.const 10
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $2
    i32.const 15
    i32.gt_s
   end
   if
    local.get $1
    global.get $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
    i32.sub
    i32.const 10
    i32.add
    local.set $2
   end
  end
  i32.const 2
  i32.const 2
  i32.const 13
  i32.const 0
  call $~lib/rt/__allocArray
  local.set $3
  local.get $3
  i32.load offset=4
  local.set $4
  local.get $4
  local.get $1
  i32.store
  local.get $4
  local.get $2
  i32.store offset=4
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $2
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $2
   i32.const 16
   i32.lt_s
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1864
   i32.const 840
   i32.const 269
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readEscapedChar (; 573 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readChar
  local.set $1
  local.get $1
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1168
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1600
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1600
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1624
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1624
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1648
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1672
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1696
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1720
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1744
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1768
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1792
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1840
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readHexDigit
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readHexDigit
   local.set $3
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readHexDigit
   local.set $4
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readHexDigit
   local.set $5
   local.get $2
   i32.const 4096
   i32.mul
   local.get $3
   i32.const 256
   i32.mul
   i32.add
   local.get $4
   i32.const 16
   i32.mul
   i32.add
   local.get $5
   i32.add
   local.set $6
   local.get $6
   call $~lib/string/String.fromCodePoint
   return
  end
  i32.const 0
  i32.eqz
  if
   i32.const 1920
   i32.const 1
   global.set $~lib/argc
   local.get $1
   i32.const 0
   call $~lib/string/String.fromCharCode|trampoline
   local.tee $6
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 840
   i32.const 255
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 656
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $6
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readString (; 574 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1192
   i32.const 840
   i32.const 197
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.set $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $2
  loop $loop|0
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readChar
   local.set $3
   local.get $3
   i32.const 32
   i32.ge_s
   i32.eqz
   if
    i32.const 1432
    i32.const 840
    i32.const 203
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 1168
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   if
    i32.const 1
    global.set $~lib/argc
    local.get $0
    i32.load offset=4
    local.get $1
    i32.const 0
    call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
    local.set $4
    local.get $2
    call $~lib/array/Array<~lib/string/String>#get:length
    i32.const 0
    i32.eq
    if
     local.get $4
     local.set $5
     local.get $2
     call $~lib/rt/stub/__release
     local.get $5
     return
    end
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#push
    drop
    local.get $2
    i32.const 656
    call $~lib/array/Array<~lib/string/String>#join
    local.set $5
    local.get $4
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $5
    return
   else    
    local.get $3
    i32.const 1600
    i32.const 0
    call $~lib/string/String#charCodeAt
    i32.eq
    if
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.get $1
     i32.const 1
     i32.add
     i32.gt_s
     if
      local.get $2
      i32.const 1
      global.set $~lib/argc
      local.get $0
      i32.load offset=4
      local.get $1
      i32.const 0
      call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
      local.tee $4
      call $~lib/array/Array<~lib/string/String>#push
      drop
      local.get $4
      call $~lib/rt/stub/__release
     end
     local.get $2
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readEscapedChar
     local.tee $4
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
   end
   br $loop|0
  end
  unreachable
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#parseKey (; 575 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#skipWhitespace
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readString
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readChar
  i32.const 2000
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 2024
   i32.const 840
   i32.const 159
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#parseObject (; 576 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#peekChar
  i32.const 928
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/model/__near_JSONHandler_MyContractPromiseResult#pushObject
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#peekChar
     i32.const 1080
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 142
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#parseKey
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readChar
   i32.const 1080
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2064
    i32.const 840
    i32.const 149
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popObject
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/model/__near_JSONHandler_MyContractPromiseResult#pushArray (; 577 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushArray
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#parseArray (; 578 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#peekChar
  i32.const 2128
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/model/__near_JSONHandler_MyContractPromiseResult#pushArray
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#peekChar
     i32.const 2216
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 176
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readChar
   i32.const 2216
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2240
    i32.const 840
    i32.const 182
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popArray
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#parseString (; 579 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#peekChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.load
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readString
  local.tee $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setString
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readAndAssert (; 580 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $2
    call $~lib/string/String#charCodeAt
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readChar
    i32.eq
    i32.eqz
    if
     i32.const 2416
     local.get $1
     call $~lib/string/String.__concat
     local.tee $3
     i32.const 2456
     call $~lib/string/String.__concat
     local.tee $4
     i32.const 840
     i32.const 321
     i32.const 6
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/model/__near_JSONHandler_MyContractPromiseResult#setBoolean (; 581 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 4400
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.get $2
   i32.store8
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#parseBoolean (; 582 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#peekChar
  i32.const 184
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/FALSE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 0
   call $assembly/hello/model/__near_JSONHandler_MyContractPromiseResult#setBoolean
   i32.const 1
   return
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#peekChar
  i32.const 160
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/TRUE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 1
   call $assembly/hello/model/__near_JSONHandler_MyContractPromiseResult#setBoolean
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#parseNumber (; 583 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  local.set $1
  i64.const 1
  local.set $2
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#peekChar
  i32.const 2568
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i64.const -1
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readChar
   drop
  end
  i32.const 0
  local.set $3
  block $break|0
   loop $continue|0
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#peekChar
    i32.le_s
    if (result i32)
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#peekChar
     global.get $~lib/assemblyscript-json/decoder/CHAR_9
     i32.le_s
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readChar
    local.set $4
    local.get $1
    i64.const 10
    i64.mul
    local.set $1
    local.get $1
    local.get $4
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    i32.sub
    i64.extend_i32_s
    i64.add
    local.set $1
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $continue|0
   end
   unreachable
  end
  local.get $3
  i32.const 0
  i32.gt_s
  if
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   local.get $1
   local.get $2
   i64.mul
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setInteger
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/model/__near_JSONHandler_MyContractPromiseResult#setNull (; 584 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 1744
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.tee $2
   i32.const 0
   local.tee $3
   local.get $2
   i32.load offset=4
   local.tee $2
   i32.ne
   if
    local.get $3
    call $~lib/rt/stub/__retain
    drop
    local.get $2
    call $~lib/rt/stub/__release
   end
   local.get $3
   i32.store offset=4
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setNull
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#parseNull (; 585 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#peekChar
  i32.const 216
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/NULL_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   call $assembly/hello/model/__near_JSONHandler_MyContractPromiseResult#setNull
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#parseValue (; 586 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#parseObject
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#parseArray
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#parseString
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#parseBoolean
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#parseNumber
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#parseNull
  end
  local.set $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#skipWhitespace
  local.get $1
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#deserialize (; 587 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  i32.const 0
  i32.ne
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
  else   
   local.get $0
   local.tee $4
   i32.const 0
   local.get $1
   call $~lib/assemblyscript-json/decoder/DecoderState#constructor
   local.set $3
   local.get $4
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#parseValue
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3176
   i32.const 840
   i32.const 100
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/model/MyContractPromiseResult#decode (; 588 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  local.get $0
  call $assembly/hello/model/__near_JSONHandler_MyContractPromiseResult#constructor
  local.set $3
  local.get $3
  local.tee $4
  local.get $1
  local.tee $5
  local.get $4
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $5
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $5
  i32.store
  i32.const 0
  local.get $3
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#constructor
  local.set $5
  local.get $3
  local.tee $4
  local.get $5
  local.tee $6
  local.get $4
  i32.load offset=4
  local.tee $4
  i32.ne
  if
   local.get $6
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $6
  i32.store offset=4
  local.get $5
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyContractPromiseResult>#deserialize
  local.get $0
  call $~lib/rt/stub/__retain
  local.set $6
  local.get $3
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $6
 )
 (func $~lib/nearEntry/decode<assembly/hello/model/MyContractPromiseResult> (; 589 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  local.set $2
  i32.const 0
  call $assembly/hello/model/MyContractPromiseResult#constructor
  local.tee $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $4
  local.get $0
  local.get $1
  call $assembly/hello/model/MyContractPromiseResult#decode
  local.set $5
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $5
  return
 )
 (func $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#push (; 590 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 2
  call $~lib/array/ensureSize
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  call $~lib/rt/stub/__retain
  i32.store
  local.get $0
  local.get $3
  i32.store offset=12
  local.get $3
  local.set $4
  local.get $1
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>#pushObject (; 591 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=8
  call $~lib/rt/stub/__retain
  local.set $2
  local.get $0
  i32.load offset=12
  call $~lib/rt/stub/__retain
  local.set $3
  local.get $2
  local.get $3
  call $~lib/nearEntry/decode<assembly/hello/model/MyContractPromiseResult>
  local.set $4
  local.get $0
  i32.load offset=4
  local.get $4
  call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#push
  drop
  i32.const 0
  local.set $5
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $5
  return
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readHexDigit (; 592 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readChar
  local.set $1
  local.get $1
  global.get $~lib/assemblyscript-json/decoder/CHAR_0
  i32.sub
  local.set $2
  local.get $2
  i32.const 9
  i32.gt_s
  if
   local.get $1
   global.get $~lib/assemblyscript-json/decoder/CHAR_A
   i32.sub
   i32.const 10
   i32.add
   local.set $2
   local.get $2
   i32.const 10
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $2
    i32.const 15
    i32.gt_s
   end
   if
    local.get $1
    global.get $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
    i32.sub
    i32.const 10
    i32.add
    local.set $2
   end
  end
  i32.const 2
  i32.const 2
  i32.const 13
  i32.const 0
  call $~lib/rt/__allocArray
  local.set $3
  local.get $3
  i32.load offset=4
  local.set $4
  local.get $4
  local.get $1
  i32.store
  local.get $4
  local.get $2
  i32.store offset=4
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $2
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $2
   i32.const 16
   i32.lt_s
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1864
   i32.const 840
   i32.const 269
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readEscapedChar (; 593 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readChar
  local.set $1
  local.get $1
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1168
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1600
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1600
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1624
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1624
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1648
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1672
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1696
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1720
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1744
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1768
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1792
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1840
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readHexDigit
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readHexDigit
   local.set $3
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readHexDigit
   local.set $4
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readHexDigit
   local.set $5
   local.get $2
   i32.const 4096
   i32.mul
   local.get $3
   i32.const 256
   i32.mul
   i32.add
   local.get $4
   i32.const 16
   i32.mul
   i32.add
   local.get $5
   i32.add
   local.set $6
   local.get $6
   call $~lib/string/String.fromCodePoint
   return
  end
  i32.const 0
  i32.eqz
  if
   i32.const 1920
   i32.const 1
   global.set $~lib/argc
   local.get $1
   i32.const 0
   call $~lib/string/String.fromCharCode|trampoline
   local.tee $6
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 840
   i32.const 255
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 656
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $6
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readString (; 594 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1192
   i32.const 840
   i32.const 197
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.set $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $2
  loop $loop|0
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readChar
   local.set $3
   local.get $3
   i32.const 32
   i32.ge_s
   i32.eqz
   if
    i32.const 1432
    i32.const 840
    i32.const 203
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 1168
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   if
    i32.const 1
    global.set $~lib/argc
    local.get $0
    i32.load offset=4
    local.get $1
    i32.const 0
    call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
    local.set $4
    local.get $2
    call $~lib/array/Array<~lib/string/String>#get:length
    i32.const 0
    i32.eq
    if
     local.get $4
     local.set $5
     local.get $2
     call $~lib/rt/stub/__release
     local.get $5
     return
    end
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#push
    drop
    local.get $2
    i32.const 656
    call $~lib/array/Array<~lib/string/String>#join
    local.set $5
    local.get $4
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $5
    return
   else    
    local.get $3
    i32.const 1600
    i32.const 0
    call $~lib/string/String#charCodeAt
    i32.eq
    if
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.get $1
     i32.const 1
     i32.add
     i32.gt_s
     if
      local.get $2
      i32.const 1
      global.set $~lib/argc
      local.get $0
      i32.load offset=4
      local.get $1
      i32.const 0
      call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
      local.tee $4
      call $~lib/array/Array<~lib/string/String>#push
      drop
      local.get $4
      call $~lib/rt/stub/__release
     end
     local.get $2
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readEscapedChar
     local.tee $4
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
   end
   br $loop|0
  end
  unreachable
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#parseKey (; 595 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#skipWhitespace
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readString
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readChar
  i32.const 2000
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 2024
   i32.const 840
   i32.const 159
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#parseObject (; 596 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#peekChar
  i32.const 928
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>#pushObject
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#peekChar
     i32.const 1080
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 142
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#parseKey
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readChar
   i32.const 1080
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2064
    i32.const 840
    i32.const 149
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popObject
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>#pushArray (; 597 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load8_u
  if
   local.get $0
   i32.const 0
   i32.store8
   i32.const 1
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  end
  local.get $1
  i32.const 0
  call $~lib/string/String.__eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   call $~lib/string/String#get:length
   i32.const 0
   i32.eq
  end
  i32.eqz
  if
   i32.const 4424
   i32.const 4480
   i32.const 276
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushArray
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#parseArray (; 598 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#peekChar
  i32.const 2128
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>#pushArray
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#peekChar
     i32.const 2216
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 176
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readChar
   i32.const 2216
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2240
    i32.const 840
    i32.const 182
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popArray
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>#setString (; 599 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  local.set $3
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setString
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#parseString (; 600 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#peekChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.load
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readString
  local.tee $1
  call $~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>#setString
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readAndAssert (; 601 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $2
    call $~lib/string/String#charCodeAt
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readChar
    i32.eq
    i32.eqz
    if
     i32.const 2416
     local.get $1
     call $~lib/string/String.__concat
     local.tee $3
     i32.const 2456
     call $~lib/string/String.__concat
     local.tee $4
     i32.const 840
     i32.const 321
     i32.const 6
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>#setBoolean (; 602 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#parseBoolean (; 603 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#peekChar
  i32.const 184
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/FALSE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 0
   call $~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>#setBoolean
   i32.const 1
   return
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#peekChar
  i32.const 160
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/TRUE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 1
   call $~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>#setBoolean
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>#setInteger (; 604 ;) (type $FUNCSIG$viij) (param $0 i32) (param $1 i32) (param $2 i64)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setInteger
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#parseNumber (; 605 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  local.set $1
  i64.const 1
  local.set $2
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#peekChar
  i32.const 2568
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i64.const -1
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readChar
   drop
  end
  i32.const 0
  local.set $3
  block $break|0
   loop $continue|0
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#peekChar
    i32.le_s
    if (result i32)
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#peekChar
     global.get $~lib/assemblyscript-json/decoder/CHAR_9
     i32.le_s
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readChar
    local.set $4
    local.get $1
    i64.const 10
    i64.mul
    local.set $1
    local.get $1
    local.get $4
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    i32.sub
    i64.extend_i32_s
    i64.add
    local.set $1
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $continue|0
   end
   unreachable
  end
  local.get $3
  i32.const 0
  i32.gt_s
  if
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   local.get $1
   local.get $2
   i64.mul
   call $~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>#setInteger
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>#setNull (; 606 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setNull
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#parseNull (; 607 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#peekChar
  i32.const 216
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/NULL_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   call $~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>#setNull
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#parseValue (; 608 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#parseObject
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#parseArray
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#parseString
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#parseBoolean
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#parseNumber
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#parseNull
  end
  local.set $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#skipWhitespace
  local.get $1
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#deserialize (; 609 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  i32.const 0
  i32.ne
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
  else   
   local.get $0
   local.tee $4
   i32.const 0
   local.get $1
   call $~lib/assemblyscript-json/decoder/DecoderState#constructor
   local.set $3
   local.get $4
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#parseValue
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3176
   i32.const 840
   i32.const 100
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/nearEntry/ArrayHandler.decode<~lib/array/Array<assembly/hello/model/MyContractPromiseResult>> (; 610 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  i32.const 0
  call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#constructor
  local.tee $2
  call $~lib/rt/stub/__retain
  local.set $3
  i32.const 0
  local.get $3
  local.get $0
  local.get $1
  call $~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>#constructor
  local.set $4
  i32.const 0
  local.get $4
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#constructor
  local.set $5
  local.get $5
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/ArrayHandler<assembly/hello/model/MyContractPromiseResult>>#deserialize
  local.get $3
  local.set $6
  local.get $2
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $6
 )
 (func $~lib/nearEntry/decode<~lib/array/Array<assembly/hello/model/MyContractPromiseResult>> (; 611 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  local.set $2
  local.get $0
  local.get $1
  call $~lib/nearEntry/ArrayHandler.decode<~lib/array/Array<assembly/hello/model/MyContractPromiseResult>>
  local.set $3
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  return
 )
 (func $assembly/hello/model/__near_JSONHandler_MyCallbackResult#pushArray (; 612 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 4376
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.tee $2
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load offset=4
   call $~lib/nearEntry/decode<~lib/array/Array<assembly/hello/model/MyContractPromiseResult>>
   local.set $3
   local.get $2
   i32.load
   call $~lib/rt/stub/__release
   local.get $3
   i32.store
   i32.const 0
   local.set $3
   local.get $1
   call $~lib/rt/stub/__release
   local.get $3
   return
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#pushArray
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#parseArray (; 613 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#peekChar
  i32.const 2128
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 656
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $assembly/hello/model/__near_JSONHandler_MyCallbackResult#pushArray
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#peekChar
     i32.const 2216
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readChar
      i32.const 1104
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1128
       i32.const 840
       i32.const 176
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readChar
   i32.const 2216
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2240
    i32.const 840
    i32.const 182
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/assemblyscript-json/decoder/JSONHandler#popArray
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/model/__near_JSONHandler_MyCallbackResult#setString (; 614 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 1696
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setString
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#parseString (; 615 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#peekChar
  i32.const 1168
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.load
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readString
  local.tee $1
  call $assembly/hello/model/__near_JSONHandler_MyCallbackResult#setString
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readAndAssert (; 616 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $2
    call $~lib/string/String#charCodeAt
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readChar
    i32.eq
    i32.eqz
    if
     i32.const 2416
     local.get $1
     call $~lib/string/String.__concat
     local.tee $3
     i32.const 2456
     call $~lib/string/String.__concat
     local.tee $4
     i32.const 840
     i32.const 321
     i32.const 6
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#parseBoolean (; 617 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#peekChar
  i32.const 184
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/FALSE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 0
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#peekChar
  i32.const 160
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/TRUE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 1
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setBoolean
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#parseNumber (; 618 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  local.set $1
  i64.const 1
  local.set $2
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#peekChar
  i32.const 2568
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i64.const -1
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readChar
   drop
  end
  i32.const 0
  local.set $3
  block $break|0
   loop $continue|0
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#peekChar
    i32.le_s
    if (result i32)
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#peekChar
     global.get $~lib/assemblyscript-json/decoder/CHAR_9
     i32.le_s
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readChar
    local.set $4
    local.get $1
    i64.const 10
    i64.mul
    local.set $1
    local.get $1
    local.get $4
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    i32.sub
    i64.extend_i32_s
    i64.add
    local.set $1
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $continue|0
   end
   unreachable
  end
  local.get $3
  i32.const 0
  i32.gt_s
  if
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   local.get $1
   local.get $2
   i64.mul
   call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setInteger
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $assembly/hello/model/__near_JSONHandler_MyCallbackResult#setNull (; 619 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 4376
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.tee $2
   i32.const 0
   local.tee $3
   local.get $2
   i32.load
   local.tee $2
   i32.ne
   if
    local.get $3
    call $~lib/rt/stub/__retain
    drop
    local.get $2
    call $~lib/rt/stub/__release
   end
   local.get $3
   i32.store
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $1
  i32.const 1696
  call $~lib/string/String.__eq
  if
   local.get $0
   i32.load offset=12
   local.tee $3
   i32.const 0
   local.tee $2
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $2
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $2
   i32.store offset=4
   local.get $1
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#setNull
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#parseNull (; 620 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#peekChar
  i32.const 216
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/NULL_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   call $assembly/hello/model/__near_JSONHandler_MyCallbackResult#setNull
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#parseValue (; 621 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#parseObject
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#parseArray
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#parseString
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#parseBoolean
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#parseNumber
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#parseNull
  end
  local.set $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#skipWhitespace
  local.get $1
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#deserialize (; 622 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  i32.const 0
  i32.ne
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
  else   
   local.get $0
   local.tee $4
   i32.const 0
   local.get $1
   call $~lib/assemblyscript-json/decoder/DecoderState#constructor
   local.set $3
   local.get $4
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#parseValue
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 3176
   i32.const 840
   i32.const 100
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/model/MyCallbackResult#decode (; 623 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  local.get $0
  call $assembly/hello/model/__near_JSONHandler_MyCallbackResult#constructor
  local.set $3
  local.get $3
  local.tee $4
  local.get $1
  local.tee $5
  local.get $4
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $5
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $5
  i32.store
  i32.const 0
  local.get $3
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#constructor
  local.set $5
  local.get $3
  local.tee $4
  local.get $5
  local.tee $6
  local.get $4
  i32.load offset=4
  local.tee $4
  i32.ne
  if
   local.get $6
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $6
  i32.store offset=4
  local.get $5
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/model/__near_JSONHandler_MyCallbackResult>#deserialize
  local.get $0
  call $~lib/rt/stub/__retain
  local.set $6
  local.get $3
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $6
 )
 (func $assembly/hello/model/MyCallbackResult.decode (; 624 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  call $assembly/hello/model/MyCallbackResult#constructor
  local.tee $2
  call $~lib/rt/stub/__retain
  local.set $3
  local.get $3
  local.get $0
  local.get $1
  call $assembly/hello/model/MyCallbackResult#decode
  call $~lib/rt/stub/__release
  local.get $3
  local.set $4
  local.get $2
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#get:length (; 625 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#writeBoolean (; 626 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  local.get $1
  if (result i32)
   i32.const 160
   call $~lib/rt/stub/__retain
   local.tee $2
  else   
   i32.const 184
   call $~lib/rt/stub/__retain
   local.tee $3
  end
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#setBoolean (; 627 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#writeKey
  local.get $0
  local.get $2
  call $~lib/assemblyscript-json/encoder/JSONEncoder#writeBoolean
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/nearEntry/encode<bool> (; 628 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $2
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#setBoolean
  local.get $0
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/nearEntry/encode<assembly/hello/model/MyCallbackResult> (; 629 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.eq
  if
   local.get $0
   local.get $2
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $1
   local.get $0
   local.get $2
   call $assembly/hello/model/MyCallbackResult#encode
   call $~lib/rt/stub/__release
  end
  local.get $0
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/model/MyContractPromiseResult#encode (; 630 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.ne
  if (result i32)
   local.get $1
   call $~lib/rt/stub/__retain
  else   
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  end
  local.tee $3
  if (result i32)
   local.get $3
  else   
   unreachable
  end
  call $~lib/rt/stub/__retain
  local.set $3
  local.get $3
  local.get $2
  call $~lib/assemblyscript-json/encoder/JSONEncoder#pushObject
  drop
  local.get $3
  local.get $0
  i32.load8_u
  i32.const 4400
  call $~lib/nearEntry/encode<bool>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=4
  i32.const 1744
  call $~lib/nearEntry/encode<assembly/hello/model/MyCallbackResult>
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/assemblyscript-json/encoder/JSONEncoder#popObject
  local.get $3
  local.set $4
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/nearEntry/encode<assembly/hello/model/MyContractPromiseResult> (; 631 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.eq
  if
   local.get $0
   local.get $2
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $1
   local.get $0
   local.get $2
   call $assembly/hello/model/MyContractPromiseResult#encode
   call $~lib/rt/stub/__release
  end
  local.get $0
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/nearEntry/encode<~lib/array/Array<assembly/hello/model/MyContractPromiseResult>> (; 632 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.eq
  if
   local.get $0
   local.get $2
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $0
   local.get $2
   call $~lib/assemblyscript-json/encoder/JSONEncoder#pushArray
   drop
   block $break|0
    i32.const 0
    local.set $3
    loop $loop|0
     local.get $3
     local.get $1
     call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#get:length
     i32.lt_s
     i32.eqz
     br_if $break|0
     local.get $0
     local.get $1
     local.get $3
     call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__get
     local.tee $4
     i32.const 0
     call $~lib/nearEntry/encode<assembly/hello/model/MyContractPromiseResult>
     call $~lib/rt/stub/__release
     local.get $3
     i32.const 1
     i32.add
     local.set $3
     local.get $4
     call $~lib/rt/stub/__release
     br $loop|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#popArray
  end
  local.get $0
  local.set $4
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $assembly/hello/model/MyCallbackResult#encode (; 633 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.ne
  if (result i32)
   local.get $1
   call $~lib/rt/stub/__retain
  else   
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  end
  local.tee $3
  if (result i32)
   local.get $3
  else   
   unreachable
  end
  call $~lib/rt/stub/__retain
  local.set $3
  local.get $3
  local.get $2
  call $~lib/assemblyscript-json/encoder/JSONEncoder#pushObject
  drop
  local.get $3
  local.get $0
  i32.load
  i32.const 4376
  call $~lib/nearEntry/encode<~lib/array/Array<assembly/hello/model/MyContractPromiseResult>>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=4
  i32.const 1696
  call $~lib/nearEntry/encode<~lib/string/String>
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/assemblyscript-json/encoder/JSONEncoder#popObject
  local.get $3
  local.set $4
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/near-runtime-ts/storage/Storage#setBytes (; 634 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i64)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $3
  local.get $3
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $3
  i32.load offset=4
  i64.extend_i32_u
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $2
  i32.load offset=4
  i64.extend_i32_u
  i64.const 0
  call $~lib/near-runtime-ts/runtime_api/runtime_api.storage_write
  local.set $4
  local.get $3
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/callbackWithName (; 635 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  call $~lib/near-runtime-ts/contract/ContractPromise.getResults
  local.set $1
  local.get $1
  call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#get:length
  call $~lib/array/Array.create<assembly/hello/model/MyContractPromiseResult>
  local.set $2
  block $break|0
   i32.const 0
   local.set $3
   loop $loop|0
    local.get $3
    local.get $1
    call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $2
    local.get $3
    i32.const 0
    call $assembly/hello/model/MyContractPromiseResult#constructor
    local.tee $4
    call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__set
    local.get $2
    local.get $3
    call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__get
    local.tee $6
    local.get $1
    local.get $3
    call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__get
    local.tee $5
    i32.load
    i32.const 1
    i32.eq
    i32.store8
    local.get $2
    local.get $3
    call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__get
    local.tee $7
    i32.load8_u
    if (result i32)
     local.get $1
     local.get $3
     call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__get
     local.tee $8
     i32.load offset=4
     i32.const 0
     i32.ne
     local.set $9
     local.get $8
     call $~lib/rt/stub/__release
     local.get $9
    else     
     i32.const 0
    end
    if (result i32)
     local.get $1
     local.get $3
     call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__get
     local.tee $8
     i32.load offset=4
     call $~lib/typedarray/Uint8Array#get:length
     i32.const 0
     i32.gt_s
     local.set $9
     local.get $8
     call $~lib/rt/stub/__release
     local.get $9
    else     
     i32.const 0
    end
    if
     local.get $2
     local.get $3
     call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__get
     local.tee $9
     local.tee $10
     local.get $1
     local.get $3
     call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__get
     local.tee $8
     i32.load offset=4
     i32.const 0
     call $assembly/hello/model/MyCallbackResult.decode
     local.set $11
     local.get $10
     i32.load offset=4
     call $~lib/rt/stub/__release
     local.get $11
     i32.store offset=4
     local.get $8
     call $~lib/rt/stub/__release
     local.get $9
     call $~lib/rt/stub/__release
    end
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    local.get $4
    call $~lib/rt/stub/__release
    local.get $5
    call $~lib/rt/stub/__release
    local.get $6
    call $~lib/rt/stub/__release
    local.get $7
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  i32.const 8
  i32.const 57
  call $~lib/rt/stub/__alloc
  call $~lib/rt/stub/__retain
  local.set $7
  local.get $7
  local.get $2
  i32.store
  local.get $7
  global.get $~lib/near-runtime-ts/contract/context
  call $~lib/near-runtime-ts/contract/Context#get:contractName
  local.tee $6
  i32.store offset=4
  local.get $7
  call $~lib/rt/stub/__retain
  local.set $5
  local.get $5
  i32.const 0
  i32.const 656
  call $assembly/hello/model/MyCallbackResult#encode
  local.tee $4
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $3
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 4536
  local.get $3
  call $~lib/near-runtime-ts/storage/Storage#setBytes
  local.get $5
  local.set $9
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $9
 )
 (func $assembly/hello/main/__wrapper_callbackWithName (; 636 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  i32.const 0
  call $assembly/hello/main/__near_ArgsParser_callbackWithName#constructor
  local.set $3
  local.get $3
  local.tee $4
  local.get $1
  local.tee $5
  local.get $4
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $5
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $5
  i32.store
  local.get $3
  local.tee $5
  i32.const 0
  local.get $3
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#constructor
  local.set $4
  local.get $5
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $4
  i32.store offset=4
  local.get $3
  i32.load offset=4
  local.get $1
  i32.const 0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<assembly/hello/main/__near_ArgsParser_callbackWithName>#deserialize
  local.get $3
  i32.load offset=12
  call $assembly/hello/main/callbackWithName
  local.set $4
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $5
  local.get $5
  local.get $4
  i32.const 0
  call $~lib/nearEntry/encode<assembly/hello/model/MyCallbackResult>
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $6
  local.get $6
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $6
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $7
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
 )
 (func $~lib/near-runtime-ts/storage/Storage#getBytes (; 637 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/near-runtime-ts/storage/Storage#_internalReadBytes
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $assembly/hello/main/getLastResult (; 638 ;) (type $FUNCSIG$i) (result i32)
  (local $0 i32)
  (local $1 i32)
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 4536
  call $~lib/near-runtime-ts/storage/Storage#getBytes
  local.tee $0
  i32.const 0
  call $assembly/hello/model/MyCallbackResult.decode
  local.set $1
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
 )
 (func $assembly/hello/main/__wrapper_getLastResult (; 639 ;) (type $FUNCSIG$v)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  call $assembly/hello/main/getLastResult
  local.set $0
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $1
  local.get $1
  local.get $0
  i32.const 0
  call $~lib/nearEntry/encode<assembly/hello/model/MyCallbackResult>
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $2
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $2
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $3
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/generateLogs (; 640 ;) (type $FUNCSIG$v)
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 4576
  i32.const 3608
  call $~lib/near-runtime-ts/storage/Storage#setString
  i32.const 4600
  call $~lib/near-runtime-ts/logging/logging.log
  i32.const 4624
  call $~lib/near-runtime-ts/logging/logging.log
 )
 (func $assembly/hello/main/triggerAssert (; 641 ;) (type $FUNCSIG$v)
  i32.const 4648
  call $~lib/near-runtime-ts/logging/logging.log
  i32.const 0
  i32.eqz
  if
   i32.const 4704
   i32.const 952
   i32.const 1011
   i32.const 2
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $start (; 642 ;) (type $FUNCSIG$v)
  call $start:~lib/rt/index-stub
  call $start:~lib/nearEntry
 )
 (func $null (; 643 ;) (type $FUNCSIG$v)
 )
)
