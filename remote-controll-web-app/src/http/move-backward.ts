import {AxiosResponse} from 'axios';
import {httpRequest} from './request';

export async function moveBackward(): Promise<any> {
  try {
    const response: AxiosResponse<never, never> = await httpRequest.get(
      '/move-backward'
    );

    console.log('Response: ', response);

    return {};
  } catch (e) {
    console.log(`Something went wrong: ${e}`);
  }
}
