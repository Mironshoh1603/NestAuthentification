import {
  Controller,
  Get,
  Param,
  Query,
  Res,
  Post,
  Req,
  Body,
} from '@nestjs/common';

@Controller('test')
export class TestController {
  constructor() {}
  @Get(':id')
  getString(@Param('id') id: number, @Query('name') query, @Res() res): any {
    console.log(id, query);
    res.status(200).json({
      name: 'New proejct',
    });
  }
  @Post()
  createNew(@Req() req, @Body() body) {
    console.log(body);
    return 1;
  }
  // @Post()
}
