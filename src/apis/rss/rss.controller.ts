import {Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus} from '@nestjs/common';
import { RssService } from './rss.service';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {HttpService} from "@nestjs/axios";
import * as xml2js from "xml2js";
import {RSSModel} from "./models/rss.model";
import {firstValueFrom} from "rxjs";

@ApiTags('RSS')
@ApiBearerAuth()
@Controller({ path: 'rss', version: '1' })
export class RssController {
  constructor(private readonly rssService: RssService,
              private readonly httpService: HttpService) {}

  @Get()
  async findAll() {
    try{
      let xmlData = await firstValueFrom(this.httpService.get('https://www.realclearpolitics.com/index.xml'));
      let parseString = xml2js.parseString;
      const feedData = await new Promise((resolve, reject) => parseString(xmlData.data, (err, result: RSSModel) => {
        console.log(result);
        resolve(result['rss']['channel']);
      }));
      return feedData;
    }catch(err){
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }

  }
}
