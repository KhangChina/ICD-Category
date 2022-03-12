import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import axios, { AxiosRequestConfig } from 'axios';
@Injectable()
export class CategoriesService {
  async findOne(MA: string) {
    let paramICD = `{"func":"ajaxExecuteQueryO","params":["","ICD-10.012"],"options":[{"name":"[L0]","value":""},{"name":"[V0]","value":"2017"},{"name":"[F0]","value":"${MA}"}],"uuid":"thu@nnc"}`
    let encode = (Buffer.from(paramICD).toString('base64'));
    const config: AxiosRequestConfig = {
      method: 'post',
      url: process.env.HOST_API_ICD,
      headers: {
        'Content-Type': 'text/plain',
      },
      data: encode
    };
    const dataReponse = await axios(config)
    return dataReponse.data;
  }
}
