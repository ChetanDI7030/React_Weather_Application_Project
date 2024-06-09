import { DateTime } from "luxon"

const api_key = '895284fb2d2c50a520ea537456963d9c'
const baseURL = 'https://api.openweathermap.org/data/2.5'

const getWeatherData = (infoType,searchParams) =>{
    const url = new URL(baseURL +'/' + infoType)
    url.search = new URLSearchParams({...searchParams,appid:api_key})
    console.log(url)
    return fetch(url).then(res => res.json().then(data => data))
}
const formateForcastWeather = (data) =>{
    let {timezone,daily,hourly} = data;
    daily = daily.slice(1,6).map(d => {
        return {
            title : formateToLocalTime(Number(d.dt),timezone,'ccc'),
            temp : d.temp.day,
            icon: d.weather[0].icon
        }
    });
    hourly = hourly.slice(1,6).map(d => {
        return {
            title : formateToLocalTime(Number(d.dt),timezone,'hh:mm a'),
            temp : d.temp,
            icon: d.weather[0].icon
        }
    })
    return {timezone,daily,hourly}
}
const formateCurrentWeather = (data) =>{
const {
    coord:{lat,lon},
    main:{temp,temp_min,temp_max,feels_like,humidity},
    name,
    dt,
    sys:{country,sunrise,sunset},
    weather,
    wind:{speed,deg}
} = data
const {main: details, icon} = weather[0]
return {lat,lon,temp,temp_min,temp_max,feels_like,humidity,name,dt,country,sunrise,sunset,details,icon,speed,deg}
}

const getFormatedWeatherData = async(searchParams) =>{
    const formatedCurrentWeather = await getWeatherData('weather',searchParams).then(data => formateCurrentWeather(data))

    const {lat,lon} = formatedCurrentWeather

    const formatedForcastWeather = await getWeatherData('onecall',{lat,lon,exclude:'current,minutely,alerts',units:searchParams.unit}).then(formateForcastWeather)

    return {formatedCurrentWeather,formatedForcastWeather}
}

const formateToLocalTime = (secs,zone,format="cccc, dd LLL yyyy' | Local Time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}.png`

export default getFormatedWeatherData;

export {iconUrlFromCode,formateToLocalTime}