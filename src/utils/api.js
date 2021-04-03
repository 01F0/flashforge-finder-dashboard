import axios from 'axios';

export var getStatus = async function (ip_address)
{
  try
  {
    const data = await axios.get(process.env.REACT_APP_BACKEND_ENDPOINT + ip_address + '/status');
    return data.data;
  } catch (err)
  {
    console.error('Failed to get info from meter: ', err);
  }
};

export var getInfo = async function (ip_address)
{
  try
  {
    const data = await axios.get(process.env.REACT_APP_BACKEND_ENDPOINT + ip_address + '/info');
    return data.data;
  } catch (err)
  {
    console.error('Failed to get info from meter: ', err);
  }
};

export var getProgress = async function (ip_address)
{
  try
  {
    const data = await axios.get(process.env.REACT_APP_BACKEND_ENDPOINT + ip_address + '/progress');
    return data.data;
  } catch (err)
  {
    console.error('Failed to get info from meter: ', err);
  }
};

export var getTemp = async function (ip_address)
{
  try
  {
    const data = await axios.get(process.env.REACT_APP_BACKEND_ENDPOINT + ip_address + '/temp');
    return data.data;
  } catch (err)
  {
    console.error('Failed to get info from meter: ', err);
  }
};
