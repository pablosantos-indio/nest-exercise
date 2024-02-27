import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get(':id')
    findOne(@Param('id') id: string): object {
        return { userId: id };
    }

    @Get()
    findAll(): object[] {
        return [{ userId: '1', userName: 'John Doe' }];
    }

    @Post()
    add(@Body() user: any): string {
        return 'Usuário adicionado';
    }

    @Delete(':id')
    remove(@Param('id') id: string): string {
        return `Usuário ${id} removido`;
    }
}
