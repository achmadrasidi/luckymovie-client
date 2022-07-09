import useSWR from "swr";
import axios from "axios";

export const getSoldSeat = (cinema_id, movie_id)=>{
  return axios.get(`http://localhost:5000/cinema/seat?cinema_id=${cinema_id}&movie_id=${movie_id}`)
}

export const doSignUp = (body) => {
    return axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/auth/new`, body)
}
const fetcher = (url, token) =>
  axios
    .get(url, { headers: { "x-access-token": `${token}` } })
    .then((res) => res.data.data);

export const doLogin = (body) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/auth/`, body);
};

export const GetUser = (token) => {
  const { data, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_API_HOST}/user`, token],
    fetcher,
    { refreshInterval: 1000 }
  );
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export const GetUserHistory = (token) => {
  const { data, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_API_HOST}/transaction/history`, token],
    fetcher,
    { refreshInterval: 1000 }
  );
  return {
    history: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const getMoviesHome = () => {
  const URL = `${process.env.NEXT_PUBLIC_API_HOST}/movies`
  return axios.get(URL)
}
