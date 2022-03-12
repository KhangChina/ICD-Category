import { Injectable } from '@nestjs/common';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import axios, { AxiosRequestConfig } from 'axios';

@Injectable()
export class ChapterService {

  async findAll() {
    let paramICD = `{"func":"ajaxExecuteQueryO","params":["","ICD-10.012"],"options":[{"name":"[L0]","value":""},{"name":"[V0]","value":"2017"},{"name":"[F0]","value":""}],"uuid":"thu@nnc"}`
    let encode = (Buffer.from(paramICD).toString('base64'));
    const config : AxiosRequestConfig = {
      method: 'post',
      url: process.env.HOST_API_ICD,
      headers: { 
        'Content-Type': 'text/plain', 
      },
      data : encode
    };
     const dataReponse = await axios (config)
    return dataReponse.data;
  }

  async findOne(NODE_ID: string) {
    let paramICD = `{"func":"ajaxExecuteQueryO","params":["","ICD-10.009"],"options":[{"name":"[L0]","value":""},{"name":"[V0]","value":"2017"},{"name":"[F0]","value":"${NODE_ID}"}],"uuid":"thu@nnc"}`
    let encode = (Buffer.from(paramICD).toString('base64'));
    const config : AxiosRequestConfig = {
      method: 'post',
      url: process.env.HOST_API_ICD,
      headers: { 
        'Content-Type': 'text/plain', 
      },
      data : encode
    };
     const dataReponse = await axios (config)
    return dataReponse.data;
  }
}
