import axios from 'axios';
import { apiUrl } from '../assets/constants';

export async function getWeatherData(lat: string, lon: string): Promise<weatherDataType> {
    const urlString: string = apiUrl + lat + '&' + lon;
    return axios.get(urlString).then(response => {
        const { data }: { data: weatherDataType } = response;
        console.log(data);
        return data;
    });
}
