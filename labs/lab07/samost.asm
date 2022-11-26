%include 'in_out.asm' ; подключение внешнего файла
SECTION .data
vyrazhenie: DB '(1/3*x+5)*7: ',0h
vvod: DB 'Give me x, please: ',0h
resultat: DB 'Rezult is: ', 0h
SECTION .bss
    buf1: RESB 80

SECTION .text
    GLOBAL _start
_start:
    mov eax,vyrazhenie
    call sprintLF
    mov eax,vvod
    call sprint
    mov ecx,buf1
    mov edx,80
    call sread
    
    mov eax,resultat
    call sprint
    
    xor eax, eax
    mov eax, buf1
    call atoi
    xor edx, edx
    mov ebx,3
    div ebx
    add eax,5
    mov ebx,7
    mul ebx
    
    call iprintLF
    
    call quit