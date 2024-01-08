import {AxiosResponse} from 'axios';
import {httpRequest} from './request';

export async function moveForward(): Promise<any> {
  try {
    const response: AxiosResponse<never, never> = await httpRequest.get(
      '/move-forward'
    );

    console.log('Response: ', response);

    return {};
  } catch (e) {
    console.log(`Something went wrong: ${e}`);
  }
}
