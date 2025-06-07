[BITS 32]

section .text
	global _start
section .data
	index dd 6


_start:
	mov eax,7
	mov ecx,[index]

	push eax
	push ecx

	mov eax, 1      ; syscall number for sys_exit in 32-bit Linux
    xor ebx, ebx    ; exit code 0
    int 0x80        ; make syscall


