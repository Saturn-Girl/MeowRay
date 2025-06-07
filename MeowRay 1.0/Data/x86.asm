[BITS 64]

section .text
	global _start

section .data
	index dq 7

_start:
	mov rax,[index]
	mov rdi, 7

	push rax
	push rdi

	mov rax, 60         ; syscall: exit
    xor rdi, rdi        ; status 0
    syscall

